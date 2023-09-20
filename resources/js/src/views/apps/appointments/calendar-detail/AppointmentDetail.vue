<template>
    <div>
        <b-modal id="modal-center" ref="info-modal" centered :title="`${$t('patients.patient')}: ${eventLocal.title}`"
            :visible="isEventHandlerSidebarActive" @hidden="$emit('update:is-event-handler-sidebar-active', false)"
            :size="isAdministrator ? 'lg' : 'sm'" hide-footer>
            <b-row>
                <b-col cols="12" :lg="isAdministrator ? '8' : '12'" md="12">
                    <b-card no-body class="card-developer-meetup">
                        <div class="bg-light-primary rounded-top text-center">
                            <b-img :src="require('@/assets/images/illustration/marketing.svg')" alt="Meeting Pic"
                                height="170" />
                        </div>

                        <b-card-body>
                            <!-- metting header -->
                            <div class="meetup-header d-flex align-items-center">
                                <div class="meetup-day">
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
                                        {{ eventLocal.extendedProps.folio }}
                                    </b-card-title>
                                    <b-card-text class="mb-0">
                                        {{ t('appointments.observations') }}: <small>{{
                                            eventLocal.extendedProps.intern_observation }}</small>
                                    </b-card-text>
                                </div>
                            </div>

                            <!-- media -->
                            <b-media no-body>
                                <b-media-aside class="mr-1">
                                    <b-avatar rounded variant="light-primary" size="34">
                                        <feather-icon icon="CalendarIcon" size="18" />
                                    </b-avatar>
                                </b-media-aside>
                                <b-media-body>
                                    <h6 class="mb-0 text-capitalize">
                                        {{ dateFormat(eventLocal.extendedProps.date, 'MMM D YYYY H:mm a') }}
                                    </h6>
                                    <small class="text-uppercase">{{ dateFormat(eventLocal.extendedProps.start_at, 'H:mm a')
                                    }} a {{ dateFormat(eventLocal.extendedProps.end_at, 'H:mm a') }}</small>
                                </b-media-body>
                            </b-media>

                            <b-media no-body>
                                <b-media-aside class="mr-1">
                                    <b-avatar rounded variant="light-primary" size="34">
                                        <feather-icon icon="InfoIcon" size="18" />
                                    </b-avatar>
                                </b-media-aside>
                                <b-media-body>
                                    <h6 class="mb-0 text-capitalize">
                                        {{ $t('appointments.state') }}
                                    </h6>
                                    <small><b-badge
                                            :variant="`light-${resolveStateAppointmentColor(eventLocal.extendedProps.state)}`">{{
                                                resolveStateAppointment(eventLocal.extendedProps.state) }}</b-badge></small>
                                </b-media-body>
                            </b-media>

                            <!-- avatar group -->
                            <b-avatar-group class="mt-2 pt-50">
                                <b-avatar v-b-tooltip.hover.bottom="eventLocal.extendedProps.doctor.name"
                                    :src="eventLocal.extendedProps.doctor.has_media ? eventLocal.extendedProps.doctor.media[0].thumb : null"
                                    class="pull-up" :text="avatarText(eventLocal.extendedProps.doctor.name)" />
                                <h6 class="align-self-center cursor-pointer ml-1 mb-0">
                                    <small>{{ $t('appointments.doctor_will_assist_you').replace(':doctor',
                                        eventLocal.extendedProps.doctor.name) }}</small>
                                </h6>
                            </b-avatar-group>

                            <div v-if="!isDoctor" class="demo-inline-spacing mt-1">
                                <b-button :disabled="!youCanConfirm"
                                    @click="changeStatus(eventLocal.extendedProps, 'confirmed')"
                                    v-if="eventLocal.extendedProps.calendar === 'pending'"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-success">
                                    <feather-icon icon="CheckIcon" size="16" />
                                    {{ $t('button_confirm') }}
                                </b-button>

                                <b-button v-if="eventLocal.extendedProps.calendar !== 'canceled'"
                                    @click="changeStatus(eventLocal.extendedProps, 'canceled')"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-danger">
                                    <feather-icon icon="XIcon" size="16" />
                                    {{ $t('button_cancel') }}
                                </b-button>
                            </div>

                            <div v-if="!isDoctor" class="demo-inline-spacing mt-1">
                                <b-button v-if="eventLocal.extendedProps.calendar !== 'canceled'"
                                    @click="$router.push({ name: 'appointment-edit', params: { id: eventLocal.extendedProps.appointment_id } })"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary">
                                    <feather-icon icon="EditIcon" size="16" />
                                    {{ $t('button_edit') }}
                                </b-button>

                                <b-button v-if="eventLocal.extendedProps.calendar !== 'canceled'"
                                    @click="sendWhatsapp(eventLocal.extendedProps)"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning">
                                    <feather-icon icon="BellIcon" size="16" />
                                    {{ $t('button_notify') }}
                                </b-button>

                                <b-button v-if="isAdministrator"
                                    @click="$router.push({ name: 'apps-patients-view', params: { id: eventLocal.extendedProps.patient_id } })"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="secondary">
                                    <feather-icon icon="EyeIcon" size="16" />
                                    {{ $t('patients.patient') }}
                                </b-button>
                            </div>
                            <div v-else class="mt-3">
                                <b-button v-if="canAccess('patients.show')"
                                    @click="$router.push({ name: 'apps-patients-view', params: { id: eventLocal.extendedProps.patient_id } })"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary">
                                    <feather-icon icon="EyeIcon" size="16" />
                                    {{ $t('patients.detail.title') }}
                                </b-button>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col v-if="isAdministrator" cols="12" lg="4" md="12">
                    <b-card class="card-code">
                        <h6 class="text-center">{{ $t('appointments.dating_timeline') }}</h6>
                        <app-timeline class="mt-2">
                            <app-timeline-item v-for="(item, index) in eventLocal.extendedProps.logs" :key="index">
                                <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                    <small class="text-muted">{{ dateTimeFormat(item.created_at) }}</small>
                                </div>
                                <small>{{ item.comments }}</small>
                                <b-media class="mt-1">
                                    <template #aside>
                                        <b-avatar size="24" :src="item.user.has_media ? item.user.media[0].thumb : null"
                                            :text="avatarText(item.user.name)" />
                                    </template>
                                    <small>{{ item.user.name }}</small>
                                </b-media>
                            </app-timeline-item>
                        </app-timeline>
                    </b-card>
                </b-col>
            </b-row>

        </b-modal>
    </div>
