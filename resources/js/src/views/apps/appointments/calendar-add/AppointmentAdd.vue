<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <b-card no-body class="mb-0">
            <div class="m-2">
                <b-form>
                    <b-row>

                        <!-- Field: Branch Office -->
                        <b-col cols="12" md="6" lg="4">
                            <b-form-group :label="$t('branch_office')" label-for="branch_office_id">
                                <v-select v-model="appointment.branch_office_id" :options="branchs"
                                    :reduce="option => option.id" label="name" input-id="branch_office_id"
                                    :clearable="false" :searchable="false" />
                            </b-form-group>
                        </b-col>

                        <!-- Field: Doctor -->
                        <b-col cols="12" md="6" lg="4">
                            <b-form-group :label="$t('appointments.professional')" label-for="add-professional">
                                <v-select v-model="appointment.user_id" :options="professionals" label="name"
                                    :reduce="option => option.id" input-id="add-professional" :clearable="false"
                                    :searchable="true">
                                </v-select>
                            </b-form-group>
                        </b-col>

                        <!-- Field: Date -->
                        <b-col cols="12" md="6" lg="4">
                            <b-form-group :label="$t('appointments.date')" label-for="birthday"
                                :description="!isAvailable ? $t('appointments.not_available_help') : ''">
                                <flat-pickr v-model="appointment.date" @on-change="onChange" @on-ValueUpdate="onChange"
                                    class="form-control" :class="!isAvailable ? 'is-invalid' : ''" :config="{
                                        minDate: 'today',
                                        enableTime: true,
                                        time_24hr: true,
                                        dateFormat: 'd/m/Y H:i',
                                        minTime: slotMinTime,
                                        maxTime: slotMaxTime,
                                        minuteIncrement: 15,
                                    }" placeholder="DD/MM/YYYY H:I:S" />
                            </b-form-group>

                        </b-col>

                        <!-- Field: State -->
                        <b-col cols="12" md="6" lg="4">
                            <b-form-group :label="$t('appointments.state')" label-for="calendar">
                                <v-select v-model="appointment.state" :options="calendarOptions" label="label"
                                    :reduce="(calendar) => calendar.label" input-id="calendar" :clearable="false"
                                    :searchable="false">
                                    <template #option="{ color, label }">
                                        <div class="rounded-circle d-inline-block mr-50" :class="`bg-${color}`"
                                            style="height: 10px; width: 10px" />
                                        <span>{{ $t(`appointments.status.${label}`) }}</span>
                                    </template>

                                    <template #selected-option="{ color, label }">
                                        <div class="rounded-circle d-inline-block mr-50" :class="`bg-${color}`"
                                            style="height: 10px; width: 10px" />
                                        <span>{{ $t(`appointments.status.${label}`) }}</span>
                                    </template>
                                </v-select>
                            </b-form-group>
                        </b-col>

                        <!-- Field: Patient -->
                        <b-col cols="12" md="8" lg="8">
                            <b-form-group :label="$t('patients.patient')" label-for="add-patient">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text>
                                        <feather-icon icon="SearchIcon" />
                                    </b-input-group-prepend>
                                    <b-form-input readonly @click="activeSearchPatient = true"
                                        v-model="selectedPatient.full_name" :placeholder="$t('patients.search_options')" />
                                    <b-input-group-append>
                                        <b-button variant="primary" v-b-toggle.sidebar-add-new-patient>
                                            <feather-icon icon="PlusIcon" />
                                        </b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>

                        <!-- Field: Duration -->
                        <b-col cols="12" md="4" lg="4">
                            <b-form-group :label="$t('appointments.duration')" label-for="event-duration">
                                <b-form-input input-id="event-duration" v-model="appointment.duration" type="number"
                                    :placeholder="$t('appointments.duration_placeholder')" />
                            </b-form-group>
                        </b-col>

                        <!-- Field: Observations -->
                        <b-col cols="12" md="8" lg="8">
                            <b-form-group :label="$t('appointments.observations')" label-for="event-observation">
                                <b-form-textarea id="event-observation" v-model="appointment.intern_observation"
                                    :placeholder="$t('appointments.observations_placeholder')" />
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <!-- Actions Buttons -->
                    <b-button v-if="canAccess('appointments.store') && isAvailable" variant="primary"
                        class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="store">
                        {{ $t("save") }}
                    </b-button>
                    <b-button variant="outline-secondary" class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                        @click="$router.push({ name: 'appointments' })">
                        {{ $t("back") }}
                    </b-button>
                </b-form>
            </div>
        </b-card>

        <!-- Patient Search -->
        <search-patient :active="activeSearchPatient" @selected="selectPatient" @close="activeSearchPatient = false" />

        <!-- Patient Add -->
        <sidebar-add-new-patient :active="hideSidebar" :data="patient" @store="storePatient"
            :isValidCellPhone="isValidCellPhone" />

    </b-overlay>
