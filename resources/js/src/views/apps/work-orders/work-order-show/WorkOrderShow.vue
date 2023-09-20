<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <section v-if="workorder.patient" class="invoice-preview-wrapper">

            <!-- Alert: No item found -->
            <b-alert variant="danger" :show="!workorder.patient.is_active || !workorder.branch.is_active || !workorder.professional.is_active
                || !workorder.laboratory.is_active">
                <div v-if="!workorder.patient.is_active" class="alert-body">
                    El paciente de esta orden no está activo.
                </div>
                <div v-if="!workorder.branch.is_active" class="alert-body">
                    La sucursal de esta orden no está activa.
                </div>
                <div v-if="!workorder.professional.is_active" class="alert-body">
                    El profesional de esta orden no está activo.
                </div>
                <div v-if="!workorder.laboratory.is_active" class="alert-body">
                    El laboratorio de esta orden no está activo.
                </div>
            </b-alert>

            <b-row class="invoice-preview">

                <!-- Col: Left (Invoice Container) -->
                <b-col cols="12" xl="8" md="8">
                    <b-card no-body class="invoice-preview-card">

                        <!-- Header -->
                        <b-card-body v-if="workorder.patient" class="invoice-padding pb-0">
                            <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-3">
                                <!-- Header: Left Content -->
                                <div>
                                    <p class="card-text mb-25">
                                        <strong>{{ $t('patients.patient') }}</strong><br>
                                        {{ workorder.patient.full_name }}<br>
                                        {{ workorder.patient.document_type }}: {{ workorder.patient.rut }}
                                    </p>
                                    <p class="card-text mb-25">
                                        {{ workorder.patient.address }}
                                    </p>
                                    <p class="card-text mb-0">
                                        {{ workorder.patient.phone }}, {{ workorder.patient.cellphone }}
                                    </p>
                                </div>

                                <!-- Header: Right Content -->
                                <div class="mt-md-0 mt-2">
                                    <h4 class="invoice-title">
                                        {{ $t('work_orders.number') }}
                                        <span class="invoice-number">{{ workorder.label }}</span>
                                    </h4>
                                    <div class="invoice-date-wrapper">
                                        <p class="invoice-date-title">
                                            {{ $t('status') }}:
                                        </p>
                                        <p class="invoice-date">
                                            {{ workorder.status }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </b-card-body>

                        <!-- Spacer -->
                        <hr class="invoice-spacing">

                        <!-- BranchOffice & Professional Details -->
                        <b-card-body v-if="workorder.branch" class="invoice-padding pt-0">
                            <b-row class="invoice-spacing">

                                <!-- Col: Invoice To -->
                                <b-col cols="12" xl="4" class="p-0">
                                    <h6 class="mb-2">
                                        {{ $t('branch_office') }}
                                    </h6>
                                    <h6 class="mb-25">
                                        {{ workorder.branch.name }}
                                    </h6>
                                    <p class="card-text mb-25">
                                        {{ workorder.branch.phone }}
                                    </p>
                                    <p class="card-text mb-25">
                                        {{ workorder.branch.email }}
                                    </p>
                                    <p class="card-text mb-25">
                                        {{ workorder.branch.address }}
                                    </p>
                                </b-col>

                                <b-col cols="12" xl="4" class="p-0">
                                    <h6 class="mb-2">
                                        {{ $t('laboratory') }}
                                    </h6>
                                    <h6 class="mb-25">
                                        {{ workorder.laboratory.name }}
                                    </h6>
                                    <p class="card-text mb-25">
                                        {{ workorder.laboratory.document_type }}: {{ workorder.laboratory.rut }}
                                    </p>
                                    <p class="card-text mb-25">
                                        {{ workorder.laboratory.phone }}
                                    </p>
                                </b-col>

                                <!-- Col: Professional Details -->
                                <b-col cols="12" xl="4" class="p-0 mt-xl-0 mt-2 d-flex justify-content-xl-end">
                                    <div>
                                        <h6 class="mb-2">
                                            {{ $t('professional') }}
                                        </h6>
                                        <h6 class="mb-25">
                                            {{ workorder.professional.name }}
                                        </h6>
                                        <p class="card-text mb-25">
                                            {{ workorder.professional.email }}
                                        </p>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>

                        <!-- Details -->
                        <b-card-body class="invoice-padding pt-0">
                            <b-row class="invoice-spacing">
                                <b-col cols="12" xl="8" class="p-1">
                                    <b-card-text class="mb-0">
                                        <span class="font-weight-bold">{{ $t('work_orders.delivery_materials') }}:</span>
                                    </b-card-text>
                                    <b-form-textarea readonly v-model="workorder.delivery_materials" id="textarea-default"
                                        :placeholder="$t('work_orders.delivery_materials_placeholder')" />
                                </b-col>

                                <b-col cols="12" xl="4" class="p-1"></b-col>

                                <b-col cols="12" xl="4" class="p-1">
                                    <b-form-group :label="$t('work_orders.application_date')" label-for="application_date">
                                        <flat-pickr disabled v-model="workorder.application_date" class="form-control"
                                            :config="{
                                                
                                            }" placeholder="DD-MM-YYYY" />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" xl="4" class="p-1">
                                    <b-form-group :label="$t('work_orders.delivery_date')" label-for="delivery_date">
                                        <flat-pickr disabled v-model="workorder.delivery_date" class="form-control" :config="{
                                            
                                        }" placeholder="DD-MM-YYYY" />
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" xl="8" class="p-1">
                                    <b-form-group label-cols="12" label-class="font-weight-bolder" label-align="center"
                                        :label="$t('work_orders.todo')">
                                        <b-form-radio-group id="radio-group-1" v-model="workorder.work_todo"
                                            :options="options" :reduce="option => option.value" name="radio-options"
                                            class="groupselect mt-2"></b-form-radio-group>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" xl="4" class="p-1"></b-col>

                                <b-col cols="12" xl="4" class="p-1">
                                    <b-form-group :label="$t('work_orders.colour')" label-for="colour">
                                        <b-form-input readonly id="colour" v-model="workorder.colour"
                                            :placeholder="$t('work_orders.colour_placeholder')" />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" xl="4" class="p-1">
                                    <b-form-group :label="$t('work_orders.area_dental')" label-for="colour">
                                        <b-form-input readonly id="area" v-model="workorder.area_dental"
                                            :placeholder="$t('work_orders.area_dental_placeholder')" />
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" xl="8" class="p-1">
                                    <b-card-text class="mb-0">
                                        <span class="font-weight-bold">{{ $t('work_orders.clinical_specification')
                                        }}:</span>
                                    </b-card-text>
                                    <b-form-textarea readonly v-model="workorder.clinical_specification"
                                        id="textarea-default"
                                        :placeholder="$t('work_orders.clinical_specification_placeholder')" />
                                </b-col>

                                <b-col cols="12" xl="4" class="p-1"></b-col>

                                <b-col cols="12" xl="8" class="p-1">
                                    <b-card-text class="mb-0">
                                        <span class="font-weight-bold">{{ $t('work_orders.lab_specification') }}:</span>
                                    </b-card-text>
                                    <b-form-textarea readonly v-model="workorder.lab_specification" id="textarea-default"
                                        :placeholder="$t('work_orders.lab_specification_placeholder')" />
                                </b-col>

                                <b-col cols="12" xl="4" class="p-1"></b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Right Col: Card -->
                <b-col cols="12" md="4" xl="4" class="invoice-actions">
                    <b-card>

                        <b-button @click="donwloadWorkOrder" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="outline-info" class="mb-75" block>
                            {{ $t('button_tooltip_download') }}
                        </b-button>

                        <b-button v-show="workorder.patient.is_active && workorder.branch.is_active && workorder.professional.is_active
                            && workorder.laboratory.is_active"
                            @click="$router.push({ name: 'apps-work-orders-edit', params: { id: workorder.id } })"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-warning" class="mb-75" block>
                            {{ $t('button_tooltip_edit') }}
                        </b-button>

                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-primary" class="mb-75" block
                            @click="$router.back()">
                            {{ $t('back') }}
                        </b-button>
                    </b-card>
                </b-col>
            </b-row>
        </section>
    </b-overlay>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput,
    BModal, VBModal, BSidebar, BForm, BIcon, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormTextarea, BFormTags, BAvatar,
} from 'bootstrap-vue'
import router from "@/router";
import vSelect from "vue-select";
import Ripple from 'vue-ripple-directive'
import { heightTransition } from '@core/mixins/ui/transition'
import SidebarAddNewPatient from '@core/components/patients/SidebarAddNewPatient.vue'
import SearchPatient from '@core/components/patients/SearchPatient.vue'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { BFormRadioGroup } from 'bootstrap-vue'


