<template>
    <div>
        <b-modal id="modal-center" ref="info-modal" centered :title="title" @hidden="close" @ok="saveInfo" hide-footer
            no-close-on-backdrop :ok-title="$t('checks.modal_button_pay')"
            :cancel-title="$t('button_close')">

            <validation-observer ref="checkValidation">
                <b-form class="mt-2" @submit.prevent>
                    <b-col cols="12 mb-75">
                        <label>{{ $t('checks.modal_reference') }} (*)</label>
                        <validation-provider #default="{ errors }" :name="$t('checks.modal_reference')"
                            rules="required">
                            <b-form-input v-model="check.reference" class="d-inline-block mr-1"
                                :state="errors.length > 0 ? false : null"
                                :placeholder="$t('checks.modal_reference_placeholder')" />
                        </validation-provider>
                    </b-col>
                    <b-col cols="12 mb-75">
                        <label>{{ $t('checks.modal_bank') }} (*)</label>
                        <validation-provider #default="{ errors }" :name="$t('checks.modal_bank')" rules="required">
                            <b-form-input v-model="check.bank" class="d-inline-block mr-1"
                                :placeholder="$t('checks.modal_bank_placeholder')"
                                :state="errors.length > 0 ? false : null" />
                        </validation-provider>
                    </b-col>
                    <b-col cols="12 mb-75">
                        <label>{{ $t('checks.modal_serie') }} (*)</label>
                        <validation-provider #default="{ errors }" :name="$t('checks.modal_serie')" rules="required">
                            <b-form-input v-model="check.serie" class="d-inline-block mr-1"
                                :placeholder="$t('checks.modal_serie_placeholder')"
                                :state="errors.length > 0 ? false : null" />
                        </validation-provider>
                    </b-col>
                    <b-col cols="12 mb-75">
                        <label>{{ (isTransfer) ? $t('checks.modal_transfer_date') :
                            $t('checks.modal_collection_date') }} (*)</label>
                        <validation-provider #default="{ errors }" :name="$t('checks.modal_transfer_date')"
                            rules="required">
                            <b-form-group label-for="date" :state="errors.length > 0 ? false : null">
                                <flat-pickr id="date" v-model="check.date" class="form-control" :config="config"
                                    :placeholder="(isTransfer) ? $t('checks.modal_transfer_date_placeholder') : $t('checks.modal_collection_date_placeholder')" />
                            </b-form-group>
                        </validation-provider>
                    </b-col>

                    <b-row class="mt-4 text-right">
                        <b-col cols="12">
                            <b-button variant="secondary" @click="close">
                                <span>{{ $t('button_close') }}</span>
                            </b-button>
                            <b-button type="submit" variant="primary" @click="validateForm">
                                <span>{{ $t('button_confirm') }}</span>
                            </b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </validation-observer>
        </b-modal>
    </div>
</template>

<script>
import store from '@/store'
import _ from 'lodash'
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput,
    BModal, VBModal, BForm
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import * as moment from "moment";

if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
}

export default {
    components: {
        flatPickr,
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
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal,
        VBModal,
        BForm,

        //Validations
        ValidationProvider,
        ValidationObserver,
    },
    directives: {
        Ripple,
    },
    props: ["active", "check", "title", "isTransfer"],
    data() {
        return {
            config: {
                altFormat: "M j, Y",
                dateFormat: "Y-m-d",
            },
        }
    },
    mounted() {

    },
    methods: {
        validateForm() {
            this.$refs.checkValidation.validate().then(success => {
                if (success) {
                    this.$emit("store");
                    this.close();
                }
            })
        },
        saveInfo() {
            if (this.check.reference == "" || this.check.bank == "" || this.check.serie == "" || this.check.date == "") {
                this.danger(this.translate('checks.modal_required'), 'Error', 'AlertCircleIcon')
                return false;
            } else {
                this.$emit("store");
                this.close();
            }
        },
        close() {
            this.$refs['info-modal'].hide()
            this.$emit("close");
        },
    },
    watch: {
        active(value) {
            if (value) {
                this.check.reference = this.isTransfer ? this.generateReference('TR-') : this.generateReference('CH-')
                this.$refs['info-modal'].show()
            }
        },
    },
}
</script>