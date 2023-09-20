<template>
	<b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
		<template #overlay>
			<div class="d-flex align-items-center">
				<b-spinner small type="grow" variant="secondary" />
				<b-spinner type="grow" variant="dark" />
				<b-spinner small type="grow" variant="secondary" />
			</div>
		</template>

		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="patient === undefined">
			<h4 class="alert-heading">Error fetching patient data</h4>
			<div class="alert-body">
				No patient found with this user id. Check
				<b-link class="alert-link" :to="{ name: 'apps-patients-list' }">
					Patient List
				</b-link>
				for other patients.
			</div>
		</b-alert>

		<div v-if="patient">
			<b-row>
				<b-col cols="12" lg="12">
					<dashboard-patient :data="patient"></dashboard-patient>
				</b-col>
			</b-row>

			<!-- Buttons -->
			<b-row class="match-height">
				<b-col>
					<b-card>
						<div class="demo-inline-spacing">

							<b-button v-if="canAccess('patients.statement_account')" variant="dark" pill
								@click="$router.push({ name: 'apps-patients-view-statement-detail', params: { patient_id: patient.id }, })">
								<span class="text-nowrap">
									{{ $t('patients.account_statement') }}
								</span>
							</b-button>

							<b-button :disabled="isDisabled" v-if="canAccess('orders.create')" variant="primary" pill
								@click="$router.push({ name: 'apps-work-orders-add', params: { patient_id: patient.id, name: patient.name }, })">
								<span class="text-nowrap">
									{{ $t("patients.work_order.add") }}
								</span>
							</b-button>

							<b-button :disabled="isDisabled" v-if="canAccess('budgets.create')" variant="warning" pill
								@click="$router.push({ name: 'apps-budgets-add', params: { patient_id: patient.id, name: patient.name }, })">
								<span class="text-nowrap">
									{{ $t("patients.budgets.add") }}
								</span>
							</b-button>

							<b-button :disabled="isDisabled" v-if="canAccess('patients.evolution_add')"
								v-b-modal.modal-center class="float-right" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
								variant="secondary" pill>
								{{ $t('patients.evolutions.add') }}
							</b-button>

							<b-button class="float-right" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
								variant="outline-primary" pill @click="$router.back()">
								<feather-icon icon="ChevronLeftIcon" class="mr-50" />
								<span class="align-middle">{{ $t('back') }}</span>
							</b-button>
						</div>
					</b-card>
				</b-col>
			</b-row>

			<!-- Tabs -->
			<b-row>
				<b-col cols="12" lg="12">
					<b-card no-body class="mb-0">
						<div class="m-2">
							<b-tabs pills>
								<!-- Tab: Account -->
								<b-tab active>
									<template #title>
										<feather-icon icon="InfoIcon" size="16" class="mr-0 mr-sm-50" />
										<span class="ml-1">{{ $t("patients.information") }}</span>
									</template>
									<hr>

									<!-- Patient Info: Input Fields -->
									<b-form>
										<b-row>
											<!-- Field: Name -->
											<b-col cols="12" md="4">
												<b-form-group :label="$t('patients.name')" label-for="name">
													<b-form-input id="name" v-model="patient.name"
														:placeholder="$t('patients.name_placeholder')" disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Last Name -->
											<b-col cols="12" md="4">
												<b-form-group :label="$t('patients.last_name')" label-for="last_name">
													<b-form-input id="last_name" v-model="patient.last_name"
														:placeholder="$t('patients.last_name_placeholder')" disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Mother Last Name -->
											<b-col cols="12" md="4">
												<b-form-group :label="$t('patients.mother_last_name')"
													label-for="mother_last_name">
													<b-form-input id="mother_last_name" v-model="patient.mother_last_name"
														:placeholder="$t('patients.mother_last_name_placeholder')"
														disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Document Type -->
											<b-col cols="12" md="4">
												<b-form-group :label="$t('patients.document_type')" label-for="rut">
													<b-form-input id="document_type"
														:value="`${resolveTypeDocumentTranslate(patient.document_type)}`"
														disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Document -->
											<b-col cols="12" md="4">
												<b-form-group :label="$t('patients.document')" label-for="rut">
													<b-form-input id="rut" v-model="patient.rut"
														:placeholder="$t('patients.document_placeholder')" disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Birth Date -->
											<b-col cols="12" md="6" lg="4">
												<b-form-group :label="$t('patients.birthday')" label-for="birthday">
													<b-form-input id="birthday" :value="`${dateFormat(patient.birthday)}`"
														disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Email -->
											<b-col cols="12" md="4">
												<b-form-group :label="$t('patients.email')" label-for="email">
													<b-form-input id="email" type="email" v-model="patient.email"
														:placeholder="$t('patients.email_placeholder')" disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Cell phone -->
											<b-col cols="12" md="4">
												<b-form-group :label="$t('patients.cellphone')" label-for="cellphone">
													<b-form-input id="cellphone" v-model="patient.cellphone"
														:placeholder="$t('patients.cellphone_placeholder')" disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Phone -->
											<b-col cols="12" md="4">
												<b-form-group :label="$t('patients.phone')" label-for="phone">
													<b-form-input id="phone" v-model="patient.phone"
														:placeholder="$t('patients.phone_placeholder')" disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Address -->
											<b-col cols="12" md="6">
												<b-form-group :label="$t('patients.address')" label-for="address">
													<b-form-input id="address" v-model="patient.address"
														:placeholder="$t('patients.address_placeholder')" disabled />
												</b-form-group>
											</b-col>

											<!-- Field: Comments -->
											<b-col cols="12" md="6">
												<b-form-group :label="$t('patients.comments')" label-for="comments">
													<b-form-input id="comments" v-model="patient.comments"
														:placeholder="$t('patients.comments_placeholder')" disabled />
												</b-form-group>
											</b-col>
										</b-row>
									</b-form>
								</b-tab>

								<!-- Tab: Information -->
								<b-tab>
									<template #title>
										<feather-icon icon="BookOpenIcon" size="16" class="mr-0 mr-sm-50" />
										<span class="ml-1">{{ $t("patients.general_anamnesis") }}</span>
									</template>
									<hr>

									<!-- Form: Anamnesis Form -->
									<b-form class="mt-1">
										<b-row>
											<!-- First reason consultation -->
											<b-col cols="12" md="4" lg="4">
												<b-form-group :label="$t('patients.anamnesis.first_reason_consultation')"
													label-for="first_reason_consultation">
													<b-form-textarea id="first_reason_consultation"
														v-model="anamnesi.first_reason_consultation" rows="2"
														:placeholder="$t('patients.anamnesis.first_reason_consultation')" />
												</b-form-group>
											</b-col>

											<!-- Medical History -->
											<b-col cols="12" md="4" lg="4">
												<b-form-group :label="$t('patients.anamnesis.medical_history')"
													label-for="anamnesis_medical_history">
													<b-form-textarea id="anamnesis_medical_history"
														v-model="anamnesi.medical_history" rows="2"
														:placeholder="$t('patients.anamnesis.medical_history')" />
												</b-form-group>
											</b-col>

											<!-- Allergies -->
											<b-col cols="12" md="4" lg="4">
												<b-form-group :label="$t('patients.anamnesis.allergies')"
													label-for="anamnesis_allergies">
													<b-form-textarea id="anamnesis_allergies" v-model="anamnesi.allergies"
														rows="2" :placeholder="$t('patients.anamnesis.allergies')" />
												</b-form-group>
											</b-col>

											<!-- Medicines -->
											<b-col cols="12" md="4" lg="4">
												<b-form-group :label="$t('patients.anamnesis.medicines')"
													label-for="anamnesis_medicines">
													<b-form-textarea id="anamnesis_medicines" v-model="anamnesi.medicines"
														rows="2" :placeholder="$t('patients.anamnesis.medicines')" />
												</b-form-group>
											</b-col>

											<!-- Habits -->
											<b-col cols="12" md="4" lg="4">
												<b-form-group :label="$t('patients.anamnesis.habits')"
													label-for="anamnesis_habits">
													<b-form-textarea id="anamnesis_habits" v-model="anamnesi.habits"
														rows="2" :placeholder="$t('patients.anamnesis.habits')" />
												</b-form-group>
											</b-col>

											<!-- Family background -->
											<b-col cols="12" md="4" lg="4">
												<b-form-group :label="$t('patients.anamnesis.family_background')"
													label-for="anamnesi_family_background">
													<b-form-textarea id="anamnesi_family_background"
														v-model="anamnesi.family_background" rows="2"
														:placeholder="$t('patients.anamnesis.family_background')" />
												</b-form-group>
											</b-col>

											<!-- Others -->
											<b-col cols="12" md="4" lg="4">
												<b-form-group :label="$t('patients.anamnesis.others')"
													label-for="anamnesi_others">
													<b-form-textarea id="anamnesi_others" v-model="anamnesi.others"
														rows="2" :placeholder="$t('patients.anamnesis.others')" />
												</b-form-group>
											</b-col>

											<b-col cols="12" md="4" lg="4">
												<!-- Field: anamnesi_pregnancy -->
												<b-col cols="12">
													<b-form-group>
														<b-form-checkbox id="anamnesi_pregnancy" name="anamnesi_pregnancy"
															v-model="anamnesi.pregnancy">
															{{ $t("patients.anamnesis.pregnancy") }}
														</b-form-checkbox>
													</b-form-group>
												</b-col>

												<!-- Field: coagulation_problems -->
												<b-col cols="12">
													<b-form-group>
														<b-form-checkbox id="coagulation_problems"
															name="coagulation_problems"
															v-model="anamnesi.coagulation_problems">
															{{ $t("patients.anamnesis.coagulation_problems") }}
														</b-form-checkbox>
													</b-form-group>
												</b-col>

												<!-- Field: anamnesi_local_analgesic_problems -->
												<b-col cols="12">
													<b-form-group>
														<b-form-checkbox id="anamnesi_local_analgesic_problems"
															name="anamnesi_local_analgesic_problems"
															v-model="anamnesi.local_analgesic_problems">
															{{ $t("patients.anamnesis.local_analgesic_problems") }}
														</b-form-checkbox>
													</b-form-group>
												</b-col>
											</b-col>
										</b-row>

										<!-- Action Buttons -->
										<b-button :disabled="isDisabled" v-if="canAccess('anamnesis.update')"
											variant="primary" class="mb-1 mt-3 mb-sm-0 mr-0 mr-sm-1" @click="storeAnamnesi">
											{{ $t("save") }}
										</b-button>
									</b-form>
								</b-tab>

								<!-- Tab: Evolutions -->
								<b-tab>
									<template #title>
										<feather-icon icon="GitBranchIcon" size="16" class="mr-0 mr-sm-50" />
										<span class="ml-1">{{ $t("patients.evolutions.title") }}</span>
									</template>
									<b-table ref="refEvolutionsListTable" class="position-relative" :items="budgets"
										responsive :fields="columnEvolutions" primary-key="id" show-empty
										:empty-text="$t('datatables.sZeroRecords')" :current-page="currentPage"
										busy.sync="loading" stacked="md">

										<!-- Column: label -->
										<template #cell(label)="data">
											<div v-if="canAccess('budgets.show')">
												<b-link :to="{
													name: 'apps-budgets-show',
													params: { id: data.item.id }
												}" class="font-weight-bold">
													{{ (data.item.label) }}
												</b-link>
											</div>
											<div v-else>
												{{ data.item.label }}
											</div>
										</template>

										<!-- Column: Clinical -->
										<template #cell(clinical)="data">
											<ul class="list-unstyled my-0">
												<li v-for="(item, index) in data.item.budget_actions" :key="index">
													<span v-if="item.action_type === 'clinical'" class="align-middle">
														<strong>{{ item.has_previous_professional ? item.professional.name :
															lines.padStart(20, '- ') }}:</strong> {{ item.action_name }}
														<br>
														{{ $t('budgets.action_area') }}:
														<b-badge pill :variant="`light-danger`" class="text-capitalize">
															{{ item.area }}
														</b-badge>
													</span>
												</li>
											</ul>
										</template>

										<!-- Column: Laboratory -->
										<template #cell(laboratory)="data">
											<ul class="list-unstyled my-1">
												<li v-for="(item, index) in data.item.budget_actions" :key="index">
													<span v-if="item.action_type === 'laboratory'" class="align-middle">
														{{ item.action_name }}
														<b-badge pill :variant="`light-danger`" class="text-capitalize">
															{{ item.area }}
														</b-badge>
													</span>
												</li>
											</ul>
										</template>

										<!-- Column: Actions -->
										<template #cell(actions)="data">
											<b-button :disabled="isDisabled"
												v-if="data.item.approved && canAccess('patients.evolution_add')"
												v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" size="sm"
												@click="$router.push({ name: 'apps-patients-evolution', params: { id: data.item.patient_id, budget_id: data.item.id } })">
												{{ $t('patients.evolution_new_clinic_history') }}
											</b-button>
										</template>
									</b-table>
								</b-tab>

								<!-- Tab: Time line -->
								<b-tab>
									<template #title>
										<feather-icon icon="ClockIcon" size="16" class="mr-0 mr-sm-50" />
										<span class="ml-1">{{ $t("patients.evolution_clinic_history") }}</span>
									</template>
									<hr>

									<b-card>
										<app-timeline>
											<app-timeline-item v-for="(item, index) in histories" :key="index"
												:variant="item.action_type === 'clinical' ? 'primary' : 'info'">
												<h4 class="text-capitalize">{{ formatDate(item.created_at) }}</h4>
												<p v-if="item.action" class="text-wrap">
													{{ item.action.action_name }} ({{ item.action.area }}),
													<span class="text-left" v-for="(action, idx) in item.parents"
														:key="idx">
														{{ action.action.action_name }} ({{ action.action.area }})
													</span>
												</p>
												<p class="text-wrapp">{{ item.comments }}</p>

												<div v-if="item.has_media"
													class="d-flex justify-content-start align-items-center mb-1">
													<a :href="item.file" target="_blank" class="font-weight-bold">
														<b-img height="auto" width="100" fluid rounded class="mb-25 mr-1"
															:src="item.file" />
													</a>
													<!-- <div class="profile-user-info">
														<h6 class="mb-0">
															<a :href="item.file" target="_blank" class="font-weight-bold">
																{{ item.file }}
															</a>
														</h6>
													</div> -->
												</div>

												<b-media>
													<template #aside>
														<b-avatar size="24" :text="avatarText(item.user.name)" />
													</template>
													<small>{{ $t('appointments.professional') }}
														{{ item.user.name }}</small>
												</b-media>
											</app-timeline-item>
										</app-timeline>
									</b-card>

								</b-tab>

								<!-- Tab: Budgets -->
								<b-tab>
									<template #title>
										<feather-icon icon="ClipboardIcon" size="16" class="mr-0 mr-sm-50" />
										<span class="ml-1">{{ $t("budgets.plural") }}</span>
									</template>
									<hr>
									<b-row v-if="canAccess('patients.budget')">
										<b-col cols="12" xl="12" lg="12" md="12">
											<b-card no-body class="mb-0">
												<b-table ref="refPaymentsListTable" class="position-relative"
													:items="budgets" striped responsive :fields="columnsBudgets"
													primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')"
													:current-page="currentPage" busy.sync="loading" stacked="md">

													<!-- Column: label -->
													<template #cell(label)="data">
														<b-link :disabled="!canAccess('budgets.show')" :to="{
															name: 'apps-budgets-show',
															params: { id: data.item.id }
														}" class="font-weight-bold">
															{{ (data.item.label) }}
														</b-link>
													</template>

													<!-- Column: created at  -->
													<template #cell(created_at)="data">
														{{ formatDate(data.item.created_at) }}
													</template>

													<!-- Column: total  -->
													<template #cell(total)="data">
														<span
															class="badge badge-light-warning float-left">{{ $t('budgets.subtotal') }}
															{{ formatPrice(data.item.subtotal) }} </span><br>
														<span
															class="badge badge-light-warning float-left">{{ $t('budgets.discount') }}
															{{ formatPrice(data.item.discount) }} </span><br>
														<span v-if="findSetting('enable_tax')"
															class="badge badge-light-warning float-left">{{ $t('budgets.tax') }}
															{{ formatPrice(data.item.tax) }} </span><br>
														<p class="card-text text-wrap fw-bold mb-25 text-center">
															{{ formatPrice(data.item.total) }}</p>
													</template>

													<!-- Column: total paid  -->
													<template #cell(total_paid)="data">
														{{ formatPrice(data.item.total_paid) }}
													</template>

													<!-- Column: total debt  -->
													<template #cell(total_debt)="data">
														{{ formatPrice(data.item.total_debt) }}
													</template>

													<template #cell(state)="data">
														<b-badge pill
															:variant="`light-${resolveBudgetApproved(data.item.approved)}`"
															class="text-capitalize">
															{{ resolveBudgetApprovedTranslate(data.item.approved) }}
														</b-badge>
													</template>

													<!-- Column: Actions -->
													<template #cell(actions)="data">

														<div class="demo-inline-spacing">

															<b-button :disabled="isDisabled"
																v-if="data.item.total_debt > 0 && canAccess('payments.create') && data.item.approved && !isPatient && !isDoctor"
																v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"
																class="btn-icon" size="sm"
																@click="$router.push({ name: 'payments.budgets.charge', params: { id: data.item.id, }, })">
																<feather-icon icon="DollarSignIcon" />
															</b-button>

															<b-button :disabled="isDisabled"
																v-if="findSetting('enable_email_notification') && canAccess('budgets.send') && !isPatient && !isDoctor"
																v-ripple.400="'rgba(255, 255, 255, 0.15)'"
																variant="secondary" class="btn-icon" size="sm"
																@click="sendEmail(data.item)">
																<feather-icon icon="SendIcon" />
															</b-button>

															<b-button
																v-if="canAccess('budgets.show') && !isPatient && !isDoctor"
																v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="info"
																class="btn-icon" size="sm"
																@click="$router.push({ name: 'apps-budgets-show', params: { id: data.item.id } })">
																<feather-icon icon="EyeIcon" />
															</b-button>

															<!-- Dropdown -->
															<b-dropdown
																v-if="!data.item.deleted_at && !data.item.approved && !isPatient && !isDoctor"
																variant="link" toggle-class="p-0" no-caret :right="true">
																<template #button-content>
																	<feather-icon icon="MoreVerticalIcon" size="22"
																		class="align-middle text-body" />
																</template>

																<b-dropdown-item :disabled="isDisabled"
																	v-if="!data.item.approved && canAccess('budgets.approve')"
																	@click="setApproved(data.item)">
																	<feather-icon icon="CheckSquareIcon" />
																	<span
																		class="align-middle ml-50">{{ $t('budgets.options_approve') }}</span>
																</b-dropdown-item>

																<b-dropdown-item :disabled="isDisabled"
																	v-if="!data.item.deleted_at && !data.item.approved && canAccess('budgets.edit')"
																	:to="{ name: 'apps-budgets-edit', params: { id: data.item.id } }">
																	<feather-icon icon="EditIcon" />
																	<span
																		class="align-middle ml-50">{{ $t('budgets.options_edit') }}</span>
																</b-dropdown-item>

																<b-dropdown-item :disabled="isDisabled"
																	v-if="!data.item.deleted_at && data.item.total_paid <= 0 && !data.item.approved && canAccess('budgets.destroy')"
																	@click="deleteBudget(data.item)">
																	<feather-icon icon="TrashIcon" />
																	<span
																		class="align-middle ml-50">{{ $t('budgets.options_delete') }}</span>
																</b-dropdown-item>
															</b-dropdown>
														</div>
													</template>
												</b-table>
											</b-card>
										</b-col>
									</b-row>
								</b-tab>

								<!-- Tab: Work Orders -->
								<b-tab>
									<template #title>
										<feather-icon icon="FileTextIcon" size="16" class="mr-0 mr-sm-50" />
										<span class="ml-1">{{ $t("patients.work_order.plural") }}</span>
									</template>
									<hr>
									<b-table stacked="sm" ref="refWorkOrderListTable" class="position-relative"
										:items="workorders" responsive striped hover :fields="columnOrders" primary-key="id"
										show-empty :empty-text="$t('datatables.sZeroRecords')" busy.sync="loading">

										<!-- Label -->
										<template #cell(label)="data">
											<b-link @click="data.toggleDetails" class="text-wrap"
												:id="`invoice-row-${data.item.id}-detail-icon`" v-b-tooltip.hover
												:title="$t('budgets.options_show_detail_tooltip')">
												{{ data.item.id }}
											</b-link>
										</template>

										<!-- Laboratory -->
										<template #cell(laboratory)="data">
											{{ data.item.laboratory.name }}<br>
											<small class="text-muted">
												<b-link :href="`tel:${data.item.laboratory.phone}`">
													<feather-icon icon="PhoneCallIcon" class="cursor-pointer" />
													{{ data.item.laboratory.phone }}
												</b-link><br>
												{{ data.item.laboratory.document_type }}: {{ data.item.laboratory.rut }}
											</small>
										</template>

										<!-- professional -->
										<template #cell(professional)="data">
											{{ data.item.professional.name }}<br>
											<span class="font-weight-bold d-block text-wrap">
												{{ data.item.professional.email }}
											</span>
										</template>

										<!-- Column: application_date -->
										<template #cell(application_date)="data">
											{{ dateFormat(data.item.application_date) }}
										</template>

										<!-- Column: delivery_date -->
										<template #cell(delivery_date)="data">
											<span v-if="data.item.is_expired" class="text-danger">{{
												dateFormat(data.item.delivery_date) }}</span>
											<span v-else>{{ dateFormat(data.item.delivery_date) }}</span>

										</template>

										<!-- Column: status -->
										<template #cell(status)="data">
											<b-badge pill :variant="`light-${resolveStatusVariant(data.item.status)}`"
												class="text-capitalize">
												{{ data.item.status }}
											</b-badge>
										</template>

										<template #cell(actions)="data">

											<div class="demo-inline-spacing">
												<b-button :disabled="isDisabled" v-if="data.item.status === 'En proceso'"
													v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning"
													class="btn-icon" size="sm" @click="changeStatus(data.item, 'Enviado')">
													<feather-icon icon="CheckCircleIcon" />
												</b-button>

												<b-button :disabled="isDisabled" v-if="data.item.status === 'Enviado'"
													v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="success"
													class="btn-icon" size="sm" @click="changeStatus(data.item, 'Recibido')">
													<feather-icon icon="CheckSquareIcon" />
												</b-button>

												<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"
													class="btn-icon" size="sm"
													@click="$router.push({ name: 'apps-work-orders-show', params: { id: data.item.id } })">
													<feather-icon icon="EyeIcon" />
												</b-button>

												<!-- Dropdown -->
												<b-dropdown v-if="!data.item.deleted_at" variant="link" toggle-class="p-0"
													no-caret :right="true">
													<template #button-content>
														<feather-icon icon="MoreVerticalIcon" size="22"
															class="align-middle text-body" />
													</template>
													<b-dropdown-item :disabled="isDisabled"
														v-if="!data.item.deleted_at && data.item.status === 'En proceso' && canAccess('orders.edit')"
														:to="{ name: 'apps-work-orders-edit', params: { id: data.item.id } }">
														<feather-icon icon="EditIcon" />
														<span
															class="align-middle ml-50">{{ $t('buttons.tooltip_edit') }}</span>
													</b-dropdown-item>
													<b-dropdown-item @click="donwloadWorkOrder(data.item)">
														<feather-icon icon="DownloadIcon" />
														<span
															class="align-middle ml-50">{{ $t('buttons.tooltip_download') }}</span>
													</b-dropdown-item>
													<b-dropdown-item :disabled="isDisabled"
														v-if="!data.item.deleted_at && data.item.status === 'En proceso' && canAccess('orders.destroy')"
														@click="deleteWorks(data.item)">
														<feather-icon icon="TrashIcon" />
														<span
															class="align-middle ml-50">{{ $t('budgets.options_delete') }}</span>
													</b-dropdown-item>
												</b-dropdown>
											</div>
										</template>
									</b-table>
								</b-tab>
							</b-tabs>
						</div>
					</b-card>
				</b-col>
			</b-row>

			<b-modal id="modal-center" centered :title="$t('patients.evolutions.modal.title')" ok-only @ok="addStory"
				:ok-title="$t('save')">
				<b-form-textarea v-model="comments" :placeholder="$t('patients.evolutions.modal.note_placeholder')"
					rows="4" />
			</b-modal>
		</div>
	</b-overlay>
