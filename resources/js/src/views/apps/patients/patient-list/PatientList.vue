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

        <b-card>
            <b-row>
                <b-col cols="12" md="8">
                    <b-form-group :label="$t('filters.title')" label-cols="12" label-class="font-weight-bolder"
                        label-align="left">
                        <b-form-radio-group id="radio-group-1" v-model="filter_by" :options="optionsFilters"
                            :reduce="option => option.value" name="radio-options" class="groupselect"
                            @change="getPatients"></b-form-radio-group>
                    </b-form-group>
                </b-col>
            </b-row>            
        </b-card>
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6"
                        class="d-flex align-items-center justify-content-start mb-1 mb-md-0 col-md-6 col-12">
                        <label>{{ $t("show") }}</label>
                        <v-select v-model="perPage" :options="perPageOptions" :clearable="false"
                            class="select-size-sm per-page-selector d-inline-block mx-50" />
                        <b-button size="sm" v-if="canAccess('patients.create')" variant="primary"
                            @click="$router.push({ name: 'apps-patients-add', })">
                            <span class="text-nowrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input size="sm" v-model="searchQuery" class="d-inline-block _mr-1"
                                    :placeholder="$t('patients.search_options')" @keyup.enter="getPatients" />
                                <b-input-group-append>
                                <b-button size="sm" variant="primary" @click="getPatients">
                                    <feather-icon icon="SearchIcon" /> Buscar
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>


            <b-table ref="refPatientsListTable" class="position-relative table-small text-small small b-table-small" :items="patients" responsive :fields="columns"
                primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc" :current-page="currentPage" busy.sync="loading" small stacked="md">
                <!-- Empty -->
                <template slot="empty">
                    <div v-if="loading" class="d-flex justify-content-center mb-1">
                        <b-spinner style="width: 3rem; height: 3rem" class="mr-1" label="Loading..." variant="primary" />
                    </div>
                </template>

                <!-- Column: name -->
                <template #cell(name)="data">
                    <div v-if="canAccess('patients.show')">
                        <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.id }, }"
                            class="font-weight-bold d-block text-wrap">
                            {{ data.item.full_name }}
                        </b-link>
                    </div>
                    <div v-else>
                        {{ data.item.full_name }}
                    </div>
                    <small class="text-muted">{{ data.item.email }}<br>{{ $t('patients.document_type') }}
                        ({{ data.item.document_type }}): {{ data.item.rut }}</small>
                </template>

                <!-- Column: Debt -->
                <template #cell(total_debt)="data">
                    {{ formatPrice(data.item.total_cost) }}
                </template>

                <!-- Column: Paid -->
                <template #cell(total_paid)="data">
                    {{ formatPrice(data.item.total_paid) }}
                </template>

                <!-- Column: Balance -->
                <template #cell(total_balance)="data">
                    {{ formatPrice(data.item.total_debt) }}
                </template>

                <!-- Column: Status -->
                <template #cell(status)="data">
                    <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`" class="text-capitalize">
                        {{ resolveStatusTranslate(data.item.deleted_at) }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button v-if="!data.item.deleted_at && data.item.total_debt > 0 && canAccess('payments.index')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="btn-icon" size="sm"
                            @click="$router.push({ name: 'apps-payments-list', params: { patient_id: data.item.id, name: data.item.name } })">
                            <feather-icon icon="DollarSignIcon" />
                        </b-button>

                        <b-button v-if="canAccess('patients.show')" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="secondary" class="btn-icon" size="sm"
                            @click="$router.push({ name: 'apps-patients-view', params: { id: data.item.id } })">
                            <feather-icon icon="EyeIcon" />
                        </b-button>

                        <b-button v-if="!data.item.deleted_at && canAccess('patients.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="btn-icon" size="sm"
                            @click="$router.push({ name: 'apps-patients-edit', params: { id: data.item.id } })">
                            <feather-icon icon="EditIcon" />
                        </b-button>

                        <b-button v-if="!data.item.deleted_at && canAccess('patients.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon" size="sm"
                            @click="deletePatient(data.item)">
                            <feather-icon icon="Trash2Icon" />
                        </b-button>

                        <b-button v-if="data.item.deleted_at && canAccess('patients.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="btn-icon" size="sm"
                            @click="deletePatient(data.item)">
                            <feather-icon icon="CheckIcon" />
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="patients" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalPatient" :per-page="perPage" size="lg" />
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-card>
    </b-overlay>
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
    BFormGroup,
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
    BTooltip, VBTooltip,
    BFormCheckbox,
    BFormRadioGroup,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import PatientProvider from "@/providers/Patients";
const PatientResource = new PatientProvider();

export default {
    components: {
        BCard,
        BRow,
        BCol,
        BInputGroupPrepend,
        BInputGroupAppend,
        BInputGroup,
        BFormInput,
        BFormGroup,
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
        BTooltip,
        VBTooltip,
        BFormCheckbox,
        BFormRadioGroup,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            loading: false,
            avatarDefault: require("@/assets/images/avatar_default.png"),
            patients: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalPatient: 0,
            columns: [
                {
                    key: "name",
                    label: this.$t("patients.table.name"),
                },
                {
                    key: "phone",
                    label: this.$t("patients.table.phone"),
                },
                {
                    key: "total_debt",
                    label: this.$t("patients.table.debt"),
                },
                {
                    key: "total_paid",
                    label: this.$t("patients.table.paid"),
                },
                {
                    key: "total_balance",
                    label: this.$t("patients.table.balance"),
                },
                {
                    key: 'status',
                    label: this.$t("patients.table.status"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            optionsFilters: [
                { value: 'active', text: this.$t('filters.status.active') },
                { value: 'inactive', text: this.$t('filters.status.inactive') },
                { value: 'all', text: this.$t('filters.status.all') },
            ],
            filter_by: 'active',
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.patients);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalPatient,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getPatients();
        },
        perPage(value) {
            this.getPatients();
        },
    },
    async mounted() {
        await this.getPatients();
    },
    methods: {
        async getPatients() {

            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
                withTrashed: true,
                filter_by: this.filter_by,
            };

            this.loading = true;
            const { data } = await PatientResource.getList(query);
            this.loading = false;
            this.patients = data.data;
            this.totalPatient = data.total;
        },
        deletePatient(item) {
            this.$swal({
                title: item.deleted_at
                    ? this.$t("patient_confirm_active_title")
                    : this.$t("patient_confirm_inactive_title"),
                text: item.deleted_at
                    ? this.$t("patient_confirm_active_message")
                    : this.$t("patient_confirm_inactive_message"),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: item.deleted_at
                    ? this.$t("patient_confirm_active_button_ok")
                    : this.$t("patient_confirm_inactive_button_ok"),
                cancelButtonText: item.deleted_at
                    ? this.$t("patient_confirm_active_button_cancel")
                    : this.$t("patient_confirm_inactive_button_cancel"),
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
                        const { data } = await PatientResource.deletePatient(item.id);
                        this.loading = false;
                        if (data.success) {
                            this.success(data.message);
                            this.patients = this.patients.map(patient => {
                                if (patient.id === item.id) {
                                    return data.data
                                }
                                return patient;
                            });
                        } else {
                            this.danger(data.message);
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
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>

<style scoped>
@media (max-width: 576px) {
    .b-table-stacked-md .b-avatar {
        display: none;
    }
}

.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.custom-wrap {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
}
</style>
