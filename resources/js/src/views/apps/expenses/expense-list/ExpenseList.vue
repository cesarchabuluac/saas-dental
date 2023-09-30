<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <!-- Add new expenses -->
        <b-sidebar id="add-new-user-sidebar" :visible="isAddNewExpenseSidebarActive" bg-variant="white"
            sidebar-class="sidebar-lg" shadow backdrop no-header right
            @change="(val) => isAddNewExpenseSidebarActive = val">
            <template #default="{ hide }">
                <!-- Header -->
                <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                    <h5 class="mb-0">{{ $t('expenses.modal_title') }}</h5>
                    <feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
                </div>

                <!-- form -->
                <validation-observer ref="expensesRules">
                    <b-form class="p-2">
                        <b-row>
                            <!-- reference -->
                            <b-col cols="12">
                                <b-form-group :label="$t('expenses.modal_date')" label-for="reference">
                                    <flat-pickr id="reference" v-model="expense.date" class="form-control"
                                        :config="{ dateFormat: 'Y-m-d' }" />
                                </b-form-group>
                            </b-col>

                            <!-- reference -->
                            <b-col cols="12">
                                <b-form-group :label="$t('expenses.modal_reference')" label-for="reference">
                                    <validation-provider #default="{ errors }" :name="$t('expenses.modal_reference')"
                                        rules="required">
                                        <b-form-input id="reference" v-model="expense.reference"
                                            :state="errors.length > 0 ? false : null"
                                            :placeholder="$t('expenses.modal_reference_placeholder')" />
                                    </validation-provider>
                                </b-form-group>
                            </b-col>

                            <b-col cols="12">
                                <b-form-group :label="$t('expenses.modal_amount')" label-for="amount">
                                    <cleave id="amount" v-model="expense.amount" class="form-control" :raw="false" :options="{
                                        numeral: true,
                                        numeralThousandsGroupStyle: 'thousand',
                                    }" placeholder="10,000" />
                                </b-form-group>
                            </b-col>

                            <b-col cols="12">
                                <b-form-group :label="$t('expenses.modal_note')" label-for="note">
                                    <b-form-textarea v-model="expense.note" :label="$t('expenses.modal_note')"
                                        label-for="note" rows="3" :placeholder="$t('expenses.modal_note_placeholder')" />
                                </b-form-group>
                            </b-col>

                            <!-- button -->
                            <b-col cols="12">
                                <b-button :disabled="loading" v-if="canAccess('expenses.store')" variant="primary"
                                    type="submit" @click.prevent="store">
                                    {{ $t('save') }}
                                </b-button>

                                <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="button"
                                    variant="outline-secondary" @click="hide">
                                    {{ $t("cancel") }}
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </validation-observer>
            </template>
        </b-sidebar>

        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t("show") }}</label>
                        <v-select v-model="perPage" :options="perPageOptions" :clearable="false"
                            class="per-page-selector d-inline-block mx-50" />
                        <!-- <label>{{ $t("entries") }}</label> -->
                        <b-button v-if="canAccess('expenses.create')" variant="primary"
                            @click="isAddNewExpenseSidebarActive = true">
                            <span class="text-nowrap">{{ $t("add") }}</span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1"
                                    :placeholder="$t('expenses.input_search')" @keyup.enter="getExpenses" />
                                <b-input-group-prepend>
                                    <b-button variant="primary" @click="getExpenses">
                                        <feather-icon icon="SearchIcon" />
                                    </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table ref="refExpensesListTable" class="position-relative" :items="expenses" responsive :fields="columns"
                primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc" :current-page="currentPage" busy.sync="loading" stacked="md">
                <!-- Empty -->
                <template slot="empty">
                    <div v-if="loading" class="d-flex justify-content-center mb-1">
                        <b-spinner style="width: 3rem; height: 3rem" class="mr-1" label="Loading..." variant="primary" />
                    </div>
                </template>

                <!-- Column: amount -->
                <template #cell(date)="data">
                    {{ dateFormat(data.item.date) }}
                </template>

                <!-- Column: amount -->
                <template #cell(amount)="data">
                    {{ formatPrice(data.item.amount) }}
                </template>

                <!-- Column: Status -->
                <template #cell(deleted_at)="data">
                    <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`" class="text-capitalize">
                        {{ resolveStatusTranslate(data.item.deleted_at) }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button v-if="!data.item.deleted_at && canAccess('expenses.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="btn-icon" size="sm"
                            @click="editExpense(data.item)" v-b-tooltip.hover.right="`${$t('button_tooltip_edit')}`">
                            <feather-icon icon="EditIcon" />
                        </b-button>

                        <b-button v-if="!data.item.deleted_at && canAccess('expenses.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon" size="sm"
                            @click="deleteExpense(data.item)" v-b-tooltip.hover.right="`${$t('button_tooltip_destroy')}`">
                            <feather-icon icon="Trash2Icon" />
                        </b-button>

                        <b-button v-if="data.item.deleted_at && canAccess('expenses.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="btn-icon" size="sm"
                            @click="deleteExpense(data.item)" v-b-tooltip.hover.right="`${$t('button_tooltip_active')}`">
                            <feather-icon icon="CheckIcon" />
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="expenses" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalExpense" :per-page="perPage" size="lg" />
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
    BTooltip, VBTooltip
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import { required, alphaNum } from "@validations";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import store from "@/store";
import Cleave from 'vue-cleave-component'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";

import ExpensesProvider from "@/providers/Expenses";
const ExpenseResource = new ExpensesProvider();

if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
    localize('es');
}
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
        flatPickr,
        Cleave,
        BFormInvalidFeedback,
        ValidationProvider,
        ValidationObserver,
        BFormTextarea,
        BTooltip, VBTooltip
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            expenses: [],
            expense: {
                date: moment().format('YYYY-MM-DD'),
            },
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalExpense: 0,
            columns: [
                {
                    key: "date",
                    label: this.$t("expenses.table_date"),
                },
                {
                    key: "reference",
                    label: this.$t("expenses.table_reference"),
                },
                {
                    key: "amount",
                    label: this.$t("expenses.table_amount"),
                },
                {
                    key: "note",
                    label: this.$t("expenses.table_note"),
                },
                {
                    key: "updated_at",
                    label: this.$t("expenses.table_updated_at"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            sortBy: "date",
            sortDesc: true,
            searchQuery: null,
            from: 0,
            to: 0,
            loading: false,
            isAddNewExpenseSidebarActive: false,
            sidebarTitle: this.$t("expense_add_title"),
            isEdit: false,
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.expenses);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalExpense,
            };
        },
    },
    async mounted() {
        await this.getExpenses();
    },
    methods: {
        async getExpenses() {
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };
            this.loading = true;
            const { data } = await ExpenseResource.getList(query);
            this.loading = false;
            this.expenses = data.data;
            this.totalExpense = data.total;
        },
        async store() {

            try {
                if (!this.isEdit) {
                    this.expense.branch_office_id = 1
                    this.expense.user_id = store.state.auth.user.id
                }
                this.expense.amount = this.expense.amount.replace(/,/g, '');
                this.loading = true
                const { data } = (this.isEdit) ? await ExpenseResource.update(this.expense.id, this.expense) : await ExpenseResource.save(this.expense)
                this.loading = false
                if (data.success) {
                    this.success(data.message);
                    this.isAddNewExpenseSidebarActive = false
                    if (this.isEdit) {
                        this.expenses = this.expenses.map(expense => {
                            if (expense.id === this.expense.id) {
                                return data.data
                            }
                            return expense
                        })
                    } else {
                        this.expenses.push(data.data)
                    }
                    this.isEdit = false
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        editExpense(item) {
            this.isEdit = true
            this.sidebarTitle = this.$t('expense_edit_title')
            this.expense = { ...item }
            this.isAddNewExpenseSidebarActive = true
        },
        deleteExpense(item) {
            this.$swal({
                title: this.$t("are_you_sure"),
                text: !item.deleted_at
                    ? this.$t("you_wont_be_able_to_revert_this")
                    : this.$t("you_will_be_able_to_revert_this"),
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
                        this.loading = true
                        const { data } = await ExpenseResource.delete(item.id)
                        this.loading = false
                        if (data.success) {
                            this.success(data.message)
                            this.expenses = this.expenses.filter(e => e.id !== item.id)
                        } else {
                            this.danger(data.message)
                        }

                    } catch (e) {
                        this.loading = false;
                        this.handleResponseErrors(e)
                        this.$swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
    },
    watch: {
        currentPage(value) {
            this.getExpenses();
        },
        perPage(value) {
            this.getExpenses();
        },
        isAddNewExpenseSidebarActive(value) {
            if (!this.isEdit) {
                this.expense = {
                    reference: this.generateReference('GA'),
                    date: moment().format('YYYY-MM-DD')
                }
            }
            if (!value) {
                this.isEdit = false
                this.sidebarTitle = this.$t("expense_add_title")
            }
        }
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
