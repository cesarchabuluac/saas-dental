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
                        <!-- Field: name -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('laboratories.name')" :description="$t('laboratories.name_help')"
                                label-for="name">
                                <b-form-input id="name" v-model="laboratory.name"
                                    :placeholder="$t('laboratories.name_placeholder')" autocomplete="off" />
                            </b-form-group>
                        </b-col>

                        <!-- Address -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('laboratories.address')" :description="$t('laboratories.address_help')"
                                label-for="address">
                                <b-form-input id="address" v-model="laboratory.address"
                                    :placeholder="$t('laboratories.address_placeholder')" autocomplete="off" />
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <!-- Filed Document Type -->
                        <b-col cols="12" md="4">
                            <b-form-group label-for="documentList" :label="$t('laboratories.document_type')"
                                :description="$t('laboratories.document_type_help')">
                                <v-select id="documentList" v-model="laboratory.document_type" label="label"
                                    :options="documentTypes" :reduce="option => option.value"
                                    :placeholder="$t('laboratories.document_type_placeholder')" :clearable="false"
                                    :searchable="false" />
                            </b-form-group>
                        </b-col>

                        <!-- Field: Document -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('laboratories.rut')" :description="$t('laboratories.rut_help')"
                                label-for="rut">
                                <b-form-input id="rut" :class="isValidateRut ? '' : 'is-invalid'" v-model="laboratory.rut"
                                    @blur="validateRut" :placeholder="$t('laboratories.rut_placeholder')"
                                    autocomplete="off" />
                            </b-form-group>
                        </b-col>

                    </b-row>

                    <b-row>
                        <!-- Field: phone -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('laboratories.phone')" :description="$t('laboratories.phone_help')"
                                label-for="phone">
                                <VuePhoneNumberInput :dark="isDarkMode()" dark-color="#283046" v-model="laboratory.phone"
                                    required no-flags :translations="{
                                        countrySelectorLabel: $t('laboratories.phone_country'),
                                        countrySelectorError: $t('laboratories.phone_country_required'),
                                        phoneNumberLabel: $t('laboratories.phone_placeholder'),
                                        example: $t('laboratories.phone_example')
                                    }" :show-code-on-list="true" :no-validator-state="false"
                                    :no-use-browser-locale="false" :default-country-code="isoCountry"
                                    @update="validPhone" />
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <!-- Action Buttons -->
                    <div class="mt-3">
                        <b-button v-if="canAccess('laboratories.store')" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                            @click="store">
                            {{ $t("save") }}
                        </b-button>
                        <b-button variant="outline-secondary" class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                            @click="$router.push({ name: 'apps-laboratory-list', })">
                            {{ $t("back") }}
                        </b-button>
                    </div>
                </b-form>
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
import LaboratoryProvider from "@/providers/Laboratories";
const LaboratoryResource = new LaboratoryProvider();

export default {
    name: 'LaboratoryAdd',
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
            laboratory: {},
            documentTypes: [
                { label: this.$t("document_type_rut"), value: "RUT" },
                { label: this.$t("document_type_passport"), value: "Pasaporte" },
                { label: this.$t("document_type_other"), value: "Otro" },
            ],
            isValidateRut: true,
            isValidPhone: false,
            loading: false,
        };
    },
    computed: {
        isoCountry() {
            return this.findSetting('app_country_iso') || 'CL'
        }
    },
    methods: {
        validateRut() {
            if (!this.laboratory.rut) {
                return this.isValidateRut = false
            }
            if (this.laboratory.document_type === 'RUT') {
                if (this.laboratory.rut) {
                    formatRut(this.laboratory.rut, { dots: false })
                    if (validRut(this.laboratory.rut)) {
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
        validPhone(evt) {
            this.isValidPhone = evt.isValid
            this.laboratory.phone_country = evt.countryCode
            this.laboratory.mobile = { ...evt }
        },
        async store() {
            if (!this.isValidateRut) {
                if (this.laboratory.document_type === 'RUT') {
                    this.danger(this.$t('laboratories.type_rut_invalid'));
                    return false
                }
            }

            if (!this.isValidPhone) {
                this.danger(this.$t('laboratories.phone_invalid'));
                return false
            }

            try {
                this.loading = true
                const { data } = await LaboratoryResource.save(this.laboratory);
                this.loading = false
                if (data.success) {
                    this.success(data.message);
                    router.push({ name: "apps-laboratory-list" });
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
    },
};
</script>

<style lang="scss">@import "~@resources/scss/vue/libs/vue-select.scss";</style>
