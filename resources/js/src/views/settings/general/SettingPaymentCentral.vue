<template>
    <b-overlay
        :show="loading"
        blur="2px"
        variant="transparent"
        rounded="lg"
        opacity="0.85"
    >
        <b-card>
            <b-row>
                <b-col md="12">
                    <b-tabs>
                        <b-tab active>
                            <template #title>
                                <feather-icon icon="CreditCardIcon" />
                                <span>Paypal</span>
                            </template>

                            <b-row>

                                <!-- Enable Paypal -->
                                <b-col md="6" class="mt-2">
                                    <b-form-group :label="$t('app_setting_enable_paypal')" label-for="app_setting_enable_paypal">
                                        <b-form-checkbox
                                            id="app_setting_enable_paypal"
                                            v-model="config.enable_paypal"
                                            name="app_setting_enable_paypal"
                                        >
                                        {{$t('app_setting_enable_paypal_help')}}
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>

                                <!-- Enable Paypal -->
                                <b-col md="6" class="mt-2">
                                    <b-form-group :label="$t('app_setting_paypal_mode')" label-for="app_setting_paypal_mode">
                                        <b-form-checkbox
                                            id="app_setting_paypal_mode"
                                            v-model="config.enable_paypal_mode"
                                            name="app_setting_paypal_mode"
                                        >
                                        {{$t('app_setting_paypal_mode_help')}}
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>

                                <!-- Paypal Secret -->
                                <b-col md="6">
                                    <b-form-group
                                        :label="$t('app_setting_paypal_secret')"
                                        label-for="app_setting_paypal_secret"
                                        :description="$t('app_setting_paypal_secret_help')"
                                    >
                                        <b-form-input v-if="config.enable_paypal_mode"
                                            v-model="config.paypal_live_client_secret"
                                            id="app_setting_paypal_secret"
                                            :placeholder="
                                                $t('app_setting_paypal_secret_placeholder')
                                            "
                                        />
                                        <b-form-input v-else
                                            v-model="config.paypal_sandbox_client_secret"
                                            id="app_setting_paypal_secret"
                                            :placeholder="
                                                $t('app_setting_paypal_secret_placeholder')
                                            "
                                        />
                                    </b-form-group>
                                </b-col>

                                <!-- Paypal App ID -->
                                <b-col md="6">
                                    <b-form-group
                                        :label="$t('app_setting_paypal_app_id')"
                                        label-for="app_setting_paypal_app_id"
                                        :description="$t('app_setting_paypal_app_id_help')"
                                    >
                                        <b-form-input v-if="config.enable_paypal_mode"
                                            v-model="config.paypal_sandbox_client_id"
                                            id="app_setting_paypal_app_id"
                                            :placeholder="
                                                $t('app_setting_paypal_app_id_placeholder')
                                            "
                                        />
                                        <b-form-input v-else
                                            v-model="config.paypal_live_client_id"
                                            id="app_setting_paypal_app_id"
                                            :placeholder="
                                                $t('app_setting_paypal_app_id_placeholder')
                                            "
                                        />
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-tab>

                        <!-- Stripe -->
                        <b-tab>
                            <template #title>
                                <feather-icon icon="CreditCardIcon" />
                                <span>Stripe</span>
                            </template>

                            <b-row>

                                <!-- Enable Stripe -->
                                <b-col md="6" class="mt-2">
                                    <b-form-group :label="$t('app_setting_enable_stripe')" label-for="app_setting_enable_stripe">
                                        <b-form-checkbox
                                            id="app_setting_enable_stripe"
                                            v-model="config.enable_paypal"
                                            name="app_setting_enable_stripe"
                                        >
                                        {{$t('app_setting_enable_stripe_help')}}
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>

                                <!-- Enable Stripe -->
                                <b-col md="6" class="mt-2">
                                    <b-form-group :label="$t('app_setting_stripe_mode')" label-for="app_setting_stripe_mode">
                                        <b-form-checkbox
                                            id="app_setting_stripe_mode"
                                            v-model="config.enable_stripe_mode"
                                            name="app_setting_stripe_mode"
                                        >
                                        {{$t('app_setting_stripe_mode_help')}}
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>

                                <!-- Stripe Key -->
                                <b-col md="6">
                                    <b-form-group
                                        :label="$t('app_setting_stripe_key')"
                                        label-for="app_setting_stripe_live_key"
                                        :description="$t('app_setting_stripe_key_help')"
                                    >
                                        <b-form-input v-if="config.enable_stripe_mode"
                                            v-model="config.stripe_live_key"
                                            id="app_setting_stripe_live_key"
                                            :placeholder="
                                                $t('app_setting_stripe_key_placeholder')
                                            "
                                        />
                                        <b-form-input v-else
                                            v-model="config.stripe_sandbox_key"
                                            id="app_stripe_sandbox_key"
                                            :placeholder="
                                                $t('app_setting_stripe_key_placeholder')
                                            "
                                        />
                                    </b-form-group>
                                </b-col>

                                <!-- Stripe Secret -->
                                <b-col md="6">
                                    <b-form-group
                                        :label="$t('app_setting_stripe_key')"
                                        label-for="app_setting_stripe_key"
                                        :description="$t('app_setting_stripe_key_help')"
                                    >
                                        <b-form-input v-if="config.enable_stripe_mode"
                                            v-model="config.stripe_live_secret"
                                            id="app_setting_stripe_key"
                                            :placeholder="
                                                $t('app_setting_stripe_key_placeholder')
                                            "
                                        />
                                        <b-form-input v-else
                                            v-model="config.stripe_sandbox_secret"
                                            id="app_setting_stripe_key"
                                            :placeholder="
                                                $t('app_setting_stripe_key_placeholder')
                                            "
                                        />
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <b-button
                        :disabled="loading"
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        variant="primary"
                        class="mt-2 mr-1"
                        @click="updateSettings"
                    >
                        {{ $t("save") }}
                    </b-button>
                </b-col>
            </b-row>
        </b-card>
    </b-overlay>
