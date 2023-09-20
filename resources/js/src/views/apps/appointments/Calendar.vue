<template>
	<div>
		<b-overlay :show="refLoading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
			<template #overlay>
				<div class="d-flex align-items-center">
					<b-spinner small type="grow" variant="secondary" />
					<b-spinner type="grow" variant="dark" />
					<b-spinner small type="grow" variant="secondary" />
				</div>
			</template>

			<b-card>
				<b-row>
					<b-col md="12">
						<!-- Input Search -->
						<div class="d-flex align-content-center justify-content-between w-100">
							<b-input-group class="input-group-merge">
								<b-form-input v-model="searchQuery" @keyup.enter="searchNextAppointment"
									:placeholder="$t('appointments.input_next_search')" />
								<b-input-group-prepend>
									<b-button @click="searchNextAppointment" variant="primary">
										<feather-icon icon="SearchIcon" /> <span class="d-none d-sm-inline">{{ $t('search')
										}}</span>
									</b-button>
								</b-input-group-prepend>
							</b-input-group>
						</div>
					</b-col>
				</b-row>
			</b-card>

			<div class="app-calendar overflow-hidden border">
				<div class="row no-gutters">

					<!-- Sidebar -->
					<div class="col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column"
						:class="{ 'show': isCalendarOverlaySidebarActive }">
						<calendar-sidebar :is-event-handler-sidebar-active.sync="isEventHandlerSidebarActive" />
					</div>

					<!-- Calendar -->
					<div class="col position-relative">
						<div class="card shadow-none border-0 mb-0 rounded-0">
							<div class="card-body pb-0">
								<full-calendar id="refCalendar" ref="refCalendar" :options="calendarOptions"
									class="full-calendar" :loading="refLoading" date-parsing-hint="'UTC'"
									:dates-set="onDatesSet" />
							</div>
						</div>
					</div>

					<!-- Sidebar Overlay -->
					<div class="body-content-overlay" :class="{ 'show': isCalendarOverlaySidebarActive }"
						@click="isCalendarOverlaySidebarActive = false" />
					<calendar-event-handler :event="event" :clear-event-data="clearEventData" @remove-event="removeEvent"
						@add-event="addEvent" @update-event="updateEvent" :is-event-handler-sidebar-active="false" />
					<!-- Modal appointment detail -->
					<calendar-appointment-detail v-model="isEventHandlerSidebarActive" :event="event" />
				</div>
			</div>
		</b-overlay>

		<!-- Modal Next appointment -->
		<b-modal id="modal-center" ref="info-modal" centered :title="$t('appointments.modal_next_title')"
			:visible="activeModal" @hidden="activeModal = false" :ok-title="$t('accept')" ok-only>
			<b-overlay :show="loading" rounded="lg" opacity="0">
				<template #overlay>
					<div class="d-flex align-items-center">
						<b-spinner small type="grow" variant="secondary" />
						<b-spinner type="grow" variant="dark" />
						<b-spinner small type="grow" variant="secondary" />
					</div>
				</template>

				<div v-if="nextAppointments.length > 0">
					<b-list-group>
						<b-list-group-item v-for="(item, index) in nextAppointments" :key="index"
							class="flex-column align-items-start">
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1">
									{{ item.full_name }}<br>
									<small class="text-secondary">{{ item.document_type }}: {{ item.rut }}</small>
								</h5>
							</div>
							<div>
								<b-card-text class="mb-1">
									<strong>{{ $t('appointments.table_observations') }}:</strong>
									{{ item.intern_observation }}
								</b-card-text>
								<b-card-text class="mb-1">
									<strong>{{ $t('appointments.appointment') }} {{ item.custom_date_diff_humans }}</strong>
									<small class="text-secondary">{{ dateTimeFormat(item.date) }}</small>
								</b-card-text>
								<b-card-text class="mb-1">
									<strong>{{ $t('appointments.state') }}:</strong>
									<b-badge :variant="`${resolveStateAppointmentColor(item.state)}`">{{
										resolveStateAppointment(item.state) }}</b-badge>
								</b-card-text>
								<small class="text-secondary">{{ $t('appointments.mail_doctor_1') }} {{ item.name }}
									{{ $t('appointments.mail_doctor_2') }}</small>
							</div>
						</b-list-group-item>
					</b-list-group>
				</div>
				<div v-else>
					<div v-if="!loading" class="d-flex w-100 justify-content-center">
						<h5 class="mb-1">
							{{ $t('appointments.modal_next_empty') }}
						</h5>
					</div>
				</div>
			</b-overlay>
		</b-modal>
	</div>
</template>

