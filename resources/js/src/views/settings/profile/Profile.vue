<template>
	<div v-if="Object.keys(profileData).length" id="user-profile">
		<profile-header :header-data="profileData" />
		<!-- profile info  -->
		<section id="profile-info">

			<b-card no-body>
				<b-card-body>
					<b-row>
						<b-col cols="12" xl="3" class="p-1">
							<label>{{ $t('start_at') }}</label>
							<flat-pickr v-model="dates.start_at" class="form-control" :config="{ dateFormat: 'Y-m-d' }"
								placeholder="DD/MM/YYYY" />
						</b-col>

						<b-col cols="12" xl="3" class="p-1">
							<label>{{ $t('end_at') }}</label>
							<flat-pickr v-model="dates.end_at" class="form-control" :config="{ dateFormat: 'Y-m-d' }"
								placeholder="DD/MM/YYYY" />
						</b-col>

						<b-col cols="12" xl="3" class="p-1">
							<b-button @click="filterData" class="mt-2" variant="primary">
								{{ $t("search") }}
							</b-button>

							<b-button @click="$router.push({ name: 'home' })" class="mt-2" variant="secondary">
								{{ $t('back_to_dashboard') }}
							</b-button>
						</b-col>
					</b-row>
				</b-card-body>
			</b-card>

			<!-- Stats Card Vertical -->
			<b-row class="match-height">
				<b-col xl="2" md="4" sm="6">
					<statistic-card-vertical icon="DollarSignIcon" :statistic="formatMoney(profileData.total_earning)" 
					:statistic-title="$t('earnings.plural')" color="success" />
				</b-col>
				<b-col xl="2" md="4" sm="6">
					<statistic-card-vertical color="primary" icon="HeartIcon" :statistic="profileData.assisted"
						:statistic-title="$t('appointments.cards_state_assisted')" />
				</b-col>
				<b-col xl="2" md="4" sm="6">
					<statistic-card-vertical color="warning" icon="CheckSquareIcon" :statistic="profileData.confirmed"
					:statistic-title="$t('appointments.cards_state_confirmed')" />
				</b-col>
				
				<b-col xl="2" md="4" sm="6">
					<statistic-card-vertical color="primary" icon="SmileIcon" :statistic="profileData.pending"
					:statistic-title="$t('appointments.cards_state_pending')" />
				</b-col>
				<b-col xl="2" md="4" sm="6">
					<statistic-card-vertical color="success" icon="AlertOctagonIcon" :statistic="profileData.unassisted" 
					:statistic-title="$t('appointments.cards_state_unassisted')"  />
				</b-col>
				<b-col xl="2" md="4" sm="6">
					<statistic-card-vertical hide-chart color="danger" icon="SlashIcon" :statistic="profileData.canceled"
					:statistic-title="$t('appointments.cards_state_canceled')" />
				</b-col>
			</b-row>			

			<b-row class="d-flex">
				<!-- Profile About -->
				<b-col lg="4" cols="12" order="2" order-lg="1">					
					<profile-about :about-data="profileData" />
				</b-col>

				<!-- Appointments -->
				<b-col lg="8" cols="12" order="1" order-lg="2">
					<profile-appointment ref="profileAppointment" :start-at="startDates" :end-at="endDates" :is-active="loading" />
				</b-col>
			</b-row>

			<b-row class="d-flex">
				<b-col lg="4" cols="12" order="2" order-lg="1">
					<dashboard-card-transactions :data="profileData.transactionsData" :loading="loading" />
				</b-col>
				<b-col lg="8" cols="12" order="1" order-lg="2">
					<profile-payment ref="profilePayments" :start-at="startDates" :end-at="endDates" :is-active="loading"></profile-payment>
				</b-col>
			</b-row>			
		</section>
		<!--/ profile info  -->
	</div>
</template>

<script>
import store from "@/store";
import moment from 'moment'
import {
	BRow, BCol,
	BCard,
	BCardTitle,
	BCardBody,
	BCardHeader,
	BButton,
	BCardText,
	BLink,
	BImg,
	BOverlay, BSpinner,
	BMedia,
	VBTooltip,
} from "bootstrap-vue";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import StatisticCardVertical from '@core/components/statistics-cards/StatisticCardVertical.vue'
import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import ProfileHeader from "./ProfileHeader.vue";
import ProfileAbout from "./ProfileAbout.vue";
import DashboardCardTransactions from "@core/components/dashboards/DashboardCardTransactions.vue"
// import ProfileSuggestedPages from "./ProfileSuggestedPages.vue";
// import ProfileTwitterFeed from "./ProfileTwitterFeed.vue";
// import ProfilePost from "./ProfilePost.vue";
import ProfilePayment from "./ProfilePayment.vue"
import ProfileAppointment from "./ProfileAppointment.vue"
// import ProfileAppointmentState from "./ProfileAppointmentState.vue";
// import ProfileLatestPhotos from "./ProfileLatestPhotos.vue";
// import ProfileSuggestion from "./ProfileSuggestion.vue";
// import ProfilePolls from "./ProfilePolls.vue";
// import profileBottom from "./profileBottom.vue";

