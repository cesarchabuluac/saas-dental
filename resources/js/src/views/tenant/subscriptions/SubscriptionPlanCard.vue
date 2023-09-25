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
                <b-badge variant="success"> {{ account.plan.name }} </b-badge>
                <small class="text-muted text-info w-100">{{ $t('subscriptions.plans.start')}} {{ formatDate(account.updated_at) }}</small>
            </b-card-header>
            <b-card-header v-else-if="account.plan_ends_at" class="d-flex justify-content-between align-items-center pt-75 pb-25">
                <h5 class="mb-0">{{ $t('subscriptions.subscribed.header').replace(':plan', account.plan.name) }}</h5>
                <h4 class="text-muted_ mt-1 text-danger w-100">
                    {{ $t('subscriptions.cancelled.description').replace(':date', formatDate(account.plan_ends_at)) }}
                </h4>

                <b-button                    
                    :disabled="loading"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="outline-warning"                
                    @click="resumeSubscription"                 
                >
                    {{ $t('subscriptions.resumed.button') }}
                </b-button>
            </b-card-header>
            <b-card-header v-else class="d-flex justify-content-between align-items-center pt-75 pb-25">
                <h5 class="mb-0">{{ $t('subscriptions.card_plan.trial.title').replace(':plan', account.plan.name) }}</h5>
                <h6 v-if="timeLeft === 'ended'" class="text-muted_ mt-1 text-danger w-100">
                    {{ $t('subscriptions.trial_ended').replace(':days', account.end_on_trial) }}
                </h6>
                <h6 v-else class="text-muted_ mt-1 text-danger w-100" v-html="$t('subscriptions.card_plan.trial.subtitle').replace(':timeleft', timeLeft)"></h6>
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
    created() {
        setInterval(() => {
            
        }, 1000);
    },
    setup() {   
        
        // Use toast
        const toast = useToast();

        const loading = ref(false) 
        const targetDate = ref(new Date(store.state.auth.account.trial_ends_at));
        const timeLeft = ref("Calculando...");

        const calculateTimeLeft = () => {
            const now = new Date();
            const timeDiff = targetDate.value - now;
            if (timeDiff <= 0) {
                timeLeft.value = "ended";
                return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            timeLeft.value = `${days} Días, ${hours} Horas, ${minutes} Minutos, ${seconds} Segundos,`;
        };

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

            calculateTimeLeft();
            setInterval(calculateTimeLeft, 1000);
        })

        return {
            loading,
            account,
            isWitchPlan,
            timeLeft,

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
