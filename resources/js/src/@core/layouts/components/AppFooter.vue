<template>
  <p class="clearfix mb-0">
    <span class="float-md-left d-block d-md-inline-block mt-25">
      COPYRIGHT  © {{ new Date().getFullYear() }}
      <b-link class="ml-25" href="https://soft-dental.com" target="_blank">Soft-Dental</b-link>
      <span class="d-none d-sm-inline-block">, All rights Reserved</span>
    </span>

    <span class="float-md-right d-none d-md-block">{{ app_short_description }}
      <feather-icon
        icon="HeartIcon"
        size="21"
        class="text-danger stroke-current"
      />
    </span>
  </p>
</template>

<script>
import { provide, computed, ref } from '@vue/composition-api'
import { BLink } from 'bootstrap-vue'
import store from '@/store'

export default {
  components: {
    BLink,
  },
  setup() {

    const app_short_description = ref (null)

    if(store.state.auth.user) {
      app_short_description.value = store.state.auth.setting.app_short_description
    } else {
      app_short_description.value = window._setting.app_short_description
    }

    return {
      store,
      app_short_description,
    }
    },
  }
</script>
