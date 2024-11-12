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
                <b-tabs pills>
                    <!-- Tab: Account -->
                    <b-tab active>
                        <template #title>
                            <feather-icon icon="UserIcon" size="16" class="mr-0 mr-sm-50" />
                            <span class="d-none d-sm-inline">{{ $t("patients.general_data") }}</span>
                        </template>

                        <!-- Media -->
                        <b-media class="mb-2">
                            <template #aside>
                                <b-avatar ref="previewEl" :src="avatar" variant="light-primary"
                                    :text="avatarText(patient.name)" size="90px" rounded />
                            </template>
                            <h4 class="mb-1">
                                {{ patient.name }}
                            </h4>
                            <div class="d-flex flex-wrap">
                                <b-button size="sm" variant="primary" @click="$refs.refInputEl.click()">
                                    <input ref="refInputEl" type="file" class="d-none" @input="inputImageRenderer" />
                                    <span class="d-none d-sm-inline">{{
                                        $t("change")
                                    }}</span>
                                    <feather-icon icon="EditIcon" class="d-inline d-sm-none" />
                                </b-button>
                                <b-button size="sm" @click="resetAvatar" variant="outline-secondary" class="ml-1">
                                    <span class="d-none d-sm-inline">{{
                                        $t("cancel")
                                    }}</span>
                                    <feather-icon icon="TrashIcon" class="d-inline d-sm-none" />
                                </b-button>
                            </div>
                            <small>{{ $t('image_format_limit') }}</small>
                        </b-media>

                        <!-- Patient Info: Input Fields -->
                        <b-form>
                            <b-row>
                                <!-- Field: Name -->
                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('patients.name')" :description="$t('patients.name_help')"
                                        label-for="name">
                                        <b-form-input size="sm" id="name" v-model="patient.name"
                                            :placeholder="$t('patients.name_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <!-- Field: Last Name -->
                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('patients.last_name')"
                                        :description="$t('patients.last_name_help')" label-for="last_name">
                                        <b-form-input size="sm" id="last_name" v-model="patient.last_name"
                                            :placeholder="$t('patients.last_name_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <!-- Field: Mother Last Name -->
                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('patients.mother_last_name')"
                                        :description="$t('patients.mother_last_name_help')" label-for="mother_last_name">
                                        <b-form-input size="sm" id="mother_last_name" v-model="patient.mother_last_name"
                                            :placeholder="$t('patients.mother_last_name_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <!-- Filed Document Type -->
                                <b-col cols="12" md="4">
                                    <b-form-group label-for="documentList" :label="$t('patients.document_type')"
                                        :description="$t('patients.document_type_help')">
                                        <v-select id="documentList" v-model="patient.document_type" label="label"
                                            :options="documentTypes" :placeholder="$t('patients.document_type_placeholder')"
                                            class="select-size-sm"
                                            :clearable="false"
                                            :searchable="false" />
                                    </b-form-group>
                                </b-col>

                                <!-- Field: Document -->
                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('patients.document')"
                                        :description="$t('patients.document_help')" label-for="rut">
                                        <b-form-input size="sm" id="rut" :class="isValidateRut ? '' : 'is-invalid'"
                                            v-model="patient.rut" @blur="validateRut"
                                            :placeholder="$t('patients.document_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <!-- Field: Birth Date -->
                                <b-col cols="12" md="6" lg="4">
                                    <b-form-group :label="$t('patients.birthday')"
                                        :description="$t('patients.birthday_help')" label-for="birthday">
                                        <flat-pickr v-model="patient.birthday" class="form-control"
                                            :config="{ dateFormat: 'd/m/Y' }" placeholder="DD-MM-YYYY" />
                                    </b-form-group>
                                </b-col>

                                <!-- Field: Email -->
                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('patients.email')" :description="$t('patients.email_help')"
                                        label-for="email">
                                        <b-form-input size="sm" id="email" type="email" v-model="patient.email"
                                            :placeholder="$t('patients.email_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <!-- Field: Cell phone -->
                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('patients.cellphone')"
                                        :description="$t('patients.cellphone_help')" label-for="cellphone">
                                        <VuePhoneNumberInput :dark="isDarkMode()" dark-color="#283046"
                                            v-model="patient.cellphone" required :default-country-code="isoCountry"
                                            :translations="{
                                                countrySelectorLabel: $t('patients.cellphone_country'),
                                                countrySelectorError: $t('patients.cellphone_country_required'),
                                                phoneNumberLabel: $t('patients.cellphone_placeholder'),
                                                example: $t('patients.cellphone_example')
                                            }" :show-code-on-list="true" :no-validator-state="false"
                                            :no-use-browser-locale="false" @update="validCellPhone" size="sm" />
                                    </b-form-group>

                                </b-col>

                                <!-- Field: Phone -->
                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('patients.phone')" :description="$t('patients.phone_help')"
                                        label-for="phone">
                                        <b-form-input size="sm" id="phone" v-model="patient.phone"
                                            :placeholder="$t('patients.phone_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <!-- Field: Address -->
                                <b-col cols="12" md="6">
                                    <b-form-group :label="$t('patients.address')" :description="$t('patients.address_help')"
                                        label-for="address">
                                        <b-form-input size="sm" id="address" v-model="patient.address"
                                            :placeholder="$t('patients.address_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <!-- Field: Comments -->
                                <b-col cols="12" md="6">
                                    <b-form-group :label="$t('patients.comments')"
                                        :description="$t('patients.comments_help')" label-for="comments">
                                        <b-form-input size="sm" id="comments" v-model="patient.comments"
                                            :placeholder="$t('patients.comments_placeholder')" />
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-tab>
                </b-tabs>

                <b-col cols="12">
                    <p><br></p>
                </b-col>

                <!-- Action Buttons -->
                <b-button size="sm" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="store">
                    {{ $t("save") }}
                </b-button>
                <b-button size="sm" class="mb-1 mb-sm-0 mr-0 mr-sm-1" variant="outline-secondary"
                    @click="$router.push({ name: 'apps-patients-list' })">
                    {{ $t("back") }}
                </b-button>
            </div>
        </b-card>
    </b-overlay>
