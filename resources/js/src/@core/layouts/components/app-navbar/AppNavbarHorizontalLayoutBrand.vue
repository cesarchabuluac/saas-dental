<template>
  <div class="navbar-header d-xl-block d-none">
    <ul class="nav navbar-nav">
      <li class="nav-item">
        <b-link class="navbar-brand" to="/">
          <span class="brand-logo">
            <b-img fluid :src="system_logo" :alt="system_name"/>
          </span>
          <h2 class="brand-text mb-0">{{ system_name }}</h2>
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { BLink, BImg } from 'bootstrap-vue'
import { $themeConfig } from '@themeConfig'
import useAppConfig from '@core/app-config/useAppConfig'
import store from '@/store'

export default {
  components: {
    BLink,
    BImg,
  },
  setup() {

    const { skin } = useAppConfig()

    // App Name
    const { appName, appLogoImage } = $themeConfig.app

    const system_name = computed(() => {      
        return store.getters['auth/getSettings'] ? store.getters['auth/getSettings'].app_name : window._setting.app_name
    })

    const system_logo = computed(() => {
      return store.getters['auth/getLogo'] ? store.getters['auth/getLogo'] : require('@/assets/images/logo/SoftDental.png')
    })

    return {
      appName,
      appLogoImage,

      // Skin
      skin,
      system_name,
      system_logo,
    }
  },
}
</script>

<style>
.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-logo img {
    max-width: 70px!important;
}
</style>
