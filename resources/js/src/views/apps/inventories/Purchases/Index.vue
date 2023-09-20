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
                        <b-button v-if="canAccess('inventories.purchases.create')" variant="primary"
                            @click="$router.push({name: 'apps-inventories-purchases-add',})">
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="search" class="d-inline-block _mr-1" :placeholder="$t('inventories.purchases.search_help')"
                                @keyup.enter="getPurchases"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getPurchases">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refPurchasesListTable"
                class="position-relative"
                :items="purchases"
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

                <template #cell(purchase_date)="data">
                    {{formatDate(data.item.purchase_date)}}
                </template>

                <template #cell(supplier_id)="data">
                    {{ data.item.supplier.name }}
                </template>

                <template #cell(warehouse_id)="data">
                    {{  data.item.warehouse.name }}
                </template>

                <template #cell(total)="data">
                    {{  formatPrice(data.item.total) }}
                </template>

                <template #cell(status)="data">                    
                    <b-badge pill :variant="`${data.item.status=== 'pending' ? 'warning' : 'success'}`" class="text-capitalize">
                        {{ $t(`inventories.purchases.status.${data.item.status}`) }}
                    </b-badge>
                </template>

                <template #cell(created_at)="data">
                    {{dateTimeFormat(data.item.created_at)}}
                </template>

                <template #cell(updated_at)="data">
                    {{dateTimeFormat(data.item.updated_at)}}
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
                            v-if="!data.item.deleted_at && canAccess('inventories.purchases.update') && data.item.status === 'pending'"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="markedAsReceived(data.item.id)">
                            <feather-icon icon="CheckSquareIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.purchases.edit') && data.item.status === 'pending'"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="$router.push({ name: 'apps-inventories-purchases-edit', params: {id: data.item.id}})">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.purchases.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deletePurchase(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('inventories.purchases.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deletePurchase(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="purchases.length" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalPurchases" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>       
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
import store from '@/store'

import PurchaseProvider from '@/providers/inventories/Purchases';
const PurchaseResource = new PurchaseProvider()


export default {
    name: 'Purchases',
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
                    key: "purchase_date",
                    label: this.$t('inventories.purchases.table.purchase_date'),
                },
                {
                    key: "supplier_id",
                    label: this.$t('inventories.purchases.table.supplier'),
                },
                {
                    key: "warehouse_id",
                    label: this.$t('inventories.purchases.table.warehouse'),
                },
                {
                    key: "reference",
                    label: this.$t('inventories.purchases.table.reference'),
                },
                {
                    key: "total",
                    label: this.$t('inventories.purchases.table.total'),
                },
                {
                    key: "status",
                    label: this.$t('inventories.purchases.table.status'),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            purchases: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalPurchases: 0,
            sortBy: "name",
            sortDesc: false,
            search: null,
            from: 0,
            to: 0,
            loading: false,
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.purchases);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalPurchases,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getPurchases();
        },
        perPage(value) {
            this.getPurchases();
        },
    },
    async mounted() {
        await this.getPurchases();
    },
    methods: {
        async getPurchases() {
            this.loading = true
            const { data } = await PurchaseResource.index({
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                search: this.search,
            })
            this.loading = false

            this.purchases = data.data.data;
            this.totalPurchases = data.data.total;
        },
        deletePurchase(purchase) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: this.$t('inventories.purchases.deleted_text'),
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
                        const { data } = await PurchaseResource.destroy(purchase.id)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            this.purchases.splice(this.purchases.indexOf(purchase), 1)
                        } else {
                            this.$swal.showValidationMessage(
                                `Request failed: ${data.message}`
                            );
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
        markedAsReceived(id) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: this.$t('inventories.purchases.marked_text'),
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
                        const { data } = await PurchaseResource.markedAsReceived(id)
                        console.log(data)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            
                            this.purchases = this.purchases.map(purchase => {
                                if (purchase.id === data.data.id) {
                                    return data.data;
                                }
                                return purchase;
                            });
                        } else {
                            this.$swal.showValidationMessage(
                                `Request failed: ${data.message}`
                            );
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
        }
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>