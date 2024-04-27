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

                <b-col v-if="showHeaderCurrency" cols="12" class="mb-2">
                    <h5 class="mb-0">{{ $t("app_setting_currency") }}</h5>
                    <small class="text-muted">{{ $t("app_setting_currencies") }}</small>
                </b-col>

               <!-- Enable tax -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_enable_tax')" label-for="app_setting_enable_tax">
                        <b-form-checkbox
                            disabled
                            id="app_setting_enable_tax"
                            v-model="config.enable_tax"
                            name="app_setting_enable_tax">
                            {{$t("app_setting_enable_tax_help")}}
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>

                <!-- Numeral Formatting -->
                <b-col md="6">
                    <b-form-group :label="$t('app_setting_default_tax')" label-for="number">
                        <cleave
                            disabled
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
                    <b-form-group :label="$t('app_setting_default_currency')" label-for="app_setting_default_currency">
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
                    <b-form-group :label="$t('app_setting_currency_right')" label-for="app_setting_currency_right_help">
                        <b-form-checkbox
                            id="app_setting_currency_right"
                            v-model="config.enable_currency_right"
                            name="app_setting_currency_right">
                            {{$t("app_setting_currency_right_help")}}
                        </b-form-checkbox>
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
        showHeaderCurrency: {
            type: Boolean,
            require: true,
            default: () => false,
        }
    },
    setup(props) {
        const { skin, systemName } = useAppConfig();
        const { t } = useI18nUtils();
        const loading = ref(false);
        const settings = ref([]);
        const currencies = ref([]);
       
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
       
        const config = ref({});
        

        const translateMessages = {
            error: t("error"),
            success: t("success"),
            setting_required: t('setting_empty'),
        };

        onMounted(() => {
            config.value = store.getters["auth/getSettings"];   
            config.value.default_currency_id = config.value.default_currency_id*1        
            localStorage.setItem("oldSettings", JSON.stringify(store.getters["auth/getSettings"]));
            currencies.value = store.getters["auth/getCurrencies"].map(item => ({value: item.id, label: item.label}));
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
            currencies,
            config,
            masks,

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
