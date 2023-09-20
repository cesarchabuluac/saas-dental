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
                <b-tabs pills>
                    <!-- Tab: Account -->
                    <b-tab active>
                        <template #title>
                            <feather-icon icon="UserIcon" size="16" class="mr-0 mr-sm-50"/>
                            <span>{{$t("user_account")}}</span>
                        </template>

                        <!-- Media -->
                        <b-media class="mb-2">
                            <template #aside>
                                <b-avatar ref="previewEl" :src="avatar" :text="avatarText(user.name)"
                                :variant="`light-${resolveRoleVariant(user.roles)}`" size="90px" rounded/>
                            </template>
                            <h4 class="mb-1">{{ user.name }}</h4>
                            <div class="d-flex flex-wrap">
                                <b-button variant="primary" @click="$refs.refInputEl.click()">
                                    <input ref="refInputEl" type="file" class="d-none" @input="inputImageRenderer"/>
                                    <span class="d-none d-sm-inline">{{$t("change")}}</span>
                                    <feather-icon icon="EditIcon" class="d-inline d-sm-none"/>
                                </b-button>
                                <b-button @click="resetAvatar" variant="outline-secondary" class="ml-1">
                                    <span class="d-none d-sm-inline">{{$t("cancel")}}</span>
                                    <feather-icon icon="TrashIcon" class="d-inline d-sm-none"/>
                                </b-button>
                            </div>
                        </b-media>

                        <!-- User Info: Input Fields -->
                        <b-form>
                            <b-row>
                                <!-- Field: name -->
                                <b-col cols="12" md="6">
                                    <b-form-group :label="$t('user_name')" label-for="username">
                                        <b-form-input id="username" v-model="user.name" :placeholder="$t('user_name_placeholder')"/>
                                    </b-form-group>
                                </b-col>

                                <!-- Field: email -->
                                <b-col cols="12" md="6">
                                    <b-form-group :label="$t('user_email')" label-for="email">
                                        <b-form-input
                                            id="email"
                                            v-model="user.email"
                                            type="email"
                                            :placeholder="$t('user_email_placeholder')"
                                            disabled
                                        />
                                    </b-form-group>
                                </b-col>

                                <!-- Profile -->
                                <b-col cols="12" md="6">
                                    <b-form-group
                                        label-for="profileList"
                                        :label="$t('user_profile')"
                                    >
                                        <v-select
                                            id="profileList"
                                            v-model="role_id"
                                            label="name"
                                            :options="roles"
                                            :clearable="false"
                                            :reduce="role => role.id"
                                            @input="onRoleChange"
                                        />
                                    </b-form-group>
                                </b-col>
                                <!--/ Profile -->

                                <b-col cols="12" md="6">
                                    <b-form-group
                                        :label="$t('user_password')"
                                        label-for="account-old-password"
                                    >
                                        <b-input-group
                                            class="input-group-merge"
                                        >
                                            <b-form-input
                                                id="account-old-password"
                                                v-model="user.password"
                                                name="password"
                                                :type="passwordFieldType"
                                                :placeholder="$t('user_password_placeholder')"
                                            />
                                            <b-input-group-append is-text>
                                                <feather-icon
                                                    :icon="passwordToggleIcon"
                                                    class="cursor-pointer"
                                                    @click="togglePassword"
                                                />
                                            </b-input-group-append>
                                        </b-input-group>
                                        <small>{{
                                            $t("user_password_help")
                                        }}</small>
                                    </b-form-group>
                                </b-col>

                                <b-col v-if="user.role_id === 4" cols="12" md="6">
                                    <b-form-group :label="$t('work_days')" :description="$t('work_days_help')">
                                        <b-form-checkbox-group
                                            id="checkbox-group-1"
                                            v-model="selectedDays"
                                            :options="days"
                                            name="flavour-1"
                                            class="demo-inline-spacing"
                                             @input="updateSchedules"
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col v-if="user.role_id === 4" cols="12" md="12">                          
                                    <b-row
                                        v-for="(item, index) in schedules"
                                        :id="item.id"
                                        :key="index"
                                        ref="row"
                                        >

                                        <!-- Item Name -->
                                        <b-col md="2">
                                            <b-form-group :label="$t('days.day')" :label-for="`item-${index}`">
                                                <b-form-input readonly :value="item.day" :id="`item-${index}`" type="text"/>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="2">
                                            <b-form-group :label="$t('days.start_time')" :label-for="`item-${index}`">
                                                <!-- <b-form-timepicker size="md" v-model="item.start_time" :id="`start-time-${index}`" locale="es"/> -->
                                                <cleave
                                                    :id="`start-time-${index}`"
                                                    v-model="item.start_time"
                                                    class="form-control"
                                                    :raw="false"
                                                    :options="{
                                                        time: true,
                                                        timePattern: ['h', 'm'],
                                                    }"
                                                    placeholder="hh:mm"
                                                />
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="2">
                                            <b-form-group :label="$t('days.end_time')" :label-for="`item-${index}`">
                                                <!-- <b-form-timepicker size="md" v-model="item.end_time" :id="`end-time-${index}`" locale="es"/> -->
                                                <cleave
                                                    :id="`end-time-${index}`"
                                                    v-model="item.end_time"
                                                    class="form-control"
                                                    :raw="false"
                                                    :options="{
                                                        time: true,
                                                        timePattern: ['h', 'm'],
                                                    }"
                                                    placeholder="hh:mm"
                                                />
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-tab>                    
                </b-tabs>

                <!-- Action Buttons -->
                <b-button
                    variant="primary"
                    class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                    @click="update"
                >
                    {{ $t("save") }}
                </b-button>
                <b-button
                    variant="outline-secondary"
                    class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                    @click="$router.push({ name: 'settings-users' })"
                >
                    {{ $t("back") }}
                </b-button>
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
    BFormCheckboxGroup,
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
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { avatarText } from "@core/utils/filter";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import Cleave from "vue-cleave-component";
import router from "@/router";
import store from "@/store";
import "cleave.js/dist/addons/cleave-phone.us";

