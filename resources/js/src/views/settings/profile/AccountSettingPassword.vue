<template>
	 <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
		<b-card>
			<!-- form -->
			<b-form>
				<b-row>
					<!-- old password -->
					<b-col md="6">
						<b-form-group :label="$t('old_password')" label-for="account-old-password"
						:description="$t('old_password_help')">
							<b-input-group class="input-group-merge">
							<b-form-input
								id="account-old-password"
								v-model="password.old_password"
								name="old-password"
								:type="passwordFieldTypeOld"
								:placeholder="$t('old_password_placeholder')"
							/>
							<b-input-group-append is-text>
								<feather-icon
								:icon="passwordToggleIconOld"
								class="cursor-pointer"
								@click="togglePasswordOld"
								/>
							</b-input-group-append>
							</b-input-group>
						</b-form-group>
					</b-col>
					<!--/ old password -->
				</b-row>
				<b-row>
					<!-- new password -->
					<b-col md="6">
						<b-form-group label-for="account-new-password" :label="$t('new_password')" 
							:description="$t('new_password_help')">
							<b-input-group class="input-group-merge">
								<b-form-input
									id="account-new-password"
									v-model="password.password"
									:type="passwordFieldTypeNew"
									name="new-password"
									:placeholder="$t('new_password_placeholder')"
								/>
								<b-input-group-append is-text>
									<feather-icon
										:icon="passwordToggleIconNew"
										class="cursor-pointer"
										@click="togglePasswordNew"
									/>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>
					</b-col>
					<!--/ new password -->

					<!-- retype password -->
					<b-col md="6">
						<b-form-group label-for="account-retype-new-password" :label="$t('retype_password')"
							:description="$t('retype_password_help')">
							<b-input-group class="input-group-merge">
								<b-form-input
									id="account-retype-new-password"
									v-model="password.password_confirmation"
									:type="passwordFieldTypeRetype"
									name="retype-password"
									:placeholder="$t('retype_password_placeholder')"
								/>
								<b-input-group-append is-text>
									<feather-icon
										:icon="passwordToggleIconRetype"
										class="cursor-pointer"
										@click="togglePasswordRetype"
									/>
								</b-input-group-append>
							</b-input-group>
						</b-form-group>
					</b-col>
					<!--/ retype password -->

					<!-- buttons -->
					<b-col cols="12">
						<b-button @click="changePassword"
							v-ripple.400="'rgba(255, 255, 255, 0.15)'"
							variant="primary"
							class="mt-1 mr-1">
							{{$t('update')}}
						</b-button>
						<b-button
							v-ripple.400="'rgba(186, 191, 199, 0.15)'"
							type="reset"
							variant="outline-secondary"
							class="mt-1">
							{{$t('cancel')}}
						</b-button>
					</b-col>
					<!--/ buttons -->
				</b-row>
			</b-form>
		</b-card>
	</b-overlay>
</template>

<script>
import {
	BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BInputGroup, BInputGroupAppend,
	BOverlay,
    BSpinner,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import UserProvider from '@/providers/Users'
const UserResource = new UserProvider()

export default {
	components: {
		BButton,
		BForm,
		BFormGroup,
		BFormInput,
		BRow,
		BCol,
		BCard,
		BInputGroup,
		BInputGroupAppend,
		BOverlay,
    	BSpinner,
	},
	directives: {
		Ripple,
	},
	data() {
		return {
			loading: false,
			password: {},
			passwordValueOld: null,
			newPasswordValue: null,
			RetypePassword: null,
			passwordFieldTypeOld: 'password',
			passwordFieldTypeNew: 'password',
			passwordFieldTypeRetype: 'password',
			errors: {},
		}
	},
	computed: {
		passwordToggleIconOld() {
			return this.passwordFieldTypeOld === 'password' ? 'EyeIcon' : 'EyeOffIcon'
		},
		passwordToggleIconNew() {
			return this.passwordFieldTypeNew === 'password' ? 'EyeIcon' : 'EyeOffIcon'
		},
		passwordToggleIconRetype() {
			return this.passwordFieldTypeRetype === 'password' ? 'EyeIcon' : 'EyeOffIcon'
		},
	},
	methods: {
		togglePasswordOld() {
			this.passwordFieldTypeOld = this.passwordFieldTypeOld === 'password' ? 'text' : 'password'
		},
		togglePasswordNew() {
			this.passwordFieldTypeNew = this.passwordFieldTypeNew === 'password' ? 'text' : 'password'
		},
		togglePasswordRetype() {
			this.passwordFieldTypeRetype = this.passwordFieldTypeRetype === 'password' ? 'text' : 'password'
		},
		async changePassword () {

			if (!this.password) {
				return false
			}

			try {
				this.loading = true
				const {data} = await UserResource.passwordChange({...this.password})
				this.loading = false
				if (data.success) {
					this.password = {}
					this.success(data.message)
				} else {
					this.danger(data.message)
				}
			}catch(e) {
				this.loading = false
				this.handleResponseErrors(e)
			}
		}
	},
}
</script>
