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
                        <b-button v-if="canAccess('inventories.brands.create')" variant="primary" @click="onShowModalCreateUpdateBrand=true">
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="search" class="d-inline-block _mr-1" :placeholder="$t('inventories.brands.search_help')"
                                @keyup.enter="getBrands"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getBrands">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refBrandsListTable"
                class="position-relative"
                :items="brands"
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
                            v-if="!data.item.deleted_at && canAccess('inventories.brands.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="editBrand(data.item)">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.brands.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteBrand(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('inventories.brands.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteBrand(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="brands.length" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalBrands" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>

        <!-- Modal CreateUpdate Brand -->
        <b-modal
            ref="refModalCreateUpdateBrand"
            id="modalCreateUpdateBrand"
            :title="$t('inventories.brands.title_modal_add_update')"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer            
            @cancel="onShowModalCreateUpdateBrand=false"
            @hidden="onShowModalCreateUpdateBrand=false"
            :visible="onShowModalCreateUpdateBrand"
            >
            <validation-observer ref="simpleRules">
                <b-form ref="form">
                    <b-form-group :label="$t('inventories.brands.fields.name')" :description="$t('inventories.brands.fields.name_help')">
                        <validation-provider
                            #default="{ errors }"
                            :name="$t('inventories.brands.fields.title_field')"
                            rules="required"
                            >
                                <b-form-input
                                    v-model="brand.name"
                                    id="brandName"
                                    type="text"
                                    :placeholder="$t('inventories.brands.fields.name_placeholder')"
                                    :state="errors.length > 0 ? false:null"
                            />
                        </validation-provider>
                    </b-form-group>
                    <b-form-group :label="$t('inventories.brands.fields.description')" :description="$t('inventories.brands.fields.description_help')">
                        <b-form-input
                            v-model="brand.description"
                            id="brandDescription"
                            type="text"
                            :placeholder="$t('inventories.brands.fields.description_placeholder')"
                        />
                    </b-form-group>

                    <b-row class="mt-3 text-right">
                        <b-col cols="12">
                            <b-button
                                class="mr-1"
                                variant="danger"
                                @click="onShowModalCreateUpdateBrand=false">
                                {{$t('cancel')}}
                            </b-button>
                            <b-button
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

import BrandProvider from '@/providers/inventories/Brands';
const BrandResource = new BrandProvider()


export default {
    name: 'Brands',
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
            brands: [],
            brand: {
                name: '',
                description: '',
            },
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalBrands: 0,
            sortBy: "name",
            sortDesc: false,
            search: null,
            from: 0,
            to: 0,
            loading: false,
            onShowModalCreateUpdateBrand: false,
            modalTitle: 'Crear Marca',
            
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.brands);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalBrands,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getBrands();
        },
        perPage(value) {
            this.getBrands();
        },
        onShowModalCreateUpdateBrand(value) {
            if(!value) {
                this.category = {
                    name: '',
                    description: '',
                }
            }
        },
    },
    async mounted() {
        await this.getBrands();
    },
    methods: {
        validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                if (success) {
                    this.onCreateUpdateBrand();
                }
            })
        },
        async getBrands() {
            this.loading = true
            const { data } = await BrandResource.index({
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                search: this.search,
            })
            this.loading = false

            this.brands = data.data.data;
            this.totalBrands = data.data.total;
        },
        onCreateUpdateBrand () {
            if (this.brand.id) {
                this.updateBrand();
            } else {
                this.addBrand();
            }
        },
        async addBrand() {
            try {
                this.loading = true;
                const { data } = await BrandResource.store(this.brand)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateBrand = false;
                this.brands.push(data.data);
                this.brand = {
                    name: '',
                    description: '',
                };   
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }        
        },
        editBrand(brand) {
            this.brand = {
                id: brand.id,
                name: brand.name,
                description: brand.description,
            };
            this.onShowModalCreateUpdateBrand = true
            
        },
        async updateBrand() {
            try {
                this.loading = true;
                const { data } = await BrandResource.update(this.brand.id, this.brand)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateBrand = false;
                this.brands = this.brands.map(_brand => {
                    if (_brand.id === this.brand.id) {
                        return data.data;
                    }
                    return _brand;
                });
                this.brand = {
                    name: '',
                    description: '',
                };
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }           
        },
        deleteBrand(brand) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: !brand.deleted_at ? this.$t('inventories.brands.disabled_deleted_at')
                    : this.$t('inventories.brands.enabled_deleted_at'),
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
                        const { data } = await BrandResource.destroy(brand.id)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            this.brands = this.brands.map(brand => {
                                if (brand.id === data.data.id) {
                                    return data.data;
                                }
                                return brand;
                            });
                        } else {
                            this.danger(data.message)
                        }                        
                    }catch(error) {
                        this.loading = false;                        
                        this.handleResponseErrors(error)
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

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
}
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>