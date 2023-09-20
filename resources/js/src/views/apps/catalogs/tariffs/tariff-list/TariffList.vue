<template>
    <div>
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t("locale.show") }}</label>
                        <v-select
                            v-model="perPage"
                            :options="perPageOptions"
                            :clearable="false"
                            class="per-page-selector d-inline-block mx-50"
                        />
                        <!-- <label>{{ $t("locale.entries") }}</label> -->
                        <b-button v-if="canAccess('tariffs.create')" variant="primary"
                            @click="$router.push({name: 'apps-tariff-add',})">
                            <span class="text-nowrap">
                                {{ $t("locale.add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('locale.tariff_search_options')"
                                @keyup.enter="getTariffs"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getTariffs">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refActionsListTable"
                class="position-relative"
                :items="tariffs"
                responsive
                :fields="columns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc"
                :current-page="currentPage"
                busy.sync="loading"
                stacked="md"
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

                <!-- Column: Status -->
                <template #cell(deleted_at)="data">
                    <b-badge pill :variant="`light-${resolveActionStatusVariant(data.item.deleted_at)}`" class="text-capitalize">
                        {{ resolveActionStatusTranslate(data.item.deleted_at) }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button
                            v-if="!data.item.deleted_at && canAccess('tariffs.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="$router.push({name: 'apps-tariff-edit',params: { id: data.item.id }})">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('tariffs.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteTariff(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('tariffs.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteTariff(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="tariffs" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalTariff" :per-page="perPage" size="lg"/>
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
    BTooltip, VBTooltip
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import TariffProvider from "@/providers/Tariffs";
const TariffResource = new TariffProvider();

export default {
    name: 'TariffList',
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
        VBTooltip
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            tariffs: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalTariff: 0,
            columns: [
                {
                    key: "name",
                    label: this.$t("locale.tariff_table_name"),
                },
                {
                    key: "laboratory",
                    label: this.$t("locale.tariff_table_laboratory"),
                },
                {
                    key: "price",
                    label: this.$t("locale.tariff_table_price"),
                },
                {
                    key: "deleted_at",
                    label: this.$t("locale.tariff_table_state"),
                },
                {
                    key: "updated_at",
                    label: this.$t("locale.tariff_table_updated_at"),
                },
                { key: "actions", label: this.$t("locale.actions") },
            ],
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            loading: false,
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.tariffs);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalTariff,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getTariffs();
        },
        perPage(value) {
            this.getTariffs();
        },
    },
    async mounted() {
        await this.getTariffs();
    },
    methods: {
        async getTariffs() {
            
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };
            this.loading = true;
            const { data } = await TariffResource.getList(query);
            this.loading = false;
            this.tariffs = data.data;
            this.totalTariff = data.total;

        },
        deleteTariff(item) {
            this.$swal({
                title: item.deleted_at
                    ? this.$t("locale.tariff_confirm_active_title")
                    : this.$t("locale.tariff_confirm_inactive_title"),
                text: item.deleted_at
                    ? this.$t("locale.tariff_confirm_active_message")
                    : this.$t(
                          "locale.tariff_confirm_inactive_message"
                      ),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: item.deleted_at
                    ? this.$t(
                          "locale.tariff_confirm_active_button_ok"
                      )
                    : this.$t(
                          "locale.tariff_confirm_inactive_button_ok"
                      ),
                cancelButtonText: item.deleted_at
                    ? this.$t(
                          "locale.tariff_confirm_active_button_cancel"
                      )
                    : this.$t(
                          "locale.tariff_confirm_inactive_button_cancel"
                      ),
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
                        const { data } = await TariffResource.deleteTariff(item.id)
                        this.loading = false
                        if(data.success) {
                            this.success(data.message)
                            this.tariffs = this.tariffs.map(tariff => {
                                if (tariff.id === item.id) {
                                    return data.data
                                }
                                return tariff;
                            });
                        } else {
                            this.danger(data.message)
                        }
                    }catch(e) {
                        this.loading = false;
                        this.handleResponseErrors(e);
                        this.$swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        resolveActionStatusVariant(status) {
            if (_.isEmpty(status)) {
                return "success";
            }
            return "secondary";
        },
        resolveActionStatusTranslate(status) {
            if (_.isEmpty(status)) {
                return this.translate("locale.active");
            }
            return this.translate("locale.inactive");
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
@import "~@resource/scss/vue/libs/vue-sweetalert.scss";
@import "~@resource/scss/vue/libs/vue-select.scss";
</style>
