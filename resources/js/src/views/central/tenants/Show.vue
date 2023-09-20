<template>    
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <!-- First Row -->
        <b-row>
            <b-col cols="12" xl="9" lg="8" md="7">
                <b-card>
                    <b-row>
                        <!-- Tenant Info: Left col -->
                        <b-col cols="21" xl="6" class="d-flex justify-content-between flex-column">
                            <!-- User Avatar & Action Buttons -->
                            <div class="d-flex justify-content-start">
                                <b-avatar    
                                    :src="null"                                    
                                    :text="avatarText(tenant.name)"
                                    size="104px"
                                    rounded
                                />  
                                <div class="d-flex flex-column ml-1">
                                    <div class="mb-1">
                                        <h4 class="mb-0">
                                            {{ tenant.name }}
                                        </h4>
                                        <span class="card-text">{{ tenant.email }}</span>
                                    </div>
                                </div>                                  
                            </div>
                            <!-- User Stats -->
                            <div class="d-flex align-items-center mt-2">
                                <!-- <div class="d-flex align-items-center mr-2">
                                    <b-avatar variant="light-primary" rounded>
                                        <feather-icon icon="DollarSignIcon" size="18"/>
                                    </b-avatar>
                                    <div class="ml-1">
                                        <h5 class="mb-0">23.3k</h5>
                                        <small>Monthly Sales</small>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
                                    <b-avatar variant="light-success" rounded>
                                        <feather-icon icon="TrendingUpIcon" size="18"/>
                                    </b-avatar>
                                    <div class="ml-1">
                                        <h5 class="mb-0">$99.87k</h5>
                                        <small>Annual Profit</small>
                                    </div>
                                </div> -->
                            </div>
                        </b-col>

                        <!-- Right Col: Table -->
                        <b-col cols="12" xl="6">
                            <table class="mt-2 mt-xl-0 w-100">
                                <tr>
                                    <th class="pb-50">
                                        <feather-icon icon="UserIcon" class="mr-75"/>
                                        <span class="font-weight-bold">{{ $t('tenants.id') }}</span>
                                    </th>
                                    <td class="pb-50">
                                        {{ tenant.id }}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pb-50">
                                        <feather-icon icon="HomeIcon" class="mr-75"/>
                                        <span class="font-weight-bold">{{ $t('tenants.company') }}</span>
                                    </th>
                                    <td class="pb-50 text-capitalize">
                                        {{ tenant.company }}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pb-50">
                                        <feather-icon icon="CheckIcon" class="mr-75"/>
                                        <span class="font-weight-bold">{{ $t('tenants.on_trial') }}</span>
                                    </th>
                                    <td class="pb-50 text-capitalize">
                                        <b-badge pill :variant="`${resolveStatusBadge(tenant.on_trial)}`" class="text-capitalize">
                                            {{ tenant.on_trial }}
                                        </b-badge>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pb-50">
                                        <feather-icon icon="StarIcon" class="mr-75"/>
                                        <span class="font-weight-bold">{{ $t('tenants.subscribed') }}</span>
                                    </th>
                                    <td class="pb-50 text-capitalize">
                                        <b-badge pill :variant="`${resolveStatusBadge(tenant.is_subscribed)}`" class="text-capitalize">
                                            {{ tenant.is_subscribed }}
                                        </b-badge>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pb-50">
                                        <feather-icon icon="SlashIcon" class="mr-75"/>
                                        <span class="font-weight-bold">{{ $t('tenants.banned') }}</span>
                                    </th>
                                    <td class="pb-50">
                                        <b-badge pill :variant="`${resolveStatusBadge(tenant.is_banned)}`" class="text-capitalize">
                                            {{ tenant.is_banned }}
                                        </b-badge>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <feather-icon icon="GlobeIcon" class="mr-75"/>
                                        <span class="font-weight-bold">{{ $t('tenants.domain') }}</span>
                                    </th>
                                    <td>
                                        <a :href="tenant.domain_url" target="_blank" rel="noopener noreferrer">{{ tenant.domain_url }}</a>
                                    </td>
                                </tr>
                            </table>
                        </b-col>
                    </b-row>
                </b-card>                
            </b-col>
            <b-col cols="12" md="5" xl="3" lg="4">
                <b-card no-body class="border-primary">
                    <b-card-header class="d-flex justify-content-between align-items-center pt-75 pb-25">
                        <h5 class="mb-0">{{ $t('tenants.current_plan') }}</h5>
                        <b-badge variant="light-primary">
                            {{ tenant.plan.name }}
                        </b-badge>
                        <small class="text-muted w-100">{{ $t('subscriptions.plans.start') }} {{ formatDateTime(tenant.updated_at) }}</small>
                        <!-- <small class="text-muted_ w-100 text-danger">{{ $t('tenants.trial_ends_at') }}: {{ formatDateTime(tenant.trial_ends_at) }}</small> -->
                    </b-card-header>

                    <b-card-body>
                        <ul class="list-unstyled my-1">
                            <li v-for="(item, index) in tenant.limitations" :key="index">
                                <span class="align-middle"><strong>{{ $t(item.name) }}:</strong> {{ item.limit }}</span>
                            </li>
                        </ul>                                                
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <!-- Second Row -->
        <!-- Stats Card Horizontal -->
        <b-row>
            <b-col v-for="(item, index) in tenant.limitations" :key="index" lg="3" sm="6">
                <statistic-card-horizontal
                    :icon="item.icon"
                    :statistic="$t(item.name)"
                    :color="item.bgColor"
                    :statistic-text="`${$t(`tenants.used`)}: ${item.current}`"
                    :statistic-description="`${$t(`tenants.remaining`)}: ${item.limit}`"
                    :statistic-title="`${$t('tenants.limit')} ${item.limit}`"
                />
            </b-col>
        </b-row>
        <b-row>           
            <b-col cols="12" xl="9" lg="8" md="7">
                <b-card no-body>
                   <div class="m-2">
                        <h3>{{ $t('tenants.invoices.title') }}</h3>
                    </div>
                    <b-table
                        ref="refInvoiceListTable"
                        :items="tenant.tenant_invoices"
                        responsive
                        :fields="tableColumns"
                        primary-key="id"
                        show-empty
                        :empty-text="$t('datatables.sZeroRecords')"
                        class="position-relative">

                        <!-- Empty -->
                        <template slot="empty">
                            <div v-if="loading" class="d-flex justify-content-center mb-1">
                                <b-spinner style="width: 3rem; height: 3rem" class="mr-1" label="Loading..." variant="primary" />
                            </div>
                        </template>

                        <!-- id -->
                        <template #cell(id)="data">
                            {{ data.item.id }}
                        </template>

                        <!-- Description -->
                        <template #cell(description)="data">
                            {{ data.item.lines.data[0].description }}
                        </template>

                        <!-- Total -->
                        <template #cell(total)="data">
                            {{ formatPrice(data.item.total/100) }} <span class="text-uppercase">{{ data.item.currency}}</span>
                        </template>

                        <!-- date -->
                        <template #cell(date)="data">
                            {{ formatTimestamp(data.item.period_start) }}
                        </template>

                        <!-- Column: actions -->
                        <template #cell(actions)="data">
                            <div class="demo-inline-spacing">
                                <b-button @click="showDetail(data.item.hosted_invoice_url)" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"
                                    class="btn-icon" size="sm"                        
                                    v-b-tooltip.hover.right="`${$t('button_tooltip_detail')}`">
                                    <feather-icon icon="EyeIcon" />
                                </b-button>

                                <b-button @click="downloadInvoice(data.item.invoice_pdf)" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    variant="secondary" class="btn-icon" size="sm"
                                    v-b-tooltip.hover.right="`${$t('button_tooltip_download')}`">
                                    <feather-icon icon="DownloadIcon" />
                                </b-button>
                            </div>
                        </template>

                    </b-table>
                </b-card>
            </b-col>
        </b-row>
    </b-overlay>    
