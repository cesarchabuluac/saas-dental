<template>
    <div>
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Role -->
                    <b-col cols="12" md="4" class="align-items-center justify-content-start mb-1 mb-md-0">
                        <label for="select-rol">{{ $t('role')}}</label>
                        <v-select
                            :disabled="checkedPermissions.length > 0"
                            id="select-rol"
                            v-model="role_id"
                            :options="roles"
                            :reduce="option => option.id"
                            label="name"
                            :placeholder="$t('select_an_option')"
                            :clearable="false"
                            :searchable="false"
                        />                       
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">                        
                    </b-col>
                </b-row>
            </div>
        </b-card>

        <b-card no-body class="mb-0 mt-1">
            <div class="m-2"> 
                <b-row>
                <b-col cols="12" md="4" v-for="(items, index) in permissions" :key="index">
                    <b-card-actions :ref="index" :title="$t(`permissions.${index}.module`)" action-collapse :collapsed="false">
                        <b-table
                            striped
                            responsive
                            :items="items"
                            class="mb-0"
                            :fields="columns"
                            small
                            :busy.sync="loading"
                            >
                            
                            <template #cell(name)="data">
                                {{ $t(`permissions.${index}.${data.item.name}`) }}
                            </template>
                            <template #cell(actions)="data">
                                <b-form-checkbox :disabled="!role_id" @change="changePermission(data.item)" :checked="checkPermission(data.item)" />
                            </template>
                        </b-table>                                  
                    </b-card-actions>
                </b-col>  
                </b-row>              
            </div>
        </b-card>       

        <div v-if="checkedPermissions.length > 0" class="buy-now">
            <b-button :disabled="loading" @click="updatePermissions" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger">
            {{ $t('update_permissions') }}
            </b-button>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BInputGroupPrepend, 
    BInputGroupAppend, 
    BInputGroup,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BSpinner,BFormCheckbox,
    BListGroup, BListGroupItem,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";
import store from "@/store";
import PermissionProvider from "@/providers/Permissions";
import BCardActions from '@core/components/b-card-actions/BCardActions.vue'

const PermissionResource = new PermissionProvider();

export default {
    components: {
        BCard,
        BRow,
        BCol,
        BFormInput,
        BInputGroupPrepend, 
        BInputGroupAppend, 
        BInputGroup,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BSpinner,
        vSelect,
        BFormCheckbox,
        BListGroup, 
        BListGroupItem,
        //
        BCardActions,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            loading: false,
            permissions: [],
            roles: [],
            role_id: null,
            perPageOptions: [10, 25, 50, 100],
            perPage: 500,
            currentPage: 1,
            totalPermissions: 0,
            columns: [
                {
                    key: "name",
                    label: this.$t("permissions.name"),
                },
                {
                    key: "actions",
                    label: '',
                },                
            ],
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            checkedPermissions: []
            
        };
    },
    computed: {
        isAdmin () {
            return store.getters['auth/getRoleId'] === 1 || store.getters['auth/getRoleId'] === 2
        }
    },
    watch: {},
    async mounted() {
        this.roles = store.getters['auth/getRoles'].filter(role => role.id !== 1 && role.id !== 2);
        await this.getPermissions()
    },
    methods: {
        selectRole(e) {
            
        },
        async getPermissions() {
            if (store.getters['auth/getAllPermissions'].length > 0) {
                this.permissions = _.groupBy(store.getters['auth/getAllPermissions'], 'group')
            } else {

                this.loading = true;
                this.permissions = []
                const query = {
                    search: this.searchQuery,
                    is_all: true,
                };
                const { data } = await PermissionResource.index(query);
                this.loading = false;            
                this.permissions = _.groupBy(data.data, 'group')
                store.commit('auth/SET_ALL_PERMISSIONS', data.data)
            }
        }, 
        async updatePermissions () {
            try {
                this.loading = true
                const { data } = await PermissionResource.checkPermissions(this.checkedPermissions)
                this.loading = false                
                if(data.success) {
                    this.permissions = []
                    this.checkedPermissions = []
                    this.role_id = null                    
                    store.commit('auth/SET_ALL_PERMISSIONS', data.data)
                    this.success(data.message)

                    setTimeout(async () => {
                        await this.getPermissions()    
                    }, 100);                    
                    
                } else {
                    this.danger(data.message)
                }
            }catch(e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        changePermission(item) {

            // Verificar si el permiso ya está en el arreglo
            const existingPermissionIndex = this.checkedPermissions.findIndex(permission => {
                return permission.roleId === this.role_id && permission.permission === item.name;
            });

            if (existingPermissionIndex !== -1) {
                // Si el permiso ya está en el arreglo, quítalo (unchecked)
                this.checkedPermissions.splice(existingPermissionIndex, 1);
            } else {
                // Si el permiso no está en el arreglo, agrégalo (checked)
                this.checkedPermissions.push({
                    roleId: this.role_id,
                    permission: item.name
                });
            }
        },
        checkPermission (item) {
            if (!this.role_id) return false
            const role = item.roles.find(r => r.id === this.role_id);
            return role && role.pivot ? item.id == role.pivot.permission_id : false;
        },
    },
};
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>