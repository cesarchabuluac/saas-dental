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
                        <b-button v-if="canAccess('inventories.warehouses.create')" variant="primary" @click="onShowModalCreateUpdateWarehouse=true">
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="search" class="d-inline-block _mr-1" :placeholder="$t('inventories.warehouses.search_help')"
                                @keyup.enter="getWarehouses"/>
                                <b-input-group-append>
                                <b-button size="sm" variant="primary" @click="getWarehouses">
                                    <feather-icon icon="SearchIcon" /> Buscar
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refWarehousesListTable"
                class="position-relative"
                :items="warehouses"
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
                 <template #cell(branch_office_id)="data">
                    {{data.item.branch_office.name}}
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
                            v-if="!data.item.deleted_at && canAccess('inventories.warehouses.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="editWarehouse(data.item)">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.warehouses.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteWarehouse(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('inventories.warehouses.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteWarehouse(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>

               
            </b-table>

            <!-- Pagination -->
            <div v-if="warehouses.length" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalWarehouses" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>

        <!-- Modal CreateUpdate Category -->
        <b-modal
            ref="refModalCreateUpdateWarehouse"
            id="modalCreateUpdateWarehouse"
            :title="$t('inventories.warehouses.title_modal_add_update')"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer
            @cancel="onShowModalCreateUpdateWarehouse=false"
            @hidden="onShowModalCreateUpdateWarehouse=false"
            :visible="onShowModalCreateUpdateWarehouse"
            >
            <validation-observer ref="simpleRules">
                <b-form ref="form">
                    <validation-provider
                            #default="{ errors }"
                            name="category_id"
                            rules="required"
                            >
                        <b-form-group :state="errors.length > 0 ? false:null" :label="$t('inventories.warehouses.fields.branch_office')" :description="$t('inventories.warehouses.fields.branch_office_help')">
                            <v-select
                                id="branch_office_id"
                                v-model="warehouse.branch_office_id"
                                :options="branchOffices"
                                :reduce="branchOffice => branchOffice.id"
                                :clearable="false"
                                label="name"
                                :searchable="false"
                                :placeholder="$t('inventories.warehouses.fields.branch_office_placeholder')"
                            />
                        </b-form-group>
                    </validation-provider>
                    <b-form-group :label="$t('inventories.warehouses.fields.name')" :description="$t('inventories.warehouses.fields.name_help')">
                          <validation-provider
                            #default="{ errors }"
                            name="warehouseName"
                            rules="required"
                            >                            
                            <b-form-input
                                v-model="warehouse.name"
                                id="warehouseName"
                                type="text"
                                :placeholder="$t('inventories.warehouses.fields.name_placeholder')"
                                 :state="errors.length > 0 ? false:null"
                            />
                          </validation-provider>
                    </b-form-group>
                    <b-form-group :label="$t('inventories.warehouses.fields.description')" :description="$t('inventories.warehouses.fields.description_help')">
                        <b-form-input
                            v-model="warehouse.description"
                            id="warehouseDescription"
                            type="text"
                            :placeholder="$t('inventories.warehouses.fields.description_placeholder')"
                        />
                    </b-form-group>

                    <b-row class="mt-3 text-right">
                        <b-col cols="12">
                            <b-button
                                class="mr-1"
                                variant="danger"
                                @click="onShowModalCreateUpdateWarehouse=false">
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
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import WarehouseProvider from '@/providers/inventories/Warehouses';
import BranchOfficeProvider from '@/providers/BranchOffices';
const WarehouseResource = new WarehouseProvider()
const BranchOfficeResource = new BranchOfficeProvider()

export default {
    name: 'Warehouses',
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
                    label: this.$t('name'),
                },
                {
                    key: "branch_office_id",
                    label: this.$t('branch_office'),
                },
                {
                    key: "description",
                    label: this.$t('description'),
                },
                {
                    key: "created_at",
                    label: this.$t('created_at'),
                },
                {
                    key: "updated_at",
                    label: this.$t('updated_at'),
                },
                {
                    key: "deleted_at",
                    label: this.$t('status'),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            warehouses: [],
            branchOffices: [],
            warehouse: {
                name: '',
                branch_office_id: '',
                description: '',
            },
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalWarehouses: 0,
            sortBy: "name",
            sortDesc: false,
            search: null,
            from: 0,
            to: 0,
            loading: false,
            onShowModalCreateUpdateWarehouse: false,
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.warehouses);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalWarehouses,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getWarehouses();
        },
        perPage(value) {
            this.getWarehouses();
        },
        onShowModalCreateUpdateWarehouse(value) {
            if (!value) {
                this.subCategory = {
                    name: '',
                    branch_office_id: '',
                    description: '',
                };
            }
        },
    },
    async mounted() {
        await this.getBranchOffices()
        await this.getWarehouses();
    },
    methods: {
         validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                if (success) {
                    this.onCreateUpdateWarehouse();
                }
            })
        },
        async getBranchOffices () {
            this.loading = true
            const { data } = await BranchOfficeResource.getAll()
            this.loading = false
            this.branchOffices = data;
        },
        async getWarehouses() {
            this.loading = true
            const { data } = await WarehouseResource.index({
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                search: this.search,
            })
            this.loading = false
            
            this.warehouses = data.data.data;
            this.totalWarehouses = data.data.total;
        },
        onCreateUpdateWarehouse() {
            if (this.warehouse.id) {
                this.updateWarehouse();
            } else {
                this.addWarehouse();
            }
        },
        async addWarehouse() {
            try {
                this.loading = true;
                const { data } = await WarehouseResource.store(this.warehouse)
                this.loading = false;
                this.success(data.message)
                this.warehouses.push(data.data);
                this.onShowModalCreateUpdateWarehouse = false;
                this.warehouse = {
                    name: '',
                    branch_office_id: '',
                    description: '',
                };   
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }        
        },
        editWarehouse(warehouse) {
            this.warehouse = {
                id: warehouse.id,
                name: warehouse.name,
                branch_office_id: warehouse.branch_office_id,
                description: warehouse.description,
            };
            this.onShowModalCreateUpdateWarehouse = true
            
        },
        async updateWarehouse() {
            try {
                this.loading = true;
                const { data } = await WarehouseResource.update(this.warehouse.id, this.warehouse)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateWarehouse = false;
                this.warehouses = this.warehouses.map(warehouse => {
                    if (warehouse.id === this.warehouse.id) {
                        return data.data;
                    }
                    return warehouse;
                });
                this.warehouse = {
                    name: '',
                    branch_office_id: '',
                    description: '',
                };
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }           
        },
        deleteWarehouse(warehouse) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: !warehouse.deleted_at ? this.$t('inventories.warehouses.disabled_deleted_at')
                    : this.$t('inventories.warehouses.enabled_deleted_at'),
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
                        const { data } = await WarehouseResource.destroy(warehouse.id)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            this.warehouses = this.warehouses.map(warehouse => {
                                if (warehouse.id === data.data.id) {
                                    return data.data;
                                }
                                return warehouse;
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