<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <b-card>
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
                        <b-form-input v-model="config.date_format" id="app_setting_date_format"
                            :placeholder="$t('app_setting_date_format_placeholder')" />
                    </b-form-group>
                </b-col>

                <!-- Timezone -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_timezone')" label-for="app_setting_date_format">
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
                    </b-form-group>
                </b-col>

                <!-- Language -->
                <!-- <b-col md="6">
                    <b-form-group :label="$t('app_setting_language')" label-for="app_setting_language">
                        <v-select
                            v-model="config.language"
                            id="app_setting_language"
                            :options="languages"
                            :reduce="option => option.value"
                            label="label"
                            :clearable="false"
                        />
                    </b-form-group>
                </b-col> -->
            </b-row>

            <b-row v-if="showSave">
                <b-col cols="12">
                    <b-button :disabled="loading" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"
                        class="mt-2 mr-1" @click="updateSettings">
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
        const config = ref({});
        const timezones = ref([])
        const languages = ref([])

        const translateMessages = {
            error: t("error"),
            success: t("success"),
            setting_required: t('setting_empty'),
        };

        onMounted(() => {
            config.value = store.getters["auth/getSettings"];
            localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
            _.map(store.getters["auth/getTimezones"], (tz) => {
                _.map(tz, (item) => {
                    timezones.value.push(item);
                });
            });

            languages.value = _.map(store.getters['auth/getLanguages'], (lang, index) => ({
                value: index,
                label: lang,
            }));
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
            timezones,
            languages,
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
