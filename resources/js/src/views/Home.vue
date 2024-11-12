<template>
    <div v-if="account">
        <section id="dashboard-ecommerce">
            <b-row v-if="isAdmin || isDirector" class="match-height">
                <b-col xl="4" md="6">
                    <dashboard-earning :loading="loading" :data="dashboard" />
                </b-col>
                <b-col xl="8" md="6">
                    <dashboard-statistics :loading="loading" :data="dashboard" />
                </b-col>
            </b-row>


            <!-- Patient tracker -->
            <b-row v-if="isDirector || isAdmin" class="match-height">
                <b-col xl="4" md="6">
                    <patient-tracker />
                </b-col>
                <b-col xl="8" md="6">
                    <statistic-professionals />
                </b-col>
            </b-row>

            <!-- Statistics Doctor -->
            <b-row v-if="isDoctor" class="match-height">
                <b-col lg="6" md="12">
                    <b-card text-variant="center" class="card" :class="!loading ? 'card-congratulations' : ''">
                        <dashboard-doctor :loading="loading" :data="dashboard" />
                    </b-card>
                </b-col>

                <b-col lg="3" sm="6">
                    <statistic-card-with-area-chart icon="CheckIcon" color="success" :loading="loading"
                        :statistic="appointmentConfirmed.total" statistic-title="Citas Asistidas del mes actual"
                        :chart-data="appointmentConfirmed.series" />
                </b-col>

                <b-col lg="3" sm="6">
                    <statistic-card-with-area-chart icon="DollarSignIcon" color="primary" :loading="loading"
                        :statistic="formatPrice(dashboard.totalEarningMonth * 1)"
                        :statistic-title="$t('dashboard_doctor_accumulated_payment')"
                        :chart-data="accumulatedPayment.series" />
                </b-col>
            </b-row>

            <!-- Dashboard Patients -->
            <b-row v-if="isPatient">
                <b-col cols="12">
                    <dashboard-patient :data="dataPatient" />
                </b-col>
            </b-row>

            <!-- Appointments -->
            <b-row class="match-height mt-1">
                <b-col cols="12">
                    <dashboard-appointments ref="listAppointments" :isDashboard="true" />
                </b-col>
            </b-row>

            <!-- Payments | Doctors -->
            <b-row v-if="isDoctor" class="match-height">
                <b-col cols="12" xl="9" lg="8" md="7">
                    <b-card no-body class="mb-0">
                        <div class="m-2">
                            <h3 class="text-capitalize">Detalle de Pagos efectuados del mes actual</h3>
                            <b-table :sticky-header="true" :no-border-collapse="true" ref="refPaymentListTable"
                                class="position-relative" :items="dashboard.payments" responsive :fields="columns"
                                primary-key="id" :sort-by.sync="sortBy" show-empty
                                :empty-text="$t('datatables.sZeroRecords')" :sort-desc.sync="sortDesc"
                                :current-page="currentPage" busy.sync="loading">

                                <!-- Empty -->
                                <template slot="empty">
                                    <div v-if="loading" class="d-flex justify-content-center mb-1">
                                        <div class="d-flex align-items-center">
                                            <b-spinner small type="grow" variant="secondary" />
                                            <b-spinner type="grow" variant="dark" />
                                            <b-spinner small type="grow" variant="secondary" />
                                        </div>
                                    </div>
                                </template>

                                <!-- Column: payment_id -->
                                <template #cell(payment_id)="data">
                                    #{{ data.item.id }}
                                </template>

                                <!-- Column: created at -->
                                <template #cell(created_at)="data">
                                    {{ dateTimeFormat(data.item.created_at) }}
                                </template>

                                <!-- Column: Budget -->
                                <template #cell(budget)="data">
                                    {{ (data.item.label) }}
                                </template>

                                <!-- Column: Method -->
                                <template #cell(method)="data">
                                    <span>{{ translatePaymentMethod(data.item.method) }}</span>
                                    <p v-if="data.item.check" class="card-text mb-25">
                                        <label><strong>{{ $t('checks.table_bank') }}:</strong>
                                            {{ data.item.check.reference }}</label>
                                        <label><strong>{{ $t('checks.table_bank') }}:</strong>
                                            {{ data.item.check.bank }}</label>
                                        <label><strong>{{ $t('checks.table_serie') }}:</strong>
                                            {{ data.item.check.serie }}</label>
                                    </p>
                                </template>

                                <!-- Column: amount -->
                                <template #cell(amount)="data">
                                    {{ formatPrice(data.item.amount) }}
                                </template>
                            </b-table>
                        </div>
                    </b-card>
                </b-col>

                <!-- transations card  -->
                <b-col cols="12" md="5" xl="3" lg="4">
                    <dashboard-card-transactions :loading="loading" :dashboard="dashboard"
                        :isDay="false"></dashboard-card-transactions>
                </b-col>
            </b-row>

            <!-- </b-overlay> -->
        </section>
    </div>
    <div v-else-if="isLogged">
        <h3>ADMIN CENTRAL</h3>
    </div>
