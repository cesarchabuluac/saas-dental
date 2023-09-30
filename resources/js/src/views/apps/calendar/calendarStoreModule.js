import axios from '@axios'
import moment from "moment";
import createPersistedStore from 'vuex-persistedstate'
import * as CryptoJS from 'crypto-js'

// Providers
import AppointmentProvider from "@/providers/v2/Appointments";
const AppointmentResource = new AppointmentProvider();


export default {
  namespaced: true,
  plugins: [
    createPersistedStore({
      storage: {
        getItem: key => {
          const value = localStorage.getItem(key)
          if (value) {
            const bytes = CryptoJS.AES.decrypt(value, 'clave-secreta')
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
            return decryptedData
          }
          return null
        },
        setItem: (key, value) => {
          const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), 'clave-secreta').toString()
          localStorage.setItem(key, encryptedData)
        },
        removeItem: key => {
          localStorage.removeItem(key)
        },
      },
    }),
  ],
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
    useProfessionals: [],
    selectedCalendars: ["pending", "confirmed", "assisted", "unassisted", "canceled"],
    selectedPatient: {},
    selectedProfessional: {},
    selectedDates: {},
    selectedCurrentDate: null,
  },
  getters: {},
  mutations: {
    SET_SELECTED_EVENTS(state, val) {
      state.selectedCalendars = val
    },
    SET_SELECTED_DATES(state, val) {
      state.selectedDates = val
    },
    SET_SELECTED_PROFESSIONAL(state, val) {
      state.selectedProfessional = val;
    },
  },
  actions: {
    fetchEvents(ctx, { calendars }) {

      // Fetch Events from API endpoint
      const date = moment().toDate();
      const nextDay = moment().add(1, "day").toDate();

      const query = {
        start: ctx.state.selectedDates ? ctx.state.selectedDates.start : date,
        end: ctx.state.selectedDates ? ctx.state.selectedDates.end : nextDay,
        state: calendars.calendar.join(","),
        professional: calendars.profesional || ctx.state.selectedProfessional.id
      };
      return AppointmentResource.index(query);

      // return new Promise((resolve, reject) => {
      //   axios
      //     .get('/apps/calendar/events', {
      //       params: {
      //         calendars: calendars.join(','),
      //       },
      //     })
      //     .then(response => resolve(response))
      //     .catch(error => reject(error))
      // })
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
