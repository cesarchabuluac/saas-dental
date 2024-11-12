<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <section class="invoice-add">
            <b-row class="invoice-preview">
                <!-- Col: Left (Invoice Container) -->
                <b-col cols="12" xl="9" md="9">
                    <b-card no-body class="invoice-preview-card">

                        <!-- Invoice Client & Payment Details -->
                        <b-card-body class="invoice-padding pt-1">
                            <b-row class="invoice-spacing">
                                <b-col cols="12" xl="8">
                                    <!-- Patients -->
                                    <b-form-group :label="$t('patients.patient')" label-for="patient">
                                        <b-input-group class="input-group-merge">
                                            <b-input-group-prepend is-text>
                                                <feather-icon icon="SearchIcon" />
                                            </b-input-group-prepend>
                                            <b-form-input size="sm" readonly @click="activeSearchPatient = true"
                                                v-model="selectedPatient.full_name"
                                                :placeholder="$t('patients.search_options')" />
                                        </b-input-group>
                                    </b-form-group>

                                    <!-- Patient Details -->
                                    <b-card-body v-if="selectedPatient.full_name" class="invoice-padding pt-0">
                                        <b-row class="invoice-spacing">
                                            <b-col cols="12" xl="12" class="p-1">
                                                <p class="card-text mb-25">
                                                    <strong>{{ $t('patients.document_type') }}({{
                                                        selectedPatient.document_type }}):</strong>
                                                    {{ selectedPatient.rut }}
                                                </p>
                                                <p class="card-text mb-25">
                                                    <strong>{{ $t('patients.address') }}:</strong>
                                                    {{ selectedPatient.address }}
                                                </p>
                                                <p class="card-text mb-25">
                                                    <strong>{{ $t('patients.phone') }}:</strong>
                                                    {{ selectedPatient.phone }}, {{ selectedPatient.cellphone }}
                                                </p>
                                                <p class="card-text mb-25">
                                                    <strong>{{ $t('patients.email') }}:</strong>
                                                    {{ selectedPatient.email }}
                                                </p>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-col>
                                <b-col cols="12" xl="4"></b-col>

                                <b-col cols="12" md="8">
                                    <b-form-group :label="$t('branch_office')" label-for="add-branch-office">
                                        <v-select v-model="workorder.branch_office_id" 
                                            label="name" 
                                            :options="branchOffices"
                                            :reduce="branchOffice => branchOffice.id" 
                                            :clearable="false"
                                            :searchable="false"
                                            class="select-size-sm"
                                            :placeholder="$t('select_an_option')">
                                        </v-select>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="4"></b-col>

                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('professional')" label-for="add-guests">
                                        <v-select v-model="workorder.professional_id" :options="professionals"
                                            :reduce="professional => professional.id" label="name"
                                            :clearable="false"
                                            :searchable="false"
                                            input-id="add-professional"
                                            class="select-size-sm"
                                            :placeholder="$t('select_an_option')">                                           
                                        </v-select>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('laboratory')" label-for="add-laboratory">
                                        <v-select v-model="workorder.laboratory_id" label="name" :options="laboratories"
                                            :reduce="laboratory => laboratory.id"
                                            :clearable="false"
                                            :searchable="false"
                                            class="select-size-sm"
                                            :placeholder="$t('select_an_option')">
                                        </v-select>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" md="4"></b-col>

                                <b-col cols="12" md="8">
                                    <b-card-text class="mb-0">
                                        <span class="font-weight-bold">{{ $t('work_orders.delivery_materials')}}:</span>
                                    </b-card-text>
                                    <b-form-textarea size="sm" v-model="workorder.delivery_materials" id="textarea-default"
                                        :placeholder="$t('work_orders.delivery_materials_placeholder')" />
                                </b-col>

                                <b-col cols="12" md="4"></b-col>

                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('work_orders.application_date')"
                                        label-for="application_date">
                                        <flat-pickr v-model="workorder.application_date" class="form-control" :config="{
                                            minDate: 'today',
                                            dateFormat: 'd/m/Y',
                                        }" placeholder="DD-MM-YYYY" />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('work_orders.delivery_date')" label-for="delivery_date">
                                        <flat-pickr v-model="workorder.delivery_date" class="form-control" :config="{
                                            minDate: 'today',
                                            dateFormat: 'd/m/Y',
                                        }" placeholder="DD-MM-YYYY" />
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" md="4"></b-col>

                                <b-col cols="12" md="8">
                                    <b-form-group label-cols="12" label-class="font-weight-bolder" label-align="center"
                                        :label="$t('work_orders.todo')">
                                        <b-form-radio-group id="radio-group-1" v-model="workorder.work_todo"
                                            :options="options" :reduce="option => option.value" name="radio-options"
                                            class="groupselect mt-2"></b-form-radio-group>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="4"></b-col>

                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('work_orders.colour')" label-for="colour">
                                        <b-form-input size="sm" id="colour" v-model="workorder.colour"
                                            :placeholder="$t('work_orders.colour_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" md="4">
                                    <b-form-group :label="$t('work_orders.area_dental')" label-for="area">
                                        <b-form-input size="sm" id="area" v-model="workorder.area_dental"
                                            :placeholder="$t('work_orders.area_dental_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" md="4"></b-col>

                                <b-col cols="12" md="8">
                                    <b-card-text class="mb-0">
                                        <span class="font-weight-bold">{{ $t('work_orders.clinical_specification')}}:</span>
                                    </b-card-text>
                                    <b-form-textarea size="sm" v-model="workorder.clinical_specification" id="textarea-default"
                                        :placeholder="$t('work_orders.clinical_specification_placeholder')" />
                                </b-col>

                                <b-col cols="12" md="4"></b-col>

                                <b-col cols="12" md="8">
                                    <b-card-text class="mb-0">
                                        <span class="font-weight-bold">{{ $t('work_orders.lab_specification')}}:</span>
                                    </b-card-text>
                                    <b-form-textarea size="sm" v-model="workorder.lab_specification" id="textarea-default"
                                        :placeholder="$t('work_orders.lab_specification_placeholder')" />
                                </b-col>

                                <b-col cols="12" md="4"></b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Right Col: Card -->
                <b-col cols="12" md="3" xl="3" class="invoice-actions">
                    <b-card>
                        <b-button variant="primary" class="mb-75" @click="store" block>
                            {{ $t("save") }}
                        </b-button>

                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-primary" class="mb-75"
                            @click="$router.back()" block>
                            {{ $t('back') }}
                        </b-button>
                    </b-card>
                </b-col>
            </b-row>
        </section>

        <!-- Patient Search -->
        <search-patient :active="activeSearchPatient" @selected="selectPatient" @close="activeSearchPatient = false" />

    </b-overlay>
