<template>
	<section id="dashboard-ecommerce">
		<b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
			<template #overlay>
				<div class="d-flex align-items-center">
					<b-spinner small type="grow" variant="secondary" />
					<b-spinner type="grow" variant="dark" />
					<b-spinner small type="grow" variant="secondary" />
				</div>
			</template>
			<b-row v-if="canAccess('payments.dashboard')" class="match-height">
				<b-col xl="4" md="6">
					<dashboard-earning :loading="loading" :data="dashboard" />
				</b-col>
				<b-col xl="8" md="6">
					<dashboard-statistics :loading="loading" :data="dashboard" />
				</b-col>
			</b-row>

			<!-- Buttons -->
			<b-row>
				<b-col cols="12">
					<!-- <b-card-code> -->
					<b-card class="mb-0">
						<div class="demo-inline-spacing">
							<b-button size="sm" v-if="canAccess('expenses.index')" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
								variant="danger" pill @click="$router.push({ name: 'apps-expenses-list' })"
								:class="{ 'btn-block': isMobile }">
								<feather-icon icon="TrendingDownIcon" class="mr-50" />
								<span class="align-middle">{{ $t('expenses.plural') }}</span>
							</b-button>

							<b-button size="sm" v-if="canAccess('checks.index')" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
								variant="warning" pill @click="$router.push({ name: 'apps-checks-list' })"
								:class="{ 'btn-block': isMobile }">
								<feather-icon icon="CheckCircleIcon" class="mr-50" />
								<span class="align-middle">{{ $t('checks.plural') }}</span>
							</b-button>

							<b-button size="sm" v-if="canAccess('payments.view')" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
								variant="dark" pill @click="$router.push({ name: 'apps-payments-view' })"
								:class="{ 'btn-block': isMobile }">
								<feather-icon icon="EyeIcon" class="mr-50" />
								<span class="align-middle">{{ $t('payments.views') }}</span>
							</b-button>

							<b-button size="sm" v-if="canAccess('payments.create')" class="float-end"
								v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" pill
								@click="isAddNewPaymentSidebarActive = true" :class="{ 'btn-block': isMobile }">
								<feather-icon icon="PlusIcon" class="mr-50" />
								<span class="align-middle">{{ $t('payments.create') }}</span>
							</b-button>

							<b-button size="sm" v-if="canAccess('cash_registers.index')" class="float-end"
								v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="success" pill
								@click="$router.push({ name: 'apps-cash-register-list' })"
								:class="{ 'btn-block': isMobile }">
								<feather-icon icon="BoxIcon" class="mr-50" />
								<span class="align-middle">{{ $t('cash_registers.plural') }}</span>
							</b-button>
						</div>
					</b-card>
					<!-- </b-card-code> -->
				</b-col>
			</b-row>

			<!-- Payment Table Card -->
			<b-row class="match-height mt-4">
				<!-- payment card  -->
				<b-col cols="12" xl="9" lg="8" md="7">
					<b-card no-body>
						<div class="m-2">
							<!-- Table Top -->
							<b-row>
								<!-- Per Page -->
								<b-col cols="12" md="6"
									class="d-flex align-items-center justify-content-start mb-1 mb-md-0 col-md-6 col-12">
									<label>{{ $t("show") }}</label>
									<v-select v-model="perPage" :options="perPageOptions" :clearable="false"
										class="select-size-sm per-page-selector d-inline-block mx-50" />									
								</b-col>

								<!-- Search -->
								<b-col cols="12" md="6">
									<div class="d-flex align-items-center justify-content-end">
										<b-input-group>
											<b-form-input size="sm" v-model="searchQuery" class="d-inline-block _mr-1"
											:placeholder="$t('budgets.search_options')" @keyup.enter="filter"/>
											<b-input-group-append>
											<b-button size="sm" variant="primary" @click="filter	">
												<feather-icon icon="SearchIcon" /> Buscar
											</b-button>
											</b-input-group-append>
										</b-input-group>
									</div>
								</b-col>								
							</b-row>
						</div>
						<b-table ref="refPaymentsListTable" class="position-relative text-small small" :items="budgets" responsive
							:fields="columns" primary-key="id" :sort-by.sync="sortBy" show-empty
							:empty-text="$t('datatables.sZeroRecords')" :sort-desc.sync="sortDesc"
							:current-page="currentPage" busy.sync="loading" stacked="md" small>

							<!-- Column: label -->
							<template #cell(label)="data">
								<p>
									<b-link :to="{
										name: 'apps-budgets-show',
										params: { id: data.item.id }
									}" class="font-weight-bold">
										{{ (data.item.label) }}
									</b-link>
								</p>
								<b-link :to="{
									name: 'apps-patients-view',
									params: { id: data.item.patient_id }
								}" class="font-weight-bold">
									{{ (data.item.patient.full_name) }}
									<small class="help-block">
										{{data.item.patient.document_type}}-{{ data.item.patient.rut}}
									</small>
								</b-link>
							</template>

							<!-- Column: created at  -->
							<template #cell(created_at)="data">
								<span class="text-capitalize">{{ formatDate(data.item.created_at) }}</span>
							</template>

							<!-- Column: total  -->
							<template #cell(total)="data">
								<!-- {{ formatPrice(data.item.total)}} -->
								<!-- <span class="badge badge-light-warning float-left">{{$t('subtotal')}} {{formatPrice(data.item.subtotal)}} </span><br>
								<span class="badge badge-light-warning float-left">{{$t('discount')}} {{formatPrice(data.item.discount)}} </span><br>
								<span v-if="setting.enable_tax" class="badge badge-light-warning float-left">{{$t('tax')}} {{formatPrice(data.item.tax)}} </span><br> -->
								<p class="card-text text-wrap fw-bold mb-25">{{ formatPrice(data.item.total) }}</p>
							</template>

							<!-- Column: total paid  -->
							<template #cell(total_paid)="data">
								{{ formatPrice(data.item.total_paid) }}
							</template>

							<!-- Column: total debt  -->
							<template #cell(total_debt)="data">
								<span :class="`${data.item.total_debt > 0 ? 'text-danger' : 'text-success'}`">
									<strong>
										{{ formatPrice(data.item.total_debt) }}
									</strong>
								</span>
							</template>

							<!-- Column: Actions -->
							<template #cell(actions)="data">
								<b-button size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"
									v-if="data.item.total_debt > 0" pill @click="$router.push({
										name: 'payments.budgets.charge',
										params: {
											id: data.item.id,
										},
									})">
									<span class="align-middle">{{ $t('payments.button_pay') }}</span>
								</b-button>
							</template>
						</b-table>

						<!-- Pagination -->
						<div v-if="budgets.length > 0" class="mx-2 mb-2">
							<b-row>
								<b-col cols="12" sm="6"
									class="d-flex align-items-center justify-content-center justify-content-sm-start">
									<span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
								</b-col>
								<b-col cols="12" sm="6"
									class="d-flex align-items-center justify-content-center justify-content-sm-end">
									<div class="mt-2 demo-spacing-0">
										<b-pagination v-model="currentPage" :total-rows="totalBudget" :per-page="perPage"
											size="lg" />
									</div>
								</b-col>
							</b-row>
						</div>
					</b-card>
				</b-col>
				<!-- transations card  -->
				<b-col v-if="canAccess('payments.transactions')" cols="12" md="5" xl="3" lg="4">
					<dashboard-card-transactions :data="dashboard.transactionsData" :loading="false" />
				</b-col>
			</b-row>

			<!-- Sidebar new Payment  -->
			<b-sidebar id="add-new-payment-sidebar" :visible="isAddNewPaymentSidebarActive" bg-variant="white"
				sidebar-class="sidebar-lg" shadow backdrop no-header right
				@change="(val) => isAddNewPaymentSidebarActive = val">
				<template #default="{ hide }">
					<!-- Header -->
					<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
						<h5 class="mb-0">{{ $t('payments.add_payment') }}</h5>
						<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
					</div>

					<!-- Form -->
					<b-form class="p-2">
						<b-row>
							<!-- Patients -->
							<b-col cols="12">
								<b-form-group :label="$t('patients.patient')"
									:description="$t('patients.write_characters')" label-for="patient">
									<v-select v-model="selectedPatient" :options="patients" label="full_name"
										input-id="patient" @search="onSearch" :placeholder="$t('patients.search_options')"
										:clearable="false"
										no-options-text="No hay registros">
										<template #option="{ full_name, rut }">
											<span class="ml-50 align-middle"> {{ full_name }} ({{ rut }})</span>
										</template>
										<template #selected-option="{ full_name, rut }">
											<span class="ml-50 align-middle"> {{ full_name }} ({{ rut }})</span>
										</template>
									</v-select>
								</b-form-group>
							</b-col>

							<!-- Type  -->
							<b-col cols="12" v-if="selectedPatient">
								<b-form-group :label="$t('budgets.action_type')" label-for="patient">
									<v-select v-model="collection_type" :options="collections" :clearable="false"
										:searchable="false" @input="selectCollectionType"></v-select>
								</b-form-group>
							</b-col>

							<!-- Actions -->
							<b-col cols="12" v-if="collection_type">
								<b-form-group :label="$t('budgets.actions')" label-for="actions">
									<v-select v-model="selectedclinicalAction" v-if="collection_type.value === 1"
										id="actions" label="name" :options="clinicalActions" :clearable="false"
										@input="selectPriceAction">
									</v-select>

									<v-select v-model="selectedlaboratoyAction" v-else label="name" id="actions"
										:options="laboratoyActions" @input="selectPriceAction" :clearable="false">
									</v-select>
								</b-form-group>
							</b-col>

							<!-- Cost -->
							<b-col md="6" :xl="isEnableTax ? 6 : 12" class="mb-1"
								v-if="!isEmpty(selectedclinicalAction) || !isEmpty(selectedlaboratoyAction)">
								<b-form-group :label="$t('budgets.action_price')" label-for="cost">
									<b-form-input v-model="action_cost" id="cost" class="d-inline-block mr-1"
										:placeholder="$t('budgets.action_price_placeholder')" />
								</b-form-group>
							</b-col>

							<!-- default tax -->
							<b-col md="6" xl="6" class="mb-1"
								v-if="!isEmpty(selectedclinicalAction) || !isEmpty(selectedlaboratoyAction)">
								<b-form-group v-if="findSetting('enable_tax')" :label="$t('tax')" label-for="tax">
									<b-form-input v-model="action_tax" id="tax" class="d-inline-block mr-1"
										:placeholder="$t('tax')" />
								</b-form-group>
							</b-col>

							<!-- Total -->
							<b-col cols="12" v-if="!isEmpty(selectedclinicalAction) || !isEmpty(selectedlaboratoyAction)">
								<b-form-group :label="$t('budgets.action_price')" label-for="total">
									<b-form-input disabled v-model="action_total" id="total" class="d-inline-block mr-1"
										:placeholder="$t('budgets.action_price_placeholder')" />
								</b-form-group>
							</b-col>

							<!-- Payment method -->
							<b-col cols="12" v-if="action_total > 0">
								<b-form-group :label="$t('payments.method')" label-for="payment_type">
									<v-select v-model="selectedPaymentMethod" label="label" :options="paymentMethods"
										:clearable="false" :searchable="false"
										:placeholder="$t('payments.method_placeholder')">
									</v-select>
								</b-form-group>
							</b-col>

							<!-- button -->
							<b-col cols="12">
								<b-button v-if="!isEmpty(selectedPaymentMethod)" variant="primary" type="submit"
									@click.prevent="store">
									{{ $t('save') }}
								</b-button>

								<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="button"
									variant="outline-secondary" @click="hide">
									{{ $t("cancel") }}
								</b-button>
							</b-col>
						</b-row>
					</b-form>
				</template>
			</b-sidebar>

			<check-info-modal :active="checkModalActive" :title="checkModalTitle" :isTransfer="checkModalIsTransfer"
				:check="check" @close="checkModalActive = false" @store="storeWithCheck" />

		</b-overlay>
	</section>
