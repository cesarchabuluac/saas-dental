<template>
    <b-sidebar id="sidebar-add-new-patient" ref="sidebar-add-new-patient" sidebar-class="sidebar-lg" bg-variant="white"
        shadow backdrop no-header right>
        <template #default="{ hide }">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                <h5 class="mb-0">{{ $t("patients.add.title") }}</h5>
                <feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
            </div>

            <!-- Body -->
            <b-form class="p-2">
                <!-- Patient Name -->
                <b-form-group :label="$t('patients.name')" label-for="patient-name">
                    <b-form-input v-model="data.name" trim :placeholder="$t('patients.name_placeholder')" />
                </b-form-group>

                <!-- Patient Last Name -->
                <b-form-group :label="$t('patients.last_name')" label-for="patient-last-name">
                    <b-form-input v-model="data.last_name" trim :placeholder="$t('patients.last_name_placeholder')" />
                </b-form-group>

                <!-- Patient Mother Last Name -->
                <b-form-group :label="$t('patients.mother_last_name')" label-for="patient-mother-last-name">
                    <b-form-input v-model="data.mother_last_name" trim
                        :placeholder="$t('patients.mother_last_name_placeholder')" />
                </b-form-group>

                <!-- Patient documentList -->
                <b-form-group :label="$t('patients.document_type')" label-for="documentList">
                    <v-select :clearable="false" :filterable="true" label="label" v-model="data.document_type"
                        :options="documentTypes" @input="selectDocumentType"
                        :placeholder="$t('patients.document_type_placeholder')" />
                </b-form-group>

                <!-- Patient Document -->
                <b-form-group :label="$t('patients.document')" label-for="patient-document">
                    <b-form-input :class="isValidateRut ? '' : 'is-invalid'" @blur="validateRut" v-model="data.rut" trim
                        :placeholder="$t('patients.document_placeholder')" />
                </b-form-group>

                <!-- Patient Email -->
                <b-form-group :label="$t('patients.email')" label-for="patient-email">
                    <b-form-input v-model="data.email" trim :placeholder="$t('patients.email_placeholder')" />
                </b-form-group>

                <!-- Patient Cellular -->
                <b-form-group :label="$t('patients.cellphone')" label-for="patient-cellphone">
                    <VuePhoneNumberInput :dark="isDark" dark-color="#283046" v-model="data.cellphone" required
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
                    <b-button :disabled="loading" v-if="data.isValidCellPhone && isValidateRut" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        variant="primary" class="mr-2" @click="saveInfo">
                        {{ $t("save") }}
                    </b-button>
                    <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" @click="hide">
                        {{ $t("cancel") }}
                    </b-button>
                </div>
            </b-form>
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
import { validRut, cleanRut, formatRut, getRutCheckDigit } from '@/libs/rut.js'
import store from "@/store";
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
    },
    directives: {
        Ripple,
    },
    props: ['data', 'active', 'isValidCellPhone', 'loading'],
    setup(props, context) {

        const validCellPhone = (evt) => {
            props.data.isValidCellPhone = evt.isValid
            props.data.phone_country = evt.countryCode
            props.data.mobile = { ...evt }
        }

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
            { label: "RUT", value: "RUT" },
            { label: "Pasaporte", value: "Pasaporte" },
            { label: "Otro", value: "Otro" },
        ]);

        const validateRut = (evt) => {
            if (!props.data.rut) {
                isValidateRut.value = false
            }

            if (props.data.document_type.value === 'RUT') {
                if (props.data.rut) {
                    formatRut(props.data.rut, { dots: false })
                    if (validRut(props.data.rut)) {
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
            if (props.data.document_type.value === 'RUT') {
                if (props.data.rut) {
                    formatRut(props.data.rut, { dots: false })
                    if (validRut(props.data.rut)) {
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

        const saveInfo = () => {
            context.emit('store')
        }

        return {
            isDark,
            isoCountry,
            patient,
            documentTypes,
            isValidateRut,
            validCellPhone,
            selectDocumentType,
            validateRut,
            saveInfo,
        };
    },
    watch: {
        active(value) {
            this.$refs['sidebar-add-new-patient'].hide()
        },
        loading(value) {
            console.log(value)
        }
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
