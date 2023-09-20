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
                        <b-form-group :label="$t('filters.title')" label-cols="12" label-class="font-weight-bolder"
                            label-align="left">
                            <b-form-radio-group id="radio-group-1" v-model="filter_by" :options="optionsFilters"
                                :reduce="option => option.value" name="radio-options" class="groupselect"
                                @change="filterOptions"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </div>


            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t("show") }}</label>
                        <v-select v-model="perPage" :options="perPageOptions" :clearable="false"
                            class="per-page-selector d-inline-block mx-50" />
                        <b-button v-if="canAccess('budgets.create')" variant="primary"
                            @click="$router.push({ name: 'apps-budgets-add', })">
                            <span class="text-nowrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1"
                                    :placeholder="$t('budgets.search_options')" @keyup.enter="getBudgets" />
                                <b-input-group-prepend>
                                    <b-button variant="primary" @click="getBudgets">
                                        <feather-icon icon="SearchIcon" />
                                    </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table ref="refBugdetsListTable" class="position-relative" :items="budgets" responsive striped hover
                :fields="columns" primary-key="id" :sort-by.sync="sortBy" show-empty
                :empty-text="$t('datatables.sZeroRecords')" :sort-desc.sync="sortDesc" :current-page="currentPage"
                busy.sync="loading" stacked="md">

                <!-- Label -->
                <template #cell(label)="data">
                    <b-link @click="data.toggleDetails" class="text-wrap" :id="`invoice-row-${data.item.id}-detail-icon`"
                        v-b-tooltip.hover :title="$t('budgets.options_show_detail_tooltip')">
                        {{ data.item.label }}
                    </b-link>
                </template>

                <template #cell(branch)="data">
                    <span v-if="!data.item.branch.is_active" class="text-danger text-decoration-line-through">
                        {{ data.item.branch.name }}
                    </span>
                    <span v-else>
                        {{ data.item.branch.name }}
                    </span>
                </template>

                <!-- Patient -->
                <template #cell(patient)="data">
                    <template v-if="canAccess('patients.budget')">
                        <div v-if="canAccess('patients.show')">
                            <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.patient.id }, }"
                                class="font-weight-bold d-block text-wrap">
                                {{ data.item.patient.full_name }}
                            </b-link>
                        </div>
                        <div v-else>
                            {{ data.item.patient.full_name }}
                        </div>
                        <small class="text-muted">{{ data.item.patient.email }}<br>
                            {{ $t('patients.document_type') }} ({{ data.item.patient.document_type }}): {{ data.item.patient.rut }}
                        </small>
                    </template>
                    <template v-else>
                        <span class="text-wrap">
                            <b-media vertical-align="center">
                                <template #aside>
                                    <b-avatar size="32" :src="data.item.patient.has_media ? data.item.patient.avatar : null"
                                        :text="avatarText(data.item.patient.name)" :variant="`light-primary`" />
                                </template>
                                <span class="font-weight-bold d-block text-wrap">
                                    {{ data.item.patient.full_name }}
                                </span>
                                <small class="text-muted">{{ data.item.patient.email
                                }}<br>{{ data.item.patient.document_type }}: {{ data.item.patient.rut }}</small>
                            </b-media>
                        </span>
                    </template>
                </template>


                <!-- Column: created at -->
                <template #cell(created_at)="data">
                    {{ formatDateTime(data.item.created_at) }}
                </template>

                <!-- Column: Approved -->
                <template #cell(approved)="data">
                    <b-badge pill :variant="resolveStatusBadge(data.item.approved)" class="text-capitalize">
                        {{ formatActive(data.item.approved) }}
                    </b-badge>
                </template>

                <!-- Column: total  -->
                <template #cell(total)="data">
                    <span class="badge badge-light-primary float-left">{{ $t('total') }} {{ formatPrice(data.item.total) }}</span><br>
                    <span class="badge badge-light-success float-left mt-1">{{
                        $t('budgets.table_action_paid') }}
                        {{ formatPrice(data.item.total_paid) }} </span><br>
                    <span class="badge badge-light-danger float-left mt-1">{{
                        $t('budgets.table_action_balance') }}
                        {{ formatPrice(data.item.total_debt) }} </span><br>
                </template>

                <!-- Details -->
                <template #row-details="data">
                    <b-row v-if="data.item.comments" class="invoice-spacing">
                        <b-col cols="12" xl="12" class="p-1">
                            <p>{{ $t('budgets.comments') }}: <small>{{ data.item.comments }}</small></p>
                        </b-col>
                    </b-row>

                    <b-card>
                        <b-table ref="tableItems" responsive :items="data.item.budget_actions" :fields="columnsDetail"
                            :small="true" stacked="md">

                            <!-- Type Action -->
                            <template #cell(type)="data">
                                {{ data.item.action_type === 'clinical' ? $t('budgets.clinical_actions') : $t('budgets.laboratory_actions') }}
                            </template>

                            <!-- Action -->
                            <template #cell(action)="data">
                                {{ data.item.action_name }}
                            </template>

                            <!-- Group -->
                            <template #cell(group)="data">
                                {{ data.item.action_group_name }}<br>
                            </template>

                            <!-- Area -->
                            <template #cell(area)="data">
                                <span class="badge badge-light-warning">{{ data.item.area }}</span>
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

                            <!-- Paid -->
                            <template #cell(paid)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(data.item.paid) }}
                                </span>
                            </template>

                            <!-- Debt -->
                            <template #cell(debt)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(data.item.debt) }}
                                </span>
                            </template>
                        </b-table>

                        <b-button class="mt-3" size="sm" variant="outline-warning" @click="data.toggleDetails">
                            {{ $t('budgets.options_hide_detail') }}
                        </b-button>
                    </b-card>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">

                    <div class="demo-inline-spacing">
                        <b-button v-if="data.item.total_debt > 0 && data.item.approved && canAccess('payments.create')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="btn-icon" size="sm"
                            @click="$router.push({ name: 'payments.budgets.charge', params: { id: data.item.id } })"
                            v-b-tooltip.hover.right="`${$t('budgets.options_paid_tooltip')}`">
                            <feather-icon icon="DollarSignIcon" />
                        </b-button>

                        <b-button v-if="findSetting('enable_email_notification') && canAccess('budgets.send')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="btn-icon" size="sm"
                            @click="sendEmail(data.item)" v-b-tooltip.hover.right="`${$t('button_tooltip_send')}`">
                            <feather-icon icon="SendIcon" />
                        </b-button>

                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="info" class="btn-icon" size="sm"
                            @click="$router.push({ name: 'apps-budgets-show', params: { id: data.item.id } })"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_detail')}`">
                            <feather-icon icon="EyeIcon" />
                        </b-button>

                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="dark" class="btn-icon" size="sm"
                            @click="donwloadBudget(data.item)"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_download')}`">
                            <feather-icon icon="DownloadIcon" />
                        </b-button>

                        <!-- Dropdown -->
                        <b-dropdown v-if="!data.item.deleted_at && !data.item.approved" variant="link" toggle-class="p-0"
                            no-caret :right="$store.state.appConfig.isRTL">
                            <template #button-content>
                                <feather-icon icon="MoreVerticalIcon" size="22" class="align-middle text-body" />
                            </template>

                            <b-dropdown-item v-if="!data.item.approved && canAccess('budgets.approve')"
                                @click="setApproved(data.item)">
                                <feather-icon icon="CheckSquareIcon" />
                                <span class="align-middle ml-50">{{ $t('budgets.options_approve') }}</span>
                            </b-dropdown-item>

                            <b-dropdown-item
                                v-if="!data.item.deleted_at && !data.item.approved && canAccess('budgets.edit')"
                                :to="{ name: 'apps-budgets-edit', params: { id: data.item.id } }">
                                <feather-icon icon="EditIcon" />
                                <span class="align-middle ml-50">{{ $t('budgets.options_edit') }}</span>
                            </b-dropdown-item>

                            <b-dropdown-item
                                v-if="!data.item.deleted_at && data.item.total_paid <= 0 && !data.item.approved && canAccess('budgets.destroy')"
                                @click="deleteBudget(data.item)">
                                <feather-icon icon="TrashIcon" />
                                <span class="align-middle ml-50">{{ $t('budgets.options_delete') }}</span>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="budgets" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalBudget" :per-page="perPage" size="lg" />
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-card>
    </b-overlay>