</template>

<script>
import _ from 'lodash'
import * as moment from "moment";
import {
	VBToggle, BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMediaAside, BFormInput, BDropdown, BDropdownItem, BRow, BCol, BMedia,
	BAvatar, BAlert, BLink, BOverlay, BSpinner, BButton, BTable, BSidebar, BForm, BFormGroup, BModal, VBModal, BCardText,
	BPagination, BInputGroupPrepend, BInputGroupAppend, BInputGroup,
} from "bootstrap-vue";
import { VueGoodTable } from 'vue-good-table'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import vSelect from "vue-select";
import router from "@/router";
import CheckInfoModal from "../payment-charge/CheckInfoModal.vue";
import DashboardEarning from "@core/components/dashboards/DashboardEarning.vue";
import DashboardStatistics from "@core/components/dashboards/DashboardStatistics.vue";
import DashboardCardTransactions from "@core/components/dashboards/DashboardCardTransactions.vue";
import BudgetProvider from "@/providers/v2/Budgets";
import PaymentProvider from "@/providers/Payments";
import PatientProvider from "@/providers/Patients";
import ActionProvider from "@/providers/Actions";
import LaboratoryAtionProvider from "@/providers/LaboratoryActions";
const BudgetResource = new BudgetProvider();
const PaymentResource = new PaymentProvider();
const PatientResource = new PatientProvider();
const ActionResource = new ActionProvider();
const LaboratoryActionResource = new LaboratoryAtionProvider();