import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

/* eslint-disable global-require */
export default {
	components: {
		BRow,
		BCol,
		BCard,
		BCardTitle,
		BCardBody,
		BCardHeader,
		BButton,
		BCardText,
		BLink,
		BImg,
		BOverlay,
		BSpinner,
		BMedia,
		VBTooltip,

		// VuePerfectScrollbar,
		StatisticCardWithAreaChart,
		StatisticCardVertical,
		ProfileHeader,
		ProfileAbout,
		DashboardCardTransactions,
		// ProfileSuggestedPages,
		// ProfileTwitterFeed,
		// ProfilePost,
		ProfilePayment,
		ProfileAppointment,
		// ProfileAppointmentState,
		// ProfileLatestPhotos,
		// ProfileSuggestion,
		// ProfilePolls,
		// profileBottom,

		AppTimeline,
		AppTimelineItem,

		flatPickr,
	},
	directives: {
		'b-tooltip': VBTooltip,
	},
	data() {
		return {
			loading: false,
			user_id: this.$route.params.id,
			user: {},
			profileData: {
				header: {
					avatar: require("@/assets/images/avatar_default.png"),
					username: null,
					designation: null,
					coverImg: require("@/assets/images/profile/user-uploads/timeline.jpg"),
				},
				userAbout: {
					about: " -- ",
					joined: "",
					lives: "",
					email: "",
					website: " -- ",
				},
				appointments: [],
				states: [],
				budgets: [],
				payments: [],
				incomesData: {
					series: [
						{
							name: 'Ingreso',
							data: [],
						}
					]
				},
				transactionsData: [],
				schedules: [],				
				assisted: 0,
				canceled: 0,
				confirmed: 0,
				pending: 0,
				unassisted: 0,
				total_earning: 0,
			},
			dates: {
				start_at: moment().startOf('month').format('YYYY-MM-DD'),
				end_at: moment().format('YYYY-MM-DD'),
			},
			perfectScrollbarSettings: {
				maxScrollbarLength: 10,
			},
		};
	},
	computed: {
		totalIncomes() {
			return 0 //this.profileData.payments.reduce((carry, item) => { return carry + (item.payment.check_paid ? item.amount * 1 : 0) }, 0)
		},
		totalExpenses() {
			return 0
		},
		startDates() {
			return this.dates.start_at
		},
		endDates() {
			return this.dates.end_at
		}
	},
	created() {
		if (store.state.auth.setting['language'] === "es") {
			flatpickr.localize(Spanish);
		}
	},
	async mounted() {
		await this.getUserDetail()
	},
	methods: {
		async getUserDetail() {

			const query = {
				...this.dates,
				is_profile: true,
			}
			this.loading = true;
			const { data } = await UserResource.getUserDetail(this.user_id, query);
			this.loading = false;

			const {
				name,
				roles,
				has_media,
				media,
				avatar,
				bio,
				created_at,
				address,
				email,
				payments,
				revenue,
				transactionsData,
				schedules
			} = data.data;

			this.profileData.header.username = name;
			this.profileData.header.designation = roles.length > 0 ? roles[0].name : ' -- ';
			this.profileData.header.avatar = has_media ? avatar : this.profileData.header.avatar;
			this.profileData.userAbout.about = bio ? bio : ' -- ';
			this.profileData.userAbout.joined = this.formatDate(created_at);
			this.profileData.userAbout.lives = address ? address : '-- ';
			this.profileData.userAbout.email = email ? email : ' -- ';
			this.profileData.payments = payments;
			this.profileData.transactionsData = transactionsData
			this.profileData.schedules = schedules

			const { assisted, canceled, confirmed, pending, unassisted, total } = revenue[0];
			this.profileData.assisted = assisted;
			this.profileData.canceled = canceled;
			this.profileData.confirmed = confirmed;
			this.profileData.pending = pending;
			this.profileData.unassisted = unassisted;
			this.profileData.total_earning = total;

			// this.profileData.appointments = data.data.appointments
			// this.profileData.states = _.groupBy(data.data.appointments, 'state')
		},
		async filterData() {
			await this.getUserDetail()
			this.$refs.profileAppointment.search = null
		}
	},
};
/* eslint-disable global-require */
</script>

<style lang="scss">
@import "~@resources/scss/vue/pages/page-profile.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
