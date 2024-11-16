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

                <!-- Column: Category -->
                <template #cell(category)="data">
                    {{ data.item.category.name }}
                </template>

                <!-- Column: amount -->
                <template #cell(date)="data">
                    <span class="text-capitalize">{{ formatDate(data.item.date) }}</span>
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

                        <b-button v-if="data.item.file"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="secondary" class="btn-icon" size="sm"
                            @click="detailFile(data.item)" v-b-tooltip.hover.right="`${$t('button_tooltip_see_file')}`">
                            <feather-icon icon="EyeIcon" />
                        </b-button>


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


        <!-- Modal CreateUpdate Expenses -->
        <b-modal
            ref="refModalCreateUpdateExpense"
            id="modalCreateUpdateExpense"
            :title="sidebarTitle"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer            
            @cancel="isAddNewExpenseSidebarActive=false"
            @hidden="isAddNewExpenseSidebarActive=false"
            :visible="isAddNewExpenseSidebarActive"
            size="lg"
            >

            <validation-observer ref="expensesRules">
                <b-form ref="form" @submit.prevent>
                    <b-row class="mt-2">

                        <!-- Branch offices -->
                        <b-col md="8">
                            <validation-provider #default="{ errors }" name="branch_office_id" rules="required">
                                <b-form-group :state="errors.length > 0 ? false:null"
                                    :label="$t('expenses.modal_branch_office')" label-for="branch_office_id">
                                    <v-select
                                        id="branch_office_id"
                                        v-model="expense.branch_office_id"
                                        :options="branchOffices"
                                        :reduce="option => option.id"
                                        :clearable="false"
                                        :searchable="false"
                                        label="name"
                                        :placeholder="$t('expenses.modal_branch_office_placeholder')"
                                    />
                                </b-form-group>
                            </validation-provider>
                        </b-col>

                        <!-- Date -->
                        <b-col cols="4">
                            <b-form-group :label="$t('expenses.modal_date')" label-for="reference">
                                <flat-pickr id="reference" v-model="expense.date" class="form-control"
                                    :config="{ dateFormat: 'Y-m-d' }" />
                            </b-form-group>
                        </b-col>

                        <!-- Reason -->
                        <b-col cols="6">
                            <b-form-group :label="$t('expenses.reason')" label-for="reason">
                                <validation-provider #default="{ errors }" :name="$t('expenses.reason')" rules="required">
                                    <b-form-input id="reason" v-model="expense.reason" :state="errors.length > 0 ? false : null"
                                        :placeholder="$t('expenses.reason_placeholder')" />
                                </validation-provider>
                            </b-form-group>
                        </b-col>                        

                        <!-- Category -->
                        <b-col md="6">
                            <validation-provider #default="{ errors }" name="category_id" rules="required">
                                <b-form-group :state="errors.length > 0 ? false:null"
                                    :label="$t('expenses.categories.name')" label-for="category_id">
                                    <v-select
                                        id="category_id"
                                        v-model="expense.expense_category_id"
                                        :options="categories"
                                        :reduce="option => option.id"
                                        :clearable="false"
                                        :searchable="false"
                                        label="name"
                                        :placeholder="$t('expenses.categories.name_placeholder')"
                                    />
                                </b-form-group>
                            </validation-provider>
                        </b-col>

                        

                        <!-- Reference -->
                        <b-col cols="6">
                            <b-form-group :label="$t('expenses.modal_reference')" label-for="reference">
                                <validation-provider #default="{ errors }" :name="$t('expenses.modal_reference')"
                                    rules="required">
                                    <b-form-input id="reference" v-model="expense.reference"
                                        :state="errors.length > 0 ? false : null"
                                        :placeholder="$t('expenses.modal_reference_placeholder')" />
                                </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Amount -->
                        <b-col cols="6">
                            <b-form-group :label="$t('expenses.modal_amount')" label-for="reference">
                                <validation-provider #default="{ errors }" :name="$t('expenses.modal_amount')"
                                    rules="required">
                                    <b-form-input type="number" step="any" id="amount" v-model="expense.amount"
                                        :state="errors.length > 0 ? false : null"
                                        :placeholder="$t('expenses.modal_amount_placeholder')" />
                                </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Notes -->
                        <b-col cols="12">
                            <b-form-group :label="$t('expenses.modal_note')" label-for="note">
                                <b-form-textarea v-model="expense.note" :label="$t('expenses.modal_note')"
                                    label-for="note" rows="3" :placeholder="$t('expenses.modal_note_placeholder')" />
                            </b-form-group>
                        </b-col>

                        <!-- File -->
                        <b-col cols="12">
                            <b-form-group :label="$t('expenses.file')" label-for="file" :description="$t('image_format_limit')">
                               <b-form-file id="file" accept="image/*" @change="handleImageUpload"/>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="mt-3 text-right">
                        <b-col cols="12">
                            <b-button
                                :disabled="loading"
                                class="mr-1"
                                variant="danger" 
                                type="button"                               
                                @click="isAddNewExpenseSidebarActive=false">
                                {{$t('cancel')}}
                            </b-button>
                            <b-button
                                variant="primary"    
                                type="submit"                          
                                :disabled="loading" v-if="canAccess('expenses.store')"
                                @click="validateForm">
                                {{$t('save')}}
                            </b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </validation-observer>
        </b-modal>
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
    BFormFile,
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

