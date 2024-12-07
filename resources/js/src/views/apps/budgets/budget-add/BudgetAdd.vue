<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">       

        <section class="invoice-add">
            <b-form ref="form" class="repeater-form">
                <b-row class="invoice-preview">
                    <!-- Col: Left (Invoice Container) -->
                    <b-col cols="12" xl="12" md="12">
                        <b-card no-body class="invoice-preview-card">
                            <!-- Header -->
                            <!-- <b-card-body class="invoice-padding pb-0">
                                <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">                                    
                                    <div></div>                                    
                                    <div class="mt-md-0 mt-2">
                                        <b-button size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-primary"
                                            class="mb-75" block @click="$router.back()">
                                            {{ $t('back') }}
                                        </b-button>
                                    </div>
                                </div>
                            </b-card-body> -->

                            <!-- Spacer -->
                            <!-- <hr class="invoice-spacing"> -->

                            <!-- Invoice Client & Payment Details -->
                            <b-card-body class="invoice-padding pt-0">
                                <b-row class="invoice-spacing">

                                    <!-- Col: Invoice To -->
                                    <b-col cols="12" xl="6" class="p-1">

                                        <!-- Branch Office -->
                                        <b-form-group :label="$t('budgets.branch_office')" label-for="branch_office_id">
                                            <v-select size="sm" class="select-size-sm" v-model="selectedBranch" :options="branchs" label="name"
                                                input-id="branch_office_id" :clearable="false" :searchable="false" />
                                        </b-form-group>

                                        <!-- Patients -->
                                        <b-form-group :label="$t('budgets.patient')" label-for="patient">
                                            <b-input-group class="input-group-merge">
                                                <b-input-group-prepend is-text>
                                                    <feather-icon icon="SearchIcon" />
                                                </b-input-group-prepend>
                                                <b-form-input size="sm" @click="activeSearchPatient = true"
                                                    v-model="selectedPatient.full_name"
                                                    :placeholder="$t('patients.search_options')" />
                                                <b-input-group-append>
                                                    <b-button size="sm" variant="outline-primary"
                                                        @click="isAddNewPatientSidebarActive = true"
                                                        v-b-tooltip.hover :title="$t('patients.title_add')">
                                                        <feather-icon icon="PlusIcon" />
                                                    </b-button>
                                                </b-input-group-append>
                                            </b-input-group>
                                        </b-form-group>
                                    </b-col>

                                    <!-- Col: Balance Details -->
                                    <b-col v-if="selectedPatient.full_name" xl="6" cols="12" class="pt-2 mt-xl-0 mt-2 d-flex justify-content-xl-end">
                                        <div>
                                            <table class="small text-small">
                                                <tr>
                                                    <th>{{ $t('patients.document_type') }}</th>
                                                    <td>{{ selectedPatient.rut }}</td>
                                                </tr>
                                                <tr>
                                                    <th>{{ $t('patients.address') }}</th>
                                                    <td>{{ selectedPatient.address }}</td>
                                                </tr>
                                                <tr>
                                                    <th>{{ $t('patients.phone') }}</th>
                                                    <td>{{ selectedPatient.phone }}</td>
                                                </tr>
                                                <tr>
                                                    <th>{{ $t('patients.email') }}</th>
                                                    <td>{{ selectedPatient.email }}</td>
                                                </tr>
                                                <tr>
                                                    <th>{{ $t("patients.total_debt") }} </th>
                                                    <th>{{ formatPrice(selectedPatient.total_debt) }}</th>
                                                </tr>
                                                <tr>
                                                    <th>{{ $t('patients.positive_balance') }}</th>
                                                    <th>$ 0.00</th>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <b-button size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-secondary"
                                                            class="mb-75" block @click="$router.push({name: 'apps-budgets-list'})">
                                                            {{ $t('back') }}
                                                        </b-button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </b-col>
                                </b-row>

                                <b-row v-if="selectedPatient.full_name" class="invoice-spacing">
                                    <b-col cols="12" class="p-1_">
                                        <h6 class="card-title_">{{ $t('budgets.name') }}</h6>

                                        <!-- Budget name -->
                                        <b-row>
                                            <b-col cols="6">
                                                <b-form-input size="sm" v-model="budget.name"
                                                    :placeholder="$t('budgets.name_placeholder')" />
                                            </b-col>
                                        </b-row>

                                        <!-- Row Loop -->
                                        <b-row ref="row" v-for="(item, index) in items" :id="item.id" :key="item.id" class="mt-1">

                                            <!-- Item Name -->
                                            <b-col v-if="item.type === 'clinical'" md="3">
                                                <!-- Action type field -->
                                                <b-form-group :label="$t('budgets.action_group')" :label-for="`group-action_group_${index}`">
                                                    <v-select v-model="item.action_group_id" :options="actionGroups"
                                                        label="name" class="select-size-sm" :input-id="`group-action_group_${index}`"
                                                        @input="selectActionGroup(item)" :reduce="action => action.id"
                                                        :clearable="false" :searchable="true" :placeholder="$t('select_an_option')" />
                                                </b-form-group>
                                            </b-col>

                                            <!-- Action -->
                                            <b-col :md="item.type === 'clinical' ? 3 : 6">
                                                <b-form-group
                                                    :label="item.type === 'clinical' ? $t('budgets.clinical_actions') : $t('budgets.laboratory_actions')"
                                                    :label-for="`action-${index}`">
                                                    <v-select v-model="item.selectedAction" :options="item.actions"
                                                        label="name" class="select-size-sm" :input-id="`action-${index}`" @input="selectAction(item)"
                                                        :clearable="false" :searchable="true" :placeholder="$t('select_an_option')" />
                                                </b-form-group>
                                            </b-col>

                                            <!-- Cost -->
                                            <b-col md="2">
                                                <b-form-group :label="$t('budgets.cost')" :label-for="`cost-${index}`">
                                                    <b-form-input size="sm" @input.native="calculateTotal(item)" v-model="item.cost"
                                                        :id="`cost-${index}`" type="number"
                                                        :placeholder="$t('budgets.cost_placeholder')" />
                                                </b-form-group>
                                            </b-col>

                                            <!-- Discount -->
                                            <b-col md="2">
                                                <b-form-group :label="$t('budgets.discount')" :label-for="`discount-${index}`">
                                                    <b-form-input size="sm" @input.native="calculateTotal(item)" :id="`discount-${index}`"
                                                        v-model="item.discount"
                                                        :placeholder="$t('budgets.discount_placeholder')" />
                                                </b-form-group>
                                            </b-col>

                                            <!-- Area -->
                                            <b-col md="1">
                                                <b-form-group :label="$t('budgets.area')" :label-for="`area-${index}`">
                                                    <b-input-group @click="openModalAreas(item)">
                                                        <b-form-input size="sm" type="text" v-model="item.area" :id="`area-${index}`"
                                                            :placeholder="$t('budgets.area_placeholder')" />
                                                    </b-input-group>
                                                </b-form-group>
                                            </b-col>

                                            <!-- Remove Button -->
                                            <b-col md="1" class="mb-50">
                                                <b-button size="sm" v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="danger"
                                                    class="mt-0 mt-md-2" @click="removeItem(index)">
                                                    <feather-icon icon="XIcon" class="" />
                                                </b-button>
                                            </b-col>
                                        </b-row>

                                        <div class="demo-inline-spacing">
                                            <b-button size="sm" class="mt-2" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                                variant="outline-primary" @click="repeateAgain('clinical')">
                                                <feather-icon icon="PlusIcon" class="mr-25" />
                                                <span>{{ $t('budgets.clinical_action') }}</span>
                                            </b-button>

                                            <b-button size="sm" class="mt-2" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-primary"
                                                @click="repeateAgain('laboratory')">
                                                <feather-icon icon="PlusIcon" class="mr-25" />
                                                <span>{{ $t('budgets.laboratory_action') }}</span>
                                            </b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>

                            <!-- Budget Description: Total -->
                            <b-card-body v-if="items.length > 0" class="invoice-padding pb-0_">
                                <b-row>
                                    <b-col cols="12" md="6" xl="6" sm="12" class="mt-md-0 mt-3">
                                        <b-card-text class="mb-0">
                                            <span class="font-weight-bold">{{ $t('budgets.comments') }}:</span>
                                        </b-card-text>
                                        <b-form-textarea size="sm" v-model="budget.comments" id="textarea-default"
                                            :placeholder="$t('budgets.comments_placeholder')" />
                                    </b-col>

                                    <!-- Col: Total -->
                                    <b-col cols="12" md="6" xl="6" sm="12" class="mt-md-0 mt-3 d-flex justify-content-end">
                                        <div class="invoice-total-wrapper">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="pe-1">
                                                            <p class="invoice-total-title">{{ $t('budgets.subtotal') }}:</p>
                                                        </td>
                                                        <td aria-colindex="1" role="cell">
                                                            <p class="invoice-total-amount">
                                                                <strong>{{ formatPrice(budget_cost) }}</strong>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="pe-1">
                                                            <p class="invoice-total-title">{{ $t('budgets.discount') }}:
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p class="invoice-total-amount">
                                                                <strong>{{ formatPrice(budget_discount) }}</strong>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="isEnabledTax">
                                                        <td class="pe-1">
                                                            <p class="invoice-total-title">{{ $t('budgets.tax') }}
                                                                ({{ findSetting('default_tax') }}%): </p>
                                                        </td>
                                                        <td>
                                                            <p class="invoice-total-amount">
                                                                <strong>{{ formatPrice(budget_tax) }}</strong>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="pe-1">
                                                            <p class="invoice-total-title">{{ $t('budgets.total') }}: </p>
                                                        </td>
                                                        <td>
                                                            <p class="invoice-total-amount">
                                                                <strong>{{ formatPrice(budget_total + budget_tax)
                                                                }}</strong>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>

                            <b-card-footer v-if="canAccess('budgets.store') && budget_total > 0">
                                <b-row>
                                    <b-col cols="12" md="10" xl="10">
                                        <b-form-group :label="$t('budgets.mark_as_approved')" label-for="mark_as_approved">
                                            <b-form-checkbox
                                                v-model="budget.approved"
                                                id="mark_as_approved"
                                                name="mark_as_approved">
                                                {{$t("budgets.mark_as_approved_help")}}
                                            </b-form-checkbox>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12" md="2" xl="2" class="mt-md-0_ mt-3 d-flex justify-content-end">
                                        <b-button
                                            size="sm"
                                            block
                                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"
                                            @click="store">
                                            {{ $t('save') }}
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-card-footer>
                        </b-card>
                    </b-col>
                </b-row>
            </b-form>
        </section>

        <!-- Patient Search -->
        <search-patient :active="activeSearchPatient" @selected="selectPatient" @close="activeSearchPatient = false" />

        <!-- Patient Add -->
        <sidebar-add-new-patient  :is-add-new-patient-sidebar-active.sync="isAddNewPatientSidebarActive" :data="patient" @store="storePatient"
            :isValidCellPhone="isValidCellPhone" :loading="loading" />

        <!-- Modal areas -->
        <b-modal ref="modal-areas" id="modal-areas" ok-only @ok="addActions" :ok-title="$t('add')" centered size="lg"
            :title="$t('budgets.area_selected')">
            <b-row>
                <b-col cols="6" md="6" xl="6">
                    <b-card-text class="mb-0">
                        <p>{{ $t('budgets.more_area_selected') }}</p>
                        <b-form-checkbox v-model="morePieces" class="custom-control-primary" name="check-button" switch
                            inline>
                            <span class="switch-icon-left">
                                <feather-icon icon="CheckIcon" />
                            </span>
                            <span class="switch-icon-right">
                                <feather-icon icon="XIcon" />
                            </span>
                        </b-form-checkbox>
                    </b-card-text>
                </b-col>
                <b-col cols="6" md="6" xl="6">
                    <p>{{ $t('budgets.nomenclature_area_selected') }}</p>
                    <b-form-radio-group v-model="nomenclature" :options="nomenclatures" class="demo-inline-spacing"
                        name="radio-validation">
                    </b-form-radio-group>
                </b-col>
            </b-row>
            <hr>
            <b-col cols="12" md="12" xl="12">
                <!-- Bucal group header -->
                <div class="row">
                    <div class="col-md-4 group-cell bucal-group">
                        <label>
                            <b-form-checkbox v-model="areasSelected" value="Grupo 1">
                                {{ $t('budgets.group_1') }}
                            </b-form-checkbox>
                        </label>
                    </div>
                    <div class="col-md-4 group-cell bucal-group">
                        <label>
                            <b-form-checkbox v-model="areasSelected" value="Grupo 2">
                                {{ $t('budgets.group_2') }}
                            </b-form-checkbox>
                        </label>
                    </div>
                    <div class="col-md-4 group-cell bucal-group">
                        <label>
                            <b-form-checkbox v-model="areasSelected" value="Grupo 3">
                                {{ $t('budgets.group_3') }}
                            </b-form-checkbox>
                        </label>
                    </div>
                </div>

                <!-- Nomenclatures -->
                <div class="row">
                    <table class="table table-responsive bucal-table">
                        <tr v-for="(item, index) in teeths" :key="index">
                            <td v-for="(td, idx) in item.tr" :key="idx" :class="td.class" :colspan="td.colspan"
                                :rowspan="td.rowspan">
                                <label :class="td.style_label">
                                    <input type="checkbox" v-model="areasSelected" :value="td.value">
                                    <div :class="td.div_style">
                                        <img :height="td.height" :width="td.width" :style="td.style" :class="td.image_class"
                                            :src="td.image">
                                        <p>{{ td.value }}</p>
                                    </div>
                                </label>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- Bucal group footer -->
                <div class="row">
                    <div class="col-md-4 group-cell bucal-group">
                        <label>
                            <b-form-checkbox v-model="areasSelected" value="Grupo 4">
                                {{ $t('budgets.group_4') }}
                            </b-form-checkbox>
                        </label>
                    </div>
                    <div class="col-md-4 group-cell bucal-group">
                        <label>
                            <b-form-checkbox v-model="areasSelected" value="Grupo 5">
                                {{ $t('budgets.group_5') }}
                            </b-form-checkbox>
                        </label>
                    </div>
                    <div class="col-md-4 group-cell bucal-group">
                        <label>
                            <b-form-checkbox v-model="areasSelected" value="Grupo 6">
                                {{ $t('budgets.group_6') }}
                            </b-form-checkbox>
                        </label>
                    </div>
                </div>
            </b-col>
        </b-modal>
    </b-overlay>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
    BRow, BCol, BCard, BCardBody, BCardFooter, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput,
    BModal, VBModal, BSidebar, BForm, BIcon, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormTextarea, BFormTags, BAvatar,
    BFormRadioGroup, BFormInvalidFeedback, BFormValidFeedback,  
    BTooltip,
    VBTooltip,
} from 'bootstrap-vue'
import router from "@/router";
import vSelect from "vue-select";
import store from "@/store";
import Ripple from 'vue-ripple-directive'
import { heightTransition } from '@core/mixins/ui/transition'
import SidebarAddNewPatient from '@core/components/patients/SidebarAddNewPatient.vue'
import SearchPatient from '@core/components/patients/SearchPatient.vue'

