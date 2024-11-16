<template>
    <div>
        <b-modal id="modal-center" ref="info-modal" :title="`${$t('appointments.add.desc')}`"
            no-close-on-backdrop no-close-on-esc
            :visible="isEditEventHandlerModalActive" 
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
                        <b-col cols="12" md="6">
                            <validation-provider #default="validationContext" :name="$t('appointments.duration')" rules="required">
                                <b-form-group :label="$t('appointments.duration')" label-for="event-duration" :state="getValidationState(validationContext)">
                                    <b-form-input size="sm" input-id="event-duration" v-model="appointmentData.duration" type="number"
                                        :placeholder="$t('appointments.duration_placeholder')" />
                                </b-form-group>
                            </validation-provider>
                        </b-col>

                        <!-- Field: Date -->
                        <b-col cols="12" md="6" lg="6">
                            <b-form-group :label="$t('appointments.date')" :description="!isAvailable ? $t('appointments.not_available_help') : ''"
                             label-for="date">
                                <flat-pickr v-model="appointmentData.date" @on-change="onChange" @on-ValueUpdate="onChange"
                                    class="form-control" :class="!isAvailable ? 'is-invalid' : ''" :config="{
                                        minDate: minDate,
                                        enableTime: true,
                                        time_24hr: true,
                                        dateFormat: 'd/m/Y H:i',
                                        minTime: slotMinTime,
                                        maxTime: slotMaxTime,
                                        minuteIncrement: slotInterval,
                                    }" placeholder="DD-MM-YYYY H:I:S" />
                            </b-form-group>
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
    name: 'CalendarAppointmentEdit',
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
        prop: "isEditEventHandlerModalActive",
        event: "update:is-edit-event-handler-modal-active",
    },
    props: {
        isEditEventHandlerModalActive: {
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
        },
        minDate() {
            const originalDateObject = new Date(this.event.date); // Asegúrate de que la fecha sea válida
            return originalDateObject;
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

            const isValidDate = this.isValidDate(dateStr, inputDateFormat);
            if (!isValidDate) {
                this.danger(this.$t('invalid_date_format'));
                return false;
            }

            const isWithinOfficeHours = this.isWithinOfficeHours(selectedDates, officeStartTime, officeEndTime);
            if (!isWithinOfficeHours) {
                this.danger(this.$t('closed_office'));
                return false;
            }

            //
            // const now = moment();
            // const selectedDateTime = moment(dateStr, inputDateFormat, true);
            // if (selectedDateTime.isSameOrBefore(now)) {
            //     this.danger(this.$t('date_not_available'));
            //     return false
            // }

            // If you get here, all is well and the date is available
            this.checkAvailability(dateStr);
            
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
        // const branchs = ref([]);
        const patients = ref([]);
        const hideSidebar = ref(false)   
        const isValidCellPhone = ref(false) 
        const isAddNewPatientSidebarActive = ref(false)  
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
            user_id: null,
            patient_id: null,
            date: null,
            state: null,
            duration: null,
            timeAvailable: null,
            intern_observation: null,
            patient: null,
        };

        const professionals = computed(() => store.state.calendar.useProfessionals)
        const branchs = computed(() => store.state.calendar.useBranchs)

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
            isAvailable.value = false;
            const query = {
                id: appointmentData.value.id,
                isValidate: true,
                date: dateStr,
                user_id: appointmentData.value.user_id,
            };
            try {
                const { data } = await AppointmentResource.available(query);
                isAvailable.value = data.success;                
            } catch (error) {                
                helper.handleResponseErrors(error)
            } finally{
                loading.value = false;
            }
        }      

        const { refFormObserver, getValidationState, resetForm } = formValidation(resetappointmentData);

        const onSubmit = async () => {
            const payload = {
                branch_office_id: appointmentData.value.branch_office_id,
                user_id: appointmentData.value.user_id,
                patient_id: appointmentData.value.patient.id,
                date: appointmentData.value.date, //moment(appointmentData.value.date, 'DD/MM/YYYY H:mm').format('YYYY-MM-DD HH:mm:ss'),
                state: appointmentData.value.state,
                duration: appointmentData.value.duration,
                intern_observation: appointmentData.value.intern_observation,
            }

            try {
                loading.value = true
                const { data } = await AppointmentResource.update(appointmentData.value.id, payload);
                loading.value = false
                if (data.success) {
                    helper.success(data.message);
                    emit('edit-appointment', data.data)
                    console.log('edit-appointment', data.data)
                    emit("update:is-edit-event-handler-modal-active", false);
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

        watch(() => props.isEditEventHandlerModalActive, async (value) => {
            if (value) {
                appointmentData.value = {
                    id: props.event.id,
                    branch_office_id: props.event.branch_office_id,
                    user_id: props.event.user_id,
                    patient_id: props.event.patient_id,
                    date: moment(props.event.date).format('DD/MM/YYYY H:mm'),
                    state: props.event.state,
                    duration: props.event.duration,
                    intern_observation: props.event.intern_observation,
                    timeAvailable: null,
                    patient: props.event.patient,
                };
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