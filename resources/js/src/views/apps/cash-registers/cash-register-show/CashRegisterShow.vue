<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <section v-if="cashRegister.detail">
            <b-row class="match-height">
                <b-col>
                    <b-card>
                        <b-row>
                            <b-col cols="12" xl="8" class="d-flex justify-content-between flex-column">
                                <div class="d-flex justify-content-start">
                                    <div class="d-flex flex-column ml-1">
                                        <div class="mb-1">
                                            <h4 class="mb-0">
                                                {{ $t('cash_registers.table_closing_id') }}: {{ cashRegister.detail.id }}
                                            </h4>
                                            <p class="card-text mt-2">{{ $t('cash_registers.generated_by') }}:
                                                {{ cashRegister.detail.user.name }}</p>
                                            <p class="card-text">{{ $t('cash_registers.court_date') }}:
                                                {{ formatDate(cashRegister.detail.closing_date) }} {{ $t('to') }}
                                                {{ formatDate(cashRegister.detail.closing_end_date) }}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-col>

                            <!-- Right Col: Table -->
                            <b-col cols="12" xl="4">
                                <div class="d-flex mt-2">
                                    <b-button :disabled="loading" @click="downloadCashRegister" class="mr-1"
                                        variant="primary">
                                        <feather-icon icon="DownloadIcon" class="mr-50" />
                                        <span class="align-middle">{{ $t('button_download') }}</span>
                                    </b-button>

                                    <b-button @click="$router.back()" variant="outline-danger">
                                        {{ $t("back") }}
                                    </b-button>
                                </div>

                            </b-col>
                        </b-row>
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
                                    <b-form-textarea disabled id="comments" v-model="cashRegister.detail.comments"
                                        :placeholder="$t('cash_registers.comments_placeholder')" rows="3" />
                                </b-form-group>
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
import router from "@/router";
import flatPickr from "vue-flatpickr-component";
import Ripple from 'vue-ripple-directive'
import CashRegisterProvider from "@/providers/CashRegisters";
const CashRegisterResource = new CashRegisterProvider();

export default {
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
    },
    data() {
        return {
            loading: false,
            cashRegister_id: router.currentRoute.params.id,
            loading: false,
            cashRegister: {},
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
        await this.getCashRegister()
    },
    methods: {
        async downloadCashRegister() {
            try {
                this.loading = true
                const { data } = await CashRegisterResource.download(this.cashRegister_id)
                this.loading = false
                let blob = new Blob([data], {
                    type: "application/vnd.ms-excel",
                });
                let link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                const fileName = `${this.$t('cash_registers.export_name')}-${this.cashRegister.detail.closing_date}-${this.cashRegister.detail.closing_end_date}`
                link.download = `${fileName}.xls`;
                link.click();

            } catch (e) {
                this.loading = false
                if (e.response.status === 422) {
                    this.danger(
                        this.getFirstValidationError(e.response.data.errors),
                        "Error",
                        "AlertCircleIcon"
                    );
                } else {
                    this.danger(e.message, "Error", "AlertCircleIcon");
                }
            }

        },
        async getCashRegister() {

            this.cashRegister.totalExpenses = 0
            this.cashRegister.totalCash = 0
            this.cashRegister.totalDebitCard = 0
            this.cashRegister.totalCreditCard = 0
            this.cashRegister.totalCheck = 0
            this.cashRegister.totalTransfer = 0
            this.cashRegister.expenses = null
            this.cashRegister.payments = null
            this.cashRegister.xrays = null

            this.loading = true
            const { data } = await CashRegisterResource.getDetail(this.cashRegister_id)
            this.loading = false            

            this.cashRegister = {}
            this.cashRegister.expenses = data.data.expenses
            this.cashRegister.payments = data.data.payments
            this.cashRegister.detail = data.data.register

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
        },

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
}</style>

<style lang="scss">@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";</style>
