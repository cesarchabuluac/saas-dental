<template>
  <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
    <template #overlay>
      <div class="d-flex align-items-center">
        <b-spinner small type="grow" variant="secondary" />
        <b-spinner type="grow" variant="dark" />
        <b-spinner small type="grow" variant="secondary" />
      </div>
    </template>
    <b-card v-if="data" class="card-congratulation-medal">
      <h5>{{ $t('payments.dashboard_earnings') }}</h5>
      <b-card-text class="font-small-3">
        {{ $t('this_month') }} <span class="font-weight-bold">{{ currentDate('MMMM') }}</span>
      </b-card-text>
      <h3 class="mb-75 mt-2 pt-50">
        <b-link>{{ formatPrice(data.totalEarningCurrentMonth) }}</b-link>
      </h3>
      <p class="card-text text-muted font-small-2_">
        <span class="fw-bolder">{{ formatPrice(data.totalEarningLastMonth) }}</span><span>
          {{ $t('last_earnings') }}</span>
      </p>
      <b-img v-if="data.amountCurrentMonthEarning > 0" :src="require('@/assets/images/illustration/badge.svg')"
        class="congratulation-medal" alt="Earnings" />
      <br>
    </b-card>
  </b-overlay>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BLink, BButton, BImg, BOverlay, BSpinner,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    BRow, BCol,
    BCard,
    BCardText,
    BLink,
    BImg,
    BButton,
    BOverlay,
    BSpinner,
  },
  directives: {
    Ripple,
  },
  props: {
    data: {
      type: Object,
      default: () => { },
    },
    loading: {
      type: Boolean,
      required: true,
      default: () => false,
    }
  },
  methods: {
    kFormatter,
  },
}
</script>
