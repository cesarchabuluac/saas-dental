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
                                    :reduce="option => option.value" name="radio-options" class="groupselect"
                                    @change="filterData"></b-form-radio-group>
                            </b-form-group>
                        </b-col>
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

                        <b-col cols="12" md="3">
                            <b-form-group :label="$t('payments.way_pay')" label-for="add-guests">
                                <v-select v-model="filter.method" :options="paymentMethods"
                                    label="label" :reduce="option => option.value" input-id="add-method"
                                    :placeholder="$t('payments.way_pay_placeholder')">
                                </v-select>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="demo-inline-spacing">
                                <b-button @click="filterData" variant="outline-primary"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="SearchIcon" />
                                    {{ $t("button_filter") }}
                                </b-button>

                                <b-button v-if="payments.length" @click="donwloadPayment" variant="outline-success"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="DownloadIcon" />
                                    {{ $t("button_download") }}
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
                    <b-table ref="refPaymentListTable" striped hover :items="payments" :fields="columns" responsive
                        primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')" class="position-relative"
                        :current-page="currentPage" busy.sync="loading" stacked="md">
                        <!-- Column: payment_id -->
                        <template #cell(payment_id)="data">
                            <b-link v-if="canAccess('payments.preview')" :to="{ name: 'payments-budgets-preview', params: { id: data.item.budget_id, payment_id: data.item.id, model: 'apps-payments-view' }}" class="font-weight-bold">
                                #{{ data.item.id }}
                            </b-link>
                            <b-link v-else class="font-weight-bold">
                                #{{ data.item.id }}
                            </b-link>
                        </template>

                        <!-- Column: Budget -->
                        <template #cell(budget)="data">
                            <p>
                                <b-link v-if="canAccess('budgets.show')" :to="{ name: 'apps-budgets-show', params: { id: data.item.budget.id }}" class="font-weight-bold">
                                    {{ (data.item.budget.label) }}
                                </b-link>
                                <b-link v-else class="font-weight-bold">
                                    {{ (data.item.budget.label) }}
                                </b-link>
                            </p>
                        </template>


                        <!-- Column Patient -->
                        <template #cell(patient)="data">
                            <div v-if="canAccess('patients.show')">
                                <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.budget.patient.id }, }"
                                    class="font-weight-bold d-block text-wrap">
                                    {{ data.item.budget.patient.full_name }}
                                </b-link>
                            </div>
                            <div v-else>
                                {{ data.item.budget.patient.full_name }}
                            </div>
                            <small class="text-muted">{{ data.item.budget.patient.email
                            }}<br>{{ $t('patients.document_type') }} ({{ data.item.budget.patient.document_type }}):
                                {{ data.item.budget.patient.rut }}</small>
                            </b-link>
                        </template>

                        <!-- Column: amount -->
                        <template #cell(amount)="data">
                            {{ formatPrice(data.item.amount) }}
                        </template>

                        <!-- Column: created at -->
                        <template #cell(created_at)="data">
                            {{ dateTimeFormat(data.item.payment_date) }}
                        </template>

                        <!-- Column: check_paid -->
                        <template #cell(check_paid)="data">
                            <b-badge pill :variant="`${data.item.check_paid ? 'success' : 'danger'}`"
                                class="text-capitalize">
                                {{ formatActive(data.item.check_paid) }}
                            </b-badge>
                        </template>

                        <!-- Column: Method -->
                        <template #cell(method)="data">
                            <span>{{ translatePaymentMethod(data.item.method) }}</span>
                            <p v-if="data.item.check" class="card-text mb-25">
                                <label><strong>{{ $t('checks.table_reference') }}:</strong> {{ data.item.check.reference
                                }}</label>
                                <label><strong>{{ $t('checks.table_bank') }}:</strong> {{ data.item.check.bank }}</label>
                                <label><strong>{{ $t('checks.table_serie') }}:</strong> {{ data.item.check.serie }}</label>
                            </p>
                        </template>
                    </b-table>
                </div>


                <!-- Pagination -->
                <div v-if="payments.length > 0" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalPayments" :per-page="perPage"
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
import PaymentProvider from "@/providers/Payments";
const PaymentResource = new PaymentProvider();

export default {
    name: 'ReportPayments',
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
            payments: [],
            columns: [
                {
                    key: "payment_id",
                    label: this.$t("payments.table_payment_id"),
                },
                {
                    key: "budget",
                    label: this.$t("payments.table_budget"),
                },
                {
                    key: "patient",
                    label: this.$t("payments.table_patient"),
                },
                {
                    key: "amount",
                    label: this.$t("payments.table_amount"),
                },
                {
                    key: "created_at",
                    label: this.$t("payments.table_payment_date"),
                },
                {
                    key: "method",
                    label: this.$t("payments.table_method"),
                },
                {
                    key: "check_paid",
                    label: this.$t("payments.table_charged"),
                },
            ],
            optionsFilters: [
                { value: 'paid', text: this.$t('filters.status.charged') },
                { value: 'unpaid', text: this.$t('filters.status.receivable') },
                { value: 'all', text: this.$t('filters.status.all') },
            ],
            paymentMethods: [
                { label: this.$t('payments.method_cash'), value: 'cash' },
                { label: this.$t('payments.method_debit_card'), value: 'debit_card' },
                { label: this.$t('payments.method_credit_card'), value: 'credit_card' },
                { label: this.$t('payments.method_check'), value: 'check' },
                { label: this.$t('payments.method_transfer'), value: 'transfer' },
            ],
            filter_by: 'all',
            perPageOptions: [10, 25, 50, 100],
            perPage: 100,
            currentPage: 1,
            totalPayments: 0,
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
                method: null,
            },
            isMobile: false,
            isFilterApplied: false
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.payments);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalPayments,
            };
        },
        isProfessional() {
            return store.getters['auth/getRoleId'] === 4
        },
    },
    created() {
        if (store.getters['auth/getLocale'] === "es") {
            flatpickr.localize(Spanish);
            // localize(store.state.auth.setting['language'] === "es");
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
        async donwloadPayment() {

            const query = {
                ...this.filter,
                isDownload: true,
            }

            try {

                this.loading = true
                axios.get(`/api/payments`, { responseType: 'blob', params: { ...query } }).then(response => {
                    this.loading = false
                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                    saveAs(blob, `${this.$t('reports.payments.excel_name')}-${this.filter.start}-${this.filter.end}.xlsx`);

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
                    perPage: this.perPage,
                    page: this.currentPage,
                }

                this.isFilterApplied = true
                this.loading = true
                const { data } = await PaymentResource.getList(query)
                this.loading = false
                this.payments = data.data;
                this.totalPayments = data.total;

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        clearFilter() {
            this.filter = {}
            this.isFilterApplied = false
            this.payments = []

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
</style>