</template>

<script>
import _ from 'lodash'
import router from '@/router'
import {
	BRow, BCol, BModal, BAlert, BLink, BCard, BButton, BMedia, BAvatar, BImg, BBadge, BCardHeader, BCardBody, BForm,
	BFormGroup, BFormInput, BTable, BPagination, BTab, BTabs, BFormTextarea, BFormCheckbox, BCardText, BSpinner,
	BOverlay, BCardTitle, BCardSubTitle, BTooltip, VBTooltip, BDropdown, BDropdownItem, BTableSimple, BTbody, BTd, BTfoot, BTr, BTh, BThead,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import "animate.css";

//Components
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import DashboardPatient from '@core/components/dashboards/DashboardPatient.vue'

// Providers
import PatientProvider from '@/providers/Patients'
import AnamnesiProvider from '@/providers/Anamnesis'
import MedicalHistoryProvider from '@/providers/MedicalHistories'
import BudgetProvider from '@/providers/Budgets'

const PatientResource = new PatientProvider()
const AnamnesiResource = new AnamnesiProvider()
const MedicalHistoryResource = new MedicalHistoryProvider()
const BudgetResource = new BudgetProvider()

export default {
	components: {
		BRow,
		BCol,
		BModal,
		BAlert,
		BLink,
		BCard,
		BButton,
		BMedia,
		BAvatar,
		BImg,
		BBadge,
		BCardHeader,
		BCardBody,
		BForm,
		BFormGroup,
		BFormInput,
		BTable,
		BTableSimple,
		BTbody,
		BTd,
		BTfoot,
		BTr,
		BTh,
		BThead,
		BPagination,
		BTab,
		BTabs,
		BFormTextarea,
		BFormCheckbox,
		BCardText,
		BSpinner,
		BOverlay,
		AppTimeline,
		AppTimelineItem,
		BCardTitle,
		BCardSubTitle,
		DashboardPatient,
		BTooltip,
		VBTooltip,
		BDropdown,
		BDropdownItem,
	},
	directives: {
		'b-tooltip': VBTooltip,
		Ripple,
	},
	data() {
		return {
			columnsBudgets: [
				{
					key: 'label',
					label: this.$t('budgets.budget'),
				},
				{
					key: 'created_at',
					label: this.$t('budgets.table_created_at'),
				},
				{
					key: 'total',
					label: this.$t('budgets.table_action_total'),
				},
				{
					key: 'total_paid',
					label: this.$t('budgets.table_action_paid'),
				},
				{
					key: 'total_debt',
					label: this.$t('budgets.table_action_balance'),
				},
				{
					key: 'state',
					label: this.$t('budgets.table_status'),
				},
				{
					key: 'actions',
					label: this.$t('actions')
				},
			],
			columnEvolutions: [
				{
					key: 'label',
					label: this.$t('budgets.budget'),
				},
				{
					key: 'clinical',
					label: this.$t('patients.evolutions.table.professional'),
				},
				{
					key: 'laboratory',
					label: this.$t('patients.evolutions.table.laboratory_actions'),
				},
				{ key: 'actions', label: this.$t('actions') },
			],
			columnOrders: [
				{
					key: 'label',
					label: this.$t('patients.work_order.table.folio'),
				},
				{
					key: 'laboratory',
					label: this.$t('patients.work_order.table.laboratory'),
				},
				{
					key: 'application_date',
					label: this.$t('patients.work_order.table.application_date'),
				},
				{
					key: 'delivery_date',
					label: this.$t('patients.work_order.table.request_for'),
				},
				{
					key: 'status',
					label: this.$t('patients.work_order.table.status'),
				},
				{ key: 'actions', label: this.$t('actions') },
			],
			perPageOptions: [10, 25, 50, 100],
			perPage: 10,
			currentPage: 1,
			totalBudget: 0,
			sortBy: 'label',
			sortDesc: false,
			searchQuery: null,
			from: 0,
			to: 0,
			loading: false,
			patient_id: null,
			patient: {},
			anamnesi: {},
			budgets: [],
			histories: [],
			comments: null,
			lines: '-',
			workorders: [],
		}
	},
	computed: {
		totalCost() {
			if (!this.patient.budget) return 0
			return this.patient.budget.reduce((carry, cost) => carry + parseFloat(cost.total_cost), 0)
		},
		totalDebt() {
			if (!this.patient.budget) return 0
			return this.patient.budget.reduce((carry, debt) => carry + parseFloat(debt.total_debt), 0)
		},
		totalPaid() {
			if (!this.patient.budget) return 0
			return this.patient.budget.reduce((carry, paid) => carry + parseFloat(paid.total_paid), 0)
		},
		isDoctor() {
			return store.state.auth.user.roles[0].id === 4
		},
		isPatient() {
			return store.state.auth.user.roles[0].id === 5
		},
		isDisabled() {
			return this.patient.deleted_at !== null
		},
	},
	async mounted() {
		this.patient_id = router.currentRoute.params.id
		await this.getPatient()
	},
	methods: {
		async addStory() {
			const payload = {
				comments: this.comments,
				patient_id: this.patient_id
			}

			try {

				this.loading = true
				const { data } = await MedicalHistoryResource.save(payload)
				this.loading = false
				if (data.success) {
					this.comments = null
					this.success(data.message, '', 'CheckIcon')
					this.getPatient()
				} else {
					this.danger(data.message, 'Error', 'AlertCircleIcon')
				}

			} catch (e) {
				this.loading = false
				if (e.response.status === 422) {
					this.danger(this.getFirstValidationError(e.response.data.errors), 'Error', 'AlertCircleIcon')
				} else {
					this.danger(e.message, 'Error', 'AlertCircleIcon')
				}
			}
		},
		async getPatient() {
			this.loading = true
			const { data } = await PatientResource.getPatientDetail(this.patient_id)
			this.loading = false
			this.patient = data.data
			this.budgets = _.orderBy(this.patient.budgets, 'label', 'desc')
			console.log(this.budgets)
			this.anamnesi = this.patient.anamnesi ?? {}
			this.workorders = this.patient.orders
			this.histories = []
			if (this.anamnesi) {
				this.anamnesi.coagulation_problems = this.anamnesi.coagulation_problems ? true : false
				this.anamnesi.local_analgesic_problems = this.anamnesi.local_analgesic_problems ? true : false
				this.anamnesi.pregnancy = this.anamnesi.pregnancy ? true : false
			}

			_.map(this.patient.histories, (item) => {
				if (item.parent_id === null) {
					this.histories.push({
						...item,
						parents: _.filter(this.patient.histories, (history) => item.id === history.parent_id)
					})
				}
			})

			_.orderBy(this.histories, 'id', 'DESC')


		},
		async storeAnamnesi() {
			this.loading = true
			try {
				this.anamnesi.patient_id = this.patient_id
				const { data } = await AnamnesiResource.save(this.anamnesi)
				this.loading = false
				if (data.success) {
					this.success('', data.message, 'CheckIcon')
				} else {
					this.danger('', data.message, 'AlertOctagonIcon')
				}
			} catch (e) {
				this.loading = false
				if (e.response.status === 422) {
					this.danger(
						this.getFirstValidationError(e.response.data.errors),
						'Error',
						'AlertOctagonIcon'
					)
					this.errors = e.response.data.errors
				} else {
					this.danger(e.message, 'Error', 'AlertOctagonIcon')
				}
			}
		},
		deleteBudget(item) {
			this.$swal({
				title: this.$t('patients.budget_confirm_inactive_title'),
				text: this.$t('patients.budget_confirm_inactive_help'),
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: this.$t('patients.budget_confirm_inactive_button_ok'),
				cancelButtonText: this.$t('patients.budget_confirm_inactive_button_cancel'),
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-outline-danger ml-1',
				},
				showClass: {
					popup: 'animate__animated animate__flipInX',
				},
				buttonsStyling: false,
				showLoaderOnConfirm: true,
				preConfirm: () => BudgetResource.deleteBudget(item.id)
					.then((response) => {
						if (response.data.success) {
							this.success(response.data.message, '', 'CheckIcon')
							this.getBudgets()
						} else {
							this.loading = false
							this.danger(response.data.message, 'Error', 'AlertCircleIcon')
						}
					})
					.catch((error) => {
						this.loading = false
						this.$swal.showValidationMessage(
							`Request failed: ${error}`
						)
					}),
				allowOutsideClick: () => !Swal.isLoading(),
			})
		},
		sendEmail(item) {
			this.$swal({
				title: this.$t('budgets.send_email_tittle'),
				text: this.$t('budgets.send_email_tittle_help'),
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: this.$t('yes_continue'),
				cancelButtonText: this.$t('cancel'),
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-outline-danger ml-1',
				},
				showClass: {
					popup: 'animate__animated animate__flipInX',
				},
				buttonsStyling: false,
				showLoaderOnConfirm: true,
				input: 'email',
				inputValue: item.patient.email,
				inputAttributes: {
					autocapitalize: 'off'
				},
				preConfirm: async (value) => {

					try {
						this.loading = true
						const { data } = await BudgetResource.sendEmail(item.id, { email: value })
						this.loading = false
						if (data.success) {
							this.success(data.message)
						} else {
							this.danger(data.message)
						}

					} catch (e) {
						this.loading = false
						this.handleResponseErrors(e)
						this.$swal.showValidationMessage(
							`Request failed: ${e}`
						)
					}
				},
				allowOutsideClick: () => !Swal.isLoading(),
			})
		},
		setApproved(item) {
			this.$swal({
				title: this.$t('patients.budget_approve_tittle'),
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: this.$t('patients.budget_approve_button_accept'),
				cancelButtonText: this.$t('patients.budget_approve_button_cancel'),
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-outline-danger ml-1',
				},
				showClass: {
					popup: 'animate__animated animate__flipInX',
				},
				buttonsStyling: false,
				showLoaderOnConfirm: true,
				preConfirm: async () => {

					try {
						this.loading = true
						const { data } = await BudgetResource.approve(item.id)
						console.log(data)
						this.loading = false
						if (data.success) {

							this.budgets = this.budgets.map((budget) => {
								if (budget.id === item.id) {
									return data.data
								}
								return budget
							})

							this.success(data.message, '', 'CheckIcon')
							if (this.findSetting('enable_email_notification')) {
								this.sendMailNotification(item)
							}

						} else {
							this.danger(data.message, 'Error', 'AlertOctagonIcon')
						}
					} catch (e) {
						this.loading = false
						if (e.response.status === 422) {
							this.danger(
								this.getFirstValidationError(e.response.data.errors),
								'Error',
								'AlertOctagonIcon'
							)
						} else {
							this.danger(e.message, 'Error', 'AlertOctagonIcon')
						}
					}
				},
				allowOutsideClick: () => !Swal.isLoading(),
			})
		},
		async sendMailNotification(item) {
			this.$swal({
				title: this.$t('budgets.send_email_tittle'),
				text: this.$t('budgets.send_email_tittle_help'),
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: this.$t('yes_continue'),
				cancelButtonText: this.$t('cancel'),
				customClass: {
					confirmButton: 'btn btn-primary',
					cancelButton: 'btn btn-outline-danger ml-1',
				},
				showClass: {
					popup: 'animate__animated animate__flipInX',
				},
				buttonsStyling: false,
				showLoaderOnConfirm: true,
				input: 'email',
				inputValue: item.patient.email,
				inputAttributes: {
					autocapitalize: 'off'
				},
				preConfirm: async (value) => {
					try {
						this.loading = true
						const { data } = await BudgetResource.sendEmail(item.id, { email: value })
						this.loading = false
						if (data.success) {
							this.success(data.message,)
						} else {
							this.danger(data.message)
						}
					} catch (e) {
						this.loading = false
						this.handleResponseErrors(e)
						this.$swal.showValidationMessage(
							`Request failed: ${e}`
						)
					}
				},
				allowOutsideClick: () => !Swal.isLoading(),
			})
		},
		resolvePatientStatusVariant(status) {
			if (_.isEmpty(status)) {
				return 'success'
			}
			return 'secondary'
		},
		resolvePatientStatusTranslate(status) {
			if (_.isEmpty(status)) {
				return this.translate('patients.active')
			}
			return this.translate('patients.inactive')
		},
		resolvePatientTypeDocumentTranslate(type) {
			switch (type) {
				case 'RUT':
					return this.$t('patients.document_type_rut')
					break;
				case 'Pasaporte':
					return this.$t('patients.document_type_passport')
					break;
				case 'Otro':
					return this.$t('patients.document_type_other')
					break;
			}
		},
		resolveBudgetApproved(approved) {
			if (approved) {
				return 'success'
			}
			return 'secondary'
		},
		resolveBudgetApprovedTranslate(approved) {
			if (approved) {
				return this.translate('budgets.status.approved')
			}
			return this.translate('budgets.status.pending')
		}
	},
}
</script>

<style lang="scss" scoped>
.table-responsive {
	display: block;
	width: 100%;
	overflow-x: revert !important;
	-webkit-overflow-scrolling: touch;
}</style>


<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>