<script>
import {
	BCard, BCardText, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown,
	BDropdownItem, BPagination, BTooltip, BImg, VBTooltip, BInputGroup, BInputGroupPrepend, BModal, VBModal,
	BOverlay, BSpinner, BListGroup, BListGroupItem
} from 'bootstrap-vue'
import FullCalendar from '@fullcalendar/vue'
import store from '@/store'
import { ref, onUnmounted, onMounted, watch, computed } from '@vue/composition-api'
import calendarStoreModule from './calendarStoreModule'
import CalendarSidebar from './calendar-sidebar/CalendarSidebar.vue'
import CalendarEventHandler from './calendar-event-handler/CalendarEventHandler.vue'
import CalendarAppointmentDetail from './calendar-detail/AppointmentDetail.vue'
import useCalendar from './useCalendar'
import useCalendarSidebar from './calendar-sidebar/useCalendarSidebar'

import PatientProvider from '@/providers/Patients'
const PatientResource = new PatientProvider()

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
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
		BInputGroup, BInputGroupPrepend,
		BModal, VBModal,
		BOverlay, BSpinner,
		BListGroup, BListGroupItem,
		FullCalendar, // make the <FullCalendar> tag available
		CalendarSidebar,
		CalendarEventHandler,
		CalendarAppointmentDetail,
	},
	setup() {

		const searchQuery = ref("")
		const activeModal = ref(false)
		const loading = ref(false)
		const nextAppointments = ref([])
		const CALENDAR_APP_STORE_MODULE_NAME = 'calendar'

		//Load First Datas
		const setProfessional = (data) => {
			if (store.state.auth.user.roles[0].id === 4) {
				store.commit("calendar/SET_SELECTED_PROFESSIONAL", store.state.auth.user);
			} else {
				if (_.isEmpty(store.state.calendar.selectedProfessional)) {
					store.commit("calendar/SET_SELECTED_PROFESSIONAL", data[0]);
				}
			}
		}

		const loadDatas = async () => {
			// const existsProfessionals = store.state.calendar.useProfessionals.length;
			// if (existsProfessionals > 0) {
			// 	store.commit("calendar/SET_USE_PROFESSIONALS", store.state.calendar.useProfessionals);
			// 	setProfessional(store.state.calendar.useProfessionals)
			// } else {
				// console.log('se ejecuto en calendar')
				// refLoading.value = true
				// const { data } = await UserResource.index({criteria: "professionals"});
				// refLoading.value = false;
				// store.commit('calendar/SET_SELECTED_EVENTS', ["pending", "confirmed", "assisted", "unassisted", "canceled"])
				// store.commit('auth/SET_DOCTORS', data.data)
				// store.commit("calendar/SET_USE_PROFESSIONALS", data.data);
				// setProfessional(data.data)
			// }
		}

		// Register module
		// if (!store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.registerModule(CALENDAR_APP_STORE_MODULE_NAME, calendarStoreModule)

		// UnRegister on leave
		onUnmounted(() => {
			// if (store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.unregisterModule(CALENDAR_APP_STORE_MODULE_NAME)
		})

		onMounted(async () => {
			refLoading.value = true
			await loadDatas()
		})

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

			activeModal.value = true
			nextAppointments.value = []

			loading.value = true
			const { data } = await PatientResource.nextAppointment(query)
			loading.value = false
			nextAppointments.value = data

			console.log(nextAppointments.value)
		}

		const onDatesSet = (arg) => {
			const start = arg.start.toISOString()
			const end = arg.end.toISOString()

			console.log('onDatesSet', start, end)
			//   fetchEvents(start, end)
		}

		const {
			refLoading,
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
			currentDate,

			// ----- UI ----- //
			isEventHandlerSidebarActive,
			printMe
		} = useCalendar()

		// fetchEvents()

		return {
			refLoading,
			refCalendar,
			isCalendarOverlaySidebarActive,
			event,
			clearEventData,
			addEvent,
			updateEvent,
			onDatesSet,
			removeEvent,
			refetchEvents,
			calendarOptions,
			searchNextAppointment,

			//Refs
			searchQuery,
			activeModal,
			loading,
			nextAppointments,

			// ----- UI ----- //
			isEventHandlerSidebarActive,
			printMe,
		}
	},
}
</script>

<style lang="scss">
@import "@resources/scss/vue/apps/calendar.scss";
</style>

<style lang="scss">
@media print {

	// Global Styles
	body {
		background-color: transparent !important;
	}

	nav.header-navbar {
		display: none;
	}

	.main-menu {
		display: none;
	}

	.header-navbar-shadow {
		display: none !important;
	}

	.content.app-content {
		margin-left: 0;
		padding-top: 2rem !important;
	}

	footer.footer {
		display: none;
	}

	.card {
		background-color: transparent;
		box-shadow: none;
	}

	.customizer-toggle {
		display: none !important;
	}

	// Invoice Specific Styles
	.invoice-preview-wrapper {
		.row.invoice-preview {
			.col-md-8 {
				max-width: 100%;
				flex-grow: 1;
			}

			.invoice-preview-card {
				.card-body:nth-of-type(2) {
					.row {
						>.col-12 {
							max-width: 50% !important;
						}

						.col-12:nth-child(2) {
							display: flex;
							align-items: flex-start;
							justify-content: flex-end;
							margin-top: 0 !important;
						}
					}
				}
			}
		}

		// Action Right Col
		.invoice-actions {
			display: none;
		}
	}
}
</style>
