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
        <b-card no-body>
            <div class="m-2">

                <!-- Table Top -->
                <b-row>
                    <b-col cols="12" md="2" class="">
                        <calendar-days v-model="currentDay" />
                    </b-col>
                    <b-col cols="12" md="10" class="mt-2">
                        <h4>
                            {{ $t('appointments.management') }}
                            <small><br>{{ $t('appointments.management_help') }}</small>
                        </h4>
                        <b-row>
                            <b-col cols="12" md="3" class="mt-2">
                                <v-select v-model="state" :options="calendarOptions" label="label" class="select-size-sm"
                                    :reduce="(calendar) => calendar.label" input-id="calendar" :clearable="false"
                                    :searchable="false" :placeholder="$t('appointments.state_placeholder')">
                                    <template #option="{ color, label }">
                                        <div class="rounded-circle d-inline-block mr-50" :class="`bg-${color}`"
                                            style="height: 10px; width: 10px" />
                                        <span>{{ $t(`appointments.status.${label}`) }}</span>
                                    </template>

                                    <template #selected-option="{ color, label }">
                                        <div class="rounded-circle d-inline-block mr-50" :class="`bg-${color}`"
                                            style="height: 10px; width: 10px" />
                                        <span>{{ $t(`appointments.status.${label}`) }}</span>
                                    </template>
                                </v-select>
                            </b-col>
                            <b-col cols="12" md="9" class="mt-2">
                                <div class="_d-flex align-items-center justify-content-end">
                                    <b-input-group>
                                        <b-form-input size="sm" v-model="searchQuery" class="d-inline-block _mr-1"
                                            :placeholder="$t('appointments.input_search')" @keyup.enter="getAppointments" />
                                        <b-input-group-prepend>
                                            <b-button size="sm" variant="primary" @click="getAppointments">
                                                <feather-icon icon="SearchIcon" />
                                            </b-button>
                                        </b-input-group-prepend>
                                    </b-input-group>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </div>

            <b-table ref="refAppointmentsListTable" striped hover :items="appointments" :fields="columns" responsive
                primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')" class="position-relative table-small text-small small"
                :current-page="currentPage" :busy.sync="loading" small stacked="md">

                <!-- Hour -->
                <template #cell(hour)="data">
                    {{ dateTimeFormat(data.item.date, 'H:mm') }}
                </template>

                <!-- Column: Patient -->
                <template #cell(patient_id)="data">
                    <b-media vertical-align="center">
                        <b-link :to="{ name: 'apps-patients-view', params: { id: data.item.patient.id } }"
                            class="text-wrap">
                            <span class="font-weight-bold d-block text-wrap">
                                {{ data.item.patient.full_name }}
                            </span>
                        </b-link>
                        <small class="text-muted">
                            {{ data.item.patient.document_type }}: {{ data.item.patient.rut }}<br>
                            <b-link :href="`tel:${data.item.patient.phone}`">
                                <feather-icon icon="PhoneCallIcon" class="cursor-pointer" />
                                {{ data.item.patient.phone }}
                            </b-link>,
                            <b-link target="_blank"
                                :href="`https://wa.me/${data.item.patient.cellphone}?text=${messageWhatsapp(data.item)}`"
                                class="text-wrap">
                                <feather-icon icon="MessageSquareIcon" class="cursor-pointer" />
                                {{ data.item.patient.cellphone }}
                            </b-link>
                        </small>
                    </b-media>
                </template>

                <!-- user_id -->
                <template #cell(user_id)="data">
                    <span class="font-weight-bold d-block text-wrap">
                        {{ data.item.user.name }}
                    </span>
                </template>

                <!-- Column: Statte -->
                <template #cell(state)="data">
                    <b-badge :variant="`${resolveStateAppointmentColor(data.item.state)}`">{{
                        resolveStateAppointment(data.item.state) }}</b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button
                            v-if="findSetting('enable_email_notification') && canAccess('appointments.send') && data.item.state !== 'canceled'"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="secondary" class="btn-icon" size="sm"
                            @click="sendEmail(data.item)">
                            <feather-icon icon="SendIcon" />
                        </b-button>                      

                        <b-button v-if="canAccess('appointments.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="btn-icon" size="sm"
                            @click="editAppointment(data.item)">
                            <feather-icon icon="EditIcon" />
                        </b-button>

                        <b-button v-if="canAccess('appointments.destroy') && (data.item.state == 'pending')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon" size="sm"
                            @click="deleteAppointment(data.item)">
                            <feather-icon icon="Trash2Icon" />
                        </b-button>
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="appointments" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalAppointments" :per-page="perPage"
                                size="lg" />
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-card>
    </b-overlay>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import Ripple from "vue-ripple-directive";
