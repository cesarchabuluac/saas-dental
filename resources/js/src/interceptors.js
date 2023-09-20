import _ from "lodash";
import axios from "axios";
// import * as Cookies from "js-cookie";
import store from "./store";

const excludePaths = ["/login", "/forgot", "/reset", "/refresh_token"];
// Interceptor for requests

axios.interceptors.request.use(
    (config) => {
        config.headers = config.headers || {};
        if (!_.includes(excludePaths, config.url)) {
            const token = localStorage.getItem("auth_token");
            config.headers["Content-Type"] = "application/json";
            config.headers["X-Requested-With"] = "XMLHttpRequest";
            config.headers.Authorization = `Bearer ${token}`;
            config.headers["Accept-Language"] = store.getters['auth/getLocale'] || 'es' //store.state.auth.user.settings.locale || 'en'; //store.getters.getLocale.substring(0, 2); // Workaround for translate on backend
        }
        return config;
    },
    (err) => Promise.reject(err)
);

const responseStatuses = (err) => {
    if (_.includes([409, 404], err.response.status)) {
        throw err;
    } else if (
        (err.response.status === 401 || err.response.status === 403) &&
        err.response.config &&
        !err.response.config.__isRetryRequest
    ) {
        // Cookies.remove("vuex");
        if(err.response.status === 401) {
            localStorage.removeItem('authenticated')
            localStorage.removeItem('loggedIn')
            localStorage.removeItem('auth_token')
            window.localStorage.removeItem('vuex')
            store.commit('SET_TOKEN', null)
            store.commit('SET_CURRENT_SUSCRIPTION', null)
            store.commit('SET_CURRENT_ACCOUNT', null)
            store.commit('SET_CURRENT_USER', null)
            store.commit('SET_PERMISSIONS', null)
            store.commit('SET_ROLES', null)
            store.commit('SET_SETTING', null)
            store.commit('SET_TIMEZONES', null)
            store.commit('SET_LANGUAGES', null)
            store.commit('SET_BRANCHES', [])
            store.commit('SET_LABORATORIES', [])
            store.commit('SET_DOCTORS', [])
            store.commit('SET_SWITCH_PLAN', false)
        } else {
            store.dispatch('LOGOUT');
        }
        
    } else {
        return Promise.reject(err);
    }
    throw err;
};

// Interceptor for responses
axios.interceptors.response.use(
    (response) => response,
    (err) => {
        if (err.response.config) {
            if (!_.includes(excludePaths, err.response.config.url)) {
                return responseStatuses(err);
            }
        } else {
            return responseStatuses(err);
        }
    }
);
