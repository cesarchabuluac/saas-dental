import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedStore from 'vuex-persistedstate'
import * as CryptoJS from 'crypto-js'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import authUser from './auth-user'
import calendar from '../views/apps/appointments/calendarStoreModule'
import inventory from './inventories'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    createPersistedStore({
      storage: {
        getItem: key => {
          const value = localStorage.getItem(key)
          if (value) {
            const bytes = CryptoJS.AES.decrypt(value, 'clave-secreta')
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
            return decryptedData
          }
          return null
        },
        setItem: (key, value) => {
          const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), 'clave-secreta').toString()
          localStorage.setItem(key, encryptedData)
        },
        removeItem: key => {
          localStorage.removeItem(key)
        },
      },
    }),
  ],
  modules: {
    app,
    appConfig,
    verticalMenu,
    auth: authUser,
    // calendar,
    inventory: inventory,
  },
  strict: process.env.DEV,
})

// store.subscribe((mutation, state) => {
//   localStorage.setItem('store', JSON.stringify(state));
// });

export default store
