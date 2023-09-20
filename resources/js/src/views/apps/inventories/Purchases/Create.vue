<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>
        <section class="invoice-add-wrapper">
            <b-row class="invoice-add">

                <!-- Col: Left (Invoice Container) -->
                <b-col cols="12" xl="9" md="8">
                    <b-form @submit.prevent>
                        <b-card no-body class="invoice-preview-card">

                            <!-- Purchase Supplier Client & Details -->
                            <b-card-body class="invoice-padding pt-0">
                                <b-row class="invoice-spacing">

                                    <!-- Col: Invoice To -->
                                    <b-col cols="12" xl="6" class="mb-lg-1">
                                        <h6 class="mb-2">
                                            {{ $t('inventories.purchases.fields.supplier_name') }}
                                        </h6>

                                        <!-- Select Supplier -->
                                        <v-select
                                            v-model="invoiceData.supplier_id"
                                            :options="suppliersData"
                                            label="name"
                                            input-id="invoice-data-client"
                                            :clearable="false"
                                            :reduce="supplier => supplier.id"
                                            :placeholder="$t('inventories.purchases.fields.supplier_name_placeholder')">
                                        
                                            <template #list-header>
                                                <li @click="isAddNewSupplierSidebarActive = true"
                                                    class="add-new-client-header d-flex align-items-center my-50"
                                                    style="cursor: pointer;">
                                                    <feather-icon icon="PlusIcon" size="16"/>
                                                    <span class="align-middle ml-25">{{ $t('inventories.purchases.add_supplier') }}</span>
                                                </li>
                                            </template>
                                        </v-select>

                                        <!-- Warehouses -->
                                        <div class="mt-2">
                                            <label class="mb-50">{{ $t('inventories.purchases.fields.warehouse') }}</label>
                                            <v-select
                                                v-model="invoiceData.warehouse_id"
                                                :options="warehousesData"
                                                label="name"
                                                :clearable="false"
                                                :reduce="warehouse => warehouse.id"
                                                :placeholder="$t('inventories.purchases.fields.warehouse_placeholder')"
                                            />
                                        </div>

                                        <!-- Medicines -->
                                        <div class="mt-2">
                                            <b-form-group :label="$t('inventories.purchases.fields.search')" label-for="search-medicine" :description="$t('inventories.purchases.fields.search_help')">
                                                <b-input-group class="input-group-merge">
                                                    <b-input-group-prepend is-text>
                                                        <feather-icon icon="SearchIcon" />
                                                    </b-input-group-prepend>
                                                    <b-form-input readonly :placeholder="$t('inventories.purchases.fields.search_placeholder')"
                                                    @click="activeSearchMedicine = true" />                                                    
                                                </b-input-group>
                                            </b-form-group>
                                            <search-medicine :active="activeSearchMedicine" @selected="addNewItemInItemForm" @close="activeSearchMedicine = false"></search-medicine>
                                        </div>
                                    </b-col>

                                    <!-- Col: Purchase Details -->
                                    <b-col xl="6" cols="12" class="mt-xl-0 mt-2 justify-content-end d-xl-flex d-block">
                                        <div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="pr-1">{{ $t('inventories.purchases.fields.reference') }}</td>
                                                        <td>
                                                            <b-form-input
                                                                id="invoice-data-id"
                                                                v-model="invoiceData.reference"
                                                                class="invoice-edit-input"
                                                                :placeholder="$t('inventories.purchases.fields.reference_placeholder')"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="pr-1">{{ $t('inventories.purchases.fields.purchase_date') }}</td>
                                                        <td>
                                                            <flat-pickr
                                                                v-model="invoiceData.purchase_date"
                                                                class="form-control invoice-edit-input mt-1"
                                                                />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="pr-1">{{ $t('inventories.purchases.fields.state') }}</td>
                                                        <td>
                                                            <v-select
                                                                v-model="invoiceData.status"
                                                                :options="purchaseStatus"
                                                                label="label"
                                                                :clearable="false"
                                                                :reduce="label => label.value"
                                                                class="invoice-edit-input w-100 mt-1"
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>

                            <!-- Items Section -->
                            <b-card-body class="invoice-padding form-item-section">
                                <div ref="form" class="repeater-form" :style="{height: trHeight}">
                                    <b-row v-for="(item, index) in invoiceData.items" :key="index" ref="row" class="pb-2">

                                        <!-- Item Form -->
                                        <!-- ? This will be in loop => So consider below markup for single item -->
                                        <b-col cols="12">

                                            <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                                            <div class="d-none d-lg-flex">
                                                <b-row class="flex-grow-1 px-1">
                                                    <!-- Single Item Form Headers -->
                                                    <b-col cols="12" lg="6">{{ $t('inventories.purchases.fields.medicine') }}</b-col>
                                                    <b-col cols="12" lg="2">{{ $t('inventories.purchases.fields.cost') }}</b-col>
                                                    <b-col cols="12" lg="2">{{ $t('inventories.purchases.fields.quantity') }}</b-col>
                                                    <b-col cols="12" lg="2">{{ $t('inventories.purchases.fields.discount') }}</b-col>
                                                    <!-- <b-col cols="12" lg="1">Subtotal</b-col> -->
                                                </b-row>
                                                <div class="form-item-action-col" />
                                            </div>

                                            <!-- Form Input Fields OR content inside bordered area  -->
                                            <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                                            <div class="d-flex border rounded">
                                                <b-row class="flex-grow-1 p-2">
                                                    <!-- Single Item Form Headers -->
                                                    <b-col cols="12" lg="6">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.purchases.fields.medicine') }}</label>
                                                        <b-form-input
                                                            v-model="item.name"
                                                            readonly
                                                        />
                                                        <!-- <p class="mb-1">
                                                            SKU: {{ item.sku }}<br>
                                                            <small>{{item.description}}</small>
                                                        </p> -->
                                                    </b-col>
                                                    <b-col cols="12" lg="2">
                                                        <label class="d-inline  d-lg-none">{{ $t('inventories.purchases.fields.cost') }}</label>
                                                        <b-form-input v-model="item.unit_price" type="number" class="mb-2" 
                                                            @input="updateItemForm(index, item)"
                                                            placeholder="Ejem. 10.5"/>
                                                    </b-col>
                                                    <b-col cols="12" lg="2">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.purchases.fields.quantity') }}</label>
                                                        <b-form-input
                                                            v-model="item.quantity"
                                                            type="number"
                                                            class="mb-2"
                                                            @input="updateItemForm(index, item)"
                                                            placeholder="Ejem. 10"
                                                        />
                                                    </b-col>
                                                    <b-col cols="12" lg="2">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.purchases.fields.discount') }}</label>
                                                        <b-form-input
                                                            v-model="item.discount"
                                                            type="number"
                                                            class="mb-2"
                                                            @input="updateItemForm(index, item)"
                                                            placeholder="$3.5"
                                                        />
                                                    </b-col>
                                                    <b-col cols="12" lg="10">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.purchases.fields.description') }}</label>
                                                        <p class="mb-1">
                                                            SKU: {{ item.sku }}<br>
                                                            {{ item.description }}
                                                        </p>
                                                    </b-col>
                                                    <b-col cols="12" lg="2">
                                                        <p class="mb-0">
                                                            <strong>{{ $t('inventories.purchases.fields.subtotal') }}: {{ formatPrice(item.subtotal) }}</strong><br>
                                                            <strong>{{ $t('inventories.purchases.fields.total') }}: {{ formatPrice(item.total) }}</strong>
                                                        </p>
                                                    </b-col>
                                                </b-row>
                                                <div class="d-flex flex-column justify-content-between border-left py-50 px-25">
                                                    <feather-icon size="16" icon="XIcon" class="cursor-pointer" @click="removeItem(index)"/>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-card-body>

                            <!-- Invoice Description: Total -->
                            <b-card-body class="invoice-padding pb-0">
                                <b-row>

                                    <!-- Col: Comments -->
                                    <b-col cols="12" md="6" class="mt-md-0 mt-3 d-flex align-items-center" order="2" order-md="1">
                                        <b-card-body class="invoice-padding pt-0">
                                            <label for="invoice-data-sales-person" class="text-nowrap mr-50 font-weight-bold">{{ $t('inventories.purchases.fields.comments') }}</label>
                                            <b-form-textarea v-model="invoiceData.comments" />
                                        </b-card-body>
                                    </b-col>

                                    <!-- Col: Total -->
                                    <b-col cols="12" md="6" class="mt-md-6 d-flex justify-content-end" order="1" order-md="2">
                                        <div class="invoice-total-wrapper">
                                            <div class="invoice-total-item">
                                                <p class="invoice-total-title">
                                                    {{ $t('inventories.purchases.fields.subtotal') }}
                                                </p>
                                                <p class="invoice-total-amount">
                                                    {{ formatPrice(invoiceData.subtotal) }}
                                                </p>
                                            </div>
                                            <div class="invoice-total-item">
                                                <p class="invoice-total-title">
                                                    {{ $t('inventories.purchases.fields.discount') }}
                                                </p>
                                                <p class="invoice-total-amount">
                                                    {{  formatPrice(invoiceData.discount) }}
                                                </p>
                                            </div>
                                            <hr class="my-50">
                                            <div class="invoice-total-item">
                                                <p class="invoice-total-title">
                                                    {{ $t('inventories.purchases.fields.total') }}
                                                </p>
                                                <p class="invoice-total-amount">
                                                    {{ formatPrice(invoiceData.total) }}
                                                </p>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>

                            <!-- Spacer -->
                            <hr class="invoice-spacing">
                            <b-card-body class="invoice-padding pt-0">
                                <b-row>
                                    <b-col cols="12" lg="10">
                                        <p v-if="invoiceData.status=='received'" class="text-danger">
                                            {{ $t('inventories.purchases.marked_stock') }} <strong>{{ $t('inventories.purchases.status.received') }}</strong>
                                        </p>
                                    </b-col>
                                    <b-col cols="12" lg="2">                                
                                        <b-button :disabled="invoiceData.total <= 0" @click="storePurchase" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="" block>
                                            {{ $t('save') }}
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-card-body>

                        </b-card>
                    </b-form>
                </b-col>

                <!-- Right Col: Card -->
                <b-col cols="12" md="4" xl="3" class="invoice-actions mt-md-0 mt-2"></b-col>
            </b-row>
        </section>

        <!-- Add New Sidebar -->
        <supplier-add-new-siderbar 
            :is-add-new-supplier-sidebar-active.sync="isAddNewSupplierSidebarActive"
            :suppliers="suppliersData"
            :invoiceData="invoiceData" />
    </b-overlay>
