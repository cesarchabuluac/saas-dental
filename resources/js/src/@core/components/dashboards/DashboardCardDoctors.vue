<template>
    <b-overlay :show="loading || isLoading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>
        <b-card no-body class="card-revenue-budget">
            <b-row class="mx-0">
                <b-col md="12" class="revenue-report-wrapper">
                    <div class="d-sm-flex justify-content-between align-items-center mb-3">
                        <h4 class="card-title mb-50 mb-sm-0">
                            {{ $t('users_revenue.title') }}
                        </h4>
                        <div class="d-flex justify-content-center">
                            <h4 class="mb-25 mt-1">{{ $t('total_commissions') }} {{ formatPrice(totalCommission) }}</h4>
                        </div>
                        <div class="d-flex align-items-center">
                            <b-input-group>
                                <flat-pickr sm v-model="rangePicker" :config="{
                                    mode: 'range',
                                    dateFormat: 'Y-m-d',

                                }" class="form-control _flat-picker _bg-transparent border-1 _shadow-none"
                                    placeholder="YYYY-MM-DD" @on-change="handleChange" @on-ValueUpdate="handleChange" />
                                <b-input-group-prepend>
                                    <b-button @click="getDashboard" sm variant="primary">
                                        <feather-icon icon="SearchIcon" />
                                    </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                            <!-- <div class="d-flex align-items-center mr-2">
                                <span class="bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer" />
                                <span>{{ $t('earnings.title') }}</span>
                            </div>
                            <div class="d-flex align-items-center ml-75">
                                <span class="bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer" />
                                <span>Expense</span>
                            </div> -->
                        </div>
                    </div>

                    <!-- chart -->
                    <!-- <vue-apex-charts :key="chartKey" v-if="series[0].data.length > 0" id="revenue-report-chart" type="bar"
                        height="230" :options="chartOptions" :series="series" @dataPointSelection="handleDataPointClick" /> -->
                    <b-table
                        ref="refProfessionalListTable" 
                        class="position-relative b-table-responsive" 
                        :items="professionals" 
                        responsive
                        :sticky-header="true" 
                        :no-border-collapse="true" 
                        :fields="columTableProfessional" 
                        primary-key="id"
                        small
                        show-empty 
                        :empty-text="$t('datatables.sZeroRecords')">
                        <template #cell(name)="data">
                            <b-link :to="{ name: 'user-profile', params: { id: data.item.id }, }"
                                class="font-weight-bold d-block text-nowrap">
                                {{ data.item.name }}
                            </b-link>
                        </template>
                        <template #cell(total)="data">
                            <strong>{{ formatPrice(data.item.total) }}</strong>
                        </template>
                    </b-table>
                </b-col>

                <!-- <b-col md="4" class="budget-wrapper">
                    <div class="d-flex align-items-center">
                        
                    </div>

                    <h2 class="mb-25 mt-3">
                        <small>{{ $t('budgets.total_paid') }}</small><br>
                        {{ formatPrice(totalBudgetPaid) }}
                    </h2>
                    <div class="d-flex justify-content-center">
                        <span class="font-weight-bolder mr-25">{{ $t('budgets.total') }}</span>
                        <span>{{ formatPrice(totalBudget) }}</span>
                    </div>
                    <div class="d-flex justify-content-center text-danger">
                        <span class="font-weight-bolder mr-25">{{ $t('budgets.details.balance') }}</span>
                        <span>{{ formatPrice(totalBudgetPaid - totalBudget) }}</span>
                    </div>
                    <h2 class="mb-25 mt-1">
                        <small>{{ $t('total_commissions') }}</small><br>
                        {{ formatPrice(totalCommission) }}
                    </h2>
                </b-col> -->
            </b-row>
        </b-card>
    </b-overlay>
</template>
  
<script>
import moment from 'moment'
import {
    BCard, BRow, BCol, BDropdown, BDropdownItem, BButton, BOverlay, BSpinner,
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,
    BTable,
    BLink,
} from 'bootstrap-vue'
import store from '@/store'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
import Ripple from 'vue-ripple-directive'
import flatPickr from 'vue-flatpickr-component'
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { kFormatter, cFormatter } from '@core/utils/filter'
// import { formatPrice } from "@/libs/utils";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import DashBoardsProvider from "@/providers/DashBoards";
const DashboardResource = new DashBoardsProvider();

const perfectScrollbarSettings = {
    maxScrollbarLength: 60,
}

