import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import router from '@/router'
import AuthProvider from '@/providers/Auth'
import TenantProvider from '@/providers/Tenants'
const AuthResource = new AuthProvider()
const TenantResource = new TenantProvider()

export default {
  namespaced: true,
  state: {
    token: null,
    refreshToken: null,
    user: null,
    account: null,
    setting: null,
    roles: null,
    subscription: null,
    permission: null,
    permissions: [],
    timezones: null,
    languages: null,
    branches: [],
    laboratories: [],
    doctors: [],
    locale: 'es',
    theme: 'light',
    countries: [],
    currencies: [],
    logo: null,
    app_name: null,
    switch_plan: false,
    roleName: null,
    roleId: null,
  },
  getters: {
    getCountries: state => state.countries,
    getCurrencies: state => state.currencies,
    getTokens: state => state.token.access_token,
    getRole: state => state.roleName, //state.user.roles[0].name,
    getRoleId: state => state.roleId, //state.user.roles[0].id,
    getUserId: state => state.user.id,
    getUserEmail: state => state.user.email,
    getUserName: state => state.user.name,
    getTimezone: state => state.setting.timezone,
    getLocale: state => state.locale, //process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    getPermissions: state => state.permission,
    getAllPermissions: state => state.permissions,
    getSettings: state => state.setting,
    getRoles: state => state.roles,
    getUser: state => state.user,
    getTimezones: state => state.timezones,
    getLanguages: state => state.languages,
    getSubscription: state => state.subscription,
    getCurrentAccount: state => state.account,
    getBranches: state => state.branches,
    getLaboratories: state => state.laboratories,
    getDoctors: state => state.doctors,
    getLogo: state => state.logo,
    getSwithPlan: state => state.switch_plan,
  },
  mutations: {
    SET_ROLE_NAME(state, roleName) {
      state.roleName = roleName
    },
    SET_ROLE_ID(state, roleId) {
      state.roleId = roleId
    },
    SET_LOGO(state, logo) {
      state.logo = logo
    },
    SET_APP_NAME(state, name) {
      state.app_name = name
    },
    SET_CURRENCIES(state, currencies) {
      state.currencies = currencies
    },
    SET_COUNTRIES(state, countries) {
      state.countries = countries
    },
    SET_LOCALE(state, locale) {
      state.locale = locale
    },
    SET_THEME(state, theme) {
      state.theme = theme
    },
    SET_CURRENT_USER(state, user) {
      state.user = user
    },
    SET_CURRENT_ACCOUNT(state, account) {
      state.account = account
    },
    SET_CURRENT_SUSCRIPTION(state, subscription) {
      state.subscription = subscription
    },
    SET_PERMISSIONS(state, permission) {
      state.permission = permission
    },
    SET_ALL_PERMISSIONS(state, permissions) {
      state.permissions = permissions
    },
    SET_TOKEN(state, user) {
      state.token = user
    },
    SET_SETTING(state, setting) {
      if (!_.isEmpty(setting)) {
        const setValues = setting.reduce((obj, item) => {
          obj[item.key] = _.startsWith(item.key, 'enable') ? (item.value != 0) : item.value
          return obj
        }, {})
        state.setting = setValues
      } else {
        state.setting = setting
      }
    },
    SET_ROLES(state, roles) {
      state.roles = roles
    },
    SET_REFRESH_TOKEN(state, refreshToken) {
      state.refreshToken = refreshToken
    },
    SET_TIMEZONES(state, timezones) {
      state.timezones = timezones
    },
    SET_LANGUAGES(state, languages) {
      state.languages = languages
    },
    SET_BRANCHES(state, branches) {
      state.branches = branches
    },
    SET_LABORATORIES(state, laboratories) {
      state.laboratories = laboratories
    },
    SET_DOCTORS(state, doctors) {
      state.doctors = doctors
    },
    SET_SWITCH_PLAN(state, switchPlan) {
      state.switch_plan = switchPlan;
    }
  },
  actions: {
    GET_IMPERSONATE_TOKEN({ commit, state }, data) {
      return new Promise((resolve, reject) => {
          AuthResource.getUserAuth().then(user => {
            const { data } = user
            if (data.success) {
              window.user = data.data.user
              commit('SET_CURRENT_USER', data.data.user)
              commit('SET_PERMISSIONS', data.data.permissions)
              commit('SET_SETTING', data.data.settings)
              commit('SET_TIMEZONES', data.data.timezones)
              commit('SET_LANGUAGES', data.data.languages)
              commit('SET_ROLES', data.data.roles)
              commit('SET_LOCALE', 'es')
              commit('SET_THEME', 'dark')
              commit('SET_COUNTRIES', data.data.countries)
              commit('SET_CURRENCIES', data.data.currencies)
              commit('SET_LOGO', state.setting.app_logo)
              commit('SET_APP_NAME', state.setting.app_name)
              return TenantResource.me()
            }
            reject(user)
          }).then(account => {
            const { data } = account
            if (data.success) {
              commit('SET_CURRENT_ACCOUNT', data.data)
              resolve(account)
            }
            reject(account)
          }).catch(error => {
            window.loggedIn = false
            localStorage.removeItem('authenticated')
            localStorage.removeItem('loggedIn')
            localStorage.removeItem('auth_token')
            window.localStorage.removeItem('vuex')
            commit('SET_TOKEN', null)
            commit('SET_CURRENT_SUSCRIPTION', null)
            commit('SET_CURRENT_ACCOUNT', null)
            commit('SET_CURRENT_USER', null)
            commit('SET_PERMISSIONS', null)
            commit('SET_ROLES', null)
            commit('SET_SETTING', null)
            commit('SET_TIMEZONES', null)
            commit('SET_LANGUAGES', null)
            commit('SET_SWITCH_PLAN', false)
            commit('SET_DOCTORS', [])
            reject(error)
          })        
      })
    },
    GET_AUTH_TOKEN({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        AuthResource.login(payload).then(response => {
          const { data } = response
          if (data.success) {
            localStorage.setItem('loggedIn', true)
            localStorage.setItem('auth_token', data.data.access_token)
            commit('SET_TOKEN', { ...data.data })
            commit('SET_REFRESH_TOKEN', data.data)
            return AuthResource.getUserAuth()
          }
          reject(response)
        }).then(user => {
          const { data } = user
          if (data.success) {
            window.user = data.data.user
            commit('SET_CURRENT_USER', data.data.user)
            commit('SET_ROLE_NAME', data.data.user.roles[0].name)
            commit('SET_ROLE_ID', data.data.user.roles[0].id)
            commit('SET_PERMISSIONS', data.data.permissions)
            commit('SET_SETTING', data.data.settings)
            commit('SET_TIMEZONES', data.data.timezones)
            commit('SET_LANGUAGES', data.data.languages)
            commit('SET_ROLES', data.data.roles)
            commit('SET_LOCALE', 'es')
            commit('SET_THEME', 'dark')
            commit('SET_COUNTRIES', data.data.countries)
            commit('SET_CURRENCIES', data.data.currencies)
            commit('SET_LOGO', state.setting.app_logo)
            commit('SET_APP_NAME', state.setting.app_name)
            return TenantResource.me()
          }
          reject(user)
        }).then(account => {
          const { data } = account
          if (data.success) {
            commit('SET_CURRENT_ACCOUNT', data.data)
            resolve(account)
          }
          reject(account)
        }).catch(error => {
          window.loggedIn = false
          localStorage.removeItem('authenticated')
          localStorage.removeItem('loggedIn')
          localStorage.removeItem('auth_token')
          window.localStorage.removeItem('vuex')
          commit('SET_TOKEN', null)
          commit('SET_ROLE_NAME', null)
          commit('SET_ROLE_ID', null)
          commit('SET_CURRENT_SUSCRIPTION', null)
          commit('SET_CURRENT_ACCOUNT', null)
          commit('SET_CURRENT_USER', null)
          commit('SET_PERMISSIONS', null)
          commit('SET_ROLES', null)
          commit('SET_SETTING', null)
          commit('SET_TIMEZONES', null)
          commit('SET_LANGUAGES', null)
          commit('SET_SWITCH_PLAN', false)
          reject(error)
        })
      })
    },
    LOGOUT({ commit, state, dispatch }) {
      AuthResource.logout()
        .then(response => {
          localStorage.removeItem('authenticated')
          localStorage.removeItem('loggedIn')
          localStorage.removeItem('auth_token')
          window.localStorage.removeItem('vuex')
          commit('SET_TOKEN', null)
          commit('SET_ROLE_NAME', null)
          commit('SET_ROLE_ID', null)
          commit('SET_CURRENT_SUSCRIPTION', null)
          commit('SET_CURRENT_ACCOUNT', null)
          commit('SET_CURRENT_USER', null)
          commit('SET_PERMISSIONS', null)
          commit('SET_ROLES', null)
          commit('SET_SETTING', null)
          commit('SET_TIMEZONES', null)
          commit('SET_LANGUAGES', null)
          commit('SET_BRANCHES', [])
          commit('SET_LABORATORIES', [])
          commit('SET_DOCTORS', [])
          commit('SET_SWITCH_PLAN', false)
          router.push({ name: 'login' })
        })
        .catch(error => console.log(error))
    },
    UPDATE_SWTICH_PLAN({ commit, state }, isWitch) {
      commit('SET_SWITCH_PLAN', isWitch)
    },
    UPDATE_CURRENT_USER({ commit, state }, payload) {
      commit('SET_CURRENT_USER', payload)
    },
    UPDATE_SETTING({ commit, state }, payload) {
      commit('SET_SETTING', payload)
    },
    ADD_BRANCH(state, newBranch) {
      state.branches.push(newBranch)
    },
    ADD_LABORATORIES(state, newLaboratory) {
      state.laboratories.push(newLaboratory)
    },
    ADD_DOCTORS(state, newDoctor) {
      state.doctors.push(newDoctor)
    }
  },
}
