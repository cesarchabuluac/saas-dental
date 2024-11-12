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
                        <b-card>
                                <b-row>

                                    <!-- Col: Invoice To -->
                                    <b-col cols="12" xl="6">

                                        <!-- From Warehouses -->
                                        <div>
                                            <label class="mb-50">{{ $t('inventories.transfers.fields.from_warehouse') }}</label>
                                            <v-select
                                                :disabled="invoiceData.items.length > 0"
                                                v-model="invoiceData.from_warehouse_id"
                                                :options="fromWarehousesData"
                                                label="name"
                                                :clearable="false"
                                                :searchable="false"
                                                :reduce="warehouse => warehouse.id"
                                                @input="selectFromWarehouse"
                                                class="select-size-sm"
                                                :placeholder="$t('inventories.transfers.fields.from_warehouse_placeholder')"
                                            />
                                        </div>

                                        <!-- To Warehouses -->
                                        <div>
                                            <label class="mb-50">{{ $t('inventories.transfers.fields.to_warehouse') }}</label>
                                            <v-select
                                                :disabled="invoiceData.items.length > 0"
                                                v-model="invoiceData.to_warehouse_id"
                                                :options="toWarehousesData"
                                                label="name"
                                                :clearable="false"
                                                :searchable="false"
                                                :reduce="warehouse => warehouse.id"
                                                class="select-size-sm"
                                                :placeholder="$t('inventories.transfers.fields.to_warehouse_placeholder')"
                                            />
                                        </div>

                                        <!-- Medicines -->
                                        <div v-if="invoiceData.from_warehouse_id && invoiceData.to_warehouse_id">
                                            <b-form-group :label="$t('medicine_search')" label-for="search-medicine" :description="$t('medicine_search_help')">
                                                <b-input-group class="input-group-merge">
                                                    <b-input-group-prepend is-text>
                                                        <feather-icon icon="SearchIcon" />
                                                    </b-input-group-prepend>
                                                    <b-form-input size="sm" readonly :placeholder="$t('medicine_search_help')"
                                                    @click="activeSearchMedicine = true" />
                                                </b-input-group>
                                            </b-form-group>
                                            <search-medicine
                                                :active="activeSearchMedicine" 
                                                @selected="addNewItemInItemForm" 
                                                @close="activeSearchMedicine = false"
                                                :is-transfer="true"
                                                :warehouse="invoiceData.from_warehouse_id"></search-medicine>
                                        </div>
                                    </b-col>

                                    <!-- Col: Adjustment Details -->
                                    <b-col xl="6" cols="12" class="mt-xl-0 mt-2 justify-content-end d-xl-flex d-block">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>{{ $t('inventories.transfers.fields.reference') }}</td>
                                                    <td>
                                                        <b-form-input
                                                            id="invoice-data-id"
                                                            size="sm"
                                                            v-model="invoiceData.reference"
                                                            class="invoice-edit-input"
                                                            :placeholder="$t('inventories.transfers.fields.reference_placeholder')"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{{ $t('inventories.transfers.fields.date') }}</td>
                                                    <td>
                                                        <flat-pickr
                                                            v-model="invoiceData.transfer_date"
                                                            class="form-control invoice-edit-input mt-1"
                                                            />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{{ $t('inventories.transfers.fields.state') }}</td>
                                                    <td>
                                                        <v-select
                                                            v-model="invoiceData.status"
                                                            :options="transferStatus"
                                                            label="label"
                                                            :clearable="false"
                                                            :reduce="label => label.value"
                                                            class="invoice-edit-input w-100 mt-1 select-size-sm"
                                                            :placeholder="$t('inventories.transfers.fields.state_placeholder')"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </b-col>
                                </b-row>

                                <!-- Items Table -->
                                <b-row>
                                    <b-col cols="12" md="12">
                                        <div ref="form" class="repeater-form" :style="{height: trHeight}">
                                            <b-row v-for="(item, index) in invoiceData.items" :key="index" ref="row" class="pb-2">

                                                <!-- Item Form -->
                                                <!-- ? This will be in loop => So consider below markup for single item -->
                                                <b-col cols="12">

                                                    <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                                                    <div class="d-none d-lg-flex">
                                                        <b-row class="flex-grow-1 px-1">
                                                            <!-- Single Item Form Headers -->
                                                            <b-col cols="12" lg="6">{{ $t('inventories.transfers.table.items.medicine') }}</b-col>
                                                            <b-col cols="12" lg="3">{{ $t('inventories.transfers.table.items.stock') }}</b-col>
                                                            <b-col cols="12" lg="3">{{ $t('inventories.transfers.table.items.quantity') }}</b-col>
                                                        </b-row>
                                                        <div class="form-item-action-col" />
                                                    </div>

                                                    <!-- Form Input Fields OR content inside bordered area  -->
                                                    <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                                                    <div class="d-flex border rounded">
                                                        <b-row class="flex-grow-1 p-2">
                                                            <!-- Single Item Form Headers -->
                                                            <b-col cols="12" lg="6">
                                                                <label class="d-inline d-lg-none">{{ $t('inventories.transfers.table.items.medicine') }}</label>
                                                                <b-form-input
                                                                    v-model="item.name"
                                                                    readonly
                                                                    size="sm"
                                                                />
                                                            </b-col>
                                                            <b-col cols="12" lg="3">
                                                                <label class="d-inline  d-lg-none">{{ $t('inventories.transfers.table.items.stock') }}</label>
                                                                <b-form-input size="sm" v-model="item.stock" type="number" class="mb-2" disabled/>
                                                            </b-col>
                                                            <b-col cols="12" lg="3">
                                                                <label class="d-inline d-lg-none">{{ $t('inventories.transfers.table.items.quantity') }}</label>
                                                                <b-form-input
                                                                    autocomplete="off"
                                                                    v-model="item.quantity"
                                                                    type="number"
                                                                    class="mb-2"
                                                                    size="sm"
                                                                    placeholder="Ejem. 10"
                                                                    @input.native="updateItemForm(item)"
                                                                />
                                                            </b-col>
                                                            <b-col cols="12" lg="6">
                                                                <label class="d-inline d-lg-none">{{ $t('inventories.transfers.table.items.description') }}</label>
                                                                <p class="mb-1">
                                                                    SKU: {{ item.sku }}<br>
                                                                    {{ item.description }}
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
                                    </b-col>
                                </b-row>

                                <b-row>
                                    
                                    <b-col cols="12" md="6" order="2" order-md="1">
                                        <b-form-group :label="$t('inventories.transfers.fields.comments')" label-for="comments" 
                                            :description="$t('inventories.transfers.fields.comments_help')">
                                            <b-form-textarea id="comments" size="sm" v-model="invoiceData.note" 
                                            :placeholder="$t('inventories.transfers.fields.comments_placeholder')" />
                                        </b-form-group>
                                    </b-col>

                                    <!-- Col: Actions -->
                                    <b-col cols="12" md="6" class="mt-md-6 d-flex justify-content-end" order="1" order-md="2">
                                        <div class="demo-inline-spacing">
                                            <b-button @click="$router.push({ name: 'apps-inventories-transfers'})" v-ripple.400="'rgba(255, 255, 255, 0.15)'" 
                                                variant="secondary">
                                                {{ $t('back') }}
                                            </b-button>

                                            <b-button :disabled="!canSave || loading" @click="storeTransfer" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary">
                                                {{ $t('save') }}
                                            </b-button>                                            
                                        </div>
                                    </b-col>
                                </b-row>
                            <!-- </b-card-body> -->
                        </b-card>
                    </b-form>
                </b-col>

                <!-- Right Col: Card -->
                <b-col cols="12" md="4" xl="3" class="invoice-actions mt-md-0 mt-2"></b-col>
            </b-row>
        </section>
    </b-overlay>
