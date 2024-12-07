<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <b-card no-body>
            <div class="m-1">
                <b-row>
                    <b-col cols="12" md="10">
                        <b-form-group
                            :label="$t('filters.title')" 
                            label-cols="12" 
                            label-class="font-weight-bolder" 
                            label-align="left" >
                            <b-form-radio-group
                                id="radio-group-1"
                                v-model="filter_by"
                                :options="optionsFilters"
                                :reduce="option => option.value"
                                name="radio-options"
                                class="groupselect"
                            ></b-form-radio-group>
                        </b-form-group>
                    </b-col>

                    <b-col cols="12" md="2">
                        <b-button @click="$router.back()" size="sm" variant="outline-danger" class="float-right">
                            Regresar
                        </b-button>
                    </b-col>

                    <b-col cols="12" md="3">
                        <label for="date_start">{{ $t('start_at') }}</label>
                        <flat-pickr id="date_end" v-model="start_at" class="form-control" :config="{
                                dateFormat: 'Y-m-d'
                            }" placeholder="DD/MM/YYYY" />
                    </b-col>

                    <b-col cols="12" md="3">
                        <label for="date_start">{{ $t('end_at') }}</label>
                        <flat-pickr id="date_end" v-model="end_at" class="form-control" :config="{
                                dateFormat: 'Y-m-d'
                            }" placeholder="DD/MM/YYYY" />
                    </b-col>

                    <b-col cols="12" md="3">
                        <div class="demo-inline-spacing">
                            <b-button size="sm" @click="getPayments" variant="outline-primary"
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'">
                                <feather-icon icon="SearchIcon" />
                                {{ $t("button_filter") }}
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
            </div>      
        </b-card>
        
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">

            <div class="m-2">
            <!-- Table Top -->
            <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class=" d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t("show") }}</label>
                        <v-select v-model="perPage" :options="perPageOptions" :clearable="false" class="per-page-selector d-inline-block mx-50 select-size-sm"/>
                        <label>{{ $t("entries") }}</label>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input size="sm" v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('payments.input_search')" 
                                @keyup.enter="getPayments"/>
                                <b-input-group-append>
                                <b-button size="sm" variant="primary" @click="getPayments">
                                    <feather-icon icon="SearchIcon" /> Buscar
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

                 

            <b-table
                ref="refPaymentListTable"
                class="position-relative table-small small text-small"
                :items="payments"
                responsive
                :fields="columns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc"
                :current-page="currentPage"
                busy.sync="loading"
                stacked="md"
                small
            >

                <!-- Column: payment_id -->
                <template #cell(payment_id)="data">
                    <b-link :to="{ name: 'payments-budgets-preview', 
                        params: { id: data.item.budget_id, payment_id: data.item.id, model: 'apps-payments-view' }}" class="font-weight-bold">
                        #{{ data.item.id }}
                    </b-link>
                </template>
                
                <!-- Column: Budget -->
                <template #cell(budget)="data">
                    <p>
                        <b-link :to="{ name: 'apps-budgets-show', 
                            params: { id: data.item.budget.id }}" class="font-weight-bold">
                            {{(data.item.budget.label)}}
                        </b-link>
                    </p>                        
                </template>
                

                <!-- Column Patient -->                        
                <template #cell(patient)="data">
                    <div v-if="canAccess('patients.show')">
                        <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.budget.patient.id }, }" class="font-weight-bold d-block text-wrap">
                            {{ data.item.budget.patient.full_name }}
                        </b-link>
                    </div>
                    <div v-else>
                        {{ data.item.budget.patient.full_name }}
                    </div>
                    <small class="text-muted">{{ data.item.budget.patient.email }}<br>{{$t('patients.document_type')}} ({{data.item.budget.patient.document_type}}): {{data.item.budget.patient.rut}}</small>
                    </b-link>
                </template>

                <!-- Column: amount -->
                <template #cell(amount)="data">
                    {{ formatPrice(data.item.amount) }}
                </template>

                    <!-- Column: created at -->
                <template #cell(created_at)="data">
                    <span class="text-capitalize">{{ dateTimeFormat(data.item.payment_date) }}</span>
                </template>

                <!-- Column: check_paid -->
                <template #cell(check_paid)="data">
                    <b-badge pill :variant="`${data.item.check_paid ? 'success' : 'danger'}`" class="text-capitalize">
                        {{formatActive(data.item.check_paid)}}
                    </b-badge>
                </template>

                <!-- Column: Method -->
                <template #cell(method)="data">
                    <span>{{translatePaymentMethod(data.item.method)}}</span><br>
                    <span v-if="data.item.check" class="card-text mb-25">
                        <strong>{{$t('checks.table_reference')}}:</strong> {{data.item.check.reference}}<br>
                        <strong>{{$t('checks.table_bank')}}:</strong> {{data.item.check.bank}}<br>
                        <strong>{{$t('checks.table_serie')}}:</strong> {{data.item.check.serie}}
                    </span>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button
                            v-if="!data.item.is_closed && canAccess('payments.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deletePayment(data.item)"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_destroy')}`">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="payments" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalPayment" :per-page="perPage" size="lg"/>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-card>
    </b-overlay>
