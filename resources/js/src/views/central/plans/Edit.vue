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
                        <b-col cols="12" md="4">
                            <!-- Media -->
                            <b-media class="mb-2">
                                <template #aside>
                                    <b-avatar :src="image ? `/${image}` : null" size="90px" rounded/>
                                </template>
                            </b-media>
                        </b-col>
                    </b-row>
                    <b-row>
                        <!-- Field: name -->
                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('plans.name')"
                                label-for="name"
                            >
                                <b-form-input
                                    id="name"
                                    v-model="plan.name"
                                    :placeholder="$t('plans.name_placeholder')"
                                />
                            </b-form-group>
                        </b-col>

                        <!-- Field: name -->
                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('plans.description')"
                                label-for="description"
                            >
                                <b-form-input
                                    id="description"
                                    v-model="plan.description"
                                    :placeholder="$t('plans.description_placeholder')"
                                />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('plans.interval')"
                                label-for="interval"
                                :description="$t('plans.interval_description')"
                            >
                            <v-select
                                disabled
                                v-model="plan.interval"
                                :options="intervals"
                                :clearable="false"
                                :searchable="false"
                                :placeholder="$t('plans.interval_placeholder')"
                                label="label"
                                :reduce="option => option.value"                                
                            />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('plans.currency')"
                                label-for="currency"
                                :description="$t('plans.currency_description')"
                            >
                            <v-select
                                disabled
                                v-model="plan.currency_id"
                                :options="currencies"
                                :clearable="false"
                                :searchable="false"
                                :placeholder="$t('plans.currency_placeholder')"
                                label="label"
                                :reduce="option => option.id"                                
                            />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('plans.amount')" label-for="amount" :description="$t('plans.amount_description')">
                                <b-form-input 
                                    id="amount" 
                                    disabled
                                    v-model="plan.amount" 
                                    :placeholder="$t('plans.amount_placeholder')" 
                                    type="number"/>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('plans.image')" label-for="image">
                                <b-form-file
                                    v-model="imageSelected"
                                    :placeholder="$t('plans.image_placeholder')"
                                    drop-placeholder="Drop file here..."
                                    accept="image/*"
                                />
                            </b-form-group>                            
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('plans.limit_doctor')" label-for="limit_doctor">
                                <b-form-input 
                                    id="limit_doctor" 
                                    v-model="plan.limit_doctor" 
                                    :placeholder="$t('plans.limit_doctor_placeholder')" 
                                    type="number"/>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('plans.limit_assistant')" label-for="limit_assistant">
                                <b-form-input 
                                    id="limit_assistant" 
                                    v-model="plan.limit_assistant" 
                                    :placeholder="$t('plans.limit_assistant_placeholder')" 
                                    type="number"/>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('plans.limit_receptionist')" label-for="limit_receptionist">
                                <b-form-input 
                                    id="limit_receptionist" 
                                    v-model="plan.limit_receptionist" 
                                    :placeholder="$t('plans.limit_receptionist_placeholder')" 
                                    type="number"/>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('plans.limit_patient')" label-for="limit_patient">
                                <b-form-input 
                                    id="limit_patient" 
                                    v-model="plan.limit_patient" 
                                    :placeholder="$t('plans.limit_patient_placeholder')" 
                                    type="number"/>
                            </b-form-group>
                        </b-col>  

                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('plans.popular')" label-for="is_popular">
                                <b-form-checkbox
                                    id="is_popular"
                                    v-model="plan.is_popular"
                                    name="is_popular">
                                    {{$t("plans.popular_help")}}
                                </b-form-checkbox>
                            </b-form-group>
                        </b-col>                      
                    </b-row>                        

                    <!-- Action Buttons -->
                    <b-button
                        :disabled="loading"
                        variant="primary"
                        class="mb-1 mb-sm-0 mr-0 mr-sm-1 mt-3"
                        @click="store"
                    >
                        {{ $t("save") }}
                    </b-button>
                    <b-button
                        variant="outline-secondary"
                        class="mb-1 mb-sm-0 mr-0 mr-sm-1 mt-3"
                        @click="$router.push({name: 'plans',})"
                    >
                        {{ $t("back") }}
                    </b-button>
                </b-form>
            </div>
        </b-card>
    </b-overlay>
</template>

<script>
import _ from 'lodash'
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
    BFormFile,
} from "bootstrap-vue";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import router from "@/router";

// Providers
import PlansProvider from "@/providers/Plans";
const PlansResource = new PlansProvider();

import CurrenciesProvider from '@/providers/Currencies'
const CurrenciesResource = new CurrenciesProvider()

export default {
    name: 'EditPlan',
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
        BOverlay,
        BSpinner,
        BFormFile,

        //
        vSelect,
    },
    data() {
        return {
            plan: {},
            image: null,
            imageSelected: null,
            loading: false,
            intervals: [
                 // { label: this.$t('intervals.days'), value: "days" },
                // { label: this.$t('intervals.week'), value: "week" },
                { label: this.$t('intervals.month'), value: "month" },
                { label: this.$t('intervals.quarter'), value: "quarter" },
                { label: this.$t('intervals.semester'), value: "6month" },
                { label: this.$t('intervals.year'), value: "year" },
            ],
            currencies: []
        };
    },
    async mounted() {
        await this.getCurrencies()
        await this.getPlan()
    },
    methods: {
        async getPlan () {
            this.loading = true
            const { data } = await PlansResource.show(router.currentRoute.params.id)
            this.loading = false
            this.plan = data.data
            this.image = this.plan.image            
            if (!this.plan.currency_id) {
                const currency = this.currencies.find(item => item.code.toLowerCase() === this.plan.currency.toLowerCase())
                this.plan.currency_id = currency.id
            }
        },
        async getCurrencies () {
            this.loading = true
            const { data } = await CurrenciesResource.index({})
            this.loading = false
            this.currencies = data.data
        },
        async store() {

            if (this.imageSelected) {
                this.plan.image = this.imageSelected
            } else {
                this.plan.image = ''
            }

            const formData = new FormData()
            for (const key in this.plan) {
                formData.append(key, this.plan[key])                    
            }

            
           
            try {
                this.loading = true
                const { data } = await PlansResource.update(this.plan.id, formData)
                this.loading = false                
                if(data.success) {
                    this.success(data.message)
                    router.push({name: 'plans'})
                } else {
                    this.danger(data.message)
                }
            }catch(e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
    },
};
</script>

<style lang="scss">
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>