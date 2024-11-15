import store from '@/store'

import { computed, ref, onMounted } from '@vue/composition-api'

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default function useCalendarSidebar() {


  onMounted(async () => {
    const { data } = await UserResource.index({ criteria: "professionals", isCalendar: true, ignoreSchedules: false, });    
    store.commit('calendar/SET_USE_PROFESSIONALS', data)
    store.commit("calendar/SET_USE_PROFESSIONALS", data);
    const userRolesIds = store.getters['auth/getUser'].roles.map(role => role.id);    
    if (userRolesIds.includes(4)) { //Professional
      store.commit("calendar/SET_SELECTED_PROFESSIONAL", store.getters['auth/getUser']);
    } else {
      store.commit("calendar/SET_SELECTED_PROFESSIONAL", data[0]);
    }
  })

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

  const selectedCurrentDate = computed({
    get: () => store.state.calendar.selectedCurrentDate,
      set: (val) => {
          store.commit("calendar/SET_SELECTED_CURRENT_DATE", val);
      },
  })   

  return {
    calendarOptions,
    selectedCalendars,
    checkAll,
    selectedCurrentDate,
  }
}
