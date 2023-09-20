<template>
	<div>
		<b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
			<template #overlay>
				<div class="d-flex align-items-center">
					<b-spinner small type="grow" variant="secondary" />
					<b-spinner type="grow" variant="dark" />
					<b-spinner small type="grow" variant="secondary" />
				</div>
			</template>
			<b-card v-if="data" class="card-statistics">
				<b-card-header>
					<b-card-title>{{ $t('dashboard_statistics.title').replace(':month', currentDate('MMMM [,] Y') ) }}</b-card-title>
				</b-card-header>

				<b-card-body class="statistics-body">
					<b-row>
						<b-col xl="3" sm="6" class="mb-2 mb-xl-0">
							<b-media no-body>
								<b-media-aside class="mr-2">
									<b-avatar size="48" variant="light-primary">
										<feather-icon size="24" icon="TrendingUpIcon" />
									</b-avatar>
								</b-media-aside>
								<b-media-body class="my-auto">
									<h4 class="font-weight-bolder mb-0">
										{{ kFormatter(data.amountEarningCurrentMonth) }}
									</h4>
									<b-card-text class="font-small-3 mb-0">
										{{ $t('payments.dashboard_income') }}
									</b-card-text>
								</b-media-body>
							</b-media>
						</b-col>

						<b-col xl="3" sm="6" class="mb-2 mb-xl-0">
							<b-media no-body>
								<b-media-aside class="mr-2">
									<b-avatar size="48" variant="light-danger">
										<feather-icon size="24" icon="TrendingDownIcon" />
									</b-avatar>
								</b-media-aside>
								<b-media-body class="my-auto">
									<h4 class="font-weight-bolder mb-0">
										{{ kFormatter(data.amountExpenseCurrentMonth) }}
									</h4>
									<b-card-text class="font-small-3 mb-0">
										{{ $t('payments.dashboard_expenses') }}
									</b-card-text>
								</b-media-body>
							</b-media>
						</b-col>

						<b-col xl="3" sm="6" class="mb-2 mb-xl-0">
							<b-media no-body>
								<b-media-aside class="mr-2">
									<b-avatar size="48" variant="light-success">
										<feather-icon size="24" icon="DollarSignIcon" />
									</b-avatar>
								</b-media-aside>
								<b-media-body class="my-auto">
									<h4 class="font-weight-bolder mb-0">
										{{ kFormatter(data.totalEarningCurrentMonth) }}
									</h4>
									<b-card-text class="font-small-3 mb-0">
										{{ $t('payments.dashboard_earnings') }}
									</b-card-text>
								</b-media-body>
							</b-media>
						</b-col>

						<b-col xl="3" sm="6" class="mb-2 mb-xl-0">
							<b-media no-body>
								<b-media-aside class="mr-2">
									<b-avatar size="48" variant="light-info">
										<feather-icon size="24" icon="UserIcon" />
									</b-avatar>
								</b-media-aside>
								<b-media-body class="my-auto">
									<h4 class="font-weight-bolder mb-0">
										{{ kFormatter(data.totalPatientCountCurrentMonth) }}
									</h4>
									<b-card-text class="font-small-3 mb-0">
										{{ $t('patient_new') }}
									</b-card-text>
								</b-media-body>
							</b-media>
						</b-col>
					</b-row>
				</b-card-body>
			</b-card>
		</b-overlay>
	</div>
</template>

<script>
import _ from 'lodash'
import * as moment from "moment";
import {
	BCard, BCardText, BLink, BButton, BImg, BCardHeader, BCardTitle, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody,
	BOverlay, BSpinner,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'

export default {
	components: {
		BCard,
		BCardText,
		BLink,
		BImg,
		BButton,
		BCardHeader, BCardTitle, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody,
		BOverlay, BSpinner,
	},
	directives: {
		Ripple,
	},
	props: {
		data: {
			type: Object,
			default: () => { },
		},
		loading: {
			type: Boolean,
			required: true,
			default: () => false,
		},
	},
	computed: {
		today() {
			moment.locale(this.findSetting('language'));
			return moment().format('LL');
		},
	},
	methods: {
		kFormatter,
	},
}
</script>
