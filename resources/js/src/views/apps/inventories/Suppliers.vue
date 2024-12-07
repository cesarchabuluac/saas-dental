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
                        <b-button v-if="canAccess('inventories.suppliers.create')" variant="primary" @click="onShowModalCreateUpdateSupplier=true">
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="search" class="d-inline-block _mr-1" :placeholder="$t('inventories.suppliers.search_help')"
                                @keyup.enter="getSuppliers"/>
                                <b-input-group-append>
                                <b-button size="sm" variant="primary" @click="getSuppliers">
                                    <feather-icon icon="SearchIcon" /> Buscar
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refSuppliersListTable"
                class="position-relative"
                :items="suppliers"
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

                <template #cell(name)="data">
                    <span class="font-weight-bold d-block text-nowrap">
                        {{ data.item.name }}
                    </span>
                    <small class="text-muted">
                        <feather-icon icon="MailIcon" class="cursor-pointer"/> {{ data.item.email }}<br>
                    </small>
                    <small class="text-muted">
                        <feather-icon icon="PhoneIcon" class="cursor-pointer"/>
                        {{ data.item.phone }}
                    </small>
                </template>

                <template #cell(full_address)="data">
                    {{data.item.full_address}}
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
                            v-if="!data.item.deleted_at && canAccess('inventories.suppliers.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="editSupplier(data.item)">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.suppliers.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteSupplier(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('inventories.suppliers.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteSupplier(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>

               
            </b-table>

            <!-- Pagination -->
            <div v-if="suppliers.length" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalSuppliers" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>

        <!-- Modal CreateUpdate Supplier -->
        <b-modal
            ref="refModalCreateUpdateSupplier"
            id="modalCreateUpdateSupplier"
            :title="$t('inventories.suppliers.title_modal_add_update')"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer            
            @cancel="onShowModalCreateUpdateSupplier=false"
            @hidden="onShowModalCreateUpdateSupplier=false"
            :visible="onShowModalCreateUpdateSupplier"
            >
            <validation-observer ref="simpleRules">
                <b-form ref="form">
                    <b-form-group :label="$t('inventories.suppliers.fields.name')" :description="$t('inventories.suppliers.fields.name_help')">
                          <validation-provider
                            #default="{ errors }"
                            name="nombre"
                            rules="required"
                            >
                                <b-form-input
                                    v-model="supplier.name"
                                    id="supplierName"
                                    type="text"
                                    :placeholder="$t('inventories.suppliers.fields.name_placeholder')"
                                    :state="errors.length > 0 ? false:null"
                            />
                        </validation-provider>
                    </b-form-group>
                    <b-form-group :label="$t('inventories.suppliers.fields.email')" :description="$t('inventories.suppliers.fields.email_help')">
                        <b-form-input
                            v-model="supplier.email"
                            id="supplierEmail"
                            type="email"
                            :placeholder="$t('inventories.suppliers.fields.email_placeholder')"
                        />
                    </b-form-group>
                    <b-form-group :label="$t('inventories.suppliers.fields.phone')" :description="$t('inventories.suppliers.fields.phone_help')">
                        <b-form-input
                            v-model="supplier.phone"
                            id="supplierPhone"
                            type="number"
                            :placeholder="$t('inventories.suppliers.fields.phone_placeholder')"
                        />
                    </b-form-group>
                    <b-form-group :label="$t('inventories.suppliers.fields.address')" :description="$t('inventories.suppliers.fields.address_help')">
                        <b-form-input
                            v-model="supplier.address"
                            id="supplierAddress"
                            type="text"
                            :placeholder="$t('inventories.suppliers.fields.address_placeholder')"
                        />
                    </b-form-group>

                    <b-row>
                        <b-col md="6">
                            <b-form-group :label="$t('inventories.suppliers.fields.city')" :description="$t('inventories.suppliers.fields.city_help')">
                                <b-form-input
                                    v-model="supplier.city"
                                    id="supplierCity"
                                    type="text"
                                    :placeholder="$t('inventories.suppliers.fields.city_placeholder')"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group :label="$t('inventories.suppliers.fields.state')" :description="$t('inventories.suppliers.fields.state_help')">
                                <b-form-input
                                    v-model="supplier.state"
                                    id="supplierState"
                                    type="text"
                                    :placeholder="$t('inventories.suppliers.fields.state_placeholder')"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group :label="$t('inventories.suppliers.fields.country')" :description="$t('inventories.suppliers.fields.country_help')">
                                <b-form-input
                                    v-model="supplier.country"
                                    id="supplierCountry"
                                    type="text"
                                    :placeholder="$t('inventories.suppliers.fields.country_placeholder')"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group :label="$t('inventories.suppliers.fields.postal_code')" :description="$t('inventories.suppliers.fields.postal_code_help')">
                                <b-form-input
                                    v-model="supplier.zip"
                                    id="supplierZip"
                                    type="text"
                                    :placeholder="$t('inventories.suppliers.fields.postal_code_placeholder')"
                                />
                            </b-form-group>
                        </b-col>                        
                    </b-row>

                    <b-row class="mt-3 text-right">
                        <b-col cols="12">
                            <b-button
                                class="mr-1"
                                variant="danger"
                                @click="onShowModalCreateUpdateSupplier=false">
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

