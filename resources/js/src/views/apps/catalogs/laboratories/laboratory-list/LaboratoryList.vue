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
                        <v-select v-model="perPage" :options="perPageOptions" :clearable="false"
                            class="per-page-selector d-inline-block mx-50" />
                        <b-button v-if="canAccess('laboratories.create')" variant="primary"
                            @click="$router.push({ name: 'apps-laboratory-add', })">
                            <span class="text-nowrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1"
                                    :placeholder="$t('laboratories.search_options')" @keyup.enter="getLaboratories" />
                                <b-input-group-prepend>
                                    <b-button variant="primary" @click="getLaboratories">
                                        <feather-icon icon="SearchIcon" />
                                    </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table ref="refLaboratoriesListTable" class="position-relative" :items="laboratories" responsive
                :fields="columns" primary-key="id" :sort-by.sync="sortBy" show-empty
                :empty-text="$t('datatables.sZeroRecords')" :sort-desc.sync="sortDesc" :current-page="currentPage"
                busy.sync="loading" stacked="md">
                <!-- Empty -->
                <template slot="empty">
                    <div v-if="loading" class="d-flex justify-content-center mb-1">
                        <b-spinner style="width: 3rem; height: 3rem" class="mr-1" label="Loading..." variant="primary" />
                    </div>
                </template>

                <!-- Column: Status -->
                <template #cell(deleted_at)="data">
                    <b-badge pill :variant="`light-${resolveStatusBadge(data.item.is_active)}`" class="text-capitalize">
                        {{ resolveTranlateStatusActive(data.item.is_active) }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button v-if="data.item.is_active && canAccess('laboratories.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="btn-icon" size="sm"
                            @click="$router.push({ name: 'apps-laboratory-edit', params: { id: data.item.id } })">
                            <feather-icon icon="EditIcon" />
                        </b-button>

                        <b-button v-if="data.item.is_active && canAccess('laboratories.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon" size="sm"
                            @click="deleteLaboratory(data.item)">
                            <feather-icon icon="Trash2Icon" />
                        </b-button>

                        <b-button v-if="!data.item.is_active && canAccess('laboratories.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="btn-icon" size="sm"
                            @click="deleteLaboratory(data.item)">
                            <feather-icon icon="CheckIcon" />
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="laboratories" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalLaboratories" :per-page="perPage"
                                size="lg" />
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
import LaboratoryProvider from "@/providers/Laboratories";
const LaboratoryResource = new LaboratoryProvider();

export default {
    name: 'LaboratoryList',
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
            laboratories: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalLaboratories: 0,
            columns: [
                {
                    key: "name",
                    label: this.$t("laboratories.table_name"),
                },
                {
                    key: "rut",
                    label: 'Documento',
                },
                {
                    key: "phone",
                    label: this.$t("laboratories.table_phone"),
                },
                {
                    key: "address",
                    label: this.$t("laboratories.table_address"),
                },
                {
                    key: "deleted_at",
                    label: this.$t("laboratories.table_state"),
                },
                {
                    key: "updated_at",
                    label: this.$t("laboratories.table_updated_at"),
                },
                { key: "actions", label: this.$t("actions") },
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
            const localItemsCount = _.size(this.actions);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalAction,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getLaboratories();
        },
        perPage(value) {
            this.getLaboratories();
        },
    },
    async mounted() {
        await this.getLaboratories();
    },
    methods: {
        async getLaboratories() {

            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };

            this.loading = true;
            const { data } = await LaboratoryResource.getList(query);
            this.loading = false;

            this.laboratories = data.data;
            this.totalLaboratories = data.total;

        },
        deleteLaboratory(item) {
            this.$swal({
                title: this.$t("are_you_sure"),
                text: item.is_active
                    ? this.$t("you_wont_be_able_to_revert_this")
                    : this.$t("you_will_be_able_to_revert_this"),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t("yes_continue"),
                cancelButtonText: this.$t("cancel"),
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
                        const { data } = await LaboratoryResource.deleteLaboratory(item.id)
                        this.loading = false
                        if (data.success) {
                            this.success(data.message)
                            this.laboratories = this.laboratories.map(laboratory => {
                                if (laboratory.id === item.id) {
                                    return data.data
                                }
                                return laboratory
                            })
                        } else {
                            this.danger(data.message)
                        }
                    } catch (e) {
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
</style>
