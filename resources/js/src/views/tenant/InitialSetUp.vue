<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <div class="p-4">
            <h4 class="mb-2">
                {{ $t('setup.welcome').replace(':system', appName) }}

                <b-button  @click="logout" size="sm" variant="outline-danger" class="text-end float-right">{{ $t('logout') }}</b-button>
            </h4>
            <b-alert variant="danger" show>
                <div class="alert-body">
                    <p>
                        <strong>{{ $t('info') }}: </strong>
                        <span>{{ $t('setup.title') }} </span>
                        <span>{{ $t('setup.description') }}</span>
                    </p>
                </div>
            </b-alert>

            <form-wizard color="#7367F0" :title="null" :subtitle="null" layout="vertical" finish-button-text="Guardar"
                next-button-text="Siguiente" 
                back-button-text="Anterior"
                class="wizard-vertical mb-3" @on-complete="updateSettings">

                <!-- global tab -->
                <tab-content title="Global" :before-change="validationGlobalForm">
                    <!-- <setting-global :show-logo="false" :show-save="false" :show-theme="false" /> -->
                    <validation-observer ref="formGlobalRules" tag="form">
                        <b-row>
                            <b-col cols="12" class="mb-2">
                                <h5 class="mb-0">{{ $t("app_setting_global") }}</h5>
                                <small class="text-muted">{{ $t("app_setting_globals") }}</small>
                            </b-col>

                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_app_name')" label-for="app_setting_app_name"
                                    :description="$t('app_setting_app_name_help')">
                                    <validation-provider #default="{ errors }" name="username" rules="required">
                                        <b-form-input 
                                            autocomplete="off" 
                                            v-model="config.app_name" 
                                            id="app_setting_app_name" 
                                            :placeholder="$t('app_setting_app_name_placeholder')"
                                            :state="errors.length > 0 ? false:null" />
                                    </validation-provider>
                                </b-form-group>
                            </b-col>

                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_app_short_description')" label-for="app_short_description"
                                    :description="$t('app_setting_app_short_description_help')">
                                    <b-form-input autocomplete="off" v-model="config.app_short_description" id="app_short_description" 
                                    :placeholder="$t('app_setting_app_short_description_placeholder')" />
                                </b-form-group>
                            </b-col>

                            <!-- Country -->
                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_country')" :description="$t('app_setting_country_help')" label-for="app_setting_country_iso">
                                    <v-select id="app_setting_country_iso" :options="countries" label="name"
                                        :reduce="(country) => country.iso" v-model="config.app_country_iso" :clearable="false" />
                                </b-form-group>
                            </b-col>

                        </b-row>
                    </validation-observer>
                </tab-content>

                <!-- Localization tab -->
                <tab-content :title="$t('app_setting_localisation')" :before-change="validationLocalizationForm">
                    <!-- <setting-localization :show-save="false" /> -->
                    <validation-observer ref="formLocalizationRules" tag="form">
                        <b-row>
                            <b-col cols="12" class="mb-2">
                                <h5 class="mb-0">
                                    {{ $t("app_setting_localisation") }}
                                </h5>
                                <small class="text-muted">
                                    {{ $t("app_setting_localisation_help") }}
                                </small>
                            </b-col>
                        
                            <!-- date format -->
                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_date_format')" label-for="app_setting_date_format">
                                    <validation-provider #default="{ errors }" name="username" rules="required">
                                        <b-form-input v-model="config.date_format" id="app_setting_date_format"
                                            :placeholder="$t('app_setting_date_format_placeholder')"
                                            :state="errors.length > 0 ? false:null" />
                                        <small class="help-block" v-html="$t('app_setting_date_format_help')"></small>
                                    </validation-provider>
                                </b-form-group>
                            </b-col>

                            <!-- Timezone -->
                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_timezone')" :description="$t('app_setting_timezone_help')" label-for="app_setting_date_format">
                                    <v-select v-model="config.timezone" id="app_setting_date_format" :options="timezones"
                                        :clearable="false" :placeholder="$t('app_setting_timezone_placeholder')" />
                                </b-form-group>
                            </b-col>

                            <!-- Enable human date format -->
                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_is_human_date_format')"
                                    label-for="app_setting_is_human_date_format">
                                    <b-form-checkbox id="app_setting_is_human_date_format" v-model="config.enable_human_date_format"
                                        name="app_setting_is_human_date_format">
                                        {{ $t("app_setting_is_human_date_format") }}
                                    </b-form-checkbox>
                                    <small class="help-block" v-html="$t('app_setting_is_human_date_format_help')"></small>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </validation-observer>
                </tab-content>

                <!-- Currency Tab -->
                <tab-content title="Moneda" :before-change="validationCurrencyForm">
                    <!-- <setting-payment :show-save="false" :show-header-currency="true" /> -->
                    <validation-observer ref="formCurrencyRules" tag="form">
                        <b-row>
                            <b-col cols="12" class="mb-2">
                                <h5 class="mb-0">{{ $t("app_setting_currency") }}</h5>
                                <small class="text-muted">{{ $t("app_setting_currencies") }}</small>
                            </b-col>

                            <!-- Enable tax -->
                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_enable_tax')" :description="$t('app_setting_enable_tax_help')" label-for="app_setting_enable_tax">
                                    <b-form-checkbox
                                        id="app_setting_enable_tax"
                                        v-model="config.enable_tax"
                                        name="app_setting_enable_tax">
                                        {{$t("app_setting_enable_tax_help")}}
                                    </b-form-checkbox>
                                </b-form-group>
                            </b-col>

                            <!-- Numeral Formatting -->
                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_default_tax')" :description="$t('app_setting_default_tax_help')" label-for="number">
                                    <cleave
                                        :disabled="!config.enable_tax"
                                        id="number"
                                        v-model="config.default_tax"
                                        class="form-control"
                                        :raw="false"
                                        :options="masks.number"
                                        :placeholder="$t('app_setting_default_tax_placeholder')"
                                    />
                                </b-form-group>
                            </b-col>

                            <!-- Currencie -->
                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_default_currency')" :description="$t('app_setting_default_currency_help')" label-for="app_setting_default_currency">
                                    <v-select
                                        v-model="config.default_currency_id"
                                        id="app_setting_default_currency"
                                        :options="currencies"
                                        :reduce="option => option.value"
                                        label="label"
                                        :clearable="false"
                                    />
                                </b-form-group>
                            </b-col>

                            <!-- Position currency -->
                            <b-col md="6">
                                <b-form-group :label="$t('app_setting_currency_right')" :description="$t('app_setting_currency_right_help')" label-for="app_setting_currency_right_help">
                                    <b-form-checkbox
                                        id="app_setting_currency_right"
                                        v-model="config.enable_currency_right"
                                        name="app_setting_currency_right">
                                        {{$t("app_setting_currency_right_placeholder")}}
                                    </b-form-checkbox>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </validation-observer>
                </tab-content>

                <!-- Email Tab -->
                <tab-content title="Correo">
                    <setting-mail :show-save="false" />
                </tab-content>
            </form-wizard>
        </div>
    </b-overlay>