// Providers
import UserProvider from "@/providers/Users";
import WorkOrderProvider from "@/providers/WorkOrders";

const UserResource = new UserProvider();
const WorkOrderResource = new WorkOrderProvider();


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
            work_order_id: router.currentRoute.params.id,
            workorder: {},
            professionals: [],
            selectedProfessional: null,
            selectedPatient: {
                full_name: null
            },
            loading: false,
            activeSearchPatient: false,
            selectedWorkTodo: null, // this.$t('work_orders.todos.removable_prosthesis'),
            options: [
                { text: this.$t('work_orders.todos.removable_prosthesis'), value: 'Protesis Removible' },
                { text: this.$t('work_orders.todos.fixed_prosthesis'), value: 'Protesis Fija' },
                { text: this.$t('work_orders.todos.orthodontics'), value: 'Ortodoncia' },
                { text: this.$t('work_orders.todos.operative'), value: 'Operatoria' },
                { text: this.$t('work_orders.todos.periodontics'), value: 'Periodoncia' },
                { text: this.$t('work_orders.todos.implantology'), value: 'Implantologia' }
            ],
            minDate: 'today',
            status: [
                'En proceso',
                'Enviado',
                'Recibido',
            ]
        };
    },
    computed: {
        isDark() {
            return this.findSetting('theme') === 'dark' ? true : false
        },
        user_id() {
            return this.$store.state.auth.user.id
        },
        user_name() {
            return this.$store.state.auth.user.name
        },
        isActivePatient() {
            return this.work_todo.patient.deleted_at !== null
        },
    },
    async mounted() {
        await this.getWorkOrder()
    },
    methods: {
        async donwloadWorkOrder() {
            try {
                this.loading = true
                const { data } = await WorkOrderResource.donwloadPDF(this.work_order_id)
                this.loading = false
                const url = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = url;
                const fileName = `${this.$t('work_orders.pdf_title')}-${this.workorder.id}-${this.workorder.patient.rut}`
                link.setAttribute('download', `${fileName}.pdf`);
                link.click();
                document.body.appendChild(link);

            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
        async getWorkOrder() {
            this.loading = true
            const { data } = await WorkOrderResource.find(this.work_order_id)
            this.loading = false
            this.workorder = data.data
        },
        async getProfessionals() {
            this.loading = true
            const { data } = await UserResource.getUserByCriteria("professionals");
            this.loading = false
            this.professionals = data.data
        },
    },

};
</script>

<style lang="scss">
@import "~@resources/scss/base/pages/app-invoice.scss";
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
