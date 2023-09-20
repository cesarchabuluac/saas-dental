<template>
  <b-nav-item @click="skin = isDark ? 'light' : 'dark'">
    <feather-icon
      size="21"
      :icon="`${isDark ? 'Sun' : 'Moon'}Icon`"
    />
  </b-nav-item>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'
import { computed, watch } from '@vue/composition-api'
import { BNavItem } from 'bootstrap-vue'
import store from "@/store"

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
  components: {
    BNavItem,
  },
  setup() {
    const { skin } = useAppConfig()

    const isDark = computed(() => skin.value === 'dark')

    const update = async () => {
      const user = store.state.auth.user
      const payload = {
          isSettings: true,
          theme: isDark.value ? 'dark' : 'light',
          ...user
        }    
        const { data } = await UserResource.update(user.id, payload);
        console.log(data)				
				if (data.success) {
					store.commit("auth/SET_CURRENT_USER", { ...data.data });
				}
    }

    watch([isDark], (value) => {      
        store.commit('auth/SET_THEME', value ? 'dark' : 'light')
        update();      
    })

    return { skin, isDark }
  },
}
</script>
