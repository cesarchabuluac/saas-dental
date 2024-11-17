<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <dark-Toggler class="d-none d-lg-block" />
      <bookmarks />
    </div>

    <b-navbar-nav v-if="user" class="nav align-items-center ml-auto">
      <!-- <locale /> -->
      <search-bar/>

      <!-- Swtich Role Id -->
      <!-- <session-dropdown /> -->

      <notification-dropdown/>
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              {{ user.name }}
            </p>
            <span class="user-status">{{ roleName }}</span>
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="user.has_media ? user.avatar : null"
            class="badge-minimal"
            badge-variant="success"
            :text="avatarText(user.name)"
          />
        </template>

        <b-dropdown-item v-if="canAccess('users.profile')" link-class="d-flex align-items-center"  :to="{ name: 'profile'}">
          <feather-icon size="16" icon="UserIcon" class="mr-50"/>
          <span>{{$t('profile')}}</span>
        </b-dropdown-item>

        <b-dropdown-item :disabled="!checkIsTenant()" v-if="isAccess" link-class="d-flex align-items-center"  :to="{ name: 'subscription'}">
          <feather-icon size="16" icon="CreditCardIcon" class="mr-50"/>
          <span>{{$t('subscriptions.menu')}}</span>
        </b-dropdown-item>

        <b-dropdown-item @click="logout" link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span>{{$t('logout')}}</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import { ref, computed, onMounted } from "@vue/composition-api";
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import Bookmarks from '@core/layouts/components/app-navbar/components/Bookmarks.vue'
import Locale from '@core/layouts/components/app-navbar/components/Locale.vue'
import SearchBar from '@core/layouts/components/app-navbar/components/SearchBar.vue'
import CartDropdown from '@core/layouts/components/app-navbar/components/CartDropdown.vue'
import NotificationDropdown from '@core/layouts/components/app-navbar/components/NotificationDropdown.vue'
import SessionDropdown from '@core/layouts/components/app-navbar/components/SessionDropdown.vue'
import UserDropdown from '@core/layouts/components/app-navbar/components/UserDropdown.vue'
import store from '@/store'
import { checkIsCentral } from '@/libs/domains';
import TenantsProvider from '@/providers/Tenants'
const TenantsResource = new TenantsProvider()

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,

    // Navbar Components
    DarkToggler,
    Bookmarks,
    Locale,
    NotificationDropdown,
    SessionDropdown,
    SearchBar,
    SessionDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  setup() {

    const tenant = ref({})
    const loading = ref(false)
    const user = computed(() => store.getters['auth/getUser'] )
    const isCentral = ref(checkIsCentral())
    const roleId = store.getters['auth/getRoleId'];
    
    
    onMounted(async () => {
            
    })

    const roleName = computed(() => {
      return store.getters['auth/getRole']
    })

    const isAccess = computed(() => {
      const userRoles = store.getters['auth/getUser'].roles || []; // Array de roles del usuario

      // Define los roles que tienen acceso
      const allowedRoles = [1, 2]; // Roles que permiten acceder a la ruta

      return userRoles.some(role => allowedRoles.includes(role.id));
    })

    const logout = () => {
			store.dispatch('auth/LOGOUT').then( () => {
        // store.dispatch('calendar/resetDatas')
      })
		}

    return {
      user,
      roleId,
      tenant,
      isCentral,
      isAccess,
      roleName,

			logout,
    }
    
  }
}
</script>
