<template>
    <div>
        <b-sidebar
            id="sidebar-add-new-event"
            sidebar-class="sidebar-lg"
            :visible="isEventHandlerSidebarActive"
            bg-variant="white"
            shadow
            backdrop
            no-header
            right
            @change="(val) => $emit('update:is-event-handler-sidebar-active', val)">
            <template #default="{ hide }">
                <!-- Header -->
                <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                    <h5 class="mb-0">{{eventLocal.id ? $t("appointments.edit_title_event") : $t("appointments.add_title_event")}}</h5>
                    <div>
                        <feather-icon v-if="eventLocal.id" icon="TrashIcon" class="cursor-pointer" @click="$emit('remove-event'); hide();"/>
                        <feather-icon @click="hide()" class="ml-1 cursor-pointer" icon="XIcon" size="16" click="hide"/>
                    </div>
                </div>

                <!-- Body -->
                <validation-observer #default="{ handleSubmit }" ref="refFormObserver">
                    <!-- Form -->
                    <b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
                        
                        <!-- Professional -->
                        <b-form-group :label="$t('appointments.professional')" label-for="user_id">
                            <b-form-input id="user_id" trim disabled v-model="$store.state.calendar.selectedProfessional.name"/>
                        </b-form-group>

                        <!-- Start Date -->
                        <validation-provider #default="validationContext" :name="$t('appointments.date_valid')" rules="required">
                            <b-form-group :label="$t('appointments.date')" label-for="start-date" :state="getValidationState(validationContext)">
                                <flat-pickr :disabled="eventLocal.extendedProps.disabled"
                                    v-model="eventLocal.start"
                                    class="form-control"
                                    :config="{
                                        minDate: eventLocal.id ? '' : 'today',
                                        enableTime: true,
                                        dateFormat: 'Y-m-d H:i',
                                    }"
                                />
                                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>

                        <!-- Sates -->
                        <validation-provider #default="validationContext" :name="$t('appointments.state_valid')" rules="required">
                            <b-form-group :label="$t('appointments.state')" label-for="calendar" :state="getValidationState(validationContext)">
                                <v-select v-model="eventLocal.extendedProps.calendar" :options="calendarOptions" label="label" :reduce="(calendar) => calendar.label" input-id="calendar">
                                    <template #option="{ color, label }">
                                        <div class="rounded-circle d-inline-block mr-50" :class="`bg-${color}`" style="height: 10px; width: 10px"/>
                                        <span>{{$t(`appointments.status.${label}`)}}</span>
                                    </template>

                                    <template #selected-option="{ color, label }">
                                        <div class="rounded-circle d-inline-block mr-50" :class="`bg-${color}`" style="height: 10px; width: 10px"/>
                                        <span>{{$t(`appointments.status.${label}`)}}</span>
                                    </template>
                                </v-select>

                                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>

                        <!-- Patients -->
                        <validation-provider #default="validationContext" :name="$t('appointments.patient_valid')" rules="required">
                            <b-form-group :label="$t('appointments.patient')" label-for="add-patient" :state="getValidationState(validationContext)">
                                
                                <v-select
                                    :disabled="eventLocal.extendedProps.disabled" 
                                    v-model="eventLocal.extendedProps.patient"
                                    :options="patients" 
                                    label="name" 
                                    input-id="add-patient"
                                    @search="onSearch" 
                                    :clearable="false"
                                    >

                                    <template #list-header>
                                        <li v-b-toggle.sidebar-add-new-patient class="add-new-client-header d-flex align-items-center my-50">
                                            <feather-icon icon="PlusIcon" size="16"/>
                                            <span class="align-middle ml-25">{{$t('patients.add.title')}}</span>
                                        </li>
                                    </template>
                                    
                                    <template #option="{ avatar, full_name, document_type, rut, email, cellphone }">
                                        <b-avatar size="sm" :src="avatar" />
                                        <span class="ml-50 align-middle">{{ full_name }}</span><br>
                                        <small class="ml-50 align-middle">{{resolveTypeDocumentTranslate(document_type)}}: {{ rut }}</small><br>
                                        <small class="ml-50 align-middle">{{$t('patients.email')}}: {{ email }}</small><br>
                                        <small class="ml-50 align-middle">{{$t('patients.cellphone')}}: {{ cellphone }}</small>
                                    </template>

                                    <template #selected-option="{ avatar, full_name }">
                                        <b-avatar size="sm" class="border border-white" :src="avatar"/>
                                        <span class="ml-50 align-middle">{{ full_name }}</span>
                                    </template>
                                </v-select>

                                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>

                        <!-- Duration -->
                        <validation-provider #default="validationContext" :name="$t('appointments.duration_valid')" rules="required">
                            <b-form-group :label="$t('appointments.duration')" label-for="event-duration" :state="getValidationState(validationContext)">
                                <b-form-input :disabled="eventLocal.extendedProps.disabled" input-id="event-duration" v-model="eventLocal.extendedProps.duration" type="number"
                                    :placeholder="$t('appointments.duration_placeholder')"/>
                                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>

                        <!-- Observations -->
                        <b-form-group :label="$t('appointments.observations')" label-for="event-observation">
                            <b-form-textarea id="event-observation" v-model="eventLocal.extendedProps.intern_observation" 
                            :placeholder="$t('appointments.observations_placeholder')"/>
                        </b-form-group>

                        <!-- Form Actions -->
                        <div class="d-flex mt-2">
                            <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mr-2" type="submit">
                                {{eventLocal.id ? $t("update") : $t("save")}}
                            </b-button>
                            <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" @click="hide" variant="outline-secondary">
                                {{ $t("cancel") }}
                            </b-button>
                        </div>
                    </b-form>
                </validation-observer>
            </template>
        </b-sidebar>

        <!-- Patient Add -->
        <sidebar-add-new-patient :active="hideSidebar" :data="patient" @store="storePatient" />
    </div>
