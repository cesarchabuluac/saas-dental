<template>
   <div>
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t("show") }}</label>
                        <v-select
                            v-model="perPage"
                            :options="perPageOptions"
                            :clearable="false"
                            class="per-page-selector d-inline-block mx-50"
                        />
                        <b-button v-if="canAccess('inventories.units.create')" variant="primary" @click="onShowModalCreateUpdateUnits=true">
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="search" class="d-inline-block _mr-1" :placeholder="$t('inventories.categories.search_help')"
                                @keyup.enter="getUnits"/>
                                <b-input-group-append>
                                <b-button size="sm" variant="primary" @click="getUnits">
                                    <feather-icon icon="SearchIcon" /> Buscar
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refUnitsListTable"
                class="position-relative"
                :items="units"
                responsive
                :fields="columns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc"
                :current-page="currentPage"
                busy.sync="loading"
            >
                <!-- Empty -->
                <template slot="empty">
                    <div v-if="loading" class="d-flex justify-content-center mb-1">
                        <b-spinner
                            style="width: 3rem; height: 3rem"
                            class="mr-1"
                            label="Loading..."
                            variant="primary"
                        />
                    </div>
                </template>

                <template #cell(created_at)="data">
                    {{formatDateTime(data.item.created_at)}}
                </template>

                <template #cell(updated_at)="data">
                    {{formatDateTime(data.item.updated_at)}}
                </template>

                 <!-- Column: Estado -->
                <template #cell(deleted_at)="data">
                    <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`" class="text-capitalize">
                        {{ resolveStatusTranslate(data.item.deleted_at) }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.units.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="editUnit(data.item)">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.units.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteUnit(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('inventories.units.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteUnit(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>

               
            </b-table>

            <!-- Pagination -->
            <div v-if="units.length" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalUnits" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>

        <!-- Modal CreateUpdate Unit -->
        <b-modal
            ref="refModalCreateUpdateUnit"
            id="modalCreateUpdateUnit"
            :title="$t('inventories.units.title_modal_add_update')"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer            
            @cancel="onShowModalCreateUpdateUnits=false"
            @hidden="onShowModalCreateUpdateUnits=false"
            :visible="onShowModalCreateUpdateUnits"
            >
            <validation-observer ref="simpleRules">
                <b-form ref="form">
                    <b-form-group :label="$t('inventories.units.fields.name')" :description="$t('inventories.units.fields.name_help')">                        
                          <validation-provider
                            #default="{ errors }"
                            :name="$t('inventories.units.title_field')"
                            rules="required"
                            >
                                <b-form-input
                                    v-model="unit.name"
                                    id="unitName"
                                    type="text"
                                    :placeholder="$t('inventories.units.fields.name_placeholder')"
                                    :state="errors.length > 0 ? false:null"
                            />
                        </validation-provider>
                    </b-form-group>
                    <b-form-group :label="$t('inventories.units.fields.abbreviation')" :description="$t('inventories.units.fields.abbreviation_help')">
                          <validation-provider
                            #default="{ errors }"
                            name="abreviatura"
                            rules="required"
                            >
                                <b-form-input
                                    v-model="unit.abbreviation"
                                    id="unitName"
                                    type="text"
                                    :placeholder="$t('inventories.units.fields.abbreviation_placeholder')"
                                    :state="errors.length > 0 ? false:null"
                            />
                        </validation-provider>
                    </b-form-group>
                    <b-form-group :label="$t('inventories.units.fields.description')" :description="$t('inventories.units.fields.description_help')">                        
                        <b-form-input
                            v-model="unit.description"
                            id="categoryDescription"
                            type="text"
                            :placeholder="$t('inventories.units.fields.description_placeholder')"
                        />
                    </b-form-group>

                    <b-row class="mt-3 text-right">
                        <b-col cols="12">
                            <b-button
                                class="mr-1"
                                variant="danger"
                                @click="onShowModalCreateUpdateUnits=false">
                                {{$t('cancel')}}
                            </b-button>
                            <b-button
                                :disabled="loading"
                                variant="primary"
                                type="submit"
                                @click.prevent="validationForm">
                                {{$t('save')}}
                            </b-button>
                        </b-col>
                    </b-row>                   
                    
                </b-form>
            </validation-observer>
        </b-modal>
    </div>
</template>

<script>
import _ from "lodash";
import {
    BCard,
    BRow,
    BCol,
    BInputGroupPrepend,
    BInputGroupAppend,
    BInputGroup,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BSpinner,
    BTooltip, VBTooltip,
    BForm,
    BFormGroup,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import { required, email } from '@validations'

import UnitsProvider from '@/providers/inventories/Units';
const UnitsResource = new UnitsProvider()


export default {
    name: 'Units',
    components: {
        BCard,
        BRow,
        BCol,
        BInputGroupPrepend,
        BInputGroupAppend,
        BInputGroup,
        BFormInput,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BSpinner,
        vSelect,
        BTooltip,
        VBTooltip,
        BForm,
        BFormGroup,
        ValidationProvider,
        ValidationObserver,
    },
    directives: {
        Ripple,
    },
    data () {
        return {
            columns: [
                {
                    key: "name",
                    label: 'Nombre',
                },
                {
                    key: "abbreviation",
                    label: 'Abreviatura',
                },
                {
                    key: "description",
                    label: 'Descripción',
                },
                {
                    key: "created_at",
                    label: 'Fecha de Creación',
                },
                {
                    key: "updated_at",
                    label: 'Fecha de Actualización',
                },
                {
                    key: "deleted_at",
                    label: 'Estado',
                },
                { key: "actions", label: this.$t("actions") },
            ],
            units: [],
            unit: {
                name: '',
                abbreviation: '',
                description: '',
            },
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalUnits: 0,
            sortBy: "name",
            sortDesc: false,
            search: null,
            from: 0,
            to: 0,
            loading: false,
            onShowModalCreateUpdateUnits: false,
            modalTitle: 'Crear Unidad',
            
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.units);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalUnits,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getUnits();
        },
        perPage(value) {
            this.getUnits();
        },
        onShowModalCreateUpdateUnits(value) {
            if(!value) {
                this.unit = {
                    name: '',
                    abbreviation: '',
                    description: '',
                }
            }
        },
    },
    async mounted() {
        await this.getUnits();
    },
    methods: {
        validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                if (success) {
                    this.onCreateUpdateUnit();
                }
            })
        },
        async getUnits() {
            this.loading = true
            const { data } = await UnitsResource.index({
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                search: this.search,
            })
            this.loading = false

            this.units = data.data.data;
            this.totalUnits = data.data.total;
        },
        onCreateUpdateUnit () {
            if (this.unit.id) {
                this.updateUnit();
            } else {
                this.addUnit();
            }
        },
        async addUnit() {
            try {
                this.loading = true;
                const { data } = await UnitsResource.store(this.unit)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateUnits = false;
                this.units.push(data.data);
                this.unit = {
                    name: '',
                    abbreviation: '',
                    description: '',
                };   
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }        
        },
        editUnit(unit) {
            this.unit = {
                id: unit.id,
                name: unit.name,
                abbreviation: unit.abbreviation,
                description: unit.description,
            };
            this.onShowModalCreateUpdateUnits = true
            
        },
        async updateUnit() {
            try {
                this.loading = true;
                const { data } = await UnitsResource.update(this.unit.id, this.unit)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateUnits = false;
                this.units = this.units.map(unit => {
                    if (unit.id === this.unit.id) {
                        return data.data;
                    }
                    return unit;
                });
                this.unit = {
                    name: '',
                    abbreviation: '',
                    description: '',
                };
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }           
        },
        deleteUnit(unit) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: !unit.deleted_at ? this.$t('inventories.units.disabled_deleted_at')
                    : this.$t('inventories.units.enabled_deleted_at'),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t('yes_continue'),
                cancelButtonText: this.$t('cancel'),
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-outline-danger ml-1",
                },
                showClass: {
                    popup: "animate__animated animate__flipInX",
                },
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                preConfirm: async () => {
                    try {
                        this.loading = true;
                        const { data } = await UnitsResource.destroy(unit.id)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            this.units = this.units.map(unit => {
                                if (unit.id === data.data.id) {
                                    return data.data;
                                }
                                return unit;
                            });
                        } else {
                            this.danger(data.message)
                        }                        
                    }catch(error) {
                        this.loading = false;                        
                        this.$swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    }                   
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>