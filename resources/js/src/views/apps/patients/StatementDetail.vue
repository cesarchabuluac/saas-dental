<template>
	<b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
		<template #overlay>
			<div class="d-flex align-items-center">
				<b-spinner small type="grow" variant="secondary" />
				<b-spinner type="grow" variant="dark" />
				<b-spinner small type="grow" variant="secondary" />
			</div>
		</template>
		<section class="invoice-preview-wrapper">

			<!-- Alert: No item found -->
			<b-alert variant="danger" :show="patientData === undefined">
				<h4 class="alert-heading">
					Error getting patient data
				</h4>
				<div class="alert-body">
					No data found with this patient ID.
					<b-link class="alert-link" :to="{ name: 'apps-patients-list' }">
						Consult the patient list
					</b-link>
					to see other invoices
				</div>
			</b-alert>

			<b-row v-if="patientData" class="invoice-preview">

				<!-- Col: Left (Invoice Container) -->
				<b-col cols="12" xl="9" md="8">

					<!-- <VueHtml2pdf
						id="viewer"
						:show-layout="false"
						:float-layout="true"
						:enable-download="false"
						:preview-modal="true"
						:paginate-elements-by-height="10"        
						:pdf-quality="2"
						:manual-pagination="true"
						pdf-format="letter"
						pdf-orientation="portrait"
						ref="html2Pdf"
						:html-to-pdf-options="pdfOptions"
						>

						<section slot="pdf-content" class="invoice-preview-wrapper">
							<section class="pdf-item"> -->
								<b-card no-body class="invoice-preview-card">
									<!-- Header -->
									<b-card-body class="invoice-padding pb-0">

										<div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">

											<!-- Header: Left Content -->
											<div>
												<div class="logo-wrapper">
													<h3 class="text-primary invoice-logo">
														{{ findSetting('app_name') }}
													</h3>
												</div>
												<p class="card-text mb-25">
													<strong>{{ patientData.full_name }}</strong><br>
													<small><feather-icon icon="MailIcon" class="mr-50" /> {{ patientData.email
													}}</small>
												</p>
												<p class="card-text mb-25">
													<feather-icon icon="UserIcon" class="mr-50" /> {{ patientData.document_type }}:
													{{ patientData.rut }}
												</p>
												<p class="card-text mb-25">
													<feather-icon icon="MapPinIcon" class="mr-50" /> {{ patientData.address }}
												</p>
												<p class="card-text mb-0">
													<feather-icon icon="PhoneIcon" class="mr-50" /> {{ patientData.mobile ?
														patientData.mobile.e164 : patientData.cellphone }}, {{ patientData.phone }}
												</p>
											</div>

											<!-- Header: Right Content -->
											<div class="mt-md-0 mt-2">
												<h4 class="invoice-title">
													{{ $t('patients.identifier') }}:
													<span class="invoice-number">{{ padString(patientData.id) }}</span>
												</h4>
												<ul class="list-unstyled my-1 font-weight-bold text-capitalize">
													<li>
														<span class="align-middle">
															{{ $t('date') }}
															{{ momentFormat() }}
														</span>
													</li>
													<li>
														<span class="align-middle">
															{{ $t("debt") }}
															<b-badge pill :variant="`light-danger`" class="text-capitalize">
																{{ totalCostFormatted }}
															</b-badge>
														</span>
													</li>
													<li class="my-25">
														<span class="align-middle">{{ $t("paid") }}
															<b-badge pill :variant="`light-success`" class="text-capitalize">
																{{ totalPaidFormatted }}
															</b-badge>
														</span>
													</li>
													<li>
														<span class="align-middle">{{ $t("per_paid") }}
															<b-badge pill :variant="`light-warning`" class="text-capitalize">
																{{ totalDebtFormatted }}
															</b-badge>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</b-card-body>

									<!-- Invoice Description: Table -->
									<!-- sticky-header="100vh" -->
									<b-table responsive bordered outlined  :foot-clone="false"
										:no-border-collapse="false" class="position-relative text-small table-small small" :fields="tableFields"
										:items="patientData.budgets" small>

										<!-- Column: label -->
										<template #cell(budget)="data">
											{{ data.item.label }}
										</template>

										<!-- Column: subtotal -->
										<template #cell(subtotal)="data">
											{{ amountFormatted(data.item.subtotal * 1) }}
										</template>

										<!-- Column: discount -->
										<template #cell(discount)="data">
											{{ amountFormatted(data.item.discount * 1) }}
										</template>

										<!-- Column: total -->
										<template #cell(total)="data">
											{{ amountFormatted(data.item.total_cost) }}
										</template>

										<!-- Column: paid -->
										<template #cell(paid)="data">
											{{ amountFormatted(data.item.total_paid) }}
										</template>

										<!-- Column: debt -->
										<template #cell(debt)="data">
											{{ amountFormatted(data.item.total_debt) }}
										</template>

										<!-- Action Details -->
										<template #row-details="data">

											<b-card>
												<b-row class="mb-2">
													<b-col md="12" class="mb-1">
														<b-table responsive class="text-small table-small small" :foot-clone="false" :no-border-collapse="false"
															:items="data.item.budget_actions" :fields="tableDetailFields" caption-top
															:show-empty="true" :empty-text="$t('datatables.sEmptyTable')" small>

															<template #table-caption>
																<strong>{{ $t('patients.statements.budget_detail')}} {{ data.item.label }}</strong>
															</template>

															<!-- Description -->
															<template #cell(description)="data">
																<b-card-text class="font-weight-bold mb-25">
																	{{ data.item.action_name }}
																</b-card-text>
																<b-card-text class="text-wrap">
																	{{ data.item.action_group_name }}, 
																	<strong>{{ $t('area') }} {{ data.item.area }}</strong>
																</b-card-text>
																<span class="badge badge-light-primary float-left text-wrap">
																	{{ data.item.action_type === 'clinical' ? $t('budgets.clinical_action') : $t('budgets.laboratory_action') }}
																</span>
															</template>

															<!-- Subtotal -->
															<template #cell(subtotal)="data">
																{{ amountFormatted(data.item.price * 1) }}
															</template>

															<!-- Discount -->
															<template #cell(discount)="data">
																{{ amountFormatted(data.item.discount * 1) }}
															</template>

															<!-- Total -->
															<template #cell(total)="data">
																{{ amountFormatted(data.item.subtotal * 1) }}
															</template>

															<!-- Paid -->
															<template #cell(paid)="data">
																{{ amountFormatted(data.item.paid * 1) }}
															</template>

															<!-- Debt -->
															<template #cell(debt)="data">
																{{ amountFormatted(data.item.debt * 1) }}
															</template>

															<!-- Payment Details -->
															<template #row-details="data">
																<b-table v-if="data.item.action_type === 'clinical'" responsive
																	class="text-small table-small small"
																	:foot-clone="false" :no-border-collapse="false"
																	:items="data.item.clinical_payments" :fields="tablePaymentDetails"
																	:show-empty="true" caption-top
																	:empty-text="$t('datatables.sEmptyTable')" small>
																	<template #table-caption><strong>{{
																		$t('patients.statements.payment_details')
																	}}</strong></template>

																	<!-- date -->
																	<template #cell(date)="data">
																		{{ data.item.payment_date }}
																	</template>

																	<!-- amount -->
																	<template #cell(amount)="data">
																		{{ amountFormatted(data.item.amount * 1) }}
																	</template>

																	<!-- payment_method -->
																	<template #cell(method)="data">
																		{{ translatePaymentMethod(data.item.payment.method) }}
																	</template>
																</b-table>

																<b-table v-else responsive :foot-clone="false"
																	class="text-small table-small small"
																	:no-border-collapse="false" :items="data.item.laboratory_payments"
																	:fields="tablePaymentDetails" :show-empty="true" caption-top
																	:empty-text="$t('datatables.sEmptyTable')" small>
																	<template #table-caption><strong>{{
																		$t('patients.statements.payment_details')
																	}}</strong></template>

																	<!-- date -->
																	<template #cell(date)="data">
																		{{ data.item.payment_date }}
																	</template>

																	<!-- amount -->
																	<template #cell(amount)="data">
																		{{ amountFormatted(data.item.amount * 1) }}
																	</template>

																	<!-- payment_method -->
																	<template #cell(method)="data">
																		{{ translatePaymentMethod(data.item.payment.method) }}
																	</template>
																</b-table>
															</template>
														</b-table>
													</b-col>
												</b-row>
											</b-card>
										</template>
									</b-table>
								</b-card>
							<!-- </section>
						</section>
					</VueHtml2pdf>	 -->
				</b-col>

				<!-- Right Col: Card -->
				<b-col cols="12" md="4" xl="3" class="invoice-actions">
					<b-card>

						<!-- Button: Send Invoice -->
						<b-button :disabled="isActive" @click="sendStatementDetails"
							v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mb-75" block>
							{{ $t('button_send') }}
						</b-button>

						<!-- Button: Download -->
						<b-button @click="statementDetailDownload" v-ripple.400="'rgba(186, 191, 199, 0.15)'"
							variant="outline-secondary" class="mb-75" block>
							{{ $t('button_download') }}
						</b-button>

						<!-- Button: Print -->
						<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" class="mb-75" block
							@click="printInvoice">
							{{ $t('button_print') }}
						</b-button>

						<!-- Button: Return -->
						<b-button @click="$router.back()" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="secondary"
							class="mb-75" block>
							{{ $t('back') }}
						</b-button>
					</b-card>
				</b-col>

				
			</b-row>
		</section>
	</b-overlay>
