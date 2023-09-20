<template>
  <div class="sidebar-wrapper d-flex justify-content-between flex-column flex-grow-1">
    <div class="p-2">
      <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" aria-controls="sidebar-add-new-event"
        :aria-expanded="String(isEventHandlerSidebarActive)" variant="primary" block
        @click="$emit('update:isEventHandlerSidebarActive', true)">
        Add Event
      </b-button>

      <!-- Professionals -->
      <div class="mt-3">
        <b-form-group :label="$t('appointments.professional')" label-for="add-guests">
          <v-select v-model="selectedProfessional" :options="professionals" label="name"
            input-id="add-professional" :clearable="false">
          </v-select>
        </b-form-group>
      </div>

      <div class="mt-3">
        <h5 class="app-label section-label mb-1">
          <span class="align-middle">Calendars</span>
        </h5>
        <b-form-checkbox v-model="checkAll" class="mb-1">
          View All
        </b-form-checkbox>
        <b-form-group>
          <b-form-checkbox-group v-model="selectedCalendars" name="event-filter" stacked>
            <b-form-checkbox v-for="item in calendarOptions" :key="item.label" name="event-filter" :value="item.label"
              class="mb-1" :class="`custom-control-${item.color}`">
              {{ item.label }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </div>
    </div>
    <b-img :src="require('@/assets/images/pages/calendar-illustration.png')" />
  </div>
</template>

<script>
import {
  BButton, BFormGroup, BFormCheckboxGroup, BFormCheckbox, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from "vue-select";
import { ref, computed, watch, onMounted } from "@vue/composition-api";
import useCalendarSidebar from './useCalendarSidebar'

export default {
  directives: {
    Ripple,
  },
  components: {
    BButton,
    BImg,
    BFormCheckbox,
    BFormGroup,
    BFormCheckboxGroup,
    vSelect,
  },
  props: {
    isEventHandlerSidebarActive: {
      type: Boolean,
      require: true,
    },
  },
  setup() {
    const {
      calendarOptions,
      selectedCalendars,
      checkAll,
      selectedProfessional,
      professionals,
    } = useCalendarSidebar()

    const isProfessional = computed(
      () => store.state.auth.user.roles[0].id === 4
    );


    return {
      calendarOptions,
      selectedCalendars,
      checkAll,
      professionals,
      isProfessional,
      selectedProfessional,
    }
  },
}
</script>

<style></style>
