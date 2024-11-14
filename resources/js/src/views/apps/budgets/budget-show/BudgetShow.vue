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
        <b-alert variant="danger" :show="budget.length <= 0 && !loading">
            <h4 class="alert-heading">
                Error fetching budget data
            </h4>
            <div class="alert-body">
                No budget found with this budget id. Check
                <b-link
                class="alert-link"
                :to="{ name: 'apps-budgets-list'}"
                >
                Budget List
                </b-link>
                for other budget.
            </div>
        </b-alert>

        <section v-if="!isEmpty(budget) && !loading" class="invoice-preview-wrapper">

            <b-row class="invoice-preview">
                <!-- Col: Left (Invoice Container) -->
                <b-col cols="12" xl="9" md="8">
                    <b-card no-body class="invoice-preview-card">
                        <!-- Header -->
                        <b-card-body class="invoice-padding pb-0">
                            <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                                <!-- Header: Left Content -->
                                <div>
                                    <div class="logo-wrapper">
                                        <!-- <b-img fluid :src="logo" alt="Logo" /> -->
                                        <h3 class="text-primary invoice-logo">
                                            <p>{{ budget.name }}</p>
                                        </h3>
                                    </div>
                                </div>

                                <!-- Header: Right Content -->
                                <div class="mt-md-0 mt-2">
                                    <h5>{{$t('budgets.folio')}}: {{budget.label}}</h5>
                                    <small>{{$t('budgets.date_issued')}} {{formatDateTime(budget.created_at)}}</small><br>
                                    <small>{{$t('budgets.table_approved')}}: <span :class="`badge badge-light-${resolveStatusVariant(budget.approved)}`">{{formatActive(budget.approved)}}</span></small><br>
                                    <small v-if="budget">{{$t('budgets.transmitter')}} {{budget.user.name}}</small>
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
                                    <!-- Patients -->
                                    <b-form-group :label="$t('budgets.patient')" label-for="patient">
                                        <b-form-input
                                            id="patient"
                                            readonly
                                            size="sm"
                                            v-model="budget.patient.full_name"
                                        />
                                    </b-form-group>

                                    <!-- Invoice Client & Payment Details -->
                                    <b-card-body v-if="budget.patient" class="invoice-padding pt-0">
                                        <b-row class="invoice-spacing">
                                            <!-- Col: Invoice To -->
                                            <b-col cols="12" xl="12" class="p-1">
                                                <p class="card-text mb-25">
                                                    <strong>{{ $t('patients.document_type') }}({{
                                                            budget.patient.document_type }}):</strong> {{budget.patient.rut}}
                                                </p>
                                                <p class="card-text mb-25">
                                                    <strong>{{ $t('patients.address') }}:</strong> {{budget.patient.address}}
                                                </p>
                                                <p class="card-text mb-25">
                                                    <strong>{{ $t('patients.phone') }}:</strong> {{budget.patient.phone}}, {{budget.patient.cellphone}}
                                                </p>
                                                <p class="card-text mb-25">
                                                    <strong>{{$t('patients.email')}}:</strong> {{budget.patient.email}}
                                                </p>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-col>

                                <!-- Col: Payment Details -->
                                <b-col xl="6" cols="12" class="pt-2 mt-xl-0 mt-2 d-flex justify-content-xl-end">
                                    <div>
                                        <h6 class="mb-2">{{ $t('payments.balance_general') }}:</h6>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="pe-1">
                                                        {{ $t("patients.total_debt") }}:
                                                    </td>
                                                    <td aria-colindex="1" role="cell">
                                                        <strong>{{formatPrice(budget.patient.total_debt)}}</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="pe-1">
                                                        {{ $t('patients.positive_balance') }}:
                                                    </td>
                                                    <td>
                                                        <strong>{{formatPrice(0)}}</strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>

                        <!-- Invoice Description: Table -->
                        <b-table-lite
                            ref="tableItems"
                            responsive
                            :small="true"
                            stacked="md"
                            :items="budget_actions"
                            :fields="columns"
                        >
                           
                            <!-- Type Action -->
                            <template #cell(type)="data">
                                {{ data.item.action_type === 'clinical' ? $t('budgets.clinical_action') : $t('budgets.laboratory_action')}}
                            </template>

                            <!-- Action -->
                            <template #cell(action)="data">
                                {{data.item.action_name}}
                            </template>

                            <!-- Group -->
                            <template #cell(group)="data">
                               {{data.item.action_group_name}}<br>
                            </template>

                            <!-- Area -->
                            <template #cell(area)="data">
                                <span class="badge badge-light-warning">{{data.item.area}}</span>
                            </template>

                            <!-- Price -->
                            <template #cell(price)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(data.item.price) }}
                                </span>
                            </template>

                            <!-- Discount -->
                            <template #cell(discount)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(data.item.discount) }}
                                </span>
                            </template>

                            <!-- Discount -->
                            <template #cell(total)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(parseFloat(data.item.price) - parseFloat(data.item.discount)) }}
                                </span>
                            </template>
                        </b-table-lite>

                        <!-- Invoice Description: Total -->
                        <b-card-body v-if="budget_actions.length > 0" class="invoice-padding pb-0">
                            <b-row>
                                <!-- Col: Sales Persion -->
                                <b-col cols="12" md="6" class="mt-md-0 mt-3">
                                    <b-card-text class="mb-0">
                                        <span class="font-weight-bold">{{$t('budgets.comments')}}:</span>
                                    </b-card-text>
                                    <b-form-textarea readonly 
                                        v-model="budget.comments" 
                                        id="textarea-default" 
                                        size="sm"
                                        :placeholder="$t('budgets.comments_placeholder')"/>
                                </b-col>

                                <!-- Col: Total -->
                                <b-col cols="12" md="6" class="mt-md-6 mt-3 d-flex justify-content-end">
                                    <div class="invoice-total-wrapper">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="pe-1">
                                                        <p class="invoice-total-title">{{$t('budgets.subtotal')}}</p>
                                                    </td>
                                                    <td><p class="invoice-total-amount"><strong>{{formatPrice(budget.subtotal)}}</strong></p></td>
                                                </tr>
                                                <tr>
                                                    <td class="pe-1"><p class="invoice-total-title">{{$t('budgets.discount')}}</p></td>
                                                    <td><p class="invoice-total-amount"><strong>{{formatPrice(budget.discount)}}</strong></p></td>
                                                </tr>
                                                <tr v-if="isEnabledTax">
                                                    <td class="pe-1"><p class="invoice-total-title">{{$t('budgets.tax')}} ({{findSetting('default_tax')}}%)</p></td>
                                                    <td><p class="invoice-total-amount"><strong>{{formatPrice(budget.tax)}}</strong></p></td>
                                                </tr>
                                                <tr>
                                                    <td class="pe-1"><p class="invoice-total-title">{{$t('budgets.total')}}</p></td>
                                                    <td><p class="invoice-total-amount"><strong>{{formatPrice(budget.total)}}</strong></p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-col>
                            </b-row>
                            <!-- Spacer -->
                            <hr class="invoice-spacing" />
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Right Col: Card -->
                <b-col cols="12" md="4" xl="3" class="invoice-actions">
                    <b-card>

                        <!-- Button: send -->
                        <b-button @click="sendEmail(budget)" v-if="findSetting('enable_email_notification') && canAccess('budgets.send')" v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="primary" class="mb-75" block>
                            {{$t('payments.send')}}
                        </b-button>

                        <!-- Button: add payment -->
                        <b-button v-if="budget.total_debt > 0 && budget.approved && canAccess('payments.create')"
                            @click="$router.push({ name: 'payments.budgets.charge', params: { id: budget.id }})"
                            v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="success" class="mb-75" block>
                            {{$t('payments.add_payment')}}
                        </b-button>

                        <!-- Button: edit -->
                        <b-button v-if="!budget.deleted_at && !budget.approved && canAccess('budgets.edit')" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-warning" class="mb-75" block
                            :to="{ name: 'apps-budgets-edit', params: { id: budget.id } }">
                            {{$t('button_edit')}}
                        </b-button>

                        <!-- Button: download -->
                        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-primary" class="mb-75" block @click="donwloadBudget(false)">
                            {{$t('button_download')}}
                        </b-button>

                        <!-- Button: Print -->
                        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-primary" class="mb-75" block @click="donwloadBudget(true)">
                            {{$t('button_print')}}
                        </b-button>

                        <!-- Button: back -->
                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="mb-75" block
                            @click="$router.back()">
                            {{$t('back')}}
                        </b-button>
                    </b-card>
                </b-col>
            </b-row>
        </section>
    </b-overlay>
