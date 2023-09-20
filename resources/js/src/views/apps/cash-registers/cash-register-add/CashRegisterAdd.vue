<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <section id="dashboard-ecommerce">
            <b-row class="match-height">
                <b-col xl="12" md="12">
                    <b-card no-body class="card-statistics">
                        <b-card-body class="statistics-body">
                            <b-row>
                                <b-col cols="12" xl="12">
                                    <b-form-checkbox v-model="isRange" name="check-button" switch inline>
                                        {{ $t('cash_registers.active_range') }}
                                    </b-form-checkbox>
                                </b-col>
                            </b-row>
                            <b-row class="mt-3">
                                <b-col cols="12" md="2">
                                    <label>
                                        {{ isRange ? $t('start_at') : $t('cash_registers.add.cut_date') }}
                                    </label>
                                    <flat-pickr v-model="cashRegister.date" class="form-control"
                                        :config="{ dateFormat: 'd/m/Y' }" placeholder="DD/MM/YYYY" />
                                </b-col>

                                <b-col v-if="isRange" cols="12" md="2">
                                    <label>{{ $t('end_at') }}</label>
                                    <flat-pickr v-model="cashRegister.date_end" class="form-control"
                                        :config="{ dateFormat: 'd/m/Y', minDate: cashRegister.date }"
                                        placeholder="DD/MM/YYYY" />
                                </b-col>

                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('professional')" label-for="add-professional">
                                        <v-select v-model="selectDoctor" @input="selectedDoctor" :options="professionals"
                                            label="name" input-id="add-professional" :placeholder="$t('select_an_option')">
                                        </v-select>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" xl="4">
                                    <b-button v-if="cashRegister.payments" class="mt-2" variant="primary"
                                        @click="fetchCashRegister">
                                        {{ $t("button_filter") }}
                                    </b-button>

                                    <b-button v-if="!cashRegister.payments" class="mt-2" variant="primary"
                                        @click="fetchCashRegister">
                                        {{ $t("cash_registers.preview") }}
                                    </b-button>

                                    <b-button v-if="cashRegister.payments" class="mt-2" variant="secondary"
                                        @click="downloadCashRegister">
                                        {{ $t("cash_registers.download") }}
                                    </b-button>

                                    <b-button v-if="!cashRegister.payments" @click="$router.back()" class="mt-2"
                                        variant="outline-secondary">
                                        {{ $t("back") }}
                                    </b-button>

                                    <b-button v-if="cashRegister.payments" @click="clearFilter" class="mt-2"
                                        variant="danger">
                                        {{ $t("cancel") }}
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </section>

        <section v-if="cashRegister.payments" id="dashboard-ecommerce">
            <b-row class="match-height">
                <b-col xl="8" md="6">
                    <b-card no-body class="card-statistics">
                        <b-card-header>
                            <b-card-title>{{ $t("transactions") }}</b-card-title>
                        </b-card-header>
                        <b-card-body class="statistics-body">
                            <b-row>
                                <!-- Cash -->
                                <b-col xl="3" sm="6" class="mb-2 mb-xl-0">
                                    <b-media no-body>
                                        <b-media-aside class="mr-2">
                                            <b-avatar size="48" variant="light-primary">
                                                <feather-icon size="24" icon="DollarSignIcon" />
                                            </b-avatar>
                                        </b-media-aside>
                                        <b-media-body class="my-auto">
                                            <h5 class="font-weight-bolder mb-0">
                                                {{ formatPrice(cashRegister.totalCash) }}
                                            </h5>
                                            <b-card-text class="font-small-3 mb-0">
                                                {{ $t("payments.method_cash") }}
                                            </b-card-text>
                                        </b-media-body>
                                    </b-media>
                                </b-col>

                                <!-- Transfer -->
                                <b-col xl="3" sm="6" class="mb-2 mb-xl-0">
                                    <b-media no-body>
                                        <b-media-aside class="mr-2">
                                            <b-avatar size="48" variant="light-warning">
                                                <feather-icon size="24" icon="CreditCardIcon" />
                                            </b-avatar>
                                        </b-media-aside>
                                        <b-media-body class="my-auto">
                                            <h5 class="font-weight-bolder mb-0">
                                                {{ formatPrice(cashRegister.totalCreditCard + cashRegister.totalDebitCard)
                                                }}
                                            </h5>
                                            <b-card-text class="font-small-3 mb-0">
                                                {{ $t("payments.cards") }}
                                            </b-card-text>
                                        </b-media-body>
                                    </b-media>
                                </b-col>

                                <!-- Check -->
                                <b-col xl="3" sm="6" class="mb-2 mb-xl-0">
                                    <b-media no-body>
                                        <b-media-aside class="mr-2">
                                            <b-avatar size="48" variant="light-success">
                                                <feather-icon size="24" icon="CheckIcon" />
                                            </b-avatar>
                                        </b-media-aside>
                                        <b-media-body class="my-auto">
                                            <h5 class="font-weight-bolder mb-0">
                                                {{ formatPrice(cashRegister.totalCheck) }}
                                            </h5>
                                            <b-card-text class="font-small-3 mb-0">
                                                {{ $t("payments.method_check") }}
                                            </b-card-text>
                                        </b-media-body>
                                    </b-media>
                                </b-col>

                                <!-- Transfer -->
                                <b-col xl="3" sm="6" class="mb-2 mb-xl-0">
                                    <b-media no-body>
                                        <b-media-aside class="mr-2">
                                            <b-avatar size="48" variant="light-info">
                                                <feather-icon size="24" icon="TrendingUpIcon" />
                                            </b-avatar>
                                        </b-media-aside>
                                        <b-media-body class="my-auto">
                                            <h5 class="font-weight-bolder mb-0">
                                                {{ formatPrice(cashRegister.totalTransfer) }}
                                            </h5>
                                            <b-card-text class="font-small-3 mb-0">
                                                {{ $t("payments.method_transfer") }}
                                            </b-card-text>
                                        </b-media-body>
                                    </b-media>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col xl="4" md="6">
                    <b-card class="earnings-card">
                        <b-row>
                            <b-col cols="6">
                                <b-card-title class="mb-1 text-primary">
                                    <feather-icon size="24" icon="TrendingUpIcon" />
                                    {{ $t('incomes.plural') }}
                                </b-card-title>
                                <h5 class="mb-1">
                                    <strong>{{ formatPrice(totalIncomes) }}</strong>
                                </h5>
                                <b-card-title class="mb-1 text-danger">
                                    <feather-icon size="24" icon="TrendingDownIcon" />
                                    {{ $t('expenses.plural') }}
                                </b-card-title>
                                <h5 class="mb-1">
                                    <strong>{{ formatPrice(cashRegister.totalExpenses) }}</strong>
                                </h5>
                            </b-col>
                            <b-col cols="6">
                                <b-card-title class="mb-1 text-success">
                                    <feather-icon size="24" icon="DollarSignIcon" />
                                    {{ $t('earnings.lable_total_earnings') }}
                                </b-card-title>
                                <h4 class="mb-1">
                                    <strong>{{ formatPrice(totalIncomes - totalExpenses) }}</strong>
                                </h4>
                                <b-card-text class="text-muted font-small-2">
                                    <span class="font-weight-bolder">{{ $t('earnings.label') }}</span>
                                </b-card-text>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </section>

        <section v-if="cashRegister.payments" id="dashboard-ecommerce">
            <b-row class="match-height">
                <b-col cols="12" xl="12" md="12">
                    <!-- Detail Income -->
                    <b-card no-body class="card-company-table">
                        <b-card-header>
                            <b-card-title>{{ $t('incomes.detail') }}</b-card-title>
                        </b-card-header>
                        <b-card-body class="invoice-padding pt-0">
                            <b-row v-if="cashRegister.payments" class="invoice-spacing">
                                <b-table :items="cashRegister.payments" responsive :fields="columnsPayments"
                                    :sticky-header="true" :no-border-collapse="false" class="mb-0">
                                    <!-- Date -->
                                    <template #cell(updated_at)="data">
                                        <div class="align-items-center">
                                            {{ dateTimeFormat(data.item.updated_at) }}
                                        </div>
                                    </template>

                                    <!-- Doctor -->
                                    <template #cell(doctor)="data">
                                        <div class="align-items-center">
                                            {{ data.item.doctor }}
                                        </div>
                                    </template>

                                    <!-- Patient -->
                                    <template #cell(patient)="data">
                                        <div class="align-items-center">
                                            {{ data.item.patient }}
                                        </div>
                                    </template>

                                    <!-- Cash -->
                                    <template #cell(cash)="data">
                                        <div class="align-items-center">
                                            {{ data.item.method === "cash" ? formatPrice(data.item.ap_amount) : 0.0 }}
                                        </div>
                                    </template>

                                    <!-- Bons -->
                                    <template #cell(bons)="data">
                                        <div class="align-items-center">
                                            {{ data.item.method !== "cash" && data.item.method !== "check" ?
                                                $t('locale.cash_register_detail_transfer') : "" }}
                                        </div>
                                    </template>

                                    <!-- Type -->
                                    <template #cell(type)="data">
                                        <div class="align-items-center">
                                            {{ data.item.method === "check" ? data.item.serie : "" }}
                                        </div>
                                    </template>

                                    <!-- Bank -->
                                    <template #cell(bank)="data">
                                        <div class="align-items-center">
                                            {{ data.item.method === "check" ? data.item.bank : "" }}
                                        </div>
                                    </template>

                                    <!-- Bank Num -->
                                    <template #cell(bank_num)="data">
                                        <div class="align-items-center">
                                            {{ data.item.method === "check" ? data.item.serie : "" }}
                                        </div>
                                    </template>

                                    <!-- Check Date -->
                                    <template #cell(check_date)="data">
                                        <div class="align-items-center">
                                            {{ data.item.method === "check" ? data.item.date : "" }}
                                        </div>
                                    </template>

                                    <!-- Check Owner -->
                                    <template #cell(check_owner)="data">
                                        <div class="align-items-center">
                                            {{ data.item.method === "check" ? data.item.reference : "" }}
                                        </div>
                                    </template>

                                    <!-- Check Owner -->
                                    <template #cell(check_amount)="data">
                                        <div class="align-items-center">
                                            {{ data.item.method === "check" ? formatPrice(data.item.ap_amount) :
                                                data.item.method !== "cash" && data.item.ap_method !== "check" ?
                                                    formatPrice(data.item.ap_amount) : 0.0 }}
                                        </div>
                                    </template>

                                </b-table>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Details expenses -->
                <b-col cols="12" xl="6" md="6">
                    <b-card no-body class="card-company-table">
                        <b-card-header>
                            <b-card-title>{{ $t('expenses.detail') }}</b-card-title>
                        </b-card-header>
                        <b-card-body v-if="cashRegister.payments" class="invoice-padding pt-0">
                            <b-table :items="cashRegister.expenses" responsive :fields="columnsExpenses"
                                :sticky-header="true" :no-border-collapse="false" class="mb-0">

                                <!-- Reference -->
                                <template #cell(reference)="data">
                                    <div class="align-items-center">
                                        {{ data.item.reference }}
                                    </div>
                                </template>

                                <!-- Note -->
                                <template #cell(note)="data">
                                    <div class="align-items-center">
                                        {{ data.item.note }}
                                    </div>
                                </template>

                                <!-- Amount -->
                                <template #cell(total)="data">
                                    <div class=" align-items-center">
                                        {{ formatPrice(data.item.amount) }}
                                    </div>
                                </template>

                            </b-table>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Xrays detail -->
                <b-col cols="12" xl="6" md="6">
                    <b-card no-body class="card-company-table">
                        <b-card-header>
                            <b-card-title>{{ $t('cash_registers.detail_xrays') }}</b-card-title>
                        </b-card-header>
                        <b-card-body v-if="cashRegister.xrays" class="invoice-padding pt-0">
                            <b-table :items="cashRegister.xrays" responsive :fields="columnsXrays" :sticky-header="true"
                                :no-border-collapse="false" class="mb-0">

                                <!-- Date -->
                                <template #cell(updated_at)="data">
                                    <div class=" align-items-center">
                                        {{ dateTimeFormat(data.item.updated_at) }}
                                    </div>
                                </template>

                                <!-- Amount -->
                                <template #cell(total)="data">
                                    <div class=" align-items-center">
                                        {{ formatPrice(data.item.amount) }}
                                    </div>
                                </template>

                            </b-table>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col cols="12" xl="6" md="6"></b-col>
                <b-col cols="12" xl="6" md="6">
                    <b-card no-body class="card-company-table">
                        <b-card-header>
                            <!-- <b-card-title>{{$t('locale.cash_register_detail_expense')}}</b-card-title>                                         -->
                        </b-card-header>
                        <b-card-body class="invoice-padding pt-0">
                            <b-col cols="12">
                                <b-form-group :label="$t('cash_registers.comments')"
                                    :description="$t('cash_registers.comments_help')" label-for="comments">
                                    <b-form-textarea id="comments" v-model="cashRegister.comments"
                                        :placeholder="$t('cash_registers.comments_placeholder')" rows="3" />
                                </b-form-group>

                            </b-col>
                            <b-col cols="12">
                                <b-button v-if="canAccess('cash_registers.store') && cashRegister.totalCash +
                                    cashRegister.totalDebitCard +
                                    cashRegister.totalCreditCard +
                                    cashRegister.totalCheck +
                                    cashRegister.totalTransfer" @click="saveCashRegister" class="mt-2"
                                    variant="primary">
                                    {{ $t("generate") }}
                                </b-button>

                                <b-button @click="clearFilter" class="mt-2" variant="danger">
                                    {{ $t("cancel") }}
                                </b-button>
                            </b-col>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </section>
    </b-overlay>
