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
                        <b-button v-if="canAccess('inventories.transfers.create')" variant="primary"
                            @click="$router.push({name: 'apps-inventories-transfers-add'})">
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="search" class="d-inline-block _mr-1" :placeholder="$t('inventories.transfers.search_help')"
                                @keyup.enter="getTransfers"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getTransfers">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refTransfersListTable"
                class="position-relative"
                :items="transfers"
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

                <template #cell(transfer_date)="data">
                    {{formatDate(data.item.transfer_date)}}
                </template>

                <template #cell(from_warehouse_id)="data">
                    {{  data.item.from_warehouse.name }}
                </template>

                 <template #cell(to_warehouse_id)="data">
                    {{  data.item.to_warehouse.name }}
                </template>

                <template #cell(created_at)="data">
                    {{formatDate(data.item.created_at)}}
                </template>

                <template #cell(updated_at)="data">
                    {{formatDate(data.item.updated_at)}}
                </template>

                 <!-- Column: Estado -->
                <template #cell(status)="data">
                    <!-- <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`" class="text-capitalize">
                        {{ resolveStatusTranslate(data.item.deleted_at) }}
                    </b-badge> -->
                    <span v-html="data.item.status_label"></span>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.transfers.show')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="$router.push({ name: 'apps-inventories-transfers-show', params: {id: data.item.id}})">
                            <feather-icon icon="EyeIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('inventories.transfers.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteTransfer(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>
                       
                    </div>
                </template>

               
            </b-table>

            <!-- Pagination -->
            <div v-if="transfers.length" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalTransfers" :per-page="perPage" size="lg"/>
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

import TransferProvider from '@/providers/inventories/Transfers';
const TransferResource = new TransferProvider()


export default {
    name: 'TranfersList',
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
                    key: "transfer_date",
                    label: this.$t('inventories.transfers.table.date'),
                },
                {
                    key: "from_warehouse_id",
                    label: this.$t('inventories.transfers.table.from_warehouse'),
                },
                {
                    key: "to_warehouse_id",
                    label: this.$t('inventories.transfers.table.to_warehouse'),
                },
                {
                    key: "reference",
                    label: this.$t('inventories.transfers.table.reference'),
                },
                {
                    key: "note",
                    label: this.$t('inventories.transfers.table.comments'),
                },
                {
                    key: "status",
                    label: this.$t('inventories.transfers.table.status'),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            transfers: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalTransfers: 0,
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
            const localItemsCount = _.size(this.transfers);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalTransfers,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getTransfers();
        },
        perPage(value) {
            this.getTransfers();
        },
    },
    async mounted() {
        await this.getTransfers();
    },
    methods: {
        async getTransfers() {
            this.loading = true
            const { data } = await TransferResource.index({
                page: this.currentPage,
                perPage: this.perPage,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                search: this.search,
            })
            this.loading = false

            this.transfers = data.data.data;
            this.totalTransfers = data.data.total;
        },
        deleteTransfer(transfer) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: this.$t('inventories.transfers.deleted_text'),
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
                        const { data } = await TransferResource.destroy(transfer.id)
                        this.loading = false;
                        if(data.success) {
                            this.success(data.message)
                            this.transfers.splice(this.transfers.indexOf(transfer), 1)
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
    },
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>