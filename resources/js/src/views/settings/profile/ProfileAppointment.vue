<template>
    <div>
        <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
            <template #overlay>
                <div class="d-flex align-items-center">
                    <b-spinner small type="grow" variant="secondary" />
                    <b-spinner type="grow" variant="dark" />
                    <b-spinner small type="grow" variant="secondary" />
                </div>
            </template>
            <b-row>
                <b-col lg="12" cols="12" order="1" order-lg="2">
                    <b-card no-body>
                        <b-card-body>
                            <div class="mt-2">

                                <!-- Table Top -->
                                <b-row>
                                    <!-- Per Page -->
                                    <b-col cols="12" md="6"
                                        class="d-flex align-items-center justify-content-start mb-1 mb-md-0 mt-1">
                                        <b-card-title>{{ $t('appointments.profile_card') }}</b-card-title>
                                    </b-col>

                                    <!-- Search -->
                                    <b-col cols="12" md="6">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <!-- <b-form-input size="sm" v-model="search" class="d-inline-block mr-1"
                                                :placeholder="$t('appointments.input_search')" /> -->
                                                <b-input-group>
                                                    <b-form-input size="sm" v-model="search" @keydown.enter="getAppointments" :placeholder="$t('appointments.input_search')"  />
                                                    <b-input-group-append>
                                                    <b-button @click="getAppointments" size="sm" variant="outline-primary">
                                                        Buscar
                                                    </b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                        </div>
                                    </b-col>
                                </b-row>

                                <b-row class="mt-2">
                                    <b-table ref="refAppointmentsListTable" class="position-relative" 
                                        :items="listAppointments"
                                        responsive 
                                        :fields="columns" 
                                        primary-key="id" 
                                        show-empty 
                                        :sticky-header="true"
                                        :no-border-collapse="true" 
                                        :empty-text="$t('datatables.sZeroRecords')"
                                        busy.sync="loading"
                                        small
                                        size="small">

                                        <!-- Column: Patient -->
                                        <template #cell(patient_id)="data">
                                            <span class="text-capitalize">
                                                {{ `${data.item.name} ${data.item.last_name} ${data.item.mother_last_name}` }}
                                            </span><br>
                                            <small class="text-muted">
                                                {{ data.item.document_type }}: {{ data.item.rut }}<br>
                                                {{ $t('phone') }}: {{ data.item.phone }}<br>
                                                {{ $t('email') }}: {{ data.item.email }}
                                            </small>
                                        </template>

                                        <!-- Column: Date -->
                                        <template #cell(date)="data">
                                            {{ formatDate(data.item.date) }}
                                        </template>

                                        <template #cell(duration)="data">
                                            {{ formatDate(data.item.custom_duration) }}
                                        </template>

                                        <!-- Column: State -->
                                        <template #cell(state)="data">
                                            <b-badge :variant="`light-${resolveStateAppointmentColor(data.item.state)}`">{{
                                                resolveStateAppointment(data.item.state) }}</b-badge>
                                        </template>

                                        <!-- Column: Date -->
                                        <template #cell(observations)="data">
                                            <span class="text-wrap">{{ data.item.intern_observation }}</span>
                                        </template>
                                    </b-table>
                                </b-row>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-overlay>
    </div>
</template>

<script>
import moment from 'moment'
import {
    BAvatar,
    BCard,
    BCardText,
    BMedia,
    BImg,
    BLink,
    BRow,
    BCol,
    BAvatarGroup,
    VBTooltip,
    BFormTextarea,
    BButton,
    BFormGroup,
    BEmbed,
    BTable,
    BCardHeader, BCardTitle, BCardBody, BCardFooter, BBadge,
    BFormInput, BOverlay, BSpinner,
    BInputGroup, BInputGroupAppend,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import { kFormatter } from "@core/utils/filter";

import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
    components: {
        BAvatar,
        BCard,
        BCardText,
        BButton,
        BFormTextarea,
        BMedia,
        BImg,
        BFormGroup,
        BRow,
        BLink,
        BCol,
        BAvatarGroup,
        BEmbed, BTable, BCardHeader, BCardTitle, BCardBody, BCardFooter, BBadge,
        BOverlay, BSpinner,
        BFormInput,
        BInputGroup, BInputGroupAppend,
    },
    directives: {
        "b-tooltip": VBTooltip,
        Ripple,
    },
    props: {
        startAt: null,
        endAt: null,
        isActive: false,
    },
    data() {
        return {
            loading: false,
            search: null,
            appointments: [],
            columns: [
                {
                    key: "patient_id",
                    label: this.$t("appointments.table_patient_id"),
                },
                {
                    key: "date",
                    label: this.$t("appointments.table_date"),
                },
                {
                    key: "duration",
                    label: this.$t("appointments.table_duration"),
                },
                {
                    key: "state",
                    label: this.$t("appointments.table_state"),
                },
                {
                    key: "observations",
                    label: this.$t("appointments.table_observations"),
                },
            ],
            states: [],
        };
    },
    computed: {
        listAppointments() {
            let result = this.search ? this.appointments.filter(appointment =>
                appointment.name.toLowerCase().includes(this.search.toLowerCase()) ||
                appointment.last_name.toLowerCase().includes(this.search.toLowerCase()) ||
                appointment.mother_last_name.toLowerCase().includes(this.search.toLowerCase()) ||
                appointment.rut.toLowerCase().includes(this.search.toLowerCase())
            ) : this.appointments
            return result
        },
    },
    async mounted() {
        // await this.getAppointments()
    },
    methods: {
        kFormatter,
        async getAppointments() {
            this.loading = true
            const query = {
                start_at: this.startAt,
                end_at: this.endAt,
                only_appointments: true,
                is_profile: true,
            }
            const { data } = await UserResource.getUserDetail(this.$route.params.id, query)
            this.loading = false

            this.$nextTick(() => {
                this.appointments = data
                this.states = _.groupBy(this.appointments, 'state')
            })
        }
    },
    watch: {
        isActive(value) {
            if (value) {
                this.getAppointments()
            }
        }
    }
};
</script>

<style lang="scss">
.b-table-sticky-header {
    overflow-y: auto;
    max-height: 520px;
}
</style>