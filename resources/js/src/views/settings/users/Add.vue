<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>
        <b-row>
            <b-col cols="12" md="12">
                <b-card no-body class="mb-0">
                    <div class="m-2">

                        <!-- Media -->
                        <!-- <b-media class="mb-2">
                            <template #aside>
                                <b-avatar ref="previewEl" :src="avatar" :text="avatarText(user.name)"
                                :variant="`light-${resolveRoleVariant(user.roles)}`" size="90px" rounded/>
                            </template>
                            <h4 class="mb-1">{{ user.name }}</h4>
                            <div class="d-flex flex-wrap">
                                <b-button size="sm" variant="primary" @click="$refs.refInputEl.click()">
                                    <input ref="refInputEl" type="file" class="d-none" @input="inputImageRenderer"/>
                                    <span class="d-none d-sm-inline">{{$t("change")}}</span>
                                    <feather-icon icon="EditIcon" class="d-inline d-sm-none"/>
                                </b-button>
                                <b-button size="sm" @click="resetAvatar" variant="outline-secondary" class="ml-1">
                                    <span class="d-none d-sm-inline">{{$t("cancel")}}</span>
                                    <feather-icon icon="TrashIcon" class="d-inline d-sm-none"/>
                                </b-button>
                            </div>
                        </b-media> -->

                        <!-- User Info: Input Fields -->
                        <b-form>
                            <b-row>
                                <!-- Field: name -->
                                <b-col cols="12" md="6">
                                    <b-form-group :label="$t('user_name')" :description="$t('user_name_help')" label-for="username">
                                        <b-form-input autocomplete="off" id="username" v-model="user.name" :placeholder="$t('user_name_placeholder')"/>
                                    </b-form-group>
                                </b-col>

                                <!-- Field: email -->
                                <b-col cols="12" md="6">
                                    <b-form-group :label="$t('user_email')" :description="$t('user_email_help')" label-for="email">
                                        <b-form-input
                                            autocomplete="off"
                                            id="email"
                                            v-model="user.email"
                                            type="email"
                                            :placeholder="$t('user_email_placeholder')"
                                        />
                                    </b-form-group>
                                </b-col>

                                <!-- Profile -->
                                <b-col cols="12" md="6">
                                    <b-form-group
                                        label-for="profileList"
                                        :label="$t('user_profile')"
                                        :description="$t('user_profile_help')"
                                    >
                                        <v-select
                                            id="profileList"
                                            v-model="user.roles"
                                            multiple
                                            label="name"
                                            :options="roles"
                                            :clearable="false"
                                            :searchable="false"
                                            :reduce="role => role.id"
                                            @input="onRoleChange"
                                            :placeholder="$t('select_an_option')"
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
                                                autocomplete="off"
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

                                <b-col v-if="isRoleDoctor" cols="12">
                                    <!-- <b-form-group :label="$t('work_days')" :description="$t('work_days_help')"> -->
                                        <label for="checkbox-group-1">
                                            {{ $t('work_days') }} ({{ startJobTime }} {{ $t('to') }} {{ endJobTime }} Hrs)
                                        </label>
                                        <b-form-checkbox-group
                                            id="checkbox-group-1"
                                            v-model="schedules"
                                            :options="days"
                                            name="flavour-1"
                                            class="demo-inline-spacing"
                                        />
                                    <!-- </b-form-group> -->
                                </b-col>

                                <b-col v-if="isRoleDoctor" cols="12">
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

                                        <!--  -->
                                        <b-col md="2">
                                            <b-form-group :label="$t('days.start_time')" :label-for="`item-${index}`">
                                                <cleave
                                                    :id="`start-time-${index}`"
                                                    v-model="item.lunch_start_time"
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
                                                <cleave
                                                    :id="`start-time-${index}`"
                                                    v-model="item.lunch_end_time"
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

                        <!-- Action Buttons -->
                        <b-button
                            variant="primary"
                            class="mb-1 mb-sm-0 mr-0 mr-sm-1 mt-3"
                            @click="store"
                        >
                            {{ $t("save") }}
                        </b-button>
                        <b-button                            
                            variant="outline-secondary"
                            class="mb-1 mb-sm-0 mr-0 mr-sm-1 mt-3"
                            @click="$router.push({ name: 'settings-users' })"
                        >
                            {{ $t("back") }}
                        </b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        
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
    BTab,
    BTabs,
    BAlert,
    BLink,
    BInputGroup,
    BInputGroupAppend,
    BFormTextarea,
    BFormCheckboxGroup, 
    BFormCheckbox,
    BFormTimepicker,
    BOverlay,
    BSpinner,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import Cleave from "vue-cleave-component";
