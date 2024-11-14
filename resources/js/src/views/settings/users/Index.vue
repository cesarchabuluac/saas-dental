<template>
    <div>
        <user-list-add-new
            :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
            :is-edit="isEdit"
            :role-options="roleOptions"
            @get-users="getUsers"
            @show-message="showMessage"
            :user="user"
        />

        <b-row>
            <b-col v-for="(item, index) in tenant.limitations" :key="index" lg="3" sm="6">
                <statistic-card-horizontal
                    :icon="item.icon"
                    :statistic="$t(item.name)"
                    :color="item.bgColor"
                    size="h6"
                    :statistic-text="`${$t(`tenants.used`)}: ${item.current}`"
                    :statistic-description="`${$t(`tenants.remaining`)}: ${item.remaining}`"
                    :statistic-title="`${$t('tenants.limit')} ${item.limit}`"
                />
            </b-col>
        </b-row>

        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t("show") }}</label>
                        <v-select
                            v-model="perPage"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="perPageOptions"
                            :clearable="false"
                            class="per-page-selector d-inline-block mx-50 select-size-sm"
                        />
                        <!-- <label>{{ $t("entries") }}</label> -->
                        <!-- @click="$router.push({name: 'settings-user-add'})" -->
                        <b-button size="sm" v-if="canAccess('users.create')" variant="primary" @click="isAddNewUserSidebarActive = true">
                            <span class="text-nowrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input autocomplete="off" size="sm" v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('user_search_options')"
                                @keyup.enter="filter"/>
                                <b-input-group-prepend>
                                <b-button size="sm" variant="primary" @click="filter">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refUserListTable"
                class="position-relative table-small small"
                :items="users"
                responsive
                :fields="columns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc"
                :current-page="currentPage"
                :busy.sync="loading"
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

                <!-- Column: User -->
                <template #cell(name)="data">
                    <b-media vertical-align="center">
                        <b-link :to="{ name: 'settings-user-edit', params: { id: data.item.id },}"
                            class="font-weight-bold d-block text-wrap">
                            {{ data.item.name }}
                        </b-link>
                        <small v-if="data.item.phone" class="text-muted">Tel: {{ data.item.phone }}</small>
                    </b-media>
                </template>

                <!-- Column: Role -->
                <template #cell(role)="data">
                    {{ data.item.roles.map(role => $t(`role_${role.name}`)).join(', ') }}
                </template>

                <!-- Column: Created at -->
                <template #cell(created_at)="data">
                    {{ formatDate(data.item.created_at) }}
                </template>

                <!-- Column: Updated at -->
                <template #cell(updated_at)="data">
                    {{ formatDate(data.item.updated_at) }}
                </template>

                <!-- Column: Status -->
                <template #cell(status)="data">
                    <b-badge pill :variant="`light-${resolveStatusVariant(data.item.deleted_at)}`" class="text-capitalize">
                        {{ resolveStatusTranslate(data.item.deleted_at) }}
                    </b-badge>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button
                            v-if="!data.item.deleted_at && canAccess('users.edit')"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            @click="editUser(data.item)">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-if="!data.item.deleted_at && canAccess('users.destroy') && data.item.id !== 1 && (data.item.id !== 2 || !checkIsTenant())"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteUser(data.item)">
                            <feather-icon icon="SlashIcon"/>
                        </b-button>

                        <b-button
                            v-if="data.item.deleted_at && canAccess('users.active') && data.item.id !== 1"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon"
                            size="sm"
                            @click="deleteUser(data.item)">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                   </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="users" class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                    </b-col>
                    <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div class="mt-2 demo-spacing-0">
                            <b-pagination v-model="currentPage" :total-rows="totalUsers" :per-page="perPage" size="lg"/>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-card>
    </div>
</template>

