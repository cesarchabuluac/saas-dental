<template>
    <div>
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t('table_show') }}</label>
                        <v-select
                            v-model="perPage"
                            :options="perPageOptions"
                            :clearable="false"
                            class="per-page-selector d-inline-block mx-50 select-size-sm"
                        />
                        <b-button v-if="canAccess('plans.create')" size="sm" variant="primary" @click="$router.push({name: 'plans-add'})">                            
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" size="sm" class="d-inline-block _mr-1" :placeholder="$t('search')"
                                @keyup.enter="getPlans"/>
                                <b-input-group-append>
                                <b-button size="sm" variant="primary" @click="getPlans">
                                    <feather-icon icon="SearchIcon" /> Buscar
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refPlanListTable"
                class="position-relative table-small small"
                :items="plans"
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

               <!-- Column: User -->
               <template #cell(image)="data">
                    <b-media vertical-align="center">
                        <template #aside>
                            <b-avatar size="32" :src="data.item.image"/>
                        </template>
                    </b-media>
                </template>

                <!-- Column: Name -->
                <template #cell(name)="data">
                    {{  data.item.name }}<br>
                    <small>{{data.item.description}}</small>
                </template>

                <!-- Column: Currency -->
                <template #cell(currency)="data">
                    {{data.item.currency.name}}                    
                </template>

                <!-- Column: Inerval -->
                <template #cell(interval)="data">
                    {{ $t(`intervals.${data.item.interval}`) }}
                </template>

                <!-- Column: Is popular -->
                <template #cell(is_popular)="data">
                    <b-badge pill :variant="`light-${resolveStatusActive(data.item.is_popular)}`" class="text-capitalize">
                        {{ formatActive(data.item.is_popular) }}
                    </b-badge>
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
                            v-if="!data.item.deleted_at && canAccess('plans.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="$router.push({name: 'plans-edit',params: { id: data.item.id }})">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('plans.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deletePlan(data.item)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('plans.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deletePlan(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="plans" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalPlans" :per-page="perPage" size="lg"/>
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
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import PlansProvider from "@/providers/Plans";
const PlansResource = new PlansProvider();

export default {
    name: 'ListPlans',
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
            loading: false,
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalPlans: 0,
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            columns: [
                {
                    key: "image",
                    label: this.$t("image"),
                },
                {
                    key: "name",
                    label: this.$t("name"),
                },
                {
                    key: "amount",
                    label: this.$t("amount"),
                },
                {
                    key: "currency",
                    label: this.$t("currency"),
                },
                {
                    key: "interval",
                    label: this.$t("interval"),
                },
                {
                    key: "is_popular",
                    label: this.$t("plans.popular"),
                },
                {
                    key: "deleted_at",
                    label: this.$t("status"),
                },                
                { key: "actions", label: this.$t("actions") },
            ],
            plans: [],
            plan: {},
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.plans);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalPlans,
            };
        },
    },
    watch: {
        currentPage() {
            this.getPlans();
        },
        perPage() {
            this.getPlans();
        },
    },
    async mounted() {
        await this.getPlans()
    },
    methods: {
        async getPlans () {
            this.loading = true
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };
            const { data } = await PlansResource.index(query)
            this.loading = false
            this.plans = data.data
            this.totalPlans = data.total
        },
        deletePlan (item) {
            this.loading = true;
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
                        const { data } = await PlansResource.destroy(item.id);
                        this.loading = false;
                        if (data.success) {
                            this.success(data.message)
                            this.plans = this.plans.filter(plan => plan.id !== item.id)
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
        }
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