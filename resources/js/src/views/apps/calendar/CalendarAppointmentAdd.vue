<template>
    <div>
        <b-modal id="modal-center" ref="info-modal" :title="`${$t('appointments.add.desc')}`"
            no-close-on-backdrop no-close-on-esc
            :visible="isNewEventHandlerModalActive" 
            @cancel="$emit('update:is-new-event-handler-modal-active', false)"
            hide-footer
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            >
            
            <!-- BODY -->
            <validation-observer ref="refFormObserver">
                <b-form @submit.prevent="onSubmit">
                    <b-row>

                        <!-- Field: Branch Office -->
                        <b-col cols="12" md="6">
                            <validation-provider #default="validationContext" :name="$t('branch_office')" rules="required">
                                <b-form-group :label="$t('branch_office')" label-for="branch_office_id" :state="getValidationState(validationContext)">
                                    <v-select v-model="appointmentData.branch_office_id" :options="branchs" class="select-size-sm"
                                        :reduce="option => option.id" label="name" input-id="branch_office_id"
                                        :clearable="false" :searchable="false" />
                                </b-form-group>
                            </validation-provider>
                        </b-col>

                        <!-- Field: Doctor -->
                        <b-col cols="12" md="6">
                            <validation-provider #default="validationContext" :name="$t('appointments.professional')" rules="required">
                                <b-form-group :label="$t('appointments.professional')" label-for="add-professional" :state="getValidationState(validationContext)">
                                    <!-- <v-select v-model="appointmentData.user_id" :options="professionals" label="name" class="select-size-sm"
                                        :reduce="option => option.id" input-id="add-professional" :clearable="false"
                                        :searchable="true">
                                    </v-select> -->
                                    <b-form-input size="sm" :value="selectedProfessional.name" readonly />
                                </b-form-group>
                            </validation-provider>
                        </b-col>

                        <b-col cols="12" md="12">
                            <validation-provider #default="validationContext" :name="$t('patients.patient')" rules="required">
                                <b-form-group :label="$t('patients.patient')" label-for="patient_id" :state="getValidationState(validationContext)">
                                    <v-select v-model="appointmentData.patient" 
                                        :options="patients" class="select-size-sm"
                                        label="full_name"
                                        input-id="patient_id"
                                        :clearable="false" :searchable="true" 
                                        @search="onSearchPatient"
                                        :placeholder="$t('patients.search_options')"
                                        @input="selectPatient">
                                        <template #list-header>
                                        <li v-b-toggle.sidebar-add-new-patient class="add-new-client-header text-success d-flex align-items-center my-75">
                                            <feather-icon icon="PlusIcon" size="16"/>
                                            <span class="align-middle ml-25">{{ $t('patients.title_add') }}</span>
                                        </li>
                                        </template>
                                    </v-select>
                                </b-form-group>
                            </validation-provider>


                            <!-- Patient Add -->
                            <sidebar-add-new-patient 
                                :is-add-new-patient-sidebar-active.sync="isAddNewPatientSidebarActive"
                                @add-patient="addPatient"/>
                        </b-col>

                        <!-- Field: Duration -->
                        <b-col cols="12" md="12">
                            <validation-provider #default="validationContext" :name="$t('appointments.duration')" rules="required">
                                <b-form-group :label="$t('appointments.duration')" label-for="event-duration" :state="getValidationState(validationContext)">
                                    <b-form-input size="sm" input-id="event-duration" v-model="appointmentData.duration" type="number"
                                        :placeholder="$t('appointments.duration_placeholder')" />
                                </b-form-group>
                            </validation-provider>
                        </b-col>

                        <!-- Field: Date -->
                        <b-col cols="12" md="12">
                            <validation-provider #default="validationContext" :name="$t('appointments.times_availables')" rules="required">
                                <b-form-group :label="$t('appointments.times_availables')" :state="getValidationState(validationContext)">
                                    <b-form-radio-group
                                        v-model="appointmentData.timeAvailable"
                                        :options="event.timeAvailables"
                                        class="text-left demo-inline-spacing"
                                        name="radio-inline"
                                    />
                                </b-form-group>
                            </validation-provider>
                        </b-col>

                        <!-- Field: Observations -->
                        <b-col cols="12" md="12">
                            <b-form-group :label="$t('appointments.observations')" label-for="event-observation">
                                <b-form-textarea size="sm" id="event-observation" v-model="appointmentData.intern_observation"
                                    :placeholder="$t('appointments.observations_placeholder')" />
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <!-- Actions Buttons -->
                    <div class="d-flex mt-2">
                        <b-button variant="outline-secondary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="$emit('update:is-new-event-handler-modal-active', false)">
                            {{ $t("cancel") }}
                        </b-button>

                        <b-button :disabled="loading" v-if="canAccess('appointments.store')" variant="primary"
                            class="mb-1 mb-sm-0 mr-0 mr-sm-1" type="submit">
                            {{ $t("save") }}
                        </b-button>
                    </div>  
                </b-form>
            </validation-observer>
        </b-modal>
    </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import momentTimezone from 'moment-timezone'