</template>

<script>
import _ from "lodash";
import {
    BCard, BRow, BCol, BInputGroupPrepend, BInputGroupAppend, BInputGroup, BFormInput, BFormGroup, BButton, BTable, BMedia, BAvatar, BLink, 
    BBadge, BDropdown, BDropdownItem,
    BPagination, BOverlay, BSpinner, BTooltip, VBTooltip, BTableLite, BFormCheckbox, BFormRadioGroup,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import BudgetProvider from "@/providers/Budgets";
const BudgetResource = new BudgetProvider();

export default {
    components: {
        BCard,
        BRow,
        BCol,
        BInputGroupPrepend,
        BInputGroupAppend,
        BInputGroup,
        BFormInput,
        BFormGroup,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BOverlay,
        BSpinner,
        vSelect,
        BTooltip,
        VBTooltip,
        BTableLite,
        BFormCheckbox,
        BFormRadioGroup,
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            avatarDefault: require("@/assets/images/avatar_default.png"),
            budgets: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalBudget: 0,
            columns: [
                {
                    key: "label",
                    label: this.$t("budgets.table_number"),
                },
                {
                    key: "patient",
                    label: this.$t("budgets.table_patient_name"),
                },
                {
                    key: "branch",
                    label: this.$t("budgets.table_branch_office"),
                },
                {
                    key: "created_at",
                    label: this.$t("budgets.table_created_at"),
                },
                {
                    key: "approved",
                    label: this.$t("budgets.table_approved"),
                },
                {
                    key: "total",
                    label: this.$t("budgets.table_action_total"),
                },              
                { key: "actions", label: this.$t("actions") },
            ],
            sortBy: "id",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            loading: false,
            columnsDetail: [
                {
                    key: "type",
                    label: this.$t('budgets.details.action_type'),
                },
                {
                    key: "action",
                    label: this.$t('budgets.details.action'),
                },
                {
                    key: "group",
                    label: this.$t('budgets.details.group'),
                },
                {
                    key: "area",
                    label: this.$t('budgets.details.area'),
                },
                {
                    key: "price",
                    label: this.$t("budgets.details.cost"),
                },
                {
                    key: "discount",
                    label: this.$t("budgets.details.discount"),
                },
                {
                    key: "total",
                    label: this.$t("budgets.details.total"),
                },
                {
                    key: "paid",
                    label: this.$t("budgets.details.paid"),
                },
                {
                    key: "debt",
                    label: this.$t("budgets.details.balance"),
                },
            ],
            optionsFilters: [
                { value: 'approved', text: this.$t('budgets.status.approved') },
                { value: 'not_approved', text: this.$t('budgets.status.not_approved') },
                { value: 'all', text: this.$t('budgets.status.all') },
            ],
            filter_by: 'approved',
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.budgets);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalBudget,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getBudgets();
        },
        perPage(value) {
            this.getBudgets();
        },
    },
    async mounted() {
        await this.getBudgets();
    },
    methods: {
        async filterOptions() {
            await this.getBudgets()
        },
        async getBudgets() {

            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
                isBudget: true,
                filter_by: this.filter_by,
            };

            this.loading = true;
            const { data } = await BudgetResource.getList(query);
            this.loading = false;
            this.budgets = data.data;
            this.totalBudget = data.total;
        },
        deleteBudget(item) {
            this.$swal({
                title: this.$t("are_you_sure"),
                text: this.$t("you_wont_be_able_to_revert_this"),
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

                        this.loading = true;
                        const { data } = await BudgetResource.deleteBudget(item.id);
                        this.loading = false;
                        if (data.success) {
                            this.success(data.message);
                            this.budgets = this.budgets.filter((budget) => budget.id !== item.id);
                        } else {
                            this.danger(data.message);
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
        async donwloadBudget(item) {
            try {
                this.loading = true
                const { data } = await BudgetResource.donwloadPDF(item.id)
                this.loading = false
                const url = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${item.label}.pdf`);
                link.click();
                document.body.appendChild(link);

            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
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
                    } catch (e) {
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
        setApproved(item) {
            this.$swal({
                title: this.$t("are_you_sure"),
                text: this.$t("you_wont_be_able_to_revert_this"),
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
                preConfirm: async () => {

                    try {
                        this.loading = true
                        const { data } = await BudgetResource.approve(item.id)
                        this.loading = false

                        if (data.success) {
                            this.success(data.message)
                            if (this.filter_by == 'not_approved') {
                                this.budgets = this.budgets.filter(budget => budget.id != item.id)
                            } else if (this.filter_by == 'approved') {
                                this.budgets = this.budgets.map(budget => {
                                    if (budget.id == item.id) {
                                        return data.data
                                    }
                                    return budget
                                })
                            } else {
                                this.budgets = this.budgets.map(budget => {
                                    if (budget.id == item.id) {
                                        return data.data
                                    }
                                    return budget
                                })
                            }

                            if (this.findSetting('enable_email_notification')) {
                                this.sendEmail(item)
                            }

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
            })
        },
    },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
}

.text-decoration-line-through {
    text-decoration: line-through;
}
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
