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
                        {{ $t("app_setting_mail_global") }}
                    </h5>
                    <small class="text-muted">
                        {{$t("app_setting_mail_global_help")}}
                    </small>
                </b-col>

                <b-col md="12">
                    <b-form-group :label="$t('app_setting_mail_enable_notification')" label-for="enable_email_notification">
                        <b-form-checkbox
                            id="enable_email_notification"
                            v-model="config.enable_email_notification"
                            name="enable_email_notification">
                            {{$t("app_setting_mail_enable_notification")}}
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>                

                <!-- Host -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_mail_host')" label-for="app_setting_mail_host">
                        <b-form-input
                            v-model="config.mail_host"
                            id="app_setting_mail_host"
                            :placeholder="$t('app_setting_mail_host_placeholder')"/>
                    </b-form-group>
                </b-col>

                <!-- Port -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_mail_port')" label-for="app_setting_mail_port">
                        <b-form-input
                            v-model="config.mail_port"
                            id="app_setting_mail_port"
                            :placeholder="$t('app_setting_mail_port_placeholder')"/>
                    </b-form-group>
                </b-col>

                <!-- Encryptation -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_mail_encryption')" label-for="app_setting_mail_encryption">
                        <v-select
                            v-model="config.mail_encryption"
                            id="app_setting_mail_encryption"
                            :options="['tls', 'ssl']"
                            :clearable="false"
                        />
                    </b-form-group>
                </b-col>

                <!-- Username -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_mail_username')" label-for="app_setting_mail_username">
                        <b-form-input
                            v-model="config.mail_username"
                            id="app_setting_mail_username"
                            :placeholder="$t('app_setting_mail_username_placeholder')"/>
                    </b-form-group>
                </b-col>

                <!-- password -->
                <b-col md="6">
                    <b-form-group
                        :label="$t('app_setting_mail_password')" :description="$t('app_setting_mail_password_description')" label-for="app_setting_mail_password">
                        <b-input-group class="input-group-merge">
                            <b-form-input
                                id="app_setting_mail_password"
                                v-model="config.mail_password"
                                name="mail_password"
                                :type="passwordFieldType"
                                :placeholder="$t('app_setting_mail_password_placeholder')"
                            />
                            <b-input-group-append is-text>
                                <feather-icon
                                    :icon="passwordToggleIcon"
                                    class="cursor-pointer"
                                    @click="togglePassword"
                                />
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>

                <!-- From -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_mail_from_address')" label-for="app_setting_mail_from_address">
                        <b-form-input
                            v-model="config.mail_from_address"
                            id="app_setting_mail_from_address"
                            :placeholder="$t('app_setting_mail_from_address_placeholder')"/>
                    </b-form-group>
                </b-col>

                <!-- From Name -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_mail_from_name')" label-for="app_setting_mail_from_name">
                        <b-form-input
                            v-model="config.mail_from_name"
                            id="app_setting_mail_from_name"
                            :placeholder="$t('app_setting_mail_from_name_placeholder')"/>
                    </b-form-group>
                </b-col>

            </b-row>
            <hr>
            <b-row v-if="!isTenant">
                <b-col cols="12" class="mb-2">
                    <h5 class="mb-0">
                        {{ $t("app_setting_mailjet_title") }}
                    </h5>
                    <small class="text-muted">
                        {{$t("app_setting_mailjet_title_help")}}
                    </small>
                </b-col>

                <b-col md="6">
                    <b-form-group :label="$t('app_setting_register_tenant_mailjet_template_id')" label-for="app_setting_register_tenant_mailjet_template_id"
                    :description="$t('app_setting_register_tenant_mailjet_template_id_help')">
                        <b-form-input
                            v-model="config.register_tenant_mailjet_template_id"
                            id="app_setting_register_tenant_mailjet_template_id"
                            :placeholder="$t('app_setting_register_tenant_mailjet_template_id_placeholder')"/>
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group :label="$t('app_setting_trials_end_tenant_mailjet_template_id')" label-for="app_setting_trials_end_tenant_mailjet_template_id"
                    :description="$t('app_setting_trials_end_tenant_mailjet_template_id_help')">
                        <b-form-input
                            v-model="config.trials_end_tenant_mailjet_template_id"
                            id="app_setting_trials_end_tenant_mailjet_template_id"
                            :placeholder="$t('app_setting_trials_end_tenant_mailjet_template_id_placeholder')"/>
                    </b-form-group>
                </b-col>

                <b-col md="6">
                    <b-form-group :label="$t('app_setting_invoice_reminder_tenant_mailjet_template_id')" label-for="app_setting_invoice_reminder_tenant_mailjet_template_id"
                    :description="$t('app_setting_invoice_reminder_tenant_mailjet_template_id_help')">
                        <b-form-input
                            v-model="config.invoice_reminder_tenant_mailjet_template_id"
                            id="app_setting_invoice_reminder_tenant_mailjet_template_id"
                            :placeholder="$t('app_setting_invoice_reminder_tenant_mailjet_template_id_placeholder')"/>
                    </b-form-group>
                </b-col>
            </b-row>

            <hr>
            <b-row v-if="isTenant">
                <b-col cols="12" class="mb-2">
                    <h5 class="mb-0">
                        {{ $t("app_setting_email_template") }}
                    </h5>
                    <small class="text-muted">
                        {{$t("app_setting_email_template_subtitle")}}
                    </small>
                </b-col>

                <!-- Background-color -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_email_background_color')" label-for="app_setting_email_background_color"
                    :description="$t('app_setting_email_background_color_help')">
                        <b-form-input
                            v-model="config.background_email_template"
                            id="app_setting_email_background_color"
                            type="color"
                            :placeholder="$t('app_setting_email_background_color_placeholder')"/>
                    </b-form-group>
                </b-col>

                <!-- Enable footers template -->
                <b-col md="12">
                    <b-form-group :label="$t('app_setting_email_footer_enable')" label-for="app_setting_enable_footer_template_email">
                        <b-form-checkbox
                            id="app_setting_enable_footer_template_email"
                            v-model="config.enable_mail_socials"
                            name="app_setting_enable_footer_template_email"
                        >
                        {{$t('app_setting_email_footer_enable_help')}}
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>

                <!-- Facebook -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_email_url_facebook')" label-for="app_setting_email_url_facebook"
                    :description="$t('app_setting_email_url_facebook_help')">
                        <b-form-input
                            v-model="config.socials_facebook"
                            id="app_setting_email_url_facebook"
                            :placeholder="$t('app_setting_email_url_facebook_placeholder')"/>
                    </b-form-group>
                </b-col>

                <!-- Twitter -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_email_url_twitter')" label-for="app_setting_email_url_twitter"
                    :description="$t('app_setting_email_url_twitter_help')">
                        <b-form-input
                            v-model="config.socials_twitter"
                            id="app_setting_email_url_twitter"
                            :placeholder="$t('app_setting_email_url_twitter_placeholder')"/>
                    </b-form-group>
                </b-col>

                <!-- Instagram -->
                <b-col md="6">
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
    computed: {
        isTenant() {
            return this.checkIsTenant()
        } 
    },
    setup(props) {
        const { skin, systemName } = useAppConfig();
        const { t } = useI18nUtils();
        const loading = ref(false);
        const settings = ref([]);      
        const config = ref({});
        const passwordFieldType = ref("password")
        
        const translateMessages = {
            error: t("error"),
            success: t("success"),
            setting_required: t('setting_empty'),
        };

        const passwordToggleIcon = computed( () => {
            return passwordFieldType.value === "password" ? "EyeIcon" : "EyeOffIcon";
        })

        const togglePassword = () => {
            passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
        }

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
            passwordFieldType,
            config,
            passwordToggleIcon,

            //
            updateSettings,
            togglePassword,

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