<script>
import _ from "lodash";
import {
    BCard,
    BRow,
    BCol,
    BInputGroupPrepend,
    BInputGroupAppend,
    BInputGroup,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BOverlay,
    BSpinner,
    BTooltip,
    VBTooltip
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import UserListAddNew from "./UserListAddNew.vue";
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'
import "animate.css";
import store from "@/store";
import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

import TenantsProvider from "@/providers/Tenants";
import { formatDate } from "@fullcalendar/vue";
const TenantsResource = new TenantsProvider();

export default {
    name: 'UserList',
    components: {
        BCard,
        BRow,
        BCol,
        BInputGroupPrepend,
        BInputGroupAppend,
        BInputGroup,
        BFormInput,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        vSelect,
        UserListAddNew,
        StatisticCardHorizontal,
        BOverlay,
        BSpinner,
        BTooltip,
        VBTooltip
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            loading: false,
            users: [],
            user: {},
            avatarDefault: require("@/assets/images/avatar_default.png"),
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalUsers: 0,
            columns: [
                {
                    key: "name",
                    label: this.$t("name"),
                },
                {
                    key: "email",
                    label: this.$t("email"),
                },
                {
                    key: "role",
                    label: this.$t("user_role_id"),
                },
                {
                    key: "status",
                    label: this.$t("user_status"),
                },
                {
                    key: "created_at",
                    label: this.$t("created_at"),
                },
                {
                    key: "updated_at",
                    label: this.$t("updated_at"),
                },
                { key: "actions", label: this.$t("actions") },
            ],
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            isAddNewUserSidebarActive: false,
            roleOptions: [],
            planOptions: [],
            refetchData: [],
            isEdit: false,
            totalDirectors: 0,
            limitations: [],
            tenant: {
                limitations: [],
            },
            userRoles: store.getters['auth/getUser'].roles.map(role => role.id)
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.users);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalUsers,
            };
        },        
        isAdmin () {
            return store.getters['auth/getRoleId'] === 1 //this.userRoles.includes(1) || false
        },
        isDirector () {
            return store.getters['auth/getRoleId'] === 2 //this.userRoles.includes(2) || false
        }
    },
    watch: {
        currentPage(value) {
            this.getUsers();
        },
        perPage(value) {
            this.getUsers();
        },
        isAddNewUserSidebarActive(value) {
          if (!value) {
            this.user = {}
            this.isEdit = false
          }
        },
    },
    async mounted() {
        await this.getTenant()
        await this.getUsers();
        this.mapRoles();
    },
    methods: {
        editUser(item) {
            this.user= {...item}
            this.isEdit = true
            this.isAddNewUserSidebarActive = true
        },
        async getTenant() {
            if(this.checkIsTenant()) {
                this.loading = true
                const { data } = await TenantsResource.show(store.state.auth.account.id)
                this.loading = false
                this.tenant = data
            }
        },
        async getUsers() {
            
            const query = {
                search: this.searchQuery,
                sortBy: this.sortBy,
                sortDesc: this.sortDesc,
                perPage: this.perPage,
                page: this.currentPage,
            };
            this.loading = true;
            const { data } = await UserResource.index(query);
            this.loading = false;
            this.users = data.data;
            this.totalUsers = data.total;
            this.isEdit = false
            this.user = {}
            this.isAddNewUserSidebarActive = false
        },
        deleteUser(item) {
            this.$swal({
                title: !item.deleted_at
                    ? this.$t("disable_user.title")
                    : this.$t("active_user.title"),
                text: !item.deleted_at
                    ? this.$t("disable_user.text")
                    : this.$t("active_user.text"),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t("confirm"),              
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
                        this.loading = true
                        const { data } = await UserResource.destroy(item.id)
                        this.loading = false
                        console.log(data)
                        if (data.success) {
                            this.success(data.message)
                            this.users = this.users.map(user => {
                                if (user.id === item.id) {
                                    return data.data
                                }
                                return user
                            })
                        } else {
                            this.danger(data.message)
                        }

                    }catch (error) {
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
        filter() {
            this.getUsers();
        },
        mapRoles() {
            
            console.log('isDirector', this.isDirector)
            console.log('isAdmin', this.isAdmin)
            console.log('isTenant', this.checkIsTenant())

            if (this.checkIsTenant()) {
                if (this.isDirector) {
                    this.roleOptions = store.getters['auth/getRoles'].filter(rol => rol.id !== 1 /*&& rol.id !== 2*/)
                        .map(rol => ({
                            value: rol.id, 
                            label: this.$t(`role_${rol.name}`) 
                        }))
                } else if (this.isAdmin) {
                    this.roleOptions = store.getters['auth/getRoles'].filter(rol => rol.id !== 1)
                    .map(rol => ({
                        value: rol.id, 
                        label: this.$t(`role_${rol.name}`) 
                    }))
                } else {
                    this.roleOptions = store.getters['auth/getRoles']
                        .map(rol => ({
                            value: rol.id, 
                            label: this.$t(`role_${rol.name}`) 
                        }))    
                }
            } else {
                this.roleOptions = store.getters['auth/getRoles']
                    .map(rol => ({
                        value: rol.id, 
                        label: this.$t(`role_${rol.name}`) 
                    }))
            }
        },
        showMessage(data) {
            if (data.success) {
                this.success(data.message, this.translate("user"), "UserIcon");
            } else {
                this.danger(data.message, this.translate("user"), "UserIcon");
            }
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