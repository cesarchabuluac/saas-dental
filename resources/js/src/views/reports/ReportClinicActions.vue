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

            <b-row>
                <b-col cols="12" md="8">
                    <b-card no-body>
                        <!-- <b-card-body> -->
                            <b-row class="pt-1 pl-1">
                                <b-col cols="12" md="2">
                                    <label>{{ $t('start_at') }}</label>
                                    <flat-pickr v-model="filter.start" class="form-control flatpickr-small" :config="{ dateFormat: 'Y-m-d' }"
                                        placeholder="DD/MM/YYYY" />
                                </b-col>

                                <b-col cols="12" md="2">
                                    <label>{{ $t('end_at') }}</label>
                                    <flat-pickr v-model="filter.end" class="form-control flatpickr-small" :config="{
                                        minDate: filter.start,
                                        dateFormat: 'Y-m-d'
                                    }" placeholder="DD/MM/YYYY" />
                                </b-col>

                                <b-col cols="12" md="3">
                                    <label>{{ $t('action_type') }} </label>
                                    <v-select v-model="filter.action_type" :options="[ { id: 'clinical', name: $t('clinic') }, { id: 'laboratory', name: $t('laboratory') } ]"
                                        label="name" :reduce="option => option.id"
                                        class="select-size-sm"  :clearable="true" :searchable="true"
                                        :placeholder="$t('select_a_option')">
                                    </v-select>
                                </b-col>

                                <b-col cols="12" md="4">
                                    <label>{{ $t('professional') }} </label>
                                    <v-select v-model="filter.professional_id" :options="doctors"
                                        label="name" :reduce="option => option.id"
                                        class="select-size-sm"  :clearable="true" :searchable="true"
                                        :placeholder="$t('select_a_option')">
                                    </v-select>
                                </b-col>

                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('search_by')" label-for="add-guests">
                                        <b-form-input size="sm" v-model="filter.name" id="add-guests" :placeholder="$t('reports.clinic_actions.search_help')"
                                            />
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" md="8">
                                    <div class="demo-inline-spacing">
                                        <b-button size="sm" @click="filterData" variant="outline-primary"
                                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                            <feather-icon icon="SearchIcon" />
                                            {{ $t("button_filter") }}
                                        </b-button>

                                        <b-button size="sm" v-if="actions.length" @click="donwloadBudgetActions" variant="outline-success"
                                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                            <feather-icon icon="DownloadIcon" />
                                            {{ $t("button_download") }}
                                        </b-button>

                                        <b-button size="sm" v-if="filter.start" @click="clearFilter" variant="outline-danger"
                                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                            <feather-icon icon="XIcon" />
                                            {{ $t("button_clear_filter") }}
                                        </b-button>

                                        <b-button size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-secondary"
                                            :class="{ 'btn-block': isMobile }" @click="$router.back()">
                                            <feather-icon icon="ChevronLeftIcon" />
                                            {{ $t('back') }}
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col cols="12">
                                    <div class="table-responsive">
                                        <b-table striped hover  :items="actions" :fields="columns" responsive
                                            small class="position-relative table-small text-small small"
                                        :sticky-header="true"
                                        :no-border-collapse="false">
                                        
                                        <template #cell(budget)="data">
                                            <span>{{ data.item.budget.name ? data.item.budget.name : data.item.budget.label }}</span>
                                        </template>

                                        <template #cell(doctor)="data">
                                            <span>{{ data.item.professional ? data.item.professional.name : '--' }}</span>
                                        </template>

                                        <template #cell(type)="data">
                                            <span>{{ data.item.action_type === 'clinical' ? $t('clinic') : $t('laboratory') }}</span>
                                        </template>

                                        <template #cell(name)="data">
                                            <span>{{ data.item.action_name }}</span>
                                        </template>

                                        <template #cell(area)="data">
                                            <span>{{ data.item.area }}</span>
                                        </template>

                                        <template #cell(discount)="data">
                                            <span>{{ formatPrice(data.item.discount) }}</span>
                                        </template>

                                        <template #cell(cost)="data">
                                            <span>{{ formatPrice(data.item.subtotal) }}</span>
                                        </template>

                                        <template #cell(status)="data">                            
                                            {{ data.item.status }}
                                        </template>
                                    
                                        </b-table>
                                    </div>
                                </b-col>
                            </b-row>
                        <!-- </b-card-body> -->
                    </b-card>                    
                </b-col>

                <b-col v-if="mostSoldAction.length > 0" cols="12" md="4">
                    <top-card-horizontal
                        icon="PieChartIcon"
                        :statistic="numberFormat(mostSoldAction.total)"
                        statistic-title="Las 5 acciones mas tratadas"
                        :statistic-text="mostSoldAction.action_group_name"
                        statistic-description="Acciones mas tratadas"
                        :table-data="mostSoldAction"
                        color="primary"
                    />

                    <top-doctors :table-data="topDoctors"/>
                </b-col>
            </b-row>            
        </b-overlay>
    </div>
