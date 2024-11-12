<template>
    <b-card no-body>
      <b-card-header>
        <b-card-title>{{ statisticTitle }}</b-card-title>
      </b-card-header>
  
      <b-card-body>
  
        <!-- apex chart -->
        <vue-apex-charts ref="charts" type="polarArea" height="325"
          :options="customersPie.chartOptions"
          :series="customersPie.series"
          :key="JSON.stringify(tableData)"  />
  
        <!-- list group -->
        <!-- <div class="pt-25">
          <div v-for="(data, index) in chartData.listData" :key="index" class="d-flex justify-content-between"
            :class="index === Object.keys(chartData.listData).length - 1 ? '' : 'mb-1'">
            <div class="series-info">
              <feather-icon :icon="data.icon" size="16" class="mr-50" :class="data.iconColor" />
              <span class="font-weight-bolder">{{ data.text }}</span>
            </div>
            <span>{{ data.result }}</span>
          </div>
        </div> -->
      </b-card-body>
    </b-card>
  </template>
  
  <script>
  import {
    BCard, BCardHeader, BCardTitle, BDropdown, BDropdownItem, BCardBody,
  } from 'bootstrap-vue'
  import VueApexCharts from 'vue-apexcharts'
  import { $themeColors } from '@themeConfig'
  
  export default {
    components: {
      BCard,
      BCardHeader,
      BCardTitle,
      BDropdown,
      BDropdownItem,
      BCardBody,
      VueApexCharts,
    },
    props: {
        icon: {
            type: String,
            required: true,
        },
        statistic: {
            type: [Number, String],
            required: true,
        },
        statisticTitle: {
            type: String,
            default: '',
        },
        statisticText: {
            type: String,
            default: '',
        },
        statisticDescription: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: () => 'h2',
        },
        tableData: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    data() {
      return {
        customersPie: {
          series: [],
          chartOptions: {
            chart: {
              width: 380,
              type: 'polarArea',
              toolbar: {
                show: false,
              },
            },
            labels: [],
            yaxis: {
              show: false
            },
            fill: {
              opacity: 1
            },
            dataLabels: {
              position: 'bottom',
              enabled: true,
            },
            legend: { 
              show: true 
            },
            stroke: {
              width: 1,
            },
            plotOptions: {
              polarArea: {
                rings: {
                  strokeWidth: 2
                },
                spokes: {
                  strokeWidth: 1
                },
              }
            },
            theme: {
              monochrome: {
                shadeTo: 'light',
                shadeIntensity: 0.6
              }
            },
            colors: [$themeColors.primary, $themeColors.warning, $themeColors.danger],
          },
        },
        series: [],
      }
    },
    created() {
        this.updateChartData()
    },
    methods: {
      updateChartData() {
        this.customersPie.chartOptions.labels = this.tableData.map(item => item.name);
        this.customersPie.series = this.tableData.map(item => item.value);
      },
    },
    watch: {
      tableData(newValue) {
        if (newValue) {
          this.updateChartData();
        }
      },
    },
    beforeUpdate() {
      this.updateChartData();
    },
  }
  </script>
  