</template>

<script>
import _ from 'lodash'
import { FormWizard, TabContent } from 'vue-form-wizard'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
    BTabs,
    BTab,
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BButton,
    BFormCheckbox,
    BOverlay,
    BSpinner,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BLink,
    BImg,
    BAlert,
    
} from 'bootstrap-vue'

import { required, email } from '@validations'
import { computed, onMounted, ref, nextTick } from '@vue/composition-api'
import store from '@/store'
import router from '@/router'
import vSelect from "vue-select";
import Cleave from "vue-cleave-component";
import { $themeConfig } from "@themeConfig";
import { useUtils as useI18nUtils } from "@core/libs/i18n";
import useAppConfig from "@core/app-config/useAppConfig";
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import * as helper from "@/libs/helpers";

import SettingGlobal from '@core/components/app-settings/SettingGlobal.vue'
import SettingLocalization from '@core/components/app-settings/SettingLocalization.vue'
import SettingPayment from '@core/components/app-settings/SettingPayment.vue'
import SettingMail from '@core/components/app-settings/SettingMail.vue'

import SettingProvider from "@/providers/Settings";
const SettingResource = new SettingProvider();

import TenantProvider from '@/providers/Tenants'
const TenantResource = new TenantProvider()

export default {
    components: {
        FormWizard,
        TabContent,
        BTabs,
        BTab,
        BCard,
        BRow,
        BCol,
        BFormGroup,
        BInputGroup,
        BInputGroupAppend,
        BFormInput,
        BButton,
        BFormCheckbox,
        BOverlay,
        BSpinner,
        BMedia,
        BAvatar,
        BMediaAside,
        BMediaBody,
        BLink,
        BImg,
        vSelect,
        Cleave,
        BAlert,

        // eslint-disable-next-line vue/no-unused-components
        ToastificationContent,

        SettingGlobal,
        SettingLocalization,
        SettingPayment,
        SettingMail,
        
        //
        ValidationProvider,
        ValidationObserver,

    },
    data() {
        return {}
    },
    methods: {
        validationCurrencyForm() {
            return new Promise((resolve, reject) => {
                this.$refs.formCurrencyRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationGlobalForm() {
            return new Promise((resolve, reject) => {
                this.$refs.formGlobalRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        validationLocalizationForm() {
            return new Promise((resolve, reject) => {
                this.$refs.formLocalizationRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
        },
        async formSubmitted() {
            const payload = store.state.auth.setting
            const oldSettings = JSON.parse(localStorage.getItem("oldSettings"));
            const changedData = {};
            for (const key in payload) {
                if (payload[key] !== oldSettings[key]) {
                    changedData[key] = payload[key];
                }
            }
            changedData['initial_setup'] = true

            try {
                this.loading = true;
                const { data } = await SettingResource.update(changedData);
                this.loading = false;
                if (data.success) {
                    localStorage.removeItem("oldSettings");
                    this.success(data.message);
                    store.commit("auth/SET_SETTING", data.data);
                    localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
                    
                    this.$nextTick(async () => {
                        await this.getCurrentAccount()
                    })                    
                }
            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
    },
    setup() {
        
        const { t } = useI18nUtils();
        const loading = ref(false)
        const config = ref({});
        const countries = ref([]);
        const timezones = ref([])
        const languages = ref([])
        const currencies = ref([]);
        const themes = [
            { value: "light", text: "light" },
            { value: "dark", text: "dark" },
            { value: "bordered", text: "bordered" },
            { value: "semi-dark", text: "semi-dark" },
        ];
        const masks = {
            creditCard: {
                creditCard: true,
            },
            date: {
                date: true,
                delimiter: "-",
                datePattern: ["Y", "m", "d"],
            },
            phone: {
                phone: true,
                phoneRegionCode: "US",
            },
            time: {
                time: true,
                timePattern: ["h", "m", "s"],
            },
            number: {
                numeral: true,
                numeralThousandsGroupStyle: "thousand",
            },
            block: {
                blocks: [4, 3, 3],
                uppercase: true,
            },
            delimiter: {
                delimiter: "·",
                blocks: [3, 3, 3],
                uppercase: true,
            },
            customDelimiter: {
                delimiters: [".", ".", "-"],
                blocks: [3, 3, 3, 2],
                uppercase: true,
            },
            prefix: {
                prefix: "+63",
                blocks: [3, 3, 3, 4],
                uppercase: true,
            },
        };

        const translateMessages = {
            error: t("error"),
            success: t("success"),
            setting_required: t('setting_empty'),
        };

        const appName = computed(() => {
            if (store.state.auth.user) {
                return store.state.auth.setting.app_name
            } else {
                return window._setting.app_name
            }
        })

        const logout = () => {
            store.dispatch('auth/LOGOUT').then( () => {
                store.dispatch('calendar/resetDatas')
            })
        }

        const getCurrentAccount = async () => {
            try {
                const { data } = await TenantResource.me()
                if (data.success) {
                    store.commit('auth/SET_CURRENT_ACCOUNT', data.data)
                    router.push({name: 'home'})
                }
            } catch (e) {
                helper.handleResponseErrors(e)
            }
        }

        onMounted(() => {
            localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
            config.value = store.getters["auth/getSettings"];
            countries.value = store.getters["auth/getCountries"];
            config.value.default_currency_id = config.value.default_currency_id*1
            currencies.value = store.getters["auth/getCurrencies"].map(item => ({value: item.id, label: item.label}));

            _.map(store.getters["auth/getTimezones"], (tz) => {
                _.map(tz, (item) => {
                    timezones.value.push(item);
                });
            });

            languages.value = _.map(store.getters['auth/getLanguages'], (lang, index) => ({
                value: index,
                label: lang,
            }));
        })


        const updateSettings = async () => {
            const oldSettings = JSON.parse(localStorage.getItem("oldSettings"));
            const changedData = {};
            for (const key in config.value) {
                if (config.value[key] !== oldSettings[key]) {
                    changedData[key] = config.value[key];
                }
            }
           
            if (Object.keys(changedData).length === 0) {                
                helper.danger(translateMessages.setting_required);
                return false;
            }

            changedData['initial_setup'] = true
            loading.value = true;
            try {
                const { data } = await SettingResource.update(changedData);                
                if (data.success) {
                    localStorage.removeItem("oldSettings");
                    helper.success(data.message);
                    store.commit("auth/SET_SETTING", data.data);
                    localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
                    nextTick(async () => {
                        await getCurrentAccount()
                    })
                }
            } catch (e) {
                loading.value = false;
                helper.handleResponseErrors(e);
            } finally{
                loading.value = false;
            }
        };

        return {
            loading,
            appName,            
            config,
            countries,
            timezones,
            languages,
            masks,
            currencies,

            //
            logout,
            updateSettings,
            getCurrentAccount,
        }
    }

}
</script>

<style lang="scss">
@import "~@resources/scss/vue/pages/dashboard-ecommerce.scss";
@import "~@resources/scss/vue/libs/vue-wizard.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>


<style>
.vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn::after {
    display: none;
}

/* Oculta el icono del botón "back" */
.vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn::before {
    display: none;
}
</style>
