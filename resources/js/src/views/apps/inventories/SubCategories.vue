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
                        <b-button v-if="canAccess('inventories.subcategories.create')" variant="primary" @click="onShowModalCreateUpdateSubCategory=true">
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="search" class="d-inline-block _mr-1" :placeholder="$t('inventories.subcategories.search_help')"
                                @keyup.enter="getSubCategories"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getSubCategories">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refSubCategoriesListTable"
                class="position-relative"
                :items="subCategories"
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
                 <template #cell(category_id)="data">
                    {{data.item.category.name}}
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
                            v-if="!data.item.deleted_at && canAccess('inventories.subcategories.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="editSubCategory(data.item)">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.subcategories.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteSubCategory(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('inventories.subcategories.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteSubCategory(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>

               
            </b-table>

            <!-- Pagination -->
            <div v-if="subCategories.length" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalSubCategories" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>

        <!-- Modal CreateUpdate Category -->
        <b-modal
            ref="refModalCreateUpdateCategory"
            id="modalCreateUpdateCategory"
            :title="$t('inventories.subcategories.title_modal_add_update')"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer
            @cancel="onShowModalCreateUpdateSubCategory=false"
            @hidden="onShowModalCreateUpdateSubCategory=false"
            :visible="onShowModalCreateUpdateSubCategory"
            >
            <validation-observer ref="simpleRules">
                <b-form ref="form">
                    <validation-provider
                            #default="{ errors }"                            
                            rules="required"
                            >
                        <b-form-group :state="errors.length > 0 ? false:null" :label="$t('inventories.subcategories.fields.category')" :description="$t('inventories.subcategories.fields.category_help')">
                            <v-select
                                id="category_id"
                                v-model="subCategory.category_id"
                                :options="categories"
                                :reduce="category => category.id"
                                :clearable="false"
                                label="name"
                                :searchable="false"
                                :placeholder="$t('inventories.subcategories.fields.category_placeholder')"
                            />
                        </b-form-group>
                    </validation-provider>
                    <b-form-group :label="$t('inventories.subcategories.fields.name')" :description="$t('inventories.subcategories.fields.name_help')">
                          <validation-provider
                            #default="{ errors }"
                            name="subCategoryName"
                            rules="required"
                            >                            
                            <b-form-input
                                v-model="subCategory.name"
                                id="subCategoryName"
                                type="text"
                                :placeholder="$t('inventories.subcategories.fields.name_placeholder')"
                                :state="errors.length > 0 ? false:null"
                            />
                          </validation-provider>
                    </b-form-group>
                    <b-form-group :label="$t('inventories.subcategories.fields.description')" :description="$t('inventories.subcategories.fields.description_help')">
                        
                        <b-form-input
                            v-model="subCategory.description"
                            id="subCategoryDescription"
                            type="text"
                            :placeholder="$t('inventories.subcategories.fields.description')"
                        />
                    </b-form-group>

                    <b-row class="mt-3 text-right">
                        <b-col cols="12">
                            <b-button
                                class="mr-1"
                                variant="danger"
                                @click="onShowModalCreateUpdateSubCategory=false">
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
import SubCategoriesProvider from '@/providers/inventories/SubCategories';
import CategoriesProvider from '@/providers/inventories/Categories';
const SubCategoriesResource = new SubCategoriesProvider()
const CategoriesResource = new CategoriesProvider()


export default {
    name: 'SubCategories',
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
                    key: "category_id",
                    label: this.$t('category'),
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
            categories: [],
            subCategories: [],
            subCategory: {
                name: '',
                category_id: '',
                description: '',
            },
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalSubCategories: 0,
            sortBy: "name",
            sortDesc: false,
            search: null,
            from: 0,
            to: 0,
            loading: false,
            onShowModalCreateUpdateSubCategory: false,
            modalTitle: 'Crear/Actualizar SubCategoría',
            
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.subCategories);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalSubCategories,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getSubCategories();
        },
        perPage(value) {
            this.getSubCategories();
        },
        onShowModalCreateUpdateSubCategory(value) {
            if (!value) {
                this.subCategory = {
                    name: '',
                    category_id: '',
                    description: '',
                };
            }
        },
    },
    async mounted() {
        await this.getCategories()
        await this.getSubCategories();
    },
    methods: {
         validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                if (success) {
                    this.onCreateUpdateSubCategory();
                }
            })
        },
        async getCategories () {
            this.loading = true
            const { data } = await CategoriesResource.index({all: true })
            this.loading = false
            this.categories = data.data;
        },
        async getSubCategories() {
            this.loading = true
            const { data } = await SubCategoriesResource.index({
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                search: this.search,
            })
            this.loading = false

            this.subCategories = data.data.data;
            this.totalSubCategories = data.data.total;
            console.log(this.totalSubCategories)
        },
        onCreateUpdateSubCategory () {
            if (this.subCategory.id) {
                this.updateSubCategory();
            } else {
                this.addSubCategory();
            }
        },
        async addSubCategory() {
            try {
                this.loading = true;
                const { data } = await SubCategoriesResource.store(this.subCategory)
                this.loading = false;
                this.success(data.message)
                this.subCategories.push(data.data);
                this.onShowModalCreateUpdateSubCategory = false;
                this.subCategory = {
                    name: '',
                    category_id: '',
                    description: '',
                };   
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }        
        },
        editSubCategory(subCategory) {
            this.subCategory = {
                id: subCategory.id,
                name: subCategory.name,
                category_id: subCategory.category_id,
                description: subCategory.description,
            };
            this.onShowModalCreateUpdateSubCategory = true
            
        },
        async updateSubCategory() {
            try {
                this.loading = true;
                const { data } = await SubCategoriesResource.update(this.subCategory.id, this.subCategory)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateSubCategory = false;
                this.subCategories = this.subCategories.map(category => {
                    console.log(category.id, this.subCategory.id)
                    if (category.id === this.subCategory.id) {
                        return data.data;
                    }
                    return category;
                });
                this.subCategory = {
                    name: '',
                    category_id: '',
                    description: '',
                };
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }           
        },
        deleteSubCategory(subCategory) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: !subCategory.deleted_at ? this.$t('inventories.subcategories.disabled_deleted_at')
                    : this.$t('inventories.subcategories.enabled_deleted_at'),
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
                        const { data } = await SubCategoriesResource.destroy(subCategory.id)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            this.subCategories = this.subCategories.map(category => {
                                if (category.id === data.data.id) {
                                    return data.data;
                                }
                                return category;
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