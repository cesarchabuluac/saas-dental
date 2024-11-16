<template>
    <b-sidebar id="sidebar-add-new-patient" 
        ref="sidebar-add-new-patient" 
        sidebar-class="sidebar-lg" 
        bg-variant="white"
        :visible="isAddNewPatientSidebarActive"
        shadow 
        backdrop 
        no-header 
        right
        @hidden="resetForm"
        @change="(val) => $emit('update:is-add-new-patient-sidebar-active', val)"
        >
        <template #default="{ hide }">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                <h5 class="mb-0">{{ $t("patients.add.title") }}</h5>
                <feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
            </div>

            <!-- BODY -->
            <validation-observer #default="{ handleSubmit }" ref="refFormObserver">
                <b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
                    <!-- Patient Name -->
                    <validation-provider #default="validationContext" :name="$t('patients.name')" rules="required">
                        <b-form-group :label="$t('patients.name')" label-for="patient-name" :state="getValidationState(validationContext)">
                            <b-form-input v-model="patientData.name" autocomplete="off" trim :placeholder="$t('patients.name_placeholder')" />
                        </b-form-group>
                    </validation-provider>

                    <!-- Patient Last Name -->
                    <validation-provider #default="validationContext" :name="$t('patients.last_name')" rules="required">
                        <b-form-group :label="$t('patients.last_name')" label-for="patient-last-name" :state="getValidationState(validationContext)">
                            <b-form-input v-model="patientData.last_name" trim :placeholder="$t('patients.last_name_placeholder')" />
                        </b-form-group>
                    </validation-provider>

                    <!-- Patient Mother Last Name -->
                    <b-form-group :label="$t('patients.mother_last_name')" label-for="patient-mother-last-name">
                        <b-form-input v-model="patientData.mother_last_name" trim
                            :placeholder="$t('patients.mother_last_name_placeholder')" />
                    </b-form-group>

                    <!-- Patient documentList -->
                    <validation-provider #default="validationContext" :name="$t('patients.document_type')" rules="required">
                        <b-form-group :label="$t('patients.document_type')" label-for="documentList" :state="getValidationState(validationContext)">
                            <v-select :clearable="false" :filterable="false" label="label" v-model="patientData.document_type"
                                :options="documentTypes" @input="selectDocumentType"
                                :placeholder="$t('patients.document_type_placeholder')" />
                        </b-form-group>
                    </validation-provider>

                    <!-- Patient Document -->
                    <validation-provider #default="validationContext" :name="$t('patients.document')" rules="required">
                        <b-form-group :label="$t('patients.document')" label-for="patient-document" :state="getValidationState(validationContext)">
                            <b-form-input :class="isValidateRut ? '' : 'is-invalid'" @blur="validateRut" v-model="patientData.rut" trim
                                :placeholder="$t('patients.document_placeholder')" />
                        </b-form-group>
                    </validation-provider>

                    <!-- Patient Email -->
                    <validation-provider #default="validationContext" :name="$t('patients.email')" rules="required">
                        <b-form-group :label="$t('patients.email')" label-for="patient-email" :state="getValidationState(validationContext)">
                            <b-form-input v-model="patientData.email" trim :placeholder="$t('patients.email_placeholder')" />
                        </b-form-group>
                    </validation-provider>

                    <!-- Patient Cellular -->
                    <b-form-group :label="$t('patients.cellphone')" label-for="patient-cellphone">
                        <VuePhoneNumberInput :dark="isDark" dark-color="#283046" v-model="patientData.cellphone" required
                            :default-country-code="isoCountry" :translations="{
                                countrySelectorLabel: $t('patients.cellphone_country'),
                                countrySelectorError: $t('patients.cellphone_country_required'),
                                phoneNumberLabel: $t('patients.cellphone_placeholder'),
                                example: $t('patients.cellphone_example')
                            }" :show-code-on-list="true" :no-validator-state="false" :no-use-browser-locale="false"
                            @update="validCellPhone" />
                    </b-form-group>

                    <!-- Form Actions -->
                    <div class="d-flex mt-2">
                        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" @click="hide"
                        class="mr-2">
                            {{ $t("cancel") }}
                        </b-button>

                        <b-button :disabled="loading" v-if="patientData.isValidCellPhone && isValidateRut" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary" type="submit">
                            {{ $t("save") }}
                        </b-button>
                    </div>
                </b-form>
            </validation-observer>
        </template>
    </b-sidebar>
