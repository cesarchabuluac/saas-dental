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
                        <b-button size="sm" v-if="canAccess('actions.create')" variant="primary" @click="$router.push({name: 'actions-add'})">
                            <!-- <feather-icon icon="PlusIcon" /> -->
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <!-- <b-input-group>
                                <b-form-input size="sm" v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('clinical_actions.search_options')"
                                @keyup.enter="getActions"/>
                                <b-input-group-prepend>
                                <b-button size="sm" variant="primary" @click="getActions">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group> -->
                            <b-input-group>
                                <b-form-input size="sm" v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('clinical_actions.search_options')"
                                @keyup.enter="getActions"/>
                                <b-input-group-append>
                                <b-button size="sm" variant="primary" @click="getActions">
                                    <feather-icon icon="SearchIcon" /> Buscar
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refActionsListTable"
                class="position-relative table-small text-small small b-table-small"
                :items="actions.data"
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
                    <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`" class="text-capitalize">
                        {{ resolveStatusTranslate(data.item.deleted_at) }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button
                            v-if="!data.item.deleted_at && canAccess('actions.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_edit')}`"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="$router.push({name: 'actions-edit',params: { id: data.item.id }})">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('actions.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_destroy')}`"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteAction(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('actions.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_restore')}`"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteAction(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="actions" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="actions.total" :per-page="perPage" size="lg"/>
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
import ActionProvider from "@/providers/Actions";
const ActionResource = new ActionProvider();

export default {
    name: 'ActionList',
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
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            actions: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalAction: 0,
            columns: [
                {
                    key: "name",
                    label: this.$t("name"),
                },
                {
                    key: "group",
                    label: this.$t("group"),
                },
                {
                    key: "area",
                    label: this.$t("area"),
                },
                {
                    key: "cost",
                    label: this.$t("cost"),
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
            loading: false,
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.actions.data);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.actions.total,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getActions();
        },
        perPage(value) {
            this.getActions();
        },
    },
    async mounted() {
        await this.getActions();
    },
    methods: {
        async getActions() {
            
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };

            this.loading = true;
            const { data } = await ActionResource.index(query);
            this.loading = false;
            this.actions = data;
            // console.log(this.actions)
            // this.totalAction = data.total;
        },
        deleteAction(item) {
            this.$swal({
                title: this.$t("are_you_sure"),
                text: item.deleted_at
                    ? this.$t("you_will_be_able_to_revert_this")
                    : this.$t("you_wont_be_able_to_revert_this"),
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
                        const { data } = await ActionResource.deleteAction(item.id);
                        this.loading = false;
                        if (data.success) {
                            this.success(data.message)
                            this.actions = this.actions.map(action => {
                                if (action.id === item.id) {
                                    return data.data
                                }
                                return action;
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
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>