import BranchProvider from "@/providers/BranchOffices";
const BranchResource = new BranchProvider();

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
        BFormTextarea,
        BTooltip, 
        VBTooltip,
        BFormFile,

        //
        ValidationProvider,
        ValidationObserver,
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            branchOffices: [],
            categories: [],
            expenses: [],
            expense: {
                date: moment().format('YYYY-MM-DD'),
                reason: null,
                branch_office_id: null,
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
                    key: "category",
                    label: this.$t("expenses.categories.name"),
                },
                {
                    key: "reason",
                    label: this.$t("expenses.reason"),
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
            sidebarTitle: this.$t("expenses.add_title"),
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
        await this.getBranchOffices()
        await this.getExpenseCategories()
        await this.getExpenses();
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
            this.expense.file = null
            if (file) {
                // Verifica el tamaño del archivo (en bytes)
                if (file.size <= 5 * 1024 * 1024) {                
                    // Si el archivo es válido, crea la vista previa
                    this.imagePreview = URL.createObjectURL(file);
                    this.expense.file = file
                } else {
                    // Si el archivo es demasiado grande, muestra un mensaje de error
                    this.danger(this.$t('image_size_valid'))
                    event.target.value = null; // Limpia la selección de archivo en el input
                }
            }
        },
        detailFile(item) {
            window.open(item.file)
        },
        async getBranchOffices () {
            try {
                this.loading = true
                const { data } = await BranchResource.index({isAll: true})
                if (data.success) {
                    this.branchs = data.data
                }                
            }catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }finally {
                this.loading = false
            }
        },        
        async getExpenseCategories () {
            this.loading = true
            const { data } = await ExpenseResource.listCategories()
            this.loading = false
            this.categories = data.data
        },
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
        validateForm () {
            this.$refs.expensesRules.validate().then((success) => {
                if(success) {
                    this.store()
                }
            })
        },
        async store() {

            const formData = new FormData()
            for (const key in this.expense) {
                if (this.expense.hasOwnProperty(key) && this.expense[key] !== null && this.expense[key] !== undefined) {
                    formData.append(key, this.expense[key]);
                }
            }   
            
            if (this.isEdit) {
                formData.append('_method', 'PUT')
            }

            try {

                this.loading = true
                const { data } = this.isEdit ? await ExpenseResource.update(this.expense.id, formData) : await ExpenseResource.save(formData)
                this.loading = false
                if (data.success) {
                    this.success(data.message);                    
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
                    this.isAddNewExpenseSidebarActive = false
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
            this.sidebarTitle = this.$t("expenses.edit_title"),
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
                    date: moment().format('YYYY-MM-DD'),
                    reason: null,
                }
            }
            if (!value) {
                this.isEdit = false
                this.sidebarTitle = this.$t("expenses.add_title")
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
