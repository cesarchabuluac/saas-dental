<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
        <div class="d-flex align-items-center">
            <b-spinner small type="grow" variant="secondary" />
            <b-spinner type="grow" variant="dark" />
            <b-spinner small type="grow" variant="secondary" />
        </div>
        </template>
        <b-card no-body class="border-primary">
            <b-card-header v-if="!account.on_trial && account.is_subscribed && !account.plan_ends_at" class="d-flex justify-content-between align-items-center pt-75 pb-25">
                <h5 class="mb-0">{{ $t('subscriptions.plans.current_plan') }}</h5>
                <b-badge variant="light-primary"> {{ account.plan.name }} </b-badge>
                <small class="text-muted text-info w-100">{{ $t('subscriptions.plans.start')}} {{ formatDate(account.updated_at) }}</small>
            </b-card-header>
            <b-card-header v-else-if="account.plan_ends_at" class="d-flex justify-content-between align-items-center pt-75 pb-25">
                <h5 class="mb-0">{{ $t('subscriptions.subscribed.header').replace(':plan', account.plan.name) }}</h5>
                <h4 class="text-muted_ mt-1 text-danger w-100">
                    {{ $t('subscriptions.cancelled.description').replace(':date', formatDate(account.plan_ends_at)) }}
                </h4>           
            </b-card-header>
            <b-card-header v-else class="d-flex justify-content-between align-items-center pt-75 pb-25">
                <h5 class="mb-0">{{ $t('subscriptions.card_plan.trial.title').replace(':plan', account.plan.name) }}</h5>
                <h6 v-if="daysRemaining(account.trial_ends_at) > 0" class="text-muted_ text-danger w-100">
                    {{ $t('subscriptions.card_plan.trial.subtitle').replace(':days', daysRemaining(account.trial_ends_at)) }}
                </h6>
                <h6 v-else class="text-muted_ text-danger w-100">
                    {{ $t('subscriptions.trial_ended').replace(':date', dateHuman(account.trial_ends_at)) }}
                </h6>
            </b-card-header>

            <b-card-body>
                <ul v-if="!account.on_trial && account.is_subscribed && !account.plan_ends_at" class="list-unstyled">
                    <li>
                        <span class="align-middle">{{ $t('subscriptions.plans.limit_doctor') }}: {{ account.plan.label_limit_doctor }}</span>
                    </li>
                    <li>
                        <span class="align-middle">{{ $t('subscriptions.plans.limit_assistant') }}: {{ account.plan.label_limit_assistant }}</span>
                    </li>
                    <li>
                        <span class="align-middle">{{ $t('subscriptions.plans.limit_receptionist') }}: {{ account.plan.label_limit_receptionist }}</span>
                    </li>
                    <li>
                        <span class="align-middle">{{ $t('subscriptions.plans.limit_patient') }}: {{ account.plan.label_limit_patient }}</span>
                    </li>
                </ul> 

                <div v-if="!account.plan_ends_at">
                    <!-- <b-button
                        v-if="account.is_subscribed && !account.on_trial && !isWitchPlan"
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        variant="primary"                
                        size="sm"
                        @click="switchPlan"
                    >
                        {{ $t('subscriptions.switch_plan.button') }}
                    </b-button> -->

                    <b-button
                        v-if="account.is_subscribed && !account.on_trial && !isWitchPlan"
                        :disabled="loading"
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        variant="danger"                
                        size="sm"
                        @click="cancelSubscription"
                    >
                        {{ $t('subscriptions.cancelled.button') }}
                    </b-button>
                </div>
                <div v-else class="mt-1">
                    <b-button                    
                        :disabled="loading"
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        variant="warning"                
                        size="sm"   
                        @click="resumeSubscription"                 
                    >
                        {{ $t('subscriptions.resumed.button') }}
                    </b-button>
                </div>
            </b-card-body>
        </b-card>
    </b-overlay>
</template>

<script>
import store from "@/store"
import { ref, computed, onMounted, watch } from "@vue/composition-api";
import { BCard, BCardHeader, BCardBody, BBadge, BButton, BOverlay, BSpinner, } from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";


import SubscriptionProviders from "@/providers/Subscriptions";
const SubscriptionResources = new SubscriptionProviders()

export default {
    directives: {
        Ripple,
    },
    components: {
        BCard,
        BCardHeader,
        BCardBody,
        BBadge,
        BButton,
        BOverlay, 
        BSpinner,
    },
    setup() {   
        
        // Use toast
        const toast = useToast();

        const loading = ref(false) 
        // const account = store.getters['auth/getCurrentAccount'];

        const account = computed({
            get: () => store.state.auth.account,
            set: (val) => {
                store.commit("auth/SET_CURRENT_ACCOUNT", val);
            },
        });

        const switchPlan = () => {
            store.commit('auth/SET_SWITCH_PLAN', true)
        }

        const isWitchPlan = computed( () => {
            return store.state.auth.switch_plan
        })

        const resumeSubscription = async () => {
            loading.value = true
            const { data } = await SubscriptionResources.resumeSubscription({
                plan_id: account.plan_id
            })
            loading.value = false
            if (data.success) {
                store.commit('auth/SET_CURRENT_ACCOUNT', {...data.data})
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message,                        
                        icon: "CheckIcon",
                        variant: "success",                        
                    },
                });
            } else {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message, 
                        icon: "XIcon",                       
                        variant: "danger",
                    },
                });
            }
        }

        const cancelSubscription = async () => {
            loading.value = true
            const { data } = await SubscriptionResources.cancelSubscription({
                plan_id: account.plan_id
            })
            loading.value = false

            if (data.success) {
                store.commit('auth/SET_CURRENT_ACCOUNT', {...data.data})
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message,  
                        icon: "CheckIcon",                      
                        variant: "success",
                    },
                });
            } else {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message, 
                        icon: "XIcon",                       
                        variant: "danger",
                    },
                });
            }           
        }

        onMounted(() => {
            store.commit('auth/SET_SWITCH_PLAN', false)
        })

        return {
            loading,
            account,
            isWitchPlan,

            //
            switchPlan,
            cancelSubscription,
            resumeSubscription,
        };
    },
};
</script>

<style lang="scss">

</style>
