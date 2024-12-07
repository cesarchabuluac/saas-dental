<template>
	<div class="auth-wrapper auth-v1 px-2">
		<div class="auth-inner py-2">

			<!-- Login v1 -->
			<b-card class="mb-0">
				<b-link class="brand-logo">
					<!-- <vuexy-logo /> -->
					<b-img :src="logo" height="150" :alt="appName" />

					<!-- <h2 class="brand-text text-primary ml-1">
						{{ appName }} -->
					</h2>
				</b-link>

				<b-card-title class="mb-1">
					{{ $t('welcome_to') }} {{ appName }}! 👋
				</b-card-title>
				<b-card-text class="mb-2">
					{{ $t('login_title') }}
				</b-card-text>

				<!-- form -->
				<validation-observer ref="loginValidation" #default="{ invalid }">
					<b-form class="auth-login-form mt-2" @submit.prevent="validationForm">

						<!-- email -->
						<b-form-group label-for="email" :label="$t('email')">
							<validation-provider #default="{ errors }" :name="$t('email')" rules="required|email">
								<b-form-input id="email" v-model="userEmail" name="login-email"
									:state="errors.length > 0 ? false : null" placeholder="john@example.com"
									autofocus />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>

						<!-- password -->
						<b-form-group>
							<div class="d-flex justify-content-between">
								<label for="password">{{ $t('password') }}</label>
								<!-- <b-link :to="{ name: 'auth-forgot-password-v1' }">
									<small>Forgot Password?</small>
								</b-link> -->
							</div>
							<validation-provider #default="{ errors }" :name="$t('password')" rules="required">
								<b-input-group class="input-group-merge"
									:class="errors.length > 0 ? 'is-invalid' : null">
									<b-form-input id="password" v-model="password" :type="passwordFieldType"
										class="form-control-merge" :state="errors.length > 0 ? false : null"
										name="login-password" placeholder="············" />

									<b-input-group-append is-text>
										<feather-icon class="cursor-pointer" :icon="passwordToggleIcon"
											@click="togglePasswordVisibility" />
									</b-input-group-append>
								</b-input-group>
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>

						<!-- checkbox -->
						<b-form-group>
							<b-form-checkbox id="remember-me" v-model="status" name="checkbox-1">
								{{ $t('remember_me') }}
							</b-form-checkbox>
						</b-form-group>

						<!-- submit button -->
						<b-button variant="primary" type="submit" block :disabled="invalid">
							{{ $t('login') }}
							<b-spinner v-if="loading" small type="grow" />
						</b-button>
					</b-form>
				</validation-observer>

				<!-- <b-card-text class="text-center mt-2">
					<span>New on our platform? </span>
					<b-link :to="{ name: 'auth-register-v1' }">
						<span>Create an account</span>
					</b-link>
				</b-card-text>

				<div class="divider my-2">
					<div class="divider-text">
						or
					</div>
				</div> -->

				<!-- social button -->
				<!-- <div class="auth-footer-btn d-flex justify-content-center">
					<b-button href="javascript:void(0)" variant="facebook">
						<feather-icon icon="FacebookIcon" />
					</b-button>
					<b-button href="javascript:void(0)" variant="twitter">
						<feather-icon icon="TwitterIcon" />
					</b-button>
					<b-button href="javascript:void(0)" variant="google">
						<feather-icon icon="MailIcon" />
					</b-button>
					<b-button href="javascript:void(0)" variant="github">
						<feather-icon icon="GithubIcon" />
					</b-button>
				</div> -->
			</b-card>
			<!-- /Login v1 -->
		</div>
	</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCard, BCardText, BCardTitle, BForm, BButton,
	BOverlay, BSpinner, BImg
} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store'
import router from "@/router";

export default {
	components: {
		BRow,
		BCol,
		BOverlay,
		BSpinner,
		BImg,

		// BSV
		BButton,
		BForm,
		BFormInput,
		BFormGroup,
		BCard,
		BCardTitle,
		BLink,
		VuexyLogo,
		BCardText,
		BInputGroup,
		BInputGroupAppend,
		BFormCheckbox,
		ValidationProvider,
		ValidationObserver,
	},
	mixins: [togglePasswordVisibility],
	data() {
		return {
			loading: false,
			userEmail: '',
			password: '',
			status: '',
			// validation rules
			required,
			email,
			sideImg: require('@/assets/images/pages/login-v2.svg'),
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
		logo() {
			return store.state.auth.logo || window._setting.app_logo
		},
		appName() {
			return store.state.auth.app_name || window._setting.app_name
		}
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
						store.commit('appConfig/UPDATE_SKIN', store.state.auth.theme)
						this.success(`${this.$t('welcome')} ${user.name}`);
						if (user.roles[0].id === 4) {
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
	}
}
</script>

<style lang="scss">
@import '@resources/scss/vue/pages/page-auth.scss';
</style>


<style>
.auth-wrapper .brand-logo {
    margin: 0 0 0 0;
}
</style>