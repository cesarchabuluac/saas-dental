<template>
    <b-card class="earnings-card">
        <b-row>
            <b-col cols="6">
                <b-card-title class="mb-1">
                    {{ $t('patients.statistics.title') }}
                </b-card-title>
                <div class="font-small-2">
                    {{ $t('this_month') }}
                </div>
                <h5 class="mb-1">
                    {{ data.totalPatientCountCurrentMonth }}
                </h5>
                <b-card-text class="text-muted font-small-2">
                    <span class="font-weight-bolder">{{ data.totalPatientCountLastMonth }}</span>
                    <span> {{ $t('last_month_help').replace(':operator', $t('patients.patients')) }}.</span>
                </b-card-text>

                <b-button :disabled="data.length" @click="$router.push({ name: 'patient-statistics' })" variant="outline-primary" class="_mt-2">
                    <feather-icon icon="EyeIcon" /> {{ $t('see_details') }}
                </b-button>
            </b-col>
            <b-col cols="6">
                <!-- chart -->
                <vue-apex-charts 
                    v-if="data.totalPatientCountCurrentMonth > 0 && data.totalPatientCountLastMonth > 0"
                    height="120" 
                    :options="earningsChart.chartOptions" 
                    :series="[data.totalPatientCountCurrentMonth, data.totalPatientCountLastMonth]" />
            </b-col>
        </b-row>
    </b-card>
</template>
  
<script>
import {
    BCard, BRow, BCol, BCardTitle, BCardText, BButton,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

const $earningsStrokeColor2 = '#28c76f66'
const $earningsStrokeColor3 = '#28c76f33'
export default {
    components: {
        BCard,
        BRow,
        BCol,
        BCardTitle,
        BCardText,
        BButton,
        VueApexCharts,
    },
    props: {
        data: {
            type: Object,
            default: () => { },
        },
    },
    data() {
        return {
            earningsChart: {
                chartOptions: {
                    chart: {
                        type: 'donut',
                        toolbar: {
                            show: false,
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    legend: { show: false },
                    comparedResult: [2, -3, 8],
                    labels: [this.$t('new_patients'), this.$t('existing_patients')],
                    stroke: { width: 0 },
                    colors: [$themeColors.success, $themeColors.primary],
                    grid: {
                        padding: {
                            right: -20,
                            bottom: -8,
                            left: -20,
                        },
                    },
                    plotOptions: {
                        pie: {
                            startAngle: -10,
                            donut: {
                                labels: {
                                    show: true,
                                    name: {
                                        offsetY: 15,
                                    },
                                    value: {
                                        offsetY: -15,
                                        formatter(val) {
                                            // eslint-disable-next-line radix
                                            return `${parseInt(val)}%`
                                        },
                                    },
                                    total: {
                                        show: true,
                                        offsetY: 15,
                                        label: this.$t('patients.patients'),
                                        formatter(w) {
                                            const newPatients = w.globals.series[0];
                                            const existentPatients = w.globals.series[1];
                                            const total = newPatients + existentPatients;
                                            const percentage = ((w.globals.seriesPercent[0] * 100) / total).toFixed(1);
                                            return `${percentage}%`;

                                        },
                                    },
                                },
                            },
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 1325,
                            options: {
                                chart: {
                                    height: 100,
                                },
                            },
                        },
                        {
                            breakpoint: 1200,
                            options: {
                                chart: {
                                    height: 120,
                                },
                            },
                        },
                        {
                            breakpoint: 1045,
                            options: {
                                chart: {
                                    height: 100,
                                },
                            },
                        },
                        {
                            breakpoint: 992,
                            options: {
                                chart: {
                                    height: 120,
                                },
                            },
                        },
                    ],
                },
            },
        }
    },
}
</script>
  