<template>
  <b-card no-body class="card-browser-states">
    <b-card-header>
        <b-card-title class="text-dark"><strong>Doctores con mas acciones (Top 5)</strong></b-card-title>
    </b-card-header>

    <!-- body -->
    <b-card-body v-if="tableData.length > 0">
      <div v-for="(item, index) in tableData" :key="index" class="browser-states">
        <b-media no-body>
          <b-media-aside class="mr-1">
            <b-avatar size="32" :src="null" :text="avatarText(item.name)" :variant="`light-primary`" />
          </b-media-aside>
          <b-media-body>
            <h6 class="align-self-center my-auto">
              {{ item.name }}<br>
              <small>{{ item.email }}</small>
            </h6>
          </b-media-body>
        </b-media>
        <div class="d-flex align-items-center">
          <span class="font-weight-bold text-body-heading mr-1">
            {{ item.total }}
          </span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import moment from 'moment'
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BMedia, BMediaAside, BMediaBody, BImg, BDropdown, BDropdownItem,
  BAvatar, BSpinner,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
/* eslint-disable global-require */
const $trackBgColor = '#e9ecef'
export default {
  name: 'TopSubscribers',
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BMediaAside,
    BMediaBody,
    BImg,
    BDropdown,
    BDropdownItem,
    VueApexCharts,
    BAvatar,
    BSpinner,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      currentYear: moment().format('Y'),
    }
  },
  created() {

  },
}
</script>
