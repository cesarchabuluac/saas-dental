<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <!-- Alert: No item found -->
        <b-alert variant="danger" :show="payment == undefined">
            <h4 class="alert-heading">Error fetching payment data</h4>
            <div class="alert-body">
                No payment found with this payment #{{ $route.params.payment_id }}. Check
                <b-link class="alert-link" :to="{ name: 'apps-payments-list' }">
                    Payment List
                </b-link>
                for other payments.
            </div>
        </b-alert>

        <section class="invoice-preview-wrapper">
            <b-row v-if="!isEmpty(payment)" class="invoice-preview">
                <!-- Col: Left (Invoice Container) -->
                <b-col cols="12" xl="9" md="8">
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
                                        <strong>{{ payment.branch.name }}</strong>
                                    </p>
                                    <p class="card-text mb-25">
                                        {{ payment.branch.address }}
                                    </p>
                                    <p class="card-text mb-0">
                                        {{ payment.branch.phone }}
                                    </p>
                                    <p class="card-text mb-0">
                                        {{ payment.branch.email }}
                                    </p>
                                </div>

                                <!-- Header: Right Content -->
                                <div class="mt-md-0 mt-2">
                                    <h4 class="invoice-title">
                                        {{ $t('payments.id') }}
                                        <span class="invoice-number">#{{ payment.id }}</span>
                                    </h4>
                                    <div class="invoice-title">
                                        {{ $t('budgets.folio') }}
                                        <span class="invoice-number">{{ payment.budget.label }}</span>
                                    </div>
                                    <div class="invoice-date-wrapper">
                                        <p class="invoice-date-title">
                                            {{ $t('payments.date_issued') }} {{ dateTimeFormat(payment.created_at) }}
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
                                    <h6 class="mb-2">{{ $t('patients.name') }}</h6>
                                    <h6 class="mb-25">{{ payment.budget.patient.full_name }}</h6>
                                    <p class="card-text mb-25">
                                        <strong>{{ $t('patients.address') }}:</strong>
                                        {{ payment.budget.patient.address }}
                                    </p>
                                    <p class="card-text mb-25">
                                        <strong>{{ $t('patients.phone') }}:</strong> {{ payment.budget.patient.phone }},
                                        {{ payment.budget.patient.cellphone }}
                                    </p>
                                    <p class="card-text mb-25">
                                        <strong>{{ $t('patients.email') }}:</strong> {{ payment.budget.patient.email }}
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
                                                    <td><span class="font-weight-bold">{{
                                                        formatPrice(payment.budget.total_cost) }}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="pr-1">{{ $t('payments.total_due') }}</td>
                                                    <td>{{ formatPrice(payment.budget.total_debt) }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="pr-1">{{ $t('payments.total_subscriber') }}</td>
                                                    <td>{{ formatPrice(payment.budget.total_paid) }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="pr-1">{{ $t('payments.positive_balance') }}</td>
                                                    <td>{{ formatPrice(positiveBalance) }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="pr-1"><strong>{{ $t('payments.amount_paid') }}</strong>
                                                    </td>
                                                    <td>{{ formatPrice(payment.amount) }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-col>

                                <!-- Invoice Description: Table -->
                                <b-table-lite ref="tableItems" responsive :items="payment.action_payments"
                                    :fields="columns">

                                    <!-- Description -->
                                    <template #cell(action)="data">
                                        <b-card-text class="font-weight-bold mb-25">
                                            {{ data.item.actions.action_name }}
                                        </b-card-text>
                                        <b-card-text class="text-nowrap">
                                            {{ data.item.actions.action_group_name ? data.item.actions.action_group_name :
                                                $t('budgets.laboratory') }}, <strong>{{ $t('budgets.action_area') }}
                                                {{ data.item.actions.area }}</strong>
                                        </b-card-text>
                                    </template>

                                    <!-- Professional -->
                                    <template #cell(professional)="data">
                                        <b-card-text class="font-weight-bold mb-25"
                                            v-if="data.item.actions.has_previous_professional">
                                            {{ data.item.actions.professional.name }}
                                        </b-card-text>
                                        <b-card-text class="font-weight-bold mb-25" v-else>
                                            {{ $t('budgets.laboratory') }}
                                        </b-card-text>
                                    </template>

                                    <!-- Price -->
                                    <template #cell(price)="data">
                                        {{ formatPrice(data.item.actions.price) }}
                                    </template>

                                    <!-- Discount -->
                                    <template #cell(discount)="data">
                                        {{ formatPrice(data.item.actions.discount) }}
                                    </template>

                                    <!-- Total -->
                                    <template #cell(total)="data">
                                        {{ formatPrice(data.item.actions.subtotal) }}
                                    </template>

                                    <!-- Paid -->
                                    <template #cell(subtotal)="data">
                                        {{ formatPrice(data.item.actions.paid * 1) }}
                                    </template>

                                    <!-- Debt -->
                                    <template #cell(debt)="data">
                                        {{ formatPrice(data.item.actions.debt * 1) }}
                                    </template>

                                </b-table-lite>

                                <!-- Invoice Description: Total -->
                                <b-card-body class="invoice-padding pb-0">
                                    <b-row>
                                        <!-- Col: Payment method -->
                                        <b-col cols="12" md="6" class="mt-md-0 mt-3" order="2" order-md="1">
                                            <b-card-text class="mb-0">
                                                <span class="font-weight-bold">{{ $t('payments.method') }}:</span>
                                                <span class="ml-75">{{ translatePaymentMethod(payment.method) }}</span>
                                            </b-card-text>

                                            <div v-if="payment.check_id">
                                                <b-card-text class="mb-0">
                                                    <span class="font-weight-bold">{{ $t('checks.modal_reference')
                                                    }}:</span>
                                                    <span class="ml-75">{{ payment.check.reference }}</span>
                                                </b-card-text>

                                                <b-card-text class="mb-0">
                                                    <span class="font-weight-bold">{{ $t('checks.modal_bank') }}:</span>
                                                    <span class="ml-75">{{ payment.check.bank }}</span>
                                                </b-card-text>

                                                <b-card-text class="mb-0">
                                                    <span class="font-weight-bold">{{ $t('checks.modal_serie') }}:</span>
                                                    <span class="ml-75">{{ payment.check.serie }}</span>
                                                </b-card-text>

                                                <b-card-text class="mb-0">
                                                    <span class="font-weight-bold">{{ $t('checks.modal_collection_date')
                                                    }}:</span>
                                                    <span class="ml-75">{{ dateFormat(payment.check.date) }}</span>
                                                </b-card-text>
                                            </div>
                                        </b-col>

                                        <b-col cols="12" md="6" class="mt-md-6 d-flex justify-content-end" order="1"
                                            order-md="2">
                                            <b-card-text class="mb-0">
                                                <h4 class="font-weight-bolder">{{ $t('total') }}
                                                    {{ formatPrice(payment.amount) }}</h4>
                                            </b-card-text>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Right Col: Card -->
                <b-col cols="12" md="4" xl="3" class="invoice-actions">
                    <b-card>

                        <!-- Button: Send Invoice -->
                        <b-button v-if="isEnableNotification" @click="sendInvoice"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="success" class="mb-75" block>
                            {{ $t('button_send') }}
                        </b-button>

                        <!-- Button: download -->
                        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-primary" class="mb-75" block
                            @click="donwloadPDF(false)">
                            {{ $t('button_download') }}
                        </b-button>

                        <!-- Button: Print -->
                        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-primary" class="mb-75" block
                            @click="donwloadPDF(true)">
                            {{ $t('button_print') }}
                        </b-button>

                        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-danger" class="mb-75" block
                            @click="redirect">
                            {{ $t('back') }}
                        </b-button>
                    </b-card>
                </b-col>
            </b-row>
        </section>
    </b-overlay>
</template>

<script>
import _ from 'lodash'
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput
} from 'bootstrap-vue'
import "animate.css";
import vSelect from "vue-select";
import Logo from '@core/layouts/components/Logo.vue'
import Ripple from 'vue-ripple-directive'
import PaymentProvider from '@/providers/Payments'

const PaymentResource = new PaymentProvider();

export default {
    name: "PaymentPreview",
    directives: {
        Ripple,
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
    },
    data() {
        return {
            columns: [
                {
                    key: "action",
                    label: this.$t("charges.table_description"),
                },
                {
                    key: "professional",
                    label: this.$t("charges.table_profesional"),
                },
                {
                    key: "price",
                    label: this.$t("charges.table_costo"),
                },
                {
                    key: "discount",
                    label: this.$t('budgets.discount'),
                },
                {
                    key: "total",
                    label: this.$t('budgets.total'),
                },
                {
                    key: "subtotal",
                    label: this.$t("budgets.subtotal"),
                },
                {
                    key: "debt",
                    label: this.$t("budgets.debt"),
                },
            ],
            payment_id: this.$route.params.payment_id,
            budget_id: this.$route.params.id,
            payment: {},
            loading: false,
            income: 0,
            remainingIncome: 0,
            positiveBalance: 0,
            budget_action_id: 0,
            clinicalActions: [],
            laboratoryActions: [],
            profesional: {},
            budget: {},
            check: {},
            toPrint: false,
            model: null,
            actions: [],
        }
    },
    computed: {
        totalIncome() {
            return Number(this.income) + Number(this.positiveBalance);
        },
        totalClinicalActions() {
            return this.clinicalActions.reduce((carry, action) => {
                return carry + action.debt;
            }, 0);
        },
        totalLaboratoryActions() {
            return this.laboratoryActions.reduce((carry, action) => {
                return carry + action.debt;
            }, 0);
        },
        isEnableNotification() {
            return this.findSetting('enable_email_notification')
        }
    },
    async mounted() {
        console.log(this.$route.params)
        await this.paymentDetail()
    },
    methods: {
        async paymentDetail() {

            try {
                this.loading = true
                const { data } = await PaymentResource.detail(this.payment_id)
                this.loading = false
                this.payment = data.data
            } catch (e) {
                this.loading = false
                this.payment = undefined
            }
        },
        sendInvoice() {
            this.$swal({
                title: this.$t('send_email_title'),
                text: this.$t('send_email_title_help'),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t('yes_continue'),
                cancelButtonText: this.$t('cancel'),
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-outline-danger ml-1",
                },
                showClass: {
                    popup: "animate__animated animate__flipInX",
                },
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                input: 'email',
                inputValue: this.payment.budget.patient.email,
                preConfirm: async (value) => {

                    try {
                        this.loading = true
                        const { data } = await PaymentResource.send({ id: this.payment.id, email: value, isMail: true })
                        this.loading = false

                        if (data.success) {
                            this.success(data.message)
                        } else {
                            this.danger(data.message)
                        }

                    } catch (e) {
                        this.loading = false;
                        this.handleResponseErrors(e);
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });

        },
        async donwloadPDF(isPrint = false) {

            const query = {
                isPrint: isPrint
            }

            try {
                this.loading = true
                const { data } = await PaymentResource.donwloadPDF(this.payment.id, query)
                this.loading = false

                if (isPrint) {
                    const file = new Blob([data], { type: 'application/pdf' });
                    const fileURL = URL.createObjectURL(file);
                    window.open(fileURL, '_blank');
                } else {
                    const url = window.URL.createObjectURL(new Blob([data]));
                    const link = document.createElement('a');
                    const title = this.$t('payments.card_payment')
                    link.href = url;

                    link.setAttribute('download', `${title} ${this.payment.id} ${this.payment.budget.patient.full_name}.pdf`);
                    link.click();
                    document.body.appendChild(link);
                }

            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e)
            }
        },
        redirect() {
            console.log(this.$route.params.model)
            if (this.$route.params.model) {
                this.$router.push({ name: this.$route.params.model })
                return
            }
            this.$router.push({ name: 'apps-payments-list' })
        }
    }
}
</script>

<style lang="scss">
// @import "~@resources/scss/base/pages/app-invoice.scss";
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>


<style lang="scss">
@media print {

    // Global Styles
    body {
        background-color: transparent !important;
    }

    nav.header-navbar {
        display: none;
    }

    .main-menu {
        display: none;
    }

    .header-navbar-shadow {
        display: none !important;
    }

    .content.app-content {
        margin-left: 0;
        padding-top: 2rem !important;
    }

    footer.footer {
        display: none;
    }

    .card {
        background-color: transparent;
        box-shadow: none;
    }

    .customizer-toggle {
        display: none !important;
    }

    // Invoice Specific Styles
    .invoice-preview-wrapper {
        .row.invoice-preview {
            .col-md-8 {
                max-width: 100%;
                flex-grow: 1;
            }

            .invoice-preview-card {
                .card-body:nth-of-type(2) {
                    .row {
                        >.col-12 {
                            max-width: 50% !important;
                        }

                        .col-12:nth-child(2) {
                            display: flex;
                            align-items: flex-start;
                            justify-content: flex-end;
                            margin-top: 0 !important;
                        }
                    }
                }
            }
        }

        // Action Right Col
        .invoice-actions {
            display: none;
        }
    }
}
</style>
