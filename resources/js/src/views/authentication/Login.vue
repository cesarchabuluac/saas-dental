<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <!-- <vuexy-logo /> -->
        <h2 class="brand-text text-primary ml-1">
          {{ appName }}
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img fluid :src="logo" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1">
             {{$t('welcome_to')}} {{ appName }}! 👋
          </b-card-title>
          <b-card-text class="mb-2">
             {{$t('login_title')}}
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form class="auth-login-form mt-2" @submit.prevent>
              <!-- email -->
              <b-form-group :label="$t('email')" label-for="login-email">
                <validation-provider #default="{ errors }" :name="$t('email')" rules="required|email">
                  <b-form-input id="login-email" v-model="userEmail" :state="errors.length > 0 ? false : null"
                    name="login-email" placeholder="john@example.com" />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <!-- <div class="d-flex justify-content-between">
                  <label for="login-password">{{$t('password')}}</label>
                  <b-link :to="{ name: 'auth-forgot-password-v2' }">
                    <small>{{$t('forgot_password')}}</small>
                  </b-link>
                </div> -->
                <validation-provider #default="{ errors }" :name="$t('password')" rules="required">
                  <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid' : null">
                    <b-form-input id="login-password" v-model="password" :state="errors.length > 0 ? false : null"
                      class="form-control-merge" :type="passwordFieldType" name="login-password"
                      placeholder="············" />
                    <b-input-group-append is-text>
                      <feather-icon class="cursor-pointer" :icon="passwordToggleIcon" @click="togglePasswordVisibility" />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- checkbox -->
              <b-form-group>
                <b-form-checkbox id="remember-me" v-model="status" name="checkbox-1">
                  {{$t('remember_me')}}
                </b-form-checkbox>
              </b-form-group>

              <!-- submit buttons -->
              <b-button :disabled="loading" type="submit" variant="primary" block @click="validationForm">
                <b-spinner v-if="loading" small type="grow" />
                 {{$t('login')}}
              </b-button>
            </b-form>
          </validation-observer>         
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton,
  BOverlay, BSpinner,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store'
import router from "@/router";
import { checkIsCentral } from '@/libs/domains';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import useAppConfig from '@core/app-config/useAppConfig'
import { computed, watch } from '@vue/composition-api'

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    VuexyLogo,
    BOverlay,
    BSpinner,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      loading: false,
      status: '',
      password: '',
      userEmail: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    }
  },
  computed: {
    setting() {
      return window._setting
    },
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
    isCentral() {
      return checkIsCentral()
    },
    logo () {
      return store.state.auth.logo || window._setting.app_logo
    },
    appName () {
      return store.state.auth.app_name || window._setting.app_name
    },    
  },
  mounted() {

  },
  methods: {

    validationForm() {
      this.$refs.loginValidation.validate().then(success => {
        if (success) {

          const payload = {
            email: this.userEmail,
            password: this.password,
          };

          this.loading = true;
          store.dispatch("auth/GET_AUTH_TOKEN", payload).then(() => {
            const user = store.getters['auth/getUser']

            console.error(user)

            console.log(store.state.auth.theme)

            store.commit('appConfig/UPDATE_SKIN', store.state.auth.theme)

            this.success(`${this.$t('welcome')} ${user.name}`);
            if(user.roles[0].id === 4) {
            	router.push({ name: "appointments" });
            } else {
            	router.push({ name: "home" });
            }
          })
            .catch((e) => {
              console.log(JSON.stringify(e))
              console.log(e)
              this.loading = false;
              this.handleResponseErrors(e);
            });
        }
      })
    },
  },
  setup() {
    const { skin } = useAppConfig()

    // const skinTheme = computed(() => {
    //   return store.state.auth.theme || 'light'
    // })

    // watch(skinTheme, (value) => {
    //   console.warn(value)
    // })
    
  }
}
</script>

<style lang="scss">
@import '@resources/scss/vue/pages/page-auth.scss';
</style>
