<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>
        
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">

            <div class="m-2">
                <b-row>
                    <b-col cols="12" md="8" class="p-1">
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
                                @change="getPayments"
                            ></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </div>

            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class=" d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t("show") }}</label>
                        <v-select v-model="perPage" :options="perPageOptions" :clearable="false" class="per-page-selector d-inline-block mx-50"/>
                        <label>{{ $t("entries") }}</label>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('payments.input_search')" 
                                @keyup.enter="getPayments"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getPayments">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>                                
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refPaymentListTable"
                class="position-relative"
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
                size="sm"
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
                    {{ dateTimeFormat(data.item.payment_date) }}
                </template>

                <!-- Column: check_paid -->
                <template #cell(check_paid)="data">
                    <b-badge pill :variant="`${data.item.check_paid ? 'success' : 'danger'}`" class="text-capitalize">
                        {{formatActive(data.item.check_paid)}}
                    </b-badge>
                </template>

                <!-- Column: Method -->
                <template #cell(method)="data">
                    <span>{{translatePaymentMethod(data.item.method)}}</span>
                    <p v-if="data.item.check" class="card-text mb-25">
                        <label><strong>{{$t('checks.table_bank')}}:</strong> {{data.item.check.reference}}</label>
                        <label><strong>{{$t('checks.table_bank')}}:</strong> {{data.item.check.bank}}</label>
                        <label><strong>{{$t('checks.table_serie')}}:</strong> {{data.item.check.serie}}</label>
                    </p>
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
import PaymentProvider from "@/providers/Payments";
const PaymentResource = new PaymentProvider();
export default {
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
            filter_by: 'all',
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
            };
            this.loading = true;
            const { data } = await PaymentResource.getList(query);
            this.loading = false;
            this.payments = data.data;
            this.totalPayment = data.total;
        },
        deletePayment (item) {
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
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
