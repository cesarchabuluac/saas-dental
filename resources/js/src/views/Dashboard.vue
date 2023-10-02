<template>
    <div>
        <section v-if="isTenant" id="dashboard-ecommerce">
            <b-row v-if="isAdmin || isDirector" class="match-height">
                <b-col xl="4" md="6">
                    <dashboard-earning :loading="loading" :data="dashboard" />
                </b-col>
                <b-col xl="8" md="6">
                    <dashboard-statistics :loading="loading" :data="dashboard" />
                </b-col>
            </b-row>

            <b-row v-if="isAdmin || isDirector" class="match-height">
                <b-col lg="4">
                    <b-row class="match-height">
                        <!-- Bar Chart - Orders -->
                        <b-col lg="6" md="3" cols="6">
                            <dashboard-card-budget :loading="loading" :total="dashboard.countBudgetApprovedCurrentMonth" />
                        </b-col>
                        <!--/ Bar Chart - Orders -->
                        <b-col lg="6" md="3" cols="6">
                            <dashboard-card-appointments :loading="loading"
                                :total="dashboard.countAppointmentAssistedCurrentMonth" />
                        </b-col>
                        <b-col lg="12" md="6">
                            <dashboard-card-new-patients :data="dashboard" />
                        </b-col>
                    </b-row>
                </b-col>

                <!-- Revenue Report Card -->
                <b-col lg="8">
                    <dashboard-card-doctors :loading="loading" :doctors="dashboard" @call-revenue="onCallRevenue" />
                </b-col>
                <!--/ Revenue Report Card -->
            </b-row>

            <b-row v-if="isDoctor" class="match-height">
                <b-col lg="8">
                    <dashboard-doctor :loading="loading" :data="dashboard" />
                </b-col>
                <b-col lg="4">
                    <b-row class="match-height">                    
                        <b-col lg="6" md="3" cols="6">
                            <dashboard-card-budget :loading="loading" :total="dashboard.countBudgetApprovedCurrentMonth" />
                        </b-col>                    
                        <b-col lg="6" md="3" cols="6">
                            <dashboard-card-appointments :loading="loading"
                                :total="dashboard.countAppointmentAssistedCurrentMonth" />
                        </b-col>                    
                    </b-row>
                </b-col>
            </b-row>

            <b-row class="match-height">
                <!-- Appointment Table Card -->
                <b-col lg="8" md="6">                
                    <!-- <calendar-days v-model="currentDay"/> -->
                    <dashboard-appointments :isDashboard="true" />
                </b-col>
                <!--/ Appointment Table Card -->

                <!-- Transaction Card -->
                <b-col lg="4" md="6">
                    <dashboard-card-transactions :data="dashboard.transactionsData" :loading="false" />              
                </b-col>
                <!--/ Transaction Card -->           
            </b-row>

            <!-- Doctor Payments -->
            <b-row v-if="isDoctor" class="match-height">
                <b-col lg="8" md="8" cols="12">
                    <b-card no-body class="mb-0">
                        <div class="m-2">
                            <h3 class="text-capitalize">{{ $t('payments.dashboard_title')}}</h3>

                            <b-table :sticky-header="true" :no-border-collapse="true" ref="refPaymentListTable"
                                class="position-relative" :items="dashboard.payments" responsive :fields="columnPayments"
                                primary-key="id" show-empty
                                :empty-text="$t('datatables.sZeroRecords')"
                                :busy.sync="loading" small>

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
                                    {{ dateTimeFormat(data.item.payment_date) }}
                                </template>

                                <!-- Column: Budget -->
                                <template #cell(budget)="data">
                                    {{ (data.item.label) }}
                                </template>

                                <!-- Column: Method -->
                                <template #cell(method)="data">
                                    <span>{{ data.item.method_label }}</span>
                                    <p v-if="data.item.check" class="card-text mb-25">
                                        <label><strong>{{ $t('checks.table_bank') }}:</strong>
                                            {{ data.item.check.reference }}</label>
                                        <label><strong>{{ $t('checks.table_bank') }}:</strong>
                                            {{ data.item.check.bank }}</label>
                                        <label><strong>{{ $t('checks.table_serie') }}:</strong>
                                            {{ data.item.check.serie }}</label>
                                    </p>
                                </template>
                            </b-table>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </section>
        <section v-else>            
            <dashboard-central />
        </section>
    </div>
</template>
  
