<template>
    <div>
        <b-row class="d-flex">

            <b-col v-for="(item, index) in reports" :key="index" v-if="canAccess(item.permissions)" md="6" lg="4" class="d-flex">
                <b-card :title="$t(item.title)" class="mb-3" :border-variant="item.color">
                    <b-card-text>
                        {{ $t(item.descriptions) }}
                    </b-card-text>
                    <b-button size="sm" block @click="$router.push({ name: item.route })"
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'" :variant="item.color">
                        <feather-icon :icon="item.icon" class="mr-50" /> 
                        <span class="align-middle">{{ $t('button_show_report') }}</span>
                    </b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {
    BRow, BCol, BCard, BCardText, BButton,
} from 'bootstrap-vue'
import { ref, onMounted, onUnmounted } from 'vue'
import Ripple from 'vue-ripple-directive'
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'
import store from '@/store'
import router from '@/router'
import { useUtils as useI18nUtils } from '@core/libs/i18n'

export default {
    name: 'ReportsIndex',
    components: {
        BRow, BCol, BCard, BCardText, BButton,

        //
        StatisticCardHorizontal,
    },
    directives: {
        Ripple,
    },
    setup() {

        const { t } = useI18nUtils()

        const reports = [
            {
                title: 'reports.appointments.title',
                descriptions: 'reports.appointments.descriptions',
                icon: 'CalendarIcon',
                color: 'primary',
                route: 'reports-appointments',
                permissions: 'reports.appointments',
            },
            {
                title: 'reports.patients.title',
                descriptions: 'reports.patients.descriptions',
                icon: 'HeartIcon',
                color: 'info',
                route: 'reports-patients',
                permissions: 'reports.patients',
            },
            {
                title: 'reports.expenses.title',
                descriptions: 'reports.expenses.descriptions',
                icon: 'TrendingDownIcon',
                color: 'danger',
                route: 'reports-expenses',
                permissions: 'reports.expenses',
            },
            {
                title: 'reports.payments.title',
                descriptions: 'reports.payments.descriptions',
                icon: 'TrendingUpIcon',
                color: 'success',
                route: 'reports-payments',
                permissions: 'reports.payments',
            },
            {
                title: 'reports.medicines.title',
                descriptions: 'reports.medicines.descriptions',
                icon: 'PackageIcon',
                color: 'dark',
                route: 'reports-medicines',
                permissions: 'reports.medicines',
            },
            {
                title: 'reports.waehouse_stocks.title',
                descriptions: 'reports.waehouse_stocks.descriptions',
                icon: 'ActivityIcon',
                color: 'dark',
                route: 'reports-warehouse-stocks',
                permissions: 'reports.medicines',
            },
            {
                title: 'reports.budgets.title',
                descriptions: 'reports.budgets.descriptions',
                icon: 'PieChartIcon',
                color: 'dark',
                route: 'reports-budgets',
                permissions: 'reports.budgets',
            },
            {
                title: 'reports.clinic_actions.title',
                descriptions: 'reports.clinic_actions.descriptions',
                icon: 'ActivityIcon',
                color: 'dark',
                route: 'reports-clinic-actions',
                permissions: 'reports.clinic_actions',
            },
        ]

        return {
            store,
            router,
            reports,

            // i18n
            t,
        }
    },
};
</script>

<style lang="scss" scoped></style>
