<template>
    <div>
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t('table_show') }}</label>
                        <v-select
                            v-model="perPage"
                            :options="perPageOptions"
                            :clearable="false"
                            class="per-page-selector d-inline-block mx-50"
                        />
                        <b-button v-if="canAccess('tenants.create')" variant="primary"  @click="onShowModalCreateUpdateTenant=true">                            
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('search')"
                                @keyup.enter="getTenants"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getTenants">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refTenantListTable"
                class="position-relative table-small text-small small"
                :items="tenants"
                responsive
                :fields="columns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc"
                :current-page="currentPage"
                busy.sync="loading"
                stacked="md"
                small
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

                <template #cell(domain)="data">
                    <b-link :to="{ name: 'tenants-detail', params: { id: data.item.id }, }"
                        class="font-weight-bold d-block text-wrap">
                        {{ data.item.domain }}
                    </b-link>
                </template>
                
                <template #cell(name)="data">
                    <b-media vertical-align="center">
                        <template #aside>
                            <b-avatar size="32" :src="null" :text="avatarText(data.item.name)"/>
                        </template>
                        <span>{{ data.item.name }}</span>
                        <b-link :href="`mailto:${data.item.email}`"
                            class="font-weight-bold d-block text-wrap">
                            {{ data.item.email }}
                        </b-link>
                    </b-media>
                </template>

                <template #cell(plan)="data">
                    {{ data.item.plan.name }}
                </template>

                <template #cell(on_trial)="data">
                    <b-badge pill :variant="`${resolveStatusBadge(data.item.on_trial)}`" class="text-capitalize">
                        {{ data.item.on_trial }}
                    </b-badge>
                </template>

                <template #cell(subscribed)="data">
                    <b-badge pill :variant="`${resolveStatusBadge(data.item.is_subscribed)}`" class="text-capitalize">
                        {{ data.item.is_subscribed }}
                    </b-badge>
                </template>

                <template #cell(banned)="data">
                    <b-badge pill :variant="`${resolveStatusBadge(data.item.is_banned)}`" class="text-capitalize">
                        {{ data.item.is_banned }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <!-- <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="outline-warning"
                            class="btn-icon"
                            size="sm"
                            @click="syncDnsOnDigitalOcean(data.item)"
                             v-b-tooltip.hover.right="`Sincronizar Servidor`">
                            <feather-icon icon="RefreshCcwIcon"/>
                        </b-button> -->
                        
                        <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="$router.push({ name: 'tenants-detail', params: { id: data.item.id } })"
                            v-b-tooltip.hover.right="$t('button_tooltip_detail')">
                            <feather-icon icon="EyeIcon"/>
                        </b-button>

                        <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="secondary"
                            class="btn-icon"
                            size="sm"
                            v-b-tooltip.hover.right="$t('button_tooltip_impersonate')"
                            @click="setImpersonate(data.item)">
                            <feather-icon icon="LogInIcon"/>
                        </b-button>

                        <b-button                            
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            :variant="data.item.is_banned ? 'warning' : 'danger'"
                            class="btn-icon"
                            size="sm"
                            @click="bannedTenant(data.item)"
                            v-b-tooltip.hover.right="data.item.is_banned ? $t('button_tooltip_unbanned') : $t('button_tooltip_banned')">
                            <feather-icon icon="SlashIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('tenants.destroy')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteTenant(data.item)"
                            v-b-tooltip.hover.right="$t('button_tooltip_destroy')">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>

                        <!-- <b-button
                            v-if="data.item.deleted_at && canAccess('tenants.active')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteTenant(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button> -->
                    </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="tenants" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalTenants" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>

        <!-- Modal Add/Edit -->
        <b-modal
            ref="refModalCreateUpdateTenant"
            id="modalCreateUpdateTenant"
            :title="`${$t('form_register.title')} 🚀`"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer            
            @cancel="onShowModalCreateUpdateTenant=false"
            @hidden="onShowModalCreateUpdateTenant=false"
            :visible="onShowModalCreateUpdateTenant">

            <b-overlay :show="loading" variant="transparent" blur="3px">
            
                <b-card-text class="mb-2 mt-2">
                    {{ $t('form_register.description_2').replace(':number_days', this.setting.trial_day_count) }}
                </b-card-text>

                <validation-observer ref="registerForm">
                    <b-form class="auth-register-form mt-3" @submit.prevent="register">
                        
                        <!-- name -->
                        <b-form-group :label="$t('name')" label-for="name">
                            <validation-provider #default="{ errors }" :name="$t('name')" rules="required">
                                <b-form-input
                                    id="name"
                                    v-model="tenant.name"
                                    :state="errors.length > 0 ? false : null"
                                    name="register-name"
                                    placeholder="johndoe"
                                />
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- email -->
                        <b-form-group :label="$t('email')" label-for="email">
                            <validation-provider #default="{ errors }" :name="$t('email')" rules="required|email">
                                <b-form-input
                                    id="email"
                                    v-model="tenant.email"
                                    :state="errors.length > 0 ? false : null"
                                    name="register-email"
                                    placeholder="john@example.com"
                                />
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- domain -->
                        <b-form-group :label="$t('domain')" label-for="domain">
                            <validation-provider #default="{ errors }" :name="$t('domain')" rules="required">
                                <b-input-group :append="hostName">
                                    <b-form-input 
                                        id="domain"
                                        v-model="tenant.domain" 
                                        name="register-doamin"
                                        :placeholder="$t('domain')"  
                                        :state="errors.length > 0 ? false : null"/>
                                </b-input-group>
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- Company Name -->
                        <b-form-group :label="$t('clinic')" label-for="clinic">
                            <validation-provider #default="{ errors }" :name="$t('clinic')" rules="required">
                                <b-form-input
                                    id="clinic"
                                    v-model="tenant.company"
                                    :state="errors.length > 0 ? false : null"
                                    name="register-clinic"
                                    :placeholder="$t('clinic_placeholder')"
                                />
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- password -->
                        <b-form-group :label="$t('password')" label-for="password">
                            <validation-provider #default="{ errors }" :name="$t('password')" rules="required">
                                <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid' : null">
                                    <b-form-input
                                        id="password"
                                        v-model="tenant.password"
                                        :type="passwordFieldType"
                                        :state="errors.length > 0 ? false : null"
                                        class="form-control-merge"
                                        name="register-password"
                                        placeholder="············"
                                    />
                                    <b-input-group-append is-text>
                                        <feather-icon
                                            :icon="passwordToggleIcon"
                                            class="cursor-pointer"
                                            @click="togglePasswordVisibility"
                                        />
                                    </b-input-group-append>
                                </b-input-group>
                                <small class="text-danger">{{errors[0]}}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- submit button -->
                        <b-row class="mt-3 text-right">
                            <b-col cols="12">
                                <b-button
                                    :disabled="loading"
                                    class="mr-1"
                                    variant="danger"
                                    @click="onShowModalCreateUpdateTenant=false">
                                    {{$t('cancel')}}
                                </b-button>

                                <b-button :disabled="loading" variant="primary" type="submit">
                                    {{ $t('save') }}
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </validation-observer>

                <template #overlay>                    
                    <div class="text-center">                        
                        <p id="cancel-label">{{$t('tenants.wait')}}</p>                         
                    </div>
                    <div class="text-center">
                        <!-- <b-spinner small type="grow" variant="secondary" /> -->
                        <b-spinner type="grow" variant="dark" />
                        <!-- <b-spinner small type="grow" variant="secondary" /> -->
                    </div>
                    <b-img fluid :src="imgUrl" alt="Coming soon page"/>
                </template>
             </b-overlay>
        </b-modal>
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
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import vSelect from "vue-select";
import "animate.css";
import TenantsProvider from "@/providers/Tenants";
const TenantsResource = new TenantsProvider();

export default {
    name: 'ListTenants',
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
        ValidationProvider,
        ValidationObserver,     
    },
    mixins: [togglePasswordVisibility],
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return { 
            loading: false,
            downImg: require('@/assets/images/pages/coming-soon.svg'),
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalTenants: 0,
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            columns: [
                {
                    key: "id",
                    label: this.$t("tenants.s_no"),
                },
                {
                    key: "domain",
                    label: this.$t("tenants.domain"),
                },
                {
                    key: "name",
                    label: this.$t("tenants.name_email"),
                },
                {
                    key: "plan",
                    label: this.$t("tenants.plan"),
                },
                {
                    key: "on_trial",
                    label: this.$t("tenants.on_trial"),
                },
                {
                    key: "subscribed",
                    label: this.$t("tenants.subscribed"),
                },
                {
                    key: "banned",
                    label: this.$t("tenants.banned"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            tenants: [],
            tenant: {},
            onShowModalCreateUpdateTenant: false,
            passwordFieldType: "password",
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.tenants);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalTenants,
            };
        },
        setting() {
            return store.getters['auth/getSettings']
        },
        hostName() {
            return `${window.location.hostname}:${window.location.port}`
        },
        passwordToggleIcon() {
            return this.passwordFieldType === "password"
                ? "EyeIcon"
                : "EyeOffIcon";
        },
        imgUrl() {
            if (store.state.appConfig.layout.skin === 'dark') {
                this.downImg = require('@/assets/images/pages/coming-soon-dark.svg')
                return this.downImg
            }
            return this.downImg
        },
    },
    watch: {
        currentPage() {
            this.getTenants();
        },
        perPage() {
            this.getTenants();
        },
        onShowModalCreateUpdateTenant(value) {
            if(!value) {
                this.tenant = {}
            }
        },
    },
    async mounted() {
        await this.getTenants()
    },
    methods: {
        async register(event) {
           
            event.preventDefault()

            const success = await this.$refs.registerForm.validate()
            if (!success) {
                return false
            }

            try {
                this.loading = true
                this.tenant.password_confirmation = this.tenant.password
                const { data } = await TenantsResource.store(this.tenant)
                this.loading = false
                if (data.success) {
                    this.onShowModalCreateUpdateTenant = false
                    this.success(data.message)
                    await this.getTenants()
                } else {
                    this.danger(data.message)
                }
            }catch(e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        async getTenants () {
            this.loading = true
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };
            const { data } = await TenantsResource.index(query)
            this.loading = false
            this.tenants = data.data
            this.totalTenants = data.total
        },
        async bannedTenant(item) {
            this.loading = true
            const { data } = await TenantsResource.banned(item.id)
            this.loading = false
            console.log(data.data)
            if (data.success) {
                this.success(data.message)
                this.tenants = this.tenants.map((tenant) => {
                    if (tenant.id === item.id) {
                        return data.data
                    }
                    return tenant;
                });
            } else {
                this.danger(data.message)
            }

        },
        async syncDnsOnDigitalOcean(item) {            
            this.$swal({
                title: `¿Estás seguro de querer ejecutar esta acción en Digital Ocean?`,
                text: `Por favor, confirma que deseas ejecutar esta acción en Digital Ocean. Esta acción sincronizará los registros DNS en el servidor central y creará los archivos de configuración y certificados de seguridad para el dominio "${item.domain}".`,
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
                        this.loading = true;
                        const { data } = await TenantsResource.update(item.id, item)
                        this.loading = false
                        console.log(data)
                        if (data.success) {
                            this.success(data.message)
                            this.tenants = this.tenants.map(tenant => {
                                if (tenant.id === item.id) {
                                    return data.data
                                }
                                return tenant
                            })
                        } else {
                            this.danger(data.message)
                        }
                    } catch (error) {
                        this.loading = false;
                        this.handleResponseErrors(error);
                        this.$swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        async deleteTenant (item) {            
            this.$swal({
                title: this.$t("are_you_sure"),
                text: item.deleted_at
                    ? this.$t("you_will_be_able_to_revert_this")
                    : this.$t("you_wont_be_able_to_revert_this"),
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
                        this.loading = true;
                        const { data } = await TenantsResource.destroy(item.id);
                        this.loading = false;
                        if (data.success) {
                            this.success(data.message)
                            this.tenants = this.tenants.filter(tenant => tenant.id !== item.id)
                        } else {
                            this.danger(data.message)
                        }
                    } catch (error) {
                        this.loading = false;
                        this.handleResponseErrors(error);
                        this.$swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        },
        async setImpersonate(item) {
            try {
                this.loading = true
                const { data } = await TenantsResource.impersonate(item.id)
                this.loading = false
                if (data.success) {                
                    window.open(data.data.redirect_url, '_blank')
                } else {
                    this.danger(data.message)
                }
            }catch(e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        }
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