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
                        {{ $t("app_setting_appointment_title") }}
                    </h5>
                    <small class="text-muted">
                        {{$t("app_setting_appointment_subtitle")}}
                    </small>
                </b-col>                

                <b-col md="12">
                    <b-tabs>
                        <b-tab active :title="$t('appointment_notification')">
                            <b-row>

                                <!-- Enable appointment notification -->
                                <b-col md="12" class="mt-2">
                                    <b-form-group :label="$t('app_setting_enable_appointment_notification')" label-for="enable_appointment_notification">
                                        <b-form-checkbox
                                            id="enable_appointment_notification"
                                            v-model="config.enable_appointment_notification"
                                            name="enable_appointment_notification"
                                        >
                                        {{$t('app_setting_enable_appointment_notification_help')}}
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>

                                <b-col md="8">
                                    <!-- Description -->
                                    <b-form-group :label="$t('app_setting_appointment_header')" label-for="header-description"
                                    :description="$t('app_setting_appointment_header_help')">
                                        <quill-editor id="quil-content" v-model="config.app_email_appointment_header" :options="{
                                            modules: {
                                                toolbar: [
                                                    ['bold', 'italic', 'underline'], // negrita, cursiva, subrayado, tachado
                                                    //['blockquote', 'code-block'],
                                                    [{'header': [1, 2, 3, 4, 5, 6, false]}], // Varios niveles de encabezado
                                                    [{'color': []}], // color de fuente, color de fondo de fuente
                                                    [{'align': []}], // Alineación
                                                ],
                                            },
                                            placeholder: 'Escribe una descripción',}"
                                            class="border-bottom-0"/>

                                    </b-form-group>
                                </b-col>

                                <b-col md="12">
                                    <!-- Body -->
                                    <b-form-group :label="$t('app_setting_appointment_body')" label-for="body-description"
                                    :description="$t('app_setting_appointment_body_help')">
                                        <quill-editor id="quil-body-content" v-model="config.app_email_appointment_body" :options="{
                                            modules: {
                                                toolbar: [
                                                    ['bold', 'italic', 'underline'], // negrita, cursiva, subrayado, tachado
                                                    //['blockquote', 'code-block'],
                                                    [{'header': [1, 2, 3, 4, 5, 6, false]}], // Varios niveles de encabezado
                                                    [{'color': []}], // color de fuente, color de fondo de fuente
                                                    [{'align': []}], // Alineación
                                                ],
                                            },
                                            placeholder: 'Escribe una descripción',}"
                                            class="border-bottom-0"/>

                                    </b-form-group>
                                </b-col>

                                <b-col md="12">
                                    <!-- Footer -->
                                    <b-form-group :label="$t('app_setting_appointment_footer')" label-for="footer-description"
                                    :description="$t('app_setting_appointment_footer_help')">
                                        <quill-editor id="quil-footer-content" v-model="config.app_email_appointment_footer" :options="{
                                            modules: {
                                                toolbar: [
                                                    ['bold', 'italic', 'underline'], // negrita, cursiva, subrayado, tachado
                                                    //['blockquote', 'code-block'],
                                                    [{'header': [1, 2, 3, 4, 5, 6, false]}], // Varios niveles de encabezado
                                                    [{'color': []}], // color de fuente, color de fondo de fuente
                                                    [{'align': []}], // Alineación
                                                ],
                                            },
                                            placeholder: 'Escribe una descripción',}"
                                            class="border-bottom-0"/>

                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-tab>

                        <b-tab :title="$t('appointment_reminder')">
                            <b-row>

                                <!-- Enable appointment reminder -->
                                <b-col md="12" class="mt-2">
                                    <b-form-group :label="$t('app_setting_enable_appoitment_reminder')" label-for="enable_appoinment_reminder">
                                        <b-form-checkbox
                                            id="enable_appoinment_reminder"
                                            v-model="config.enable_appoinment_reminder"
                                            name="enable_appoinment_reminder"
                                        >
                                        {{$t('app_setting_enable_appoitment_reminder_help')}}
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>


                                <b-col md="8">
                                    <!-- Description -->
                                    <b-form-group :label="$t('app_setting_appointment_header')" label-for="reminder-header-description"
                                    :description="$t('app_setting_appointment_header_help')">
                                        <quill-editor id="quil-reminder-content" v-model="config.app_email_appointment_reminder_header" :options="{
                                            modules: {
                                                toolbar: [
                                                    ['bold', 'italic', 'underline'], // negrita, cursiva, subrayado, tachado
                                                    //['blockquote', 'code-block'],
                                                    [{'header': [1, 2, 3, 4, 5, 6, false]}], // Varios niveles de encabezado
                                                    [{'color': []}], // color de fuente, color de fondo de fuente
                                                    [{'align': []}], // Alineación
                                                ],
                                            },
                                            placeholder: 'Escribe una descripción',}"
                                            class="border-bottom-0"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="12">
                                    <!-- Body -->
                                    <b-form-group :label="$t('app_setting_appointment_body')" label-for="reminder-body-description"
                                    :description="$t('app_setting_appointment_body_help')">
                                        <quill-editor id="quil-reminder-body-content" v-model="config.app_email_appointment_reminder_body" :options="{
                                            modules: {
                                                toolbar: [
                                                    ['bold', 'italic', 'underline'], // negrita, cursiva, subrayado, tachado
                                                    //['blockquote', 'code-block'],
                                                    [{'header': [1, 2, 3, 4, 5, 6, false]}], // Varios niveles de encabezado
                                                    [{'color': []}], // color de fuente, color de fondo de fuente
                                                    [{'align': []}], // Alineación
                                                ],
                                            },
                                            placeholder: 'Escribe una descripción',}"
                                            class="border-bottom-0"/>

                                    </b-form-group>
                                </b-col>

                                <b-col md="12">
                                    <!-- Footer -->
                                    <b-form-group :label="$t('app_setting_appointment_footer')" label-for="reminder-footer-description"
                                    :description="$t('app_setting_appointment_footer_help')">
                                        <quill-editor id="quil-reminder-footer-content" v-model="config.app_email_appointment_reminder_footer" :options="{
                                            modules: {
                                                toolbar: [
                                                    ['bold', 'italic', 'underline'], // negrita, cursiva, subrayado, tachado
                                                    //['blockquote', 'code-block'],
                                                    [{'header': [1, 2, 3, 4, 5, 6, false]}], // Varios niveles de encabezado
                                                    [{'color': []}], // color de fuente, color de fondo de fuente
                                                    [{'align': []}], // Alineación
                                                ],
                                            },
                                            placeholder: 'Escribe una descripción',}"
                                            class="border-bottom-0"/>

                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12">
                                    <blockquote class="blockquote pl-1 border-left-primary border-left-3">
                                        <p class="mb-0">
                                            {{ $t('app_setting_appointment_reminder') }}
                                        </p>
                                    </blockquote>
                                    <b-form-group>
                                        <v-select
                                            v-model="config.app_appointment_reminder_every"
                                            id="app_setting_appointment_frecuencies"
                                            :options="frecuencies"
                                            :reduce="option => option.value"
                                            label="text"
                                            :clearable="false"
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
import { quillEditor } from 'vue-quill-editor'
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
        quillEditor,
    },
    directives: {
        Ripple,
    },
    setup() {
        const { t } = useI18nUtils();
        const loading = ref(false);
        const settings = ref([]);
            
        const frecuencies = [
            { value: 'then_minute', text: t('reminder_frecuency_ten_minute')},
            { value: 'fifteen_minute', text: t('reminder_frecuency_fifteen_minute')},
            { value: 'thirty_minute', text: t('reminder_frecuency_thirty_minute')},
            { value: 'hourly', text: t('reminder_frecuency_hourly')},
            { value: 'dayly', text: t('reminder_frecuency_daily')},
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
            frecuencies,

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
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/quill.scss';
</style>

<style lang="scss" scoped>
@import "~@resources/scss/base/bootstrap-extended/include";

.assignee-selector {
    ::v-deep .vs__dropdown-toggle {
        padding-left: 0;
    }
}

#quil-content
#quill-reminder-content
#quill-reminder-body-content
#quill-reminder-footer-content
#quill-body-content
#quil-footer-content ::v-deep {
  > .ql-container {
    border-bottom: 0;
  }
  +
  #quill-toolbar
  #quil-body-toolbar
  #quil-footer-toolbar
  #quill-reminder-toolbar
  #quil-reminder-body-toolbar
  #quil-reminder-footer-toolbar
  {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}
</style>
