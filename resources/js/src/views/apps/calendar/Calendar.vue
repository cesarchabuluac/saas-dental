<template>
	<b-overlay :show="isLoading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
		<!-- Next appoinmments -->
		<!-- <b-card> -->
		<!-- <b-row>
        <b-col md="12">
          <div class="d-flex align-content-center justify-content-between w-100">
							<b-input-group :disabled="isLoading" class="input-group-merge">
								<b-form-input autofocus v-model="searchQuery" @keyup.enter="searchNextAppointment"
									:placeholder="$t('appointments.input_next_search')" />
								<b-input-group-prepend>
									<b-button variant="primary"  @click="searchNextAppointment">
										<feather-icon icon="SearchIcon" /> <span class="d-none d-sm-inline">{{ $t('search')
										}}</span>
									</b-button>
								</b-input-group-prepend>
							</b-input-group>
						</div>
        </b-col>
      </b-row> -->
		<!-- </b-card> -->

		<div class="app-calendar mt-1 overflow-hidden border">
			<div class="row no-gutters">
				<!-- Sidebar -->
				<div class="col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column"
					:class="{ 'show': isCalendarOverlaySidebarActive }">
					<calendar-sidebar :is-event-handler-sidebar-active.sync="isEventHandlerSidebarActive" />
				</div>

				<!-- Calendar -->
				<div class="col position-relative">

					<div class="card shadow-none border-0 mb-0 rounded-0">
						<div class="card-header">
							<label>{{ $t("professional") }}</label>
							<div class="d-flex align-content-center justify-content-between w-100">
								<v-select class="w-100" :disabled="!isAdmin && !isDirector"
									v-model="selectedProfessional" :options="professionals" label="name"
									input-id="list-professional" :clearable="false"
									:placeholder="$t('appointments.search_doctor')" />								
							</div>
						</div>
						<div class="card-body pb-0">
							<full-calendar ref="refCalendar" :options="calendarOptions" class="full-calendar" />
						</div>
					</div>
				</div>

				<!-- Sidebar Overlay -->
				<div class="body-content-overlay" :class="{ 'show': isCalendarOverlaySidebarActive }"
					@click="isCalendarOverlaySidebarActive = false" />
				<calendar-event-handler :event="event" :clear-event-data="clearEventData" @remove-event="removeEvent"
					@add-event="addEvent" @update-event="updateEvent" :is-event-handler-sidebar-active="false" />

				<!-- Modal appointment detail -->
				<calendar-appointment-detail v-model="isEventHandlerSidebarActive" :event="event" @edit-appointment="editAppointment" />

				<!-- Modal Add Appointment -->
				<calendar-appointment-add v-model="isNewEventHandlerModalActive" :event="event"
					@add-appointment="addAppointment" />
			</div>
		</div>

		<!-- Modal Next Appointment -->
		<b-modal id="modal-center" ref="info-modal" centered :title="$t('appointments.modal_next_title')"
			:visible="activeModal" @hidden="activeModal = false" :ok-title="$t('accept')" ok-only>
			<div v-if="nextAppointments.length > 0">
				<app-timeline class="mt-2">
					<app-timeline-item v-for="(item, index) in nextAppointments" :key="index"
						:variant="resolveStateAppointmentColor(item.state ? item.state : 'primary')">
						<p><strong>{{ $t('appointments.appointment') }} {{ item.custom_date_diff_humans }}</strong>
							<small class="text-muted text-capitalize">{{ dateTimeFormat(item.date) }}</small></p>
						<div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
							<p>
								{{ item.full_name }}<br>
								<small class="text-secondary"><feather-icon icon="TerminalIcon" size="16" />{{
		item.document_type }}: {{ item.rut }}</small><br>
								<small class="text-secondary"><feather-icon icon="MailIcon" size="16" /> {{ item.email
									}}</small><br>
								<small class="text-secondary"><feather-icon icon="PhoneIcon" size="16" /> {{ item.phone
									}}</small><br>
								<small>
									{{ $t('appointments.state') }}:
									<b-badge
										:variant="`${resolveStateAppointmentColor(item.state)}`">{{ resolveStateAppointment(item.state)
										}}</b-badge>
								</small>
							</p>
						</div>
						<small>{{ $t('appointments.table_observations') }}: {{ item.intern_observation }}</small>
						<b-media class="mt-1">
							<template #aside>
								<b-avatar size="24" :src="null" :text="avatarText(item.name)" />
							</template>
							<small>{{ $t('appointments.doctor_will_assist_you').replace(':doctor', item.name) }}</small>
						</b-media>
					</app-timeline-item>
				</app-timeline>
			</div>
			<div v-else>
				<div v-if="!isLoading" class="d-flex w-100 justify-content-center">
					<h5 class="mb-1">
						{{ $t('appointments.modal_next_empty') }}
					</h5>
				</div>
			</div>
		</b-modal>
	</b-overlay>
</template>

