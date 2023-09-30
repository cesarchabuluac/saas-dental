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
                                <b-form-input id="name" v-model="tariff.name" :placeholder="$t('tariff_name_placeholder')"/>
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
                    <b-button v-if="canAccess('tariffs.update')" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="update">
                        {{ $t("save") }}
                    </b-button>
                    <b-button variant="outline-secondary" @click="$router.push({ name: 'apps-tariff-list' })">
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
import TariffProvider from "@/providers/Tariffs";
import LaboratoryProvider from "@/providers/Laboratories";

const TariffResource = new TariffProvider();
const LaboratoryResource = new LaboratoryProvider();

export default {
    name: 'TariffEdit',
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
            tariff_id: null,
            tariff: {},
            laboratories: [],
            loading: false,
        };
    },
    async mounted() {
        this.tariff_id = router.currentRoute.params.id;
        await this.getLaboratoryAll();
        await this.getTariff();
        
    },
    methods: {
        async getTariff() {
            try {
                this.loading = true;
                const { data } = await TariffResource.getTariffDetail(this.tariff_id);
                this.loading = false;
                this.tariff = data.data;
            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
        async getLaboratoryAll() {
            this.loading = true;
            const { data } = await LaboratoryResource.getAll();
            this.loading = false;
            this.laboratories = data.data;
        },
        async update() {
            
            try {
                this.loading = true
                const { data } = await TariffResource.update(this.tariff_id, this.tariff);
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
            const _laboratory = this.laboratories.find(laboratory => laboratory.id === evt);
            if (_laboratory) {
                this.tariff.laboratory = _laboratory.name;
            }
        },
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
