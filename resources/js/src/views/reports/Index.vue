<template>
    <div>
        <b-row class="d-flex">
            <!-- Appointments -->
            <b-col v-if="canAccess('reports.appointments')" md="6" lg="4" class="d-flex">
                <b-card :title="$t('reports.appointments.title')" class="mb-3" border-variant="primary">
                    <b-card-text>
                        {{ this.$t('reports.appointments.descriptions') }}
                    </b-card-text>
                    <b-button @click="$router.push({ name: 'reports-appointments' })"
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="primary">
                        <feather-icon icon="CalendarIcon" class="mr-50" /> <span class="align-middle">{{
                            this.$t('button_show_report') }}</span>
                    </b-button>
                </b-card>
            </b-col>

            <!-- Patients -->
            <b-col v-if="canAccess('reports.patients')" md="6" lg="4" class="d-flex">
                <b-card :title="$t('reports.patients.title')" class="mb-3" border-variant="info">
                    <b-card-text>
                        {{ this.$t('reports.patients.descriptions') }}
                    </b-card-text>
                    <b-button @click="$router.push({ name: 'reports-patients' })" v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="info">
                        <feather-icon icon="HeartIcon" class="mr-50" /> <span class="align-middle">{{
                            this.$t('button_show_report') }}</span>
                    </b-button>
                </b-card>
            </b-col>

            <!-- Expenses -->
            <b-col v-if="canAccess('reports.expenses')" md="6" lg="4" class="d-flex">
                <b-card :title="$t('reports.expenses.title')" class="mb-3" border-variant="danger">
                    <b-card-text class="text-danger">
                        {{ this.$t('reports.expenses.descriptions') }}
                    </b-card-text>
                    <b-button @click="$router.push({ name: 'reports-expenses' })" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="danger">
                        <feather-icon icon="TrendingDownIcon" class="mr-50" /> <span class="align-middle">{{
                            this.$t('button_show_report') }}</span>
                    </b-button>
                </b-card>
            </b-col>

            <!-- Payments -->
            <b-col v-if="canAccess('reports.payments')" md="6" lg="4" class="d-flex">
                <b-card :title="$t('reports.payments.title')" class="mb-3" border-variant="success">
                    <b-card-text class="text-success">
                        {{ $t('reports.payments.descriptions') }}
                    </b-card-text>
                    <b-button @click="$router.push({ name: 'reports-payments' })" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="success">
                        <feather-icon icon="TrendingUpIcon" class="mr-50" /> <span class="align-middle">{{
                            this.$t('button_show_report') }}</span>
                    </b-button>
                </b-card>
            </b-col>

            <!-- Medicines -->
            <b-col v-if="canAccess('reports.medicines')" md="6" lg="4" class="d-flex">
                <b-card :title="$t('reports.medicines.title')" class="mb-3" border-variant="dark">
                    <b-card-text class="text-dark">
                        {{ $t('reports.medicines.descriptions') }}
                    </b-card-text>
                    <b-button @click="$router.push({ name: 'reports-medicines' })" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="dark">
                        <feather-icon icon="PackageIcon" class="mr-50" /> <span class="align-middle">{{
                            this.$t('button_show_report') }}</span>
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

        return {
            store,
            router,

            // i18n
            t,
        }
    },
};
</script>

<style lang="scss" scoped></style>
