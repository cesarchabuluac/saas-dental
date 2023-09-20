<template>

  <!-- <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85"> -->
    <!-- Coming soon page-->
    <div class="misc-wrapper">
      <b-link class="brand-logo">
        <!-- <vuexy-logo /> -->
        <!-- <h2 class="brand-text text-primary ml-1">
          Vuexy
        </h2> -->
      </b-link>

      <div class="misc-inner p-2 p-sm-3">
        <div class="w-100 text-center">
          <h1 class="mb-1">
            {{ $t('impersonate.title') }} 🚀
          </h1>
          <h3 class="mb-3">
            {{ $t('impersonate.start') }}
          </h3>

          <p>
            <b-button :disabled="loading" type="button" variant="primary" @click="router.push({name: 'login'})">
              <b-spinner v-if="loading" small type="grow"/>                
            </b-button>
          </p>

          <b-img fluid :src="imgUrl" alt="Coming soon page"/>
        </div>
      </div>
    </div>
  <!-- </b-overlay> -->
</template>

<script>
/* eslint-disable global-require */
import { BLink, BForm, BFormInput, BButton, BImg, BOverlay, BSpinner, } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'
import router from '@/router'
import TenantsProviders from "@/providers/Tenants";
const TenantsResource = new TenantsProviders()

import ImpersonateProvider from '@/providers/Impersonates'
const ImpersonateResource = new ImpersonateProvider()

export default {
  components: {
    VuexyLogo,
    BLink,
    BForm,
    BButton,
    BFormInput,
    BImg,
    BOverlay,
    BSpinner,
  },
  data() {
    return {
      loading: false,
      downImg: require('@/assets/images/pages/coming-soon.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        this.downImg = require('@/assets/images/pages/coming-soon-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  async mounted() { 
    await this.setImpersonate()
  },
  methods: {
    async setImpersonate() {
      try {
        this.loading = true
        const { data } = await TenantsResource.impersonate(router.currentRoute.params.token)
        if (data.success) {
          localStorage.setItem('loggedIn', true)
          localStorage.setItem('auth_token', data.data.access_token)
          store.commit('auth/SET_TOKEN', { ...data.data })
          store.commit('auth/SET_REFRESH_TOKEN', data.data)
          store.dispatch("auth/GET_IMPERSONATE_TOKEN", data).then(() => {
            this.loading = false
            const user = store.getters['auth/getUser'] 
            this.success(`Bienvenido ${user.name}`);
            router.push({ name: "home" });  
          })
        } else {
          this.loading = false
          this.danger(data.message)
        }
      }catch(e) {
        this.loading = false
        this.handleResponseErrors(e)
      }
    },    
  }
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-misc.scss';
</style>