</template>

<script>
import moment from "moment";
import momentTimezone from 'moment-timezone'
import Swal from "sweetalert2";
import "animate.css";
import {
    BCard, BCardText, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown,
    BDropdownItem, BPagination, BTooltip, BImg, VBTooltip, BInputGroup, BInputGroupPrepend, BModal, VBModal,
    BOverlay, BSpinner, BListGroup, BListGroupItem, VBToggle,
    BCardBody, BCardTitle, BMediaAside, BAvatarGroup, BMediaBody,
    BAlert,
} from 'bootstrap-vue'
import Ripple from "vue-ripple-directive";
import { ref, computed, toRefs, onMounted } from "@vue/composition-api";
import store from "@/store";
import router from "@/router";
import { useUtils as useI18nUtils } from '@core/libs/i18n'
import useCalendarEventHandler from "../calendar-event-handler/useCalendarEventHandler";
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'

import AppointmentProvider from "@/providers/Appointments";
const AppointmentResource = new AppointmentProvider();

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
    name: 'CalendarAppointmentDetail',
    components: {
        BCard,
        BCardText,
        BRow,
        BCol,
        BFormInput,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BTooltip,
        BImg,
        VBTooltip,
        VBToggle,
        BInputGroup, BInputGroupPrepend,
        BModal, VBModal,
        BOverlay, BSpinner,
        BListGroup, BListGroupItem,
        BCardBody, BCardTitle, BMediaAside, BAvatarGroup, BMediaBody,
        BAlert,
        //
        AppTimeline,
        AppTimelineItem,
    },
    directives: {
        'b-toggle': VBToggle,
        'b-tooltip': VBTooltip,
        Ripple,
    },
    model: {
        prop: "isEventHandlerSidebarActive",
        event: "update:is-event-handler-sidebar-active",
    },
    props: {
        isEventHandlerSidebarActive: {
            type: Boolean,
            required: true,
        },
        event: {
            type: Object,
            required: true,
        },
    },
    setup(props, { emit }) {

        // Use toast
        const toast = useToast();
        const { t } = useI18nUtils()

        const clearFormData = ref(null);
        const isAdministrator = ref(false)
        const isDoctor = ref(false)
        const calendarOptions = {
            'pending': t('appointments.status.pending'),
            'confirmed': t('appointments.status.confirmed'),
            'canceled': t('appointments.status.cancelled'),
            'assisted': t('appointments.status.assisted'),
            'unassisted': t('appointments.status.unassisted'),
        }

        const swal_title = t('appointments.change_status_title')
        const swal_html = t('appointments.change_status_description')
        const swal_accept = t('yes_continue')
        const swal_cancel = t('cancel')


        const {
            eventLocal,
            resetEventLocal,

            // UI
            onSubmit,
        } = useCalendarEventHandler(toRefs(props), clearFormData, emit);

        clearFormData.value = null
        isAdministrator.value = (store.state.auth.user.roles[0].id === 1 || store.state.auth.user.roles[0].id === 2) ? true : false
        isDoctor.value = store.state.auth.user.roles[0].id === 4 ? true : false

        const youCanConfirm = computed(() => {
            moment.locale(store.state.auth.setting['language'])
            moment.tz.setDefault(store.state.auth.setting['timezone'])
            const currentDate = moment().tz(store.state.auth.setting['timezone']);
            const eventDate = moment.tz(props.event.extendedProps.date, store.state.auth.setting['timezone'])
            console.log(!!currentDate.isSameOrBefore(eventDate))
            return currentDate.isSameOrBefore(eventDate)
        })

        onMounted(() => {

        })

        const sendWhatsapp = (event => {
            window.open(
                `http://wa.me/${event.mobile}?text=${event.message}`
            )
        })

        const changeStatus = (event, status) => {

            let statusText = calendarOptions[status] || 'pending';

            Swal.fire({
                title: swal_title.replace(':state', statusText),
                html: swal_html,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: swal_accept,
                cancelButtonText: swal_cancel,
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-outline-danger ml-1",
                },
                showClass: {
                    popup: "animate__animated animate__flipInX",
                },
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                preConfirm: async () => {

                    const payload = {
                        id: event.appointment_id,
                        user_id: event.user_id,
                        patient_id: event.patient_id,
                        branch_office_id: event.branch_office_id,
                        date: moment(event.date).format('DD/MM/YYYY H:mm'),
                        state: status,
                        duration: event.duration,
                    }

                    try {
                        const { data } = await AppointmentResource.update(event.appointment_id, payload)
                        if (data.success) {
                            props.event._context.calendarApi.refetchEvents();                            
                            emit('update:is-event-handler-sidebar-active', false)
                            toast({
                                component: ToastificationContent,
                                props: {
                                    title: data.message,
                                    icon: "CheckIcon",
                                    variant: "success",
                                },
                            });
                        } else {
                            Swal.showValidationMessage(data.message)
                        }
                    } catch (error) {
                        Swal.showValidationMessage(`Error marking the appointment, please try again.`)
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            })
        }



        return {
            eventLocal,
            clearFormData,
            sendWhatsapp,
            changeStatus,
            isAdministrator,
            isDoctor,
            youCanConfirm,

            // i18n
            t,
        }
    }
};
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import '~@resources/scss/base/bootstrap-extended/variables';
@import 'bootstrap/scss/variables';
@import '~@resources/scss/base/components/variables-dark';

.card-code {
    pre[class*='language-'] {
        margin: 0;
        max-height: 350px;
        border-radius: 0.5rem;
    }

    overflow-y: auto;
    height: 560px;

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background: #2d2d2d;
        border-radius: 100%;

        .dark-layout & {
            background-color: $theme-dark-body-bg !important;
        }
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background: rgba(241, 241, 241, .4);
    }

    /* Handle on hover */
    // ::-webkit-scrollbar-thumb:hover {
    // }

    ::-webkit-scrollbar-corner {
        display: none;
    }
}

.code-toggler {
    border-bottom: 1px solid transparent;

    &[aria-expanded='false'] {
        border-bottom-color: $primary;
    }
}

// HTML
// .card {
//   .card-header .heading-elements {
//     position: static;
//     background: red;
//   }
// }
</style>
