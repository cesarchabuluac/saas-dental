<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>
        <b-card no-body class="mb-0">
            <div class="m-2">
                <b-form>
                    <b-row>
                        <!-- Groups -->
                        <b-col cols="12" md="4">
                            <b-form-group label-for="actionGroupList" :description="$t('clinical_actions.group_help')" :label="$t('clinical_actions.group')">
                                <v-select
                                    id="actionGroupList"
                                    v-model="action.action_group_id"
                                    label="name"
                                    :options="actionGroups"
                                    @input="actionGroupChange"
                                    :reduce="actionGroup => actionGroup.id"
                                    :placeholder="$t('clinical_actions.group_placeholder')"
                                    :clearable="false"
                                    :searchable="false"
                                />
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
                    <b-button :disabled="loading" v-if="canAccess('actions.update')" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="update">
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
    BOverlay,
    BSpinner,
} from "bootstrap-vue";
import _ from "lodash";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import router from "@/router";

// Providers
import ActionProvider from "@/providers/Actions";
import ActionGroupProvider from "@/providers/ActionGroups";

const ActionResource = new ActionProvider();
const ActionGroupResource = new ActionGroupProvider();

export default {
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
        vSelect,
        BOverlay,
        BSpinner,
    },
    data() {
        return {
            action_id: null,
            action: {
                action_group_id: null
            },
            actionGroups: [],
            actionGroupSelect: {},
            loading: false,
        };
    },
    async mounted() {
        this.action_id = router.currentRoute.params.id;
        await this.getActionGroupAll();
        await this.getAction();
    },
    methods: {
        async getAction() {
            try {
                this.loading = true;
                const { data } = await ActionResource.getActionDetail(this.action_id);
                this.loading = false;
                this.action = data.data;
            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
        async getActionGroupAll() {
            const { data } = await ActionGroupResource.getAll();
            this.actionGroups = data.data;
        },
        async update() {
            try {
                this.loading = true
                const { data } = await ActionResource.update(this.action_id, this.action);
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
        actionGroupChange(evt) {
            const name = this.actionGroups.find((item) => item.id === evt).name;
            this.action.group = name;
        },
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
