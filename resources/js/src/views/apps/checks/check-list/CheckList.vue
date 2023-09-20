<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t("show") }}</label>
                        <v-select v-model="perPage" :options="perPageOptions" :clearable="false"
                            class="per-page-selector d-inline-block mx-50" />
                        <label>{{ $t("entries") }}</label>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1"
                                    :placeholder="$t('checks.input_search')" @keyup.enter="getChecks" />
                                <b-input-group-prepend>
                                    <b-button variant="primary" @click="getChecks">
                                        <feather-icon icon="SearchIcon" />
                                    </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table ref="refChecksListTable" class="position-relative" :items="checks" responsive :fields="columns"
                primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc" :current-page="currentPage" busy.sync="loading" stacked="md">

                <!-- Column: payment_id -->
                <template #cell(payment_id)="data">
                    <b-link
                        :to="{
                            name: 'payments-budgets-preview',
                            params: { id: data.item.payment.budget_id, payment_id: data.item.payment_id, model: 'apps-checks-list' }
                        }"
                        class="font-weight-bold">
                        #{{ data.item.payment.id }}
                    </b-link>
                </template>

                <!-- Column: created_at -->
                <template #cell(created_at)="data">
                    {{ dateFormat(data.item.created_at) }}
                </template>

                <!-- Column: date -->
                <template #cell(date)="data">
                    {{ dateFormat(data.item.date) }}
                </template>

                <!-- Column: Rerence -->
                <template #cell(reference)="data">
                    <p class="card-text mb-25">
                        <label><strong>{{ $t('checks.table_reference') }}:</strong> {{ data.item.reference }}</label><br>
                        <label><strong>{{ $t('checks.table_bank') }}:</strong> {{ data.item.bank }}</label><br>
                        <label><strong>{{ $t('checks.table_serie') }}:</strong> {{ data.item.serie }}</label>
                    </p>
                </template>

                <!-- Column: amount -->
                <template #cell(amount)="data">
                    {{ formatPrice(data.item.payment.amount) }}
                </template>

                <!-- Column: Status -->
                <template #cell(charged)="data">
                    <b-badge pill :variant="`${data.item.charged ? 'success' : 'danger'}`" class="text-capitalize">
                        {{ formatActive(data.item.charged) }}
                    </b-badge>
                </template>

                <!-- Column: expiration -->
                <template #cell(expiration)="data">
                    <span v-if="!data.item.charged" class="text-wrap">{{ data.item.past_due }}</span>
                    <span v-else>---</span>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <b-button v-if="!data.item.charged && canAccess('checks.apply')"
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="btn-icon" size="sm"
                        @click="charged(data.item)" v-b-tooltip.hover.right="`${$t('checks.button_tooltip_apply')}`">
                        <feather-icon icon="CheckSquareIcon" />
                    </b-button>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="checks" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalCheck" :per-page="perPage" size="lg" />
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-card>
    </b-overlay>
</template>

<script>
import _ from "lodash";
import * as moment from "moment";
import {
    BCard,
    BRow,
    BCol,
    BForm,
    BInputGroupPrepend,
    BInputGroupAppend,
    BInputGroup,
    BFormGroup,
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
    BOverlay,
    BSidebar,
    BFormInvalidFeedback,
    BFormTextarea,
    BTooltip,
    VBTooltip,
} from "bootstrap-vue";

import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import CheckProvider from "@/providers/Checks";
const CheckResource = new CheckProvider();
export default {
    components: {
        BCard,
        BRow,
        BCol,
        BForm,
        BInputGroupPrepend,
        BInputGroupAppend,
        BInputGroup,
        BFormGroup,
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
        BOverlay,
        vSelect,
        BSidebar,
        BFormInvalidFeedback,
        BFormTextarea,
        BTooltip, VBTooltip
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            checks: [],
            check: {},
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalCheck: 0,
            columns: [
                {
                    key: "payment_id",
                    label: this.$t("checks.table_payment_id"),
                },
                {
                    key: "created_at",
                    label: this.$t("checks.table_created_at"),
                },
                {
                    key: "date",
                    label: this.$t("checks.table_collection_date"),
                },
                {
                    key: "reference",
                    label: this.$t("checks.table_reference"),
                },
                {
                    key: "amount",
                    label: this.$t("checks.table_amount"),
                },
                {
                    key: "charged",
                    label: this.$t("checks.table_charged"),
                },
                {
                    key: "expiration",
                    label: this.$t("checks.table_expiration"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            sortBy: "date",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            loading: false,
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.checks);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalCheck,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getChecks();
        },
        perPage(value) {
            this.getChecks();
        },
    },
    async mounted() {
        await this.getChecks();
    },
    methods: {
        async getChecks() {
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy === 'amount' ? 'date' : this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };
            this.loading = true;
            const { data } = await CheckResource.getList(query);
            this.loading = false;
            this.checks = data.data;
            this.totalCheck = data.total;
        },
        charged(item) {
            this.check = { ...item }

            this.$swal({
                title: this.$t('checks.confirm_charge_title'),
                text: this.$t('checks.confirm_charge_help'),
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
                        this.loading = true
                        const { data } = await CheckResource.store({ id: this.check.id })
                        this.loading = false
                        if (data.success) {
                            this.success(data.message)
                            this.checks = this.checks.map(check => {
                                if (check.id === this.check.id) {
                                    return data.data
                                }
                                return check
                            })
                        } else {
                            this.danger(data.message)
                        }
                    } catch (e) {
                        this.loading = false
                        this.handleResponseErrors(e)
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            })

        },
    },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
}
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
