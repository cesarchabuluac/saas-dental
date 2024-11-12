<template>
    <div>
        <!-- Table Container Card -->
        <b-card no-body>
            <div class="m-2">
                <h3>{{ $t('tenants.invoices.title') }}</h3>
            </div>
            <b-table
                ref="refInvoiceListTable"
                :items="invoices"
                responsive
                :fields="tableColumns"
                primary-key="id"                
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"             
                class="position-relative"
            >
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
    </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { ref, computed, onMounted, watch } from "@vue/composition-api";
import {
    BRow,
    BCol,
    BAlert,
    BLink,
    BCard,
    BButton,
    BAvatar,
    BTable,
    BBadge,
    BTooltip,
    VBTooltip,
    BSpinner,
} from "bootstrap-vue";
import Ripple from 'vue-ripple-directive'

import SubscriptionProviders from "@/providers/Subscriptions";
const SubscriptionResources = new SubscriptionProviders();

export default {
    components: {
        BRow,
        BCol,
        BAlert,
        BLink,
        BCard,
        BButton,
        BAvatar,
        BTable,
        BBadge,
        BTooltip,
        VBTooltip,
        BSpinner,
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    setup() {
        const loading = ref(false);
        const account = store.getters["auth/getCurrentAccount"];
        const invoices = ref([]);

        const tableColumns = [            
            {
                key: "id",
                label: "ID"
            },
            {
                key: "description",
                label: "Description"
            },
            {
                key: "date",
                label: "Date",
            },
            {
                key: "total",
                label: "Total",
            },
            { key: 'actions', label: 'Actions' },
        ];

        const getInvoices = async () => {
            loading.value = true;
            const { data } = await SubscriptionResources.getSubscriptionInvoices();
            loading.value = false;
            invoices.value = data.data;            
        };

        const showDetail = (url) => {
            window.open(url, '_blank');
        }

        const downloadInvoice = (url) => {
            window.open(url, '_blank');
        }
 
        onMounted(async () => {
            // await getInvoices();
        });

        return {
            loading,
            account,
            tableColumns,
            invoices,

            //
            showDetail,
            downloadInvoice,
        };
    },
};
</script>

<style></style>