</template>

<script>
import moment from 'moment'
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
    BCardBody, BAvatar, BMedia, BMediaAside, BMediaBody, BCardHeader, BCardTitle, BTable,
    BButton, BDropdown, BDropdownItem, BBadge, BInputGroup, BInputGroupPrepend, BInputGroupAppend,
} from "bootstrap-vue";
import axios from "axios";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { kFormatter } from '@core/utils/filter'
import store from "@/store";
import DashboardDoctor from "@core/components/dashboards/DashboardDoctor.vue";
import DashboardEarning from "@core/components/dashboards/DashboardEarning.vue";
import DashboardStatistics from "@core/components/dashboards/DashboardStatistics.vue";
import DashboardAppointments from "@core/components/dashboards/DashboardAppointments.vue";
import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import DashboardPatient from "@core/components/dashboards/DashboardPatient.vue";
import DashboardCardTransactions from "@core/components/dashboards/DashboardCardTransactions.vue";
import PaymentProvider from "@/providers/Payments";
import DashBoardsProvider from "@/providers/DashBoards";
import AppointmentProvider from "@/providers/Appointments";
import PatientTracker from '@core/components/dashboards/PatientTracker.vue';
import StatisticProfessionals from '@core/components/dashboards/StatisticProfessionals.vue';

const DashboardResource = new DashBoardsProvider();
const PaymentResource = new PaymentProvider();
const AppointmentResource = new AppointmentProvider();

