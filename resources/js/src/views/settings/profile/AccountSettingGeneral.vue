<template>
	<b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
		<b-card>
			<!-- Media -->
			<b-media class="mb-2">
				<template #aside>
					<b-avatar ref="previewEl" :src="user.has_media ? user.avatar : null" :text="avatarText(user.name)" 
					:variant="`light-${resolveUserRoleVariant(user.role_id)}`"
						size="90px" rounded/>
				</template>
				<h4 class="mb-1">
					{{ user.name }}
				</h4>
				<div class="d-flex flex-wrap">
					<b-button variant="primary" @click="$refs.refInputEl.click()">
						<input ref="refInputEl" type="file" class="d-none" @input="imgRenderer"/>
						<span class="d-none d-sm-inline">{{ $t("uploads") }}</span>
						<feather-icon icon="EditIcon" class="d-inline d-sm-none" />
					</b-button>
					<b-button @click="resetForm" variant="outline-secondary" class="ml-1">
						<span class="d-none d-sm-inline"> {{ $t("cancel") }}</span>
						<feather-icon icon="TrashIcon" class="d-inline d-sm-none" />
					</b-button>
				</div>
			</b-media>

			<!-- form -->
			<b-form class="mt-2">
				<b-row>
					<b-col sm="6">
						<b-form-group :label="$t('user_name')" label-for="account-username">
							<b-form-input v-model="user.name" :placeholder="$t('user_name_placeholder')" name="username"/>
						</b-form-group>
					</b-col>
					<b-col sm="6">
						<b-form-group :label="$t('email')" label-for="account-e-mail">
							<b-form-input v-model="user.email" name="email" :placeholder="$t('user_email_placeholder')" :disabled="true"/>
						</b-form-group>
					</b-col>
					
					<b-col cols="12">
						<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mt-2 mr-1" @click="update">
							{{ $t("update") }}
						</b-button>
					</b-col>
				</b-row>
			</b-form>
		</b-card>
	</b-overlay>
</template>

<script>
import {
	BFormFile,
	BButton,
	BForm,
	BFormGroup,
	BFormInput,
	BRow,
	BCol,
	BAlert,
	BCard,
	BCardText,
	BMedia,
	BAvatar,
	BMediaAside,
	BMediaBody,
	BLink,
	BImg,
	BOverlay,
    BSpinner,
} from "bootstrap-vue";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils";
import { ref } from "@vue/composition-api";
import _ from "lodash";
import store from "@/store";

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
	components: {
		BButton,
		BForm,
		BImg,
		BFormFile,
		BFormGroup,
		BFormInput,
		BRow,
		BCol,
		BAlert,
		BCard,
		BCardText,
		BMedia,
		BAvatar,
		BMediaAside,
		BMediaBody,
		BLink,
		vSelect,
		BOverlay,
    	BSpinner,
	},
	directives: {
		Ripple,
	},
	props: {
		profile: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			user: {},
			roles: _.filter(store.state.auth.roles),
			loading: false,
			isChangeAvatar: false
		};
	},
	mounted() {
		this.user = this.profile
	},
	methods: {
		async update() {
			try {
				this.loading = true;
				const { data } = await UserResource.update(this.profile.id, this.profile);
				this.loading = false
				if (data.success) {
					store.commit("auth/SET_CURRENT_USER", { ...data.data });
					this.success(data.message);
				} else {
					this.danger(data.message);
				}
			} catch (e) {
				this.loading = false;
				this.handleResponseErrors(e);
			}
		},
		resetForm() {
			this.isChangeAvatar = false
			this.profile.avatar = null
			this.user = this.profile
		},
		imgRenderer(evt){
			const file = evt.target.files[0];
			/// Lee el archivo local y lo genera en codificación gbk
			const reader = new FileReader();
			reader.onload = (data) => {
				// Después de una lectura exitosa
				let res = data.target || data.srcElement;
				// Resultados de salida después de leer
				this.profile.change_avatar = true
				this.profile.avatar = res.result
			};
			reader.readAsDataURL(file);
		}
	},
	setup(props) {
		const refInputEl = ref(null);
		const previewEl = ref(null);

		const { inputImageRenderer } = useInputImageRenderer(
			refInputEl,
			(base64) => {
				props.profile.avatar = base64;
			}
		);

		const resolveUserRoleVariant = id => {
			if (id === 1) return "danger"; // Administrator
			if (id === 2) return "warning"; // Customer
			return 'primary';
		}

		return {
			refInputEl,
			previewEl,
			inputImageRenderer,
			resolveUserRoleVariant,
		};
	},
};
</script>
