<template>
   <div>

    <b-card no-body class="mb-0_">
        <div class="m-2">
            <b-row>
                <b-col cols="12" md="3">
                    <b-form-group :label="$t('inventories.medicines.fields.warehouse')">
                        <v-select 
                            v-model="filter.warehouse_id"
                            :options="warehouses"
                            label="name" 
                            :reduce="option => option.id"
                            :placeholder="$t('select_an_option')"
                            :searchable="false"
                            class="select-size-sm"
                            @input="getMedicines">
                        </v-select>
                    </b-form-group>
                </b-col>

                <b-col cols="12" md="3">
                    <b-form-group :label="$t('inventories.medicines.fields.unit')">
                        <v-select id="unit_id" v-model="filter.unit_id" :options="units" :reduce="unit => unit.id"
                            label="name" :placeholder="$t('inventories.medicines.fields.unit_placeholder')" 
                            class="select-size-sm" 
                            @input="getMedicines"/>
                    </b-form-group>
                </b-col>

                <b-col cols="12" md="3">
                    <b-form-group :label="$t('inventories.medicines.fields.brand')">
                        <v-select id="brand_id" v-model="filter.brand_id" :options="brands"
                            :reduce="brand => brand.id" label="name"
                            :placeholder="$t('inventories.medicines.fields.brand_placeholder')" 
                            class="select-size-sm" 
                            @input="getMedicines"/>
                    </b-form-group>
                </b-col>

                <b-col cols="12" md="3">
                    <b-form-group :label="$t('inventories.medicines.fields.category')">
                        <v-select id="category_id" v-model="filter.category_id" :options="categories"
                            :reduce="category => category.id" label="name"
                            :placeholder="$t('inventories.medicines.fields.category_placeholder')" 
                            class="select-size-sm"
                            @input="getMedicines"/>
                    </b-form-group>
                </b-col>
            </b-row>
            
        </div>
    </b-card>


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
                            class="per-page-selector select-size-sm d-inline-block mx-50"
                        />
                        <b-button size="sm" v-if="canAccess('inventories.medicines.create')" variant="primary" @click="onShowModalCreateUpdateMedicine=true">
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input size="sm" v-model="filter.search" class="d-inline-block _mr-1" :placeholder="$t('inventories.medicines.search_help')"
                                @keyup.enter="getMedicines"/>
                                <b-input-group-prepend>
                                <b-button size="sm" variant="primary" @click="getMedicines">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refMedicinesListTable"
                class="position-relative table-small text-small small"
                :items="dataMedicines"
                responsive
                :fields="columns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc"
                :current-page="currentPage"
                :busy.sync="loading"
                small
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

                <!-- <template #cell(name)="data">
                    {{data.item.name}}<br>
                    <small><strong>SKU: {{data.item.sku}}</strong></small>
                </template> -->
                <template #cell(name)="data">
                    <b-link @click="showStocks(data.item)" class="text-wrap" :id="`medicine-row-${data.item.id}-detail-icon`"
                        v-b-tooltip.hover :title="$t('stock_per_warehouse')">
                        {{ data.item.name }}<br>
                        <small><strong>SKU: {{data.item.sku}}</strong></small>
                    </b-link>
                </template>

                <template #cell(warehouse)="data">
                    {{ data.item.stocks
                        .map(stock => stock.warehouse ? stock.warehouse.name : '')
                        .filter(name => name) // Esto eliminará las cadenas vacías del resultado final.
                        .join(', ') 
                    }}
                </template>

                <template #cell(unit_id)="data">
                    {{data.item.unit.name}}
                </template>

                <template #cell(category)="data">
                    {{data.item.category.name}}
                </template>

                <template #cell(brand)="data">
                    {{data.item.brand.name}}
                </template>

                <template #cell(price)="data">
                    {{data.item.price}}
                </template>

                <template #cell(current_stock)="data">
                    <b-avatar v-if="data.item.current_stock <= data.item.stock_min" :id="`medicine-row-${data.item.id}`" size="32"
                    :variant="`light-${resolveVariantCurrentStock(data.item).variant}`">
                    <feather-icon :icon="resolveVariantCurrentStock(data.item).icon"/>
                    </b-avatar>
                    <b-tooltip v-if="data.item.current_stock <= data.item.stock_min" :target="`medicine-row-${data.item.id}`" placement="top">
                    <p class="mb-0">
                        {{ $t('inventories.medicines.stok_alert').replace(':quantity', data.item.stock_min) }}
                    </p>
                    </b-tooltip>
                    <b-badge pill :variant="resolveVariantCurrentStock(data.item).variant">{{ data.item.current_stock }}</b-badge>
                </template>

                 <template #cell(expiration_date)="data">
                    <span class="text-capitalize">{{formatDateTime(data.item.expiration_date)}}</span>
                </template>

                <template #cell(created_at)="data">
                    <span class="text-capitalize">{{formatDateTime(data.item.created_at)}}</span>
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
                            v-if="!data.item.deleted_at && canAccess('inventories.medicines.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="editMedicine(data.item)">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.medicines.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteMedicine(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('inventories.medicines.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteMedicine(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="medicines.length" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalMedicines" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>

        <!-- Modal CreateUpdate Medicines -->
        <b-modal
            ref="refModalCreateUpdateMedicine"
            id="modalCreateUpdateMedicine"
            :title="$t('inventories.medicines.title_modal_add_update')"
            size="lg"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer
            @cancel="onShowModalCreateUpdateMedicine=false"
            @hidden="onShowModalCreateUpdateMedicine=false"
            :visible="onShowModalCreateUpdateMedicine"
            >
            <validation-observer ref="simpleRules">
                <b-form ref="form">
                    <b-row>
                        <b-col md="8">
                            <b-form-group :label="$t('inventories.medicines.fields.name')" :description="$t('inventories.medicines.fields.name_help')">
                                <validation-provider
                                    #default="{ errors }"
                                    :name="$t('inventories.medicines.fields.name')"
                                    rules="required"
                                    >
                                        <b-form-input
                                            v-model="medicine.name"
                                            id="medicineName"
                                            type="text"
                                            :placeholder="$t('inventories.medicines.fields.name_placeholder')"
                                            :state="errors.length > 0 ? false:null"
                                    />
                                </validation-provider>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group :label="$t('inventories.medicines.fields.sku')" :description="$t('inventories.medicines.fields.sku_help')">
                                <validation-provider
                                    #default="{ errors }"
                                    name="sku"
                                    rules="required"
                                    >
                                    <b-input-group>
                                        <b-form-input :placeholder="$t('inventories.medicines.fields.sku_placeholder')"
                                          v-model="medicine.sku"
                                            id="medicineSKU"
                                            type="text"
                                            :state="errors.length > 0 ? false:null" />
                                        <b-input-group-append>
                                        <b-button @click="medicine.sku = generateSKU()" variant="outline-primary">
                                            <feather-icon icon="RefreshCwIcon"  class="cursor-pointer"/>
                                        </b-button>
                                        </b-input-group-append>
                                    </b-input-group>
                                </validation-provider>
                            </b-form-group>
                        </b-col>
                        <b-col md="12">
                            <b-form-group :label="$t('inventories.medicines.fields.description')" :description="$t('inventories.medicines.fields.description_help')">
                                <b-form-input
                                    v-model="medicine.description"
                                    id="medicineDescription"
                                    type="text"
                                    :placeholder="$t('inventories.medicines.fields.description_placeholder')"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <validation-provider
                                #default="{ errors }"
                                name="unit_id"
                                rules="required"
                                >
                                <b-form-group :state="errors.length > 0 ? false:null"
                                    :label="$t('inventories.medicines.fields.unit')" :description="$t('inventories.medicines.fields.unit_help')">
                                    <v-select
                                        id="unit_id"
                                        v-model="medicine.unit_id"
                                        :options="units"
                                        :reduce="unit => unit.id"
                                        :clearable="false"
                                        label="name"
                                        :placeholder="$t('inventories.medicines.fields.unit_placeholder')"
                                    />
                                </b-form-group>
                            </validation-provider>
                        </b-col>
                        <b-col md="6">
                            <validation-provider
                                #default="{ errors }"
                                name="brand_id"
                                rules="required"
                                >
                                <b-form-group :state="errors.length > 0 ? false:null"
                                    :label="$t('inventories.medicines.fields.brand')" :description="$t('inventories.medicines.fields.brand_help')">
                                    <v-select
                                        id="brand_id"
                                        v-model="medicine.brand_id"
                                        :options="brands"
                                        :reduce="brand => brand.id"
                                        :clearable="false"
                                        label="name"
                                        :placeholder="$t('inventories.medicines.fields.brand_placeholder')"
                                    />
                                </b-form-group>
                            </validation-provider>
                        </b-col>
                        <b-col md="6">
                             <validation-provider
                                #default="{ errors }"
                                name="category_id"
                                rules="required">
                                <b-form-group :state="errors.length > 0 ? false:null"
                                    :label="$t('inventories.medicines.fields.category')" :description="$t('inventories.medicines.fields.category_help')">
                                    <v-select
                                            id="category_id"
                                            v-model="medicine.category_id"
                                            :options="categories"
                                            :reduce="category => category.id"
                                            :clearable="false"
                                            label="name"
                                            @input="getSubcategories"
                                            :placeholder="$t('inventories.medicines.fields.category_placeholder')"
                                        />
                                </b-form-group>
                             </validation-provider>
                        </b-col>
                        <b-col md="6">
                            <b-form-group :label="$t('inventories.medicines.fields.subcategory')" :description="$t('inventories.medicines.fields.subcategory_help')">
                               <v-select
                                    id="sub_category_id"
                                    v-model="medicine.sub_category_id"
                                    :options="subcategories"
                                    :reduce="sub_category => sub_category.id"
                                    :clearable="false"
                                    label="name"
                                    :placeholder="$t('inventories.medicines.fields.subcategory_placeholder')"
                                />
                            </b-form-group>
                        </b-col>
                        <!-- <b-col md="6">
                             <validation-provider
                                #default="{ errors }"
                                name="warehouse_id"
                                rules="required">
                                <b-form-group :state="errors.length > 0 ? false:null">
                                    <label for="warehouse_id">Almacén:</label>
                                    <v-select
                                            id="warehouse_id"
                                            v-model="medicine.warehouse_id"
                                            :options="warehouses"
                                            :reduce="warehouse => warehouse.id"
                                            :clearable="false"
                                            label="name"
                                            placeholder="Seleccione un almacén"
                                        />
                                </b-form-group>
                             </validation-provider>
                        </b-col> -->
                        <b-col md="6">
                            <b-form-group :label="$t('inventories.medicines.fields.expiration_date')" :description="$t('inventories.medicines.fields.expiration_date_help')">
                                <b-form-input
                                    v-model="medicine.expiration_date"
                                    id="expiration_date"
                                    type="date"
                                    :placeholder="$t('inventories.medicines.fields.expiration_date_placeholder')"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-checkbox
                                v-model="medicine.manage_stock"
                                class="custom-control-primary mt-2">
                                {{ $t('inventories.medicines.manage_stock') }}
                            </b-form-checkbox>
                            <b-form-text>{{ $t('inventories.medicines.manage_stock_help') }}</b-form-text>
                        </b-col>
                        <b-col md="6" v-if="medicine.manage_stock">
                            <b-form-group :label="$t('inventories.medicines.fields.stock_min')" :description="$t('inventories.medicines.fields.stock_min_help')">
                                <validation-provider
                                    #default="{ errors }"
                                    name="stock min"
                                    rules="required|positive"
                                    >
                                        <b-form-input
                                            v-model="medicine.stock_min"
                                            id="medicineStockMin"
                                            type="number"
                                            :placeholder="$t('inventories.medicines.fields.stock_min_placeholder')"
                                            :state="errors.length > 0 ? false:null"
                                    />
                                    <small v-if="errors.length" class="text-danger">{{ errors[0] }}</small>
                                    <b-form-text v-if="errors.length<= 0 && medicine.manage_stock">
                                        {{ $t('inventories.medicines.fields.stock_min_help_block') }}
                                    </b-form-text>
                                </validation-provider>
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-checkbox
                                v-model="medicine.is_taxable"
                                class="custom-control-primary mt-2">
                                {{ $t('inventories.medicines.applicable_tax') }}
                            </b-form-checkbox>
                            <b-form-text>{{ $t('inventories.medicines.applicable_tax_help') }}</b-form-text>
                        </b-col>
                        <b-col md="6" v-if="medicine.is_taxable">
                            <b-form-group :label="$t('inventories.medicines.fields.tax')" :description="$t('inventories.medicines.fields.tax_help')">
                                <validation-provider
                                    #default="{ errors }"
                                    name="impuesto"
                                    rules="required|positive"
                                    >
                                        <b-form-input
                                            v-model="medicine.tax"
                                            id="medicineTax"
                                            type="number"
                                            :placeholder="$t('inventories.medicines.fields.tax_placeholder')"
                                            :state="errors.length > 0 ? false:null"
                                    />
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </validation-provider>
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group :label="$t('inventories.medicines.fields.price')" :description="$t('inventories.medicines.fields.price_help')">                                
                                <validation-provider
                                    #default="{ errors }"
                                    :name="$t('inventories.medicines.fields.price')"
                                    rules="required|positive"
                                    >
                                        <b-form-input
                                            v-model="medicine.price"
                                            id="medicinePrice"
                                            type="number"
                                            :placeholder="$t('inventories.medicines.fields.price_placeholder')"
                                            :state="errors.length > 0 ? false:null"
                                    />
                                    <small v-if="errors.length>0" class="text-danger">{{ errors[0] }}</small>
                                    <b-form-text v-if="errors.length<= 0 && medicine.is_taxable">{{ $t('inventories.medicines.fields.tax_help_block') }}</b-form-text>
                                </validation-provider>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="mt-3 text-right">
                        <b-col cols="12">
                            <b-button
                                class="mr-1"
                                variant="danger"
                                @click="onShowModalCreateUpdateMedicine=false">
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

        <!-- Modal stocks -->
        <b-modal
            ref="refModalCreateUpdateUnit"
            id="modalCreateUpdateUnit"
            :title="$t('inventories.medicines.title_modal_stock')"
            no-close-on-backdrop
            :ok-title="$t('close')"
            :cancel-title="$t('cancel')"
            ok-only
            
            @cancel="onShowModalStocks=false"
            @hidden="onShowModalStocks=false"
            :visible="onShowModalStocks"
            >

            <table v-if="medicineWithStocks.name" class="border text-small small w-100 ">
                <tr>
                    <td>{{ $t('inventories.medicines.medicine') }}</td>
                    <td>{{ medicineWithStocks.name }}</td>
                </tr>
                <tr>
                    <td>{{ $t('inventories.medicines.fields.sku') }}</td>
                    <td>{{ medicineWithStocks.sku }}</td>
                </tr>
                <tr>
                    <td>{{ $t('inventories.medicines.fields.unit') }}</td>
                    <td>{{ medicineWithStocks.unit.name }}</td>
                </tr>
                <tr>
                    <td>{{ $t('inventories.medicines.fields.category') }}</td>
                    <td>{{ medicineWithStocks.category.name }}</td>
                </tr>
                <tr>
                    <td>{{ $t('inventories.medicines.fields.brand') }}</td>
                    <td>{{ medicineWithStocks.brand.name }}</td>
                </tr>
                <tr>
                    <td>{{ $t('price') }}</td>
                    <td>{{ medicineWithStocks.price }}</td>
                </tr>
            </table>
            

            <table class="table mt-1 table-bordered table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <th class="text-center">{{ $t('inventories.medicines.fields.warehouse') }}</th>
                        <th class="text-center">{{ $t('inventories.medicines.current_stock') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(stock, index) in medicineWithStocks.stocks" :key="index">
                        <td>{{ stock.warehouse.name }}</td>
                        <td class="text-center">{{ stock.quantity }}</td>
                    </tr>
                </tbody>
            </table>
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
    BFormCheckbox,
    BFormText,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import { required, positive, email } from '@validations'
import { mapGetters } from 'vuex'
import store from '@/store'


import UserProvider from '@/providers/Users';
import SupplierProvider from '@/providers/inventories/Suppliers';
import UnitProvider from '@/providers/inventories/Units';
import CategoryProvider from '@/providers/inventories/Categories';
import BrandProvider from '@/providers/inventories/Brands';
import SubcategoryProvider from '@/providers/inventories/SubCategories';
import MedicineProvider from '@/providers/inventories/Medicines';
import WarehouseProvider from '@/providers/inventories/Warehouses';

const UserResource = new UserProvider()
const SupplierResource = new SupplierProvider()
const UnitResource = new UnitProvider()
const CategoryResource = new CategoryProvider()
const BrandResource = new BrandProvider()
const SubcategoryResource = new SubcategoryProvider()
const MedicineResource = new MedicineProvider()
const WarehouseResource = new WarehouseProvider()

export default {
    name: 'Medicines',
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
        BFormCheckbox,
        BFormText,

        ValidationProvider,
        ValidationObserver,
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data () {
        return {
            columns: [
                {
                    key: "name",
                    label: this.$t('inventories.medicines.medicine'),
                },
                {
                    key: "warehouse",
                    label: this.$t('inventories.medicines.fields.warehouse'),
                },
                {
                    key: "unit_id",
                    label: this.$t('inventories.medicines.unit'),
                },
                {
                    key: "category",
                    label: this.$t('inventories.medicines.category'),
                },
                {
                    key: "brand",
                    label: this.$t('inventories.medicines.brand'),
                },
                {
                    key: "price",
                    label: this.$t('price'),
                },
                {
                    key: "current_stock",
                    label: this.$t('current_stock'),
                },
                {
                    key: "expiration_date",
                    label: this.$t('expiration_date'),
                },
                {
                    key: "deleted_at",
                    label: this.$t('status'),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            units: [],
            brands: [],
            categories: [],
            subcategories: [],
            warehouses: [],
            medicines: [],
            medicine: {
                // warehouse_id: null,
                // supplier_id: 1,
                unit_id: null,
                brand_id: null,
                category_id: null,
                sub_category_id: '',
                user_id: store.state.auth.user.id,
                name: null,
                sku: this.generateSKU(),
                description: null,
                is_taxable: false,
                tax: 0,
                price: 0,
                manage_stock: false,
                stock_min: 5,
                expiration_date: null,
            },
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalMedicines: 0,
            sortBy: "name",
            sortDesc: false,
            search: null,
            from: 0,
            to: 0,
            loading: false,
            onShowModalCreateUpdateMedicine: false,
            onShowModalStocks: false,
            filter: {
                unit_id: null,
                brand_id: null,
                category_id: null,
                warehouse_id: '',
                search: null,
            },
            medicineWithStocks: {},

        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.medicines);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalMedicines,
            };
        },
        dataMedicines() {
            if (this.filter.warehouse_id) {
                return this.medicines
                    .filter(medicine => medicine.stocks.some(stock => stock.warehouse_id === this.filter.warehouse_id))
                    .map(medicine => {
                        return {
                            ...medicine,
                            stocks: medicine.stocks.filter(stock => stock.warehouse_id === this.filter.warehouse_id)
                        };
                    });
            } else {
                return this.medicines;
            }
        },
    },
    watch: {
        currentPage(value) {
            this.getMedicines();
        },
        perPage(value) {
            this.getMedicines();
        },
        onShowModalCreateUpdateMedicine(value) {
            if(!value) {
                this.subcategories = []
                this.medicine = {
                    // warehouse_id: null,
                    // supplier_id: 1,
                    unit_id: null,
                    brand_id: null,
                    category_id: null,
                    sub_category_id: '',
                    user_id: store.state.auth.user.id,
                    name: null,
                    sku: this.generateSKU(),
                    description: null,
                    is_taxable: false,
                    tax: 0,
                    price: 0,
                    manage_stock: false,
                    stock_min: 5,
                    expiration_date: null,
                }
            }

            if(this.medicine.id) {
                this.subcategories = this.categories.find(category => category.id == this.medicine.category_id).subcategories.map(subcategory => {
                    return {
                        id: subcategory.id,
                        name: subcategory.name
                    }
                })
                this.medicine.sub_category_id = this.subcategories.find(subcategory => subcategory.id == this.medicine.sub_category_id).id
            }
        },
    },
    async mounted() {

        await Promise.all([
            this.getWarehouses(),
            this.getUnits(),
            this.getBrands(),
            this.getCategories()
        ]);
        
        await this.getMedicines();
    },
    methods: {
        showStocks(item) {
            this.medicineWithStocks = {...item}
            this.onShowModalStocks = true
            console.log(this.medicineWithStocks)
        },
        validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                if (success) {
                    this.onCreateUpdateMedicine();
                }
            })
        },
        async getUnits() {
            if (store.getters['inventory/getUnits'].length > 0) {
                this.units = store.getters['inventory/getUnits']
            } else {
                this.loading = true
                const { data } = await UnitResource.index({ all: true })
                this.loading = false
                this.units = data.data;
                store.commit('inventory/SET_UNITS', data.data)
            }
        },
        async getBrands() {
            if (store.getters['inventory/getBrands'].length > 0) {
                this.brands = store.getters['inventory/getBrands']
            } else {
                this.loading = true
                const { data } = await BrandResource.index({ all: true })
                this.loading = false
                this.brands = data.data;
                store.commit('inventory/SET_BRANDS', data.data)
            }
        },
        async getWarehouses() {
            if (store.getters['inventory/getWarehouses'].length > 0) {
                this.warehouses = store.getters['inventory/getWarehouses']
            } else {
                this.loading = true
                const { data } = await WarehouseResource.index({ all: true })
                this.loading = false
                this.warehouses = data.data;
                store.commit('inventory/SET_WAREHOUSES', data.data)
            }
        },
        async getCategories() {
            if (store.getters['inventory/getCategories'].length > 0) {
                this.categories = store.getters['inventory/getCategories']
            } else {
                this.loading = true
                const { data } = await CategoryResource.index({ all: true })
                this.loading = false
                this.categories = data.data;
                store.commit('inventory/SET_CATEGORIES', data.data)
            }
        },
        getSubcategories() {
            this.medicine.sub_category_id = ''
            this.subcategories = []
            this.subcategories = this.categories.find(category => category.id == this.medicine.category_id).subcategories.map(subcategory => {
                return {
                    id: subcategory.id,
                    name: subcategory.name,
                }
            })
        },
        async getMedicines() {
            
            this.medicines = []
            this.totalMedicines = 0

            const query = {
                ...this.filter,
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
            }

            this.loading = true
            const { data } = await MedicineResource.index(query)
            this.loading = false
            this.medicines = data.data.data;
            this.totalMedicines = data.data.total;
        },
        onCreateUpdateMedicine () {
            if (this.medicine.id) {
                this.updateMedicine();
            } else {
                this.addMedicine();
            }
        },
        async addMedicine() {
            try {
                this.loading = true;
                const { data } = await MedicineResource.store(this.medicine)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateMedicine = false;
                this.medicines.push(data.data);
                this.medicine = {
                    // warehouse_id: null,
                    // supplier_id: 1,
                    unit_id: null,
                    brand_id: null,
                    category_id: null,
                    sub_category_id: '',
                    user_id: store.state.auth.user.id,
                    name: null,
                    sku: null,
                    description: null,
                    is_taxable: false,
                    tax: 0,
                    price: 0,
                    manage_stock: false,
                    stock_min: 5,
                    expiration_date: null,
                }
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }        
        },
        editMedicine(medicine) {
            this.medicine = {
                id: medicine.id,
                // warehouse_id: medicine.warehouse_id,
                // supplier_id: medicine.supplier_id,
                unit_id: medicine.unit_id,
                brand_id: medicine.brand_id,
                category_id: medicine.category_id,
                sub_category_id: medicine.sub_category_id,
                user_id: medicine.user_id,
                name: medicine.name,
                sku: medicine.sku,
                description: medicine.description,
                is_taxable: medicine.is_taxable,
                tax: medicine.tax,
                price: medicine.price,
                manage_stock: medicine.manage_stock,
                stock_min: medicine.stock_min,
                expiration_date: medicine.expiration_date,
            }
            this.onShowModalCreateUpdateMedicine = true
            
        },
        async updateMedicine() {
            try {
                this.loading = true;
                const { data } = await MedicineResource.update(this.medicine.id, this.medicine)
                this.loading = false;
                this.success(data.message)
                this.onShowModalCreateUpdateMedicine = false;
                this.medicines = this.medicines.map(medicine => {
                    if (medicine.id === this.medicine.id) {
                        return data.data;
                    }
                    return medicine;
                });
                this.medicine = {
                    // warehouse_id: null,
                    // supplier_id: 1,
                    unit_id: null,
                    brand_id: null,
                    category_id: null,
                    sub_category_id: '',
                    user_id: store.state.auth.user.id,
                    name: null,
                    sku: this.generateSKU(),
                    description: null,
                    is_taxable: false,
                    tax: 0,
                    price: 0,
                    manage_stock: false,
                    stock_min: 5,
                    expiration_date: null,
                }
            }catch(error) {
                this.loading = false;
                this.handleResponseErrors(error)
            }           
        },
        deleteMedicine(medicine) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: !medicine.deleted_at ? this.$t('inventories.medicines.disabled_deleted_at')
                    : this.$t('inventories.medicines.enabled_deleted_at'),
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
                        const { data } = await MedicineResource.destroy(medicine.id)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            this.medicines = this.medicines.map(medicine => {
                                if (medicine.id === data.data.id) {
                                    return data.data;
                                }
                                return medicine;
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
        resolveVariantCurrentStock(item) {
            if (item.current_stock <= item.stock_min) {
                return { variant: 'danger', icon: 'InfoIcon' }
            }
            return { variant: 'primary', icon: 'CheckIcon' }        
        },
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>