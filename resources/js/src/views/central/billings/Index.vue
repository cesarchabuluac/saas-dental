<template>
    <div>
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">           

            <b-table
                ref="refBillinListTable"
                class="position-relative"
                :items="billings"
                responsive
                :fields="columns"
                primary-key="id"                
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"             
                busy.sync="loading"
                stacked="md"
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

                <template #cell(id)="data">
                    {{ data.index + 1 }}
                </template>

                <template #cell(stripeFee)="data">
                    {{ data.item.stripeFee / 100 }}
                </template>

            </b-table>           
        </b-card>        
    </div>
</template>

<script>
import _ from "lodash";
import store from "@/store"
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
    BForm,    
    BTable,
    BMedia,
    BImg,
    BAvatar,
    BLink,
    BBadge,
    BIcon,
    BDropdown,
    BDropdownItem,
    BPagination,
    BSpinner,
    BOverlay,
    BTooltip, VBTooltip,
    BCardTitle,
    BCardText,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import TenantsProvider from "@/providers/Tenants";
const TenantsResource = new TenantsProvider();

export default {
    name: 'ListBillingHistories',
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
        BForm,
        BTable,
        BMedia,
        BAvatar,
        BImg,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BSpinner,
        BIcon,
        vSelect,
        BTooltip,
        VBTooltip,
        BCardTitle,
        BCardText,
        BOverlay,
  
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return { 
            loading: false,            
            columns: [
                {
                    key: "id",
                    label: this.$t("billings.histories.table.id"),
                },
                {
                    key: "net",
                    label: this.$t("billings.histories.table.net"),
                },
                {
                    key: "type",
                    label: this.$t("billings.histories.table.type"),
                },
                {
                    key: "description",
                    label: this.$t("billings.histories.table.description"),
                },
                {
                    key: "amount",
                    label: this.$t("billings.histories.table.amount"),
                },
                {
                    key: "currency",
                    label: this.$t("billings.histories.table.currency"),
                },
                {
                    key: "created",
                    label: this.$t("billings.histories.table.created_at"),
                },
                {
                    key: "status",
                    label: this.$t("billings.histories.table.status"),
                },
                {
                    key: "stripeFee",
                    label: this.$t("billings.histories.table.stripe_fee"),
                },
                
            ],
            billings: [],
        };
    },
    computed: {
        
    },
    watch: {
       
    },
    async mounted() {
        await this.getBillingHistories()
    },
    methods: {       
        async getBillingHistories () {
            this.loading = true
            const { data } = await TenantsResource.billingHistories()
            this.loading = false
            this.billings = data.data
            console.log(this.billings)
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