</template>

<script>
import { format } from 'date-fns';
import { ref, computed, onUnmounted, onMounted } from '@vue/composition-api'
import Swal from "sweetalert2";
import "animate.css";
import store from '@/store'
import router from '@/router'
import {
	BRow, BCol, BCard, BCardBody, BTableLite, BTable, BCardText, BButton, BAlert, BLink, VBToggle,
	BBadge, BOverlay, BSpinner,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import VueHtml2pdf from 'vue-html2pdf'

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import { useUtils as useI18nUtils } from '@core/libs/i18n'

import PatientProvider from "@/providers/Patients"
const PatientResource = new PatientProvider()

export default {
	name: 'StatementDetail',
	directives: {
		Ripple,
		'b-toggle': VBToggle,
	},
	components: {
		BRow,
		BCol,
		BCard,
		BCardBody,
		BTableLite,
		BTable,
		BCardText,
		BButton,
		BAlert,
		BLink,
		BBadge,
		BOverlay,
		BSpinner,

		//
		VueHtml2pdf,
	},
	methods: {
		generateDocument () {
			this.$refs.html2Pdf.generatePdf()
		}
	},
	setup() {

		// Use toast
		const toast = useToast();

		const { t } = useI18nUtils()

		const patientData = ref(null)
		const paymentDetails = ref({})
		const loading = ref(false)

		const pdfOptions = ref({
			margin: [5, 0, 0, 2], // top, left, buttom, right
			image: { type: 'jpg', quality: 0.98 },              
			html2canvas: {
				scale: 2,
				bottom: 0,
				// letterRendering: true,
			},
			jsPDF: {
			unit: 'mm',
			orientation: 'portrait',
			},              
		})

		const translateMessages = {
            fileName: t('patients.statements.title_download'),
			accept: t('accept'),
			failed_download: t('patients.statements.failed_download'),
			failed_print: t('patients.statements.failed_print'),
			send_title: t('patients.statements.send.title'),
			send_description: t('patients.statements.send.description'),
			button_send: t('send'),
			button_cancel: t('cancel'),
			valid_email: t('patients.statements.send.valid_email'),
			send_success_title: t('patients.statements.send.success.title'),
			send_success_description: t('patients.statements.send.success.description'),
			send_failed_title: t('patients.statements.send.failed.title')
        };

		const tableFields = [
			{
				key: 'label',
				label: t('patients.statements.table.budget'),
				tdClass: 'font-weight-bold',
			},
			{
				key: 'subtotal',
				label: t('patients.statements.table.subtotal'),
				tdClass: 'font-weight-bold',
			},
			{
				key: 'discount',
				label: t('patients.statements.table.discount'),
				tdClass: 'font-weight-bold',
			},
			{
				key: 'total',
				label: t('patients.statements.table.total'),
				tdClass: 'font-weight-bold',
			},
			{
				key: 'paid',
				label: t('patients.statements.table.paid'),
				tdClass: 'font-weight-bold',
			},
			{
				key: 'debt',
				label: t('patients.statements.table.debt'),
				tdClass: 'font-weight-bold',
			},
		];

		const tableDetailFields = [
			{
				key: 'description',
				label: t('patients.statements.table.description'),
			},
			{
				key: 'subtotal',
				label: t('patients.statements.table.subtotal'),
			},
			{
				key: 'discount',
				label: t('patients.statements.table.discount'),
			},
			{
				key: 'total',
				label: t('patients.statements.table.total'),
			},
			{
				key: 'paid',
				label: t('patients.statements.table.total'),
			},
			{
				key: 'debt',
				label: t('patients.statements.table.balance'),
			},
		]

		const tablePaymentDetails = [
			{
				key: 'date',
				label: t('patients.statements.table.date'),
			},
			{
				key: 'amount',
				label: t('patients.statements.table.amount'),
			},
			{
				key: 'method',
				label: t('patients.statements.table.method'),
			},
		]

		const getPatient = async () => {
			try {
				loading.value = true
				const { data } = await PatientResource.getPatientDetail(router.currentRoute.params.id)
				loading.value = false
				patientData.value = data.data
				patientData.value.budgets = data.data.budgets.map(b => ({ ...b, _showDetails: true }))
				_.map(patientData.value.budgets, budget => {
					_.map(budget.budget_actions, action => {
						action._showDetails = true
						return action
					})
				})
			} catch (error) {
				console.log(error)
			}
		}

		const isActive = computed(() => {
			return patientData.value.deleted_at !== null
		})

		const totalCost = computed(() => {
			return patientData.value.budgets.reduce((carry, cost) => {
				return carry + (cost.approved ? parseFloat(cost.total_cost) : 0);
			}, 0);
		})

		const totalPaid = computed(() => {
			return patientData.value.budgets.reduce((carry, cost) => {
				return carry + (cost.approved ? parseFloat(cost.total_paid) : 0);
			}, 0);
		})

		const totalDebt = computed(() => {
			return patientData.value.budgets.reduce((carry, cost) => {
				return carry + (cost.approved ? parseFloat(cost.total_debt) : 0);
			}, 0);
		})

		const totalCostFormatted = computed(() => {
			return totalCost.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		})

		const totalPaidFormatted = computed(() => {
			return totalPaid.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		})

		const totalDebtFormatted = computed(() => {
			return totalDebt.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		})

		const amountFormatted = (amount) => {
			return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		}

		const sendStatementDetails = async () => {
			Swal.fire({
				title: translateMessages.send_title,
				html: translateMessages.send_description,
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: translateMessages.button_send,
				cancelButtonText: translateMessages.button_cancel,
				customClass: {
					confirmButton: "btn btn-primary",
					cancelButton: "btn btn-outline-danger ml-1",
				},
				showClass: {
					popup: "animate__animated animate__flipInX",
				},
				buttonsStyling: false,
				showLoaderOnConfirm: true,
				input: 'email',
				inputValue: patientData.value.email,
				inputAttributes: {
					autocapitalize: 'off'
				},
				preConfirm: async (email) => {
					if (!email) {
						Swal.showValidationMessage(translateMessages.valid_email)
					} else {
						try {
							const { data } = await PatientResource.show(router.currentRoute.params.id, { isMail: 1, email: email })
							if (data.success) {
								Swal.fire({
									title: translateMessages.send_success_title,
									text: translateMessages.send_success_description,
									icon: 'success',
									showClass: {
										popup: "animate__animated animate__flipInX",
									},
									buttonsStyling: false,
									confirmButtonText: translateMessages.accept,
									customClass: {
										confirmButton: "btn btn-primary",
									},
								})
							} else {
								Swal.showValidationMessage(translateMessages.send_failed_title)
							}
						} catch (error) {
							console.log(error)
							Swal.showValidationMessage(translateMessages.send_failed_title)
						}
					}
				},
				allowOutsideClick: () => !Swal.isLoading(),
			})
		}

		const statementDetailDownload = async () => {
			const query = {
				isPdf: 1,
			}
			try {
				loading.value = true
				const { data } = await PatientResource.show(router.currentRoute.params.id, query)
				loading.value = false
				const url = window.URL.createObjectURL(new Blob([data]));
				const link = document.createElement('a');
				link.href = url;
				const currentDate = new Date();
				const formattedDate = format(currentDate, 'yyyyMMddHHmmss');
				link.setAttribute('download', `${translateMessages.fileName}-${patientData.value.id}-${formattedDate}.pdf`);
				link.click();
				document.body.appendChild(link);

			} catch (error) {
				Swal.fire({
					title: '¡Error!',
					text: translateMessages.failed_download,
					icon: 'error',
					showClass: {
						popup: "animate__animated animate__flipInX",
					},
					buttonsStyling: false,
					confirmButtonText: translateMessages.accept,
					customClass: {
						confirmButton: "btn btn-primary",
					},
				})
			}
		}

		onMounted(async () => {
			await getPatient()
		})

		const printInvoice = async () => {
			const query = {
				isPrint: 1,
			}
			try {
				loading.value = true
				const { data } = await PatientResource.show(router.currentRoute.params.id, query)
				loading.value = false
				const file = new Blob([data], { type: 'application/pdf' });
				const fileURL = URL.createObjectURL(file);
				window.open(fileURL, '_blank');

			} catch (error) {
				Swal.fire({
					title: '¡Error!',
					text: translateMessages.failed_print,
					icon: 'error',
					showClass: {
						popup: "animate__animated animate__flipInX",
					},
					buttonsStyling: false,
					confirmButtonText: translateMessages.accept,
					customClass: {
						confirmButton: "btn btn-primary",
					},
				})
			}
		}

		return {
			isActive,
			loading,
			patientData,
			paymentDetails,
			printInvoice,
			tableFields,
			tableDetailFields,
			tablePaymentDetails,
			pdfOptions,

			// Total Cost
			totalCostFormatted,
			totalPaidFormatted,
			totalDebtFormatted,
			amountFormatted,

			//actions
			sendStatementDetails,
			statementDetailDownload,
		}
	},
}
</script>

<style lang="scss" scoped>
@import "~@resources/scss/base/pages/app-invoice.scss";
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
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
