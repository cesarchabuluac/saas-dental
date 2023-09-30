<template>
  <div class="sidebar-wrapper d-flex justify-content-between flex-column flex-grow-1">
    <div class="p-2">
      <b-button v-if="canAccess('appointments.create')" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          aria-controls="sidebar-add-new-event" :aria-expanded="String(isEventHandlerSidebarActive)" variant="primary"
          block :to="{ name: 'appointments-add' }">
          {{ $t("appointments.add_event") }}
      </b-button>
      
      <div class="mt-3">
        <h5 class="app-label section-label mb-1">
          <span class="align-middle">{{ $t("appointments.state") }}</span>
        </h5>
        <b-form-checkbox v-model="checkAll" class="mb-1">
          {{ $t("appointments.all_state") }}
        </b-form-checkbox>
        <b-form-group>
          <b-form-checkbox-group v-model="selectedCalendars" name="event-filter" stacked>
             <b-form-checkbox v-for="item in calendarOptions" :key="item.label" name="event-filter"
                :value="item.label" class="mb-1" :class="`custom-control-${item.color}`">
                {{ $t(`appointments.state_${item.label}`) }}
              </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </div>

      <div class="mt-3">
        <b-col cols="12" md="3">
          <b-form-group>
            <flat-pickr mode="single" size="sm" ref="miniCalendar" v-model="selectedCurrentDate" class="d-none"
                :config="{ inline: true, dateFormat: 'Y-m-d' }" />
          </b-form-group>
        </b-col>
      </div>
    </div>
    <b-img :src="require('@/assets/images/pages/calendar-illustration.png')" />
  </div>
</template>

<script>
import {
  BButton, BFormGroup, BFormCheckboxGroup, BFormCheckbox, BImg, BCol
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import useCalendarSidebar from './useCalendarSidebar'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import store from '@/store'

export default {
  directives: {
    Ripple,
  },
  components: {
    BCol,
    BButton,
    BImg,
    BFormCheckbox,
    BFormGroup,
    BFormCheckboxGroup,
    flatPickr,
  },
  props: {
    isEventHandlerSidebarActive: {
      type: Boolean,
      require: true,
    },
  },
  created () {
    if (store.state.auth.setting['language'] === "es") {
      flatpickr.localize(Spanish);
    }
  },
  setup() {
    const {
      calendarOptions,
      selectedCalendars,
      checkAll,
      selectedCurrentDate,
    } = useCalendarSidebar()

    const changeDate = (val) => {
      if (val) {
        selectedCurrentDate.value = new Date(val).toISOString();
      }
    }

    return {
      calendarOptions,
      selectedCalendars,
      checkAll,

      changeDate,
      selectedCurrentDate,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@resources/scss/vue/libs/vue-flatpicker.scss';
</style>

<style>
/* Estilo CSS para el contenedor del calendario */
.mini-calendar {
  max-width: 300px; /* Establece un ancho máximo */
  margin: 0 auto; /* Centra horizontalmente */
}

/* Ajuste para dispositivos móviles */
@media (max-width: 768px) {
  .mini-calendar {
    max-width: 100%; /* Ocupa todo el ancho en dispositivos móviles */
  }
}
/* .flatpickr-calendar {
    background: transparent;
    opacity: 0;
    display: none;
    text-align: center;
    visibility: hidden;
    padding: 0;
    -webkit-animation: none;
    animation: none;
    direction: ltr;
    border: 0;
    font-size: 12px !important;
    line-height: 24px;
    border-radius: 5px;
    position: absolute;
    width: 249px !important;
    min-width: 249px !important;
    max-width: 249px !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    background: #fff;
    -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgb(0 0 0 / 8%);
    box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgb(0 0 0 / 8%); 
}*/

.dayContainer {
    /* padding: 0;
    outline: 0;
    text-align: left;
    width: 249px !important;
    min-width: 249px !important;
    max-width: 249px !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-transform: translate3d(0px, 0px, 0px);
    transform: translate3d(0px, 0px, 0px);
    opacity: 1; */
}

/* .flatpickr-current-month {
    font-size: 135%;
    line-height: inherit;
    font-weight: 300;
    color: inherit;
    position: absolute;
    left: 12.5%;
    padding: 7.48px 0 0 0;
    line-height: 1;
    height: 34px;
    display: inline-block;
    text-align: center;
    -webkit-transform: translate3d(0px, 0px, 0px);
    transform: translate3d(0px, 0px, 0px);
} */

/* .flatpickr-days {
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100% !important;
} */

/* .flatpickr-day {
    background: none;
    border: 1px solid transparent;
    border-radius: 150px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #393939;
    cursor: pointer;
    font-weight: 400;
    width: 14.2857143%;
    -webkit-flex-basis: 14.2857143%;
    -ms-flex-preferred-size: 14.2857143%;
    flex-basis: 14.2857143%;
    max-width: 39px !important;
    height: 30px !important;
    line-height: 30px !important;
    margin: 0;
    display: inline-block;
    position: relative;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
}

.flatpickr-calendar.inline {
    display: block;
    position: relative;
    top: -15px;
} */
</style>