export default {
    components: {
        VueApexCharts,
        BDropdown,
        BDropdownItem,
        BCard,
        BButton,
        BRow,
        BCol,
        BOverlay,
        BSpinner,
        BInputGroup,
        BInputGroupPrepend,
        BInputGroupAppend,
        BTable,
        BLink,

        //
        flatPickr,
        VuePerfectScrollbar,
    },

    directives: {
        Ripple,
    },
    props: {
        doctors: {
            type: Object,
            default: () => { },
        },
        loading: {
            type: Boolean,
            required: true,
            default: () => false,
        },
    },
    data() {
        return {
            chartKey: 0,
            isLoading: false,
            rangePicker: [moment().startOf('month').format('YYYY-MM-DD'), moment().endOf('month').format('YYYY-MM-DD')],
            revenue_report: {},
            dashboard: [],
            chartOptions: {
                chart: {
                    stacked: true,
                    type: 'bar',
                    toolbar: { show: false },
                },
                grid: {
                    padding: {
                        top: -20,
                        bottom: -10,
                    },
                    yaxis: {
                        lines: { show: true },
                    },
                },
                xaxis: {
                    categories: [],
                    labels: {
                        style: {
                            colors: '#6E6B7B',
                            fontSize: '0.86rem',
                            fontFamily: 'Montserrat',
                        },
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                tooltip: {
                    x: {
                        show: true,
                    },
                    y: {
                        formatter: function (val) {
                            return cFormatter(val);
                        },
                    },
                },
                legend: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
                },
                colors: [$themeColors.primary, $themeColors.warning],
                plotOptions: {
                    bar: {
                        columnWidth: '17%',
                        endingShape: 'rounded',
                    },
                    distributed: true,
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: '#6E6B7B',
                            fontSize: '0.86rem',
                            fontFamily: 'Montserrat',
                        },
                    },
                },
            },
            series: [
                {
                    name: this.$t('earnings.title'),
                    data: [],
                },
            ],
            totalBudget: 0,
            totalBudgetPaid: 0,
            totalCommission: 0,
            professionals: [],
            columTableProfessional: [
                {
                    key: "name",
                    label: this.$t('doctor'),
                },
                {
                    key: "total",
                    label: this.$t('earnings.title'),
                },
                {
                    key: "confirmed",
                    label: this.$t('appointments.table_state_confirmed')
                },
                {
                    key: "pending",
                    label: this.$t('appointments.table_state_pending')
                },
                {
                    key: "assisted",
                    label: this.$t('appointments.table_state_assisted')
                },
                {
                    key: "unassisted",
                    label: this.$t('appointments.table_state_unassisted')
                },
                {
                    key: "canceled",
                    label: this.$t('appointments.table_state_canceled')
                }
            ],
        }
    },
    computed: {

    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
            // localize(process.env.MIX_FALLBACK_LOCALE);
        }
    },
    methods: {
        kFormatter,
        cFormatter,
        async handleChange(selectedDates, dateStr, instance) {
            const [startAt, endAt] = dateStr.split(' to ');

            if (startAt && endAt) {
                const query = {
                    start_at: startAt,
                    end_at: endAt,
                    onlyRevenue: true,
                }
                // this.updateProp(query)
                await this.getDashboard(query)
            }

        },
        async getDashboard(query) {
            this.isLoading = true
            const { data } = await DashboardResource.index(query)
            this.isLoading = false

            this.totalCommission = 0
            this.totalBudget = 0
            this.totalBudgetPaid = 0

            this.chartOptions.xaxis.categories = data.revenueDoctors.map(item => item.name).flat();
            this.series[0].data = data.revenueDoctors.map(item => item.total).flat()
            this.professionals = data.revenueDoctors.filter(item => parseFloat(item.total) > 0).flat()
            this.totalCommission = data.revenueDoctors.length > 0 ? data.revenueDoctors.map(item => parseFloat(item.total)).reduce((a, b) => a + b) : 0
            this.totalBudget = data.totalBuddgetApproved
            this.totalBudgetPaid = data.totalBudgetPaid
            this.chartKey++;
        },
        updateProp(query) {
            // Emit an event to notify the parent component that we want to update the value
            this.$emit('call-revenue', { ...query });
        },
        handleDataPointClick(e, chartContext, config) {
            console.log(chartContext, config)
        }
    },
    watch: {
        doctors(value) {
            if (value.revenueDoctors.length === 0) {
                if (this.rangePicker) {
                    const query = {
                        start_at: this.rangePicker[0],
                        end_at: this.rangePicker[1],
                        onlyRevenue: true,
                    }                    
                    this.getDashboard(query)
                }
            }
            // if (value.revenueDoctors) {
            //     this.professionals = value.revenueDoctors.filter(item => parseFloat(item.total) > 0).flat()
            //     this.chartOptions.xaxis.categories = value.revenueDoctors.map(item => item.name).flat();
            //     this.series[0].data = value.revenueDoctors.map(item => item.total).flat()
            //     this.totalCommission = value.revenueDoctors.map(item => parseFloat(item.total)).reduce((a, b) => a + b)
            //     this.totalBudget = value.totalBuddgetApproved
            //     this.totalBudgetPaid = value.totalBudgetPaid
            // }
        }        
    }

}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";

.b-table-responsive::-webkit-scrollbar {
  width: 8px;
}

.b-table-responsive::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.b-table-responsive::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.b-table-responsive::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
  