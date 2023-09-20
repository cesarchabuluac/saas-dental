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
                <!-- Table Filter status -->
                <b-row>
                    <b-col cols="12" md="6">
                        <b-form-group label-cols="12" label-class="font-weight-bolder" label-align="left"
                            :label="$t('filters.title')">
                            <b-form-radio-group id="radio-group-1" v-model="statusFilter" :options="statusOptions"
                                class="groupselect mt-2" name="radio-options" label="text"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </div>

            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0 ">
                        <label>{{ $t("show") }}</label>
                        <v-select v-model="perPage" :options="perPageOptions" :clearable="false"
                            class="per-page-selector d-inline-block mx-50" />
                        <b-button v-if="canAccess('orders.create')" variant="primary"
                            @click="$router.push({ name: 'apps-work-orders-add', })">
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
                                    :placeholder="$t('work_orders.search_options')" @keyup.enter="getWorkOrders()" />
                                <b-input-group-prepend>
                                    <b-button variant="primary" @click="getWorkOrders()">
                                        <feather-icon icon="SearchIcon" />
                                    </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table ref="refWorkOrderListTable" class="position-relative" :items="workorders" responsive striped hover
                :fields="columns" primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc" :current-page="currentPage" :busy.sync="loading" stacked="md">

                <!-- Patient -->
                <template #cell(patient)="data">
                    <template>
                        <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.patient.id } }" class="text-wrap">
                            <b-media vertical-align="center">
                                <template #aside>
                                    <b-avatar size="32"
                                        :src="data.item.patient.has_media ? data.item.patient.media[0].thumb : null"
                                        :text="avatarText(data.item.patient.name)" :variant="`light-primary`" />
                                </template>
                                <span v-if="!data.item.patient.is_active"
                                    class="font-weight-bold text-danger d-block text-wrap text-decoration-line-through">
                                    {{ data.item.patient.full_name }}
                                </span>
                                <span v-else class="font-weight-bold d-block text-wrap">
                                    {{ data.item.patient.full_name }}
                                </span>
                                <small class="text-muted">{{ data.item.patient.email
                                }}<br>{{ data.item.patient.document_type }}: {{ data.item.patient.rut }}</small>
                            </b-media>
                        </b-link>
                    </template>
                </template>

                <!-- Branch -->
                <template #cell(branch)="data">
                    <div v-if="!data.item.branch.is_active" class="text-danger text-decoration-line-through">
                        {{ data.item.branch.name }}<br>
                    </div>
                    <div v-else>
                        {{ data.item.branch.name }}<br>
                    </div>
                    <small v-if="data.item.branch.phone" class="text-muted">
                        <b-link :href="`tel:${data.item.branch.phone}`">
                            <feather-icon icon="PhoneCallIcon" class="cursor-pointer" />
                            {{ data.item.branch.phone }}
                        </b-link><br>
                        {{ data.item.branch.address }}<br>
                        {{ data.item.branch.city }}, {{ data.item.branch.state }}, {{ data.item.branch.country }}
                    </small>
                </template>

                <!-- Laboratory -->
                <template #cell(laboratory)="data">
                    <div v-if="!data.item.laboratory.is_active" class="text-danger text-decoration-line-through">
                        {{ data.item.laboratory.name }}<br>
                    </div>
                    <div v-else>
                        {{ data.item.laboratory.name }}<br>
                    </div>
                    <small class="text-muted">
                        <b-link :href="`tel:${data.item.laboratory.phone}`">
                            <feather-icon icon="PhoneCallIcon" class="cursor-pointer" />
                            {{ data.item.laboratory.phone }}
                        </b-link><br>
                        {{ data.item.laboratory.document_type }}: {{ data.item.laboratory.rut }}
                    </small>
                </template>

                <!-- professional -->
                <template #cell(professional)="data">
                    {{ data.item.professional.name }}<br>
                    <span class="font-weight-bold d-block text-wrap">
                        {{ data.item.professional.email }}
                    </span>
                </template>

                <!-- Column: work todo -->
                <template #cell(work_todo)="data">
                    {{ data.item.label_todo }}
                </template>

                <!-- Column: application_date -->
                <template #cell(application_date)="data">
                    {{ dateFormat(data.item.application_date) }}
                </template>

                <!-- Column: delivery_date -->
                <template #cell(delivery_date)="data">
                    {{ dateFormat(data.item.delivery_date) }}
                </template>

                <!-- Column: status -->
                <template #cell(status)="data">
                    <b-badge pill :variant="`light-${resolveStatusVariant(data.item.status)}`" class="text-capitalize">
                        {{ data.item.status_lang }}
                    </b-badge>
                </template>

                <template #cell(actions)="data">

                    <div class="demo-inline-spacing">
                        <b-button v-if="data.item.status === 'En proceso'" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning" class="btn-icon" size="sm" @click="changeStatus(data.item, 'Enviado')">
                            <feather-icon icon="CheckCircleIcon" />
                        </b-button>

                        <b-button v-if="data.item.status === 'Enviado'" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="success" class="btn-icon" size="sm" @click="changeStatus(data.item, 'Recibido')">
                            <feather-icon icon="CheckSquareIcon" />
                        </b-button>

                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="btn-icon" size="sm"
                            @click="$router.push({ name: 'apps-work-orders-show', params: { id: data.item.id } })">
                            <feather-icon icon="EyeIcon" />
                        </b-button>

                        <!-- Dropdown -->
                        <b-dropdown v-if="!data.item.deleted_at" variant="link" toggle-class="p-0" no-caret :right="true">
                            <template #button-content>
                                <feather-icon icon="MoreVerticalIcon" size="22" class="align-middle text-body" />
                            </template>

                            <b-dropdown-item
                                v-if="!data.item.deleted_at && data.item.status === 'En proceso' && canAccess('orders.edit')"
                                :to="{ name: 'apps-work-orders-edit', params: { id: data.item.id } }">
                                <feather-icon icon="EditIcon" />
                                <span class="align-middle ml-50">{{ $t('button_tooltip_edit') }}</span>
                            </b-dropdown-item>

                            <b-dropdown-item @click="donwloadWorkOrder(data.item)">
                                <feather-icon icon="DownloadIcon" />
                                <span class="align-middle ml-50">{{ $t('button_tooltip_download') }}</span>
                            </b-dropdown-item>

                            <b-dropdown-item
                                v-if="!data.item.deleted_at && data.item.status === 'En proceso' && canAccess('orders.destroy')"
                                @click="deleteWorks(data.item)">
                                <feather-icon icon="TrashIcon" />
                                <span class="align-middle ml-50">{{ $t('button_tooltip_delete') }}</span>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="workorders" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalWorkOrder" :per-page="perPage"
                                size="lg" />
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
    BCard, BRow, BCol, BInputGroupPrepend, BInputGroupAppend, BInputGroup, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem,
    BPagination, BOverlay, BSpinner, BTooltip, VBTooltip, BTableLite, BTab, BTabs, BFormCheckbox, BFormGroup, BFormRadioGroup
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import router from "@/router";
import WorkOrderProvider from "@/providers/WorkOrders";
const WorkOrderResource = new WorkOrderProvider();

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
        BOverlay,
        BSpinner,
        vSelect,
        BTooltip,
        VBTooltip,
        BTableLite,
        BTab,
        BTabs,
        BFormCheckbox,
        BFormGroup,
        BFormRadioGroup
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            avatarDefault: require("@/assets/images/avatar_default.png"),
            workorders: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            columns: [
                {
                    key: "branch",
                    label: this.$t("work_orders.table_branch"),
                },
                {
                    key: 'laboratory',
                    label: this.$t("work_orders.table_laboratory"),
                },
                {
                    key: "patient",
                    label: this.$t("work_orders.table_patient_name"),
                },
                {
                    key: "work_todo",
                    label: this.$t("work_orders.table_todo"),
                },
                {
                    key: "application_date",
                    label: this.$t("work_orders.table_application_date"),
                },
                {
                    key: "delivery_date",
                    label: this.$t("work_orders.table_delivery_date"),
                },
                {
                    key: "status",
                    label: this.$t("work_orders.table_status"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            statusOptions: [
                { value: 'process', text: this.$t('work_orders.status.process'), variant: 'danger' },
                { value: 'sending', text: this.$t('work_orders.status.sending'), variant: 'warning' },
                { value: 'received', text: this.$t('work_orders.status.received'), variant: 'success' },
            ],
            sortBy: "id",
            sortDesc: true,
            searchQuery: null,
            statusFilter: 'sending',
            from: 0,
            to: 0,
            loading: false,
            totalWorkOrder: 0,
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.workorders);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalWorkOrder,
            };
        },
    },
    watch: {
        currentPage(value) {
            this.getWorkOrders();
        },
        perPage(value) {
            this.getWorkOrders();
        },
        statusFilter() {
            this.getWorkOrders()
        }
    },
    async mounted() {
        await this.getWorkOrders();
    },
    methods: {
        async getWorkOrders() {

            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
                filter: this.statusFilter,
            };

            this.loading = true;
            const { data } = await WorkOrderResource.getList(query);
            this.loading = false;

            this.workorders = data.data;
            this.totalWorkOrder = data.total;
        },
        changeStatus(item, status) {
            const payload = {
                ...item,
                mark_as: status,
            }
            this.$swal({
                title: status === 'Recibido' ? this.$t("work_orders.confirm_received_title") : this.$t('work_orders.confirm_sending_title'),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t("work_orders.confirm_received_button_ok"),
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
                        const { data } = await WorkOrderResource.update(item.id, payload);
                        this.loading = false;
                        if (data.success) {
                            this.success(data.message);
                            this.workorders = this.workorders.filter(workorder => workorder.id !== item.id);
                        } else {
                            this.loading = false;
                            this.danger(data.message);
                        }
                    } catch (e) {
                        this.loading = false;
                        this.handleResponseErrors(e);
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        deleteWorks(item) {
            this.$swal({
                title: this.$t("work_orders.confirm_inactive_title"),
                text: this.$t("work_orders.confirm_inactive_title_help"),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t("work_orders.confirm_inactive_button_ok"),
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
                        const { data } = await WorkOrderResource.destroy(item.id);
                        this.loading = false;
                        if (data.success) {
                            this.success(data.message);
                            this.workorders = this.workorders.filter(workorder => workorder.id !== item.id);
                        } else {
                            this.loading = false;
                            this.danger(data.message);
                        }
                    } catch (e) {
                        this.loading = false;
                        this.handleResponseErrors(e);
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        async donwloadWorkOrder(item) {
            try {
                this.loading = true
                const { data } = await WorkOrderResource.donwloadPDF(item.id)
                this.loading = false
                const url = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = url;
                const fileName = `${this.$t('work_orders.pdf_title')}-${item.id}-${item.patient.rut}` 
                link.setAttribute('download', `${fileName}.pdf`);
                link.click();
                document.body.appendChild(link);

            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
        resolveStatusVariant(status) {
            if (status === 'En proceso') return "danger";
            if (status === 'Enviado') return "warning";
            if (status === 'Recibido') return "success";
        },
    },

};
</script>

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
}

.text-decoration-line-through {
    text-decoration: line-through;
}
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
