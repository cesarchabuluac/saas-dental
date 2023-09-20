// import { inject } from 'vue'

// Full Calendar Plugins
import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
// import momentTimezone from "moment-timezone";
import moment from "moment";
import { toMoment, toMomentDuration } from '@fullcalendar/moment'; // only for formatting
import momentTimezonePlugin from '@fullcalendar/moment-timezone';

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import Swal from "sweetalert2";
import _ from 'lodash'
import { ref, computed, watch, onMounted } from "@vue/composition-api";
import store from "@/store";
import router from "@/router";

// Providers
import AppointmentProvider from "@/providers/Appointments";

const AppointmentResource = new AppointmentProvider();

export default function userCalendar() {
    // Use toast
    const toast = useToast();

    // ------------------------------------------------
    // refCalendar
    // ------------------------------------------------
    const refCalendar = ref(null);

    const refLoading = ref(false);

    // ------------------------------------------------
    // calendarApi
    // ------------------------------------------------
    let calendarApi = null;

    onMounted(async () => {
        refLoading.value = true
        calendarApi = await refCalendar.value.getApi();
        refLoading.value = false
    });

    // ------------------------------------------------
    // calendars
    // ------------------------------------------------
    const calendarsColor = {
        confirmed: "success",
        canceled: "danger",
        pending: "warning",
        assisted: "info",
        unassisted: "dark",
    };

    // ------------------------------------------------
    // event
    // ------------------------------------------------
    const blankEvent = {
        title: "",
        start: "",
        end: "",
        allDay: false,
        url: "",
        extendedProps: {
            calendar: "",
            patient: {},
            location: "",
            description: "",
            professional: "",
            doctor: {
                has_media: false,
                media: [],
            }
        },
    };
    const event = ref(JSON.parse(JSON.stringify(blankEvent)));
    const clearEventData = () => {
        event.value = JSON.parse(JSON.stringify(blankEvent));
    };

    // *===========================================================================---*
    // *--------- Calendar API Function/Utils --------------------------------------------*
    // Template Future Update: We might move this utils function in its own file
    // *===========================================================================---*

    // ------------------------------------------------
    // (UI) addEventInCalendar
    // ? This is useless because this just add event in calendar and not in our data
    // * If we try to call it on new event then callback & try to toggle from calendar we get two events => One from UI and one from data
    // ------------------------------------------------
    const addEventInCalendar = (eventData) => {
        refLoading.value = true
        calendarApi.addEvent(eventData);
        refLoading.value = false
    };

    // ------------------------------------------------
    // (UI) updateEventInCalendar
    // ------------------------------------------------
    const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
        toast({
            component: ToastificationContent,
            props: {
                title: "Event Updated",
                icon: "CheckIcon",
                variant: "success",
            },
        });

        const existingEvent = calendarApi.getEventById(updatedEventData.id);

        // --- Set event properties except date related ----- //
        // ? Docs: https://fullcalendar.io/docs/Event-setProp
        // dateRelatedProps => ['start', 'end', 'allDay']
        for (let index = 0; index < propsToUpdate.length; index++) {
            const propName = propsToUpdate[index];
            existingEvent.setProp(propName, updatedEventData[propName]);
        }

        // --- Set date related props ----- //
        // ? Docs: https://fullcalendar.io/docs/Event-setDates
        existingEvent.setDates(updatedEventData.start, updatedEventData.end, {
            allDay: updatedEventData.allDay,
        });

        // --- Set event's extendedProps ----- //
        // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
        for (let index = 0; index < extendedPropsToUpdate.length; index++) {
            const propName = extendedPropsToUpdate[index];
            existingEvent.setExtendedProp(
                propName,
                updatedEventData.extendedProps[propName]
            );
        }
    };

    // ------------------------------------------------
    // (UI) removeEventInCalendar
    // ------------------------------------------------
    const removeEventInCalendar = (data) => {
        refLoading.value = true
        toast({
            component: ToastificationContent,
            props: {
                title: data.message,
                icon: "TrashIcon",
                variant: "danger",
            },
        });
        calendarApi.getEventById(data.data.id).remove();
        refLoading.value = false
    };

    // ------------------------------------------------
    // grabEventDataFromEventApi
    // ? It will return just event data from fullCalendar's EventApi which is not required for event mutations and other tasks
    // ! You need to update below function as per your extendedProps
    // ------------------------------------------------
    const grabEventDataFromEventApi = (eventApi) => {
        const avatar = require("@/assets/images/avatar_default.png");
        // const {id, title, start, end, color, extendedProps: {date, calendar, location, intern_observation, duration, disabled, }, allDay, } = eventApi;
        return eventApi;
        //{id, title, start, end, color, extendedProps: {date, calendar, location, intern_observation, duration, disabled, }, allDay,};
    };

    // ------------------------------------------------
    // addEvent
    // ------------------------------------------------
    const addEvent = async (eventData) => {
        try {
            refLoading.value = true
            const { data } = await store.dispatch("calendar/addEvent", { event: eventData, });
            refLoading.value = false
            if (data.success) {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message,
                        icon: "CheckIcon",
                        variant: "danger",
                    },
                });

                refetchEvents();
            } else {
                refLoading.value = false
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message,
                        icon: "AlertTriangleIcon",
                        variant: "danger",
                    },
                });
            }
        } catch (err) {
            refLoading.value = false
            toast({
                component: ToastificationContent,
                props: {
                    title: "Error creating calendar events",
                    icon: "AlertTriangleIcon",
                    variant: "danger",
                },
            });
        }
    };

    // ------------------------------------------------
    // updateEvent
    // ------------------------------------------------
    const updateEvent = async (eventData) => {

        try {
            refLoading.value = true
            const { data } = await store.dispatch("calendar/updateEvent", { event: eventData, });
            refLoading.value = false
            if (data.success) {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message,
                        icon: "CheckIcon",
                        variant: "danger",
                    },
                });
                refetchEvents();
                // refCalendar.value.getApi();
            } else {
                refLoading.value = false
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message,
                        icon: "AlertTriangleIcon",
                        variant: "danger",
                    },
                });
            }
        } catch (err) {
            refLoading.value = false
            toast({
                component: ToastificationContent,
                props: {
                    title: "Error updating calendar events",
                    icon: "AlertTriangleIcon",
                    variant: "danger",
                },
            });
        }
    };

    // ------------------------------------------------
    // removeEvent
    // ------------------------------------------------
    const removeEvent = async () => {
        refLoading.value = true
        const eventId = event.value.id;
        const { data } = await store.dispatch("calendar/removeEvent", { id: eventId, });
        refLoading.value = false
        if (data.success) {
            removeEventInCalendar(data);
        } else {
            refLoading.value = false
            toast({
                component: ToastificationContent,
                props: {
                    title: data.message,
                    icon: "AlertTriangleIcon",
                    variant: "danger",
                },
            });
        }
    };

    const currentDate = computed(
        () => store.state.calendar.selectedCurrentDate
    )


    // ------------------------------------------------
    // refetchEvents
    // ------------------------------------------------
    const refetchEvents = (isFetch = false) => {
        refLoading.value = true
        if (isFetch) {
            _.debounce(function () {
                calendarApi.refetchEvents();
            }, 500)
        } else {
            const firstDate = store.state.calendar.selectedCurrentDate
            const secondDate = store.state.calendar.selectedDates.start
            if (firstDate && secondDate) {
                if (firstDate.slice(0, 10) != secondDate.slice(0, 10)) {
                    calendarApi.gotoDate(store.state.calendar.selectedCurrentDate)
                } else {
                    _.debounce(function () {
                        calendarApi.refetchEvents();
                    }, 100)
                }
            }
        }
        refLoading.value = false
    };

    // ------------------------------------------------
    // selectedCalendars
    // ------------------------------------------------
    const selectedCalendars = computed(
        () => store.state.calendar.selectedCalendars
    );

    // ------------------------------------------------
    // selectedProfessionals
    // ------------------------------------------------
    const selectedProfessional = computed(
        () => store.state.calendar.selectedProfessional
    );


    watch([selectedProfessional], (value) => {
        refLoading.value = true
        refetchEvents(true);
    });

    watch([currentDate], () => {
        refetchEvents(false)
    })

    watch([selectedCalendars], () => {
        refetchEvents(true);
    })

    // --------------------------------------------------------------------------------------------------
    // AXIOS: fetchEvents
    // * This will be called by fullCalendar to fetch events. Also this can be used to refetch events.
    // --------------------------------------------------------------------------------------------------
    const fetchEvents = async (info, successCallback) => {
        // If there's no info => Don't make useless API call
        if (!info) return false;

        store.commit("calendar/SET_SELECTED_DATES", {
            start: info.startStr,
            end: info.endStr,
        });

        store.commit("calendar/SET_SELECTED_CURRENT_DATE", info.startStr)


        // if (!selectedProfessional.value.id) return false

        // Fetch Events from API endpoint
        try {
            refLoading.value = true
            const { data } = await store.dispatch("calendar/fetchEvents", {
                calendars: {
                    calendar: selectedCalendars.value,
                    profesional: selectedProfessional.value.id,
                },

            });
            refLoading.value = false
            if (data.success) {
                successCallback(data.data);
            } else {
                refLoading.value = false
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message,
                        icon: "AlertTriangleIcon",
                        variant: "danger",
                    },
                });
            }
        } catch (error) {
            refLoading.value = false
            toast({
                component: ToastificationContent,
                props: {
                    title: "Error fetching calendar events",
                    icon: "AlertTriangleIcon",
                    variant: "danger",
                },
            });
        }
    };

    const fetchAvailable = async (date) => {
        const query = {
            date: date,
            user_id: store.state.calendar.selectedProfessional.id,
        }
        try {
            const { data } = await AppointmentResource.available(query);
            if (data.success) {
                const params = {
                    date,
                }
                router.push({ name: 'appointment-add', params })

            } else {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: data.message,
                        icon: "AlertTriangleIcon",
                        variant: "danger",
                    },
                });
            }

        } catch (e) {
            if (e.response.status === 422) {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: this.getFirstValidationError(e.response.data.errors),
                        icon: "AlertTriangleIcon",
                        variant: "danger",
                    },
                });
            } else {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: e.message,
                        icon: "AlertTriangleIcon",
                        variant: "danger",
                    },
                });
            }
        }
    }

    const canAccess = (name) => {
        const permission = { ...store.state.auth.permission }
        return _.find(permission, (p) => p === name) ? true : false
    }

    const printMe = async () => {
        const { data } = await AppointmentResource.printMe()
        console.log(data)
    }

    const  doctorSchedule =  [  // Ejemplo de horario de trabajo del doctor
        { start: '2023-09-11T08:00:00', end: '2023-09-11T12:00:00' },
        { start: '2023-09-11T13:00:00', end: '2023-09-11T22:00:00' }
        // Agrega más eventos para el horario de trabajo del doctor
    ];

    const interval = store.state.auth.setting['scheduled_appointment_interval'] || 15; // Intervalo en minutos
    const hours = Math.floor(interval / 60); // Obtenemos las horas (15 minutos = 0 horas)
    const minutes = interval % 60; // Obtenemos los minutos (15 minutos)
    const formattedInterval = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
    const timezone = store.state.auth.setting['timezone'] || window._setting.timezone
    const language = store.state.auth.setting['language'] || 'es'

    // ------------------------------------------------------------------------
    // calendarOptions
    // * This isn't considered in UI because this is the core of calendar app
    // ------------------------------------------------------------------------
    const calendarOptions = ref({
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, momentTimezonePlugin],
        locale: esLocale, //language,
        timeZone: timezone,
        initialView: "timeGridDay",
        headerToolbar: {
            center: "title",
            start: "sidebarToggle, prev,next, today",
            end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },
        fixedWeekCount: true, // Desactivar la opción fixedWeekCount
        allDaySlot: false,
        slotDuration: `${formattedInterval}`,
        slotLabelInterval: `${formattedInterval}`,
        slotMinTime: store.state.auth.setting['schedule_start_time'] || "09:00:00",
        slotMaxTime: store.state.auth.setting['schedule_end_time'] || "22:00:00",
        // nextDayThreshold: '09:00:00',
        nowIndicator: true,
        selectHelper: true,
        eventLimit: false, // allow "more" link when too many events
        events: fetchEvents,
        eventSources: [
            // Puedes tener múltiples fuentes de eventos, en este caso solo una desde tu API
            {
                // events: fetchEvents,
            },
        ],


        /* Enable dragging and resizing event ? Docs: https://fullcalendar.io/docs/editable  */
        editable: true,

        /* Enable resizing event from start ? Docs: https://fullcalendar.io/docs/eventResizableFromStart */
        eventResizableFromStart: true,

        /* Automatically scroll the scroll-containers during event drag-and-drop and date selecting ? Docs: https://fullcalendar.io/docs/dragScroll */
        dragScroll: true,

        /*Max number of events within a given day ? Docs: https://fullcalendar.io/docs/dayMaxEvents */
        dayMaxEvents: 2,

        /*Determines if day names and week names are clickable ? Docs: https://fullcalendar.io/docs/navLinks  */
        navLinks: true,

        eventClassNames({ event: calendarEvent }) {
            // console.log(calendarEvent._def)
            const colorName =
                calendarsColor[calendarEvent._def.extendedProps.calendar];
            return [
                // Background Color
                `bg-${colorName}`,
            ];
            // return calendarEvent._def.extendedProps.color;

        },
        eventClick({ event: clickedEvent }) {
            // * Only grab required field otherwise it goes in infinity loop
            // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
            event.value = grabEventDataFromEventApi(clickedEvent);
            // console.log(event.value.extendedProps)
            isEventHandlerSidebarActive.value = true;
        },

        customButtons: {
            sidebarToggle: {
                // --- This dummy text actual icon rendering is handled using SCSS ----- //
                text: "sidebar",
                click() {
                    isCalendarOverlaySidebarActive.value =
                        !isCalendarOverlaySidebarActive.value;
                },
            }
        },

        dateClick(info) {
            /*
        ! Vue3 Change
        Using Vue.set isn't working for now so we will try to check reactivity in Vue 3 as it can handle this automatically
        ```
        event.value.start = info.date
        ```
      */

            event.value = JSON.parse(JSON.stringify(Object.assign(event.value, { start: info.date })));

            console.log(store.state.calendar.selectedProfessional.id)
            //
            return



            // isEventHandlerSidebarActive.value = true;
            // const m = toMoment(info.date, calendarApi); // calendar is required
            if (store.state.auth.user.roles[0].id !== 4) {
                // store.commit("calendar/SET_SELECTED_CURRENT_DATE", m.format('YYYY-MM-DD H:mm'));
                // const formattedDate = moment(event.value.start).format('YYYY-MM-DD hh:mm');
                // console.log(formattedDate)
                // const startDate = event.value.start
                // const startDateMoment = moment.tz(startDate, 'YYYY-MM-DDTHH:mm:ss', timezone);
                // const startAt = startDateMoment.format('YYYY-MM-DD HH:mm')
                const startDate = moment.tz(event.value.start, 'YYYY-MM-DDTHH:mm:ss', timezone).format('DD/MM/YYYY HH:mm');
                fetchAvailable(startDate)
            }

        },

        /*
      Handle event drop (Also include dragged event)
      ? Docs: https://fullcalendar.io/docs/eventDrop
      ? We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
    */
        eventDrop({ event: droppedEvent }) {
            updateEvent(grabEventDataFromEventApi(droppedEvent));
        },

        //Change event content
        eventContent: function (arg, createElement) {
            if (arg.view.type === "listMonth" || arg.view.type === "timeGridDay") {
                const event = arg.event.extendedProps;
                const info = `<b> Tel.: </b> ${event.cellphone} <b> OI: </b> ${event.intern_observation}`;
                const customHtml =
                    arg.view.type === "timeGridDay" ? `${arg.event.title}` : `${arg.event.title}`;

                if (store.state.auth.user.roles[0].id === 4) {
                    return { html: `<b>${arg.event.title}</b> <b> OI: </b> ${event.intern_observation}` };
                }
                return { html: customHtml + " <br> " + info };
            }
        },
        eventDidMount: function (info) {
            // console.error(info)
        },

        /*
      Handle event resize
      ? Docs: https://fullcalendar.io/docs/eventResize
    */
        eventResize({ event: resizedEvent }) {
            updateEvent(grabEventDataFromEventApi(resizedEvent));
        },

        // Get direction from app state (store)
        direction: computed(() =>
            store.state.appConfig.isRTL ? "rtl" : "ltr"
        ),
        rerenderDelay: 350,
    });

    // ------------------------------------------------------------------------

    // *===============================================---*
    // *--------- UI ---------------------------------------*
    // *===============================================---*

    const isEventHandlerSidebarActive = ref(false);

    const isCalendarOverlaySidebarActive = ref(false);

    return {
        refLoading,
        refCalendar,
        isCalendarOverlaySidebarActive,
        calendarOptions,
        event,
        clearEventData,
        addEvent,
        updateEvent,
        removeEvent,
        refetchEvents,
        fetchEvents,
        currentDate,

        // ----- UI ----- //
        isEventHandlerSidebarActive,
        printMe,
    };
}