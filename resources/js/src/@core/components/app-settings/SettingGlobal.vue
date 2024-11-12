<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <b-card>

            <b-row>
                <b-col cols="12" class="mb-2">
                    <h5 class="mb-0">{{ $t("app_setting_global") }}</h5>
                    <small class="text-muted">{{ $t("app_setting_globals") }}</small>
                </b-col>

                <!-- App name -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_app_name')" label-for="app_setting_app_name"
                        :description="$t('app_setting_app_name_help')">
                        <b-form-input autocomplete="off" v-model="config.app_name" id="app_setting_app_name" :placeholder="$t('app_setting_app_name_placeholder')" />
                    </b-form-group>
                </b-col>

                <!-- Show Description -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_app_short_description')" label-for="app_short_description"
                        :description="$t('app_setting_app_short_description_help')">
                        <b-form-input autocomplete="off" v-model="config.app_short_description" id="app_short_description" 
                        :placeholder="$t('app_setting_app_short_description_placeholder')" />
                    </b-form-group>
                </b-col>

                <!-- Theme skin -->
                <b-col v-if="showTheme" md="6">
                    <b-form-group :label="$t('app_setting_theme_contrast')" label-for="app_setting_theme_contrast"
                        :description="$t('app_setting_theme_contrast_help')">
                        <v-select id="app_setting_theme_contrast" v-model="config.app_theme" :options="themes"
                            label="text" :clearable="false" :searchable="false" :reduce="(option) => option.value"
                            :placeholder="$t('app_setting_theme_contrast_placeholder')" />
                    </b-form-group>
                </b-col>

                <!-- Country -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_country')" label-for="app_setting_country_iso">
                        <v-select id="app_setting_country_iso" :options="countries" label="name"
                            :reduce="(country) => country.iso" v-model="config.app_country_iso" :clearable="false" />
                    </b-form-group>
                </b-col>

                <b-col v-if="showLogo" md="12">
                    <b-media class="mb-2">
                        <template #aside>
                            <b-avatar ref="previewEl" :src="logo_default" size="100px" rounded />
                        </template>
                        <div class="d-flex flex-wrap">
                            <b-button @click="$refs.refInputEl.click()" v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                variant="flat-primary">
                                <input ref="refInputEl" type="file" class="d-none" @input="imgRenderer" />
                                {{ $t("app_logo") }}
                            </b-button>
                        </div>
                        <small>{{ $t("image_format_limit") }}</small>
                    </b-media>
                </b-col>
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
import { ValidationProvider, ValidationObserver } from 'vee-validate'
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

        //
        ValidationProvider,
        ValidationObserver,
    },
    directives: {
        Ripple,
    },
    props: {
        showLogo: {
            type: Boolean,
            require: true,
            default: () => true,
        },
        showSave: {
            type: Boolean,
            require: true,
            default: () => true,
        },
        showTheme: {
            type: Boolean,
            require: true,
            default: () => true,
        }
    },
    setup(props) {
        const { skin, systemName } = useAppConfig();
        const { t } = useI18nUtils();
        const loading = ref(false);
        const settings = ref([]);
        const countries = ref([]);

        const themes = [
            { value: "light", text: "light" },
            { value: "dark", text: "dark" },
            { value: "bordered", text: "bordered" },
            { value: "semi-dark", text: "semi-dark" },
        ];

        const config = ref({});
        const oldTheme = ref(null);
        const logo_default = ref(null);
        const limitSize = 5242880;

        const translateMessages = {
            error: t("error"),
            success: t("success"),
            setting_required: t('setting_empty'),
        };

        onMounted(() => {
            config.value = store.getters["auth/getSettings"];
            logo_default.value = config.value.app_logo
            localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
            countries.value = store.getters["auth/getCountries"];
        });

        const updateSettings = async () => {
            const oldSettings = JSON.parse(localStorage.getItem("oldSettings"));
            const changedData = {};
            for (const key in config.value) {
                if (config.value[key] !== oldSettings[key]) {
                    changedData[key] = config.value[key];
                }
            }

            if (config.value.change_logo) {
                changedData["change_logo"] = config.value.change_logo;
                changedData["logo"] = config.value.logo;
            }

            if (Object.keys(changedData).length === 0) {
                helper.danger(translateMessages.setting_required);
                return false;
            }

            console.log(changedData)

            try {
                loading.value = true;
                const { data } = await SettingResource.update(changedData);
                loading.value = false;
                if (data.success) {
                    localStorage.removeItem("oldSettings");
                    helper.success(data.message);
                    store.commit("auth/SET_SETTING", data.data);
                    store.commit("auth/SET_LOGO", store.state.auth.setting.app_logo);
                    store.commit("auth/SET_APP_NAME", store.state.auth.setting.app_name);

                    const newSetting = store.getters["auth/getSettings"];
                    $themeConfig.app.appName = newSetting.app_name;
                    localStorage.removeItem("vuexy-skin");
                    localStorage.setItem("vuexy-skin", newSetting.app_theme);
                    $themeConfig.app.theme = newSetting.app_theme;
                    $themeConfig.layout.skin = newSetting.app_theme;
                    skin.value = newSetting.app_theme;
                    systemName.value = newSetting.app_name;
                    localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
                }
            } catch (e) {
                loading.value = false;
                helper.handleResponseErrors(e);
            }
        };

        const imgRenderer = (evt) => {
            const file = evt.target.files[0];

            //file size valid
            if (file.size > limitSize) {
                danger(
                    this.$t("image_format_limit_help"),
                    "Error",
                    "AlertCircleIcon"
                );
                return;
            }

            /// Lee el archivo local y lo genera en codificación gbk
            const reader = new FileReader();
            reader.onload = (data) => {
                // Después de una lectura exitosa
                let res = data.target || data.srcElement;

                // Resultados de salida después de leer
                config.value.change_logo = true;
                config.value.logo = res.result;
                logo_default.value = res.result;
            };
            reader.readAsDataURL(file);
        };

        return {
            loading,
            settings,
            themes,
            countries,
            config,
            oldTheme,
            logo_default,

            //
            updateSettings,
            imgRenderer,

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
