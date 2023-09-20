<template>
    <b-overlay :show="isLoaing" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
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

                                        <!-- Warehouses -->
                                        <div class="mt-2">
                                            <label class="mb-50">{{ $t('inventories.adjustments.fields.warehouse') }}</label>
                                            <v-select
                                                v-model="invoiceData.warehouse_id"
                                                :options="warehousesData"
                                                label="name"
                                                :clearable="false"
                                                :reduce="warehouse => warehouse.id"
                                                :placeholder="$t('inventories.adjustments.fields.warehouse_placeholder')"
                                                
                                            />
                                        </div>

                                        <!-- Medicines -->
                                        <div class="mt-2">
                                            <b-form-group :label="$t('medicine_search')" label-for="search-medicine" :description="$t('medicine_search_help')">
                                                <b-input-group class="input-group-merge">
                                                    <b-input-group-prepend is-text>
                                                        <feather-icon icon="SearchIcon" />
                                                    </b-input-group-prepend>
                                                    <b-form-input readonly :placeholder="$t('medicine_search_help')"
                                                    @click="activeSearchMedicine = true" />
                                                </b-input-group>
                                            </b-form-group>
                                            <search-medicine 
                                                :active="activeSearchMedicine" 
                                                @selected="addNewItemInItemForm" 
                                                @close="activeSearchMedicine = false"
                                                :warehouse="invoiceData.warehouse_id"></search-medicine>
                                        </div>
                                    </b-col>

                                    <!-- Col: Adjustment Details -->
                                    <b-col xl="6" cols="12" class="mt-xl-0 mt-2 justify-content-end d-xl-flex d-block">
                                        <div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="pr-1">{{ $t('inventories.adjustments.fields.reference') }}</td>
                                                        <td>
                                                            <b-form-input
                                                                id="invoice-data-id"
                                                                v-model="invoiceData.reference"
                                                                class="invoice-edit-input"
                                                                :placeholder="$t('inventories.adjustments.fields.reference_placeholder')"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="pr-1">{{ $t('inventories.adjustments.fields.date') }}</td>
                                                        <td>
                                                            <flat-pickr
                                                                v-model="invoiceData.date"
                                                                class="form-control invoice-edit-input mt-1"
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
                                                    <b-col cols="12" lg="6">{{ $t('inventories.adjustments.table.items.medicine') }}</b-col>
                                                    <b-col cols="12" lg="2">{{ $t('inventories.adjustments.table.items.stock') }}</b-col>
                                                    <b-col cols="12" lg="2">{{ $t('inventories.adjustments.table.items.quantity') }}</b-col>
                                                    <b-col cols="12" lg="2">{{ $t('inventories.adjustments.table.items.adjustment_type') }}</b-col>
                                                </b-row>
                                                <div class="form-item-action-col" />
                                            </div>

                                            <!-- Form Input Fields OR content inside bordered area  -->
                                            <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                                            <div class="d-flex border rounded">
                                                <b-row class="flex-grow-1 p-2">
                                                    <!-- Single Item Form Headers -->
                                                    <b-col cols="12" lg="6">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.adjustments.table.items.medicine') }}</label>
                                                        <b-form-input
                                                            v-model="item.name"
                                                            readonly
                                                        />
                                                    </b-col>
                                                    <b-col cols="12" lg="2">
                                                        <label class="d-inline  d-lg-none">{{ $t('inventories.adjustments.table.items.stock') }}</label>
                                                        <b-form-input v-model="item.stock" type="number" class="mb-2" disabled/>
                                                    </b-col>
                                                    <b-col cols="12" lg="2">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.adjustments.table.items.quantity') }}</label>
                                                        <b-form-input
                                                            v-model="item.quantity"
                                                            type="number"
                                                            class="mb-2"
                                                            placeholder="Ejem. 10"
                                                        />
                                                    </b-col>
                                                    <b-col cols="12" lg="2">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.adjustments.table.items.adjustment_type') }}</label>
                                                        <v-select
                                                            v-model="item.type"
                                                            :options="adjustmentOptions"
                                                            label="label"
                                                            :clearable="false"
                                                            :searchable="false"
                                                            class="mb-2 item-selector-title"
                                                            placeholder="Selecciona una opción"
                                                            :reduce="item => item.value"
                                                            @input="val => updateItemForm(index, val)"
                                                        />
                                                    </b-col>
                                                    <b-col cols="12" lg="6">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.adjustments.table.items.description') }}</label>
                                                        <p class="mb-1">
                                                            SKU: {{ item.sku }}<br>
                                                            {{ item.description }}
                                                        </p>
                                                    </b-col>
                                                    <b-col cols="12" lg="6">
                                                        <label class="d-inline d-lg-none">{{ $t('inventories.adjustments.fields.comments') }}</label>
                                                        <b-form-textarea
                                                            v-model="item.comment"
                                                            :placeholder="$t('inventories.adjustments.fields.comments_placeholder')"/>
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

                                    <!-- Col: Notes -->
                                    <b-col cols="12" md="6" class="mt-md-0 mt-3 d-flex align-items-center" order="2" order-md="1">
                                        <b-card-body class="invoice-padding pt-0">
                                            <label for="invoice-data-sales-person" class="text-nowrap mr-50 font-weight-bold">{{ $t('inventories.adjustments.fields.comments') }}</label>
                                            <b-form-textarea v-model="invoiceData.note" :placeholder="$t('inventories.adjustments.fields.comments_placeholder')" />
                                        </b-card-body>
                                    </b-col>

                                    <!-- Col: Actions -->
                                    <b-col cols="12" md="6" class="mt-md-6 d-flex justify-content-end" order="1" order-md="2">
                                        <div class="invoice-total-wrapper">
                                            <div class="invoice-total-item">
                                                <b-button :disabled="disableStore" @click="storeAdjustment" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="" block>
                                                    {{ $t('save') }}
                                                </b-button>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>

                            <!-- Spacer -->
                            <hr class="invoice-spacing">
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
import { ref, onMounted } from '@vue/composition-api'
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

