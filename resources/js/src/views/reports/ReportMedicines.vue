<template>
    <div>
        <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" :opacity="opacity">
            <template #overlay>
                <div class="d-flex align-items-center">
                    <b-spinner small type="grow" variant="secondary" />
                    <b-spinner type="grow" variant="dark" />
                    <b-spinner small type="grow" variant="secondary" />
                </div>
            </template>

            <b-card no-body>
                <b-card-header class="pb-50">
                    <h5>{{ $t('filters.title') }}</h5>
                </b-card-header>
                <b-card-body>
                    <b-row class="mt-2">
                        <b-col cols="12" md="3">
                            <b-form-group :label="$t('inventories.medicines.fields.unit')">
                                <v-select id="unit_id" v-model="filter.unit_id" :options="units" :reduce="unit => unit.id"
                                    label="name" :placeholder="$t('inventories.medicines.fields.unit_placeholder')" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="3">
                            <b-form-group :label="$t('inventories.medicines.fields.brand')">
                                <v-select id="brand_id" v-model="filter.brand_id" :options="brands"
                                    :reduce="brand => brand.id" label="name"
                                    :placeholder="$t('inventories.medicines.fields.brand_placeholder')" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="3">
                            <b-form-group :label="$t('inventories.medicines.fields.category')">
                                <v-select id="category_id" v-model="filter.category_id" :options="categories"
                                    :reduce="category => category.id" label="name"
                                    :placeholder="$t('inventories.medicines.fields.category_placeholder')" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="demo-inline-spacing">
                                <b-button @click="getMedicines" variant="outline-primary"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="SearchIcon" />
                                    {{ $t("button_filter") }}
                                </b-button>

                                <b-button v-if="medicines.length" @click="downloadPatient" variant="outline-success"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="DownloadIcon" />
                                    {{ $t("download") }}
                                </b-button>

                                <b-button v-if="filter.start" @click="clearFilter" variant="outline-danger"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                    <feather-icon icon="XIcon" />
                                    {{ $t("button_clear_filter") }}
                                </b-button>

                                <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-secondary"
                                    :class="{ 'btn-block': isMobile }" @click="$router.back()">
                                    <feather-icon icon="ChevronLeftIcon" />
                                    {{ $t('back') }}
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
            <b-card no-body class="mb-0">
                <div class="table-responsive">
                    <b-table ref="refMedicineListTable" striped hover :items="medicines" :fields="columns" responsive
                        primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')" class="position-relative"
                        :current-page="currentPage" :busy.sync="loading" stacked="md" small>
                        <template #cell(name)="data">
                            {{ data.item.name }}<br>
                            <small><strong>SKU: {{ data.item.sku }}</strong></small>
                        </template>

                        <template #cell(warehouse)="data">
                            {{ data.item.warehouse.name }}
                        </template>

                        <template #cell(unit)="data">
                            {{ data.item.unit.name }}
                        </template>

                        <template #cell(category)="data">
                            {{ data.item.category ? data.item.category.name : '' }}
                        </template>

                        <template #cell(brand)="data">
                            {{ data.item.brand.name }}
                        </template>

                        <template #cell(price)="data">
                            {{ data.item.price }}
                        </template>

                        <template #cell(current_stock)="data">
                            <b-avatar v-if="data.item.current_stock <= data.item.stock_min"
                                :id="`medicine-row-${data.item.id}`" size="32"
                                :variant="`light-${resolveVariantCurrentStock(data.item).variant}`">
                                <feather-icon :icon="resolveVariantCurrentStock(data.item).icon" />
                            </b-avatar>
                            <b-tooltip v-if="data.item.current_stock <= data.item.stock_min"
                                :target="`medicine-row-${data.item.id}`" placement="top">
                                <p class="mb-0">
                                    {{ $t('inventories.medicines.stok_alert').replace(':quantity', data.item.stock_min) }}
                                </p>
                            </b-tooltip>
                            <b-badge pill :variant="resolveVariantCurrentStock(data.item).variant">{{
                                data.item.current_stock }}</b-badge>
                        </template>

                        <template #cell(expiration_date)="data">
                            {{ formatDateTime(data.item.expiration_date) }}
                        </template>

                        <template #cell(created_at)="data">
                            {{ formatDateTime(data.item.created_at) }}
                        </template>

                        <template #cell(updated_at)="data">
                            {{ formatDateTime(data.item.updated_at) }}
                        </template>

                        <!-- Column: Estado -->
                        <template #cell(deleted_at)="data">
                            <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`"
                                class="text-capitalize">
                                {{ resolveStatusTranslate(data.item.deleted_at) }}
                            </b-badge>
                        </template>

                    </b-table>
                </div>


                <!-- Pagination -->
                <div v-if="medicines.length > 0" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6"
                            class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalMedicines" :per-page="perPage"
                                    size="lg" />
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-card>
        </b-overlay>
    </div>
</template>
<script>
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox,
    BFormGroup, BFormInput, BModal, VBModal, BMediaAside, BMedia, BAvatar, BImg, BCardHeader,
    BMediaBody, BFormTextarea, BCardTitle, BBadge, BPagination, BTooltip, VBTooltip,
} from 'bootstrap-vue'
import axios from 'axios';
import store from '@/store'
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import vSelect from "vue-select";
import Ripple from 'vue-ripple-directive'
import "animate.css";
import { saveAs } from 'file-saver';

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

if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
    //localize(store.state.auth.setting['language'] === "es");
}
export default {
    name: 'ReportMedicines',
    directives: {
        Ripple,
        'b-modal': VBModal,
        'b-toggle': VBToggle,
    },
    components: {
        BRow,
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
        flatPickr,
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal,
        BMediaAside,
        BMedia,
        BAvatar,
        BImg,
        BCardHeader,
        BMediaBody,
        BFormTextarea,
        BCardTitle,
        VBModal,
        BBadge,
        BPagination,
        BTooltip,
        VBTooltip,
        BFormCheckbox,
    },
    data() {
        return {
            loading: false,
            units: [],
            brands: [],
            categories: [],
            subcategories: [],
            warehouses: [],
            medicines: [],
            columns: [
                {
                    key: "name",
                    label: this.$t('inventories.medicines.medicine'),
                },
                {
                    key: "unit",
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
            ],
            perPageOptions: [10, 25, 50, 100],
            perPage: 100,
            currentPage: 1,
            totalMedicines: 0,
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            pagination: {},
            offset: 3,
            critery: "reference",
            search: "",
            donwload: false,
            opacity: .75,
            filter: {
                start: null,
                end: null,
                name: null,
                unit_id: null,
                brand_id: null,
                category_id: null,
            },
            isMobile: false,
            isFilterApplied: false
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
    },
    async mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        await this.getWarehouses()
        await this.getUnits()
        await this.getBrands()
        await this.getCategories()
        await this.getMedicines()

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        async getUnits() {
            // if (store.state.inventory.units.length > 0) {
            //     this.units = store.state.inventory.units
            // } else {
                this.loading = true
                const { data } = await UnitResource.index({ all: true })
                this.loading = false
                this.units = data.data;
                store.commit('inventory/SET_UNITS', data.data)
            // }
        },
        async getBrands() {
            // if (store.state.inventory.brands.length > 0) {
            //     this.brands = store.state.inventory.brands
            // } else {
                this.loading = true
                const { data } = await BrandResource.index({ all: true })
                this.loading = false
                this.brands = data.data;
                store.commit('inventory/SET_BRANDS', data.data)
            // }
        },
        async getWarehouses() {
            // if (store.state.inventory.warehouses.length > 0) {
            //     this.warehouses = store.state.inventory.warehouses
            // } else {
                this.loading = true
                const { data } = await WarehouseResource.index({ all: true })
                this.loading = false
                this.warehouses = data.data;
                store.commit('inventory/SET_WAREHOUSES', data.data)
            // }
        },
        async getCategories() {
            // if (store.state.inventory.categories.length > 0) {
            //     this.categories = store.state.inventory.categories
            // } else {
                this.loading = true
                const { data } = await CategoryResource.index({ all: true })
                this.loading = false
                this.categories = data.data;
                store.commit('inventory/SET_CATEGORIES', data.data)
            // }
        },
        async getMedicines() {
            this.loading = true
            const { data } = await MedicineResource.index({
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                search: this.search,
                ...this.filter,
                all: true,
            })
            this.loading = false
            this.medicines = data.data;
            this.totalMedicines = data.total;
        },
        handleResize() {
            this.isMobile = window.innerWidth < 576;
        },
        async downloadPatient() {

            const query = {
                ...this.filter,
                isDownload: true,
            }

            try {

                this.loading = true
                axios.get(`/api/inventories/medicines`, { responseType: 'blob', params: { ...query } }).then(response => {
                    this.loading = false
                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
                    const currentTime = Math.floor(Date.now() / 1000); 
                    saveAs(blob, `${this.$t('reports.medicines.excel_name')}-${currentTime}.xlsx`);

                }).catch(e => {
                    this.loading = false
                    this.handleResponseErrors(e)
                });
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },       
        clearFilter() {
            this.filter = {}
            this.isFilterApplied = false
            this.medicines = []

        },
        resolveVariantCurrentStock(item) {
            if (item.current_stock <= item.stock_min) {
                return { variant: 'danger', icon: 'InfoIcon' }
            }
            return { variant: 'primary', icon: 'CheckIcon' }        
        },
    },
    watch: {
        currentPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            this.getMedicines();
        },
        perPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            this.getMedicines();
        },
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';

@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
    .dark-layout & {
        background: $theme-dark-body-bg !important;
    }
}</style>