import SupplierProvider from '@/providers/inventories/Suppliers';
const SupplierResource = new SupplierProvider()

export default {
    name: 'Suppliers',
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
                    key: "full_address",
                    label: 'Dirección',
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
            suppliers: [],
            supplier: {
                name: null,
                email: null,
                phone: null,
                address: null,
                city: null,
                state: null,
                country: null,
                zip: null,
            },
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalSuppliers: 0,
            sortBy: "name",
            sortDesc: false,
            search: null,
            from: 0,
            to: 0,
            loading: false,
            onShowModalCreateUpdateSupplier: false,
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.suppliers);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalSuppliers,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getSuppliers();
        },
        perPage(value) {
            this.getSuppliers();
        },
        onShowModalCreateUpdateSupplier(value) {
            if(!value) {
               this.supplier = {
                    name: null,
                    email: null,
                    phone: null,
                    address: null,
                    city: null,
                    state: null,
                    country: null,
                    zip: null,
                }
            }
        },
    },
    async mounted() {
        await this.getSuppliers();
    },
    methods: {
        validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                if (success) {
                    this.onCreateUpdateSupplier();
                }
            })
        },
        async getSuppliers() {
            this.loading = true
            const { data } = await SupplierResource.index({
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                search: this.search,
            })
            this.loading = false

            this.suppliers = data.data.data;
            this.totalSuppliers = data.data.total;
        },
        onCreateUpdateSupplier () {
            if (this.supplier.id) {
                this.updateSupplier();
            } else {
                this.addSupplier();
            }
        },
        async addSupplier() {
            try {
                this.loading = true;
                const { data } = await SupplierResource.store(this.supplier)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateSupplier = false;
                this.suppliers.push(data.data);
                this.supplier = {
                    name: null,
                    email: null,
                    phone: null,
                    address: null,
                    city: null,
                    state: null,
                    country: null,
                    zip: null,
                }
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }        
        },
        editSupplier(supplier) {
            this.supplier = {
                id: supplier.id,
                name: supplier.name,
                email: supplier.email,
                phone: supplier.phone,
                address: supplier.address,
                city: supplier.city,
                state: supplier.state,
                country: supplier.country,
                zip: supplier.zip,
            }
            this.onShowModalCreateUpdateSupplier = true
            
        },
        async updateSupplier() {
            try {
                this.loading = true;
                const { data } = await SupplierResource.update(this.supplier.id, this.supplier)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateSupplier = false;
                this.suppliers = this.suppliers.map(supplier => {
                    if (supplier.id === this.supplier.id) {
                        return data.data;
                    }
                    return supplier;
                });
                this.supplier = {
                    name: null,
                    email: null,
                    phone: null,
                    address: null,
                    city: null,
                    state: null,
                    country: null,
                    zip: null,
                }
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }           
        },
        deleteSupplier(supplier) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: !supplier.deleted_at ? this.$t('inventories.suppliers.disabled_deleted_at')
                    : this.$t('inventories.suppliers.enabled_deleted_at'),
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
                        const { data } = await SupplierResource.destroy(supplier.id)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            this.suppliers = this.suppliers.map(supplier => {
                                if (supplier.id === data.data.id) {
                                    return data.data;
                                }
                                return supplier;
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