import Swal from "sweetalert2";
import "animate.css";
import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import { required, alphaNum, email, password } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import vSelect from "vue-select";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import * as helper from '@/libs/helpers';
import { useUtils as useI18nUtils } from "@core/libs/i18n";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import SidebarAddNewPatient from '@core/components/patients/SidebarAddNewPatient.vue'

import {
    BCard, BCardText, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown,
    BDropdownItem, BPagination, BTooltip, BImg, VBTooltip, BInputGroup, BInputGroupPrepend, BModal, VBModal,
    BOverlay, BSpinner, BListGroup, BListGroupItem, VBToggle,
    BCardBody, BCardTitle, BMediaAside, BAvatarGroup, BMediaBody,
    BAlert, BForm, BFormGroup, BFormTextarea, BFormRadioGroup, BFormRadio,
} from 'bootstrap-vue'
import Cleave from "vue-cleave-component";
import Ripple from "vue-ripple-directive";
import { ref, computed, toRefs, onMounted, nextTick, watch } from "@vue/composition-api";
import store from "@/store";
import router from "@/router";

import AppointmentProvider from "@/providers/Appointments";
const AppointmentResource = new AppointmentProvider();

import BranchOfficeProvider from '@/providers/BranchOffices'
const BranchOfficeResource = new BranchOfficeProvider()