import UserProvider from "@/providers/Users";
import PatientProvider from "@/providers/Patients";
import ActionProvider from "@/providers/Actions";
import ActionGroupProvider from "@/providers/ActionGroups";
import LaboratoryActionProvider from "@/providers/LaboratoryActions"
import BudgetProvider from '@/providers/Budgets'
import BranchOfficeProvider from '@/providers/BranchOffices'

const UserResource = new UserProvider();
const PatientResource = new PatientProvider();
const ActionResource = new ActionProvider();
const ActionGroupResource = new ActionGroupProvider();
const LaboratoryActionResource = new LaboratoryActionProvider();
const BudgetResource = new BudgetProvider();
const BranchOfficeResource = new BranchOfficeProvider();

export default {
    directives: {
        Ripple,
        'b-modal': VBModal,
        'b-toggle': VBToggle,
        "b-tooltip": VBTooltip,
    },
    components: {
        BRow,
        BSidebar,
        BCol,
        BCard,
        BCardFooter,
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
        BFormRadioGroup,
        BFormInvalidFeedback,
        BFormValidFeedback,
        BTooltip,
        VBTooltip,
    },
    mixins: [heightTransition],
    data() {
        return {
            patient_id: router.currentRoute.params.patient_id,
            hideSidebar: false,
            loading: false,
            teeths: [],
            teeths_fdi: [
                {
                    class: '',
                    tr: [
                        { value: '1.8', label: '1.8', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d18.png") },
                        { value: '1.7', label: '1.7', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d17.png") },
                        { value: '1.6', label: '1.6', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d16.png") },
                        { value: '1.5', label: '1.5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d15.png") },
                        { value: '1.4', label: '1.4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d14.png") },
                        { value: '1.3', label: '1.3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d13.png") },
                        { value: '1.2', label: '1.2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d12.png") },
                        { value: '1.1', label: '1.1', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d11.png") },

                        { value: '2.1', label: '2.1', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d21.png") },
                        { value: '2.2', label: '2.2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d22.png") },
                        { value: '2.3', label: '2.3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d23.png") },
                        { value: '2.4', label: '2.4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d24.png") },
                        { value: '2.5', label: '2.5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d25.png") },
                        { value: '2.6', label: '2.6', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d26.png") },
                        { value: '2.7', label: '2.7', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d27.png") },
                        { value: '2.8', label: '2.8', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d28.png") },
                    ]
                },
                {
                    class: '',
                    tr: [
                        { value: 'Boca', label: 'Boca', colspan: '3', rowspan: '2', class: 'tooth-cell', height: '60%', width: '60%', style_label: 'display:block;', style: 'margin-left:20%', div_style: '', image_class: '', image: require("@/assets/images/dientes/boca.png") },
                        { value: '5.5', label: '5.5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d55.png") },
                        { value: '5.4', label: '5.4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d54.png") },
                        { value: '5.3', label: '5.3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d53.png") },
                        { value: '5.2', label: '5.2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d52.png") },
                        { value: '5.1', label: '5.1', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d51.png") },
                        { value: '6.1', label: '6.1', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d61.png") },
                        { value: '6.2', label: '6.2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d62.png") },
                        { value: '6.3', label: '6.3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d63.png") },
                        { value: '6.4', label: '6.4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d64.png") },
                        { value: '6.5', label: '6.5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d65.png") },
                        { value: 'Maxilar', label: 'Maxilar', colspan: '3', rowspan: '', class: 'tooth-cell', height: '60%', width: '60%', style_label: 'display:block;', style: 'margin-left:20%', div_style: '', image_class: '', image: require("@/assets/images/dientes/boca_sup.png") },
                    ]
                },
                {
                    class: 'half-row',
                    tr: [
                        { value: '8.5', label: '8.5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d85.png") },
                        { value: '8.4', label: '8.4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d84.png") },
                        { value: '8.3', label: '8.3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d83.png") },
                        { value: '8.2', label: '8.2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d82.png") },
                        { value: '8.1', label: '8.1', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d81.png") },
                        { value: '7.1', label: '7.1', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d71.png") },
                        { value: '7.2', label: '7.2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d72.png") },
                        { value: '7.3', label: '7.3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d73.png") },
                        { value: '7.4', label: '7.4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d74.png") },
                        { value: '7.5', label: '7.5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d75.png") },
                        { value: 'Mandíbula', label: 'Mandíbula', colspan: '3', rowspan: '', class: 'tooth-cell mandibula', height: '', width: '', style_label: 'margin-left:20%', style: '', div_style: 'margin-top:0%;width:100%;padding-top:11%;padding-bottom:11%', image_class: 'image dental-img', image: require("@/assets/images/dientes/boca_inf.png") },
                    ]
                },
                {
                    class: '',
                    tr: [
                        { value: '4.8', label: '4.8', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d48.png") },
                        { value: '4.7', label: '4.7', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d47.png") },
                        { value: '4.6', label: '4.6', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d46.png") },
                        { value: '4.5', label: '4.5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d45.png") },
                        { value: '4.4', label: '4.4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d44.png") },
                        { value: '4.3', label: '4.3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d43.png") },
                        { value: '4.2', label: '4.2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d42.png") },
                        { value: '4.1', label: '4.1', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d41.png") },
                        { value: '3.1', label: '3.1', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d31.png") },
                        { value: '3.2', label: '3.2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d32.png") },
                        { value: '3.3', label: '3.3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d33.png") },
                        { value: '3.4', label: '3.4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d34.png") },
                        { value: '3.5', label: '3.5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d35.png") },
                        { value: '3.6', label: '3.6', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d36.png") },
                        { value: '3.7', label: '3.7', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d37.png") },
                        { value: '3.8', label: '3.8', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d38.png") },
                    ]
                }
            ],
            teeths_ada: [
                {
                    class: '',
                    tr: [
                        { value: '1', label: '1', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d18.png") },
                        { value: '2', label: '2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d17.png") },
                        { value: '3', label: '3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d16.png") },
                        { value: '4', label: '4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d15.png") },
                        { value: '5', label: '5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d14.png") },
                        { value: '6', label: '6', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d13.png") },
                        { value: '7', label: '7', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d12.png") },
                        { value: '8', label: '8', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d11.png") },

                        { value: '9', label: '9', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d21.png") },
                        { value: '10', label: '10', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d22.png") },
                        { value: '11', label: '11', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d23.png") },
                        { value: '12', label: '12', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d24.png") },
                        { value: '13', label: '13', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d25.png") },
                        { value: '14', label: '14', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d26.png") },
                        { value: '15', label: '15', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d27.png") },
                        { value: '16', label: '16', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d28.png") },
                    ]
                },
                {
                    class: '',
                    tr: [
                        { value: 'Boca', label: 'Boca', colspan: '3', rowspan: '2', class: 'tooth-cell', height: '60%', width: '60%', style_label: 'display:block;', style: 'margin-left:20%', div_style: '', image_class: '', image: require("@/assets/images/dientes/boca.png") },
                        { value: 'A', label: 'A', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d55.png") },
                        { value: 'B', label: 'B', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d54.png") },
                        { value: 'C', label: 'C', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d53.png") },
                        { value: 'D', label: 'D', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d52.png") },
                        { value: 'E', label: 'E', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d51.png") },
                        { value: 'F', label: 'F', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d61.png") },
                        { value: 'G', label: 'G', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d62.png") },
                        { value: 'H', label: 'H', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d63.png") },
                        { value: 'I', label: 'I', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d64.png") },
                        { value: 'J', label: 'J', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d65.png") },
                        { value: 'Maxilar', label: 'Maxilar', colspan: '3', rowspan: '', class: 'tooth-cell', height: '60%', width: '60%', style_label: 'display:block;', style: 'margin-left:20%', div_style: '', image_class: '', image: require("@/assets/images/dientes/boca_sup.png") },
                    ]
                },
                {
                    class: 'half-row',
                    tr: [
                        { value: 'T', label: 'T', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d85.png") },
                        { value: 'S', label: 'S', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d84.png") },
                        { value: 'R', label: 'R', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d83.png") },
                        { value: 'Q', label: 'Q', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d82.png") },
                        { value: 'P', label: 'P', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d81.png") },
                        { value: 'O', label: 'O', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d71.png") },
                        { value: 'N', label: 'N', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d72.png") },
                        { value: 'M', label: 'M', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d73.png") },
                        { value: 'L', label: 'L', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d74.png") },
                        { value: 'K', label: 'K', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d75.png") },
                        { value: 'Mandíbula', label: 'Mandíbula', colspan: '3', rowspan: '', class: 'tooth-cell mandibula', height: '', width: '', style_label: 'margin-left:20%', style: '', div_style: 'margin-top:0%;width:100%;padding-top:11%;padding-bottom:11%', image_class: 'image dental-img', image: require("@/assets/images/dientes/boca_inf.png") },
                    ]
                },
                {
                    class: '',
                    tr: [
                        { value: '32', label: '32', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d48.png") },
                        { value: '31', label: '31', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d47.png") },
                        { value: '30', label: '30', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d46.png") },
                        { value: '29', label: '29', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d45.png") },
                        { value: '28', label: '28', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d44.png") },
                        { value: '27', label: '27', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d43.png") },
                        { value: '26', label: '26', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d42.png") },
                        { value: '25', label: '25', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d41.png") },
                        { value: '24', label: '24', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d31.png") },
                        { value: '23', label: '23', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d32.png") },
                        { value: '22', label: '22', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d33.png") },
                        { value: '21', label: '21', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d34.png") },
                        { value: '20', label: '20', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d35.png") },
                        { value: '19', label: '19', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d36.png") },
                        { value: '18', label: '18', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d37.png") },
                        { value: '17', label: '17', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d38.png") },
                    ]
                }
            ],
            teeths_adam: [
                {
                    class: '',
                    tr: [
                        { value: '1', label: '1', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d18.png") },
                        { value: '2', label: '2', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d17.png") },
                        { value: '3', label: '3', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d16.png") },
                        { value: '4', label: '4', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d15.png") },
                        { value: '5', label: '5', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d14.png") },
                        { value: '6', label: '6', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d13.png") },
                        { value: '7', label: '7', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d12.png") },
                        { value: '8', label: '8', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d11.png") },

                        { value: '9', label: '9', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d21.png") },
                        { value: '10', label: '10', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d22.png") },
                        { value: '11', label: '11', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d23.png") },
                        { value: '12', label: '12', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d24.png") },
                        { value: '13', label: '13', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d25.png") },
                        { value: '14', label: '14', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d26.png") },
                        { value: '15', label: '15', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d27.png") },
                        { value: '16', label: '16', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d28.png") },
                    ]
                },
                {
                    class: '',
                    tr: [
                        { value: 'Boca', label: 'Boca', colspan: '3', rowspan: '2', class: 'tooth-cell', height: '60%', width: '60%', style_label: 'display:block;', style: 'margin-left:20%', div_style: '', image_class: '', image: require("@/assets/images/dientes/boca.png") },
                        { value: 'A', label: 'A', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d55.png") },
                        { value: 'B', label: 'B', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d54.png") },
                        { value: 'C', label: 'C', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d53.png") },
                        { value: 'D', label: 'D', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d52.png") },
                        { value: 'E', label: 'E', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d51.png") },
                        { value: 'F', label: 'F', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d61.png") },
                        { value: 'G', label: 'G', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d62.png") },
                        { value: 'H', label: 'H', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d63.png") },
                        { value: 'I', label: 'I', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d64.png") },
                        { value: 'J', label: 'J', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d65.png") },
                        { value: 'Maxilar', label: 'Maxilar', colspan: '3', rowspan: '', class: 'tooth-cell', height: '60%', width: '60%', style_label: 'display:block;', style: 'margin-left:20%', div_style: '', image_class: '', image: require("@/assets/images/dientes/boca_sup.png") },
                    ]
                },
                {
                    class: 'half-row',
                    tr: [
                        { value: 'K', label: 'K', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d85.png") },
                        { value: 'L', label: 'L', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d84.png") },
                        { value: 'M', label: 'M', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d83.png") },
                        { value: 'N', label: 'N', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d82.png") },
                        { value: 'O', label: 'O', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d81.png") },
                        { value: 'P', label: 'P', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d71.png") },
                        { value: 'Q', label: 'Q', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d72.png") },
                        { value: 'R', label: 'R', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d73.png") },
                        { value: 'S', label: 'S', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d74.png") },
                        { value: 'T', label: 'T', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d75.png") },
                        { value: 'Mandíbula', label: 'Mandíbula', colspan: '3', rowspan: '', class: 'tooth-cell mandibula', height: '', width: '', style_label: 'margin-left:20%', style: '', div_style: 'margin-top:0%;width:100%;padding-top:11%;padding-bottom:11%', image_class: 'image dental-img', image: require("@/assets/images/dientes/boca_inf.png") },
                    ]
                },
                {
                    class: '',
                    tr: [
                        { value: '17', label: '17', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d48.png") },
                        { value: '18', label: '18', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d47.png") },
                        { value: '19', label: '19', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d46.png") },
                        { value: '20', label: '20', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d45.png") },
                        { value: '21', label: '21', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d44.png") },
                        { value: '22', label: '22', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d43.png") },
                        { value: '23', label: '23', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d42.png") },
                        { value: '24', label: '24', colspan: '', rowspan: '', class: 'tooth-cell half-col', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d41.png") },
                        { value: '25', label: '25', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d31.png") },
                        { value: '26', label: '26', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d32.png") },
                        { value: '27', label: '27', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d33.png") },
                        { value: '28', label: '28', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d34.png") },
                        { value: '29', label: '29', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d35.png") },
                        { value: '30', label: '30', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d36.png") },
                        { value: '31', label: '31', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d37.png") },
                        { value: '32', label: '32', colspan: '', rowspan: '', class: 'tooth-cell', height: '', width: '', style_label: '', style: '', div_style: '', image_class: 'image dental-img', image: require("@/assets/images/dientes/d38.png") },
                    ]
                }

            ],
            columnPatients: [
                {
                    key: "name",
                    label: this.$t("patients.table.name"),
                },
                {
                    key: "document",
                    label: this.$t("patients.table.document_type"),
                },
                {
                    key: "phone",
                    label: this.$t("patients.table.phone"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            columns: [
                {
                    key: "description",
                    label: this.$t("budgets.table_action_description"),
                },
                {
                    key: "price",
                    label: this.$t("budgets.table_action_price"),
                },
                {
                    key: "discount",
                    label: this.$t("budgets.table_action_discount"),
                },
                {
                    key: "total",
                    label: this.$t("budgets.table_action_total"),
                },
                {
                    key: "actions",
                    label: '',
                },
            ],
            nomenclature: null,
            nomenclatures: [
                { text: 'FDI', value: 'fdi' },
                { text: 'ADA', value: 'ada' },
                { text: 'ADAm', value: 'adam' },
            ],
            searchQuery: null,
            patient: {},
            patients: [],
            areasSelected: [],
            selectedPatient: {
                full_name: null
            },
            selectedAction: null,
            showButtonAction: false,
            budget: {},
            budgets: [],
            customer: {},
            totalDebt: 0,
            actionTypes: [
                { value: 'clinical', label: this.$t('clinical_actions') },
                { value: 'laboratory', label: this.$t('laboratory_actions') },
            ],
            actionGroups: [],
            actions: [],
            budget_actions: [],
            morePieces: false,
            total: 0,
            discount: 0,
            subtotal: 0,
            tax: 0,
            items: [],
            action: {},
            nextTodoId: 1,
            currentAction: {},
            isValidCellPhone: false,
            branchs: [],
            selectedBranch: null,
            activeSearchPatient: false,
            example: {},
            isAddNewPatientSidebarActive: false,
        }
    },
    computed: {
        state() {
            return Boolean(this.nomenclature)
        },
        defaultNomenclature() {
            return this.findSetting('app_budget_default_nomenclature')
        },
        budget_cost() {
            if (_.isEmpty(this.items)) return 0
            const result = this.items.reduce((carry, action) => {
                return carry + parseFloat(action.cost);
            }, 0);

            return _.isNaN(result) ? 0 : result
        },
        budget_discount() {
            if (_.isEmpty(this.items)) return 0
            const result = this.items.reduce((carry, action) => {
                return carry + parseFloat(action.discount);
            }, 0);

            return _.isNaN(result) ? 0 : result
        },
        budget_total() {
            if (_.isEmpty(this.items)) return 0
            const result = this.items.reduce((carry, action) => {
                return carry + parseFloat(action.total);
            }, 0);
            return _.isNaN(result) ? 0 : result
        },
        budget_subtotal() {
            if (_.isEmpty(this.items)) return 0
            const result = this.items.reduce((carry, action) => {
                return carry + parseFloat(action.subtotal);
            }, 0);
            return _.isNaN(result) ? 0 : result
        },
        budget_tax() {
            const enableTax = this.isEnabledTax
            if (enableTax) {
                const tax = parseFloat(this.findSetting('default_tax'))
                if (_.isEmpty(this.items)) return 0
                const result = this.items.reduce((carry, action) => {
                    return carry + parseFloat(action.total);
                }, 0) * (tax / 100);
                return _.isNaN(result) ? 0 : result
            }
            return 0
        },
        user_id() {
            return store.state.auth.user.id
        },
        isDisabledPatiend() {
            return this.patient_id ? true : false
        },
        isEnabledTax() {
            return this.findSetting('enable_tax')
        }
    },
    created() {
        window.addEventListener('resize', this.initTrHeight)
    },
    destroyed() {
        window.removeEventListener('resize', this.initTrHeight)
    },
    async mounted() {
        this.nomenclature = this.findSetting('app_budget_default_nomenclature')

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

        // await this.getActionGroups()
        // await this.getLaboratoryActions()
        await this.getBranch()

        this.initTrHeight()
    },
    methods: {
        openModalPatients() {

        },
        onSearch(search, loading) {
            if (search.length) {
                loading(true);
                this.searchPatients(loading, search, this);
            }
        },
        addActions() {

            if (_.isEmpty(this.areasSelected)) {
                this.danger(this.$t('budget.area_required'))
                return
            }

            console.warn(this.currentAction)

            let counter = _.size(this.items)
            _.each(this.items, (item, idx) => {
                if (item.id === this.currentAction.id) {
                    this.items.splice(idx, 1)
                    return false
                }
            })

            _.each(this.areasSelected, (area) => {
                this.items.push({
                    ...this.currentAction,
                    new_area: area,
                    area,
                    id: counter,
                })
                counter++
            })

            this.items = _.orderBy(this.items, 'type', 'asc')
            this.currentAction = {}
            this.areasSelected = []
            this.selectedAction = null
            this.morePieces = false
            this.$refs['modal-areas'].hide()
        },
        removeAction(value) {
            _.each(this.budget_actions, (item, index) => {
                if (item.id === value.id) {
                    this.budget_actions.splice(index, 1)
                    return false
                }
            })
        },
        async store() {

            //En items cada item tiene una propiedad que se llama area entonces este campo es requerido por lo tanto
            //antes de guardar debo validar que tengan un area seleccionada
            //Para hacer esto supongo que es mejor filtrar y los item que no tengan area seleccionada

            const existsAreaNull = this.items.some(item => item.area === null)
            if (existsAreaNull) {
                this.danger(this.$t('budgets.area_required'))
                return
            }

            //Remove actions on row by row
            this.items.map((item) => {
                delete (item.actions)
            })

            this.budget.user_id = this.user_id
            this.budget.branch_office_id = this.selectedBranch.id
            this.budget.patient_id = this.selectedPatient.id
            this.budget.subtotal = this.budget_cost
            this.budget.discount = this.budget_discount
            this.budget.tax = this.budget_tax
            this.budget.total = this.budget_total + this.budget_tax
            this.budget.items = this.items

            try {
                this.loading = true
                const { data } = await BudgetResource.save(this.budget)
                this.loading = false

                if (data.success) {
                    this.success(data.message);
                    if (this.isDisabledPatiend) {
                        this.$router.back()
                    } else {
                        this.$router.push({ name: 'apps-budgets-list' });
                    }
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e)
            }
        },
        async storePatient() {
            try {
                this.loading = true;
                this.patient.phone = this.patient.mobile.phoneNumber
                this.patient.cellphone = this.patient.mobile.e164
                this.patient.address = ` --- `
                const { data } = await PatientResource.save(this.patient);
                this.loading = false;
                if (data.success) {
                    this.hideSidebar = true
                    this.selectedPatient = data.data
                } else {
                    this.danger(data.message, 'Error', "AlertOctagonIcon");
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
        },
        async customSearchPatients() {
            this.loading = true;
            const { data } = await PatientResource.search(this.searchQuery);
            this.patients = data.data
            this.loading = false
        },
        async searchPatients(loading, search, vm) {
            this.loading = true;
            const { data } = await PatientResource.search(search);
            vm.patients = data.data;
            this.loading = false
            loading(false)
        },
        async getActionGroups() {
            // this.actionGroups = []
            // this.actions = []
            // this.selectedAction = null
            this.loading = true;
            const { data } = await ActionGroupResource.getAll();
            this.loading = false;
            this.actionGroups = data.data;
            console.log(this.actionGroups)
        },
        async getActions(group_id) {
            this.actions = []
            this.loading = true;
            const { data } = await ActionResource.getAllByGroupId(group_id);
            this.loading = false;
            this.actions = data.data
        },
        async getLaboratoryActions() {
            this.actions = []
            this.loading = true
            const { data } = await LaboratoryActionResource.getAll();
            this.loading = false;
            this.actions = data.data
        },
        async getBranch() {
            this.loading = true
            const { data } = await BranchOfficeResource.getAll()
            this.loading = false
            this.branchs = data
            this.selectedBranch = this.branchs[0]
        },
        calculateTotal(evt) {
            evt.discount = parseFloat(evt.discount)
            if (isNaN(evt.discount)) {
                evt.discount = 0
            }

            if (evt.discount > parseFloat(evt.cost)) {
                evt.discount = evt.cost
            }
            evt.subtotal = evt.cost
            evt.total = evt.subtotal - evt.discount
        },
        selectPatient(e) {
            this.selectedPatient = e
        },
        selectActionType(evt) {
            this.budget.action = null
            this.budget.cost = null
            this.actionGroups = []
            this.actions = []
            this.selectedAction = null

            // if (evt.value === 'clinical') {
            //     this.getActionGroups()
            // } else {               
            //     this.getLaboratoryActions()
            // }
        },
        async selectActionGroup(item) {

            console.log(item)

            item.actions = []
            item.cost = 0
            item.discount = 0
            item.subtotal = 0
            item.total = 0
            //item.type = null
            item.area = null
            item.selectedAction = null

            item.actions = this.actionGroups.filter(ag => ag.id === item.action_group_id).map(a => a.actions).flat()
        },
        selectAction(evt) {
            evt.cost = evt.selectedAction.cost
            evt.discount = 0
            evt.subtotal = evt.cost
            evt.total = evt.subtotal - evt.discount
        },
        async findPatient() {
            const { data } = await PatientResource.find(this.patient_id)
            this.selectedPatient = data.data
        },
        openModalAreas(item) {
            this.action = {}
            this.action = item
            this.currentAction = { ...item }
            this.areasSelected = []
            this.$refs['modal-areas'].show()
        },
        async repeateAgain(type = 'clinical') {
            let counter = _.size(this.items)

            if (type === 'clinical') {
                if (!this.actionGroups.length) {
                    await this.getActionGroups()
                }
            } else {
                if (!this.actions.length) {
                    await this.getLaboratoryActions()
                }
            }



            this.items.push({
                id: counter + 1,
                type: type,
                area: null,
                cost: 0,
                discount: 0,
                subtotal: 0,
                tax: 0,
                total: 0,
                actions: this.actions
            })
            this.items = _.orderBy(this.items, 'type', 'asc')
        },
        removeItem(index) {
            this.items.splice(index, 1)
            // this.trTrimHeight(this.$refs.row[0].offsetHeight)
        },
        initTrHeight() {
            // console.log(this.$refs.form.scrollHeight)
            // this.trSetHeight(null)
            // this.$nextTick(() => {
            //     this.trSetHeight(this.$refs.form.scrollHeight)
            // })
        },
    },
    watch: {
        nomenclature(value) {
            if (value === 'fdi') {
                this.teeths = this.teeths_fdi
            } else if (value === 'ada') {
                this.teeths = this.teeths_ada
            } else if (value === 'adam') {
                this.teeths = this.teeths_adam
            } else {
                this.teeths = this.teeths_fdi
            }
        },
        selectedPatient(value) {
            // this.totalDebt = value.budgets.reduce((carry, debt) => {
            //     return carry + parseFloat(debt.total_debt);
            // }, 0);
        },
        areasSelected(value) {

            if (!this.morePieces) {
                _.map(this.items, (item) => {
                    if (item.id === this.currentAction.id) {
                        item.area = value[0]
                        return false
                    }
                })
                this.$refs['modal-areas'].hide()
            }
        },
        items(value) {
            // console.log(value)
            // _.map(value, (item) => {
            //     item.discount += parseFloat(item.discount)
            //     item.subtotal += item.cost
            //     item.total += (item.subtotal - item.discount)
            // })
        }
    }
}
</script>

<style lang="scss">
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
// @import '~@resources/scss/base/components/variables-dark';



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


.bucal-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    cursor: pointer !important;
}

.dental-img {
    width: 100%;
    height: auto;
    cursor: pointer;
}

.tooth-cell {
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
}

.tooth-cell:hover {
    background-color: #aadfb1;
    cursor: pointer;
}

.tooth-cell p {
    text-align: center;
    cursor: pointer;
}

.tooth-cell:hover p {
    color: black !important;
    font-weight: 600;
}

.tooth-cell label {
    padding: 0px;
    margin: 0px;
    // color: black!important;
    // font-weight: 600;
    cursor: pointer;
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

.bucal-group {
    text-align: center;
    cursor: pointer;
}

.group-cell:hover {
    background-color: #aadfb1;
    cursor: pointer;
}

//  .group-cell:hover label {
//     color: black!important;
//     font-weight: 600;
// }

.half-row .mandibula {
    border-top: white !important;
}

.half-row {
    border-top: solid 2px #ada797;
}

.half-col {
    border-right: solid 2px #ada797 !important;
}</style>