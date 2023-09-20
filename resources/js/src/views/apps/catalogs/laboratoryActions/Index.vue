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
                        <!-- <label>{{ $t("entries") }}</label> -->
                        <b-button v-if="canAccess('laboratory_actions.create')" variant="primary"
                            @click="$router.push({name: 'apps-laboratory-actions-add',})">
                            <span class="text-nowrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('laboratory_actions.search_options')" 
                                @keyup.enter="getLaboratoryActions"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getLaboratoryActions">
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
                :items="actions"
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
                            v-if="!data.item.deleted_at && canAccess('laboratory_actions.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_edit')}`"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="$router.push({name: 'apps-laboratory-actions-edit',params: { id: data.item.id }})">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('laboratory_actions.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_destroy')}`"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteAction(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('laboratory_actions.active')"
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
                            <b-pagination v-model="currentPage" :total-rows="totalAction" :per-page="perPage" size="lg"/>
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
import LaboratoryActionProvider from "@/providers/LaboratoryActions";
const LaboratoryActionResource = new LaboratoryActionProvider();

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
            this.getLaboratoryActions();
        },
        perPage(value) {
            this.getLaboratoryActions();
        },
    },
    async mounted() {
        await this.getLaboratoryActions();
    },
    methods: {
        async getLaboratoryActions() {
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };

            this.loading = true;
            const { data } = await LaboratoryActionResource.getList(query);
            this.loading = false;
            this.actions = data.data;
            this.totalAction = data.total;
           
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

                        this.loading = true 
                        const { data } = await LaboratoryActionResource.deleteLaboratoryAction(item.id)
                        this.loading = false

                        if (data.success) {
                            this.success(data.message)
                            this.actions = this.actions.map(action => {
                                if (action.id === item.id) {
                                    return data.data
                                }
                                return action;
                            });
                        }

                    }catch(e) {
                        this.loading = false
                        this.handleResponseErrors(e)
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
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