import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

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
        BCardBody, BAvatar, BMedia, BMediaAside, BMediaBody, BCardHeader, BCardTitle, BTable,
        BButton, BDropdown, BDropdownItem, BBadge, BInputGroup, BInputGroupPrepend, BInputGroupAppend,
        StatisticCardWithAreaChart,
        DashboardDoctor,
        DashboardEarning,
        DashboardStatistics,
        DashboardAppointments,
        DashboardPatient,
        DashboardCardTransactions,
        VueApexCharts,
        flatPickr,
        PatientTracker,
        StatisticProfessionals,
    },
    data() {
        return {
            loading: false,
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalPayment: 0,
            columns: [
                {
                    key: "payment_id",
                    label: this.$t("payment_id"),
                },
                {
                    key: "created_at",
                    label: this.$t("payment_table_created_at"),
                },
                {
                    key: "budget",
                    label: this.$t("payment_table_budget"),
                },
                {
                    key: "method",
                    label: this.$t("payment_table_method"),
                },
                {
                    key: "amount",
                    label: this.$t("payment_table_amount"),
                },
            ],
            sortBy: "id",
            sortDesc: true,
            searchQuery: null,
            from: 0,
            to: 0,
            dashboard: {},
            payments: [],
            appointmentConfirmed: {
                series: [
                    {
                        data: []
                    }
                ],
                total: 0,
            },
            accumulatedPayment: {
                series: [
                    { data: [] }
                ],
                total: 0
            },
            paymentToday: 0,
            paymentPerCurrentMonth: 0,
            patient: {},
            newMsgName: "",
            newMsgEmail: "",
            newMsgDesc: "",
            filterBy: [
                { key: 'last_month', text: 'El mes pasado' },
                { key: 'current_Month', text: 'El mes actual' },
                { key: 'last_7_days', text: 'Los últimos 7 días' }
            ],
            patients: [],
            professionals: [],
            columTableProfessional: [
                {
                    key: "name",
                    label: 'Profesional',
                },
                {
                    key: "pending",
                    label: 'Citas Pendientes',
                },
                {
                    key: "confirmed",
                    label: 'Citas Confirmadas',
                },
                {
                    key: "assisted",
                    label: 'Citas Asistidas',
                },
                {
                    key: "earnings",
                    label: 'Ganancias',
                },

            ],
            patientTrackerRadialBar: {
                series: [0],
                chartOptions: {
                    plotOptions: {
                        radialBar: {
                            size: 150,
                            offsetY: 20,
                            startAngle: -150,
                            endAngle: 150,
                            hollow: {
                                size: '65%',
                            },
                            track: {
                                background: '#fff',
                                strokeWidth: '100%',
                            },
                            dataLabels: {
                                name: {
                                    offsetY: -5,
                                    color: '#5e5873',
                                    fontSize: '1rem',
                                },
                                value: {
                                    offsetY: 15,
                                    color: '#5e5873',
                                    fontSize: '1.714rem',
                                },
                            },
                        },
                    },
                    colors: [$themeColors.danger],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            type: 'horizontal',
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
                    labels: ['Citas Asistidas'],
                },
            },
            current_month: moment().format('YYYY-MM')
        };
    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
        }
    },
    computed: {
        isLogged () {
            return store.state.auth.user;
        },
        account() {
            return store.getters['auth/getCurrentAccount']
        },
        isAdmin() {
            return store.getters['auth/getRoleId'] === 1 //store.state.auth.user.roles[0].id === 1;
        },
        isDirector() {
            return store.getters['auth/getRoleId'] === 2 // store.state.auth.user.roles[0].id === 2;
        },
        isDoctor() {
            return store.getters['auth/getRoleId'] === 4 // store.state.auth.user.roles[0].id === 4;
        },
        isPatient() {
            return store.getters['auth/getRoleId'] === 5 // store.state.auth.user.roles[0].id === 5;
        },
        dataPatient() {
            return {} //store.state.auth.user.patient
        },
        withBudgets() {
            return this.patients.reduce((carry, item) => {
                return carry + item.with_budgets
            }, 0)
        },
        withApointments() {
            return this.patients.reduce((carry, item) => {
                return carry + item.with_appointments
            }, 0)
        },
        confirmedAppointments() {
            return this.patients.reduce((carry, item) => {
                return carry + item.confirmed_appointments
            }, 0)
        },
        withApprovedBudgets() {
            return this.patients.reduce((carry, item) => {
                return carry + item.approved_budgets
            }, 0)
        },
    },
    async mounted() {
        //    await this.getDashboardGeneral()
        await this.getIDashboardService()


    },
    methods: {
        kFormatter,
        selectedFilterBy(e) {

        },
        async getIDashboardService() {
            this.loading = true
            const { data } = await DashboardResource.index({})
            this.loading = false
        },
        async getDashboard() {
            this.loading = true;
            let series = []
            const { data } = await PaymentResource.dashboard();
            this.loading = false;
            this.dashboard = data.data;
        },
        async getByMonthly() {
            this.loading = true
            const { data } = await AppointmentResource.getByMonthly()
            let series = []
            this.loading = false
            this.dashboard.appointments = data.data
            this.appointmentConfirmed.total = data.data.confirmed
            _.map(data.data.perMonth, (item) => {
                series.push(parseFloat(item.total))
            })
            this.appointmentConfirmed.series[0].data = series
        },
        async getPaymentByMonthly() {

        },
        async getDashboardGeneral() {
            this.loading = true
            const query = {
                filter_by: 'current_month'
            }
            const { data } = await DashboardResource.index(query)
            this.loading = false
            this.professionals = data.data.users
            this.payments = data.data.payments
            this.dashboard.totalEarningLastMonth = data.data.lastEarning
            this.dashboard.totalEarningMonth = data.data.currentEarning * 1
            this.dashboard.totalExpenseMonth = data.data.totalExpenseMonth
            this.dashboard.totalEarningDay = data.data.totalEarningDay
            this.dashboard.totalExpenseDay = data.data.totalExpenseDay
            this.dashboard.totalEarningsPerDay = data.data.totalEarningsPerDay
            this.dashboard.patientCount = data.data.patientCount
            this.dashboard.payments = data.data.payments
            this.dashboard.totalCash = data.data.totalCash
            this.dashboard.totalCheck = data.data.totalCheck
            this.dashboard.totalDebitCard = data.data.totalDebitCard
            this.dashboard.totalCreditCard = data.data.totalCreditCard
            this.dashboard.totalTrans = data.data.totalTrans
        },
        async getProfessionals() {
            this.loading = true
            const query = {
                current_month: this.current_month
            }
            const { data } = await DashboardResource.professionals(query)
            this.loading = false
            this.professionals = data.data
        },
        resolveUserRoleVariant(roles) {
            if (!_.isEmpty(roles)) {
                if (store.getters['auth/getRoleId'] == 1) return "danger"; // Administrator
                if (store.getters['auth/getRoleId'] == 2) return "warning"; // Director
                if (store.getters['auth/getRoleId'] == 3) return "primary"; // Recepcionista
                if (store.getters['auth/getRoleId'] == 4) return "secondary"; // Profesional
                if (store.getters['auth/getRoleId'] == 5) return "success"; // Paciente
                if (store.getters['auth/getRoleId'] == 6) return "info"; // Asistente Dental
            }
            return "primary";
        },
    },
    watch: {
        current_month(value) {
            this.getProfessionals()
        }
    }
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/pages/dashboard-ecommerce.scss";
@import "~@resources/scss/vue/libs/chart-apex.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";

.b-table-sticky-header {
    overflow-y: auto;
    max-height: 350px;
}
</style>

<style scoped></style>
