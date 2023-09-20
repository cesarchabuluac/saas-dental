<template>
    <div>
        <b-overlay
            :show="loading"
            blur="2px"
            variant="transparent"
            rounded="lg"
            opacity="0.85"
        >
            <template #overlay>
                <div class="d-flex align-items-center">
                    <b-spinner small type="grow" variant="secondary" />
                    <b-spinner type="grow" variant="dark" />
                    <b-spinner small type="grow" variant="secondary" />
                </div>
            </template>

            <b-card no-body>
                <b-card-header class="pb-0">
                    <b-card-title class="text-capitalize">Estadísticas de nuevos pacientes del mes {{ currentDate('MMMM') }}</b-card-title>
                    <b-card-title><small>Un paciente puede tener más de una cita o presupuesto dentro del mes</small></b-card-title>
                </b-card-header>

                <b-card-body>
                    <b-row>
                        <b-col sm="2" class="d-flex flex-column flex-wrap text-center">
                        <h1 class="font-large-2 font-weight-bolder mt-2 mb-0">
                            {{ numPatient }}
                        </h1>
                        <b-card-text>Pacientes</b-card-text>
                        </b-col>

                        <!-- chart -->
                        <b-col sm="10" class="d-flex justify-content-center">
                            <!-- apex chart -->
                            <vue-apex-charts
                                type="radialBar"
                                height="270"
                                :options="trackerRadialBar.chartOptions"
                                :series="trackerRadialBar.series"
                            />
                            <!-- <h1 class="font-large-2 font-weight-bolder mt-2 mb-0">
                                {{ trackerRadialBar.series[0] }}
                            </h1>
                            <b-card-text>Citas Asistidas</b-card-text> -->

                        </b-col>
                        <!--/ chart -->
                    </b-row>
                    <!-- chart info -->
                    <div class="d-flex mt-2 justify-content-between">
                        <div class="text-center">
                            <span class="font-large-0 font-weight-bold">{{ numPending + numAssisted + numCanceled + numConfirmed + numUnAssisted }}</span>
                            <b-card-text class="mb-50 text-break text-wrap">
                                Citas Agendadas
                            </b-card-text>
                        </div>
                        <div class="text-center">
                            <span class="font-large-0 font-weight-bold">{{ numApproved + numUnApproved }}</span>
                            <b-card-text class="mb-50 text-break text-wrap">
                                Con Presupuestos
                            </b-card-text>
                        </div>
                        <div class="text-center">
                            <span class="font-large-0 font-weight-bold">{{ numApproved }}</span>
                            <b-card-text class="mb-50 text-break text-wrap">
                                Presupuestos Aprobados
                            </b-card-text>
                        </div>
                    </div>
                    <!-- <div class="d-flex justify-content-end"> -->
                        <b-button @click="$router.push({name: 'patient-statistics'})" variant="outline-primary" class="mt-2">
                            <feather-icon icon="EyeIcon" /> Ver Detalles
                        </b-button>
                    <!-- </div> -->
                </b-card-body>
            </b-card>
        </b-overlay>
    </div>
</template>