</template>

<script>
import {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BFormCheckbox,
    BTab,
    BTabs,
    BAlert,
    BLink,
    BInputGroup,
    BInputGroupAppend,
    BFormTextarea,
    BSpinner,
    BOverlay,
} from "bootstrap-vue";
import store from "@/store";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import { ref, reactive } from "@vue/composition-api";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { avatarText } from "@core/utils/filter";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import Cleave from "vue-cleave-component";
import router from "@/router";
import "cleave.js/dist/addons/cleave-phone.us";
import { validRut, cleanRut, formatRut, getRutCheckDigit } from '@/libs/rut.js'

// Providers
import PatientProvider from "@/providers/Patients";

const PatientResource = new PatientProvider();

export default {
    components: {
        BButton,
        BMedia,
        BAvatar,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BForm,
        BTable,
        BCard,
        BCardHeader,
        BCardTitle,
        BCardText,
        BFormCheckbox,
        vSelect,
        flatPickr,
        Cleave,
        BTab,
        BTabs,
        BAlert,
        BLink,
        BInputGroup,
        BInputGroupAppend,
        BFormTextarea,
        VuePhoneNumberInput,
        BSpinner,
        BOverlay,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            limitSize: 5242880,
            patient: {},
            avatarDefault: require("@/assets/images/avatar_default.png"),
            avatar: null,
            documentSelect: null,
            documentTypes: [
                { label: this.$t("patients.document_type_rut"), value: "RUT" },
                { label: this.$t("patients.document_type_passport"), value: "Pasaporte",},
                { label: this.$t("patients.document_type_other"), value: "Otro" },
            ],
            loading: false,
            passwordFieldType: "password",
            isValidCellPhone: false,
            isValidateRut: true,
        };
    },
    computed: {
        passwordToggleIcon() {
            return this.passwordFieldType === "password"
                ? "EyeIcon"
                : "EyeOffIcon";
        },
        isoCountry() {
            return this.findSetting('app_country_iso') || 'CL'
        }
    },
    mounted() {
    },
    methods: {
        validateRut() {
            if (!this.patient.rut) {
                return this.isValidateRut = false
            }
            if (this.patient.document_type.value === 'RUT') {
                if (this.patient.rut) {
                    formatRut(this.patient.rut, { dots: false })
                    if (validRut(this.patient.rut)) {
                        return this.isValidateRut = true
                    }
                    return this.isValidateRut = false
                } else {
                    return this.isValidateRut = false
                }
            } else {
                return this.isValidateRut = true
            }
        },
        validCellPhone(evt) {
            this.isValidCellPhone = evt.isValid
            this.patient.phone_country = evt.countryCode
            this.patient.mobile = { ...evt }
        },
        async store() {

            if (!this.isValidateRut) {
                if (this.patient.document_type.value === 'RUT') {
                    this.danger(this.$t('patients.type_rut_invalid'), 'Error', "AlertCircleIcon");
                    return false
                }
            }

            if (!this.isValidCellPhone) {
                this.danger(this.$t('patients.cellphone_help'), 'Error', "AlertCircleIcon");
                return false
            }

            try {
                this.loading = true;
                const { data } = await PatientResource.save(this.patient);
                this.loading = false;
                if (data.success) {
                    this.success(data.message);
                    router.push({ name: "apps-patients-list" });
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
        inputImageRenderer(evt) {
            const file = evt.target.files[0];

            //file size valid
            if (file.size > this.limitSize) {
                this.danger(this.$t('image_format_limit_help'), "Error", "AlertCircleIcon");
                return
            }

            /// Lee el archivo local y lo genera en codificación gbk
            const reader = new FileReader();
            reader.onload = (data) => {
                // Después de una lectura exitosa
                let res = data.target || data.srcElement;
                // Resultados de salida después de leer
                this.patient.change_avatar = true;
                this.patient.avatar = res.result;
                this.avatar = res.result;
            };
            reader.readAsDataURL(file);
        },
        resetAvatar() {
            this.avatar = null;
        },
        togglePassword() {
            this.passwordFieldType =
                this.passwordFieldType === "password" ? "text" : "password";
        },
    },
    setup() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
        }
    },
};
</script>

<style lang="scss">@import "~@resources/scss/vue/libs/vue-select.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";</style>
