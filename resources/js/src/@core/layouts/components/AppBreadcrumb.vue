<template>
  <b-row v-if="$route.meta.breadcrumb || $route.meta.pageTitle" class="content-header">
    <b-col class="content-header-left_ mb-2" cols="12" md="12">
      <b-row class="breadcrumbs-top">
        <!-- Alert -->
        <b-col v-if="!isSubscribed || isTrial" cols="12" md="12">
          <b-alert :variant="`danger`" show>
            <h4 class="alert-heading">
              <feather-icon icon="InfoIcon" class="mr-50" />
              <span v-if="isTrial">{{ $t('subscriptions.trial.title') }}</span>
              <span v-if="!isSubscribed">{{ $t('subscriptions.unsubscribed.title') }}</span>
              <b-button :disabled="isSubscriptionView" @click="$router.push({ name: 'subscription' })" sm v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="danger" class="text-right ml-2">
                {{ $t('subscriptions.billing_page') }}
              </b-button>
            </h4>
            <div v-if="isTrial" class="alert-body">
              <span>{{ $t('subscriptions.trial.description').replace(':days', trialEnd) }}</span>
            </div>
          </b-alert>
        </b-col>

        <b-col cols="12" :class="`${!isSubscribed ? 'mt-3' : ''}`">
          <h2 class="content-header-title float-left pr-1 mb-0">
            {{ $t($route.meta.pageTitle) }}
          </h2>
          <div class="breadcrumb-wrapper">
            <b-breadcrumb>
              <b-breadcrumb-item to="/">
                <feather-icon icon="HomeIcon" size="16" class="align-text-top" />
              </b-breadcrumb-item>
              <b-breadcrumb-item v-for="item in $route.meta.breadcrumb" :key="item.text" :active="item.active"
                :to="item.to">
                {{ $t(item.text) }}
              </b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </b-col>
      </b-row>
    </b-col>


  </b-row>
</template>

<script>
import {
  BBreadcrumb, BBreadcrumbItem, BRow, BCol, BDropdown, BDropdownItem, BButton,
  BCard, BCardText, BAlert, BLink,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import router from '@/router'

export default {
  directives: {
    Ripple,
  },
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
    BRow,
    BCol,
    BDropdown,
    BDropdownItem,
    BButton,
    BCard,
    BCardText,
    BAlert,
    BLink,
  },
  computed: {
    isSubscribed() {
      if(!this.checkIsTenant()) {
        return true
      }
      return store.getters['auth/getCurrentAccount'].is_subscribed
    },
    isBanned() {
      if(!this.checkIsTenant()) {
        return false
      }
      return store.getters['auth/getCurrentAccount'].is_banned
    },
    isTrial() {
      if(!this.checkIsTenant()) {
        return false
      }
      return store.getters['auth/getCurrentAccount'].on_trial
    },
    trialEnd() {
      if(!this.checkIsTenant()) {
        return false
      }
      return store.getters['auth/getCurrentAccount'].end_on_trial
    },
    isSubscriptionView() {
      return this.$route.name === 'subscription'
    },
  },
  mounted() {
    
  }
}
</script>
