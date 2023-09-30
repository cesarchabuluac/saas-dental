<template>
    <div>
        <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" :opacity="opacity">
            <template #overlay>
                <div class="d-flex align-items-center">
                    <b-spinner small type="grow" variant="secondary" />
                    <b-spinner type="grow" variant="dark" />
                    <b-spinner small type="grow" variant="secondary" />
                </div>
            </template>

            <b-card no-body>
                <b-card-header class="pb-50">
                    <h5>{{ $t('filters.title') }}</h5>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col md="12">
                            <b-form-group label-for="with_trashed">
                                <b-form-checkbox id="with_trashed" v-model="filter.with_trashed" name="with_trashed">
                                    {{ $t('reports.patients.with_trashed') }}
                                </b-form-checkbox>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="mt-2">
                        <b-col cols="12" md="3">
                            <label>{{ $t('start_at') }}</label>
                            <flat-pickr v-model="filter.start" class="form-control" :config="{ dateFormat: 'Y-m-d' }"
                                placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="3">
                            <label>{{ $t('end_at') }}</label>
                            <flat-pickr v-model="filter.end" class="form-control" :config="{
                                minDate: filter.start,
                                dateFormat: 'Y-m-d'
                            }" placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="6">
                            <b-form-group :label="$t('patients.patient')" label-for="add-patient">
                                <b-form-input v-model="filter.name" class="d-inline-block _mr-1"
                                    :placeholder="$t('patients.search_options')" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="demo-inline-spacing">
                                <b-button @click="filterData" variant="outline-primary"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="SearchIcon" />
                                    {{ $t("button_filter") }}
                                </b-button>

                                <b-button v-if="patients.length" @click="donwloadPatient" variant="outline-success"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="DownloadIcon" />
                                    {{ $t("download") }}
                                </b-button>

                                <b-button v-if="filter.start" @click="clearFilter" variant="outline-danger"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="XIcon" />
                                    {{ $t("button_clear_filter") }}
                                </b-button>

                                <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-secondary"
                                    :class="{ 'btn-block': isMobile }" @click="$router.back()">
                                    <feather-icon icon="ChevronLeftIcon" />
                                    {{ $t('back') }}
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
            <b-card no-body class="mb-0">
                <div class="table-responsive">
                    <b-table ref="refPatientListTable" striped hover :items="patients" :fields="columns" responsive
                        primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')" class="position-relative"
                        :current-page="currentPage" busy.sync="loading" stacked="md">

                        <!-- Column: name -->
                        <template #cell(name)="data">
                            <div v-if="canAccess('patients.show')">
                                <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.id }, }"
                                    class="font-weight-bold d-block text-wrap">
                                    {{ data.item.patient_name }}
                                </b-link>
                            </div>
                            <div v-else>
                                {{ data.item.patient_name }}
                            </div>
                            <small class="text-muted">{{ data.item.email }}<br>{{ $t('patients.document_type') }}
                                ({{ data.item.document_type }}): {{ data.item.rut }}</small>
                        </template>

                        <template #cell(cellphone)="data">
                            {{ data.item.cellphone }}
                        </template>
                        <template #cell(phone)="data">
                            {{ data.item.phone }}
                        </template>
                        <template #cell(created_at)="data">
                            {{ dateFormat(data.item.created_at, 'DD/MM/YYYY - H:mm:ss a') }}
                        </template>

                        <template #cell(pending)="data">
                            <b-badge :variant="`warning`">{{ data.item.num_pending }}</b-badge>
                        </template>

                        <template #cell(confirmed)="data">
                            <b-badge :variant="`success`">{{ data.item.num_confirmed }}</b-badge>
                        </template>

                        <template #cell(assisted)="data">
                            <b-badge :variant="`primary`">{{ data.item.num_assisted }}</b-badge>
                        </template>

                        <template #cell(unassisted)="data">
                            <b-badge :variant="`dark`">{{ data.item.num_unassisted }}</b-badge>
                        </template>

                        <template #cell(canceled)="data">
                            <b-badge :variant="`danger`">{{ data.item.num_canceled }}</b-badge>
                        </template>

                        <template #cell(approved)="data">
                            {{ data.item.num_approved }}
                        </template>

                        <template #cell(unapproved)="data">
                            {{ data.item.num_unapproved }}
                        </template>

                        <!-- Column: Debt -->
                        <template #cell(total_debt)="data">
                            {{ formatPrice(data.item.total_cost) }}
                        </template>

                        <!-- Column: Paid -->
                        <template #cell(total_paid)="data">
                            {{ formatPrice(data.item.total_paid) }}
                        </template>

                        <!-- Column: Balance -->
                        <template #cell(total_balance)="data">
                            {{ formatPrice(data.item.total_debt) }}
                        </template>

                        <!-- Column: Status -->
                        <template #cell(status)="data">
                            <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`"
                                class="text-capitalize">
                                {{ resolveStatusTranslate(data.item.deleted_at) }}
                            </b-badge>
                        </template>
                    </b-table>
                </div>


                <!-- Pagination -->
                <div v-if="patients.length > 0" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalPatient" :per-page="perPage"
                                    size="lg" />
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-card>
        </b-overlay>
    </div>
</template>
<script>
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox,
    BFormGroup, BFormInput, BModal, VBModal, BMediaAside, BMedia, BAvatar, BImg, BCardHeader,
    BMediaBody, BFormTextarea, BCardTitle, BBadge, BPagination, BTooltip, VBTooltip,
} from 'bootstrap-vue'
import axios from 'axios';
import router from "@/router";
import store from '@/store'
import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import vSelect from "vue-select";
import Ripple from 'vue-ripple-directive'
import "animate.css";
import { saveAs } from 'file-saver';
import UserProvider from "@/providers/Users";
import AppointmentProvider from "@/providers/Appointments";
import PatientProvider from "@/providers/Patients";

const UserResource = new UserProvider();
const AppointmentResource = new AppointmentProvider();
const PatientResource = new PatientProvider();

if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
    localize(store.state.auth.setting['language'] === "es");
}
export default {
    name: 'ReportPatient',
    directives: {
        Ripple,
        'b-modal': VBModal,
        'b-toggle': VBToggle,
    },
    components: {
        BRow,
        BCol,
        BCard,
        BCardBody,
        BCardText,
        BButton,
        BAlert,
        BLink,
        BOverlay,
        BSpinner,
        BTable,
        BTableLite,
        vSelect,
        flatPickr,
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal,
        BMediaAside,
        BMedia,
        BAvatar,
        BImg,
        BCardHeader,
        BMediaBody,
        BFormTextarea,
        BCardTitle,
        VBModal,
        BBadge,
        BPagination,
        BTooltip,
        VBTooltip,
        BFormCheckbox,
    },
    data() {
        return {
            loading: false,
            patients: [],
            columns: [
                {
                    key: "name",
                    label: this.$t("patients.table.name"),
                },
                {
                    key: "phone",
                    label: this.$t("patients.table.phone"),
                },
                {
                    key: "created_at",
                    label: this.$t('patients.table.created_at'),
                },
                {
                    key: "pending",
                    label: this.$t('patients.table.appointment_pending'),
                },
                {
                    key: "confirmed",
                    label: this.$t('patients.table.appointment_confirmed'),
                },
                {
                    key: "canceled",
                    label: this.$t('patients.table.appointment_cancelled'),
                },
                {
                    key: "assisted",
                    label: this.$t('patients.table.appointment_asissted'),
                },
                {
                    key: "unassisted",
                    label: this.$t('patients.table.appointment_unasissted'),
                },
                {
                    key: "approved",
                    label: this.$t('patients.table.budget_approved'),
                },
                {
                    key: "unapproved",
                    label: this.$t('patients.table.budget_pending'),
                },
                {
                    key: "total_debt",
                    label: this.$t("patients.table.debt"),
                },
                {
                    key: "total_paid",
                    label: this.$t("patients.table.paid"),
                },
                {
                    key: "total_balance",
                    label: this.$t("patients.table.balance"),
                },
                {
                    key: 'last_paid',
                    label: this.$t('patients.table.last_payment')
                },
                {
                    key: 'status',
                    label: this.$t("patients.table.status"),
                },
            ],
            perPageOptions: [10, 25, 50, 100],
            perPage: 100,
            currentPage: 1,
            totalPatient: 0,
            sortBy: "date",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            pagination: {},
            offset: 3,
            critery: "reference",
            search: "",
            donwload: false,
            opacity: .75,
            filter: {
                start: null,
                end: null,
                name: null,
            },
            isMobile: false,
            isFilterApplied: false
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.patients);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalPatient,
            };
        },
        isProfessional() {
            return store.state.auth.user.roles[0].id === 4
        },
        user_id() {
            return store.state.auth.user.id
        }
    },
    async mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isMobile = window.innerWidth < 576;
        },
        async donwloadPatient() {

            const query = {
                ...this.filter,
                isDownload: true,
            }

            try {

                this.loading = true
                axios.get(`/api/patients`, { responseType: 'blob', params: { ...query } }).then(response => {
                    this.loading = false

                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                    saveAs(blob, `${this.$t('reports.patients.excel_name')}-${this.filter.start}-${this.filter.end}.xlsx`);

                }).catch(e => {
                    this.loading = false
                    this.handleResponseErrors(e)
                });
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        async filterData() {

            if (!this.filter.start && !this.filter.end && !this.filter.name) {
                this.danger(this.$t('report_filter_required'), 'Error')
                return false
            }

            try {

                const query = {
                    ...this.filter,
                    perPage: this.perPage,
                    page: this.currentPage,
                    isReport: true,
                }

                this.isFilterApplied = true
                this.loading = true
                const { data } = await PatientResource.index(query)
                this.loading = false
                this.patients = data.data;
                this.totalPatient = data.total;

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        clearFilter() {
            this.filter = {}
            this.isFilterApplied = false
            this.patients = []
            // this.totalPatient = 0
            // this.currentPage = 0

        },
    },
    watch: {
        currentPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            this.filterData();
        },
        perPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            this.filterData();
        },
    },
}
</script>

<style lang="scss" scoped>
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';

@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
    .dark-layout & {
        background: $theme-dark-body-bg !important;
    }
}
</style>