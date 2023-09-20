<template>
    <div>
        <div class="p-4">
            <h4 class="mb-2">
                {{ $t('setup.welcome').replace(':system', appName) }}
            </h4>
            <b-alert variant="primary" show>
                <div class="alert-body">
                    <p>
                        <strong>{{ $t('info') }}: </strong>
                        <span>{{ $t('setup.title') }} </span>
                        <span>{{ $t('setup.description') }}</span>
                    </p>
                </div>
            </b-alert>

            <b-row>
                <b-col cols="12">
                    <form-wizard color="#7367F0" :title="null" :subtitle="null" shape="square" finish-button-text="Submit"
                        back-button-text="Previous" class="mb-3">

                        <!-- accoint details tab -->
                        <tab-content :title="$t('setup.accounts.title')" :before-change="validationForm">
                            <validation-observer ref="accountRules" tag="form">
                                <b-row>
                                    <b-col cols="12" class="mb-2">
                                        <h5 class="mb-0">
                                            {{ $t('setup.accounts.title') }}
                                        </h5>
                                        <small class="text-muted">
                                            {{ $t('setup.accounts.description') }}
                                        </small>
                                    </b-col>
                                </b-row>

                                <b-row class="match-height">
                                    <b-col lg="6">
                                        
                                    </b-col>
                                </b-row>
                            </validation-observer>
                        </tab-content>

                    </form-wizard>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
  
<script>
import {
    BAlert, BLink, BRow, BCol, BFormInvalidFeedback, BFormGroup,
    BFormInput,
} from 'bootstrap-vue'
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { required, email } from '@validations'
import { computed } from '@vue/composition-api'
import store from '@/store'


export default {
    name: "InitialSetup",
    components: {
        BAlert,
        BLink,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,

        ValidationProvider,
        ValidationObserver,
        FormWizard,
        TabContent,
        BFormInvalidFeedback,
        ToastificationContent,
    },
    data() {
        return {

        }
    },
    methods: {
        validationForm() {
            return new Promise((resolve, reject) => {
                this.$refs.accountRules.validate().then(success => {
                    if (success) {
                        resolve(true)
                    } else {
                        reject()
                    }
                })
            })
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

        return {
            appName,
        }
    }
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/pages/dashboard-ecommerce.scss";
@import '~@resources/scss/vue/libs/vue-wizard.scss';
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>
  