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
                <b-card-body>
                    <b-row>
                        <b-col cols="12" md="12" class="p-1">
                            <b-form-group :label="$t('filters.title')" label-cols="12" label-class="font-weight-bolder"
                                label-align="left">
                                <b-form-radio-group id="radio-group-1" v-model="filter_by" :options="optionsFilters"
                                    :reduce="option => option.value" name="radio-options" class="groupselect">
                                </b-form-radio-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="2">
                            <label>{{ $t('start_at') }}</label>
                            <flat-pickr v-model="filter.start" class="form-control flatpickr-small" :config="{ dateFormat: 'Y-m-d' }"
                                placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="2">
                            <label>{{ $t('end_at') }}</label>
                            <flat-pickr v-model="filter.end" class="form-control flatpickr-small" :config="{
                                minDate: filter.start,
                                dateFormat: 'Y-m-d'
                            }" placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="3">
                            <label>{{ $t('branch_office') }} </label>
                            <v-select v-model="filter.brach_id" :options="branchs"
                                label="name" :reduce="option => option.id"
                                class="select-size-sm"  :clearable="true" :searchable="true"
                                :placeholder="$t('branch_office_placeholder')">
                            </v-select>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('search_by')" label-for="add-guests">
                                <b-form-input size="sm" v-model="filter.name" id="add-guests" :placeholder="$t('budgets.filter_placeholder')"
                                     />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="demo-inline-spacing">
                                <b-button size="sm" @click="filterData" variant="outline-primary"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="SearchIcon" />
                                    {{ $t("button_filter") }}
                                </b-button>

                                <b-button size="sm" v-if="budgets.length" @click="donwloadBudget" variant="outline-success"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="DownloadIcon" />
                                    {{ $t("button_download") }}
                                </b-button>

                                <b-button size="sm" v-if="filter.start" @click="clearFilter" variant="outline-danger"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="XIcon" />
                                    {{ $t("button_clear_filter") }}
                                </b-button>

                                <b-button size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-secondary"
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
                    <b-table ref="refPaymentListTable" striped hover :items="budgets" :fields="columns" responsive
                        primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')" class="position-relative table-small text-small small"
                        :current-page="currentPage" busy.sync="loading" stacked="md" small>
                        
                        <!-- Label -->
                        <template #cell(label)="data">
                            <b-link @click="data.toggleDetails" class="text-wrap" :id="`invoice-row-${data.item.id}-detail-icon`"
                                v-b-tooltip.hover :title="$t('budgets.options_show_detail_tooltip')">
                                {{ data.item.label }}
                            </b-link>
                        </template>

                        <template #cell(name)="data">
                            {{ data.item.name || data.item.label }}
                        </template>

                        <template #cell(branch)="data">
                            <span v-if="!data.item.branch.is_active" class="text-danger text-decoration-line-through">
                                {{ data.item.branch.name }}
                            </span>
                            <span v-else>
                                {{ data.item.branch.name }}
                            </span>
                        </template>

                        <!-- Patient -->
                        <template #cell(patient)="data">
                            <template v-if="canAccess('patients.budget')">
                                <div v-if="canAccess('patients.show')">
                                    <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.patient.id }, }"
                                        class="font-weight-bold d-block text-wrap">
                                        {{ data.item.patient.full_name }}
                                    </b-link>
                                </div>
                                <div v-else>
                                    {{ data.item.patient.full_name }}
                                </div>
                                <small class="text-muted">{{ data.item.patient.email }}<br>
                                    {{ $t('patients.document_type') }} ({{ data.item.patient.document_type }}): {{ data.item.patient.rut }}
                                </small>
                            </template>
                            <template v-else>
                                <span class="text-wrap">
                                    <b-media vertical-align="center">
                                        <template #aside>
                                            <b-avatar size="32" :src="data.item.patient.has_media ? data.item.patient.avatar : null"
                                                :text="avatarText(data.item.patient.name)" :variant="`light-primary`" />
                                        </template>
                                        <span class="font-weight-bold d-block text-wrap">
                                            {{ data.item.patient.full_name }}
                                        </span>
                                        <small class="text-muted">{{ data.item.patient.email
                                        }}<br>{{ data.item.patient.document_type }}: {{ data.item.patient.rut }}</small>
                                    </b-media>
                                </span>
                            </template>
                        </template>


                        <!-- Column: created at -->
                        <template #cell(created_at)="data">
                            <span class="text-capitalize">{{ formatDateTime(data.item.created_at) }}</span>
                        </template>

                        <!-- Column: Approved -->
                        <template #cell(approved)="data">
                            <b-badge pill :variant="resolveStatusBadge(data.item.approved)" class="text-capitalize">
                                {{ formatActive(data.item.approved) }}
                            </b-badge>
                        </template>

                        <!-- Column: total  -->
                        <template #cell(total)="data">
                            {{ formatPrice(data.item.total) }}
                        </template>

                        <template #cell(total_paid)="data">
                            {{ formatPrice(data.item.total_paid) }}
                        </template>

                        <template #cell(total_debt)="data">
                            {{ formatPrice(data.item.total_debt) }}
                        </template>
                    </b-table>
                </div>


                <!-- Pagination -->
                <div v-if="budgets.length > 0" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalBudgets" :per-page="perPage"
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
    BFormRadioGroup, BFormRadio
} from 'bootstrap-vue'
import axios from 'axios'
import store from '@/store'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import vSelect from "vue-select";
import Ripple from 'vue-ripple-directive'
import "animate.css";
import { saveAs } from 'file-saver';

