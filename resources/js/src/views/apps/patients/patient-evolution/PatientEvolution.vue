<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>
        
        <!-- Alert: No item found -->
        <b-alert variant="danger" :show="budget === undefined">
            <h4 class="alert-heading">
                Error fetching patient data
            </h4>
            <div class="alert-body">
                No patient found with this patient id. Check
                <b-link
                class="alert-link"
                @click="$router.back()"
                >
                Patient List
                </b-link>
                for other patient.
            </div>
        </b-alert>

        <section v-if="budget !== undefined" class="invoice-preview-wrapper">
            
            <b-row class="invoice-preview">
                <!-- Col: Left (Invoice Container) -->
                    <b-col cols="12" xl="12" md="12">
                    <b-card no-body class="invoice-preview-card">
                        <!-- Header -->
                        <b-card-body v-if="budget.patient" class="invoice-padding">
                            <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                                <!-- Header: Left Content -->
                                <div>
                                    <div class="logo-wrapper">
                                        <h3>{{budget.patient.full_name}}</h3>
                                        <p class="card-text mb-25">
                                            <strong>{{ $t('patients.document_type') }} ({{budget.patient.document_type}}) </strong> {{budget.patient.rut}}
                                        </p>
                                        <p class="card-text mb-25">
                                            <strong></strong> {{budget.patient.address}}
                                        </p>
                                        <p class="card-text mb-25">
                                            <strong></strong> {{budget.patient.phone}}, {{budget.patient.cellphone}}
                                        </p>
                                        <p class="card-text mb-25">
                                            <strong></strong> {{budget.patient.email}}
                                        </p>
                                    </div>
                                </div>

                                <!-- Header: Right Content -->
                                <div class="mt-md-0 mt-2">
                                    <h5>{{$t('budgets.budget')}}: {{budget.label}}</h5>
                                    <small>{{$t('budgets.date_issued')}} {{dateTimeFormat(budget.created_at)}}</small><br>
                                    <small>{{$t('budgets.table_approved')}}: <span :class="`badge badge-light-${resolveStatusVariant(budget.approved)}`">{{formatActive(budget.approved)}}</span></small><br>
                                    <small v-if="budget">{{$t('budgets.transmitter')}} {{budget.user.name}}</small><br>
                                    <small>{{ $t('patients.total_debt') }}: {{formatPrice(budget.total_debt)}}</small><br>
                                    <small>{{ $t('patients.positive_balance') }}: {{formatPrice(budget.patient.positive_balance)}}</small><br>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>

                    <b-card no-body class="invoice-preview-card">
                        <b-table
                            ref="tableItems"
                            responsive
                            class="position-relative"
                            :items="budget_actions"
                            :fields="columns"
                            stacked="md">

                            <!-- Actions -->
                            <template #cell(actions)="data">
                                <b-form-checkbox
                                    v-model="data.item.selected"
                                    class="custom-control-primary">
                                </b-form-checkbox>
                            </template>

                            <!-- Estatus -->
                            <template v-slot:cell(status)="data">
                                <v-select
                                    v-model=data.item.status
                                    :options="statusOptions"
                                    label="label"
                                    class="w-100"
                                    :style="{ minWidth: '100px' }"
                                    :reduce="option => option.value"
                                    :clearable="false"
                                    :searchable="false"
                                />
                            </template>
                        
                            <!-- Description -->
                            <template #cell(description)="data">
                                <span class="float-left"><strong>{{$t('budgets.table_action_name')}}: </strong></span> {{data.item.action_name}}<br>
                                <span class="float-left"><strong>{{$t('budgets.table_action_group')}}: </strong></span> {{data.item.action_group_name}}<br>
                                <span class="float-left"><strong>{{$t('budgets.table_action_area')}}: </strong></span> <span class="badge badge-light-warning">{{data.item.area}}</span><br>
                                <span class="badge badge-light-primary float-left text-wrap">{{ data.item.action_type === 'clinical' ? $t('budgets.clinical_actions') : $t('budgets.laboratory_actions')}}</span>
                            </template>

                            <!-- Price -->
                            <template #cell(price)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(data.item.price) }}
                                </span>
                            </template>

                            <!-- Discount -->
                            <template #cell(discount)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(data.item.discount) }}
                                </span>
                            </template>

                            <!-- Total -->
                            <template #cell(total)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(parseFloat(data.item.price) - parseFloat(data.item.discount)) }}
                                </span>                                   
                            </template>

                            <!-- Paid -->
                            <template #cell(paid)="data">
                                <span class="text-wrap">
                                    {{ formatPrice(parseFloat(data.item.paid)) }}
                                </span>                                   
                            </template>

                            <!-- Total debt -->
                            <template #cell(debt)="data">
                                <span class="text-wrap badge badge-pill" :class="data.item.debt > 0 ? 'badge-light-danger' : 'badge-light-success'">
                                    {{ formatPrice(parseFloat(data.item.debt)) }}
                                </span>                                   
                            </template>
                            
                        </b-table>
                    </b-card>

                    <b-card no-body class="invoice-preview-card">
                        <b-card-body v-if="budget_actions.length > 0" class="invoice-padding _pb-0">
                            <b-row>
                                <!-- Col: Comments -->
                                <b-col cols="12" md="6" class="mt-md-0 mt-3">
                                    <b-card-text class="mb-0">
                                        <span class="font-weight-bold">{{$t('patients.evolutions.note')}}:</span>                                            
                                    </b-card-text>
                                    <b-form-textarea v-model="comments" :placeholder="$t('patients.evolutions.note_placeholder')" rows="3"/>
                                </b-col>

                                <b-col cols="12" md="6" class="mt-md-0 mt-3">
                                    <b-form-group
                                        :label="$t('patients.evolutions.file')"
                                        label-for="dropzone"
                                        :description="$t('patients.evolutions.file_help')">                                        
                                        <b-form-file
                                            :placeholder="$t('patients.evolutions.file_placeholder')"
                                            drop-placeholder="Drop file here..."
                                            @change="handleImageUpload" accept="image/*"
                                        />

                                        <b-card-text class="my-1">                                                                     
                                            <b-img v-if="imagePreview" :src="imagePreview" thumbnail alt="Responsive image" />
                                        </b-card-text>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <!-- Action Buttons -->
                            <b-button v-if="canAccess('patients.evolution_add')" @click="store" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1 mt-5">
                                {{ $t("save") }}
                            </b-button>
                            <b-button variant="outline-secondary" @click="$router.back()" class="mb-1 mb-sm-0 mr-0 mr-sm-1 mt-5">
                                {{ $t("back") }}
                            </b-button>

                            
                        </b-card-body>                      
                    </b-card>
                </b-col>                    
            </b-row>               
        </section>
    </b-overlay>
