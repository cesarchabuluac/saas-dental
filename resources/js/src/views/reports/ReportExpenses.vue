<template>
    <div>
        <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" :opacity="opacity">
            <template #overlay>
                <div class="d-flex align-items-center">
                    <b-spinner small type="grow" variant="secondary" />
                    <b-spinner type="grow" variant="dark" />
                    <b-spinner small type="grow" variant="secondary" />
                </div>
            </template>

            <b-card no-body>
                <b-card-header class="pb-50">
                    <h5>{{ $t('filters.title') }}</h5>
                </b-card-header>
                <b-card-body>
                    <b-row class="mt-2">
                        <b-col cols="12" md="3">
                            <label for="date_start">{{ $t('start_at') }}</label>
                            <flat-pickr id="date_start" v-model="filter.start" class="form-control" :config="{ dateFormat: 'Y-m-d' }"
                                placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="3">
                            <label for="date_end">{{ $t('end_at') }}</label>
                            <flat-pickr id="date_end" v-model="filter.end" class="form-control" :config="{
                                minDate: filter.start,
                                dateFormat: 'Y-m-d'
                            }" placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="3">
                            <label for="category_id">{{$t('expenses.categories.name')}}</label>
                                <v-select
                                    id="category_id"
                                    v-model="filter.expense_category_id"
                                    :options="categories"
                                    :reduce="option => option.id"
                                    :searchable="false"
                                    label="name"
                                    :placeholder="$t('expenses.categories.name_placeholder')"
                                />
                            
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="demo-inline-spacing">
                                <b-button @click="filterData" variant="outline-primary"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="SearchIcon" />
                                    {{ $t("button_filter") }}
                                </b-button>

                                <b-button v-if="expenses.length" @click="donwloadExpenses" variant="outline-success"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="DownloadIcon" />
                                    {{ $t("button_download") }}
                                </b-button>

                                <b-button v-if="filter.start" @click="clearFilter" variant="outline-danger"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="XIcon" />
                                    {{ $t("button_clear_filter") }}
                                </b-button>

                                <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-secondary"
                                    :class="{ 'btn-block': isMobile }" @click="$router.back()">
                                    <feather-icon icon="ChevronLeftIcon" />
                                    {{ $t('back') }}
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>

            <b-card no-body class="mb-0">
                <div class="table-responsive">
                    <b-table ref="refExpenseListTable" striped hover :items="expenses" :fields="columns" responsive
                        primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')" class="position-relative"
                        :current-page="currentPage" busy.sync="loading" stacked="md">

                        <!-- Column: Date -->
                        <template #cell(date)="data">
                            <span class="text-capitalize">{{ formatDate(data.item.date) }}</span>
                        </template>

                         <!-- Column: Category -->
                        <template #cell(category)="data">
                            {{ data.item.category.name }}
                        </template>

                        <!-- Column: Amount -->
                        <template #cell(amount)="data">
                            {{ formatPrice(data.item.amount) }}
                        </template>

                        <!-- Column: Created_at -->
                        <template #cell(created_at)="data">
                            {{ dateTimeFormat(data.item.date) }}
                        </template>

                        <!-- Column: Status -->
                        <template #cell(deleted_at)="data">
                            <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`"
                                class="text-capitalize">
                                {{ resolveStatusTranslate(data.item.deleted_at) }}
                            </b-badge>
                        </template>
                    </b-table>
                </div>


                <!-- Pagination -->
                <div v-if="expenses.length > 0" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalExpenses" :per-page="perPage"
                                    size="lg" />
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-card>
        </b-overlay>
    </div>
</template>
<script>
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox,
    BFormGroup, BFormInput, BModal, VBModal, BMediaAside, BMedia, BAvatar, BImg, BCardHeader,
    BMediaBody, BFormTextarea, BCardTitle, BBadge, BPagination, BTooltip, VBTooltip,
} from 'bootstrap-vue'
import axios from 'axios';
import store from '@/store'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import vSelect from "vue-select";
import Ripple from 'vue-ripple-directive'
import "animate.css";
import { saveAs } from 'file-saver';

import ExpensesProvider from "@/providers/Expenses";
const ExpensesResource = new ExpensesProvider();

import BranchProvider from "@/providers/BranchOffices";
const BranchResource = new BranchProvider();

if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
}
export default {
    name: 'ReportExpenses',
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
        BBadge,
        BPagination,
        BTooltip,
        VBTooltip,
        BFormCheckbox,
    },
    data() {
        return {
            loading: false,
            expenses: [],
            branchOffices: [],
            categories: [],
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
                    key: "created_at",
                    label: this.$t("expenses.table_created_at"),
                },
            ],
            perPageOptions: [10, 25, 50, 100],
            perPage: 100,
            currentPage: 1,
            totalExpenses: 0,
            sortBy: "date",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            pagination: {},
            offset: 3,
            critery: "reference",
            search: "",
            donwload: false,
            opacity: .75,
            filter: {
                start: null,
                end: null,
                name: null,
                expense_category_id: null,
            },
            isMobile: false,
            isFilterApplied: false
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.expenses);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalExpenses,
            };
        },
    },
    async mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        await this.getBranchOffices()
        await this.getExpenseCategories()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        async getBranchOffices () {
            this.loading = true
            const { data } = await BranchResource.getAll()
            this.loading = false
            this.branchOffices = data
        },
        async getExpenseCategories () {
            this.loading = true
            const { data } = await ExpensesResource.listCategories()
            this.loading = false
            this.categories = data.data
        },
        handleResize() {
            this.isMobile = window.innerWidth < 576;
        },
        async donwloadExpenses() {

            const query = {
                ...this.filter,
                isDownload: true,
            }

            try {

                this.loading = true
                axios.get(`/api/expenses`, { responseType: 'blob', params: { ...query } }).then(response => {
                    this.loading = false
                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                    saveAs(blob, `${this.$t('reports.expenses.excel_name')}-${this.filter.start}-${this.filter.end}.xlsx`);
                }).catch(e => {
                    this.loading = false
                    this.handleResponseErrors(e)
                });
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        async filterData() {

            if (!this.filter.start && !this.filter.end && !this.filter.name) {
                this.danger(this.$t('report_filter_required'), 'Error')
                return false
            }

            try {

                const query = {
                    ...this.filter,
                    perPage: this.perPage,
                    page: this.currentPage,
                }

                this.isFilterApplied = true
                this.loading = true
                const { data } = await ExpensesResource.getList(query)
                this.loading = false
                this.expenses = data.data;
                this.totalExpenses = data.total;

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        clearFilter() {
            this.filter = {}
            this.isFilterApplied = false
            this.expenses = []

        },
    },
    watch: {
        currentPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            this.filterData();
        },
        perPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            this.filterData();
        },
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';

@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
    .dark-layout & {
        background: $theme-dark-body-bg !important;
    }
}

.swal2-select {
    min-width: 100%!important;
    max-width: 100%!important;
    padding: 0.375em 0.625em;
    background: inherit;
    color: inherit;
    font-size: 1.125em;
}
</style>