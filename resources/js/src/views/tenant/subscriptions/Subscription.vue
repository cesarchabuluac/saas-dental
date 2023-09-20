<template>
    <div>
        <template>
            <!-- First Row -->
            <b-row>
                <b-col cols="12" xl="9" lg="8" md="7">
                    <subscription-view-info-card />
                </b-col>
                <b-col cols="12" md="5" xl="3" lg="4">
                    <subscription-plan-card />
                </b-col>
            </b-row>

            <b-tabs vertical content-class="col-12 col-md-9 mt-1 mt-md-0" pills nav-wrapper-class="col-md-3 col-12" nav-class="nav-left">
            
                <!-- general tab -->
                <b-tab active :disabled="account.plan_ends_at">
                    <!-- title -->
                    <template #title>
                        <feather-icon icon="DollarSignIcon" size="18" class="mr-50"/>
                        <span class="font-weight-bold">{{ $t('subscriptions.plans.title') }}</span>
                    </template>

                    <subscription-price />
                </b-tab>

                <b-tab>

                    <!-- title -->
                    <template #title>
                        <feather-icon icon="FileTextIcon" size="18" class="mr-50"/>
                        <span class="font-weight-bold">{{$t('tenants.invoices.title')}}</span>
                    </template>
                    
                    <subscription-invoices />
                    
                    </b-tab>
            </b-tabs>
        </template>
    </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { ref, computed, onMounted, watch } from "@vue/composition-api";
import { BRow, BCol, BAlert, BLink, BCard, BButton, BAvatar, BTabs, BTab } from "bootstrap-vue";
import SubscriptionViewInfoCard from "./SubscriptionViewInfoCard.vue"
import SubscriptionPlanCard from './SubscriptionPlanCard.vue';
import SubscriptionPrice from './SubscriptionPrice.vue';
import SubscriptionInvoices from './SubscriptionInvoices.vue';

import SubscriptionProviders from "@/providers/Subscriptions";
const SubscriptionResources = new SubscriptionProviders()

export default {
    components: {
        BRow,
        BCol,
        BAlert,
        BLink,
        BCard, 
        BButton, 
        BAvatar,
        BTabs, 
        BTab,

        // Local Components
        SubscriptionViewInfoCard,
        SubscriptionPlanCard,
        SubscriptionPrice,
        SubscriptionInvoices,
    },
    setup() {
        const loading = ref(false)
        // const account = store.getters['auth/getCurrentAccount']
        const currentSubscription = ref({})
        const isShowPrices = ref(true)

        const account = computed({
            get: () => store.state.auth.account,
            set: (val) => {
                store.commit("auth/SET_CURRENT_ACCOUNT", val);
            },
        });

        const getCurrentSubscription = async () => {
            loading.value = true
            const { data } = await SubscriptionResources.currentSubscriptions()
            loading.value = false
            currentSubscription.value = data.data
        }

        const isWitchPlan = computed({
            get: () => store.state.auth.switch_plan,
            set: (val) => {
                store.commit("auth/SET_SWITCH_PLAN", val);
            },
        });
    
        watch([isWitchPlan], (value) => {
            if (value) {
                isShowPrices.value = value
            }
            
        })

        onMounted( async () => {
            if (account.plan_id && account.plan) {
                isShowPrices.value = false
            }
        })

        return {
            account,
            isShowPrices,
            isWitchPlan,
        };        
    },
};
</script>

<style></style>
