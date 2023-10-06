<template>
  <div>
    <b-row v-if="!isSubscribed || isTrial && ($route.meta.breadcrumb || $route.meta.pageTitle)">
        <!-- Alert -->
        <b-col cols="12" md="12">
          <b-alert :variant="`danger`" show>
            <h4 class="alert-heading">
              <feather-icon icon="InfoIcon" class="mr-50" />
              <span v-if="isTrial">{{ $t('subscriptions.trial.title') }}</span>
              <span v-if="!isSubscribed">{{ $t('subscriptions.unsubscribed.title') }}</span>
              <b-button :disabled="isSubscriptionView" @click="$router.push({ name: 'subscription' })" size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="danger" class="text-right ml-2">
                {{ $t('button_to_subscribe') }}
              </b-button>
            </h4>
            <div v-if="isTrial" class="alert-body">
              <span>{{ $t('subscriptions.trial.description').replace(':days', trialEnd) }}</span>
            </div>
          </b-alert>
        </b-col>        
    </b-row>
    <b-row v-if="$route.meta.breadcrumb || $route.meta.pageTitle" class="content-header">
      <b-col class="content-header-left mb-2" cols="12" md="9">        
        <b-row class="breadcrumbs-top">      

          <b-col cols="12">
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

      <!-- Content Right -->
      <b-col class="content-header-right text-md-right d-md-block d-none mb-1" md="3" cols="12">
        <b-dropdown v-if="!checkIsTenant" variant="link" no-caret toggle-class="p-0" right>

          <template #button-content>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="btn-icon d-flex align-items-center justify-content-center"
            >
              <feather-icon icon="HelpCircleIcon" />
            </b-button>            
          </template>

          <b-dropdown-item :to="{ name: 'pages-faq' }">
            <feather-icon icon="HelpCircleIcon" size="16"/>
            <span class="align-middle ml-50">FAQ</span>
          </b-dropdown-item>

          <b-dropdown-item :to="{ name: 'apps-chat' }">
            <feather-icon
            icon="MessageSquareIcon"
            size="16"
            />
            <span class="align-middle ml-50">Chat</span>
          </b-dropdown-item>

          <b-dropdown-item :to="{ name: 'apps-email' }">
            <feather-icon
            icon="MailIcon"
            size="16"
            />
            <span class="align-middle ml-50">Email</span>
          </b-dropdown-item>

          <b-dropdown-item :to="{ name: 'apps-calendar' }">
            <feather-icon
            icon="CalendarIcon"
            size="16"
            />
            <span class="align-middle ml-50">Calendar</span>
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>   
</div>
 
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

<style lang="scss" scoped>
@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

.customizer-section {
  padding: 1.5rem;
  border-bottom: 1px solid #ebe9f1;

  .dark-layout & {
    border-color: $theme-dark-border-color;
  }

  #skin-radio-group ::v-deep {
    .custom-control-inline {
      margin-right: 0.7rem;
    }
  }

  .form-group {
    margin-bottom: 1.5rem;
    &:last-of-type {
      margin-bottom: 0;
    }
    ::v-deep legend {
      font-weight: 500;
    }
  }
}

.mark-active {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.ps-customizer-area {
  height: calc(100% - 83px);
}
</style>
