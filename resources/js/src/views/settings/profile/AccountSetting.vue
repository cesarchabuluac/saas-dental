/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <b-tabs vertical content-class="col-12 col-md-9 mt-1 mt-md-0" pills nav-wrapper-class="col-md-3 col-12" nav-class="nav-left">

	<!-- general tab -->
	<b-tab active>

		<!-- title -->
		<template #title>
			<feather-icon icon="UserIcon" size="18" class="mr-50"/>
			<span class="font-weight-bold">{{ $t('general') }}</span>
		</template>

	  	<account-setting-general v-if="user" :profile="user"/>
	</b-tab>
	<!--/ general tab -->

	<!-- change password tab -->
	<b-tab>

	  <!-- title -->
	  <template #title>
		<feather-icon icon="LockIcon" size="18" class="mr-50"/>
		<span class="font-weight-bold">{{$t('change_password')}}</span>
	  </template>

	  <account-setting-password />
	</b-tab>
	<!--/ change password tab -->
   
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'
import AccountSettingGeneral from './AccountSettingGeneral.vue'
import AccountSettingPassword from './AccountSettingPassword.vue'
import store from '@/store'

export default {
  components: {
	BTabs,
	BTab,
	AccountSettingGeneral,
	AccountSettingPassword,
  },
  data() {
	return {
	  options: {
		profile: {
		  avatar: require('@/assets/images/avatar_default.png'),
		  name: null,
		  email: null,
		  id: null,
		},
	  },
	}
  },
  computed: {
	user() {
		const data = store.getters['auth/getUser']
		return this.options.profile = {
			has_media: data.has_media,
			avatar: data.has_media ? data.avatar : require('@/assets/images/avatar_default.png'),
			name: data.name,
			email: data.email,
			role: data.roles[0].name,
			role_id: data.roles[0].id,
			id: data.id,
			verified: (data.email_verified_at) ? true : false
		}
	},
	roles() {
	 	return store.state.auth.roles
	},
  },
  mounted() {

  }
}
</script>