</template>

<script>
import {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BAvatar,
    BFormTextarea,
    BButton,
    BFormInvalidFeedback,
    VBToggle,
} from "bootstrap-vue";
import store from "@/store";
import vSelect from "vue-select";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import Ripple from "vue-ripple-directive";
import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import { required, email, url } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import { ref, toRefs } from "@vue/composition-api";
import useCalendarEventHandler from "./useCalendarEventHandler";
import SidebarAddNewPatient from '@core/components/patients/SidebarAddNewPatient.vue'


// Providers
import PatientProvider from "@/providers/Patients";
const PatientResource = new PatientProvider();

export default {
    components: {
        BButton,
        BSidebar,
        BForm,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BFormTextarea,
        BAvatar,
        vSelect,
        flatPickr,
        ValidationProvider,
        BFormInvalidFeedback,
        ValidationObserver,
        SidebarAddNewPatient,
    },
    directives: {
        'b-toggle': VBToggle,
        Ripple,
    },
    model: {
        prop: "isEventHandlerSidebarActive",
        event: "update:is-event-handler-sidebar-active",
    },
    props: {
        isEventHandlerSidebarActive: {
            type: Boolean,
            required: true,
        },
        event: {
            type: Object,
            required: true,
        },
        clearEventData: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
            loading: false,
            patients: [],
            patient: {},
            hideSidebar: false,
            required,
            email,
            url,            
        };
    },
    
    setup(props, { emit }) {
        /*
     ? This is handled quite differently in SFC due to deadlock of `useFormValidation` and this composition function.
     ? If we don't handle it the way it is being handled then either of two composition function used by this SFC get undefined as one of it's argument.
     * The Trick:

     * We created reactive property `clearFormData` and set to null so we can get `resetEventLocal` from `useCalendarEventHandler` composition function.
     * Once we get `resetEventLocal` function which is required by `useFormValidation` we will pass it to `useFormValidation` and in return we will get `clearForm` function which shall be original value of `clearFormData`.
     * Later we just assign `clearForm` to `clearFormData` and can resolve the deadlock. 😎

     ? Behind The Scene
     ? When we passed it to `useCalendarEventHandler` for first time it will be null but right after it we are getting correct value (which is `clearForm`) and assigning that correct value.
     ? As `clearFormData` is reactive it is being changed from `null` to corrent value and thanks to reactivity it is also update in `useCalendarEventHandler` composition function and it is getting correct value in second time and can work w/o any issues.
    */
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
            localize(process.env.MIX_FALLBACK_LOCALE);
        }

        const clearFormData = ref(null);

        const {
            eventLocal,
            resetEventLocal,
            calendarOptions,

            // UI
            onSubmit,
            guestsOptions,
            // patientData,
        } = useCalendarEventHandler(toRefs(props), clearFormData, emit);

        const { refFormObserver, getValidationState, resetForm, clearForm } =
            formValidation(resetEventLocal, props.clearEventData);

        clearFormData.value = clearForm;

        return {
            // Add New Event
            eventLocal,
            calendarOptions,
            onSubmit,
            guestsOptions,
            // patientData,

            // Form Validation
            resetForm,
            refFormObserver,
            getValidationState,
        };
    },
    mounted() {
        // console.log(this.eventLocal)
    },
    methods: {
        onSearch(search, loading) {
            if(search.length) {
                loading(true);
                this.searchPatients(loading, search, this);
            }
        },
        async searchPatients(loading, search, vm) {
            this.loading = true;
            const { data } = await PatientResource.search(search);
            vm.patients = data.data;
            this.loading = false
            loading(false)
        },
        async storePatient() {
             try {
                this.loading = true;
                this.patient.phone = this.patient.cellphone
                this.patient.address = ` --- `
                const { data } = await PatientResource.save(this.patient);
                this.loading = false;
                if (data.success) {
                    this.hideSidebar = true
                    this.eventLocal.extendedProps.patient = data.data
                    this.success("", data.message, "HeartIcon");
                } else {
                    this.danger("", data.message, "HeartIcon");
                }
            } catch (e) {
                this.loading = false;
                if (e.response.status === 422) {
                    this.danger(
                        this.getFirstValidationError(e.response.data.errors),
                        "AlertOctagonIcon"
                    );
                    this.errors = e.response.data.errors;
                } else {
                    this.danger(e.message, "Error", "AlertOctagonIcon");
                }
            }
        }
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
</style>