<script>
import moment from "moment";
import _ from "lodash";
import {
    BRow,
    BCol,
    BCard,
    BCardText,
    BLink,
    BOverlay,
    BSpinner,
    BImg,
    BCardBody,
    BAvatar,
    BMedia,
    BMediaAside,
    BMediaBody,
    BCardHeader,
    BCardTitle,
    BTable,
    BButton,
    BDropdown,
    BDropdownItem,
    BBadge,
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { kFormatter } from "@core/utils/filter";
import store from "@/store";
import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart.vue";
import VueApexCharts from "vue-apexcharts";
import { $themeColors } from "@themeConfig";

import PatientProvider from "@/providers/Patients";
const PatientResource = new PatientProvider();

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardText,
        BLink,
        BOverlay,
        BSpinner,
        BImg,
        BCardBody,
        BAvatar,
        BMedia,
        BMediaAside,
        BMediaBody,
        BCardHeader,
        BCardTitle,
        BTable,
        BButton,
        BDropdown,
        BDropdownItem,
        BBadge,
        BInputGroup,
        BInputGroupPrepend,
        BInputGroupAppend,
        StatisticCardWithAreaChart,
        VueApexCharts,
        flatPickr,
    },
    // props: {
    //     loading: {
    //         type: Boolean,
    //         default: () => false,
    //     },
    //     patients: {
    //         type: Array,
    //         default: () => [],
    //     },
    // },
    data() {
        return {
            loading: false,
            patients: [],
            trackerRadialBar: {
                series: [0],
                chartOptions: {
                    plotOptions: {
                        radialBar: {
                            size: 150,
                            offsetY: 20,
                            startAngle: -150,
                            endAngle: 150,
                            hollow: {
                                size: "65%",
                            },
                            track: {
                                background: "#fff",
                                strokeWidth: "100%",
                            },
                            dataLabels: {
                                name: {
                                    offsetY: -5,
                                    color: "#5e5873",
                                    fontSize: "1rem",
                                },
                                value: {
                                    offsetY: 15,
                                    color: "#5e5873",
                                    fontSize: "1.714rem",
                                },
                                total: {
                                    show: true,
                                    label: 'Citas Asistidas',
                                    formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return w.config.series[0]
                                }
                            }
                            },
                        },
                    },
                    colors: [$themeColors.danger],
                    fill: {
                        type: "gradient",
                        gradient: {
                            shade: "dark",
                            type: "horizontal",
                            shadeIntensity: 0.5,
                            gradientToColors: [$themeColors.primary],
                            inverseColors: true,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100],
                        },
                    },
                    stroke: {
                        dashArray: 8,
                    },
                    labels: ["Citas Asistidas"],
                },
            },
        };
    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
        }
    },
    computed: {
        numAssisted () {
            const filter = this.patients.filter(p => p.state === 'assisted')
            return filter[0] ? filter[0].num_total : 0
        },
        numUnAssisted () {
            const filter = this.patients.filter(p => p.state === 'unassisted')
            return filter[0] ? filter[0].num_total : 0
        },
        numPending () {
            const filter = this.patients.filter(p => p.state === 'pending')
            return filter[0] ? filter[0].num_total : 0
        },
        numCanceled () {
            const filter = this.patients.filter(p => p.state === 'canceled')
            return filter[0] ? filter[0].num_total : 0
        },
        numConfirmed () {
            const filter = this.patients.filter(p => p.state === 'confirmed')
            return filter[0] ? filter[0].num_total : 0
        },
        numApproved () {
            const filter = this.patients.filter(p => p.state === 'approved')
            return filter[0] ? filter[0].num_total : 0
        },
        numUnApproved () {
            const filter = this.patients.filter(p => p.state === 'unapproved')
            return filter[0] ? filter[0].num_total : 0
        },
        numPaid () {
            const filter = this.patients.filter(p => p.state === 'paid')
            return filter[0] ? filter[0].num_total : 0
        },
        numUnpaid () {
            const filter = this.patients.filter(p => p.state === 'unpaid')
            return filter[0] ? filter[0].num_total : 0
        },
        numPatient () {
            const filter = this.patients.filter(p => p.state === 'patient')
            return filter[0] ? filter[0].num_total : 0
        },

    },
    async mounted() {
        await this.getPatients()
    },
    methods: {
        async getPatients () {
            this.loading = true
            const query = {
                isDashboard: true,
                only_num_total: true,
            }
            const { data } = await PatientResource.index(query)
            this.loading = false
            this.patients = data.data
            this.trackerRadialBar.series = this.patients.filter(p => p.state === 'assisted').map(p => p.num_total).flat()
        }
    }
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/pages/dashboard-ecommerce.scss";
@import "~@resources/scss/vue/libs/chart-apex.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
</style>