</template>

<script>
import {
  BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable,BFormCheckbox, BFormGroup, BFormInput,
  BModal, VBModal, BSidebar, BForm, BIcon, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormTextarea,BFormTags, 
  BMedia, BAvatar, BMediaAside, BMediaBody, BImg, BFormFile
} from 'bootstrap-vue'

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import _ from 'lodash'
import router from "@/router";
import vSelect from "vue-select";
import Logo from '@core/layouts/components/Logo.vue'
import Ripple from 'vue-ripple-directive'
import MedicalHistoryProvider from "@/providers/MedicalHistories";
import BudgetProvider from '@/providers/Budgets'

const MedicalHistoryResource = new MedicalHistoryProvider();
const BudgetResource = new BudgetProvider();
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

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
        BFormFile,
        BModal, 
        VBModal,
        BForm,
        BIcon,        
        BInputGroup,
        BInputGroupAppend, 
        BInputGroupPrepend,
        BFormTextarea,
        BFormTags,
        BMedia, 
        BAvatar, 
        BMediaAside, 
        BMediaBody, 
        BImg,
        vueDropzone: vue2Dropzone
    },
    data () {
        return {
            loading: false,
            budget_id: router.currentRoute.params.budget_id,
            budget: {},
            budget_actions:[],
            columns:[
                {
                    key: "actions",
                    label: this.$t("budgets.table_action_name"),
                },
                {
                    key: "status",
                    label: this.$t("budgets.table_status"),
                },
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
                    key: "paid",
                    label: this.$t("budgets.table_action_paid"),
                },
                {
                    key: "debt",
                    label: this.$t("budgets.table_action_debt"),
                },
            ],
            statusOptions: [
                { label: this.$t('patients.evolutions.status.pending'), value: 'Pendiente'},
                { label: this.$t('patients.evolutions.status.in_action'), value: 'En Ejecución'},
                { label: this.$t('patients.evolutions.status.made'), value: 'Hecho'},
            ],
            comments: null,
            imagePreview: null,
            file: null,
        }
    },
    computed: {
        user_id() {
            return this.$store.state.auth.user.id
        },
    },
    async mounted() {
       await this.getBudget()
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
            this.file = null
            if (file) {
                // Verifica el tamaño del archivo (en bytes)
                if (file.size <= 5 * 1024 * 1024) {                
                    // Si el archivo es válido, crea la vista previa
                    this.imagePreview = URL.createObjectURL(file);
                    this.file = file
                } else {
                    // Si el archivo es demasiado grande, muestra un mensaje de error
                    this.danger(this.$t('image_size_valid'))
                    this.imagePreview = null; // Limpia la vista previa
                    event.target.value = null; // Limpia la selección de archivo en el input
                }
            } else {
                this.imagePreview = null;
            }
            console.log(this.file)
        },
        async getBudget() {
            try {
                this.loading = true
                const { data } = await BudgetResource.getBudgetDetail(router.currentRoute.params.budget_id)
                this.loading = false
                this.budget = data.data
                this.budget_actions = this.budget.budget_actions //.map(item => ({...item, status: }))
            }catch(e) {
                this.loading = false
                this.budget = undefined
            }
        },
        async store() {

            const payload = {
                items: this.budget_actions.filter(ba => ba.selected === true),
                comments: this.comments,
                patient_id: router.currentRoute.params.id,
            }

            if(_.size(payload.items) <= 0) {
                this.danger(this.$t('budgets.action_required'))                
                return false
            }            

            // Crear un nuevo FormData
            const formData = new FormData();

            // Agregar datos al FormData
            formData.append('patient_id', payload.patient_id);
            if (this.comments) {
                formData.append('comments', payload.comments);
            }
            if (this.file) {
                formData.append('file', this.file)
            }

            formData.append('items', JSON.stringify(payload.items))

            console.log(this.file)
                        
            try {

                this.loading = true
                const { data } = await MedicalHistoryResource.save(formData)
                this.loading = false                
                this.loading = false
                if (data.success) {
                    this.success(data.message)                    
                    this.$router.back();
                } else {
                    this.danger(data.message);
                }

            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e)
            }
        },
    }, 
    watch: {
    }   
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>

<style lang="css" scoped>
 .vue-select-container .dropdown-toggle {
    max-width: 100%;
  }

 #customdropzone {
    background-color: orange;
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.2px;
    color: #777;
    transition: background-color .2s linear;
    height: 200px;
    padding: 40px;
  }

  #customdropzone .dz-preview {
    width: 160px;
    display: inline-block
  }
 #customdropzone .dz-preview .dz-image {
    width: 80px;
    height: 80px;
    margin-left: 40px;
    margin-bottom: 10px;
  }
  #customdropzone .dz-preview .dz-image > div {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background-size: contain;
  }
  #customdropzone .dz-preview .dz-image > img {
    width: 100%;
  }

   #customdropzone .dz-preview .dz-details {
    color: white;
    transition: opacity .2s linear;
    text-align: center;
  }
  #customdropzone .dz-success-mark, .dz-error-mark, .dz-remove {
    display: none;
  }

  .dropzone {
    /* border: 2px solid #3b4253; */
    background: transparent;
    padding: 20px 20px;
 }

</style>