<template>
  <b-card>
    <!-- about -->
    <div v-for="(data, key, index) in aboutData" :key="data.title" :class="index ? 'mt-2' : ''">
      <h5 class="text-capitalize mb-75">
        {{ $t(`${key}`) }}
      </h5>
      <b-card-text v-if="key === 'joined'" class="text-capitalize">
        {{ data }}
      </b-card-text>
      <b-card-text v-else>
        {{ data }}
      </b-card-text>
      <p class="mt-2"></p>
    </div>
  </b-card>
</template>

<script>
import { BCard, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardText,
  },
  props: {
    aboutData: {
      type: Object,
      default: () => { },
    },
  },
}
</script>