</template>

<script>
import store from '@/store'
import BCardCode from '@core/components/b-card-code'
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput,
    BModal, VBModal, BSidebar, BForm, BIcon, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormTextarea, BFormTags, BAvatar,
} from 'bootstrap-vue'
import router from "@/router";
import vSelect from "vue-select";
import Logo from '@core/layouts/components/Logo.vue'
import Ripple from 'vue-ripple-directive'
import { heightTransition } from '@core/mixins/ui/transition'
import SidebarAddNewPatient from '@core/components/patients/SidebarAddNewPatient.vue'
import SearchPatient from '@core/components/patients/SearchPatient.vue'
import flatPickr from "vue-flatpickr-component";
import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { BFormRadioGroup } from 'bootstrap-vue'


// Providers
import UserProvider from "@/providers/Users";
import WorkOrderProvider from "@/providers/WorkOrders";
import PatientProvider from "@/providers/Patients";
import LaboratoriesProvider from "@/providers/Laboratories"
import BranchOfficesProvider from "@/providers/BranchOffices"

const UserResource = new UserProvider();
const WorkOrderResource = new WorkOrderProvider();
const PatientResource = new PatientProvider();
const LaboratoriesResource = new LaboratoriesProvider();
const BranchOfficesResource = new BranchOfficesProvider();


