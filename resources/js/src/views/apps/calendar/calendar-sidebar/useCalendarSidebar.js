import _ from 'lodash'
import store from '@/store'

import { ref, computed, watch, onMounted } from '@vue/composition-api'

// Providers
import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default function useCalendarSidebar() {

  const professionals = ref([]);
  const isLoading = ref(false);
  const avatar = require("@/assets/images/avatar_default.png");

  onMounted(async () => {
    const existsProfessionals = store.state.calendar.useProfessionals.length;
    if (existsProfessionals <= 0) {

      //check if exists on vuex
      const doctors = store.state.auth.doctors
      if (doctors.length > 0) {
        professionals.value = doctors
        store.commit("calendar/SET_USE_PROFESSIONALS", doctors);
      } else {
        isLoading.value = true;
        const { data } = await UserResource.index({
          criteria: "professionals"
        });
        isLoading.value = false;
        professionals.value = data.data
        store.commit('auth/SET_DOCTORS', data.data)
        store.commit("calendar/SET_USE_PROFESSIONALS", data.data);
      }
    } else {
      professionals.value = store.state.calendar.useProfessionals;
    }

    if (store.state.auth.user.roles[0].id === 4) {
      store.commit("calendar/SET_SELECTED_PROFESSIONAL", store.state.auth.user);
    } else {
      if (_.isEmpty(store.state.calendar.selectedProfessional)) {
        store.commit("calendar/SET_SELECTED_PROFESSIONAL", professionals.value[0]);
      }
    }
  });


  // ------------------------------------------------
  // calendarOptions
  // ------------------------------------------------
  const calendarOptions = computed(() => store.state.calendar.calendarOptions)

  // ------------------------------------------------
  // selectedCalendars
  // ------------------------------------------------
  const selectedCalendars = computed({
    get: () => store.state.calendar.selectedCalendars,
    set: val => {
      store.commit('calendar/SET_SELECTED_EVENTS', val)
    },
  })

  // ------------------------------------------------
  // checkAll
  // ------------------------------------------------
  const checkAll = computed({
    /*
      GET: Return boolean `true` => if length of options matches length of selected filters => Length matches when all events are selected
      SET: If value is `true` => then add all available options in selected filters => Select All
           Else if => all filters are selected (by checking length of both array) => Empty Selected array  => Deselect All
    */
    get: () => selectedCalendars.value.length === calendarOptions.value.length,
    set: val => {
      if (val) {
        selectedCalendars.value = calendarOptions.value.map(i => i.label)
      } else if (selectedCalendars.value.length === calendarOptions.value.length) {
        selectedCalendars.value = []
      }
    },
  })

  // ------------------------------------------------
  // selectedProfessional
  // ------------------------------------------------
  const selectedProfessional = computed({
    get: () => store.state.calendar.selectedProfessional,
    set: (val) => {
      store.commit("calendar/SET_SELECTED_PROFESSIONAL", val);
    },
  });

  return {
    calendarOptions,
    selectedCalendars,
    checkAll,
    professionals,
    selectedProfessional
  }
}