import PatientsProvider from '@/providers/Patients'
const PatientsResource = new PatientsProvider()

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
    name: 'CalendarAppointmentAdd',
    components: {
        BForm,
        BFormGroup,
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
        BFormTextarea,
        BFormRadioGroup, 
        BFormRadio,

        flatPickr,
        vSelect,
        Cleave,

        // Form Validation
        ValidationProvider,
        ValidationObserver,
        ToastificationContent,
        SidebarAddNewPatient,
        
    },
    directives: {
        'b-toggle': VBToggle,
        'b-tooltip': VBTooltip,
        Ripple,
    },
    model: {
        prop: "isNewEventHandlerModalActive",
        event: "update:is-new-event-handler-modal-active",
    },
    props: {
        isNewEventHandlerModalActive: {
            type: Boolean,
            required: true,
        },
        event: {
            type: Object,
            required: true,
        },
    },
    data () {
        return {
            required,
            alphaNum,
            email,
            password,
            clevePhone: {
                phone: true,
                phoneRegionCode: "US",
            },
        }
    },
    computed: {
        slotMinTime () {
            return store.state.auth.setting['schedule_start_time'] || "09:00:00"
        }, 
        slotMaxTime() {
            return store.state.auth.setting['schedule_end_time'] || "22:00:00"
        },
        slotInterval() {
            return store.state.auth.setting['scheduled_appointment_interval'] || 15
        }
    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
            localize(process.env.MIX_FALLBACK_LOCALE);
        }
    },
    methods: {
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
        // Aplicar debounce a la función onSearch
		onSearchPatient: _.debounce(function (search, loading) {
			if (search.length >= 3) {
				loading(true);
				this.searchPatient(loading, search, this);
			}
		}, 300), // 300ms es el tiempo de espera para ejecutar la función después del último evento 'onSearch'
        async searchPatient(loading, search, vm) {
			this.loading = true;
            const query = {
                q: search,
                isAll: true,
                perPage: 10,
                page: 1,
                
            }
            const { data } = await PatientsResource.search(query)
			vm.patients = data.data.map((item) => {
                return {
                    ...item,
                    full_name: `${item.name} ${item.last_name} ${item.mother_last_name}`,
                }
            });
			loading(false)
		},
    },
    setup(props, { emit }) {

        // Use toast
        // const toast = useToast();
        const { t } = useI18nUtils();
        const { event } = toRefs(props);
        const clearFormData = ref(null);
        const loading = ref(false);
        const branchs = ref([]);
        const patients = ref([]);
        const hideSidebar = ref(false)   
        const isValidCellPhone = ref(false) 
        const isAddNewPatientSidebarActive = ref(false)  
        const professionals = ref([])
        const isAvailable = ref(false)

        const calendarOptions = [
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
        ];

        const blankAppointmentData = {
            branch_office_id: null,
            user_id: store.state.calendar.selectedProfessional.id, //Professional
            date: null,
            state: 'pending',
            patient: {
                id: null,
                name: null,
                last_name: null,
                mother_last_name: null,
                document_type: null,
                rut: null,
                email: null,
                cellphone: null,
                isValidCellPhone: false,
                full_name: null,
            },
            timeAvailable: null,
        };

        const appointmentData = ref(JSON.parse(JSON.stringify(blankAppointmentData)));
        const resetappointmentData = () => {
            appointmentData.value = JSON.parse(JSON.stringify(blankAppointmentData));
        };

        const selectedProfessional = computed(() => {
            return store.state.calendar.selectedProfessional
        })

        const selectPatient = (value) => {
            console.log('selectPatient', value)
        }

        const checkAvailability = async (dateStr) => {
            loading.value = true;
            const query = {
                date: dateStr,
                user_id: appointmentData.value.user_id,
            };
            try {
                const { data } = await AppointmentResource.available(query);
                if (data.success) {
                    return true;
                } else {
                    helper.danger(data.message);
                    return false;
                }
            } catch (error) {                
                helper.handleResponseErrors(error)
                return false;
            } finally{
                loading.value = false;
            }
        }       

        const getProfessionals = async () => {
            try {
                loading.value = true
                const { data } = await UserResource.index({ criteria: "professionals", isCalendar: true, ignoreSchedules: false, });
                if (data.success) {
                    professionals.value = data.data
                } else {
                    helper.danger(data.message)
                }
                
            } catch (e) {
                helper.handleResponseErrors(e)
            } finally {
                loading.value = false
            }
        }

        const getBranch = async () => {
            
            try {
                loading.value = true
                const { data } = await BranchOfficeResource.index({isAll: true})
                if (data.success) {
                    branchs.value = data.data

                    // Set default branch office
                    nextTick(() => {

                        if (branchs.value.length > 0) {
                            appointmentData.value.branch_office_id = branchs.value[0].id
                        }
                    })
                    // store.commit('auth/SET_BRANCHES', data)
                } else {
                    helper.danger(data.message)
                }
                
            } catch (e) {
                helper.handleResponseErrors(e)
            } finally {
                loading.value = false
            }
        }

        const { refFormObserver, getValidationState, resetForm } = formValidation(resetappointmentData);

        const onSubmit = async () => {
            console.log('onSubmit', appointmentData.value)

            try {
                appointmentData.value.patient_id = appointmentData.value.patient?.id
                const { patient_id, user_id, date, branch_office_id, duration, intern_observation, timeAvailable, patient } = appointmentData.value

                //De date necesito extrar solo la fecha
                const onlyDate = moment(date).format('DD/MM/YYYY')

                //Ahora de necesito aplicar este formato: 16/11/2024 09:45 con onlyDate y timeAvailable
                const dateTime = `${onlyDate} ${timeAvailable}`                

                const payload = {
                    date: dateTime,
                    branch_office_id: branch_office_id,
                    user_id: user_id,
                    patient_id: patient_id,
                    duration: duration,
                    intern_observation: intern_observation,
                    state: 'pending',
                    user_id: selectedProfessional.value.id,
                    patient_name: patient.name,
                    patient_phone: patient.phone,
                    patient_email: patient.email,
                    patient_rut: patient.rut,
                }

                loading.value = true
                const { data } = await AppointmentResource.save(payload);
                loading.value = false
                if (data.success) {
                    helper.success(data.message);
                    // router.push({ name: "appointments" });
                    emit('add-appointment', data.data)
                    emit("update:is-new-event-handler-modal-active", false);
                } else {
                    helper.danger(data.message);
                }

            } catch (e) {
                helper.handleResponseErrors(e);
            }finally {
                loading.value = false
            }
        }

        const addPatient = (newPatient) => {           

            const {id, name, last_name, mother_last_name, rut, phone, cellphone, email, full_name} = newPatient

            // Set patient data
            appointmentData.value.patient = {
                id: id,
                name: name,
                last_name: last_name,
                mother_last_name: mother_last_name,
                rut: rut,
                email: email,
                cellphone: cellphone,
                phone: phone,
                full_name: full_name,
            }

            // Add new patient to the list
            patients.value.push(appointmentData.value.patient)
        }

        onMounted(async () => {
            // await getBranch()
            // await getProfessionals()
        })

        watch(() => props.event, (value) => {
            if (value) {

                branchs.value = store.state.calendar.useBranchs
                professionals.value = store.state.calendar.professionals

                nextTick(() => {
                    if (branchs.value.length > 0) {
                        appointmentData.value.branch_office_id = branchs.value[0].id
                    }
                })

                appointmentData.value.date = value.start
                const timezone = store.state.auth.setting['timezone'] || window._setting.timezone
                const time = moment.tz(value.start, 'YYYY-MM-DDTHH:mm:ss', timezone).format('HH:mm');
                appointmentData.value.timeAvailable = time
            }
        })

        return {
            calendarOptions,
            blankAppointmentData,
            clearFormData,
            loading,
            branchs,
            appointmentData,
            patients,
            hideSidebar,
            isValidCellPhone,
            professionals,
            isAvailable,


            // Methods
            selectedProfessional,
            checkAvailability,
            selectPatient,
            onSubmit,
            addPatient,
            refFormObserver,
            getValidationState,
            resetForm,
            isAddNewPatientSidebarActive,
        }      
        
    },
}
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import '~@resources/scss/base/bootstrap-extended/variables';
@import 'bootstrap/scss/variables';
@import '~@resources/scss/base/components/variables-dark';
</style>

<style lang="scss">
@import '@resources/scss/vue/libs/vue-select.scss';
@import '@resources/scss/vue/libs/vue-flatpicker.scss';
.invoice-add-wrapper {
  .add-new-client-header {
    padding: $options-padding-y $options-padding-x;
      color: $success;

    &:hover {
      background-color: rgba($success, 0.12);
    }
  }
}
</style>

<style>
.custom-radio-group {
    display: flex;
    justify-content: center; /* Centra los elementos horizontalmente */
    align-items: center;     /* Centra los elementos verticalmente */
    flex-wrap: wrap;         /* Asegura que los radios no se desborden */
}
</style>