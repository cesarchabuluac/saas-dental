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
               <b-col cols="12" class="mb-2">
                    <h5 class="mb-0">
                        {{ $t("app_setting_budget_title") }}
                    </h5>
                    <small class="text-muted">
                        {{$t("app_setting_budget_subtitle")}}
                    </small>
                </b-col>

                <!-- Nomenclature -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_budget_nomenclature')" label-for="app_setting_budget_nomenclature"
                    :description="$t('app_setting_budget_nomenclature_help')">
                                <v-select
                                v-model="config.app_budget_default_nomenclature"
                                id="app_setting_budget_nomenclature"
                                :options="nomenclatures"
                                :reduce="option => option.value"
                                label="text"
                                :placeholder="$t('app_setting_budget_nomenclature_placeholder')"
                                :clearable="false"
                            />
                    </b-form-group>
                </b-col>

                <!-- Expired -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_budget_expired_in_days')" label-for="app_setting_budget_expiration"
                    :description="$t('app_setting_budget_expired_in_days_help')">
                        <b-form-input
                            v-model="config.budget_expiration"
                            id="app_setting_budget_expiration"
                            :placeholder="$t('app_setting_budget_expired_in_days_placeholder')"/>
                    </b-form-group>
                </b-col>

                <!-- Greats -->
                <b-col md="12">
                    <b-form-group :label="$t('app_setting_budget_congratulations')" label-for="app_setting_budget_great"
                    :description="$t('app_setting_budget_congratulations_help')">
                        <b-form-input
                            v-model="config.budget_great"
                            id="app_setting_budget_great"
                            :placeholder="$t('app_setting_budget_congratulations_palceholder')"/>
                    </b-form-group>
                </b-col>

                <!-- Support Phone -->
                <b-col md="12">
                    <b-form-group :label="$t('app_setting_support_phone')" label-for="app_setting_support_phone"
                    :description="$t('app_setting_support_phone_help')">
                        <b-form-input
                            v-model="config.support_phone"
                            id="app_setting_support_phone"
                            :placeholder="$t('app_setting_support_phone_palceholder')"/>
                    </b-form-group>
                </b-col>

                <!-- Instragrm on budget pdf -->
                <b-col md="12">
                    <b-form-group :label="$t('app_enable_instagram_on_budget')" label-for="app_enable_instagram_on_budget">
                        <b-form-checkbox
                            id="app_enable_instagram_on_budget"
                            v-model="config.enable_instram_on_budget"
                            name="app_enable_instagram_on_budget"
                        >
                        {{$t('app_enable_instagram_on_budget_help')}}
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>

                <!-- Instagram -->
                <b-col v-if="config.enable_instram_on_budget" md="12">
                    <b-form-group :label="$t('app_setting_email_url_instagram')" label-for="app_setting_email_url_instagram"
                    :description="$t('app_setting_email_url_instagram_help')">
                        <b-form-input
                            v-model="config.socials_instagram"
                            id="app_setting_email_url_instagram"
                            :placeholder="$t('app_setting_email_url_instagram_placeholder')"/>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row v-if="showSave">
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
    props: {
        showSave: {
            type: Boolean,
            require: true,
            default: () => true,
        },
    },
    setup(props) {
        const { skin, systemName } = useAppConfig();
        const { t } = useI18nUtils();
        const loading = ref(false);
        const settings = ref([]);
        const nomenclatures = [
            { value: 'fdi',  text: 'FDI' },
            { value: 'ada',  text: 'ADA' },
            { value: 'adam', text: 'ADAm'}
        ];        
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
            nomenclatures,

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
