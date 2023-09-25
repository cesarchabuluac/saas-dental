<template>
    <div>
        <b-row>
            <b-col id="pricing-plan" cols="12" xl="7" lg="7" md="7">
                <b-card>
                    <b-row>
                        <b-col cols="12">
                            <h3 class="mb-0">{{ $t('subscriptions.plans.current_plan') }}</h3>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">                        
                        <b-col cols="12" xl="6" class="d-flex justify-content-between flex-column">
                            <div class="d-flex justify-content-start">
                                <b-avatar
                                    :src="account.plan.image"
                                    :text="avatarText(account.plan.name)"
                                    :variant="`light-success`"
                                    size="104px"
                                    rounded
                                />
                                <div class="d-flex flex-column ml-1">
                                    <div class="mb-1">
                                        <h4 class="mb-0">
                                            {{ account.plan.name }}
                                        </h4>
                                        <span class="card-text">{{ account.plan.description }}</span>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12" xl="6" class="pricing-card">                            
                            <div class="annual-plan">
                                <div class="plan-price mt-2">
                                    <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                                    <span class="pricing-basic-value font-weight-bolder text-primary">{{ account.plan.amount }}</span>
                                    <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/{{ $t('intervals.month')}}</sub>
                                </div>
                            </div>                                                
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
             <b-col cols="12" md="5" xl="5" lg="5">
                <b-card>
                    <b-row>
                        <b-col cols="12">
                            <div class="d-flex flex-column ml-1">
                                <span class="card-text font-weight-bold">{{ $t('subscriptions.plans.limit_doctor') }}: {{ account.plan.label_limit_doctor }}</span>
                                <span class="card-text font-weight-bold">{{ $t('subscriptions.plans.limit_assistant') }}: {{ account.plan.label_limit_assistant }}</span>
                                <span class="card-text font-weight-bold">{{ $t('subscriptions.plans.limit_patient') }}: {{ account.plan.label_limit_patient }}</span>
                                <span class="card-text font-weight-bold">{{ $t('subscriptions.plans.limit_receptionist') }}: {{ account.plan.label_limit_receptionist }}</span>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="12">
                            <div v-if="!account.plan_ends_at">
                                <b-button
                                    :disabled="loading"
                                    v-if="account.is_subscribed && !account.on_trial && !isWitchPlan"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    variant="warning"                                    
                                    @click="switchPlan"
                                >
                                    {{ $t('subscriptions.switch_plan.button') }}
                                </b-button>

                                <b-button
                                    v-if="account.is_subscribed && !account.on_trial && !isWitchPlan"
                                    :disabled="loading"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    variant="danger"
                                    @click="cancelSubscription"
                                >
                                    {{ $t('subscriptions.cancelled.button') }}
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-card>
             </b-col>
        </b-row>
    </div>
</template>

<script>
import store from "@/store";
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { ref, computed, onMounted } from "@vue/composition-api";
import {
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BFormCheckbox,
    BRow,
    BCol,
    BCard,
    BImg,
    BCardText,
    BListGroup,
    BListGroupItem,
    BButton,
    BBadge,
    BLink,
    BCardBody,
    BFormSpinbutton,
    BAvatar,
} from "bootstrap-vue";
import AppCollapse from "@core/components/app-collapse/AppCollapse.vue";
import AppCollapseItem from "@core/components/app-collapse/AppCollapseItem.vue";
import Ripple from "vue-ripple-directive";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import SubscriptionProviders from "@/providers/Subscriptions";
const SubscriptionResources = new SubscriptionProviders()

import PlansProvider from "@/providers/Plans";
import * as helper from '@/libs/helpers';
const PlansResource = new PlansProvider();

export default {
    components: {
        BFormGroup,
        BInputGroup,  
        BInputGroupAppend,  
        BFormInput,    
        BFormCheckbox,
        BButton,
        BCardText,
        BListGroup,
        BListGroupItem,
        BRow,
        BCol,
        BCard,
        BBadge,
        BImg,
        BLink,
        BCardBody,
        BFormSpinbutton,
        FormWizard,
        TabContent,
        BAvatar,

        AppCollapseItem,
        AppCollapse,
    },
    directives: {
        Ripple,
    },
    setup() {

        const loading = ref(false)
        const account = store.getters['auth/getCurrentAccount']
        const isWitchPlan = computed({
            get: () => store.state.auth.switch_plan,
            set: (val) => {
                store.commit("auth/SET_SWITCH_PLAN", val);
            },
        });

        const resumeSubscription = async () => {
            try {
                loading.value = true
                const { data } = await SubscriptionResources.resumeSubscription({
                    plan_id: account.plan_id
                })
                loading.value = false
                if (data.success) {
                    store.commit('auth/SET_CURRENT_ACCOUNT', {...data.data})
                    helper.success(data.message)
                } else {
                    helper.danger(data.message)
                }
            }catch(e) {
                loading.value = false
                helper.handleResponseErrors(e)
            }
        }

        const cancelSubscription = async () => {

            try {
                loading.value = true
                const { data } = await SubscriptionResources.cancelSubscription({
                    plan_id: account.plan_id
                })
                loading.value = false

                if (data.success) {
                    store.commit('auth/SET_CURRENT_ACCOUNT', {...data.data})
                    helper.success(data.message)
                } else {
                    helper.danger(data.message)
                }
            }catch(e) {
                loading.value = false
                helper.handleResponseErrors(e)
            }       
        }

        const switchPlan = () => {
            store.commit('auth/SET_SWITCH_PLAN', true)
        }


        return {
            loading,
            account,
            isWitchPlan,

            //
            cancelSubscription,
            resumeSubscription,
            switchPlan,
        }
    }
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/pages/page-pricing.scss";
@import '~@resources/scss/base/pages/app-ecommerce.scss';
</style>