import {
    BCard, BCardBody, BCardText, BCardTitle, BMediaAside, BRow, BCol, BInputGroupPrepend, BInputGroupAppend, BInputGroup, BFormInput,
    BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown,
    BDropdownItem, BPagination, BTooltip, BImg, VBTooltip,
    BOverlay,
    BSpinner,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import 'animate.css'
import CalendarDays from "@core/components/dashboards/CalendarDays.vue"
import AppointmentProvider from '@/providers/Appointments'
const AppointmentResource = new AppointmentProvider()

import "animate.css";
export default {
    name: "DashboardAppointments",
    components: {
        BCard,
        BCardBody,
        BCardText,
        BCardTitle,
        BMediaAside,
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
        BTooltip,
        vSelect,
        BImg,
        VBTooltip,
        BOverlay,
        BSpinner,

        //
        CalendarDays,
    },
    directives: {
        Ripple,
    },
    props: {
        isDashboard: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            loading: false,
            columns: [
                {
                    key: 'hour',
                    label: this.$t("appointments.table_hour"),
                },
                {
                    key: 'patient_id',
                    label: this.$t("appointments.table_patient_id"),
                },
                {
                    key: 'user_id',
                    label: this.$t("appointments.table_user_id"),
                },
                {
                    key: "state",
                    label: this.$t("appointments.table_state"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            calendarOptions: [
                {
                    color: 'default',
                    label: 'all',
                },
                {
                    color: "warning",
                    label: "pending",
                },
                {
                    color: "success",
                    label: "confirmed",
                },
                {
                    color: "danger",
                    label: "canceled",
                },
                {
                    color: "primary",
                    label: "assisted",
                },
                {
                    color: "dark",
                    label: "unassisted",
                },
            ],
            appointments: [],
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalAppointments: 0,
            sortBy: "date",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            pagination: {},
            offset: 3,
            critery: "reference",
            search: "",
            currentDay: new Date(),
            state: "all",
        }
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.appointments);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalAppointments,
            };
        },
        isCurrentDate() {
            const date = moment(this.currentDay).format('YYYY-MM-DD')
            return moment().isSame(date, 'day');
        },
    },
    async mounted() {
        this.getAppointments()
    },
    methods: {
        async getAppointments() {
            this.loading = true
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
                approved: true,
                isDashboard: this.isDashboard,
                date: moment(this.currentDay).format('YYYY-MM-DD HH:mm'),
                isSameDay: this.isCurrentDate,
                state: this.state,
            };

            const { data } = await AppointmentResource.getList(query)
            this.loading = false
            this.appointments = data.data
            this.totalAppointments = data.total;
        },
        messageWhatsapp(item) {

            const _hi = this.$t('hi')
            let status = ``
            switch (item.state) {
                case 'canceled':
                    status = `${this.$t('appointments.status.cancel')} *${this.findSetting('app_name')}!* %0A%0A`;
                    break;
                case 'pending':
                    status = `${this.$t('appointments.status.pending')} *${this.findSetting('app_name')}!* %0A%0A`;
                    break;
                case 'confirmed':
                    status = `${this.$t('appointments.status.confirmed')} *${this.findSetting('app_name')}!* %0A%0A`;
                    break;
                case 'assisted':
                    status = `${this.$t('appointments.status.assisted')} *${this.findSetting('app_name')}!* %0A%0A`;
                    break;
                case 'unassisted':
                    status = `${this.$t('appointments.status.unassisted')} *${this.findSetting('app_name')}!* %0A%0A`;
                    break;
            }

            let message = `*${_hi} ${item.patient.name}!*%0A%0A${status}
            *${this.$t('appointments.mail_detail')}* %0A%0A
            *${this.$t('appointments.mail_number')}:* ${item.id}%0A
            *${this.$t('appointments.mail_date_detail')}* ${item.custom_date}%0A
            *${this.$t('appointments.mail_document_detail')}* ${item.patient.rut}%0A
            *${this.$t('appointments.mail_name_detail')}* ${item.patient.full_name}%0A%0A
            *${this.$t('appointments.mail_email_detail')}* ${item.patient.email}%0A
            *${this.$t('appointments.mail_phone_detail')}* ${item.patient.cellphone}, ${item.patient.phone}%0A
            *${this.$t('appointments.mail_duration_detail')}* ${item.duration}%0A%0A
            *${this.$t('appointments.mail_great')}* %0A%0A`;
            return message
        },
        deleteAppointment(item) {
            this.$swal({
                title: this.$t("are_you_sure"),
                text: this.$t("you_wont_be_able_to_revert_this"),
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
                        const { data } = await AppointmentResource.destroy(item.id)
                        this.loading = false
                        if (data.success) {
                            this.success(data.message, '', 'CheckIcon');
                            this.appointments = this.appointments.filter((appointment) => appointment.id !== item.id)
                        } else {
                            this.loading = false;
                            this.danger(data.message, "Error", "AlertCircleIcon");
                        }
                    } catch (e) {
                        this.loading = false;
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                        this.handleResponseErrors(e)
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        editAppointment(item) {
            this.$swal({
                title: this.$t("appointments.confirm_assisted_title"),
                text: this.$t("appointments.confirm_assisted_message"),
                input: 'select',
                inputOptions: {
                    confirmed: this.$t('appointments.status.confirmed'),
                    assisted: this.$t('appointments.status.assisted'),
                    unassisted: this.$t('appointments.status.unassisted'),
                },
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
                preConfirm: async (option) => {

                    try {

                        this.loading = true;
                        const { data } = await AppointmentResource.changeStatus(item.id, { state: option })
                        this.loading = false;

                        if (data.success) {
                            this.success(data.message);
                            this.appointments = this.appointments.map((appointment) => {
                                if (appointment.id === item.id) {
                                    return data.data
                                }
                                return appointment
                            })
                        } else {
                            this.danger(data.message, "Error");
                        }

                    } catch (e) {
                        this.loading = false;
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                        this.handleResponseErrors(e)
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        sendEmail(item) {
            this.$swal({
                title: this.$t('send_email_title'),
                text: this.$t('send_email_title_help'),
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: this.$t('button_accept'),
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
                input: 'email',
                inputValue: item.patient.email,
                inputAttributes: {
                    autocapitalize: 'off'
                },
                preConfirm: async (value) => {

                    try {
                        const { data } = await AppointmentResource.send(item.id, { email: value })
                        if (data.success) {
                            this.success(data.message);
                        } else {
                            this.danger(data.message);
                        }
                    } catch (e) {
                        this.loading = false;
                        this.$swal.showValidationMessage(
                            `Request failed: ${e}`
                        );
                        this.handleResponseErrors(e)
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            })
        },
        loadAppointments() {
            return this.appointments
        }
    },
    watch: {
        currentPage(value) {
            this.getAppointments();
        },
        perPage(value) {
            this.getAppointments();
        },
        currentDay(value) {
            console.log(`is current day ${moment(value).format('YYYY-MM-DD HH:mm')}`)
            this.getAppointments();
        },
        state(value) {
            this.getAppointments()
        }

    },
}
</script>


<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import '~@resources/scss/vue/libs/vue-select.scss';

.swal2-select {
    min-width: 100%!important;
    max-width: 100%!important;
    padding: 0.375em 0.625em;
    background: inherit;
    color: inherit;
    font-size: 1.125em;
}
</style>