<script>
import { BRow, BCol, BCard, BTable, BSpinner, } from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import DashboardEarning from "@core/components/dashboards/DashboardEarning.vue";
import DashboardStatistics from "@core/components/dashboards/DashboardStatistics.vue";
import DashboardCardBudget from "@core/components/dashboards/DashboardCardBudget.vue"
import DashboardCardAppointments from "@core/components/dashboards/DashboardCardAppointments.vue"
import DashboardCardDoctors from "@core/components/dashboards/DashboardCardDoctors.vue"
import DashboardCardNewPatients from "@core/components/dashboards/DashboardCardNewPatients.vue"
import DashboardCardTransactions from "@core/components/dashboards/DashboardCardTransactions.vue"
import CalendarDays from "@core/components/dashboards/CalendarDays.vue"
import DashboardCentral from "./DashboardCentral.vue"


import store from "@/store";
import PaymentProvider from "@/providers/Payments";
import DashBoardsProvider from "@/providers/DashBoards";
import AppointmentProvider from "@/providers/Appointments";
import DashboardAppointments from '../@core/components/dashboards/DashboardAppointments.vue';
import DashboardDoctor from '../@core/components/dashboards/DashboardDoctor.vue';
const DashboardResource = new DashBoardsProvider();
const PaymentResource = new PaymentProvider();
const AppointmentResource = new AppointmentProvider();

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BTable,
        BSpinner,

        DashboardEarning,
        DashboardStatistics,
        DashboardCardBudget,
        DashboardCardAppointments,
        DashboardCardDoctors,
        DashboardCardNewPatients,
        DashboardCardTransactions,
        DashboardCentral,

        //
        CalendarDays,
        DashboardAppointments,
        DashboardDoctor,
    },
    data() {
        return {
            loading: false,
            dashboard: {},
            currentDay: new Date(),
            columnPayments: [
                {
                    key: "payment_id",
                    label: this.$t("payments.table_payment_id"),
                },
                {
                    key: "created_at",
                    label: this.$t("payments.table_created_at"),
                },
                {
                    key: "budget",
                    label: this.$t("payments.table_budget"),
                },
                {
                    key: "method",
                    label: this.$t("payments.table_method"),
                },
                {
                    key: "amount",
                    label: this.$t("payments.table_amount"),
                },
            ],
        }
    },
    created() {
        
    },
    computed: {
        isAdmin() {
            return store.getters['auth/getRoleId'] === 1;
        },
        isDirector() {
            return store.getters['auth/getRoleId'] === 2;
        },
        isDoctor() {
            return store.getters['auth/getRoleId'] === 4;
        },
        isPatient() {
            return store.getters['auth/getRoleId'] === 5;
        },
        isTenant () {
            return this.checkIsTenant()
        },
        validaTenant() {
            const hostname = window.location.hostname;
            const parts = hostname.split('.');
            console.log(`hostname ${hostname}`)
            console.log(`parts ${parts}`)
            console.log(`Domain: ${process.env.MIX_CENTRAL_DOMAIN}`)

            // Si la URL es localhost o una dirección IP, no hay subdominio.
            if (parts.length === 1 || parts[0] === 'localhost' || parts[0] === process.env.MIX_CENTRAL_DOMAIN) {
                return false;
            }

            // Si hay al menos dos partes en el nombre de host, el subdominio es la primera parte.
            if (parts.length >= 2) {
                return true;
            }

            return false
        },
    },
    async mounted() {     
        console.log(`is tenant: ${this.isTenant}`)  
        console.log(this.validaTenant)
        if (this.isTenant) {
            // await this.getIDashboardService()
            if (this.isDoctor) {
                // await this.onCallPayments()
            }
        }
    },
    methods: {        
        async getIDashboardService() {
            this.loading = true
            const { data } = await DashboardResource.index({})
            this.loading = false
            this.dashboard = data
        },
        async onCallRevenue(query) {
            // this.loading = true
            // const { data } = await DashboardResource.index(query)
            // this.loading = false
            // this.dashboard.revenueDoctors = data.revenueDoctors
        },
        async onCallPayments () {
            const query = {
                onlyPayments: true,
            }
            this.loading = true
            const { data } = await DashboardResource.index(query)
            this.loading = false            
            this.dashboard.payments = data
        }
    }
}
</script>
  
<style lang="scss">
@import '~@resources/scss/vue/pages/dashboard-ecommerce.scss';
@import '~@resources/scss/vue/libs/chart-apex.scss';

.b-table-sticky-header {
    overflow-y: auto;
    min-height: 335px;
    max-height: 335px;
}

</style>
  