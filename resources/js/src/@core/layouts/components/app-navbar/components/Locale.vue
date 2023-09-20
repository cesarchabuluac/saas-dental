<template>
  <b-nav-item-dropdown id="dropdown-grouped" variant="link" class="dropdown-language" right>
    <template #button-content>
      <b-img :src="currentLocale.img" height="14px" width="22px" :alt="currentLocale.locale" />
      <span class="ml-50 text-body">{{ currentLocale.name }}</span>
    </template>
    <b-dropdown-item v-for="localeObj in locales" :key="localeObj.locale" @click="$i18n.locale = localeObj.locale">
      <b-img :src="localeObj.img" height="14px" width="22px" :alt="localeObj.locale" />
      <span class="ml-50">{{ localeObj.name }}</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { BNavItemDropdown, BDropdownItem, BImg } from 'bootstrap-vue'
import store from "@/store";

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BImg,
  },
  // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {
    currentLocale() {
      return this.locales.find(l => l.locale === this.$i18n.locale)
    },
  },
  mounted() {
    
  },
  methods: {
    async update() {
			try {
				this.loading = true;
        const user = store.state.auth.user

        const payload = {
          isSettings: true,
          locale: this.currentLocale.locale,
          ...user
        }        
				const { data } = await UserResource.update(user.id, payload);
        console.log(data)
				this.loading = false
				if (data.success) {
					store.commit("auth/SET_CURRENT_USER", { ...data.data });
				}
			} catch (e) {
				this.loading = false;
				this.handleResponseErrors(e);
			}
		},
  },
  watch: {
    currentLocale(value) {      
      store.commit('auth/SET_LOCALE', value.locale)
      this.update()
    }
  },
  setup() {
    /* eslint-disable global-require */
    const locales = [
      {
        locale: 'es',
        img: require('@/assets/images/flags/es.png'),
        name: 'Spanish',
      },
      {
        locale: 'en',
        img: require('@/assets/images/flags/en.png'),
        name: 'English',
      },
      {
        locale: 'fr',
        img: require('@/assets/images/flags/fr.png'),
        name: 'French',
      },
      {
        locale: 'de',
        img: require('@/assets/images/flags/de.png'),
        name: 'German',
      },
      {
        locale: 'pt',
        img: require('@/assets/images/flags/pt.png'),
        name: 'Portuguese',
      },
    ]
    /* eslint-disable global-require */

    

    return {
      locales,
    }
  },
}
</script>

<style></style>