</template>

<script>
import router from "@/router";
import store from "@/store";
import BCardCode from "@core/components/b-card-code";
import {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BTableLite,
    BCardText,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupPrepend,
    BFormCheckbox,
    BAvatar,
    BFormTextarea,
    BButton,
    BFormInvalidFeedback,
    VBToggle,
    BOverlay,
    BSpinner,
} from "bootstrap-vue";
import vSelect from "vue-select";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import Ripple from "vue-ripple-directive";
import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import { required, email, url } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import SidebarAddNewPatient from '@core/components/patients/SidebarAddNewPatient.vue'
import SearchPatient from '@core/components/patients/SearchPatient.vue'

import UserProvider from "@/providers/Users";
import PatientProvider from "@/providers/Patients";
import AppointmentProvider from "@/providers/Appointments";
import BranchOfficeProvider from '@/providers/BranchOffices'
import moment from 'moment-timezone';

const UserResource = new UserProvider();
const PatientResource = new PatientProvider();
const AppointmentResource = new AppointmentProvider();
const BranchOfficeResource = new BranchOfficeProvider();

export default {
    name: "AppointmentAdd",
    components: {
        BRow,
        BCol,
        BCard,
        BCardBody,
        BTableLite,
        BCardText,
        BButton,
        BSidebar,
        BForm,
        BFormGroup,
        BFormInput,
        BInputGroup,
        BInputGroupAppend,
        BInputGroupPrepend,
        BFormCheckbox,
        BFormTextarea,
        BAvatar,
        vSelect,
        flatPickr,
        ValidationProvider,
        BFormInvalidFeedback,
        ValidationObserver,
        BOverlay,
        BSpinner,
        BCardCode,
        SidebarAddNewPatient,
        SearchPatient,
    },
    directives: {
        'b-toggle': VBToggle,
        Ripple,
    },
    data() {
        return {
            loading: false,
            hideSidebar: false,
            isValidCellPhone: false,
            appointment: {
                state: 'pending',
                user_id: null,
                branch_office_id: null,
                patient: null,
            },
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
            ],
            patients: [],
            patient: {},
            selectedPatient: {
                full_name: null,
            },
            isAvailable: false,
            branchs: [],
            selectedBranch: null,
            activeSearchPatient: false,
        }
    },
    computed: {
        slotMinTime () {
            return store.state.auth.setting['schedule_start_time'] || "09:00:00"
        }, 
        slotMaxTime() {
            store.state.auth.setting['schedule_end_time'] || "22:00:00"
        },
        slotInterval() {
            return store.state.auth.setting['scheduled_appointment_interval'] || 1
        }
    },
    created() {
        
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
            localize(process.env.MIX_FALLBACK_LOCALE);
        }

        if (store.state.calendar) {
            if (router.currentRoute.params.date) {
                this.appointment.date = router.currentRoute.params.date
                this.isAvailable = true
            }
        }
    },
    async mounted() {
        await this.getBranch()
        await this.getDoctors()
        
    },
    methods: {
        async getBranch() {
            const query = {
                isAll: true,
            }

            try {
                this.loading = true
                const { data } = await BranchOfficeResource.index(query)
                if (data.success) {
                    this.branchs = data.data
                    this.appointment.branch_office_id = this.branchs[0].id
                    store.commit('auth/SET_BRANCHES', data)
                } else {
                    this.danger(data.message)
                }
                
            } catch (e) {
                // this.loading = false
                this.handleResponseErrors(e)
            } finally {
                this.loading = false
            }


        },
        async onSearch(search, loading) {
            if (search.length) {
                loading(true);
                await this.searchPatients(loading, search, this);
            }
        },
        async onChange(selectedDates, dateStr, instance) {

            const inputDateFormat = 'DD/MM/YYYY HH:mm';
            const officeStartTime = store.state.auth.setting['schedule_start_time'] || '09:00:00'; // Schedule start time
            const officeEndTime = store.state.auth.setting['schedule_end_time'] || '22:00:00'; // Schedule end time   
            
            console.log('onChange', dateStr)
            console.log('selectedDates', selectedDates)
            console.log('instance', instance)
            console.log('inputDateFormat', inputDateFormat)
            console.log('officeStartTime', officeStartTime)
            console.log('officeEndTime', officeEndTime)

            const isValidDate = this.isValidDate(dateStr, inputDateFormat);
            if (!isValidDate) {
                this.danger(this.$t('invalid_date_format'));
                return false;
            }

            const isWithinOfficeHours = this.isWithinOfficeHours(dateStr, officeStartTime, officeEndTime);
            if (!isWithinOfficeHours) {
                this.danger(this.$t('closed_office'));
                return false;
            }

            //
            const now = moment();
            const selectedDateTime = moment(dateStr, inputDateFormat, true);
            if (selectedDateTime.isSameOrBefore(now)) {
                this.danger(this.$t('date_not_available'));
                return false
            }

            const isDateAvailable = await this.checkAvailability(dateStr);
            if (!isDateAvailable) {
                this.danger(this.$t('date_not_available'));
                return false;
            }

            // If you get here, all is well and the date is available
            this.isAvailable = true;
        },
        async checkAvailability(dateStr) {
            this.loading = true;
            const query = {
                date: dateStr,
                user_id: this.appointment.user_id,
            };
            try {
                const { data } = await AppointmentResource.available(query);
                this.loading = false;
                if (data.success) {
                    return true;
                } else {
                    this.danger(data.message);
                    return false;
                }
            } catch (error) {
                this.loading = false;
                this.handleResponseErrors(error)
                return false;
            }
        },
        async storePatient() {
            try {
                this.loading = true;
                this.patient.phone = this.patient.mobile.phoneNumber
                this.patient.cellphone = this.patient.mobile.e164
                this.patient.address = ` --- `
                const { data } = await PatientResource.save(this.patient);
                this.loading = false;
                if (data.success) {
                    this.hideSidebar = true
                    this.appointment.patient = data.data
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
        async searchPatients(loading, search, vm) {
            this.loading = true;
            const { data } = await PatientResource.search(search);
            vm.patients = data.data;
            this.loading = false
            loading(false)
        },
        async getDoctors() {
            this.loading = true
            // try {
                const { data } = await UserResource.index({ criteria: "professionals", ignoreSchedules: false, isAll: true });
                this.loading = false
                if (data.success) {
                    this.professionals = data.data
                    store.commit('auth/SET_DOCTORS', data.data)
                    console.log(store.state.calendar)
                    if (this.professionals.length > 0) {
                        // this.appointment.user_id = store.state.calendar.selectedProfessional.id
                    }
                }
                
            // }catch(e) {
            //     this.loading = false
            //     this.handleResponseErrors(e)
            // }finally {
            //     this.loading = false
            // }
        },
        async store() {
            try {
                this.appointment.patient_id = this.appointment.patient?.id
                this.loading = true
                const { data } = await AppointmentResource.save(this.appointment);
                this.loading = false
                if (data.success) {
                    this.success(data.message);
                    router.push({ name: "appointments" });
                } else {
                    this.danger(data.message);
                }

            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e);
            }
        },
        selectPatient(e) {
            this.selectedPatient = { ...e }
            this.appointment.patient = { ...e }
        },
    },
    watch: {
        isAvailable(value) {
            console.log(value)
        }
    }

}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
</style>