import AdjustmentProvider from '@/providers/inventories/Adjustments';
import WarehouseProvider from '@/providers/inventories/Warehouses';

import { useUtils as useI18nUtils } from '@core/libs/i18n'

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

const WarehouseResource = new WarehouseProvider();
const AdjustmentResource = new AdjustmentProvider()

export default {
    name: 'AdjustmentCreate',
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
    },
    directives: {
        Ripple,
        'b-toggle': VBToggle,
    },
    mixins: [heightTransition],
    mounted() {
        this.initTrHeight()
        this.invoiceData.reference = this.generateReference('AJ-')
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
                this.invoiceData.items.push({
                    medicine_id: e.id,
                    name: e.name,
                    sku: e.sku,
                    quantity: 1,
                    stock: e.current_stock,
                    description: e.description,
                    type: null,
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
        const warehousesData = ref([])
        const activeSearchMedicine = ref(false)
        const isLoaing = ref(false)
        const disableStore = ref(true)

        const { t } = useI18nUtils()

        // Use toast
        const toast = useToast();
        
        const getWarehouses = async () => {
            isLoaing.value = true
            const { data } = await WarehouseResource.index({all: true});
            isLoaing.value = false
            warehousesData.value = data.data
        }

        onMounted(async () => {
            await getWarehouses()
        })

        const itemFormBlankItem = {}

        const invoiceData = ref({
            warehouse_id: null,
            user_id: store.state.auth.user.id,
            reference: null,
            date: new Date(),
            items: [],
            note: null,
        })

        const adjustmentOptions = [
            {
                value: 'addition',
                label: t('addition'),
            },
            {
                value: 'subtraction',
                label: t('subtraction'),
            },
        ];

        const updateItemForm = (index, type) => {
            const item = invoiceData.value.items[index]
            if(type === 'subtraction') {
                if(item.quantity > item.stock) {
                    disableStore.value = true
                    invoiceData.value.items[index].quantity = item.stock < 0 ? 0 : 1
                    toast({
                        component: ToastificationContent,
                        props: {
                            title: 'No puedes restar mas de lo que tienes en stock',
                            icon: "XIcon",
                            variant: "danger",
                        },
                    });
                } else {
                    disableStore.value = false
                }
            } else {
                invoiceData.value.items[index].quantity = item.quantity > 1 ? item.quantity : 1
                disableStore.value = false
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

        const storeAdjustment = async () => {
            
            try {
                isLoaing.value = true
                const { data } = await AdjustmentResource.store(invoiceData.value)
                isLoaing.value = false
                console.log(data)
                if (data.success) {
                    toast({
                        component: ToastificationContent,
                        props: {
                            title: data.message,
                            icon: "CheckIcon",
                            variant: "success",
                        },
                    });
                    router.push({ name: 'apps-inventories-adjustments' })
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
                isLoaing.value = false
                handleResponseErrors(e)
            }
        }

        return {
            invoiceData,
            warehousesData,
            adjustmentOptions,
            disableStore,
            isLoaing,
            updateItemForm,
            itemFormBlankItem,
            activeSearchMedicine,
            storeAdjustment,
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

@import '~@resources/scss/base/pages/app-invoice.scss';
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
