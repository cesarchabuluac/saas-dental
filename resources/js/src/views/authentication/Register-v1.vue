<template>
    <div class="auth-wrapper auth-v1 px-2">
        <div class="auth-inner py-2">
            <!-- Register v1 -->
            <b-card class="mb-0">
                <b-link class="brand-logo">
                    <!-- <vuexy-logo /> -->
                    <h2 class="brand-text text-primary ml-1">Soft-Dental</h2>
                </b-link>

                <b-card-title class="mb-1">
                    {{ $t('form_register.title') }} 🚀
                </b-card-title>
                <b-card-text class="mb-2">
                    {{ $t('form_register.description_2').replace(':number_days', this.setting.trial_day_count) }}
                </b-card-text>

                <!-- form -->
                <validation-observer ref="registerForm">
                    <b-form
                        class="auth-register-form mt-2"
                        @submit.prevent="register"
                    >
                        <!-- username -->
                        <b-form-group :label="$t('name')" label-for="username">
                            <validation-provider #default="{ errors }" :name="$t('name')" rules="required">
                                <b-form-input
                                    id="username"
                                    v-model="username"
                                    :state="errors.length > 0 ? false : null"
                                    name="register-username"
                                    placeholder="johndoe"
                                />
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- email -->
                        <b-form-group :label="$t('email')" label-for="email">
                            <validation-provider #default="{ errors }" :name="$t('email')" rules="required|email">
                                <b-form-input
                                    id="email"
                                    v-model="usermail"
                                    :state="errors.length > 0 ? false : null"
                                    name="register-email"
                                    placeholder="john@example.com"
                                />
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <b-form-group :label="$t('domain')" label-for="domain">
                            <validation-provider #default="{ errors }" :name="$t('domain')" rules="required">
                                <b-input-group :append="hostname">
                                    <b-form-input 
                                        id="domain"
                                        v-model="domain" 
                                        name="register-doamin"
                                        :placeholder="$t('domain')"  
                                        :state="errors.length > 0 ? false : null"/>
                                </b-input-group>
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <b-form-group :label="$t('clinic')" label-for="clinic">
                            <validation-provider #default="{ errors }" :name="$t('clinic')" rules="required">
                                <b-form-input
                                    id="clinic"
                                    v-model="company"
                                    :state="errors.length > 0 ? false : null"
                                    name="register-clinic"
                                    :placeholder="$t('clinic_placeholder')"
                                />
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- password -->
                        <b-form-group :label="$t('password')" label-for="password">
                            <validation-provider #default="{ errors }" :name="$t('password')" rules="required">
                                <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid' : null">
                                    <b-form-input
                                        id="password"
                                        v-model="password"
                                        :type="passwordFieldType"
                                        :state="errors.length > 0 ? false : null"
                                        class="form-control-merge"
                                        name="register-password"
                                        placeholder="············"
                                    />
                                    <b-input-group-append is-text>
                                        <feather-icon
                                            :icon="passwordToggleIcon"
                                            class="cursor-pointer"
                                            @click="togglePasswordVisibility"
                                        />
                                    </b-input-group-append>
                                </b-input-group>
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- checkbox -->
                        <b-form-group>
                            <b-form-checkbox
                                id="register-privacy-policy"
                                v-model="terms_and_conditions"
                                name="checkbox-1">
                                {{$t('form_register.i_agree_to')}}
                                <b-link>{{$t('form_register.privacy_policy_terms')}}</b-link>
                            </b-form-checkbox>
                        </b-form-group>

                        <!-- submit button -->
                        <b-button :disabled="loading" variant="primary" block type="submit">
                            <b-spinner v-if="loading" small type="grow"/>
                            {{ $t('form_register.sign_up') }}
                        </b-button>
                    </b-form>
                </validation-observer>

                <b-card-text class="text-center mt-2">
                    <span>{{$t('already_have_account')}}</span>
                    <b-link :to="{ name: 'login' }">
                        <span>{{$t('sign_in_instead')}}</span>
                    </b-link>
                </b-card-text>
            </b-card>
            <!-- /Register v1 -->
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    BOverlay, BSpinner,
} from "bootstrap-vue";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import store from "@/store";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import SettingProvider from '@/providers/Settings'
import AuthProvider from '@/providers/Auth'
const AuthResource = new AuthProvider()
const SettingResource = new SettingProvider()

export default {
    components: {
        VuexyLogo,
        // BSV
        BCard,
        BLink,
        BCardTitle,
        BCardText,
        BForm,
        BButton,
        BFormInput,
        BFormGroup,
        BInputGroup,
        BInputGroupAppend,
        BFormCheckbox,
        BOverlay, BSpinner,

        // validations
        ValidationProvider,
        ValidationObserver,
    },
    mixins: [togglePasswordVisibility],
    data() {
        return {
            loading: false,
            company: null,
            usermail: "",
            username: "",
            password: "",
            domain: null,
            hostname: null,
            status: "",
            terms_and_conditions: false,

            // validation rules
            required,
            email,
            setting: {
                trial_day_count: 14,
            },
        };
    },
    created() {
        this.hostname = window.location.hostname
    },
    computed: {
        passwordToggleIcon() {
            return this.passwordFieldType === "password"
                ? "EyeIcon"
                : "EyeOffIcon";
        },
    },
    async mounted() {
        await this.getSettings()
    },
    methods: {
        async getSettings () {
            this.loading = true
            const query = {
                key: 'trial_day_count'
            }
            const { data } = await SettingResource.general()
            this.loading = false
            if(data.success) {
                _.map(data.data, (item, index) => {
                    this.setting[item.key] = item.value;
                });
            }
        },
        async register() {
            this.$refs.registerForm.validate().then((success) => {
                if (!success) {
                    return false;
                }
            });

            const request = {
                name: this.username,
                email: this.usermail,
                password: this.password,
                company: this.company,
                domain: this.domain,
                password_confirmation: this.password,
                terms_and_conditions: this.terms_and_conditions
            };

            try {
                this.loading = true
                const { data } = await AuthResource.tenantRegister(request)
                this.loading = false
                if (data.success) {
                    this.success(data.message);
                    this.$router.push({ name: "login" });
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e);
            }
        },
    },
};
</script>

<style lang="scss">
@import '@resources/scss/vue/pages/page-auth.scss';
</style>
