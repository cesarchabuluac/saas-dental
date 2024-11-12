<template>
  <b-card no-body>
    <b-card-body class="d-flex justify-content-between align-items-center">
      <div class="truncate">
        <h2 class="mb-25 font-weight-bolder" :class="size">
          {{ statistic }}
        </h2>
        <span>{{ statisticTitle }}</span><br>
        <span v-if="statisticText">{{ statisticText }}<br></span>
        <span v-if="statisticDescription">{{ statisticDescription }}</span>
      </div>
      <b-avatar v-if="icon" :variant="`light-${color}`" size="45">
        <feather-icon size="21" :icon="icon"/>
      </b-avatar>
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardBody, BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardBody,
    BAvatar,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    statistic: {
      type: [Number, String],
      required: true,
    },
    statisticTitle: {
      type: String,
      default: '',
    },
    statisticText: {
      type: String,
      default: '',
    },
    statisticDescription: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: () => 'h2',
    }
  },
}
</script>
