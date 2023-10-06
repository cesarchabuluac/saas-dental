<template>
  <div class="buy-now">
    <b-button
      v-if="!isSubscribed || isTrial"
      :disabled="isSubscriptionView"
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="danger"
      @click="$router.push({ name: 'subscription' })"
    >
      {{ $t('button_to_subscribe') }}
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store'

export default {
  directives: {
    Ripple,
  },
  components: {
    BButton,
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
  }
}
</script>

<style>

</style>
