import Vue from 'vue'
import Echo from 'laravel-echo'
import Pusher from "pusher-js";
import VuePusher from 'vue-pusher'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'
import './interceptors'
import './middlewares'

// Global Components
import './global-components'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'
import "@/libs/sweet-alerts";
import utils from "@/libs/utils";

// Axios Mock Adapter
import '@/@fake-db/db'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@resources/scss/core.scss')

// import assets styles
require('@resources/assets/scss/style.scss')

Vue.config.productionTip = false

Vue.mixin(utils);

// window.Pusher = require('pusher-js')
// window.Pusher = Pusher;
// Pusher.logToConsole = false;

// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: process.env.MIX_PUSHER_APP_KEY,
//   cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//   forceTLS: true,
//   // encrypted: false,
//   auth: {
//       headers: {
//           Authorization: 'Bearer ' + localStorage.getItem("auth_token"),
//           Accept: "application/json",
//             'X-Tenant': '0c59384f-e186-42d4-8590-0845b46ccaa0',
//       },
//   },
//   // enabledTransports: ['ws', 'wss'],
//   // wsHost: window.location.hostname,
//   // wsPort: 8000,
// });


new Vue({
  router,
  store,
  i18n,
  beforeCreate() {
   
  },
  render: h => h(App),
}).$mount('#app')
