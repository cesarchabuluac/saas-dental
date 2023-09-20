import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment";
import createPersistedStore from 'vuex-persistedstate'
import * as CryptoJS from 'crypto-js'

// Providers
import AppointmentProvider from "@/providers/Appointments";
import UserProvider from "@/providers/Users";

const AppointmentResource = new AppointmentProvider();
const UserResource = new UserProvider();

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
            state.selectedCalendars = val;
        },
        SET_SELECTED_PATIENT(state, val) {
            state.selectedPatient = val;
        },
        SET_SELECTED_PROFESSIONAL(state, val) {
            state.selectedProfessional = val;
        },
        SET_SELECTED_DATES(state, val) {
            state.selectedDates = val
        },
        SET_SELECTED_CURRENT_DATE(state, val) {
            state.selectedCurrentDate = val
        },
        SET_USE_PROFESSIONALS(state, val) {
            state.useProfessionals = val
        }
    },
    actions: {
        fetchProfessional() {
            return UserResource.index({
                criteria: "professionals",
            });
        },
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
            return AppointmentResource.getEvents(query);
        },
        addEvent(ctx, { event }) {
            return AppointmentResource.save(event);
        },
        updateEvent(ctx, { event }) {
            return AppointmentResource.update(event.id, event);
        },
        removeEvent(ctx, { id }) {
            return AppointmentResource.destroy(id)
        },
        resetDatas({ commit }) {
            commit('SET_USE_PROFESSIONALS', [])
            commit('SET_SELECTED_CURRENT_DATE', null)
            commit('SET_SELECTED_DATES', {})
            commit('SET_SELECTED_PROFESSIONAL', {})
            commit('SET_SELECTED_PATIENT', {})
            // commit('SET_SELECTED_EVENTS', null)
        }
    },
};
