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
                        {{ $t("app_setting_diary_title") }}
                    </h5>
                    <small class="text-muted">
                        {{ $t("app_setting_diary_subtitle") }}
                    </small>
                </b-col>

                <!-- start time -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_diary_start_time')" :description="$t('app_setting_diary_start_time_help')" label-for="schedule_start_time">
                        <cleave
                            id="schedule_start_time"
                            v-model="config.schedule_start_time"
                            class="form-control"
                            :raw="false"
                            :options="{
                                time: true,
                                timePattern: ['h', 'm', 's'],
                            }"
                            placeholder="hh:mm:ss"
                        />
                    </b-form-group>
                </b-col>

                <!-- end time  -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_diary_end_time')" :description="$t('app_setting_diary_end_time_help')" label-for="schedule_end_time">
                        <cleave
                            id="schedule_end_time"
                            v-model="config.schedule_end_time"
                            class="form-control"
                            :raw="false"
                            :options="{
                                time: true,
                                timePattern: ['h', 'm', 's'],
                            }"
                            placeholder="hh:mm:ss"
                        />
                    </b-form-group>
                </b-col>

                <!-- interval  -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_diary_interval')" :description="$t('app_setting_diary_interval_help')" label-for="scheduled_appointment_interval">
                        <b-form-input
                            v-model="config.scheduled_appointment_interval"
                            id="scheduled_appointment_interval"
                            placeholder="15"
                            type="number"
                        />
                    </b-form-group>
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
