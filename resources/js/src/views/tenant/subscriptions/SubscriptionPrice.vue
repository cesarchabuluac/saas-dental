<template>
    <div v-if="!subscription.plan">        
        <!-- title text and switch button -->
        <div class="text-center">
            <h1 class="mt-1">{{ $t('subscriptions.plans.title') }}</h1>
            <p class="mb-2 pb-75" v-html="$t('subscriptions.plans.desc')"></p>
        </div>
        <!--/ title text and switch button -->

        <!-- pricing plan cards -->
        <b-row class="pricing-card">
            <b-col
                offset-sm-2
                sm="10"
                md="12"
                offset-lg="2"
                lg="10"
                class="mx-auto"
            >
                <b-row>
                    <b-col v-for="(item, index) in plans" :key="index" md="4">
                        <b-card :class="item.is_popular ? 'popular' : ''" align="center">
                            <div v-show="item.is_popular" class="pricing-badge text-right">
                                <b-badge variant="light-primary" pill>
                                    Popular
                                </b-badge>
                            </div>

                            <!-- img -->
                            <b-img
                                width="100"
                                v-if="item.image"
                                :src="item.image"
                                class="mb-2 mt-5"
                                alt="basic svg img"
                            />

                            <!-- Title -->
                            <h3>{{ item.name }}</h3>
                            <b-card-text>
                                {{ item.description }}
                            </b-card-text>

                            <!-- annual plan -->
                            <div class="annual-plan">
                                <div class="plan-price mt-2">
                                    <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                                    <span class="pricing-basic-value font-weight-bolder text-primary">{{ item.amount }}</span>
                                    <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/{{ $t('intervals.month')}}</sub>
                                </div>
                            </div>
                            <!--/ annual plan -->

                            <!-- plan benefit -->
                            <b-list-group class="list-group-circle text-left">
                                <b-list-group-item>
                                    {{ $t('subscriptions.plans.limit_doctor') }}: {{ item.label_limit_doctor }}
                                </b-list-group-item>

                                <b-list-group-item>
                                    {{ $t('subscriptions.plans.limit_assistant') }}: {{ item.label_limit_assistant }}
                                </b-list-group-item>

                                <b-list-group-item>
                                    {{ $t('subscriptions.plans.limit_patient') }}: {{ item.label_limit_patient }}
                                </b-list-group-item>

                                <b-list-group-item>
                                    {{ $t('subscriptions.plans.limit_receptionist') }}: {{ item.label_limit_receptionist }}
                                </b-list-group-item>
                            </b-list-group>
                            <!--/ plan benefit -->

                            <!-- buttons -->
                            <b-button v-if="!isWitchPlan"
                                :disabled="loading || account.plan_id === item.id"
                                @click="onSetPlan(item)" v-ripple.400="'rgba(40, 199, 111, 0.15)'" block
                                class="mt-2" :variant="`${account.plan_id === item.id ? 'outline-success': 'primary'}`">
                                {{ account.plan_id === item.id ? $t('tenants.current_plan') : $t('button_upgrade') }}
                            </b-button>
                            <b-button v-else
                                :disabled="loading || account.plan_id === item.id"
                                @click="onSetPlan(item)" v-ripple.400="'rgba(40, 199, 111, 0.15)'" block
                                class="mt-2" :variant="`${account.plan_id === item.id ? 'outline-success': 'primary'}`">
                                {{ account.plan_id === item.id ? $t('tenants.current_plan') : $t('button_change_plan') }}
                            </b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
    <div v-else>
        <b-row>
            <b-col id="pricing-plan" cols="12" xl="7" lg="7" md="7">
                <b-card>
                    <b-row>                        
                        <b-col cols="12" xl="6" class="d-flex justify-content-between flex-column">
                            <div class="d-flex justify-content-start">
                                <b-avatar
                                    :src="subscription.plan.image"
                                    :text="avatarText(subscription.plan.name)"
                                    :variant="`light-success`"
                                    size="104px"
                                    rounded
                                />
                                <div class="d-flex flex-column ml-1">
                                    <div class="mb-1">
                                        <h4 class="mb-0">
                                            {{ subscription.plan.name }}
                                        </h4>
                                        <span class="card-text">{{ subscription.plan.description }}</span>
                                    </div>                                    
                                    <span class="card-text font-weight-bold">{{ $t('subscriptions.plans.limit_doctor') }}: {{ subscription.plan.label_limit_doctor }}</span>
                                    <span class="card-text font-weight-bold">{{ $t('subscriptions.plans.limit_assistant') }}: {{ subscription.plan.label_limit_assistant }}</span>
                                    <span class="card-text font-weight-bold">{{ $t('subscriptions.plans.limit_patient') }}: {{ subscription.plan.label_limit_patient }}</span>
                                    <span class="card-text font-weight-bold">{{ $t('subscriptions.plans.limit_receptionist') }}: {{ subscription.plan.label_limit_receptionist }}</span>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12" xl="6" class="pricing-card">                            
                            <div class="annual-plan">
                                <div class="plan-price mt-2">
                                    <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                                    <span class="pricing-basic-value font-weight-bolder text-primary">{{ subscription.plan.amount }}</span>
                                    <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/{{ $t('intervals.month')}}</sub>
                                </div>
                            </div>

                            <!-- buttons -->
                            <b-button
                                variant="light"
                                class="mt-1 remove-wishlist"
                                v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                                @click="subscription.plan = null"
                                size="sm"
                                >
                                <feather-icon
                                    icon="XIcon"
                                    class="mr-50"
                                />
                                <span>{{ $t('button_remove') }}</span>
                            </b-button>                            
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="12" md="5" xl="5" lg="5">
                <!-- Checkout Options -->
                <div class="checkout-options">
                <b-card>                   
                    <div class="price-details">
                        <h3>{{ $t('subscriptions.payment_options') }}</h3>
                        <hr>

                        <b-form-group :label="$t('subscriptions.cards.name')" label-for="card-holder-name">
                            <b-form-input
                                v-model="subscription.form.name"
                                id="card-holder-name"
                                :placeholder="$t('subscriptions.cards.name_placeholder')"
                            />
                        </b-form-group>

                        <b-form-group :label="$t('subscriptions.cards.card')" label-for="card-element">
                           <div id="card-element"></div>
                        </b-form-group>                        
                        
                        <b-button @click="submitPaymentMethod" class="mt-2" variant="primary" block>
                            {{ $t('button_subscribe') }}
                        </b-button>
                    </div>
                </b-card>
                </div>
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
import * as helper from '@/libs/helpers';
import SubscriptionProviders from "@/providers/Subscriptions";
const SubscriptionResources = new SubscriptionProviders()

