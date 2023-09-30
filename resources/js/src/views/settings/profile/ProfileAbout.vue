<template>
  <b-card no-body>
     <b-row>
        <b-col cols="12" md="12">
            <b-card no-body class="card-developer-meetup">
                <div class="bg-light-primary rounded-top text-center">
                    <b-img :src="require('@/assets/images/illustration/marketing.svg')" alt="Meeting Pic"
                        height="170" />
                </div>
                 <b-card-body>
                    <!-- metting header -->
                    <div class="meetup-header d-flex align-items-center">
                          <div class="meetup-day ml-2 mt-2">
                              <h6 class="mb-0 text-uppercase">
                                  {{ $t('today') }}<br>
                                  {{ momentFormat(null, 'dddd') }}
                              </h6>
                              <h3 class="mb-0">
                                  {{ momentFormat(null, 'DD') }}
                              </h3>
                          </div>
                          <div class="my-auto">
                              <b-card-title class="mb-25">
                                  <h3>{{$t('user_schedules')}}</h3>
                              </b-card-title>
                          </div>
                    </div>

                    <!-- media -->
                    <b-media v-for="(item, index) in aboutData.schedules" :key="index" no-body>
                        <b-media-aside class="mr-1">
                            <b-avatar rounded variant="light-primary" size="34">
                                <feather-icon icon="CalendarIcon" size="18" />
                            </b-avatar>
                        </b-media-aside>
                        <b-media-body>
                            <h6 class="mb-0 text-capitalize">
                                {{ item.day }}
                            </h6>
                            <small class="text-uppercase">{{  item.start_time }} {{ $t('to')}} {{ item.end_time }}</small>
                        </b-media-body>
                    </b-media>
                 </b-card-body>
            </b-card>
        </b-col>
     </b-row>
    <!-- about -->
    <!-- <div v-for="(data, key, index) in aboutData" :key="data.title" :class="index ? 'mt-2' : ''">
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
    </div> -->
  </b-card>
</template>

<script>
import { BCard, BCardText, BCol, BRow, BImg, BMedia, BMediaAside, BMediaBody, 
BCardBody, BCardTitle, BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardText,
    BCol, BRow,
    BImg, BMedia, BMediaAside, BMediaBody,
    BCardBody, BCardTitle, BAvatar
  },
  props: {
    aboutData: {
      type: Object,
      default: () => { },
    },
  },
}
</script>