import DashBoardsProvider from "@/providers/DashBoards";
const DashboardResource = new DashBoardsProvider();

export default {
	name: "PaymentList",
	components: {
		VueGoodTable,
		VBToggle,
		BCard,
		BCardText,
		BRow,
		BCol,
		BMedia,
		BAvatar,
		BAlert,
		BLink,
		BOverlay,
		BSpinner,
		BButton,
		BTable,
		BCardHeader,
		BCardTitle,
		BCardBody,
		BMediaBody,
		BMediaAside,
		BFormInput,
		BDropdown,
		BDropdownItem,
		BPagination,
		BInputGroupPrepend, 
		BInputGroupAppend, 
		BInputGroup,
		vSelect,
		BSidebar,
		BForm,
		BFormGroup,
		CheckInfoModal,
		BModal,
		VBModal,
		DashboardEarning,
		DashboardStatistics,
		DashboardCardTransactions,
		BCardCode,
	},
	directives: {
		Ripple,
		'b-modal': VBModal,
		'b-toggle': VBToggle,
	},
	data() {
		return {
			loading: false,
			columns: [
				{
					key: "label",
					label: this.$t("payments.table_budget"),
				},
				{
					key: "created_at",
					label: this.$t("payments.table_created_at"),
				},
				{
					key: "total",
					label: this.$t("payments.table_total"),
				},
				{
					key: "total_paid",
					label: this.$t("payments.table_paid"),
				},
				{
					key: "total_debt",
					label: this.$t("payments.table_debt"),
				},
				{
					key: "actions",
					label: this.$t("actions")
				},
			],
			patient_id: router.currentRoute.params.patient_id,
			payments: [],
			budgets: [],
			dashboard: {},
			perPageOptions: [10, 25, 50, 100],
			perPage: 10,
			currentPage: 1,
			totalPayment: 0,
			totalBudget: 0,
			sortBy: "name",
			sortDesc: false,
			searchQuery: null,
			from: 0,
			to: 0,
			pagination: {},
			offset: 3,
			critery: "reference",
			search: "",
			modal: false,
			modalTitle: "",
			checkModalIsTransfer: false,
			checkModalTitle: this.$t('charge_check_detail_tittle'),
			totalEarningLastMonth: 0,
			totalEarningMonth: 0,
			totalEarningDay: 0,
			totalExpenseDay: 0,
			totalExpenseMonth: 0,
			totalExpenseLastMonth: 0,
			patientCount: 0,
			totalCheck: 0,
			totalTrans: 0,
			totalCash: 0,
			totalDebit: 0,
			totalCredit: 0,
			collection_type: null,
			collections: [
				{ label: this.$t('budgets.clinical_actions'), value: 1 },
				{ label: this.$t('budgets.laboratory_actions'), value: 2 }
			],
			clinicalActions: [],
			laboratoyActions: [],
			selectedclinicalAction: {},
			selectedlaboratoyAction: {},
			action_cost: 0,
			action_tax: 0,
			action_total: 0,
			paymentMethods: [
				{ label: this.$t('payments.method_cash'), value: 'cash' },
				{ label: this.$t('payments.method_debit_card'), value: 'debit_card' },
				{ label: this.$t('payments.method_credit_card'), value: 'credit_card' },
				{ label: this.$t('payments.method_check'), value: 'check' },
				{ label: this.$t('payments.method_transfer'), value: 'transfer' },
			],
			selectedPaymentMethod: {},
			checkModalActive: false,
			checkInfoStored: false,
			check: {
				reference: "",
				bank: "",
				serie: "",
				date: "",
			},
			isAddNewPaymentSidebarActive: false,
			patients: [],
			selectedPatient: null,
			isMobile: false
		};
	},
	computed: {
		dataMeta() {
			const localItemsCount = _.size(this.budgets);
			return {
				from:
					this.perPage * (this.currentPage - 1) +
					(localItemsCount ? 1 : 0),
				to: this.perPage * (this.currentPage - 1) + localItemsCount,
				of: this.totalBudget,
			};
		},
		today() {
			moment.locale(this.findSetting('language'));
			return moment().format('LL');
		},
		_expenses() {
			return this.expenses.reduce((total, item) => total + (item.amount * 1), 0);
		},
		isEnableTax() {
			return this.findSetting('enable_tax')
		},
		default_tax() {
			return Number(this.findSetting('default_tax'))
		}
	},
	async mounted() {

		window.addEventListener('resize', this.handleResize);
		this.handleResize();

		this.searchQuery = router.currentRoute.params.name ?? null
		this.action_tax = this.default_tax
		await this.getBudgets();
		await this.getDashboard();
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.handleResize);
	},
	methods: {
		handleResize() {
			this.isMobile = window.innerWidth < 576;
		},
		async store() {
			if (this.isEmpty(this.selectedPatient)) {
				this.danger(this.$t('payments.required_patient'))
				return false
			}
			if (this.action_cost <= 0) {
				this.danger(this.$t('payments.required_cost'))
				return false
			}
			if (this.isEmpty(this.collection_type)) {
				this.danger(this.$t('payments.required_collection_type'))
				return false
			}

			if (this.selectedPaymentMethod.value === "transfer") {
				this.checkModalTitle = this.$t('charges.transfer_detail_tittle');
				this.checkModalIsTransfer = true;
			} else {
				this.checkModalTitle = this.$t('charges.check_detail_tittle');
				this.checkModalIsTransfer = false;
			}

			if (this.isEmpty(this.selectedPaymentMethod)) {
				this.danger(this.$t('payments.required_method'))
				return false
			}

			if ((this.selectedPaymentMethod.value === "check" || this.selectedPaymentMethod.value === "transfer") && !this.checkInfoStored) {
				this.checkModalActive = true;
				return;
			}

			this.payment = {
				patient: { ...this.selectedPatient },
				type: { ...this.collection_type },
				action: (this.collection_type.value === 1) ? { ...this.selectedclinicalAction } : { ...this.selectedlaboratoyAction },
				method: { ...this.selectedPaymentMethod },
				cost: this.action_cost,
				check: this.check,
			}

			try {
				this.loading = true
				const { data } = await PaymentResource.storeCollection(this.payment)
				this.loading = false
				if (data.success) {
					this.success(data.message)
					this.$router.push({
						name: "payments-budgets-preview",
						params: {
							id: data.data.id,
							payment_id: data.data.payments[0].id,
						},
					});
					return false
				} else {
					this.danger(data.message,)
				}
			} catch (e) {
				this.loading = false
				this.handleResponseErrors(e)
			}
		},
		async storeWithCheck() {
			this.checkInfoStored = true;
			this.store();
		},
		// Aplicar debounce a la función onSearch
		onSearch: _.debounce(function (search, loading) {
			if (search.length >= 3) {
				loading(true);
				this.searchPatients(loading, search, this);
			}
		}, 300), // 300ms es el tiempo de espera para ejecutar la función después del último evento 'onSearch'
		async getBudgets() {
			
			const query = {
				search: this.searchQuery,
				sortBy: this.sortBy,
				sortDesc: this.sortDesc,
				perPage: this.perPage,
				page: this.currentPage,
				filter_by: 'approved'
			};

			try {
				this.loading = true;
				const { data } = await BudgetResource.index(query);
				this.loading = false;
				this.totalBudget = data.total;
				this.budgets = data.data
			}catch(e) {
				this.loading = false
				this.handleResponseErrors(e)
			}
		},
		async getDashboard() {
			this.loading = true
			const { data } = await DashboardResource.index({})
			this.loading = false
			this.dashboard = data
		},
		async searchPatients(loading, search, vm) {
			this.loading = true;
			const { data } = await PatientResource.search(search);
			vm.patients = data.data;
			loading(false)
		},
		selectPatient(evt) {
			console.log(evt)
		},
		selectCollectionType(value) {
			this.clinicalActions = []
			this.laboratoyActions = []
			this.selectedclinicalAction = {}
			this.selectedlaboratoyAction = {}
			this.selectedPaymentMethod = {}
			this.action_cost = 0
			console.log(value)
			if (value.value === 1) {
				this.getClinicalActions()
			} else {
				this.getLaboratoryActions()
			}
		},
		selectPriceAction(value) {
			if (!_.isNull(value)) {
				this.action_cost = value.cost
			} else {
				this.action_cost = 0
			}
		},
		async getClinicalActions() {
			this.loading = true
			const { data } = await ActionResource.getAll();
			this.clinicalActions = data
			this.loading = false
		},
		async getLaboratoryActions() {
			this.loading = true
			const { data } = await LaboratoryActionResource.getAll();
			this.laboratoyActions = data
			this.loading = false
		},
		filter() {
			this.getBudgets();
		},
		changePage(page, search, critery) {
			let me = this;
			//We update the current page
			me.pagination.current_page = page;
			//Send request to view the data of that page
			me.getBudgets();
		},
	},
	watch: {
		currentPage(value) {
			this.getBudgets();
		},
		perPage(value) {
			this.getBudgets();
		},
		isAddNewPaymentSidebarActive(newValue) {
			this.clinicalActions = []
			this.laboratoyActions = []
			this.selectedclinicalAction = {}
			this.selectedlaboratoyAction = {}
			this.selectedPaymentMethod = {}
			this.action_cost = 0
			this.action_total = 0
			this.action_tax = this.default_tax
			this.loading = false
		},
		action_tax(value) {
			if (this.isEnableTax) {
				this.action_total = Number(this.action_cost * ((value / 100) + 1)).toFixed(2)
			} else {
				this.action_tax = 0
			}
		},
		action_cost(value) {
			if (this.isEnableTax) {
				this.action_total = Number(value * ((this.action_tax / 100) + 1)).toFixed(2)
			} else {
				this.action_total = value
			}
		}
	},
};
</script>

<style lang="scss" scoped>
.per-page-selector {
	width: 90px;
}
</style>


<style lang="scss">
@import "~@resources/scss/vue/pages/dashboard-ecommerce.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
