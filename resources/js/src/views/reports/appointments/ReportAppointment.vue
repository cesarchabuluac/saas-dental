<template>
    <div>
        <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" :opacity="opacity">
            <template #overlay>
                <div class="d-flex align-items-center">
                    <b-spinner small type="grow" variant="secondary" />
                    <b-spinner type="grow" variant="dark" />
                    <b-spinner small type="grow" variant="secondary" />
                </div>
            </template>

            <b-card no-body>
                <b-card-header class="pb-50">
                    <h5>{{ $t('filters.title') }}</h5>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col cols="12" md="4">
                            <label>{{ $t('start_at') }}</label>
                            <flat-pickr v-model="filter.start" class="form-control flatpickr-small" :config="{ dateFormat: 'Y-m-d' }"
                                placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="4">
                            <label>{{ $t('end_at') }}</label>
                            <flat-pickr v-model="filter.end" class="form-control flatpickr-small" :config="{
                                minDate: filter.start,
                                dateFormat: 'Y-m-d'
                            }" placeholder="DD/MM/YYYY" />
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('appointments.professional')" label-for="add-guests">
                                <v-select 
                                    :disabled="isProfessional"
                                    v-model="filter.doctor_id" 
                                    :options="professionals"
                                    label="name" 
                                    :reduce="professional => professional.id" 
                                    input-id="add-professional" 
                                    class="select-size-sm"                                
                                    :placeholder="$t('appointments.professional_placeholder')">
                                </v-select>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('appointments.patient')" label-for="add-patient">
                                <v-select v-model="filter.patient_id" :options="patients" label="name"
                                    input-id="add-patient" @search="onSearchPatients" :filterable="true"
                                    class="select-size-sm"
                                    :placeholder="$t('appointments.patient_placeholder')" :reduce="patient => patient.id">
                                    <template #option="{ full_name, document_type, rut, email, cellphone }">
                                        <span class="ml-50 align-middle">{{ full_name }}</span><br>
                                        <small class="ml-50 align-middle">{{ resolveTypeDocumentTranslate(document_type) }}:
                                            {{ rut }}</small><br>
                                        <small class="ml-50 align-middle">{{ $t('patients.email') }}: {{ email
                                        }}</small><br>
                                        <small class="ml-50 align-middle">{{ $t('patients.cellphone') }}: {{ cellphone
                                        }}</small>
                                    </template>
                                    <template #selected-option="{ full_name }">
                                        <span class="ml-50 align-middle">{{ full_name }}</span>
                                    </template>
                                </v-select>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('appointments.state')" label-for="calendar">
                                <v-select v-model="filter.state" :options="calendarOptions" label="label"
                                    :reduce="(calendar) => calendar.label" input-id="calendar"
                                    :placeholder="$t('appointments.state_placeholder')"
                                    class="select-size-sm">

                                    <template #option="{ color, label }">
                                        <div class="rounded-circle d-inline-block mr-50" :class="`bg-${color}`"
                                            style="height: 10px; width: 10px" />
                                        <span>{{ $t(`appointments.state_${label}`) }}</span>
                                    </template>

                                    <template #selected-option="{ color, label }">
                                        <div class="rounded-circle d-inline-block mr-50" :class="`bg-${color}`"
                                            style="height: 10px; width: 10px" />
                                        <span>{{ $t(`appointments.state_${label}`) }}</span>
                                    </template>
                                </v-select>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="demo-inline-spacing">
                                <b-button size="sm" @click="filterData" variant="outline-primary"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="SearchIcon" />
                                    {{ $t("button_filter") }}
                                </b-button>

                                <b-button size="sm" v-if="appointments.length" @click="donwloadAppointment" variant="outline-success"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="DownloadIcon" />
                                    {{ $t("button_download") }}
                                </b-button>

                                <b-button size="sm" v-if="filter.start" @click="clearFilter" variant="outline-danger"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="XIcon" />
                                    {{ $t("button_clear_filter") }}
                                </b-button>

                                <b-button size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-secondary"
                                    :class="{ 'btn-block': isMobile }" @click="$router.back()">
                                    <feather-icon icon="ChevronLeftIcon" />
                                    {{ $t('back') }}
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>

            <b-card no-body>

                <b-table ref="refAppointmentsListTable" striped hover :items="appointments" :fields="columns" responsive
                    primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')" class="position-relative"
                    :current-page="currentPage" :busy.sync="loading" stacked="md" small>
                    <!-- Column: Patient -->
                    <template #cell(patient_id)="data">
                        <div v-if="canAccess('patients.show')">
                            <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.patient.id }, }"
                                class="font-weight-bold d-block text-wrap">
                                {{ data.item.patient.full_name }}
                            </b-link>
                        </div>
                        <div v-else>
                            {{ data.item.patient.full_name }}
                        </div>
                        <small class="text-muted">{{ data.item.patient.email }}<br>
                            {{ data.item.patient.document_type }}: {{ data.item.patient.rut }}<br>
                            <b-link :href="`tel:${data.item.patient.phone}`">
                                <feather-icon icon="PhoneCallIcon" class="cursor-pointer" />
                                {{ data.item.patient.phone }}
                            </b-link><br>
                            <b-link target="_blank" class="text-wrap">
                                <feather-icon icon="MessageSquareIcon" class="cursor-pointer" />
                                {{ data.item.patient.cellphone }}
                            </b-link>
                        </small><br>
                        <small class="text-muted">{{ data.item.patient.email }}</small>
                    </template>

                    <!-- Column: Date -->
                    <template #cell(date)="data">
                        <small><strong>{{ $t('appointments.table_id') }}:</strong> {{ data.item.id }}</small><br>
                        <small><strong>{{ $t('appointments.table_user_id') }}:</strong>
                            {{ data.item.user.name }}</small><br>
                        <small><strong>{{ $t('appointments.table_date') }}:</strong></small>
                        {{ dateTimeFormat(data.item.date) }}
                    </template>

                    <!-- Column: Statte -->
                    <template #cell(state)="data">
                        <b-badge :variant="`light-${resolveStateAppointmentColor(data.item.state)}`">
                            {{ resolveStateAppointment(data.item.state) }}
                        </b-badge>
                    </template>

                    <!-- Column: Date -->
                    <template #cell(observations)="data">
                        <span class="text-wrap">{{ data.item.intern_observation }}</span>
                    </template>

                    <!-- Column: Actions -->
                    <template #cell(actions)="data">
                        <div class="demo-inline-spacing">
                            <b-button
                                v-if="findSetting('enable_email_notification') && canAccess('appointments.send') && data.item.state !== 'canceled'"
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="secondary" class="btn-icon" size="sm"
                                @click="sendEmail(data.item)">
                                <feather-icon icon="SendIcon" />
                            </b-button>

                            <b-button v-if="canAccess('appointments.edit')" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                variant="primary" class="btn-icon" size="sm" @click="editAppointment(data.item)">
                                <feather-icon icon="EditIcon" />
                            </b-button>

                            <b-button v-if="canAccess('appointments.destroy') && (data.item.state == 'pending')"
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon" size="sm"
                                @click="deleteAppointment(data.item)">
                                <feather-icon icon="Trash2Icon" />
                            </b-button>
                        </div>
                    </template>
                </b-table>

                <!-- Pagination -->
                <div v-if="appointments" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalAppointments" :per-page="perPage"
                                    size="lg" />
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-card>

        </b-overlay>
    </div>
