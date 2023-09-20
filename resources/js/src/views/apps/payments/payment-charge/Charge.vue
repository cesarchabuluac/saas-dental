<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <section class="invoice-preview-wrapper">

            <b-row v-if="!isEmpty(budget)" class="invoice-preview">
                <!-- Col: Left (Invoice Container) -->
                <b-col cols="12" xl="10" md="9">
                    <b-card no-body class="invoice-preview-card">
                        <!-- Header -->
                        <b-card-body class="invoice-padding pb-0">
                            <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                                <!-- Header: Left Content -->
                                <div>
                                    <div class="logo-wrapper">
                                        <!-- <logo /> -->
                                        <h3 class="text-primary invoice-logo">
                                            {{ findSetting('app_name') }}
                                        </h3>
                                    </div>
                                    <p class="card-text mb-25">
                                        {{ budget.branch.name }}
                                    </p>
                                    <p class="card-text mb-25">
                                        {{ budget.branch.address }}
                                    </p>
                                    <p class="card-text mb-0">
                                        {{ budget.branch.phone }}
                                    </p>
                                    <p class="card-text mb-0">
                                        {{ budget.branch.email }}
                                    </p>
                                </div>

                                <!-- Header: Right Content -->
                                <div class="mt-md-0 mt-2">
                                    <h4 class="invoice-title">
                                        {{ $t('budgets.folio') }}
                                        <span class="invoice-number">{{ budget.label }}</span>
                                    </h4>
                                    <div class="invoice-date-wrapper">
                                        <p class="invoice-date-title">
                                            <strong>{{ $t('budgets.date_issued') }}</strong>
                                            {{ formatDate(budget.created_at) }}
                                        </p>
                                    </div>
                                    <div class="invoice-date-wrapper">
                                        <p class="invoice-date-title">
                                            <strong>{{ $t('budgets.transmitter') }}</strong> {{ (budget.user.name) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </b-card-body>

                        <!-- Spacer -->
                        <hr class="invoice-spacing">

                        <!-- Invoice Client & Payment Details -->
                        <b-card-body class="invoice-padding pt-0">
                            <b-row class="invoice-spacing">

                                <!-- Col: Invoice To -->
                                <b-col cols="12" xl="6" class="p-1">
                                    <h6 class="mb-2"><strong>{{ $t('budgets.patient') }}</strong></h6>
                                    <h6 class="mb-25">{{ budget.patient.full_name }}</h6>
                                    <p class="card-text mb-25">
                                        <strong>{{ $t('patients.table.address') }}:</strong> {{ budget.patient.address }}
                                    </p>
                                    <p class="card-text mb-25">
                                        <strong>{{ $t('patients.table.phone') }}:</strong> {{ budget.patient.phone }},
                                        {{ budget.patient.cellphone }}
                                    </p>
                                    <p class="card-text mb-25">
                                        <strong>{{ $t('patients.table.email') }}:</strong> {{ budget.patient.email }}
                                    </p>
                                </b-col>

                                <!-- Col: Payment Details -->
                                <b-col xl="6" cols="12" class="p-1 mt-xl-0 mt-2 d-flex justify-content-xl-end">
                                    <div>
                                        <h6 class="mb-2">{{ $t('payments.details') }}</h6>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="pr-1">{{ $t('budgets.total') }}</td>
                                                    <td><span class="font-weight-bold">{{ formatPrice(budget.total_cost)
                                                    }}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="pr-1">{{ $t('payments.total_due') }}</td>
                                                    <td>{{ formatPrice(budget.total_debt) }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="pr-1">{{ $t('payments.total_subscriber') }}</td>
                                                    <td>{{ formatPrice(budget.total_paid) }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="pr-1">{{ $t('payments.total_actions') }}</td>
                                                    <td>{{ formatPrice(totalClinicalActions + totalLaboratoryActions) }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>

                        <!-- Payment method -->
                        <b-card-body class="invoice-padding pt-0">
                            <b-row class="invoice-spacing">
                                <b-col cols="12" xl="4" class="p-1">
                                    <label class="mb-2 fw-bolder">{{ $t('payments.method') }}</label>
                                    <v-select v-model="paymentType" :options="paymentTypes" label="label"
                                        :disabled="hasPreviousPayments" :clearable="false" :searchable="false"
                                        @input="selectPaymentTypes" :selectable="option => option.disabled"
                                        :placeholder="$t('select_an_option')"></v-select>
                                </b-col>
                            </b-row>
                        </b-card-body>

                        <!-- Invoice Description: Table -->
                        <b-table id="table-items" ref="tableItems" stacked="sm" responsive :items="budget.budget_actions"
                            :fields="columns" size="sm">
                            <!-- Description -->
                            <template #cell(action)="data">
                                <b-card-text class="font-weight-bold mb-25">
                                    {{ data.item.action_name }}
                                </b-card-text>
                                <b-card-text class="text-wrap">
                                    {{ data.item.action_group_name }}, <strong>{{ $t('budgets.action_area') }}
                                        {{ data.item.area }}</strong>
                                </b-card-text>
                                <span class="badge badge-light-primary float-left text-wrap">{{ data.item.action_type ===
                                    'clinical' ? $t('budgets.clinical_actions') :
                                    $t('budgets.laboratory_actions') }}</span>
                            </template>

                            <!-- Price -->
                            <template #cell(price)="data">
                                {{ formatPrice(data.item.price) }}
                            </template>

                            <!-- Discount -->
                            <template #cell(discount)="data">
                                {{ formatPrice(data.item.discount) }}
                            </template>

                            <!-- Subtotal -->
                            <template #cell(subtotal)="data">
                                {{ formatPrice(data.item.subtotal) }}
                            </template>

                            <!-- debt -->
                            <template #cell(debt)="data">
                                <span :class="`${data.item.debt > 0 ? 'text-danger' : 'text-success'}`">{{
                                    formatPrice(data.item.debt) }}</span>
                                <b-card-text v-if="data.item.paid > 0" class="text-nowrap text-success">
                                    <strong>{{ $t("charges.table_paid") }}:</strong> {{ formatPrice(data.item.paid) }}
                                </b-card-text>
                            </template>

                            <!-- paid -->
                            <template #cell(options)="data">
                                <!-- checkbox -->
                                <b-form-group>
                                    <b-form-checkbox v-model="data.item.is_selected" @input="updateTable"
                                        @change="data.toggleDetails"
                                        :disabled="!allowModifications || data.item.is_disabled" />
                                </b-form-group>
                            </template>

                            <!-- Details -->
                            <template #row-details="data">
                                <b-row v-if="data.item.action_type === 'clinical'" class="invoice-spacing">
                                    <b-col cols="12" xl="4" class="p-1">
                                        <label class="mb-2 fw-bolder">{{ $t('charges.professional') }}</label>
                                        <!-- :disabled="data.item.has_previous_professional" -->
                                        <v-select v-show="data.item.is_selected || data.item.has_previous_professional"
                                            v-model="data.item.professional" label="name" :options="professionals"
                                            :clearable="false" :searchable="false" />
                                    </b-col>
                                    <b-col cols="12" xl="4" class="p-1" v-if="!budget.has_partials">
                                        <label class="mb-2 fw-bolder">{{ $t('charges.assigned_amount') }}</label>
                                        <b-form-input class="d-inline-block mr-1" disabled
                                            :value="`${(data.item.assigned_income) ? formatPrice(data.item.assigned_income) : 0}`" />
                                    </b-col>
                                </b-row>
                            </template>
                        </b-table>
                    </b-card>
                </b-col>

                <!-- Right Col: Card -->
                <b-col cols="12" md="3" xl="2" class="invoice-actions">
                    <b-card>

                        <b-row class="invoice-spacing"
                            v-if="budget.total_debt > 0 && paymentType !== '' && !budget.has_partials">

                            <b-col cols="12 mb-75">
                                <label>{{ paymentType.value == 3 ? $t('charges.amount_defer') :
                                    $t('charges.amount_pay') }}</label>
                                <b-form-input v-model="income" :disabled="!allowModifications" class="d-inline-block mr-1"
                                    :placeholder="(paymentType.value == 3) ? $t('charges.amount_defer') : $t('charges.amount_pay')" />
                            </b-col>

                            <b-col cols="12 mb-75">
                                {{ $t('payments.positive_balance') }}:
                                <b-form-input disabled :placeholder="`${formatPrice(positiveBalance)}`" />
                            </b-col>

                            <b-col cols="12 mb-75">
                                {{ (paymentType.value == 3) ? $t('charges.total_defer') :
                                    $t('charges.total_pay') }}
                                <b-form-input disabled :placeholder="`${formatPrice(income)}`" />
                            </b-col>

                            <!-- Spacer -->
                            <hr>
                            <b-col cols="12 mb-75">
                                <div v-if="paymentType.value != 3">
                                    {{ $t('payments.method') }}
                                    <v-select v-model="paymentMethod" :options="paymentMethods" label="label"
                                        :clearable="false" :searchable="false">
                                    </v-select>
                                </div>
                                <div v-else-if="paymentType.value == 3">
                                    <span class="pull-left">{{ $t('charges.defer_payment_on') }}:</span>
                                    <input class="form-control" v-model="paymentsNumber" type="number"
                                        :placeholder="$t('charges.defer_payment_on_placeholder')" />
                                </div>
                            </b-col>

                            <b-col cols="12 mb-75">
                                <!-- Button: Add Payment -->
                                <b-button @click="store" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"
                                    class="mb-75" block>
                                    {{ (paymentType.value == 3) ? $t('charges.divide_payments') :
                                        $t('charges.pay') }}
                                </b-button>
                                <hr>
                                <p class="card-description text-left">
                                    {{ $t('charges.note_positive_balance') }} <span class="fw-bolder">${{
                                        this.remainingIncome }}</span>
                                </p>
                            </b-col>
                        </b-row>

                        <!-- has partials -->
                        <b-row class="invoice-spacing" v-if="budget.has_partials">
                            <b-col cols="12 mb-75">
                                {{ $t('charges.deferred_payment_in') }}
                                <b-form-input disabled :value="`${budget.divided_on}`" />
                            </b-col>
                            <b-col cols="12 mb-75">
                                {{ $t('charges.pending_payments') }}
                                <b-form-input disabled :value="budget.pending_payments" />
                            </b-col>

                            <b-col cols="12 mb-75" v-if="budget.pending_payments > 0">
                                <label>{{ $t('charges.amount_pay') }}</label>
                                <b-form-input :value="budget.partial_amount" disabled class="d-inline-block mr-1" />
                            </b-col>

                            <b-col cols="12 mb-75" v-if="budget.pending_payments > 0">
                                {{ $t('payments.method') }}
                                <v-select v-model="paymentMethod" :options="paymentMethods" label="label"
                                    :clearable="false"></v-select>

                            </b-col>

                            <b-col cols="12 mb-75">
                                <!-- Button: Add Payment -->
                                <b-button @click="storePartialPayment" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    variant="primary" class="mb-75" block>
                                    {{ $t('charges.make_deferred_payment') }}
                                </b-button>
                            </b-col>
                        </b-row>

                        <!-- Button: Send Invoice -->
                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-primary" class="mb-75" block
                            @click="$router.back()">
                            {{ $t('back') }}
                        </b-button>
                    </b-card>
                </b-col>
            </b-row>

            <check-info-modal :active="checkModalActive" :title="checkModalTitle" :isTransfer="checkModalIsTransfer"
                :check="check" @close="checkModalActive = false" @store="storeWithCheck" />

        </section>
    </b-overlay>
</template>

<script>

import store from '@/store'
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput,
    BModal, VBModal
} from 'bootstrap-vue'
import vSelect from "vue-select";
import Logo from '@core/layouts/components/Logo.vue'
import Ripple from 'vue-ripple-directive'
import BudgetProvider from '@/providers/Budgets'
import UserProvider from "@/providers/Users";
import PaymentProvider from '@/providers/Payments'
import CheckInfoModal from "./CheckInfoModal";

const BudgetResource = new BudgetProvider()
const UserResource = new UserProvider();
const PaymentResource = new PaymentProvider();


export default {
    name: "PaymentCharge",
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
        Logo,
        vSelect,
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal,
        VBModal,
        CheckInfoModal,
    },
    data() {
        return {
            loading: false,
            budget_id: this.$route.params.id,
            columns: [
                {
                    key: "action",
                    label: this.$t("charges.table_description"),
                },
                {
                    key: "price",
                    label: this.$t("charges.table_costo"),
                },
                {
                    key: "discount",
                    label: this.$t("charges.table_discount"),
                },
                {
                    key: "subtotal",
                    label: this.$t("charges.table_total"),
                },
                {
                    key: "paid",
                    label: this.$t("charges.table_paid"),
                },
                {
                    key: "debt",
                    label: this.$t("charges.table_debt"),
                },
                {
                    key: "options",
                    label: ''
                }
            ],
            paymentTypes: [
                { label: this.$t('payments.type_cash'), value: 1, disabled: true },
                { label: this.$t('payments.type_pay'), value: 2, disabled: true },
                { label: this.$t('payments.type_deferred'), value: 3, disabled: true },
            ],
            paymentMethods: [
                { label: this.$t('payments.method_cash'), value: 'cash' },
                { label: this.$t('payments.method_debit_card'), value: 'debit_card' },
                { label: this.$t('payments.method_credit_card'), value: 'credit_card' },
                { label: this.$t('payments.method_check'), value: 'check' },
                { label: this.$t('payments.method_transfer'), value: 'transfer' },
            ],
            ns: null,
            cdf: null,
            budget: {},
            budget_diferido: {},
            payment: {},
            check: {
                reference: "",
                bank: "",
                serie: "",
                date: "",
            },
            checkModalIsTransfer: false,
            checkModalTitle: this.$t('charges.check_detail_title'),
            checkModalActive: false,
            checkInfoStored: false,
            clinicalActions: [],
            laboratoryActions: [],
            professionals: [],
            income: 0,
            remainingIncome: 0,
            paymentMethod: { label: this.$t('payments.method_cash'), value: 'cash' },
            positiveBalance: 0,
            paymentType: "",
            paymentsNumber: 3,
            printPayment: {},
            showPrintPayment: false,
            isTransfer: false,
        }
    },
    computed: {
        hasPreviousPayments() {
            if (_.isEmpty(this.budget)) return false
            if (this.budget.total_paid > 0 || this.budget.has_partials) return true
            return false
        },
        totalIncome() {
            return Number(this.income) + Number(this.positiveBalance);
        },
        dots() {
            return ".".repeat(400);
        },
        selectedClinicalActions() {
            if (this.isEmpty(this.budget)) return [];
            return this.clinicalActions.filter((action) => action.is_selected);
        },
        selectedLaboratoryActions() {
            if (this.isEmpty(this.budget)) return [];
            return this.laboratoryActions.filter((action) => action.is_selected);
        },
        totalClinicalActions() {
            return this.selectedClinicalActions.reduce((carry, action) => {
                return carry + action.debt;
            }, 0);
        },
        totalLaboratoryActions() {
            return this.selectedLaboratoryActions.reduce((carry, action) => {
                return carry + action.debt;
            }, 0);
        },
        allowModifications() {
            return this.paymentType.value === 2;
        },
    },
    created() {
        // this.paymentTypes[0].disabled = !this.budget.has_partials
        // this.paymentTypes[1].disabled = !this.budget.has_partials
    },
    async mounted() {
        await this.getProfessionals()
        await this.getBudget()
    },
    methods: {
        selectPaymentTypes(evt) {
            if (evt.value === 3) {
                this.paymentMethod = { label: this.$t('payments.method_cash'), value: 'cash' }
            }
        },
        async getBudget() {

            this.loading = true
            const { data } = await BudgetResource.getBudgetDetail(this.budget_id)
            this.loading = false
            this.budget = data.data
            this.positiveBalance = this.budget.patient.positive_balance

            if (this.budget.has_partials) {
                this.paymentType = { label: this.$t('payments.type_deferred'), value: 3 }
            } else {
                if (this.budget.total_paid > 0) this.paymentType = { label: this.$t('payments.type_pay'), value: 2 }
            }

            this.budget.budget_actions.map((item) => {
                item.is_disabled = false
                if (item.action_type === 'clinical') {
                    this.clinicalActions.push(item)
                } else {
                    this.laboratoryActions.push(item)
                }
                return item
            })



        },
        async getProfessionals() {
            this.professionals = [];
            this.loading = true
            const { data } = await UserResource.index({
                criteria: 'professional',
                ignoreSchedules: true,
            });
            this.loading = false
            this.professionals = data.data
        },
        updateTable() {
            this.clinicalActions = this.clinicalActions.map((action) => action);
            this.laboratoryActions = this.laboratoryActions.map((action) => action);

            this.remainingIncome = this.totalIncome;
            this.selectedClinicalActions.filter((action) => action.debt > 0).map((action) => {
                if (this.remainingIncome === 0) {
                    action.assigned_income = 0;
                } else if (this.remainingIncome >= action.debt) {
                    action.assigned_income = action.debt;
                    this.remainingIncome -= action.debt;
                } else {
                    action.assigned_income = this.remainingIncome;
                    this.remainingIncome = 0;
                }
                return action;
            });

            this.selectedLaboratoryActions.filter((action) => action.debt > 0).map((action) => {
                if (this.remainingIncome === 0) action.assigned_income = 0;
                else if (this.remainingIncome >= action.debt) {
                    action.assigned_income = action.debt;
                    this.remainingIncome -= action.debt;
                } else {
                    action.assigned_income = this.remainingIncome;
                    this.remainingIncome = 0;
                }
                return action;
            });
            this.remainingIncome = Number(this.remainingIncome).toFixed(2);
            this.$forceUpdate();
        },
        async store() {

            const payload = {
                budget_id: this.budget.id,
                amount: this.totalIncome,
                clinical_actions: this.selectedClinicalActions.filter(action => action.debt > 0).flat(),
                laboratory_actions: this.selectedLaboratoryActions.filter(action => action.debt > 0).flat(),
                payment_method: this.paymentMethod,
                positive_balance: this.remainingIncome,
                type: this.paymentType,
                payments_number: this.paymentsNumber,
                check: this.check,
                total_action: this.totalClinicalActions + this.totalLaboratoryActions,
            };

            if (payload.laboratory_actions.length === 0 && payload.clinical_actions.length === 0) {
                this.danger(this.$t('charges.required_actions'))
                return false;
            }

            if (this.totalIncome <= 0) {
                this.danger(this.$t('charges.valid_quantity'))
                return false;
            }

            for (const action of this.selectedClinicalActions) {
                if (action.professional === undefined || action.professional === null) {
                    this.danger(this.$t('charges.required_user'))
                    return false;
                }
            }

            if ((this.paymentMethod.value === "check" || this.paymentMethod.value === "transfer") && !this.checkInfoStored) {
                this.checkModalActive = true;
                return false;
            }

            try {
                this.loading = true
                const { data } = await PaymentResource.store(payload);
                this.loading = false

                if (data.success) {

                    this.budget = data.data.budget;
                    this.payment = data.data.payment;

                    if (this.paymentType.value == 3) {

                        this.paymentTypes[0].disabled = !this.payment.has_partials
                        this.paymentTypes[1].disabled = !this.payment_has_partials
                        _.map(this.budget.budget_actions, (item, index) => {
                            item.is_selected = true
                            this.$set(item, '_showDetails', true)
                        })

                        this.success(this.$t('charges.deferred_successfully'))
                        return false
                    } else {
                        this.success(this.$t('charges.successfully'))
                        this.$router.push({
                            name: "payments-budgets-preview",
                            params: {
                                id: this.budget.id,
                                payment_id: this.payment.id,
                                model: 'apps-payments-list',
                            },
                        });
                        return false
                    }
                } else {
                    this.danger(data.message)
                }

            } catch (e) {
                this.loading = false
                if ((this.paymentMethod.value === "check" || this.paymentMethod.value === "transfer")) {
                    this.checkModalActive = true;
                    return false;
                }
                this.handleResponseErrors(e)
            }
        },
        async storePartialPayment() {

            const payload = {
                budget_id: this.budget.id,
                payment_method: this.paymentMethod,
                check: this.check,
            }

            if ((this.paymentMethod.value === "check" || this.paymentMethod.value === "transfer") && !this.checkInfoStored) {
                this.checkModalActive = true;
                return false;
            }

            try {
                this.loading = true
                const { data } = await PaymentResource.storePartial(payload)
                this.loading = false
                console.log(data)
                if (data.success) {
                    this.success(this.$t('charges.successfully'))
                    this.$router.push({
                        name: "payments-budgets-preview",
                        params: {
                            id: data.data.payment.budget_id,
                            payment_id: data.data.payment.id,
                            model: 'apps-payments-list',
                        },
                    });
                    return false
                } else {
                    this.danger(data.message)
                }

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        storeWithCheck() {
            this.checkInfoStored = true;
            if (this.budget.has_partials) {
                this.storePartialPayment();
            } else {
                this.store();
            }
        },
        expandAll() {
            for (const item of this.clinicalActions) {
                this.$set(item, '_showDetails', true)
            }
        },
        collapseAl() {
            for (const item of this.clinicalActions) {
                this.$set(item, '_showDetails', false)
            }
        }
    },
    watch: {
        income(newValue) {
            let stringValue = newValue.toString();
            if (Number(stringValue) < 0) {
                this.income = 0;
                return;
            }
            let res = stringValue.toString().split(".");
            if (res.length > 1) {
                if (res[1].length > 2) {
                    this.income = Number(stringValue).toFixed(2);
                    return;
                }
            }
            if (stringValue.startsWith("0")) {
                this.income = Number(stringValue.substring(1));
                return;
            }
            this.updateTable();
        },
        paymentType(newValue) {
            this.collapseAl()
            this.$forceUpdate();
            switch (newValue.value) {
                case 1: //Contado
                case 3: //Diferido
                    this.clinicalActions = this.clinicalActions.map((action) => {
                        action.is_selected = true;
                        return action;
                    });
                    this.laboratoryActions = this.laboratoryActions.map((action) => {
                        action.is_selected = true;
                        return action;
                    });
                    this.income =
                        this.totalClinicalActions +
                        this.totalLaboratoryActions -
                        this.positiveBalance;
                    this.expandAll()
                    break;
                case 2: //Abonos
                    this.clinicalActions = this.clinicalActions.map((action) => {
                        if (action.debt === 0) {
                            action.is_selected = true;
                            action.is_disabled = true;
                            this.$set(action, '_showDetails', true)
                        } else {
                            action.is_selected = false
                            action.is_disabled = false
                        }
                        return action;
                    });
                    this.laboratoryActions = this.laboratoryActions.map((action) => {
                        if (action.debt === 0) {
                            action.is_selected = true;
                            action.is_disabled = true;
                            this.$set(action, '_showDetails', true)
                        } else {
                            action.is_selected = false
                            action.is_disabled = false
                        }
                        return action;
                    });
                    this.income = 0;
                    break;
            }
        },
        paymentMethod(newValue) {
            if (newValue.value === "check") {
                this.isTransfer = false
                this.checkModalIsTransfer = false;
                this.checkModalTitle = this.$t('scharges.check_detail_title');
            } else {
                this.isTransfer = true
                this.checkModalIsTransfer = true;
                this.checkModalTitle = this.$t('charges.transfer_detail_title');
            }
        }
    }
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