</template>

<script>
import _ from "lodash";
import * as moment from "moment";
import {
    BCard,
    BRow,
    BCol,
    BForm,
    BInputGroupPrepend, 
    BInputGroupAppend, 
    BInputGroup,
    BFormGroup,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BSpinner,
    BOverlay,
    BSidebar,
    BFormInvalidFeedback,
    BFormTextarea,
    BTooltip, VBTooltip,
    BFormCheckbox, BFormRadioGroup, BFormRadio
} from "bootstrap-vue";

import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import store from "@/store";
import PaymentProvider from "@/providers/Payments";
const PaymentResource = new PaymentProvider();

if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
}

export default {
    name: 'PaymentView',
    components: {
        BCard,
        BRow,
        BCol,
        BForm,
        BInputGroupPrepend, 
        BInputGroupAppend, 
        BInputGroup,
        BFormGroup,
        BFormInput,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BSpinner,
        BOverlay,
        vSelect,
        BSidebar,
        BFormInvalidFeedback,
        BFormTextarea,
        BTooltip, VBTooltip,
        BFormCheckbox, BFormRadioGroup, BFormRadio,
        flatPickr,
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            payments: [],
            payment: {},
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalPayment: 0,
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
                { key: "actions", label: this.$t("actions") },
            ],
            sortBy: "id",
            sortDesc: true,
            searchQuery: null,
            from: 0,
            to: 0,
            loading: false,
            optionsFilters: [
                { value: 'paid', text: this.$t('filters.status.charged') },
                { value: 'unpaid', text: this.$t('filters.status.receivable') },
                { value: 'all', text: this.$t('filters.status.all') },
            ],
            filter_by: 'unpaid',
            start_at: moment().startOf('month').format('YYYY-MM-DD'),
            end_at: moment().format('YYYY-MM-DD')
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.payments);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalPayment,
            };
        },
        canDeletePayment() {

           
        }
    },
    watch: {
        currentPage(value) {
            this.getPayments();
        },
        perPage(value) {
            this.getPayments();
        },
    },    
    async mounted() {
        await this.getPayments();
    },
    methods: {
        async getPayments() {
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
                filter_by: this.filter_by,
                start: this.start_at,
                end: this.end_at,
            };
            this.loading = true;
            const { data } = await PaymentResource.getList(query);
            this.loading = false;
            this.payments = data.data;
            this.totalPayment = data.total;
        },
        deletePayment (item) {

            const configDay = this.findSetting('app_delete_payments_after')
            if (!configDay || !item.payment_date) {
                this.danger(`No se puede eliminar el pago`)
                return false; // Si la configuración o la fecha de pago no están definidas, no se puede eliminar
            }

            const currentDate = new Date();
            const deleteDate = new Date(item.payment_date);
            deleteDate.setDate(deleteDate.getDate() + configDay);

            console.log([deleteDate, currentDate])

            const canDeleted = deleteDate <= currentDate

            
            if(!canDeleted) // Retorna verdadero si la fecha de eliminación es anterior o igual a la fecha actual
            {
                this.danger(`Este pago no se puede eliminar`);
                return false
            }


            this.$swal({
                title: this.$t('are_you_sure'),
                text: this.$t('you_wont_be_able_to_revert_this'),
                icon: "question",
                input: 'textarea',
                inputLabel: this.$t('confirm_comments'),
                inputPlaceholder: this.$t('confirm_comments_placeholder'),
                inputAttributes: {
                    autocapitalize: 'off',
                    required: 'true',
                },
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
                preConfirm: async (comments) => {

                    try {

                        this.loading = true 
                        const { data } = await PaymentResource.deletePayment(item.id, { comments: comments})
                        this.loading = false

                        if (data.success) {
                            this.success(data.message)
                            this.payments = this.payments.filter((payment) => payment.id !== item.id);
                        } else {
                            this.danger(data.message)
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
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
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

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