</template>

<script>
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput,
    BModal, VBModal, BMediaAside, BMedia, BAvatar, BImg, BCardHeader, BMediaBody, BFormTextarea, BCardTitle
} from 'bootstrap-vue'
import store from '@/store'
import router from "@/router";
import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import vSelect from "vue-select";
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'
import "animate.css";
import DashboardCardTransactions from "@core/components/dashboards/DashboardCardTransactions.vue";
import CashRegisterProvider from "@/providers/CashRegisters";
import UserProvider from "@/providers/Users";

import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

const CashRegisterResource = new CashRegisterProvider();
const UserResource = new UserProvider();

if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
    localize(store.state.auth.setting['language'] === "es");
}
export default {
    name: 'CashRegisterAdd',
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
        DashboardCardTransactions,
        VueApexCharts
    },
    data() {
        return {
            loading: false,
            cashRegister: {
                totalExpenses: 0,
                totalCash: 0,
                totalDebitCard: 0,
                totalCreditCard: 0,
                totalCheck: 0,
                totalTransfer: 0,
                expenses: null,
                payments: null,
                xrays: null,
                user_id: null,
            },
            columnsPayments: [
                { key: 'updated_at', label: this.$t('cash_registers.detail_date'), sortable: true },
                { key: 'doctor', label: this.$t('cash_registers.detail_professional'), sortable: true },
                { key: 'patient', label: this.$t('cash_registers.detail_patient'), sortable: true },
                { key: 'cash', label: this.$t('cash_registers.detail_cash') },
                { key: 'bons', label: this.$t('cash_registers.detail_bonus') },
                { key: 'check', label: this.$t('cash_registers.detail_check') },
                { key: 'type', label: this.$t('cash_registers.detail_type') },
                { key: 'bank', label: this.$t('cash_registers.detail_bank') },
                { key: 'bank_num', label: this.$t('cash_registers.detail_bank_num') },
                { key: 'check_date', label: this.$t('cash_registers.detail_check_date') },
                { key: 'check_owner', label: this.$t('cash_registers.detail_check_owner') },
                { key: 'check_amount', label: this.$t('cash_registers.detail_check_amount') },
            ],
            columnsXrays: [
                { key: 'updated_at', label: this.$t('cash_registers.detail_date'), sortable: true },
                { key: 'patient', label: this.$t('cash_registers.detail_patient'), sortable: true },
                { key: 'action_name', label: this.$t('cash_registers.detail_action'), sortable: true },
                { key: 'total', label: this.$t('cash_registers.detail_amount') },
            ],
            columnsExpenses: [
                { key: 'reference', label: this.$t('expenses.table_reference'), sortable: true },
                { key: 'note', label: this.$t('expenses.table_note') },
                { key: 'total', label: this.$t('expenses.table_amount') },
            ],
            isRange: false,
            professionals: [],
            selectDoctor: null,

        }
    },
    computed: {
        totalIncomes() {
            if (!_.isEmpty(this.cashRegister)) {
                return (this.cashRegister.totalCash + this.cashRegister.totalDebitCard + this.cashRegister.totalCreditCard + this.cashRegister.totalCheck + this.cashRegister.totalTransfer)
            } else {
                return 0
            }
        },
        totalExpenses() {
            return this.cashRegister.totalExpenses
        }
    },
    async mounted() {
        await this.getProfessionals()
    },
    methods: {
        kFormatter,
        async getProfessionals() {
            this.loading = true
            const query = {
                criteria: 'professional',
            }
            const { data } = await UserResource.index(query);
            this.loading = false
            this.professionals = data.data
        },
        async downloadCashRegister() {
            try {

                const params = {
                    donwload: true,
                    date: this.cashRegister.date,
                    date_end: this.cashRegister.date_end,
                    user_id: this.selectDoctor ? this.selectDoctor.id : null
                }
                this.loading = true
                const { data } = await CashRegisterResource.downloadPreview(params)
                this.loading = false
                let blob = new Blob([data], { type: "application/vnd.ms-excel" });
                let link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                const fileName = `${this.$t('cash_registers.pre_export_name')}-${this.cashRegister.date}`
                link.download = `${fileName}.xls`;
                link.click();

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        async generateCashRegister() {

            if (_.isEmpty(this.cashRegister)) {
                return false
            }

            if (_.isEmpty(this.cashRegister.date)) {
                return false
            }

            this.cashRegister.totalExpenses = 0
            this.cashRegister.totalCash = 0
            this.cashRegister.totalDebitCard = 0
            this.cashRegister.totalCreditCard = 0
            this.cashRegister.totalCheck = 0
            this.cashRegister.totalTransfer = 0
            this.cashRegister.expenses = null
            this.cashRegister.payments = null
            this.cashRegister.xrays = null
            this.cashRegister.user_id = this.selectDoctor ? this.selectDoctor.id : null

            try {
                this.loading = true
                const { data } = await CashRegisterResource.generate(this.cashRegister)
                this.loading = false
                this.cashRegister.expenses = data.data.expenses
                this.cashRegister.payments = data.data.payments

                //Filter by xrays
                this.cashRegister.xrays = _.filter(this.cashRegister.payments, (item) => {
                    return item.action_group === 'Radiología Oral'
                })

                this.cashRegister.totalExpenses = this.cashRegister.expenses.reduce((carry, expense) => {
                    return carry + (expense.amount * 1);
                }, 0);

                this.cashRegister.totalCash = this.cashRegister.payments.reduce((carry, payment) => {
                    return carry + (payment.method === 'cash' ? (payment.ap_amount * 1) : 0);
                }, 0);

                this.cashRegister.totalDebitCard = this.cashRegister.payments.reduce((carry, payment) => {
                    return carry + (payment.method === 'debit_card' ? (payment.ap_amount * 1) : 0);
                }, 0);

                this.cashRegister.totalCreditCard = this.cashRegister.payments.reduce((carry, payment) => {
                    return carry + (payment.method === 'credit_card' ? (payment.ap_amount * 1) : 0);
                }, 0);

                this.cashRegister.totalCheck = this.cashRegister.payments.reduce((carry, payment) => {
                    return carry + (payment.method === 'check' ? (payment.ap_amount * 1) : 0);
                }, 0);

                this.cashRegister.totalTransfer = this.cashRegister.payments.reduce((carry, payment) => {
                    return carry + (payment.method === 'transfer' ? (payment.ap_amount * 1) : 0);
                }, 0);

            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e)
            }
        },
        saveCashRegister() {

            let replace = this.isRange ? `${this.cashRegister.date}, ${this.cashRegister.date_end}` : this.cashRegister.date
            const html = `${this.$t("cash_registers.alert_description").replace(':dates', '<strong>' + replace + '</strong>')}`
            this.$swal({
                title: this.$t("cash_registers.alert_title"),
                html: html,
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t("yes_continue"),
                cancelButtonText: this.$t("cancel"),
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-outline-danger ml-1",
                },
                showClass: {
                    popup: "animate__animated animate__flipInX",
                },
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                preConfirm: async () => {

                    try {
                        this.cashRegister.isRange = this.isRange
                        this.loading = true
                        const { data } = await CashRegisterResource.store(this.cashRegister)
                        this.loading = false
                        if (data.success) {
                            this.success(data.message, '', 'CheckIcon');
                            this.$router.back()
                        } else {
                            this.danger(data.message, "Error", "AlertCircleIcon");
                        }
                    } catch (e) {
                        this.loading = false;
                        this.handleResponseErrors(e)
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                    }                    
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });

        },
        async fetchCashRegister() {

            if (_.isEmpty(this.cashRegister) || _.isEmpty(this.cashRegister.date)) {
                if (this.isRange) {
                    this.danger(this.$t('locale.cash_register_date_start_help'), "Error", "AlertOctagonIcon");
                } else {
                    this.danger(this.$t('locale.cash_register_close_help'), "Error", "AlertOctagonIcon");
                }
                return false
            }

            if (this.isRange) {
                if (_.isEmpty(this.cashRegister.date_end)) {
                    this.danger(this.$t('locale.cash_register_date_end_help'), "Error", "AlertOctagonIcon");
                    return false
                }
            }
            await this.generateCashRegister()
        },
        async selectedDoctor() {
            // await this.generateCashRegister()
        },
        clearFilter() {
            this.cashRegister = {}
            this.selectDoctor = null;
            this.isRange = false
        },
        initializeRegister() {
            if (!_.isEmpty(this.cashRegister.payments) || !_.isEmpty(this.cashRegister.expenses)) {
                this.cashRegister = {}
            }
            return true
        }
    },
    watch: {
        isRange(value) {
            if (!value) {
                this.cashRegister.date_end = null
                // this.fetchCashRegister()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

.per-page-selector {
    width: 90px;
}

.text-decoration-line-through {
    text-decoration: line-through;
}

.card-company-table ::v-deep td .b-avatar.badge-light-company {
    .dark-layout & {
        background: $theme-dark-body-bg !important;
    }
}
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
