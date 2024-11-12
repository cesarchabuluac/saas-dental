<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>

        <!-- Group Add -->
        <sidebar-add-new-group :active="hideSidebar" :data="action" @store="storeGroup" :loading="loading" />

        <b-card no-body class="mb-0">
            <div class="m-2">
                <b-form>
                    <b-row>
                        <!-- Groups -->
                        <b-col cols="12" md="4">
                            <b-form-group label-for="actionGroupList" :description="$t('clinical_actions.group_help')" :label="$t('clinical_actions.group')">
                                <v-select
                                    id="actionGroupList"
                                    v-model="actionGroupSelect"
                                    label="name"
                                    :options="actionGroups"
                                    @input="actionGroupChange"
                                    :clearable="false"
                                    :searchable="false"
                                    :placeholder="$t('clinical_actions.group_placeholder')">

                                    <template #list-header>
                                        <li v-b-toggle.sidebar-add-new-group 
                                            class="add-new-client-header text-success d-flex align-items-end my-50"
                                            style="cursor: pointer;">
                                            <feather-icon icon="PlusIcon" size="16"/>
                                            <span class="align-middle ml-25"><strong>{{$t('add_group')}}</strong></span>
                                        </li>
                                    </template>
                                </v-select>

                            </b-form-group>
                        </b-col>

                        <!-- Field: name -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('clinical_actions.name')" :description="$t('clinical_actions.name_help')" label-for="name">
                                <b-form-input id="name" v-model="action.name" :placeholder="$t('clinical_actions.name_placeholder')"/>
                            </b-form-group>
                        </b-col>

                        <!-- Postal Area -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('clinical_actions.area')" :description="$t('clinical_actions.area_help')" label-for="area">
                                <b-form-input id="area" v-model="action.area" :placeholder="$t('clinical_actions.area_placeholder')"/>
                            </b-form-group>
                        </b-col>

                        <!-- Cost -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('clinical_actions.cost')" :description="$t('clinical_actions.cost_help')" label-for="cost">
                                <b-form-input id="cost" v-model="action.cost" :placeholder="$t('clinical_actions.cost_placeholder')" type="number"/>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <!-- Action Buttons -->
                    <b-button :disabled="loading" v-if="canAccess('actions.store')" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="store">
                        {{ $t("save") }}
                    </b-button>
                    <b-button variant="outline-secondary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="$router.push({ name: 'actions-list' })">
                        {{ $t("back") }}
                    </b-button>
                </b-form>
            </div>
        </b-card>
    </b-overlay>
</template>

<script>
import {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    BTab,
    BTabs,
    BAlert,
    BLink,
    BInputGroup,
    BInputGroupAppend,
    BFormTextarea,
    BTooltip,
    VBTooltip,
    VBToggle,
    BSpinner,
    BOverlay,
} from "bootstrap-vue";
import _ from "lodash";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import router from "@/router";
import SidebarAddNewGroup from '@core/components/app-action-group/SidebarAddNewGroup.vue'

// Providers
import ActionProvider from "@/providers/Actions";
import ActionGroupProvider from "@/providers/ActionGroups";

const ActionResource = new ActionProvider();
const ActionGroupResource = new ActionGroupProvider();

export default {
    name: 'ActionAdd',
    components: {
        BButton,
        BMedia,
        BAvatar,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BForm,
        BTable,
        BCard,
        BCardHeader,
        BCardTitle,
        BFormCheckbox,
        BTab,
        BTabs,
        BAlert,
        BLink,
        BInputGroup,
        BInputGroupAppend,
        BFormTextarea,
        BTooltip,
        VBTooltip,
        VBToggle,
        BSpinner,
        BOverlay,
        vSelect,
        SidebarAddNewGroup,
    },
    directives: {
        'b-tooltip': VBTooltip,
        'b-toggle': VBToggle,
        Ripple,
    },
    data() {
        return {
            hideSidebar: false,
            action: {},
            actionGroups: [],
            actionGroupSelect: null,
            loading: false,
        };
    },
    async mounted() {
       await this.getActionGroupAll();
    },
    methods: {
        async getActionGroupAll() {
            this.loading = true;
            const { data } = await ActionGroupResource.getAll();
            this.loading = false;
            this.actionGroups = data.data;
            console.log(this.actionGroups)
        },
        async store() {            
            try {
                this.loading = true
                const { data } = await ActionResource.save(this.action);
                this.loading = false
                if (data.success) {
                    this.success(data.message, "", "CheckIcon");
                    router.push({ name: "actions-list" });
                } else {
                    this.danger(data.message, "Error", "AlertCircleIcon");
                }
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e);
            }
        },
        async storeGroup () {
            
            const payload = {
                name: this.action.group_name,
            }

            try {

                this.loading = true
                const { data } = await ActionGroupResource.save(payload);
                this.loading = false
                
                if (data.success) {
                    this.hideSidebar = true
                    this.action.action_group_id = data.data.id
                    this.action.group = data.data.name
                    this.actionGroupSelect = data.data
                } else {
                    this.danger(data.message);
                }

            }catch (e) {
                this.loading = false
                this.handleResponseErrors(e);
            }
        },
        actionGroupChange(evt) {
            if (evt !== null) {
                this.action.action_group_id = evt.id;
                this.action.group = evt.name;
            } else {
                this.action.action_group_id = null
                this.action.group = null
            }
        },
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
.invoice-add-wrapper {
  .add-new-client-header {
    padding: $options-padding-y $options-padding-x;
    color: $success;

    &:hover {
      background-color: rgba($success, 0.12);
    }
  }
}
</style>

<style lang="scss" scoped>

@import "~@resources/scss/base/pages/app-invoice";
@import 'bootstrap/scss/variables';
@import '~@resources/scss/base/components/variables-dark';
</style>
