import axios from '@axios'
import moment from "moment";

// Providers
import AppointmentProvider from "@/providers/Appointments";
import UserProvider from "@/providers/Users";

const AppointmentResource = new AppointmentProvider();
const UserResource = new UserProvider();

export default {
  namespaced: true,
  state: {
    calendarOptions: [
      {
        color: "warning",
        label: "pending",
      },
      {
        color: "success",
        label: "confirmed",
      },
      {
        color: "danger",
        label: "canceled",
      },
      {
        color: "primary",
        label: "assisted",
      },
      {
        color: "dark",
        label: "unassisted",
      },
    ],
    selectedCalendars: ["pending", "confirmed", "assisted", "unassisted", "canceled"],
    useProfessionals: [],
    selectedProfessional: {},
    selectedDates: {},
    selectedCurrentDate: null,
  },
  getters: {},
  mutations: {
    SET_SELECTED_EVENTS(state, val) {
      state.selectedCalendars = val
    },
    SET_SELECTED_PROFESSIONAL(state, val) {
      state.selectedProfessional = val;
    },
    SET_USE_PROFESSIONALS(state, val) {
      state.useProfessionals = val
    },
    SET_SELECTED_DATES(state, val) {
      state.selectedDates = val
    },
    SET_SELECTED_CURRENT_DATE(state, val) {
      state.selectedCurrentDate = val
    },
  },
  actions: {
    fetchProfessional() {
      return UserResource.index({
        criteria: "professionals",
      });
    },
    fetchEvents(ctx, { calendars, professional }) {
      // Fetch Events from API endpoint
      const date = moment().toDate();
      const nextDay = moment().add(1, "day").toDate();

      const query = {
        start: ctx.state.selectedDates ? ctx.state.selectedDates.start : date,
        end: ctx.state.selectedDates ? ctx.state.selectedDates.end : nextDay,
        state: calendars.join(","),
        professional: ctx.state.selectedProfessional.id
      };
      return AppointmentResource.getEvents(query);
    },
    addEvent(ctx, { event }) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/calendar/events', { event })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateEvent(ctx, { event }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/apps/calendar/events/${event.id}`, { event })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeEvent(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/calendar/events/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
