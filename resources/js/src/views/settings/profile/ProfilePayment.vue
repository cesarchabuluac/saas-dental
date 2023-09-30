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
            <b-card no-body>
                <b-card-header class="pb-0">
                    <b-card-title>{{ $t('payments.payment_details_title') }}</b-card-title>
                </b-card-header>
                <b-card-body>
                    <div class="mt-2">
                        <b-row>
                            <b-table ref="refPaymentsListTable" class="position-relative" :items="payments" responsive
                                :fields="columns" primary-key="id" show-empty :sticky-header="true"
                                :no-border-collapse="true" :empty-text="$t('datatables.sZeroRecords')"
                                small
                                size="small">
                                <!-- Column: label -->
                                <template #cell(label)="data">
                                    {{ data.item.label }}
                                </template>

                                <!-- Column: action Type -->
                                <template #cell(action_type)="data">
                                    {{ data.item.action_type === 'clinical' ? $t('budgets.clinical') : $t('budgets.laboratory') }}<br>
                                </template>

                                <!-- Column: Concept / detail -->
                                <template #cell(concept)="data">
                                    {{ data.item.action_name }}<br>
                                    <small>{{ data.item.action_group_name }}</small>
                                </template>

                                <!-- Column: action Type -->
                                <template #cell(action_area)="data">
                                    {{ data.item.area }}<br>
                                </template>

                                <!-- Column: Payment date -->
                                <template #cell(payment_date)="data">
                                    <span class="text-capitalize">{{ formatDate(data.item.payment_date) }}</span>
                                </template>

                                <!-- Column: Total -->
                                <template #cell(total)="data">
                                    {{ formatPrice(data.item.amount) }}
                                </template>

                                <!-- Column: Status -->
                                <template #cell(status)="data">
                                    <b-badge pill :variant="`${data.item.check_paid ? 'success' : 'danger'}`"
                                        class="text-capitalize">
                                        {{ data.item.check_paid ? $t('payments.status_applied') : $t('payments.status_pending') }}
                                    </b-badge>
                                </template>
                            </b-table>
                        </b-row>
                    </div>
                </b-card-body>
                <!-- <b-card-footer>
                <b-card-title>Ganancia: {{ formatPrice(payments.reduce((carry, item) => { return carry + (item.payment.check_paid ? item.amount * 1 : 0)}, 0)) }}</b-card-title>
            </b-card-footer> -->
            </b-card>
        </b-overlay>
    </div>
</template>

<script>
import {
    BAvatar,
    BCard,
    BCardText,
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
    BOverlay, BSpinner,
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
        BImg,
        BFormGroup,
        BRow,
        BLink,
        BCol,
        BAvatarGroup,
        BEmbed, BTable, BCardHeader, BCardTitle, BCardBody, BCardFooter, BBadge,
        BOverlay, BSpinner,
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
            columns: [
                {
                    key: "label",
                    label: this.$t("payments.table_budget"),
                },
                {
                    key: "action_type",
                    label: this.$t('payments.table_action_type'),
                },
                {
                    key: "concept",
                    label: this.$t('payments.table_detail'),
                },
                {
                    key: "action_area",
                    label: this.$t('payments.table_area'),
                },
                {
                    key: "payment_date",
                    label: this.$t('payments.table_payment_date'),
                },
                {
                    key: "total",
                    label: this.$t("payments.table_total"),
                },
                {
                    key: "status",
                    label: this.$t('payments.table_status'),
                },
            ],
            payments: []
        };
    },
    mounted() {

    },
    methods: {
        kFormatter,
        async getPayments() {            
            const query = {
                start_at: this.startAt,
                end_at: this.endAt,
                only_payments: true,
                is_profile: true,
            }

            this.loading = true
            const { data } = await UserResource.getUserDetail(this.$route.params.id, query)
            this.loading = false

            this.$nextTick(() => {
                this.payments = data
            })
        }
    },
    watch: {
        isActive(value) {
            if (value) {
                this.getPayments()
            }
        }
    }
};
</script>
