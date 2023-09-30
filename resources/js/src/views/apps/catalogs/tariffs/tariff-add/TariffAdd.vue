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
                        <!-- laboratories -->
                        <b-col cols="12" md="4">
                            <b-form-group label-for="LaboratoryList" :label="$t('laboratory')">
                                <v-select
                                    id="LaboratoryList"
                                    v-model="tariff.laboratory_id"
                                    label="name"
                                    :options="laboratories"
                                    @input="laboratoryChange"
                                    :reduce="laboratory => laboratory.id"
                                    :placeholder="$t('tariff_laboratory_placeholder')"
                                    :clearable="false">
                                </v-select>

                            </b-form-group>
                        </b-col>

                        <!-- Field: name -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('tariff_name')" label-for="name">
                                <b-form-input id="name" v-model="tariff.name" :placeholder="$t('tariff_name_placeholder')"
                                autocomplete="off"/>
                            </b-form-group>
                        </b-col>

                    </b-row>

                    <b-row>
                        <!-- price -->
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('tariff_price')" label-for="price">
                                <b-form-input id="price" v-model="tariff.price" :placeholder="$t('tariff_price_placeholder')" type="number"/>
                            </b-form-group>
                        </b-col>

                    </b-row>

                    <!-- Action Buttons -->
                    <div class="mt-3">
                        <b-button v-if="canAccess('tariffs.store')" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="store">
                            {{ $t("save") }}
                        </b-button>
                        <b-button variant="outline-secondary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="$router.push({name: 'apps-tariff-list',})">
                            {{ $t("back") }}
                        </b-button>
                    </div>
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

// Providers
import TariffProvider from "@/providers/Tariffs";
import LaboratoryProvider from "@/providers/Laboratories";

const TariffResource = new TariffProvider();
const LaboratoryResource = new LaboratoryProvider();


export default {
    name: 'TariffAdd',
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
    },
    directives: {
        'b-tooltip': VBTooltip,
        'b-toggle': VBToggle,
        Ripple,
    },
    data() {
        return {
            hideSidebar: false,
            tariff: {},
            laboratories: [],
            loading: false,
        };
    },
    async mounted() {
       await this.getLaboratoryAll();
    },
    methods: {
        async getLaboratoryAll() {
            this.loadind = true 
            const { data } = await LaboratoryResource.getAll();
            this.loadind = false
            this.laboratories = data.data;
        },
        async store() {
            try {
                this.loading = true
                const { data } = await TariffResource.save(this.tariff);
                this.loading = false
                if (data.success) {
                    this.success(data.message);
                    router.push({ name: "apps-tariff-list" });
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e);
            }
        },
        laboratoryChange(evt) {
            const _laboratory = this.laboratories.find(laboratory => laboratory.id === evt)
            if (_laboratory) {
                this.tariff.laboratory = _laboratory.name
            }
        },
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
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