import PlansProvider from "@/providers/Plans";
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

        // Use toast
        const toast = useToast();

        const plans = ref([]);
        const loading = ref(false);
        const monthlyPlanShow = ref(false)
        const setting = store.getters['auth/getSettings']
        const account = store.getters['auth/getCurrentAccount']
        const subscription = ref({
            plan: null,
            itentToken: null,
            stripeAPIToken: setting.mode === 'sandbox' ? setting.stripe_sandbox_key : setting.stripe_live_key,
            stripe: '',
            elements: '',
            card: '',
            form: {
                name: store.getters['auth/getUserName'],
            },
            addPaymentStatus: 0,
            addPaymentStatusError: '',
            paymentMethods: [],
            paymentMethodSelected: null,
        })

        /*
            Includes Stripe.js dynamically
        */    
        const includeStripe = (URL, callback) => {    
            let documentTag = document, tag = 'script',
                object = documentTag.createElement(tag),
                scriptTag = documentTag.getElementsByTagName(tag)[0];
            object.src = '//' + URL;
            if (callback) { object.addEventListener('load', function (e) { callback(null, e); }, false); }
            scriptTag.parentNode.insertBefore(object, scriptTag);    
        }

        /*
            Configures Stripe by setting up the elements and 
            creating the card element.
        */
        const configureStripe = () => {
            subscription.value.stripe = Stripe( subscription.value.stripeAPIToken );
            subscription.value.elements = subscription.value.stripe.elements();
            subscription.value.card = subscription.value.elements.create('card');
            subscription.value.card.mount('#card-element');

            subscription.value.card.on('ready', () => {
                const cardElement = document.getElementById('card-element');
                if (cardElement) {                    
                    cardElement.style.backgroundColor = 'transparent';
                    cardElement.style.color = 'white'
                }
            })
        }

        const getPlans = async () => {
            loading.value = true;
            const { data } = await PlansResource.index({});
            loading.value = false;
            plans.value = data.data
        };

        const onSetPlan = (item) => {
            if (isWitchPlan.value) {
                updateSubscription({
                    plan_id: item.id,
                    payment_method_id: null
                })
            } else {            
                subscription.value.plan = {...item}
                includeStripe('js.stripe.com/v3/', function(){
                    configureStripe();
                }.bind(this) );
            }
        }

        const getSeptupIntent = async () => {
            loading.value = true
            const { data } = await SubscriptionResources.setupIntent()
            loading.value = false            
            subscription.value.intentToken = data
        }

        /*
            Loads all of the payment methods for the
            user.
        */
        const loadPaymentMethods = async () => {
            loading.value = true
            const { data } = await SubscriptionResources.getPaymentPethods()
            loading.value = false
            subscription.value.paymentMethods = data
            if (data) {
                subscription.value.paymentMethodSelected = data[data.length - 1]
            }            
        }

        /*
            Saves the payment method for the user and
            re-loads the payment methods.
        */
        const savePaymentMethod = async (method) => {
            loading.value = true
            const { data } = await SubscriptionResources.postPaymentPethods({
                payment_method: method
            })
            loading.value = false
            await loadPaymentMethods()
        }

        const removePaymentMethod = async ( paymentID ) => {
            loading.value = true
            const { data } = await SubscriptionResources.removePaymentMethods({
                id: paymentID
            })
            loading.value = false
            await loadPaymentMethods()
        }

        const updateSubscription = async (payload = null) => {
            try {
                loading.value = true

                if (!payload) {
                    payload = {
                        plan_id: subscription.value.plan.id,
                        payment_method_id: subscription.value.paymentMethodSelected.id
                    }                    
                }

                const { data } = await SubscriptionResources.postSubscriptions(payload)
                loading.value = false
                if (data.success) {
                    store.commit('auth/SET_CURRENT_ACCOUNT', {...data.data})
                    store.commit("auth/SET_SWITCH_PLAN", false);
                    helper.success(data.message)
                } else {
                    helper.danger(data.message)
                }
            }catch(e) {
                loading.value = false
                helper.handleResponseErrors(e);
            }
        }

        const submitPaymentMethod = () => {
            subscription.value.addPaymentStatus = 1
            subscription.value.stripe.confirmCardSetup(
                subscription.value.intentToken.client_secret, {
                    payment_method: {
                        card: subscription.value.card,
                        billing_details: {
                            name: subscription.value.form.name
                        }
                    }
                }
            ).then(async (result) => {
                if (result.error) {
                    subscription.value.addPaymentStatus = 3;
                    subscription.value.addPaymentStatusError = result.error.message;
                    toast({
                        component: ToastificationContent,
                        props: {
                            title: result.error.message, 
                            icon: "CheckIcon",                       
                            variant: "danger",
                        },
                    });
                } else {
                    await savePaymentMethod( result.setupIntent.payment_method );
                    await updateSubscription()
                    subscription.value.addPaymentStatus = 2;
                    subscription.value.card.clear();
                    subscription.value.form.name = null;
                    console.log(subscription.value)
                }
            })
        }

        const isWitchPlan = computed({
            get: () => store.state.auth.switch_plan,
            set: (val) => {
                store.commit("auth/SET_SWITCH_PLAN", val);
            },
        });

        onMounted(async () => {
            await getPlans();
            await getSeptupIntent()
            await loadPaymentMethods()
        });

        return {
            loading,
            plans,
            account,
            monthlyPlanShow,
            subscription,
            isWitchPlan,

            //
            onSetPlan,
            submitPaymentMethod,
        };
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/pages/page-pricing.scss";
@import '~@resources/scss/base/pages/app-ecommerce.scss';
</style>