</template>

<script>
import Logo from '@core/layouts/components/Logo.vue'
import { ref, onMounted, nextTick } from '@vue/composition-api'
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
import * as helper from "@/libs/helpers";
import TransferProvider from '@/providers/inventories/Transfers';
import WarehouseProvider from '@/providers/inventories/Warehouses';

import { useUtils as useI18nUtils } from '@core/libs/i18n'

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

const WarehouseResource = new WarehouseProvider();
const TransferResource = new TransferProvider()

export default {
    name: 'CreateTransfer',
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
        flatPickr,
        BSpinner,
        BOverlay,
        vSelect,
        SearchMedicine,
        ToastificationContent,
    },
    directives: {
        Ripple,
        'b-toggle': VBToggle,
    },
    mixins: [heightTransition],
    computed: {
        canSave() {

            //La regla es si items es mayor a 0 y si por cada items la cantidad es mayor a 0 pero menor o igual al stock
            return this.invoiceData.items.length > 0 && this.invoiceData.items.every(item => item.quantity > 0 && item.quantity <= item.stock)           
        }
    },
    mounted() {
        this.initTrHeight()
        this.invoiceData.reference = this.generateReference('TR-')
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
            } else {
                this.disableStore = true
                this.invoiceData.items.push({
                    medicine_id: e.id,
                    name: e.name,
                    sku: e.sku,
                    quantity: 1,
                    stock: e.current_stock,
                    description: e.description,
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
        const fromWarehousesData = ref([])
        const toWarehousesData = ref([])
        const activeSearchMedicine = ref(false)
        const loading = ref(false)
        const disableStore = ref(false)

        const { t } = useI18nUtils()

        // Use toast
        const toast = useToast();
        
        const getWarehouses = async () => {
            loading.value = true
            const { data } = await WarehouseResource.index({all: true});
            loading.value = false
            fromWarehousesData.value = data.data
        }

        const selectFromWarehouse = (warehouse) => {
            invoiceData.value.to_warehouse_id = null
            toWarehousesData.value = fromWarehousesData.value.filter(item => item.id != warehouse)
        }

        onMounted(async () => {
            await getWarehouses()
        })

        const itemFormBlankItem = {}

        const invoiceData = ref({
            from_warehouse_id: null,
            to_warehouse_id: null,
            user_id: store.state.auth.user.id,
            reference: null,
            transfer_date: new Date(),
            status: 'completed',
            items: [],
            note: null,
        })

        const transferStatus = [
            // {
            //     value: 'pending',
            //     label: 'Pendiente',
            // },
            {
                value: 'completed',
                label: t('inventories.transfers.status.completed'),
            },
        ];

        const messageTranslates = {
           validStock: t('inventories.transfers.valid_stock'),
        }

        const updateItemForm = (item) => {
            const quantity = parseFloat(item.quantity)
            if (isNaN(quantity)) {
                item.quantity = 0
            } else {
                if (quantity > parseFloat(item.stock)) {
                    item.quantity = 0
                    helper.danger(messageTranslates.validStock)
                } else{
                    item.quantity = quantity    
                }
            }
        }

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

        const storeTransfer = async () => {
            
            try {
                loading.value = true
                const { data } = await TransferResource.store(invoiceData.value)
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
                    router.push({ name: 'apps-inventories-transfers' })
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
            invoiceData,
            fromWarehousesData,
            toWarehousesData,
            transferStatus,
            disableStore,
            updateItemForm,
            selectFromWarehouse,
            itemFormBlankItem,
            activeSearchMedicine,
            storeTransfer,
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
