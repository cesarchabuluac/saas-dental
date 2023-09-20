<template>
    <b-card body-class="pb-50">
        <h6>{{ $t('budgets.plural') }} {{ $t('budgets.status.approved') }}</h6>
        <h2 class="font-weight-bolder mb-1">
           {{ kFormatter(total) }}
        </h2>
        <!-- chart -->
        <vue-apex-charts height="70" :options="statisticsOrder.chartOptions" :series="series" />
    </b-card>
</template>
  
<script>
import { BCard } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
import { kFormatter } from '@core/utils/filter'

const $barColor = '#f3f3f3'

export default {
    components: {
        BCard,
        VueApexCharts,
    },
    props: {
        total: {
            type: Number,
            default: () => 0,
        },
        loading: {
			type: Boolean,
			required: true,
			default: () => false,
		},
    },
    data() {
        return {
            statisticsOrder: {
                chartOptions: {
                    chart: {
                        type: 'bar',
                        stacked: true,
                        toolbar: {
                            show: false,
                        },
                    },
                    grid: {
                        show: false,
                        padding: {
                            left: 0,
                            right: 0,
                            top: -15,
                            bottom: -15,
                        },
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '20%',
                            startingShape: 'rounded',
                            colors: {
                                backgroundBarColors: [$barColor, $barColor, $barColor, $barColor, $barColor],
                                backgroundBarRadius: 5,
                            },
                        },
                    },
                    legend: {
                        show: false,
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    colors: [$themeColors.warning],

                    xaxis: {
                        labels: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        axisTicks: {
                            show: false,
                        },
                    },
                    yaxis: {
                        show: false,
                    },
                    tooltip: {
                        x: {
                            show: false,
                        },
                    },
                },
            },
            series: [
                {
                    name: '2020',
                    data: [45, 85, 65, 45, 65],
                },
            ],

        }
    },
    mounted() {
        
    },
    methods: {
        kFormatter,
    },
}
</script>
  