<script>
import {
	BButton, BFormGroup, BFormCheckboxGroup, BFormCheckbox, BImg, BCol, BRow,
	BInputGroup, BInputGroupPrepend, BDropdown, BDropdownItem, BFormInput,
	BOverlay, BSpinner, BModal, VBModal, BCard, BMedia, BAvatar, BBadge,
} from 'bootstrap-vue'
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import FullCalendar from '@fullcalendar/vue'
import store from '@/store'
import { computed, onMounted, onUnmounted, ref, watch } from '@vue/composition-api'
import calendarStoreModule from './calendarStoreModule'
import CalendarSidebar from './calendar-sidebar/CalendarSidebar.vue'
import CalendarEventHandler from './calendar-event-handler/CalendarEventHandler.vue'
import CalendarAppointmentDetail from './calendar-detail/AppointmentDetail.vue'
import CalendarAppointmentAdd from './CalendarAppointmentAdd.vue'
import CalendarAppointmentEdit from './CalendarAppointmentEdit.vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'

import useCalendar from './useCalendar'

import BranchOfficeProvider from '@/providers/BranchOffices'
const BranchOfficeResource = new BranchOfficeProvider()

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

import PatientProvider from '@/providers/Patients'
const PatientResource = new PatientProvider()

export default {
	directives: {
		Ripple,
	},
	components: {
		BRow,
		BButton,
		BFormInput,
		BFormCheckboxGroup,
		BFormCheckbox,
		BInputGroup,
		BInputGroupPrepend,
		BDropdown,
		BDropdownItem,
		BImg,
		BCol,
		BFormGroup,
		BOverlay,
		BSpinner,
		BModal,
		VBModal,
		BCard,
		BMedia,
		BAvatar,
		BBadge,

		FullCalendar, // make the <FullCalendar> tag available
		CalendarSidebar,
		CalendarEventHandler,
		CalendarAppointmentDetail,
		CalendarAppointmentAdd,
		CalendarAppointmentEdit,
		AppTimeline,
		AppTimelineItem,

		vSelect,
	},
	setup() {
		const searchQuery = ref("")
		const nextAppointments = ref([])
		const activeModal = ref(false)
		const userRoles = store.getters['auth/getUser'].roles.map(role => role.id)
		const loading = ref(false)

		const CALENDAR_APP_STORE_MODULE_NAME = 'calendar'

		// Register module
		if (!store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.registerModule(CALENDAR_APP_STORE_MODULE_NAME, calendarStoreModule)

		// UnRegister on leave
		onUnmounted(() => {
			if (store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.unregisterModule(CALENDAR_APP_STORE_MODULE_NAME)
		})		

		const getBranch = async () => {

			if (store.state.calendar.useBranchs.length > 0) {
				return false
			}

			try {
				loading.value = true
				const { data } = await BranchOfficeResource.index({ isAll: true })
				if (data.success) {
					store.commit('calendar/SET_USE_BRANCHS', data.data)
				} else {
					helper.danger(data.message)
				}

			} catch (e) {
				helper.handleResponseErrors(e)
			} finally {
				loading.value = false
			}
		}

		onMounted(async () => {
			await getBranch()
		})

		const {
			isLoading,
			refCalendar,
			isCalendarOverlaySidebarActive,
			event,
			clearEventData,
			addEvent,
			updateEvent,
			removeEvent,
			fetchEvents,
			refetchEvents,
			calendarOptions,
			selectedProfessional,

			// ----- UI ----- //
			isEventHandlerSidebarActive,
			isNewEventHandlerModalActive,
			dateOnNewEvent,
			timeAvailables,
		} = useCalendar()

		watch(activeModal, (newValue) => {
			searchQuery.value = ""
		})

		const searchNextAppointment = async () => {

			if (searchQuery.value == '' || searchQuery.value == null) {
				return false
			}

			const query = {
				search: searchQuery.value,
				sortBy: 'name',
				sortDesc: 'asc',
				perPage: 10,
			}

			// activeModal.value = true
			nextAppointments.value = []
			isLoading.value = true
			const { data } = await PatientResource.nextAppointment(query)
			isLoading.value = false
			if (data.success) {
				activeModal.value = true
				nextAppointments.value = data.data
			}
		}

		const professionals = computed(() => store.state.calendar.useProfessionals)

		const isAdmin = computed(() => userRoles.includes(1))
		const isDirector = computed(() => userRoles.includes(2))
		const isProfessional = computed(() => userRoles.includes(4))

		fetchEvents()

		const addAppointment = (event) => {
			addEvent(event)
		}

		const editAppointment = (event) => {
			updateEvent(event)
		}

		return {
			isLoading,
			refCalendar,
			isCalendarOverlaySidebarActive,
			event,
			isAdmin,
			isDirector,
			isProfessional,
			clearEventData,
			addEvent,
			updateEvent,
			removeEvent,
			refetchEvents,
			searchNextAppointment,
			addAppointment,
			editAppointment,
			calendarOptions,
			professionals,
			selectedProfessional,
			nextAppointments,
			searchQuery,
			activeModal,

			// ----- UI ----- //
			isEventHandlerSidebarActive,
			isNewEventHandlerModalActive,
			dateOnNewEvent,
			timeAvailables,
		}
	},
}
</script>

<style lang="scss">
@import "@resources/scss/vue/apps/calendar.scss";
</style>
