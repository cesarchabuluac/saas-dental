<template>
    <div>
        <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
            <template #overlay>
                <div class="d-flex align-items-center">
                    <b-spinner small type="grow" variant="secondary" />
                    <b-spinner type="grow" variant="dark" />
                    <b-spinner small type="grow" variant="secondary" />
                </div>
            </template>

            <b-card no-body>
                <div class="m-2">
                    <b-row>
                        <b-col cols="12">
                            <h5>{{ $t('patients.statistics.new_statistics') }}</h5>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" md="2">
                            <label>{{ $t('start_at') }}</label>
                            <flat-pickr v-model="filter.start" class="form-control" :config="{ dateFormat: 'Y-m-d' }"
                                placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="2">
                            <label>{{ $t('end_at') }}</label>
                            <flat-pickr v-model="filter.end" class="form-control" :config="{
                                minDate: filter.start,
                                dateFormat: 'Y-m-d'
                            }" placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="8">
                            <div class="demo-inline-spacing">
                                <b-button size="sm" @click="getPatients" variant="primary" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="SearchIcon" />
                                    {{ $t("button_filter") }}
                                </b-button>

                                <b-button size="sm" @click="downloadReport" variant="outline-warning"
                                    :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="DownloadIcon" />
                                    {{ $t('download') }}
                                </b-button>

                                <b-button size="sm" @click="$router.push({ name: 'home' })" variant="outline-secondary"
                                    :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="ChevronLeftIcon" />
                                    {{ $t("back_to_dashboard") }}
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-card>

            <b-card no-body>
           
                <div class="table-responsive">
                    <b-table id="refPatientsListTable" ref="refPatientsListTable" class="position-relative table-small text-small small"
                        :items="patients" responsive :fields="column" primary-key="id" show-empty
                        :empty-text="$t('datatables.sZeroRecords')" small
                        :sticky-header="true"
                        :no-border-collapse="true"
                        >

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

                        <template #cell(email)="data">
                            {{ data.item.email }}
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
                <div v-if="totalPatient > 0" class="mx-2 mb-2">
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
import axios from 'axios'
import moment from 'moment'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import {
    BCard, BCardText, BTable, BRow,
    BCol,
    BCardBody,
    BOverlay,
    BSpinner,
    BBadge,
    BButton,
    BPagination,
    BLink,
} from "bootstrap-vue";
import store from "@/store";
import { saveAs } from 'file-saver';
import PatientProvider from "@/providers/Patients";
import { DownloadIcon } from "vue-feather-icons";
const PatientResource = new PatientProvider();

export default {
    name: "PatientStatistics",
    components: {
        BCard,
        BCardText,
        BTable,
        BRow,
        BCol,
        BCardBody,
        BOverlay,
        BSpinner,
        BBadge,
        BButton,
        BPagination,
        BLink,

        flatPickr,
    },
    data() {
        return {
            loading: false,
            patients: [],
            column: [
                {
                    key: "name",
                    label: this.$t('patients.table.name'),
                },
                {
                    key: "email",
                    label: this.$t('patients.table.email'),
                },
                {
                    key: "cellphone",
                    label: this.$t('patients.table.cellphone'),
                },
                {
                    key: "phone",
                    label: this.$t('patients.table.phone'),
                },
                {
                    key: "created_at",
                    label: this.$t('patients.table.created_at'),
                },
                {
                    key: "pending",
                    label: this.$t('appointments.table_state_pending'),
                },
                {
                    key: "confirmed",
                    label: this.$t('appointments.table_state_confirmed'),
                },
                {
                    key: "canceled",
                    label: this.$t('appointments.table_state_canceled'),
                },
                {
                    key: "assisted",
                    label: this.$t('appointments.table_state_assisted'),
                },
                {
                    key: "unassisted",
                    label: this.$t('appointments.table_state_unassisted'),
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
            filter: {
                start: moment().startOf('month').format('YYYY-MM-DD'),
                end: moment().format('YYYY-MM-DD'),
                name: null,
            },
            perPageOptions: [10, 25, 50, 100],
            perPage: 100,
            currentPage: 1,
            totalPatient: 0,
            from: 0,
            to: 0,
            pagination: {},
            offset: 3,
            isMobile: false,
        }
    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
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
    },
    async mounted() {

        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        await this.getPatients()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isMobile = window.innerWidth < 576;
        },
        async getPatients() {

            const query = {
                ...this.filter,
                perPage: this.perPage,
                page: this.currentPage,
                isReport: true,
            }

            this.loading = true
            const { data } = await PatientResource.index(query)
            this.loading = false
            this.patients = data.data
            this.totalPatient = data.total;
        },
        async downloadReport() {

            const query = {
                ...this.filter,
                isDownload: true,
            }

            try {

                this.loading = true
                axios.get(`/api/patients`, { responseType: 'blob', params: { ...query } }).then(response => {
                    this.loading = false
                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                    saveAs(blob, `${this.$t('patients.statistics.export_name')}-${this.filter.start}-${this.filter.end}.xlsx`);
                }).catch(e => {
                    this.loading = false
                    this.handleResponseErrors(e)
                });
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }

            // const name = `Estadisticas-Pacientes-${this.currentDate('MMMM')}`
            // var table = document.getElementById("refPatientsListTable");
            // var html = table.outerHTML;
            // var url = 'data:application/vnd.ms-excel,' + escape(html); // Set your html table into url
            // let elem = document.createElement("a");
            // elem.setAttribute("href", url);
            // elem.setAttribute("download", `${name}.xls`); // Choose the file name
            // elem.click();
            // return false;
        }
    },
    watch: {
        currentPage(value) {
            this.getPatients();
        },
        perPage(value) {
            this.getPatients();
        },
    }
};
</script>

<style lang="scss" scoped>
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

.b-table-sticky-header {
    overflow-y: auto;
    // max-height: 350px;
    max-height: calc(100vh - 200px)!important;
}
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
</style>
