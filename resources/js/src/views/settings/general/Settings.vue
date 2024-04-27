<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <b-tabs vertical content-class="col-12 col-md-9 mt-1 mt-md-0" pills nav-wrapper-class="col-md-3 col-12" nav-class="nav-left">
            
            <!-- general tab -->
            <b-tab active>
                <template #title>
                    <feather-icon icon="SettingsIcon" size="18" class="mr-50"/>
                    <span class="font-weight-bold">{{$t("app_setting_global")}}</span>
                </template>

                <setting-global/>
            </b-tab>

            <b-tab>
                <template #title>
                    <feather-icon icon="WatchIcon" size="18" class="mr-50"/>
                    <span class="font-weight-bold">{{$t("app_setting_localisation")}}</span>
                </template>
                <setting-localization />
            </b-tab>

            <b-tab>
                <template #title>
                    <feather-icon icon="DollarSignIcon" size="18" class="mr-50"/>
                    <span class="font-weight-bold">{{$t("app_setting_payment")}}</span>
                </template>
                <setting-payment v-if="isTenant" />
                <setting-payment-central v-else />

            </b-tab>

            <b-tab>
                <template #title>
                    <feather-icon icon="MailIcon" size="18" class="mr-50"/>
                    <span class="font-weight-bold">{{$t("app_setting_mail")}}</span>
                </template>
                <setting-mail />
            </b-tab>

            <b-tab v-if="isTenant">
                <template #title>
                    <feather-icon icon="ClipboardIcon" size="18" class="mr-50"/>
                    <span class="font-weight-bold">{{$t("app_setting_budget")}}</span>
                </template>
                <setting-budget />
            </b-tab>

            <b-tab v-if="isTenant">
                <template #title>
                    <feather-icon icon="BellIcon" size="18" class="mr-50"/>
                    <span class="font-weight-bold">{{$t("app_setting_appointment")}}</span>
                </template>
                <setting-appointment />
            </b-tab>

            <b-tab v-if="isTenant">
                <template #title>
                    <feather-icon icon="CalendarIcon" size="18" class="mr-50"/>
                    <span class="font-weight-bold">{{$t("app_setting_diary")}}</span>
                </template>
                <setting-diary />
            </b-tab>
        </b-tabs>
    </b-overlay>
</template>

<script>
import _ from 'lodash'
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
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import Cleave from "vue-cleave-component";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import store from "@/store";
import { $themeConfig } from '@themeConfig'
import SettingGlobal from "./SettingGlobal.vue"
import SettingLocalization from "./SettingLocalization.vue"
import SettingPayment from "./SettingPayment.vue"
import SettingPaymentCentral from "./SettingPaymentCentral.vue"
import SettingMail from "./SettingMail.vue"
import SettingBudget from "./SettingBudget.vue"
import SettingAppointment from "./SettingAppointment.vue"
import SettingDiary from './SettingDiary.vue';

import SettingProvider from "@/providers/Settings";
import SettingPaymentVue from './SettingPayment.vue';

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
        ToastificationContent,
        BMedia,
        BAvatar,
        BMediaAside,
        BMediaBody,
        BLink,
        BImg,

        //
        SettingGlobal,
        SettingLocalization,
        SettingPayment,
        SettingPaymentCentral,
        SettingMail,
        SettingBudget,
        SettingAppointment,
        SettingDiary,
    },
    directives: {
        Ripple,
    },
    data () {
        return {
            loading: false,           
        }
    },
    computed: {   
        isTenant() {
            return this.checkIsTenant()
        }    
    },
    async mounted () {
       
    },
    methods: {       
    }
    
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>

<style lang="scss" scoped>
@import '~@resources/scss/base/bootstrap-extended/include';
.assignee-selector {
  ::v-deep .vs__dropdown-toggle {
    padding-left: 0;
  }
}
</style>
