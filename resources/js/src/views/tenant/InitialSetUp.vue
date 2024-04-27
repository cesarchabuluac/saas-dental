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
                class="wizard-vertical mb-3" @on-complete="formSubmitted">

                <!-- global tab -->
                <tab-content title="Global">
                    <setting-global :show-logo="false" :show-save="false" :show-theme="false" />
                </tab-content>

                <!-- Localization tab -->
                <tab-content :title="$t('app_setting_localisation')">
                    <setting-localization :show-save="false" />
                </tab-content>

                <!-- Currency Tab -->
                <tab-content title="Moneda">
                    <setting-payment :show-save="false" :show-header-currency="true" />
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
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
    BAlert,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BButton,
    BOverlay,
} from 'bootstrap-vue'

import { required, email } from '@validations'
import { computed } from '@vue/composition-api'
import store from '@/store'
import router from '@/router'
import { $themeConfig } from "@themeConfig";
import { useUtils as useI18nUtils } from "@core/libs/i18n";
import useAppConfig from "@core/app-config/useAppConfig";

import SettingGlobal from '@core/components/app-settings/SettingGlobal.vue'
import SettingLocalization from '@core/components/app-settings/SettingLocalization.vue'
import SettingPayment from '@core/components/app-settings/SettingPayment.vue'
import SettingMail from '@core/components/app-settings/SettingMail.vue'

import SettingProvider from "@/providers/Settings";
const SettingResource = new SettingProvider();

export default {
    components: {
        BAlert,
        FormWizard,
        TabContent,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        vSelect,
        BButton,
        BOverlay,
        // eslint-disable-next-line vue/no-unused-components
        ToastificationContent,

        SettingGlobal,
        SettingLocalization,
        SettingPayment,
        SettingMail,

    },
    data() {
        return {   
            loading: false,         
        }
    },
    methods: {
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
                    router.push({name: 'home'})
                }
            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
    },
    setup() {

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


        return {
            appName,

            //
            logout,
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
