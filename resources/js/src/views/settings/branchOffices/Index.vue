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
                            class="per-page-selector d-inline-block mx-50 select-size-sm"
                        />
                        <!-- <label>{{ $t("entries") }}</label> -->
                        <b-button size="sm" v-if="canAccess('branch-offices.create')" variant="primary" @click="$router.push({name: 'settings-branch-offices-add',})">
                            <span class="text-nowrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <!-- <b-input-group>
                                <b-form-input size="sm" v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('branch_offices.search_options')"
                                @keyup.enter="getBranchs"/>
                                <b-input-group-prepend>
                                <b-button size="sm" variant="primary" @click="getBranchs">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group> -->
                            <b-input-group>
                                <b-form-input size="sm" v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('branch_offices.search_options')"
                                @keyup.enter="getBranchs"/>
                                <b-input-group-append>
                                <b-button size="sm" variant="primary" @click="getBranchs">
                                    <feather-icon icon="SearchIcon" /> Buscar
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refBranchListTable"
                class="position-relative table-small b-table-small small text-small"
                :items="branchs"
                responsive
                :fields="columns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc"
                :current-page="currentPage"
                :busy.sync="loading"
                stacked="md"
                small
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
                    <b-badge pill :variant="`light-${resolveStatusBadge(data.item.is_active)}`" class="text-capitalize">
                        {{ resolveTranlateStatusActive(data.item.is_active) }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button
                            v-if="data.item.is_active && canAccess('branch-offices.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="$router.push({name: 'settings-branch-offices-edit',params: { id: data.item.id }})">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.is_active && canAccess('branch-offices.destroy') && data.item.id !== 1"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteBranch(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.is_active && canAccess('branch-offices.active') && data.item.id !== 1"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteBranch(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="totalBranch > 10" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalBranch" :per-page="perPage" size="lg"/>
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
import BranchProvider from "@/providers/BranchOffices";
const BranchResource = new BranchProvider();

export default {
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
        BTooltip, VBTooltip
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            branchs: [],
            branch: {},
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalBranch: 0,
            columns: [
                {
                    key: "name",
                    label: this.$t("name"),
                },
                {
                    key: "phone",
                    label: this.$t("phone"),
                },
                {
                    key: "email",
                    label: this.$t("email"),
                },
                {
                    key: "address",
                    label: this.$t("address"),
                },
                {
                    key: "deleted_at",
                    label: this.$t("status"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            isAddNewBranchSidebarActive: false,
            roleOptions: [],
            planOptions: [],
            refetchData: [],
            isEdit: false,
            loading: false,
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.branchs);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalBranch,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getBranchs();
        },
        perPage(value) {
            this.getBranchs();
        },
    },
    async mounted() {
        await this.getBranchs();
    },
    methods: {
        async getBranchs() {
            
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
                includeTrashed: true,
            };

            try {
                this.loading = true;
                const { data } = await BranchResource.index(query);
                if (data.success) {
                    this.branchs = data.data.data;
                    this.totalBranch = data.data.total;
                } else {
                    this.danger(data.message);
                }            
            }catch(e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }finally {
                this.loading = false;
            }
        },
        deleteBranch(item) {
            this.loading = true;
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
                        this.loading = true;
                        const { data } = await BranchResource.deleteBranch(item.id);
                        this.loading = false;

                        if (data.success) {
                            this.success(data.message)
                            this.branchs = this.branchs.map((branch) => {
                                if (branch.id === item.id) {
                                    return data.data
                                }
                                return branch;
                            });
                        } else {
                            this.danger(data.message)
                        }

                    } catch (error) {
                        this.loading = false;
                        this.handleResponseErrors(error);
                        this.$swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },          
        showMessage(data) {
            if (data.success) {
                this.success(
                    data.message,
                    this.translate("branch"),
                    "UserIcon"
                );
            } else {
                this.danger(
                    data.message,
                    this.translate("branch"),
                    "UserIcon"
                );
            }
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