</template>
<script>
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput,
    BModal, VBModal, BMediaAside, BMedia, BAvatar, BImg, BCardHeader, BMediaBody, BFormTextarea, BCardTitle, BBadge, BPagination, BTooltip, VBTooltip
} from 'bootstrap-vue'
import axios from 'axios';
import router from "@/router";
import store from '@/store'
import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import vSelect from "vue-select";
import Ripple from 'vue-ripple-directive'
import "animate.css";
import { saveAs } from 'file-saver';
import UserProvider from "@/providers/Users";
import AppointmentProvider from "@/providers/Appointments";
import PatientProvider from "@/providers/Patients";

const UserResource = new UserProvider();
const AppointmentResource = new AppointmentProvider();
const PatientResource = new PatientProvider();

if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
    localize(store.state.auth.setting['language'] === "es");
}
export default {
    name: 'ReportAppointment',
    directives: {
        Ripple,
        'b-modal': VBModal,
        'b-toggle': VBToggle,
    },
    components: {
        BRow,
        BCol,
        BCard,
        BCardBody,
        BCardText,
        BButton,
        BAlert,
        BLink,
        BOverlay,
        BSpinner,
        BTable,
        BTableLite,
        vSelect,
        flatPickr,
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal,
        BMediaAside,
        BMedia,
        BAvatar,
        BImg,
        BCardHeader,
        BMediaBody,
        BFormTextarea,
        BCardTitle,
        VBModal,
        BBadge,
        BPagination,
        BTooltip,
        VBTooltip
    },
    data() {
        return {
            loading: false,
            report: {},
            appointments: [],
            patients: [],
            selectDoctor: null,
            professionals: [],
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
            columns: [
                {
                    key: "patient_id",
                    label: this.$t("appointments.table_patient_id"),
                },
                {
                    key: "date",
                    label: this.$t("appointments.table_date"),
                },
                {
                    key: "duration",
                    label: this.$t("appointments.table_duration"),
                },
                {
                    key: "state",
                    label: this.$t("appointments.table_state"),
                },
                {
                    key: "observations",
                    label: this.$t("appointments.table_observations"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            perPageOptions: [10, 25, 50, 100],
            perPage: 100,
            currentPage: 1,
            totalAppointments: 0,
            sortBy: "date",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            pagination: {},
            offset: 3,
            critery: "reference",
            search: "",
            donwload: false,
            opacity: .75,
            filter: {
                start: null,
                end: null,
                doctor_id: null,
                patient: null,
                state: null,
                user_id: null,
            },
            isMobile: false,
            isFilterApplied: false,
            userRoles: store.getters['auth/getUser'].roles.map(role => role.id)
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.appointments);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalAppointments,
            };
        },
        isProfessional() {
            return this.userRoles.includes(4)
        },
        user_id() {
            return store.getters['auth/getUserId']
        }
    },
    async mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        await this.getProfessionals()

        this.calendarOptions = _.orderBy(this.calendarOptions, "label", "asc")
        if (this.isProfessional) {
            this.filter.doctor_id = store.getters['auth/getUserId'];
        }
        
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isMobile = window.innerWidth < 576;
        },
        async getProfessionals() {            
            this.loading = true
            const { data } = await UserResource.index({
                criteria: 'professionals',
                ignoreSchedules: false,
            });
            this.loading = false
            this.professionals = _.orderBy(data.data, 'name', 'asc')
        },
        async donwloadAppointment() {
            const query = {
                ...this.filter,
                user_id: this.filter.user_id || null,
                isDonwload: true,
            }

            try {

                this.loading = true
                axios.get(`/api/appointments/report`, { responseType: 'blob', params: { ...query } }).then(response => {
                    this.loading = false

                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                    const filename = 'usuarios.xlsx';
                    saveAs(blob, `${this.$t('reports.appointments.excel_name')}-${this.filter.start}-${this.filter.end}.xlsx`);

                }).catch(e => {
                    this.loading = false
                    this.handleResponseErrors(e)
                });
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        async filterData() {

            if (!this.filter.start || !this.filter.end) {
                this.danger(this.$t('filters.required_dates'), 'Error')
                return false
            }

            try {

                const query = {
                    ...this.filter,
                    user_id: this.filter.user_id,
                    perPage: this.perPage,
                    page: this.currentPage,
                    state: this.filter.state,
                    patient_id: this.filter.patient_id,
                }

                this.isFilterApplied = true
                this.loading = true
                const { data } = await AppointmentResource.reports(query)
                this.loading = false
                this.appointments = data.data
                this.totalAppointments = data.total;

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        // Aplicar debounce a la función onSearch
        onSearchPatients: _.debounce(function (search, loading) {
            if (search.length >= 3) {
                loading(true);
                this.searchPatients(loading, search, this);
            }
        }, 300), // 300ms es el tiempo de espera para ejecutar la función después del último evento 'onSearch'
        async searchPatients(loading, search, vm) {
            loading(true)
            const { data } = await PatientResource.search(search);
            loading(false)
            vm.patients = data.data;
        },
        clearFilter() {
            this.filter = {}
            this.isFilterApplied = false
            this.patients = []
            this.appointments = []
            this.totalAppointments = 0
            this.currentPage = 0
        },
        deleteAppointment(item) {
            this.$swal({
                title: this.$t("are_you_sure"),
                text: this.$t("you_wont_be_able_to_revert_this"),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t("yes_continue"),
                cancelButtonText: this.$t("cancel"),
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

                    try {
                        this.loading = true
                        const { data } = await AppointmentResource.destroy(item.id)
                        this.loading = false
                        if (data.success) {
                            this.success(data.message, '', 'CheckIcon');
                            this.appointments = this.appointments.filter((appointment) => appointment.id !== item.id)
                        } else {
                            this.loading = false;
                            this.danger(data.message, "Error", "AlertCircleIcon");
                        }
                    } catch (e) {
                        this.loading = false;
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                        this.handleResponseErrors(e)
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        editAppointment(item) {
            this.$swal({
                title: this.$t("appointments.confirm_assisted_title"),
                text: this.$t("appointments.confirm_assisted_message"),
                input: 'select',
                inputOptions: {
                    confirmed: this.$t('appointments.state_confirmed'),
                    assisted: this.$t('appointments.state_assisted'),
                    unassisted: this.$t('appointments.state_unassisted'),
                },
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t("yes_continue"),
                cancelButtonText: this.$t("cancel"),
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-outline-danger ml-1",
                },
                showClass: {
                    popup: "animate__animated animate__flipInX",
                },
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                preConfirm: async (option) => {

                    try {

                        this.loading = true;
                        const { data } = await AppointmentResource.changeStatus(item.id, { state: option })
                        this.loading = false;

                        if (data.success) {
                            this.success(data.message);
                            this.appointments = this.appointments.map((appointment) => {
                                if (appointment.id === item.id) {
                                    return data.data
                                }
                                return appointment
                            })
                        } else {
                            this.danger(data.message, "Error");
                        }

                    } catch (e) {
                        this.loading = false;
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                        this.handleResponseErrors(e)
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        sendEmail(item) {
            this.$swal({
                title: this.$t('appointments.send_email_tittle'),
                text: this.$t('appointments.send_email_tittle_help'),
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: this.$t('yes_continue'),
                cancelButtonText: this.$t('cancel'),
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
                inputValue: item.patient.email,
                inputAttributes: {
                    autocapitalize: 'off'
                },
                preConfirm: async (value) => {

                    try {
                        const { data } = await AppointmentResource.send(item.id, { email: value })
                        if (data.success) {
                            this.success(data.message);
                        } else {
                            this.danger(data.message);
                        }
                    } catch (e) {
                        this.loading = false;
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                        this.handleResponseErrors(e)
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            })
        },

    },
    watch: {
        currentPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end)) return false
            this.filterData();
        },
        perPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end)) return false
            this.filterData();
        },
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';

@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
    .dark-layout & {
        background: $theme-dark-body-bg !important;
    }
}

.swal2-select {
    min-width: 100%!important;
    max-width: 100%!important;
    padding: 0.375em 0.625em;
    background: inherit;
    color: inherit;
    font-size: 1.125em;
}

.flatpickr-small .flatpickr-input {
    /*font-size: 8px!important; /* Ajusta el tamaño del texto del input */
    padding: 5px; /* Ajusta el padding del input */
    /*width: 120px; /* Ajusta el ancho del input */
}

.flatpickr-input {
    /*width: 150px!important; /* Ajusta el ancho del input */
    height: 30px!important; /* Ajusta la altura del input */
    /*font-size: 7px!important; /* Ajusta el tamaño del texto del input */
}
</style>