import { heightTransition } from '@core/mixins/ui/transition'
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
        BFormTimepicker,
        BOverlay,
        BSpinner,
    },
    directives: {
        Ripple,
    },
    mixins: [heightTransition],
    data() {
        return {
            loading: false,
            limitSize: 5242880,
            user_id: null,
            role_id: null,
            user: {
                roles: [],
                schedules: [],
            },
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
                { text: this.$t('days.sunday'), value: { day: this.$t('days.sunday'), day_of_week: 0, start_time: null, end_time: null, lunch_start_time: null, lunch_end_time: null } },
                { text: this.$t('days.monday'), value: { day: this.$t('days.monday'), day_of_week: 1, start_time: null, end_time: null, lunch_start_time: null, lunch_end_time: null } },
                { text: this.$t('days.tuesday'), value: { day: this.$t('days.tuesday'), day_of_week: 2, start_time: null, end_time: null, lunch_start_time: null, lunch_end_time: null } },
                { text: this.$t('days.Wednesday'), value: { day: this.$t('days.Wednesday'), day_of_week: 3, start_time: null, end_time: null, lunch_start_time: null, lunch_end_time: null } },
                { text: this.$t('days.thursday'), value: { day: this.$t('days.thursday'), day_of_week: 4, start_time: null, end_time: null, lunch_start_time: null, lunch_end_time: null } },
                { text: this.$t('days.fiday'), value: { day: this.$t('days.fiday'), day_of_week: 5, start_time: null, end_time: null, lunch_start_time: null, lunch_end_time: null } },
                { text: this.$t('days.saturday'), value: { day: this.$t('days.saturday'), day_of_week: 6, start_time: null, end_time: null, lunch_start_time: null, lunch_end_time: null } },
            ],
            schedules: [],
            userRoles: store.getters['auth/getUser'].roles.map(role => role.id)
        };
    },
    computed: {
        passwordToggleIcon() {
            return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
        },
        isAdmin () {
            return store.getters['auth/getRoleId'] === 1 //this.userRoles.includes(1)
        },
        startJobTime () {
            return store.getters['auth/getSettings'].schedule_start_time
        },
        endJobTime() {
            return store.getters['auth/getSettings'].schedule_end_time
        },
        isRoleDoctor() {
            return store.getters['auth/getRoleId'] === 4 //this.user.roles.some(item => item === 4)
        }
    },
    created() {
        window.addEventListener('resize', this.initTrHeight)
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
        }
        this.days = this.days.map(item => ({...item, 
            value: {    
                ...item.value,            
                start_time: store.getters['auth/getSettings'].schedule_start_time,
                lunch_start_time: null, //store.getters['auth/getSettings'].schedule_start_time,
                lunch_end_time: store.getters['auth/getSettings'].schedule_end_time,
                end_time: null, //store.getters['auth/getSettings'].schedule_end_time,
                active: true,
            }
        }))        
    },
    destroyed() {
        window.removeEventListener('resize', this.initTrHeight)
    },
    async mounted() {
        // this.initTrHeight()  
        this.mapRoles()
    },
    methods: {
        validateWorkingHours(days) {
            for (const day of days) {
                const { start_time, end_time, lunch_start_time, lunch_end_time } = day.value;

                if (start_time && end_time) {
                    if (start_time >= end_time) {
                    return `End time must be greater than start time for ${day.day}`;
                    }
                }

                if (lunch_start_time && lunch_end_time) {
                    if (lunch_start_time >= lunch_end_time) {
                    return `Lunch end time must be greater than lunch start time for ${day.day}`;
                    }
                }

                if (start_time && lunch_start_time) {
                    if (start_time >= lunch_start_time) {
                    return `Lunch start time must be greater than work start time for ${day.day}`;
                    }
                }

                if (lunch_end_time && end_time) {
                    if (lunch_end_time >= end_time) {
                    return `Lunch end time must be less than work end time for ${day.day}`;
                    }
                }

                if (lunch_start_time && end_time && start_time && lunch_end_time) {
                    if (lunch_start_time < start_time || lunch_end_time > end_time) {
                    return `Lunch times must be within work start and end times for ${day.day}`;
                    }
                }
            }
            return null; // Validation passed
        },
        repeateAgain() {
            this.items.push({
                id: this.nextTodoId += this.nextTodoId,
            })

            this.$nextTick(() => {
                this.trAddHeight(this.$refs.row[0].offsetHeight)
            })
        },
        removeItem(index) {
            this.items.splice(index, 1)
            this.trTrimHeight(this.$refs.row[0].offsetHeight)
        },
        initTrHeight() {
            this.trSetHeight(null)
            this.$nextTick(() => {
                this.trSetHeight(this.$refs.form.scrollHeight)
            })
        },
        onRoleChange(value) {
            this.role_id = value;
        },        
        async store() {
            
            //Dentro de user.roles detectar si existe el rol de doctor
            const existRoleDoctor = this.user.roles.some(item => item.id === 4)
            if (existRoleDoctor) {
                const isOkTimeDetail = this.schedules.some(item => {
                    const isValid = item.start_time === null || item.start_time == "" || item.end_time === null || item.end_time == ""
                    || item.lunch_start_time === null || item.lunch_start_time == "" || item.lunch_end_time === null || item.lunch_end_time == "";
                    return isValid
                });

                if (isOkTimeDetail) {
                    this.danger(this.$t('days.error_days'))
                    return false
                }

                const validationError = this.validateWorkingHours(this.days);
                if (validationError) {
                    this.danger(validationError);
                    return false;
                }

                this.user.schedules = this.schedules
            }

            console.log(this.user)

            try {
                this.loading = true;
                const { data } = await UserResource.store(this.user);
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
            this.roles = []
            const data = store.getters['auth/getRoles']            
            if (this.isAdmin) {
                this.roles = _.map(data, (element) => {
                    return {
                        id: element.id,
                        name: this.$t(`role_${element.name}`)
                    }
                })
            } else {
                this.roles = data.filter(d => d.id != 1).map((element) => {
                    return {
                        id: element.id,
                        name: this.$t(`role_${element.name}`)
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
    },
    watch: {
        schedules(value) {
            console.log(value)
        }
    }
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
@import "~@resources/scss/vue/libs/vue-flatpicker.scss";
</style>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>