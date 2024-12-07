<template>
    <div>
        <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
            <b-card no-body class="mb-2">
                <div class="m-2">
                    <b-row>
                        <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                            <h5>Estadisticas de profesionales del mes actual</h5>
                        </b-col>
                        <b-col cols="12" md="6">
                            <div class="d-flex align-items-center justify-content-end">
                                <b-input-group>
                                    <input type="month" v-model="current_month" class="form-control input" />
                                    <b-input-group-prepend>
                                        <b-button @click="getUsers" sm variant="primary">
                                            <feather-icon icon="SearchIcon" />
                                        </b-button>
                                    </b-input-group-prepend>
                                </b-input-group>
                            </div>
                        </b-col>
                    </b-row>
                </div>
                <b-table
                    ref="refProfessionalListTable"
                    class="position-relative"
                    :items="professionals"
                    responsive
                    :sticky-header="true"
                    :no-border-collapse="true"
                    :fields="columTableProfessional"
                    primary-key="id"
                    show-empty
                    :empty-text="$t('datatables.sZeroRecords')">
                    <template #cell(user_name)="data">
                        <b-link :to="{ name: 'user-profile', params: { id: data.item.user_id },}"
                            class="font-weight-bold d-block text-nowrap">
                            {{ data.item.name }}
                        </b-link>
                    </template>
                    <template #cell(num_pending)="data">
                        <b-badge pill :variant="`light-danger`">
                            {{ data.item.num_pending }}
                        </b-badge>
                    </template>
                    <template #cell(num_confirmed)="data">
                        <b-badge pill :variant="`light-success`">
                            {{ data.item.num_confirmed }}
                        </b-badge>
                    </template>
                    <template #cell(num_assisted)="data">
                        <b-badge pill :variant="`light-primary`">
                            {{ data.item.num_assisted}}
                        </b-badge>
                    </template>
                    <template #cell(num_canceled)="data">
                        <b-badge pill :variant="`light-danger`">
                            {{ data.item.num_canceled}}
                        </b-badge>
                    </template>
                    <template #cell(total_earning)="data">
                        <strong>$ {{ formatMoney(data.item.total_earning) }}</strong>
                    </template>
                </b-table>
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
import store from "@/store";
import { kFormatter } from "@core/utils/filter";
import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart.vue";
import VueApexCharts from "vue-apexcharts";
import { $themeColors } from "@themeConfig";

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
    name: "StatisticProfessionals",
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
    data() {
        return {
            loading: false,
            current_month: moment().format('YYYY-MM'),
            professionals: [],
            columTableProfessional: [
                {
                    key: "user_name",
                    label: 'Profesional',
                },
                {
                    key: "num_pending",
                    label: 'Citas Pendientes',
                },
                {
                    key: "num_confirmed",
                    label: 'Citas Confirmadas',
                },
                {
                    key: "num_assisted",
                    label: 'Citas Asistidas',
                },
                // {
                //     key: "num_unassisted",
                //     label: 'Citas No Asistidas',
                //     tdClass: 'd-none',
                // },
                // {
                //     key: "num_canceled",
                //     label: 'Citas Canceladas',
                //     tdClass: 'd-none',
                // },
                {
                    key: "total_earning",
                    label: 'Ganancias',
                },
            ],
        };
    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
        }
    },
    async mounted() {
        await this.getUsers()
    },
    methods: {
        async getUsers () {
            this.loading = true
            const query = {
                isDashboard: true,
                current_month: this.current_month,
            }
            const { data } = await UserResource.index(query)
            this.loading = false
            this.professionals = data.data
        },
        resolveUserRoleVariant(roles) {
            if (!_.isEmpty(roles)) {
                if (roles[0].id == 1) return "danger"; // Administrator
                if (roles[0].id == 2) return "warning"; // Director
                if (roles[0].id == 3) return "primary"; // Recepcionista
                if (roles[0].id == 4) return "secondary"; // Profesional
                if (roles[0].id == 5) return "success"; // Paciente
                if (roles[0].id == 6) return "info"; // Asistente Dental
            }
            return "primary";
        },
    },
    watch: {
        current_month (value) {
            this.getUsers()
        }
    }
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/pages/dashboard-ecommerce.scss";
@import "~@resources/scss/vue/libs/chart-apex.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
</style>