// Providers
import UserProvider from "@/providers/Users";

const UserResource = new UserProvider();

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
        BFormCheckboxGroup,
        vSelect,
        flatPickr,
        Cleave,
        BTab,
        BTabs,
        BAlert,
        BLink,
        BInputGroup,
        BInputGroupAppend,
        BFormTextarea,
        BOverlay,
        BSpinner,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            loading: false,
            limitSize: 5242880,
            user_id: null,
            role_id: null,
            user: {},
            avatarDefault: require("@/assets/images/avatar_default.png"),
            avatar: null,
            roleSelect: {
                name: null,
                id: null,
            },
            clevePhone: {
                phone: true,
                phoneRegionCode: "US",
            },
            passwordFieldType: "password",
            loading: false,
            isChangeAvatar: false,
            roles: [],
            days: [
                { text: this.$t('days.sunday'), value: 0 },
                { text: this.$t('days.monday'), value: 1 },
                { text: this.$t('days.tuesday'), value: 2 },
                { text: this.$t('days.Wednesday'), value: 3 },
                { text: this.$t('days.thursday'), value: 4 },
                { text: this.$t('days.fiday'), value: 5 },
                { text: this.$t('days.saturday'), value: 6 },
            ],
            schedules: [],
            selectedDays: [],
        };
    },
    computed: {
        passwordToggleIcon() {
            return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
        },
        isAdmin () {
            return store.state.auth.user.roles[0].id === 1 || false
        }
    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
        }
        this.mapRoles()
    },
    async mounted() {

        // this.days = this.days.map(item => ({...item, 
        //     value: {    
        //         ...item.value,            
        //         start_time: store.getters['auth/getSettings'].schedule_start_time,
        //         end_time: store.getters['auth/getSettings'].schedule_end_time,
        //         active: true,
        //     }
        // }))

        await this.getUser();        
    },
    methods: {
        onRoleChange(value) {
            this.role_id = value;
        },
        async getUser() {
            this.loading = true;
            const { data } = await UserResource.getUserDetail(router.currentRoute.params.id);
            this.loading = false;
            this.user = data.data;
            this.avatar = this.user.has_media ? this.user.avatar : this.avatarDefault
            this.user.role_id = this.user.roles[0].id
            this.role_id = this.user.role_id
            this.schedules = this.user.schedules
            this.schedules.map(item => this.selectedDays.push(item.day_of_week))
        },
        async update() {
            this.user.role_id = this.role_id

             if (this.user.role_id === 4) {
                const isOkTimeDetail = this.schedules.some(item => {
                    const isValid = item.start_time === null || item.start_time == "" || item.end_time === null || item.end_time == "";
                    return isValid
                });

                if (isOkTimeDetail) {
                    this.danger(this.$t('days.error_days'))
                    return false
                }

                this.user.schedules = this.schedules.map(item => ({
                    id: item.id || null,
                    day: item.day,
                    day_of_week: item.day_of_week,
                    start_time: item.start_time,
                    end_time: item.end_time,
                    active: true,
                }))
            }

            try {
                this.loading = true;
                const { data } = await UserResource.update(this.user.id, this.user);
                this.loading = false;
                if (data.success) {
                    this.success(data.message);
                    router.push({ name: "settings-users" });
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
        togglePassword() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },       
        mapRoles() {
            const data = store.getters['auth/getRoles']
            if (this.isAdmin) {
                this.roles = _.map(data, (element) => {
                    return {
                        id: element.id,
                        name: element.name
                    }
                })
            } else {
                this.roles = _.filter(data, (element) => element.id !== 1).map((element) => {
                    return {
                        id: element.id,
                        name: element.name
                    }
                })
            }
        },
        inputImageRenderer(evt) {
            const file = evt.target.files[0];

            //file size valid
            if (file.size > this.limitSize) {
                this.danger(this.$t('image_format_limit_help'), "Error", "AlertCircleIcon");
                return
            }

            /// Lee el archivo local y lo genera en codificación gbk
            const reader = new FileReader();
            reader.onload = (data) => {
                // Después de una lectura exitosa
                let res = data.target || data.srcElement;
                // Resultados de salida después de leer
                this.user.change_avatar = true;
                this.user.avatar = res.result;
                this.avatar = res.result;
            };
            reader.readAsDataURL(file);
        },
        resetAvatar() {
            this.getUser();
        },  
        updateSchedules() {
            // Crear una copia del arreglo "selectedDays" para que no se modifique directamente
            const selectedDaysCopy = [...this.selectedDays];

            // Recorrer "schedules" y eliminar los elementos que no estén en "selectedDays"
            this.schedules = this.schedules.filter(schedule => {
            const index = selectedDaysCopy.indexOf(schedule.day_of_week);
            if (index !== -1) {
                // Si el día existe en "selectedDays", quítalo de la copia
                selectedDaysCopy.splice(index, 1);
                return true;
            }
            return false;
            });

            // Recorrer "selectedDaysCopy" y agregar los días que no estén en "schedules"
            selectedDaysCopy.forEach(dayOfWeek => {
            const exists = this.schedules.some(schedule => schedule.day_of_week === dayOfWeek);
                if (!exists) {
                    const day = this.days.find(day => day.value === dayOfWeek);
                    if (day) {
                        this.schedules.push({
                            day: day.text,
                            day_of_week: day.value,
                            start_time: store.getters['auth/getSettings'].schedule_start_time, // Puedes configurar el valor inicial aquí
                            end_time: store.getters['auth/getSettings'].schedule_end_time,   // Puedes configurar el valor inicial aquí
                        });
                    }
                }
            });

            // Ordena "schedules" según "day_of_week"
            this.schedules.sort((a, b) => a.day_of_week - b.day_of_week);
        },
    },    
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
</style>