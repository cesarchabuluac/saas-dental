<template>
    <b-nav-item-dropdown
        class="dropdown-notification mr-25"
        menu-class="dropdown-menu-media"
        right
    >
        <template #button-content>
            <feather-icon
                v-if="getRoles.length && getRoles != undefined && getRoles.length > 0"
                :badge="getRoles.length || 0"
                badge-classes="bg-primary"
                class="text-body"
                icon="RepeatIcon"
                size="21"
            />
        </template>

        <!-- Header -->
        <li class="dropdown-menu-header">
            <div class="dropdown-header d-flex">
                <h5 class="notification-title mb-0 mr-auto">{{$t('user_roles')}}</h5>
                <b-badge pill variant="light-primary"> {{ getRoles.length }} </b-badge>
            </div>
        </li>

        <!-- Notifications -->
        <vue-perfect-scrollbar :settings="perfectScrollbarSettings" class="scrollable-container media-list scroll-area" tagname="li">
            <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
                <template #overlay>
                    <div class="d-flex align-items-center">
                        <b-spinner small type="grow" variant="secondary" />
                        <b-spinner type="grow" variant="dark" />
                        <b-spinner small type="grow" variant="secondary" />
                    </div>
                </template>
                <b-link v-for="(role, index) in getRoles" :key="index+role.id" @click="swithRole(role)">
                    <b-media>
                        <template #aside>
                            <b-avatar size="32" variant="light-primary">
                                <feather-icon icon="LogInIcon" />
                            </b-avatar>
                        </template>
                        <p class="media-heading">
                            <span class="font-weight-bolder">
                               Ingresar como {{ $t(`role_${role.name}`) }}
                            </span>
                        </p>
                        <!-- <small class="notification-text_ font-weight-bolder" v-html="notification.subtitle"></small> -->
                    </b-media>
                </b-link>
            </b-overlay>
        </vue-perfect-scrollbar>        
    </b-nav-item-dropdown>
</template>

<script>
import _ from "lodash";
import router from "@/router";
import store from "@/store";
import { firebase, auth, messaging } from "@/firebase";
import {
    BNavItemDropdown,
    BBadge,
    BMedia,
    BLink,
    BAvatar,
    BButton,
    BFormCheckbox,
    BOverlay, BSpinner,
} from "bootstrap-vue";

import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Ripple from "vue-ripple-directive";
import * as helper from "@/libs/helpers";

import NotificationProvider from "@/providers/notifications";
import {
    ref,
    onUnmounted,
    onMounted,
    watch,
    computed,    
} from "@vue/composition-api";
const NotificationResource = new NotificationProvider();

export default {
    name: "SessionDropdown",
    components: {
        BNavItemDropdown,
        BBadge,
        BMedia,
        BLink,
        BAvatar,
        VuePerfectScrollbar,
        BButton,
        BFormCheckbox,
        BOverlay, BSpinner,
    },
    directives: {
        Ripple,
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        swithRole(role) {
            console.log('swithRole', role);
            store.commit('auth/SET_PERMISSIONS', role.permissions);
            store.commit('auth/SET_ROLE_NAME', role.name)
            store.commit('auth/SET_ROLE_ID', role.id)
            //router.push({ name: 'home' }); 
        }
       
    },
    setup() {
        const loading = ref(false);
        const userRoles = ref([]);

        const perfectScrollbarSettings = {
            maxScrollbarLength: 60,
            wheelPropagation: false,
        };

        const getRoles = computed(() => {
            const currentRoleId = store.getters['auth/getRoleId'];
            return store.getters['auth/getUser'].roles.filter(role => role.id != currentRoleId);
        })

        onMounted(async () => {
            // await fetchNotifications();
            // const currentRoleId = store.getters['auth/getRoleId'];
            // userRoles.value = store.getters['auth/getUser'].roles.filter(role => role.id != currentRoleId);
            // console.log('userRoles', userRoles.value);
        });

        return {
            loading,
            userRoles,
            getRoles,
            perfectScrollbarSettings,
            
        };
    },
};
</script>

<style></style>