</template>

<script>
import _ from 'lodash'
import {BRow, BCol, BModal, BAlert, BLink, BCard, BButton, BMedia, BAvatar, BImg, BBadge, BCardHeader, BCardBody, BForm,
  BFormGroup, BFormInput, BTable, BPagination, BTab, BTabs, BFormTextarea, BFormCheckbox, BCardText, BSpinner,
  BOverlay, BCardTitle, BCardSubTitle, BTooltip, VBTooltip, BDropdown, BDropdownItem, BTableSimple, BTbody, BTd, BTfoot, BTr, BTh, BThead,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import router from "@/router";
import StatisticCardVertical from '@core/components/statistics-cards/StatisticCardVertical.vue'
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'

import TenantsProvider from "@/providers/Tenants";
import { formatDateToMonthShort } from '@/@core/utils/filter';
const TenantsResource = new TenantsProvider();

export default {
    name: "TenantDetails",
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
        StatisticCardVertical,
        StatisticCardHorizontal,
        AppTimeline,
        AppTimelineItem,
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            loading: false,
            tenant: {},
            tableColumns: [
                {
                    key: "id",
                    label: this.$t('subscriptions.invoices.id')
                },
                {
                    key: "description",
                    label: this.$t('subscriptions.invoices.description')
                },
                {
                    key: "date",
                    label: this.$t('subscriptions.invoices.date'),
                },
                {
                    key: "total",
                    label: this.$t('subscriptions.invoices.total'),
                },
                { key: 'actions', label: this.$t('actions') },
            ]
        }
    },
    async mounted() {
        await this.getTenant()
    },
    methods: {
        async getTenant () {
            this.loading = true
            const { data } = await TenantsResource.show(router.currentRoute.params.id)
            this.loading = false
            this.tenant = data
        },
        showDetail (url) {
            window.open(url, '_blank');
        },
        downloadInvoice (url) {
            window.open(url, '_blank');
        }
    }

}
</script>

<style lang="scss" scoped>
.table-responsive {
	display: block;
	width: 100%;
	overflow-x: revert!important;
	-webkit-overflow-scrolling: touch;
}
</style>