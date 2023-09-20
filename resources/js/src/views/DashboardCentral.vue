<template>
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

        <!-- Stats Card Horizontal -->
        <b-row class="match-height">
            <b-col lg="3" sm="6" v-for="(item, index) in dashboard.items" :key="index">
                <statistic-card-horizontal
                  :icon="item.icon"
                  :statistic="item.value"
                  :color="item.bgColor"                  
                  :statistic-title="$t(item.name)"
                />
            </b-col>            
        </b-row>

        <b-row class="match-height">
          <b-col lg="6" md="6" cols="12">
            <b-card no-body class="mb-0">
                <div class="m-2">
                  <h3 class="text-capitalize">{{ $t('tenants.plan_table_title')}} ({{ dateTimeFormat(currentDay, 'Y') }})</h3>
                </div>
                <b-table ref="refTopPlansTable"
                  class="position-relative" 
                  :items="dashboard.topPlans" responsive
                  :fields="tablePlans"
                  primary-key="id" show-empty
                  :empty-text="$t('datatables.sZeroRecords')"
                  :busy.sync="loading">

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

                  <!-- Column: Image -->
                  <template #cell(image)="data">
                      <b-media vertical-align="center">
                          <template #aside>
                              <b-avatar size="32" :src="data.item.image"
                                :variant="`${resolveRoleVariant(data.item.name)}`"
                              />
                          </template>
                          <b-link class="font-weight-bold d-block text-wrap">
                              {{ data.item.name }}
                          </b-link>
                      </b-media>
                  </template>

                  <!-- Column: value -->
                  <template #cell(value)="data">
                      <b-badge :variant="data.item.vaue > 0 ? 'success' : 'primary'">
                        {{ data.item.value }}
                    </b-badge>
                  </template>
              </b-table>
            </b-card>
          </b-col>

          <b-col lg="6" md="6" cols="12">
            <b-card no-body class="mb-0">
                <div class="m-2">
                    <h3 class="text-capitalize">{{ $t('tenants.clients_table_title')}}</h3>
                </div>

                <b-table ref="refTopClientsTable"
                    class="position-relative" 
                    :items="dashboard.topClients" 
                    responsive
                    :fields="tableClients"
                    primary-key="id" show-empty
                    :empty-text="$t('datatables.sZeroRecords')"
                    :busy.sync="loading">

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

                    <!-- Column: Name -->
                    <template #cell(name)="data">
                        <b-media vertical-align="center">
                            <template #aside>
                                <b-avatar size="32" :src="null"
                                  variant="success"
                                  :text="avatarText(data.item.name)"
                                />
                            </template>
                            <b-link class="font-weight-bold d-block text-wrap">
                                {{ data.item.name }}
                            </b-link>
                            <small>{{ data.item.company }}</small>
                        </b-media>
                    </template>

                    <!-- Column: Subscriptions -->
                    <template #cell(subscriptions)="data">
                        <b-badge :variant="data.item.vaue > 0 ? 'success' : 'primary'">
                          {{ data.item.subscriptions_count }}
                      </b-badge>
                    </template>
                </b-table>

            </b-card>
          </b-col>
        </b-row>
    </b-overlay>
</template>

<script>
import _ from "lodash";
import {
    BRow,
    BCol,
    BModal,
    BAlert,
    BLink,
    BCard,
    BButton,
    BMedia,
    BAvatar,
    BImg,
    BBadge,
    BCardHeader,
    BCardBody,
    BForm,
    BFormGroup,
    BFormInput,
    BTable,
    BPagination,
    BTab,
    BTabs,
    BFormTextarea,
    BFormCheckbox,
    BCardText,
    BSpinner,
    BOverlay,
    BCardTitle,
    BCardSubTitle,
    BTooltip,
    VBTooltip,
    BDropdown,
    BDropdownItem,
    BTableSimple,
    BTbody,
    BTd,
    BTfoot,
    BTr,
    BTh,
    BThead,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import store from "@/store";
import router from "@/router";
import StatisticCardVertical from "@core/components/statistics-cards/StatisticCardVertical.vue";
import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
import AppTimeline from "@core/components/app-timeline/AppTimeline.vue";
import AppTimelineItem from "@core/components/app-timeline/AppTimelineItem.vue";
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

import CentralsProvider from "@/providers/Centrals";
const CentralsResource = new CentralsProvider();

export default {
    name: "DashboardCentral",
    components: {
        BRow,
        BCol,
        BModal,
        BAlert,
        BLink,
        BCard,
        BButton,
        BMedia,
        BAvatar,
        BImg,
        BBadge,
        BCardHeader,
        BCardBody,
        BForm,
        BFormGroup,
        BFormInput,
        BTable,
        BTableSimple,
        BTbody,
        BTd,
        BTfoot,
        BTr,
        BTh,
        BThead,
        BPagination,
        BTab,
        BTabs,
        BFormTextarea,
        BFormCheckbox,
        BCardText,
        BSpinner,
        BOverlay,
        BCardTitle,
        BCardSubTitle,
        BTooltip,
        VBTooltip,
        BDropdown,
        BDropdownItem,

        //
        VueApexCharts,
        StatisticCardVertical,
        StatisticCardHorizontal,
        AppTimeline,
        AppTimelineItem,
    },
    directives: {
        "b-tooltip": VBTooltip,
        Ripple,
    },
    data() {
        return {
            loading: false,
            dashboard: {}, 
            currentDay: new Date(),
            tablePlans: [
                {
                    key: "image",
                    label: this.$t("subscriptions.plans.name"),
                },
                {
                    key: "value",
                    label: this.$t("subscriptions.plans.subscriptions"),
                },                   
            ],
            tableClients: [
                {
                  key: 'name',
                  label: this.$t("subscriptions.clients.name"),
                },
                {
                  key: 'subscriptions',
                  label: this.$t("subscriptions.clients.subscriptions"),
                }
            ],
        };
    },
    async mounted() {
        await this.getDashboard();
        await this.getTopPlans()
        await this.getTopClients()
    },
    methods: {
        async getDashboard() {
            this.loading = true;
            const { data } = await CentralsResource.index("this_year");
            this.loading = false;
            this.dashboard = data.data;
        },
        async getTopPlans () {
          this.loading = true;
          const { data } = await CentralsResource.topPlans();
          this.loading = false;
          this.dashboard.topPlans = data.data.items
        },
        async getTopClients () {          
          this.loading = true;
          const { data } = await CentralsResource.topClients();
          this.loading = false;
          this.dashboard.topClients = data.data
        }
    },
};
</script>

<style lang="scss" scoped>
.table-responsive {
    display: block;
    width: 100%;
    overflow-x: revert !important;
    -webkit-overflow-scrolling: touch;
}
</style>