</template>
<script>
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox,
    BFormGroup, BFormInput, BModal, VBModal, BMediaAside, BMedia, BAvatar, BImg, BCardHeader,
    BMediaBody, BFormTextarea, BCardTitle, BBadge, BPagination, BTooltip, VBTooltip,
    BFormRadioGroup, BFormRadio
} from 'bootstrap-vue'
import axios from 'axios'
import store from '@/store'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import vSelect from "vue-select";
import Ripple from 'vue-ripple-directive'
import "animate.css";
import { saveAs } from 'file-saver';
import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
import TopCardHorizontal from '@core/components/statistics-cards/TopCardHorizontal.vue';
import TopDoctors from '@core/components/statistics-cards/TopDoctors.vue';

import BudgetProvider from "@/providers/Budgets";
const BudgetResource = new BudgetProvider();

import BranchProvider from "@/providers/BranchOffices";
const BranchResource = new BranchProvider();

import ActionsProvider from "@/providers/Actions";
const ActionsResource = new ActionsProvider();

import LaboratoryActionsProvider from "@/providers/LaboratoryActions";
const LaboratoryActionsResource = new LaboratoryActionsProvider();

import BudgetActionsProvider from "@/providers/v2/BudgetActions";
const BudgetActionsResource = new BudgetActionsProvider();

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
    name: 'ReportClinicActions',
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
        BFormRadioGroup,
        BFormRadio,
        //
        StatisticCardHorizontal,
        TopCardHorizontal,
        TopDoctors,
    },
    data() {
        return {
            loading: false,
            doctors: [],
            actions: [],
            columns: [
                {
                    key: "budget",
                    label: this.$t("budgets.table_budget_name"),
                },
                {
                    key: "doctor",
                    label: this.$t("budgets.table_action_doctor"),
                },
                {
                    key: "type",
                    label: this.$t("budgets.table_action_type"),
                },
                {
                    key: 'name',
                    label: this.$t('budgets.table_action_name')
                },
                {
                    key: "area",
                    label: this.$t("budgets.table_action_area"),
                },
                {
                    key: "discount",
                    label: this.$t("budgets.table_action_discount"),
                },
                {
                    key: "cost",
                    label: this.$t("budgets.table_action_price"),
                }, 
                {
                    key: "status",
                    label: this.$t("budgets.table_action_status"),
                }              
                            
            ],
            optionsFilters: [
                { value: 'approved', text: this.$t('budgets.status.approved') },
                { value: 'not_approved', text: this.$t('budgets.status.not_approved') },
                { value: 'all', text: this.$t('budgets.status.all') },
            ],            
            filter_by: 'all',
            perPageOptions: [10, 25, 50, 100],
            perPage: 100,
            currentPage: 1,
            totalActions: 0,
            sortBy: "date",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            pagination: {},
            offset: 3,
            critery: "name",
            search: "",
            donwload: false,
            opacity: .75,
            filter: {
                start: null,
                end: null,
                name: null,                
                action_type: null,
                professional_id: null,
            },
            isMobile: false,
            isFilterApplied: false,
            mostSoldAction: [],
            topDoctors: [],
            userRoles: store.getters['auth/getUser'].roles.map(role => role.id)
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.actions);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalActions,
            };
        },
        isProfessional() {
            return this.userRoles.includes(4)
        },
    },
    created() {
        if (store.getters['auth/getLocale'] === "es") {
            flatpickr.localize(Spanish);
        }
    },
    async mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        await this.getDoctors()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        async getDoctors() {
            this.loading = true
            const { data } = await UserResource.index({ criteria: "professionals", ignoreSchedules: false,});
            this.loading = false
            this.doctors = _.orderBy(data.data, ['name'], ['asc'])
        },
        handleResize() {
            this.isMobile = window.innerWidth < 576;
        },
        async donwloadBudgetActions() {

            const query = {
                ...this.filter,
                search: this.filter.name,
                filter_by: this.filter_by,
                perPage: this.perPage,
                page: this.currentPage,
                isDownload: true,
            }

            try {

                this.loading = true
                axios.get(`/api/v2/budget-actions`, { responseType: 'blob', params: { ...query } }).then(response => {
                    this.loading = false
                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                    saveAs(blob, `${this.$t('reports.clinic_actions.excel_name')}-${this.filter.start}-${this.filter.end}.xlsx`);

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
                this.danger(this.$t('filters.required_description'), 'Error')
                return false
            }

            this.actions = []
            this.mostSoldAction = []
            this.topDoctors = []

            try {

                const query = {
                    ...this.filter,
                    search: this.filter.name,
                    filter_by: this.filter_by,
                    perPage: this.perPage,
                    page: this.currentPage,
                }

                this.isFilterApplied = true
                this.loading = true
                const { data } = await BudgetActionsResource.index(query)
                this.loading = false
                this.actions = data.data.actions
                this.mostSoldAction = data.data.most_sold_action.map(item => ({...item, value: item.total, name: item.action_name}))
                this.topDoctors = data.data.top_doctors

                console.log(data.data)

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        clearFilter() {
            this.filter = {}
            this.isFilterApplied = false
            this.actions = []

        },
    },
    watch: {
        currentPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            // this.filterData();
        },
        perPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            // this.filterData();
        },
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';

@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
    .dark-layout & {
        background: $theme-dark-body-bg !important;
    }
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

.match-height > [class*=col] > .card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.match-height > [class*=col] > .card > .card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.match-height > [class*=col] > .card > .card-body > b-table {
  flex: 1;
}

.b-table-sticky-header {
    overflow-y: auto;
    max-height: 535px;
}
</style>