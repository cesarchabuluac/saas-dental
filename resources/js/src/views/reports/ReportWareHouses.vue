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

            <b-card>
                <b-row>
                    <b-col cols="12" md="4">
                        <b-form-group :label="$t('warehouse')">
                            <v-select id="warehouse_id" v-model="filter.warehouse_id" :options="warehouses" :reduce="option => option.id"
                                label="name" :placeholder="$t('warehouse_placeholder')" class="select-size-sm"
                                :clearable="false" />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12" md="8">
                        <div class="demo-inline-spacing_ mt-2">
                            <b-button size="sm" @click="getMedicinesWithStock" variant="outline-primary"
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                <feather-icon icon="SearchIcon" />
                                {{ $t("button_filter") }}
                            </b-button>

                            <b-button size="sm" v-if="medicines.length" @click="downloadPatient" variant="outline-success"
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                <feather-icon icon="DownloadIcon" />
                                {{ $t("button_download") }}
                            </b-button>

                            <b-button size="sm" v-if="filter.start" @click="clearFilter" variant="outline-danger"
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'" :class="{ 'btn-block': isMobile }">
                                <feather-icon icon="XIcon" />
                                {{ $t("button_clear_filter") }}
                            </b-button>

                            <b-button size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="outline-secondary"
                                :class="{ 'btn-block': isMobile }" @click="$router.back()">
                                <feather-icon icon="ChevronLeftIcon" />
                                {{ $t('back') }}
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
            <b-card no-body class="mb-0">
                <div class="table-responsive">
                    <div class="position-relative b-table-responsive mb-0 text-small small b-table-sticky-header table-responsive">
                        <table ref="routings" class="table b-table text-small small table-small table-sm b-table-no-border-collapse b-table-selectable b-table-select-single">
                            <thead>
                                <tr>
                                    <th v-for="column in columns" :key="column.key" @click="sortBy = column.key"
                                        :class="{ 'sorting_asc': sortBy === column.key, 'sorting_desc': sortBy !== column.key }">
                                        {{ column.label }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in medicines" :key="index">
                                    <td>{{ item.warehouse.name }}</td>
                                    <td>{{ item.medicine.name }}</td>
                                    <td>{{ item.medicine.unit.name }}</td>
                                    <td>{{ item.medicine.category.name}}</td>
                                    <td>{{ item.medicine.brand.name }}</td>
                                    <td>{{ item.medicine.price }}</td>
                                    <td class="text-center">{{ item.medicine.current_stock }}</td>
                                    <td>{{ item.medicine.expiration_date }}</td>
                                    <td>
                                        <b-badge pill :variant="`light-${resolveStatusVariant(item.medicine.deleted_at)}`"
                                            class="text-capitalize">
                                            {{ resolveStatusTranslate(item.medicine.deleted_at) }}
                                        </b-badge>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
import ReportsProvider from '@/providers/v2/Reports';

const UserResource = new UserProvider()
const SupplierResource = new SupplierProvider()
const UnitResource = new UnitProvider()
const CategoryResource = new CategoryProvider()
const BrandResource = new BrandProvider()
const SubcategoryResource = new SubcategoryProvider()
const MedicineResource = new MedicineProvider()
const WarehouseResource = new WarehouseProvider()
const ReportsResource = new ReportsProvider()


if (store.state.auth.setting['language'] === "es") {
    flatpickr.localize(Spanish);
}
export default {
    name: 'ReportWareHouses',
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
                    key: "warehouse_id",
                    label: this.$t('warehouse'),
                },
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
                warehouse_id: null,
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
        // await this.getUnits()
        // await this.getBrands()
        // await this.getCategories()
        // await this.getMedicines()

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {       
        async getWarehouses() {
            if (this.warehouses.length <= 0) {
                this.loading = true
                const { data } = await WarehouseResource.index({ all: true })
                this.loading = false
                
                // Agregar el objeto deseado al inicio del array de warehouses
                const todasWarehouse = {
                    branch_office: null,
                    id: 0,
                    name: "TODAS"
                };
                
                // Insertar el nuevo objeto al principio del array
                this.warehouses = [todasWarehouse, ...data.data];
                this.filter.warehouse_id = this.warehouses[0].id
                store.commit('inventory/SET_WAREHOUSES', data.data)
            }
        },       
        async getMedicinesWithStock() {
            try {
                this.loading = true
                const { data } = await ReportsResource.getMedicinesWithStock({
                    page: this.currentPage,
                    perPage: this.perPage,
                    sortBy: this.sortBy,
                    sortDesc: this.sortDesc,
                    search: this.search,
                    ...this.filter,
                    all: true,
                })
                this.loading = false
                this.medicines = data
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
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
            this.getMedicinesWithStock();
        },
        perPage(value) {
            if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false
            this.getMedicinesWithStock();
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