export default {
    directives: {
        Ripple,
        'b-modal': VBModal,
        'b-toggle': VBToggle,
    },
    components: {
        BRow,
        BSidebar,
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
        Logo,
        vSelect,
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal,
        VBModal,
        BForm,
        BIcon,
        BInputGroup,
        BInputGroupAppend,
        BInputGroupPrepend,
        BFormTextarea,
        BFormTags,
        BCardCode,
        BAvatar,
        SidebarAddNewPatient,
        SearchPatient,
        flatPickr,
        BFormRadioGroup
    },
    mixins: [heightTransition],
    data() {
        return {
            workorder: {},
            patient_id: router.currentRoute.params.patient_id,
            professionals: [],
            branchOffices: [],
            selectedProfessional: null,
            selectedPatient: {
                full_name: null
            },
            loading: false,
            activeSearchPatient: false,
            selectedWorkTodo: this.$t('work_orders.todos.removable_prosthesis'),
            options: [
                { text: this.$t('work_orders.todos.removable_prosthesis'), value: 'Protesis Removible' },
                { text: this.$t('work_orders.todos.fixed_prosthesis'), value: 'Protesis Fija' },
                { text: this.$t('work_orders.todos.orthodontics'), value: 'Ortodoncia' },
                { text: this.$t('work_orders.todos.operative'), value: 'Operatoria' },
                { text: this.$t('work_orders.todos.periodontics'), value: 'Periodoncia' },
                { text: this.$t('work_orders.todos.implantology'), value: 'Implantologia' }
            ],
            selectedLaboratory: null,
            laboratories: [],
        };
    },
    computed: {
        isDark() {
            return this.findSetting('theme') === 'dark' ? true : false
        },
        user_id() {
            return store.state.auth.user.id
        },
        user_name() {
            return store.state.auth.user.name
        },
    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
            localize(process.env.MIX_FALLBACK_LOCALE);
        }
    },
    async mounted() {

        if (router.currentRoute.params.patient_id) {
            localStorage.setItem('patient_id', router.currentRoute.params.patient_id)
        } else {
            localStorage.removeItem('patient_id')
        }

        if (localStorage.getItem('patient_id') != null || localStorage.getItem('patient_id') != undefined) {
            const patient_id = localStorage.getItem('patient_id')
            if (patient_id != undefined && patient_id !== null) {
                this.patient_id = patient_id
                await this.findPatient()
            }
        }

        await this.getBranchOffices()
        await this.getLaboratories()
        await this.getProfessionals()

    },
    methods: {
        selectPatient(e) {
            this.selectedPatient = { ...e }
        },
        async getBranchOffices() {
            const branches = store.state.auth.branches;
            if (branches.length > 0) {
                this.branchOffices = branches
            } else {
                this.loading = true
                const { data } = await BranchOfficesResource.getAll()
                this.loading = false
                this.branchOffices = data
                store.commit('auth/SET_BRANCHES', data)
            }
        },
        async findPatient() {
            this.loading = true
            const { data } = await PatientResource.find(this.patient_id)
            this.loading = false
            this.selectedPatient = data.data
        },
        async getLaboratories() {
            const laboratories = store.state.auth.laboratories
            if (laboratories.length > 0) {
                this.laboratories = laboratories
            } else {
                this.loading = true
                const { data } = await LaboratoriesResource.getAll()
                this.loading = false
                this.laboratories = data.data
                store.commit('auth/SET_LABORATORIES', this.laboratories)
            }
        },
        async getProfessionals() {
            if (store.getters['auth/getDoctors'].length > 0) {
                this.professionals = store.getters['auth/getDoctors']
            } else {
                this.loading = true
                const { data } = await UserResource.index({
                    criteria: 'professionals',
                    isAll: true,
                    ignoreSchedules: true
                });

                this.loading = false
                this.professionals = data
                store.commit('auth/SET_DOCTORS', this.professionals)
            }
        },
        async store() {

            this.workorder.patient_id = this.selectedPatient.id
            this.workorder.status = "En proceso"

            try {
                this.loading = true
                const { data } = await WorkOrderResource.save(this.workorder);
                this.loading = false
                if (data.success) {
                    this.success(data.message, "", "CheckIcon");
                    await router.push({ name: "apps-work-orders-list" });
                } else {
                    this.danger(data.message, "Error", "AlertCircleIcon");
                }
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
    },

};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
@import '~@resources/scss/vue/libs/vue-select.scss';

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

<style lang="scss" scoped>
.groupselect {
    text-align: center;
}

.form-item-section {
    background-color: #fcfcfc;
}

.form-item-action-col {
    width: 27px;
}

.repeater-form {
    // overflow: hidden;
    transition: 0.35s height;
}

.v-select {

    &.item-selector-title,
    &.payment-selector {
        background-color: #fff;

        .dark-layout & {
            background-color: unset;
        }
    }
}

.dark-layout {
    .form-item-section {
        background-color: #161d31;

        .row .border {
            background-color: #283046;
        }
    }
}

input[type=checkbox] {
    display: none;
}

input[type=checkbox]~div {
    padding: 1px;
}

input[type=checkbox]:checked~div {
    background-color: #aadfb1;
    width: 100%;

}

.group-cell {
    text-align: center;
    cursor: pointer;
}

.group-cell:hover {
    background-color: #aadfb1;
    cursor: pointer;
}
</style>