</template>

<script>
import _ from "lodash";
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
} from "bootstrap-vue";
import {
    reactive,
    ref,
    computed,
    watch,
    onMounted,
} from "@vue/composition-api";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import Cleave from "vue-cleave-component";
import * as helper from "@/libs/helpers";
import store from "@/store";
import { $themeConfig } from "@themeConfig";

import { useUtils as useI18nUtils } from "@core/libs/i18n";
import useAppConfig from "@core/app-config/useAppConfig";

import SettingProvider from "@/providers/Settings";
const SettingResource = new SettingProvider();

export default {
    components: {
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
        Cleave,
        vSelect,
        BMedia,
        BAvatar,
        BMediaAside,
        BMediaBody,
        BLink,
        BImg,
    },
    directives: {
        Ripple,
    },
    setup() {
        const { skin, systemName } = useAppConfig();
        const { t } = useI18nUtils();
        const loading = ref(false);
        const settings = ref([]);
        const currencies = ref([]);
        const config = ref({});
        
        const translateMessages = {
            error: t("error"),
            success: t("success"),
            setting_required: t('setting_empty'),
        };

        onMounted(() => {
            config.value = store.getters["auth/getSettings"];
            localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
        });

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

            try {
                loading.value = true;
                const { data } = await SettingResource.update(changedData);
                loading.value = false;
                if (data.success) {
                    localStorage.removeItem("oldSettings");
                    helper.success(data.message);
                    store.commit("auth/SET_SETTING", data.data);
                    localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
                }
            } catch (e) {
                loading.value = false;
                helper.handleResponseErrors(e);
            }
        };

        return {
            loading,
            settings,
            config,

            //
            updateSettings,

            //i18n
            t,
        };
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>

<style lang="scss" scoped>
@import "~@resources/scss/base/bootstrap-extended/include";

.assignee-selector {
    ::v-deep .vs__dropdown-toggle {
        padding-left: 0;
    }
}
</style>