</template>

<script>
import Logo from '@core/layouts/components/Logo.vue'
import { ref, onMounted, onUnmounted, getCurrentInstance } from '@vue/composition-api'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import router from '@/router'
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BButton,
  BCardText,
  BForm,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupPrepend,
  BFormTextarea,
  BFormCheckbox,
  BPopover,
  VBToggle,
  BSpinner,
  BOverlay,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import SearchMedicine from '@core/components/medicines/SearchMedicine.vue'
import SupplierAddNewSiderbar from './SupplierAddNewSiderbar.vue'
import PurchaseProvier from '@/providers/inventories/Purchases'
import SupplierProvider from '@/providers/inventories/Suppliers';
import WarehouseProvider from '@/providers/inventories/Warehouses';

import { useUtils as useI18nUtils } from '@core/libs/i18n'

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";


const SupplierResource = new SupplierProvider();
const WarehouseResource = new WarehouseProvider();
const PurchaseResource = new PurchaseProvier();

export default {
    name: 'PurchaseCreate',
    components: {
        BRow,
        BCol,
        BCard,
        BCardBody,
        BButton,
        BCardText,
        BForm,
        BFormGroup,
        BFormInput,
        BInputGroup,
        BInputGroupPrepend,
        BFormTextarea,
        BFormCheckbox,
        BPopover,
        BSpinner,
        BOverlay,
        flatPickr,
        vSelect,        
        SearchMedicine,
        ToastificationContent,
        SupplierAddNewSiderbar,
    },
    directives: {
        Ripple,
        'b-toggle': VBToggle,
    },
    mixins: [heightTransition],
    mounted() {
        this.initTrHeight()

        this.invoiceData.reference = this.generateReference('OC-')
    },
    created() {
        window.addEventListener('resize', this.initTrHeight)
    },
    destroyed() {
        window.removeEventListener('resize', this.initTrHeight)
    },
    methods: {
        addNewItemInItemForm(e) {
            this.$refs.form.style.overflow = 'hidden'
            
            const index = this.invoiceData.items.findIndex(item => item.medicine_id == e.id)
            if (index > -1) {
                this.invoiceData.items[index].quantity += 1
                this.invoiceData.items[index].subtotal = this.invoiceData.items[index].quantity * (this.invoiceData.items[index].unit_price*1)
                this.invoiceData.items[index].total = this.invoiceData.items[index].subtotal - (this.invoiceData.items[index].discount*1)
            } else {
                this.invoiceData.items.push({
                    medicine_id: e.id,
                    name: e.name,
                    sku: e.sku,
                    quantity: 1,
                    unit_price: 0,
                    tax: 0,
                    discount: 0,
                    subtotal: 0,
                    total: 0,
                    comments: e.comments,
                })

                this.$nextTick(() => {
                    this.trAddHeight(this.$refs.row[0].offsetHeight)
                    setTimeout(() => {
                        this.$refs.form.style.overflow = null
                    }, 350)
                })
            }
        },
        removeItem(index) {
            this.invoiceData.items.splice(index, 1)
            this.trTrimHeight(this.$refs.row[0].offsetHeight)
        },
        initTrHeight() {
            this.trSetHeight(null)
            this.$nextTick(() => {
                this.trSetHeight(this.$refs.form.scrollHeight)
            })
        },
    },
    setup() {
        const suppliersData = ref([])
        const warehousesData = ref([])
        const activeSearchMedicine = ref(false)
        const loading = ref(false)
        const isAddNewSupplierSidebarActive = ref(false)
        const { t } = useI18nUtils()

        // Use toast
        const toast = useToast();
        
        const getSuppliers = async () => {
            loading.value = true
            const { data } = await SupplierResource.index({all: true});
            loading.value = false
            suppliersData.value = data.data
        }

        const getWarehouses = async () => {
            loading.value = true
            const { data } = await WarehouseResource.index({all: true});
            loading.value = false
            warehousesData.value = data.data
        }

        onMounted(async () => {
            await getSuppliers()
            await getWarehouses()
        })

        const itemFormBlankItem = {}

        const invoiceData = ref({
            supplier_id: null,
            user_id: store.state.auth.user.id,
            reference: null,
            purchase_date: new Date(),
            status: 'pending',
            total: 0,
            subtotal: 0,
            discount: 0,
            tax: 0,
            shipping: 0,
            items: [],
        })

        const purchaseStatus = [
            {
                value: 'received',
                label: t('inventories.purchases.status.received'),
            },
            {
                value: 'pending',
                label: t('inventories.purchases.status.pending'),
            },
        ];

        const updateItemForm = (index, item) => {
            const { unit_price, quantity, discount } = item
            invoiceData.value.items[index].unit_price = unit_price*1
            invoiceData.value.items[index].quantity = quantity*1
            invoiceData.value.items[index].discount = discount*1
            const subtotal = quantity * (unit_price*1)
            invoiceData.value.items[index].subtotal = subtotal
            invoiceData.value.items[index].total = subtotal - (discount*1)

            invoiceData.value.subtotal = invoiceData.value.items.reduce((a, b) => a + (b.subtotal || 0), 0)
            invoiceData.value.discount = invoiceData.value.items.reduce((a, b) => a + (b.discount || 0), 0)
            invoiceData.value.total = invoiceData.value.subtotal - invoiceData.value.discount
        }

        const paymentMethods = ['Bank Account', 'PayPal', 'UPI Transfer']

        const getFirstValidationError = (errorBag) => {
            let errors = Object.values(errorBag)
            errors = errors.flat()
            return errors[0]
        }

        const handleResponseErrors = (e) => {
            console.log(e.response)
            if (e.response.status === 422) {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: getFirstValidationError(e.response.data.errors),
                        icon: "AlertCircleIcon",
                        variant: "danger",
                    },
                });
            } else {
                toast({
                    component: ToastificationContent,
                    props: {
                        title: e.message,
                        icon: "AlertCircleIcon",
                        variant: "danger",
                    },
                });
            }
        }

        const storePurchase = async () => {
            
            try {
                loading.value = true
                const { data } = await PurchaseResource.store(invoiceData.value)
                loading.value = false
                if (data.success) {
                    toast({
                        component: ToastificationContent,
                        props: {
                            title: data.message,
                            icon: "CheckIcon",
                            variant: "success",
                        },
                    });
                    router.push({ name: 'apps-inventories-purchases' })
                } else {
                    toast({
                        component: ToastificationContent,
                        props: {
                            title: data.message,
                            icon: "AlertCircleIcon",
                            variant: "danger",
                        },
                    });
                }
            } catch (e) {
                loading.value = false
                handleResponseErrors(e)
            }
        }

        return {
            loading,
            isAddNewSupplierSidebarActive,
            invoiceData,
            suppliersData,
            warehousesData,
            purchaseStatus,
            updateItemForm,
            itemFormBlankItem,
            paymentMethods,
            activeSearchMedicine,
            storePurchase,
            
        }
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
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

@import "~@resources/scss/base/pages/app-invoice";
@import 'bootstrap/scss/variables';
@import '~@resources/scss/base/components/variables-dark';


.form-item-section {
  background-color: $product-details-bg;
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
    background-color: $theme-dark-body-bg;

    .row .border {
      background-color: $theme-dark-card-bg;
    }
  }
}
</style>