</template>

<script>
import {
  BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable,BFormCheckbox, BFormGroup, BFormInput,
  BModal, VBModal, BSidebar, BForm, BIcon, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormTextarea,BFormTags,BImg
} from 'bootstrap-vue'
import router from "@/router";
import "animate.css";
import vSelect from "vue-select";
import store from "@/store";
import Ripple from 'vue-ripple-directive'
import BudgetProvider from '@/providers/Budgets'
const BudgetResource = new BudgetProvider();

export default {
    directives: {
        Ripple,
        'b-modal': VBModal,
        'b-toggle': VBToggle,
    },
    components: {
        BRow,
        BSidebar,
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
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal,
        VBModal,
        BForm,
        BIcon,
        BInputGroup,
        BInputGroupAppend,
        BInputGroupPrepend,
        BFormTextarea,
        BFormTags,
        BImg,
    },
    data () {
        return {
            loading: false,
            budget_id: router.currentRoute.params.id,
            columns:[
                {
                    key: "type",
                    label: this.$t('budgets.action_type'),
                },
                {
                    key: "action",
                    label: this.$t('budgets.table_action_name'),
                },
                {
                    key: "group",
                    label: this.$t('budgets.table_action_group'),
                },
                {
                    key: "area",
                    label: this.$t('budgets.table_action_area'),
                },
                {
                    key: "price",
                    label: this.$t("budgets.table_action_price"),
                },
                {
                    key: "discount",
                    label: this.$t("budgets.table_action_discount"),
                },
                {
                    key: "total",
                    label: this.$t("budgets.table_action_total"),
                },
                {
                    key: "actions",
                    label: '',
                },
            ],
            patient: {},
            patients: [],
            areasSelected: [],
            selectedPatient: null,
            selectedAction: null,
            showButtonAction: false,
            budget: {},
            budgets: [],
            customer: {},
            totalDebt: 0,
            actionTypes: [
                { value: 'clinical', label: this.$t('clinical_actions') },
                { value: 'laboratory', label: this.$t('laboratory_actions') },
            ],
            actionGroups: [],
            actions: [],
            action: {},
            budget_actions: [],
            morePieces: false,
        }
    },
    computed: {
        budget_cost () {
            return this.budget_actions.reduce((carry, action) => {
                return carry + parseFloat(action.price);
            }, 0);
        },
        budget_discount () {
            return this.budget_actions.reduce((carry, action) => {
                return carry + parseFloat(action.discount);
            }, 0);
        },
        budget_total () {
            return this.budget_actions.reduce((carry, action) => {
                return carry + (parseFloat(action.price) - parseFloat(action.discount));
            }, 0);
        },
        budget_subtotal () {
            return this.budget_actions.reduce((carry, action) => {
                return carry + parseFloat(action.price);
            }, 0);
        },
        budget_tax() {
            const enableTax = this.isEnabledTax;
            if (enableTax) {
                const tax = parseFloat(this.findSetting("default_tax"));
                if (_.isEmpty(this.items)) return 0;
                const result =
                    this.items.reduce((carry, action) => {
                        return carry + parseFloat(action.total);
                    }, 0) *
                    (tax / 100);
                return _.isNaN(result) ? 0 : result;
            }
            return 0;
        },
        user_id() {
            return store.state.auth.user.id
        },
        isEnabledTax() {
            return this.findSetting("enable_tax")
        },
        logo () {
            return store.state.auth.logo || window._setting.app_logo
        },
    },
    async mounted() {
       await this.getBudget()
    },
    methods: {
        async getBudget() {
            this.loading = true
            const { data } = await BudgetResource.getBudgetDetail(router.currentRoute.params.id)
            this.loading = false
            this.budget = data.data
            this.budget_actions = this.budget.budget_actions
        },
        async printBudget() {
            window.print()
        },
        async donwloadBudget(isPrint = false){

            const query = { 
                isPrint: isPrint
            }
            try {
                this.loading = true
                const { data } = await BudgetResource.donwloadPDF(this.budget.id, query)
                this.loading = false

                if (isPrint) {
                    const file = new Blob([data], { type: 'application/pdf' });
                    const fileURL = URL.createObjectURL(file);
                    window.open(fileURL, '_blank');
                } else {
                    const url =  window.URL.createObjectURL(new Blob([data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `${this.budget.label}.pdf`);
                    link.click();
                    document.body.appendChild(link);
                }

            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e)
            }
        },
        sendEmail(item) {
            this.$swal({
                title: this.$t('budgets.send_email_tittle'),
                text: this.$t('budgets.send_email_tittle_help'),
                icon: 'question',
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
                inputValue: item.patient.email,
                inputAttributes: {
                    autocapitalize: 'off'
                },
                preConfirm: async (value) => {
                    try {
                        this.loading = true;
                        const { data } = await BudgetResource.sendEmail(item.id, { email: value });
                        this.loading = false;
                        if (data.success) {
                            this.success(data.message);
                        } else {
                            this.danger(data.message);
                        }
                    }catch(e) {
                        this.loading = false;
                        this.handleResponseErrors(e);
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            })
        },
    },
    watch: {
        selectedPatient(value){
            this.totalDebt = value.budget.reduce((carry, debt) => {
                return carry + parseFloat(debt.total_debt);
            }, 0);
        },
        areasSelected(value) {
            if (!this.morePieces) {

            }
        },
        budget_actions(value) {
        }
    }
}
</script>

<style lang="scss" scoped>
    .bucal-table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }

    .dental-img {
        width: 100%;
        height: auto;
    }

    .tooth-cell {
        cursor: pointer;
    }

    .tooth-cell:hover {
        background-color: #aadfb1!important;
        color: black;
    }

    .tooth-cell .selection{
        background-color: #aadfb1;
    }

    td.selected{
        background-color: #aadfb1!important;
    }

    div.selected{
        background-color: #aadfb1!important;
    }


    .tooth-cell p {
        text-align: center;
    }

    .group-cell {
        text-align: center;
    }

    .group-cell:hover {
        background-color: #aadfb1;
        cursor: pointer;
    }

    .half-row .mandibula {
        border-top: white !important;
    }

    .half-row {
        border-top: solid 2px #ada797;
    }

    .half-col {
        border-right: solid 2px #ada797 !important;
    }

    input[type=checkbox] {
        display:none;
    }


    input[type=checkbox]:checked ~ div  {
        background-color: #aadfb1;
    }
</style>
<style lang="scss">
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
              > .col-12 {
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