<style scoped>

/* Estilos específicos para la clase 'StripeElement' sin diseño claro u oscuro */
.StripeElement {
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* Estilos para diseño oscuro */
/* .dark-layout .StripeElement {
  background-color: #283046; 
  border-color: #404656;
  color: #fff!important; 
} */

.dark-layout .StripeElement,
.dark-layout .StripeElement * {     
  background-color: #283046;
  border-color: #404656;
  color: #fff!important;
  
}

/* Estilos para el estado enfocado en modo oscuro */
.dark-layout .StripeElement:focus,
.dark-layout .StripeElement *:focus {
  color: #fff!important; /* Cambia el color del texto enfocado a blanco */
}

/* Estilos para diseño claro */
.light-layout .StripeElement {
  background-color: #fff; /* Cambia esto según tu diseño claro */
  color: #b4b7bd; /* Cambia esto según tu diseño claro */
}

.__PrivateStripeElement-input {
    color: #fff!important;
}

.InputElement .is-complete .Input {
    color: #fff!important;
}

.ElementsApp input {
    background-color: transparent;
    color: #fff!important;
    border: none;
    display: block;
    font-family: sans-serif;
    font-size: 1em;
    height: 1.2em;
    line-height: 1.2em;
    margin: 0;
    padding: 0;
    width: 100%
}

.ElementsApp input *:focus {
    color: #fff!important;
}

/* .StripeElement input {
    background-color: transparent;
    border: none;
    display: block;
    font-family: sans-serif;
    font-size: 1em;
    height: 1.2em;
    line-height: 1.2em;
    margin: 0;
    padding: 0;
    width: 100%;
    color: #fff!important;
} */

.StripeElement .is-invalid {
    color: #ea5455 !important;
}

/* Estilos adicionales según tus necesidades */
</style>