</template>

<script>
import {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BButton,
} from "bootstrap-vue";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import { ref, computed, watch } from "@vue/composition-api";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import utils from "@/libs/utils";
import * as helper from '@/libs/helpers';
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { required, alphaNum, email, password } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";

import { validRut, cleanRut, formatRut, getRutCheckDigit } from '@/libs/rut.js'
import store from "@/store";

import PatientsProvider from '@/providers/Patients'
const PatientsResource = new PatientsProvider()

export default {
    components: {
        BSidebar,
        BForm,
        BFormGroup,
        BFormInput,
        BFormTextarea,
        BButton,
        vSelect,
        VuePhoneNumberInput,

        // Form Validation
        ValidationProvider,
        ValidationObserver,
    },
    directives: {
        Ripple,
    },
    model: {
        prop: "isAddNewPatientSidebarActive",
        event: "update:is-add-new-patient-sidebar-active",
    },
    props: {
        isAddNewPatientSidebarActive: {
            type: Boolean,
            required: true,
        },
    },
    setup(props, { emit }) {

        const loading = ref(false)
        const validCellPhone = (evt) => {
            patientData.value.isValidCellPhone = evt.isValid
            patientData.value.phone_country = evt.countryCode
            patientData.value.mobile = { ...evt }
        }

        const blankPatientData = {
            id: null,
            name: null,
            last_name: null,
            mother_last_name: null,
            document_type: null,
            rut: null,
            email: null,
            cellphone: null,
            phone: null,
            phone_country: null,
            address: ` --- `,
            mobile: null,
        };

        const patientData = ref(JSON.parse(JSON.stringify(blankPatientData)));
        const resetPatientData = () => {
            patientData.value = JSON.parse(JSON.stringify(blankPatientData));
        };

        const isDark = computed(
            () => store.state.appConfig.layout.skin === 'dark' || false
        );

        const isoCountry = store.state.auth.setting['app_country_iso'] || 'CL'

        const patient = ref({
            name: null,
            last_name: null,
            document_type: null,
        });

        const isValidateRut = ref(true)

        const documentTypes = ref([
            { label: "RUT", value: 1 },
            { label: "Pasaporte", value: 2 },
            { label: "Otro", value: 3 },
        ]);

        const validateRut = (evt) => {
            if (!patientData.value.rut) {
                isValidateRut.value = false
            }

            if (patientData.value.document_type.value === 'RUT') {
                if (patientData.value.rut) {
                    formatRut(patientData.value.rut, { dots: false })
                    if (validRut(patientData.value.rut)) {
                        isValidateRut.value = true
                    }
                    isValidateRut.value = false
                } else {
                    isValidateRut.value = false
                }
            } else {
                isValidateRut.value = true
            }
        }

        const selectDocumentType = (evt) => {
            if (patientData.value.document_type.value === 'RUT') {
                if (patientData.value.rut) {
                    formatRut(patientData.value.rut, { dots: false })
                    if (validRut(patientData.value.rut)) {
                        isValidateRut.value = true
                    }
                    isValidateRut.value = false
                } else {
                    isValidateRut.value = false
                }
            } else {
                isValidateRut.value = true
            }
        }

        const onSubmit = async () => {

            loading.value = true

            patientData.value.phone = patientData.value.mobile.phoneNumber   
            patientData.value.cellphone = patientData.value.mobile.e164

            try {

                const { data } = await PatientsResource.save(patientData.value)
                if (data.success) {
                    helper.success(data.message)                    
                    emit('add-patient', data.data)
                    emit("update:is-add-new-patient-sidebar-active", false);
                } else {
                    helper.danger(data.message)
                }

            }catch (error) {
                helper.handleResponseErrors(error)
            }finally {
                loading.value = false
            }
        }

        const { refFormObserver, getValidationState, resetForm } = formValidation(resetPatientData);

        return {
            loading,
            isDark,
            isoCountry,
            patient,
            documentTypes,
            isValidateRut,            
            patientData,

            validCellPhone,
            selectDocumentType,
            validateRut,            
            onSubmit,
            refFormObserver,
            getValidationState,
            resetForm,
        };
    },
    watch: {
        // active(value) {
        //     this.$refs['sidebar-add-new-patient'].hide()
        // },
        // loading(value) {
        //     console.log(value)
        // }
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
