<template>
    <!-- First Row -->
    <b-row class="match-height" v-if="data">
        <b-col cols="12" xl="9" lg="8" md="7">
            <!-- Patient Info: Left col -->
            <b-card>
                <b-row>
                    <b-col cols="12" xl="6" class="d-flex justify-content-between flex-column">
                        <!-- Patient Avatar & Action Buttons -->
                        <div class="d-flex justify-content-start">
                            <b-avatar :src=" data.has_media ? data.avatar : null"
                                :text="avatarText(data.name)" :variant="`light-primary`" size="100" rounded
                            />
                            <div class="d-flex flex-column ml-1">
                                <div class="mb-1">
                                    <h4 class="mb-0">
                                        {{ data.full_name }}
                                    </h4>
                                    <span class="card-text text-break">{{data.email}}</span>
                                </div>
                                <div class="d-flex flex-wrap">
                                    <b-button size="sm" :disabled="isDisabled" v-if="canAccess('patients.edit')" :to="{ name: 'apps-patients-edit', params: { id: data.id },}" variant="primary">
                                        {{ $t("edit") }}
                                    </b-button>
                                </div>
                            </div>
                        </div>
                    </b-col>

                    <!-- Right Col: Table -->
                    <b-col cols="12" xl="6">
                        <table class="mt-2 mt-xl-0 w-100">
                            <tr>
                                <th class="pb-50">
                                    <feather-icon icon="CheckIcon" class="mr-75"/>
                                    <span class="font-weight-bold d-none d-sm-inline">{{$t("patients.status")}}</span>
                                </th>
                                <td class="pb-50 text-capitalize">
                                    <b-badge pill :variant="`light-${resolveStatusVariant(data.deleted_at)}`" class="text-capitalize">
                                        {{resolveStatusTranslate(data.deleted_at)}}
                                    </b-badge>
                                </td>
                            </tr>
                            <tr>
                                <th class="pb-50">
                                    <feather-icon icon="ClipboardIcon" class="mr-75"/>
                                    <span class="font-weight-bold d-none d-sm-inline">{{resolveTypeDocument(data.document_type)}}</span>
                                </th>
                                <td class="pb-50 text-capitalize">
                                    {{ data.rut }}
                                </td>
                            </tr>
                            <tr>
                                <th class="pb-50">
                                    <feather-icon icon="CalendarIcon" class="mr-75"/>
                                    <span class="font-weight-bold d-none d-sm-inline">{{$t("patients.birthday")}}</span>
                                </th>
                                <td class="pb-50">
                                    {{ dateFormat(data.birthday) }}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <feather-icon icon="PhoneIcon" class="mr-75"/>
                                    <span class="font-weight-bold d-none d-sm-inline">{{$t("patients.phone")}}</span>
                                </th>
                                <td>
                                    {{ data.phone }}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <feather-icon icon="SmartphoneIcon" class="mr-75"/>
                                    <span class="font-weight-bold d-none d-sm-inline">{{$t("patients.cellphone")}}</span>
                                </th>
                                <td>
                                    {{ data.mobile ? data.mobile.e164 : data.cellphone }}
                                </td>
                            </tr>
                        </table>
                    </b-col>
                </b-row>
                <b-row v-if="totalOrderExpired>0">
                    <b-col cols="12">
                        <b-alert variant="danger" show>
                            <div class="alert-body">
                                <feather-icon icon="InfoIcon" class="mr-50"/>
                                <span>{{resolveReplaceOperator(':quantity', totalOrderExpired)}}.</span>
                            </div>
                        </b-alert>
                    </b-col>
                </b-row>
            </b-card>
        </b-col>
        <b-col cols="12" md="5" xl="3" lg="4">
            <b-card no-body class="border-primary">
                <b-card-header class="text-capitalize d-flex justify-content-between align-items-center pt-75 pb-25">
                    <h5 class="mb-0">{{ $t("payments.balance_general") }}</h5>
                    <small class="text-muted w-100 font-weight-bold">{{momentFormat()}}</small>
                </b-card-header>

                <b-card-body>
                    <ul class="list-unstyled my-1">
                        <li>
                            <span class="align-middle">
                                {{ $t("patients.total_debt") }}
                                <b-badge pill :variant="`light-danger`" class="text-capitalize">
                                    {{formatPrice(data.total_cost)}}
                                </b-badge>
                            </span>
                        </li>
                        <li class="my-25">
                            <span class="align-middle">{{ $t("patients.total_paid") }}
                                <b-badge pill :variant="`light-info`" class="text-capitalize">
                                    {{formatPrice(data.total_paid)}}
                                </b-badge>
                            </span>
                        </li>
                        <li>
                            <span class="align-middle">{{$t("patients.total_per_paid")}}
                                <b-badge pill :variant="`light-warning`" class="text-capitalize">
                                    {{formatPrice(data.total_debt)}}
                                </b-badge>
                            </span>
                        </li>
                        <li>
                            <span class="align-middle">{{$t("patients.total_last_paid")}}
                                <b-badge pill :variant="`light-info`" class="text-capitalize">
                                    <span v-html="data.last_paid"></span>
                                </b-badge>
                            </span>
                        </li>
                    </ul>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import _ from "lodash";
import router from "@/router";
import {
    BRow,
    BCol,
    BAlert,
    BLink,
    BCard,
    BButton,
    BMedia,
    BAvatar,
    BImg,
    BBadge,
    BCardHeader,
    BCardBody,
    BForm,
    BFormGroup,
    BFormInput,
    BTable,
    BPagination,
    BTab,
    BTabs,
    BFormTextarea,
    BFormCheckbox,
    BCardText,
    BCardFooter,
    BSpinner,
    BOverlay,
    BCardTitle,
    BCardSubTitle,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

export default {
    components: {
        BRow,
        BCol,
        BAlert,
        BLink,
        BCard,
        BButton,
        BMedia,
        BAvatar,
        BImg,
        BBadge,
        BCardHeader,
        BCardBody,
        BForm,
        BFormGroup,
        BFormInput,
        BTable,
        BPagination,
        BTab,
        BTabs,
        BFormTextarea,
        BFormCheckbox,
        BCardText,
        BCardFooter,
        BSpinner,
        BOverlay,
        BCardTitle,
        BCardSubTitle,
    },
    directives: {
        Ripple,
    },
    props: {
        data: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        totalCost(){
            if (!this.data.budgets) return 0;
            return this.data.budgets.reduce((carry, cost) => {
                return carry + (cost.approved ? parseFloat(cost.total_cost) : 0);
            }, 0);
        },
        totalDebt(){
            if (!this.data.budgets) return 0;
            return this.data.budgets.reduce((carry, debt) => {
                return carry + (debt.approved ? parseFloat(debt.total_debt) : 0);
            }, 0);
        },
        totalPaid(){
            if (!this.data.budgets) return 0;
            return this.data.budgets.reduce((carry, paid) => {
                return carry + (paid.approved ? parseFloat(paid.total_paid) : 0);
            }, 0);
        },
        totalOrderExpired () {
            if (!this.data.orders) return 0;
            const works = _.filter(this.data.orders, (o) => o.is_expired === true)
            return works.length
        },
        isDisabled () {
            return this.data.deleted_at !== null
        }
    },
    mounted () {

    }
};
</script>
