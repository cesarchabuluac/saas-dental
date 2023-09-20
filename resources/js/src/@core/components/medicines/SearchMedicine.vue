<template>
    <div>
        <!-- Modal Search Medicine -->
        <b-modal id="modal-search-medicine" ref="modal-search-medicine" :title="$t('medicine_search')" 
            @hidden="close"
            ok-only 
            :ok-title="$t('accept')"
            size="lg">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Search -->
                    <b-col cols="12" md="12">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input autofocus v-model="search" class="d-inline-block _mr-1" :placeholder="$t('inventories.medicines.search_help')" 
                                @keyup.enter="searchMedicines"
                                autocomplete="off"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="searchMedicines">
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
                class="position-relative"
                :items="medicines"
                responsive
                stacked="sm"
                hover
                :fields="columns"
                primary-key="id"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
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

                <!-- Column: name -->
                <template #cell(name)="data">
                    <div @click="chooseItem(data.item)" class="text-wrap">
                        {{ data.item.name }}
                    </div>
                </template>

                <!-- Column: Sku -->
                <template #cell(sku)="data">
                    <span @click="chooseItem(data.item)">{{data.item.sku }}</span>
                </template>

                <template #cell(stock)="data">
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

                <!-- Column: Description -->
                <template #cell(description)="data">
                    <span  @click="chooseItem(data.item)">{{data.item.description}}</span>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="text-nowrap">
                        <b-button
                            @click="chooseItem(data.item)"
                            size="sm"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            >
                        {{$t('to_choose')}}
                        </b-button>
                    </div>
                </template>
            </b-table>
        </b-modal>
    </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable,BFormCheckbox, 
  BFormGroup, BFormInput,
  BModal, VBModal, BSidebar, BForm, BIcon, 
  BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormTextarea, BFormTags, BAvatar,
  BBadge, BTooltip, VBTooltip,
} from 'bootstrap-vue'
import router from "@/router";
import Ripple from 'vue-ripple-directive'
import { heightTransition } from '@core/mixins/ui/transition'

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import MedicineProvider from '@/providers/inventories/Medicines';
const MedicineResource = new MedicineProvider();

export default {
    name: 'SearchMedicines',
    directives: {
        Ripple,
        'b-modal': VBModal,
        'b-toggle': VBToggle,
    },
    components: {
        BRow,
        BSidebar,
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
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal, 
        VBModal,
        BForm,
        BIcon,
        BInputGroup,
        BInputGroupAppend, 
        BInputGroupPrepend,
        BFormTextarea,
        BFormTags,
        BBadge,
        BCardCode,
        BAvatar,
        BTooltip, VBTooltip,
        ToastificationContent,
    },
    mixins: [heightTransition],
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        warehouse: {
            type: Number,
            default: null,
        },
        isTransfer: {
            type: Boolean,
            default: false,
        },
    },   
    data () {
        return {
            loading: false,
            columns: [
                { key: "actions", label: ' ' },
                {
                    key: "name",
                    label: this.$t('inventories.medicines.medicine'),
                },
                {
                    key: "sku",
                    label: 'SKU',
                },
                {
                    key: "stock",
                    label: this.$t('inventories.medicines.current_stock'),
                },
                {
                    key: "description",
                    label: this.$t('inventories.medicines.description'),
                },
            ],
            medicines: [],
            search: null,
        }
    },
    methods: {
        chooseItem(item) {
            if(this.isTransfer) {
                if(item.current_stock <= 0) {
                    this.$toast({
						component: ToastificationContent,
						props: {
							title: this.$t('inventories.medicines.no_stock'),
							icon: "XIcon",
							variant: "danger",
						},
					});
                   
                    return
                }
            }

            this.$emit("selected", {...item});
            this.close();  
        },
        async searchMedicines () {
            this.loading = true;
            const query = {
                search: this.search,
                all: true,
            }
            
            const { data } = await MedicineResource.index(query);
            this.loading = false
            this.medicines = data.data.map(item => {
                return {
                    ...item,
                    current_stock: this.warehouse ? item.stocks.find(stock => stock.warehouse_id == this.warehouse).quantity : item.current_stock,
                }
            })
        },
        close() {
            this.$refs['modal-search-medicine'].hide()
            this.search = null
            this.$emit("close");
        },
        resolveVariantCurrentStock(item) {
            if (item.current_stock <= item.stock_min) {
                return { variant: 'danger', icon: 'InfoIcon' }
            }
            return { variant: 'primary', icon: 'CheckIcon' }
        },
        resolveVariantCurrentStock(item) {
            if (item.current_stock <= item.stock_min) {
                return { variant: 'danger', icon: 'InfoIcon' }
            }
            return { variant: 'primary', icon: 'CheckIcon' }
        },
    },
    watch: {
        active(value){
            if (value) {
                this.medicines = []
                this.searchQuery = null
                this.$refs['modal-search-medicine'].toggle()
            } else {
                this.close()
            }
        }
    }
}
</script>