import BudgetProvider from "@/providers/Budgets";
const BudgetResource = new BudgetProvider();

import BranchProvider from "@/providers/BranchOffices";
const BranchResource = new BranchProvider();

export default {
    name: 'ReportBudgets',
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
        BFormRadioGroup,
        BFormRadio,
    },
    data() {
        return {
            loading: false,
            budgets: [],
            columns: [
                {
                    key: "label",
                    label: this.$t("budgets.table_number"),
                },
                {
                    key: 'name',
                    label: this.$t('budgets.table_budget_name')
                },
                {
                    key: "patient",
                    label: this.$t("budgets.table_patient_name"),
                },
                {
                    key: "branch",
                    label: this.$t("budgets.table_branch_office"),
                },
                {
                    key: "total",
                    label: this.$t("budgets.table_action_total"),
                }, 
                {
                    key: "total_paid",
                    label: this.$t("budgets.table_action_paid"),
                }, 
                {
                    key: "total_debt",
                    label: this.$t("budgets.table_action_debt"),
                }, 
                {
                    key: "created_at",
                    label: this.$t("budgets.table_created_at"),
                },
                {
                    key: "approved",
                    label: this.$t("budgets.table_approved"),
                },
                            
            ],
            optionsFilters: [
                { value: 'approved', text: this.$t('budgets.status.approved') },
                { value: 'not_approved', text: this.$t('budgets.status.not_approved') },
                { value: 'all', text: this.$t('budgets.status.all') },
            ],
            branchs: [],            
            filter_by: 'all',
            perPageOptions: [10, 25, 50, 100],
            perPage: 100,
            currentPage: 1,
            totalBudgets: 0,
            sortBy: "date",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            pagination: {},
            offset: 3,
            critery: "name",
            search: "",
            donwload: false,
            opacity: .75,
            filter: {
                start: null,
                end: null,
                name: null,                
            },
            isMobile: false,
            isFilterApplied: false,
            userRoles: store.getters['auth/getUser'].roles.map(role => role.id)
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.budgets);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalBudgets,
            };
        },
        isProfessional() {
            return this.userRoles.contains(4)
        },
    },
    created() {
        if (store.getters['auth/getLocale'] === "es") {
            flatpickr.localize(Spanish);
        }
    },
    async mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        await this.getBranchs()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        async getBranchs() {
            try {
                this.loading = true
                const { data } = await BranchResource.index({isAll: true})
                if (data.success) {
                    this.branchs = data.data
                }                
            }catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }finally {
                this.loading = false
            }
        },
        handleResize() {
            this.isMobile = window.innerWidth < 576;
        },
        async donwloadBudget() {

            const query = {
                ...this.filter,
                isDownload: true,
            }

            try {

                this.loading = true
                axios.get(`/api/budgets`, { responseType: 'blob', params: { ...query } }).then(response => {
                    this.loading = false
                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                    saveAs(blob, `${this.$t('reports.budgets.excel_name')}-${this.filter.start}-${this.filter.end}.xlsx`);

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
                this.danger(this.$t('filters.required_description'), 'Error')
                return false
            }

            try {

                const query = {
                    ...this.filter,
                    search: this.filter.name,
                    filter_by: this.filter_by,
                    perPage: this.perPage,
                    page: this.currentPage,
                }

                this.isFilterApplied = true
                this.loading = true
                const { data } = await BudgetResource.getList(query)
                this.loading = false
                this.budgets = data.data;
                this.totalBudgets = data.total;

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        clearFilter() {
            this.filter = {}
            this.isFilterApplied = false
            this.budgets = []

        },
    },
    watch: {
        currentPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            // this.filterData();
        },
        perPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            // this.filterData();
        },
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';

@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
    .dark-layout & {
        background: $theme-dark-body-bg !important;
    }
}

.flatpickr-small .flatpickr-input {
    /*font-size: 8px!important; /* Ajusta el tamaño del texto del input */
    padding: 5px; /* Ajusta el padding del input */
    /*width: 120px; /* Ajusta el ancho del input */
}

.flatpickr-input {
    /*width: 150px!important; /* Ajusta el ancho del input */
    height: 30px!important; /* Ajusta la altura del input */
    /*font-size: 7px!important; /* Ajusta el tamaño del texto del input */
}
</style>