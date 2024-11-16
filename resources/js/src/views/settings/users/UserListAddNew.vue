<template>
    <b-sidebar
        id="add-new-user-sidebar"
        :visible="isAddNewUserSidebarActive"
        bg-variant="white"
        sidebar-class="sidebar-lg"
        shadow
        backdrop
        no-header
        right
        @hidden="resetForm"
        @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
    >
        <template #default="{ hide }">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                <h5 class="mb-0">{{ modal_title }}</h5>
                <feather-icon :disabled="loading" class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide"/>
            </div>

            <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
                <template #overlay>
                    <div class="d-flex align-items-center">
                        <b-spinner small type="grow" variant="secondary" />
                        <b-spinner type="grow" variant="dark" />
                        <b-spinner small type="grow" variant="secondary" />
                    </div>
                </template>

                <!-- BODY -->
                <validation-observer #default="{ handleSubmit }" ref="refFormObserver">
                    <!-- Form -->
                    <b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
                        <!-- Full Name -->
                        <validation-provider #default="validationContext" :name="$t('user_name')" rules="required">
                            <b-form-group :label="$t('user_name')" :description="$t('user_name_help')" label-for="full-name">
                                <b-form-input id="full-name" v-model="userData.name" autofocus autocomplete="off" :state="getValidationState(validationContext)"
                                    trim :placeholder="$t('user_name_placeholder')"/>
                            </b-form-group>
                        </validation-provider>

                        <!-- Email -->
                        <validation-provider #default="validationContext" :name="$t('user_email')" rules="required|email">
                            <b-form-group :label="$t('user_email')" :description="$t('user_email_help')" label-for="email">
                                <b-form-input id="email" v-model="userData.email" :state="getValidationState(validationContext)" 
                                    trim autocomplete="off" :placeholder="$t('user_email_placeholder')"/>
                            </b-form-group>
                        </validation-provider>

                        <!-- User Role -->
                        <validation-provider #default="validationContext" :name="$t('user_role_id')" rules="required">
                            <b-form-group :label="$t('user_profile')" :description="$t('user_profile_help')" label-for="user-role" :state="getValidationState(validationContext)">
                                <v-select
                                    id="profileList"
                                    v-model="userData.roles"
                                    multiple
                                    label="label"
                                    :options="roleOptions"
                                    :clearable="false"
                                    :searchable="false"
                                    :reduce="role => role.value"
                                    @input="onRoleChange"
                                    :placeholder="$t('select_an_option')"
                                />
                            </b-form-group>
                        </validation-provider>

                        <!-- Password -->
                        <validation-provider
                            #default="{ errors }"
                            :name="$t('user_password')"
                            :rules="isEdit ? '' : 'required|min:6'" 
                        >
                            <b-form-group :label="$t('user_password')" :description="isEdit ? $t('user_password_help_edit') : $t('user_password_help')" label-for="account-old-password">
                                <b-input-group class="input-group-merge">
                                    <b-form-input
                                        autocomplete="off"
                                        id="account-old-password"
                                        v-model="userData.password"
                                        name="password"
                                        :type="passwordFieldType"
                                        :state="errors.length > 0 ? false : null"
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
                            </b-form-group>
                        </validation-provider>

                        <!-- Work Days -->
                        <div v-if="isRoleDoctor">
                            <h5> {{ $t('work_days') }} ({{ startJobTime }} {{ $t('to') }} {{ endJobTime }} Hrs)</h5>
                            <table style="width: 100%!important;">
                                <tbody v-for="(item, index) in days" :key="index">
                                    <tr>
                                        <th>
                                            <b-form-checkbox
                                                :id="`checkbox-group-1-${index}`"
                                                v-model="item.active"
                                                name="flavour-1"
                                                class="demo-inline-spacing"
                                                @change="checkedDay(index)"
                                            />
                                            {{ item.text }}
                                        </th>
                                        <td>
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
                                                style="height: 2rem!important;"
                                            />
                                        </td>
                                        <td>
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
                                                style="height: 2rem!important;"
                                            />
                                        </td>
                                        <td>
                                            <b-button @click="addBreaks(index)" variant="primary" size="sm"
                                            v-b-tooltip.hover.right="$t('add_break')">                                            
                                                <feather-icon icon="PlusIcon" />
                                            </b-button>
                                        </td>
                                    </tr>
                                    <tr v-for="(b, i) in item.value.breaks" :key="index+i">
                                        <td>{{ $t('break_abbreviature') }}</td>
                                        <td>
                                            <cleave
                                                :id="`break-start-time-${index + i}`"
                                                v-model="b.start_time"
                                                class="form-control"
                                                :raw="false"
                                                :options="{
                                                    time: true,
                                                    timePattern: ['h', 'm'],
                                                }"
                                                placeholder="hh:mm"
                                                style="height: 2rem!important;"
                                            />
                                        </td>
                                        <td>
                                            <cleave
                                                :id="`break-end-time-${index + i}`"
                                                v-model="b.end_time"
                                                class="form-control"
                                                :raw="false"
                                                :options="{
                                                    time: true,
                                                    timePattern: ['h', 'm'],
                                                }"
                                                placeholder="hh:mm"
                                                style="height: 2rem!important;"
                                            />
                                        </td>
                                        <td>
                                            <b-button size="sm" @click="removeBreaks(index, i)" variant="danger"
                                                v-b-tooltip.hover.right="$t('button_tooltip_destroy')">                                            
                                                <feather-icon icon="MinusIcon" />
                                            </b-button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4"><hr></td>
                                    </tr>
                                </tbody>
                            </table>                      
                        </div>

                        <!-- Form Actions -->
                        <div class="d-flex mt-2">
                            <b-button
                                :disabled="loading"
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                variant="primary"
                                class="mr-2"
                                type="submit"
                            >
                                {{ $t("save") }}
                            </b-button>
                            <b-button
                                :disabled="loading"
                                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                                type="button"
                                variant="outline-secondary"
                                @click="hide"
                            >
                                {{ $t("cancel") }}
                            </b-button>
                        </div>
                    </b-form>
                </validation-observer>

            </b-overlay>
        </template>
    </b-sidebar>
</template>

<script>
import {
    BRow,
    BCol,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    BInputGroup,
    BInputGroupAppend,
    BLink,
    BFormCheckbox,
    BTooltip,
    VBTooltip,
    BOverlay,
    BSpinner,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { ref, watch } from "@vue/composition-api";
import { required, alphaNum, email, password } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import { useUtils as useI18nUtils } from "@core/libs/i18n";
import * as helper from '@/libs/helpers';
import store from "@/store";
import Cleave from "vue-cleave-component";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

//Providers
import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
    name: "UserListAddNew",
    components: {
        BCol,
        BRow,
        BSidebar,
        BForm,
        BFormGroup,
        BFormInput,
        BFormInvalidFeedback,
        BButton,
        BInputGroup,
        BInputGroupAppend,
        BLink,
        BFormCheckbox,
        BTooltip,
        VBTooltip,
        BOverlay,
        BSpinner,
        vSelect,
        Cleave,

        // Form Validation
        ValidationProvider,
        ValidationObserver,
        ToastificationContent,
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    model: {
        prop: "isAddNewUserSidebarActive",
        event: "update:is-add-new-user-sidebar-active",
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
        isAddNewUserSidebarActive: {
            type: Boolean,
            required: true,
        },
        roleOptions: {
            type: Array,
            required: true,
        },
        isEdit: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            required,
            alphaNum,
            email,
            password,
            clevePhone: {
                phone: true,
                phoneRegionCode: "US",
            },
            modal_title: this.$t("user_create"),
            passwordFieldType: "password",
        };
    },
    computed: {
        passwordToggleIcon() {
            return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
        },
        isRoleDoctor() {
            if (this.userData && this.userData.roles.length <= 0) return false; 
            return this.userData.roles.some(item => item === 4)
        },
        startJobTime () {
            return store.getters['auth/getSettings'].schedule_start_time
        },
        endJobTime() {
            return store.getters['auth/getSettings'].schedule_end_time
        },
    },
    methods: {
        checkedDay(index) {
            if (!this.days[index].active) {
                this.days[index].start_time = ''
                this.days[index].end_time = ''
                this.days[index].value.breaks = []
            } else {
                if (this.days[index].start_time === '' && this.days[index].end_time === '') {
                    this.days[index].start_time = this.startJobTime
                    this.days[index].end_time = this.endJobTime
                }
            }   
        },
        removeBreaks(index, i) {
            this.days[index].value.breaks.splice(i, 1)
        },
        addBreaks(index) {

            const breaks = this.days[index].value.breaks || []
            
            breaks.push({
                start_time: '',
                end_time: '',
            })

            this.days[index].value.breaks = breaks
        },
        togglePassword() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        }, 
        onRoleChange(evt) {
           
        },
    },
    watch:{
        isAddNewUserSidebarActive(val) {
            if (!val) {
                this.resetForm();
            }
        },
        isEdit(val) {
            if (val) {
                this.modal_title = this.$t("user_edit");
            } else {
                this.modal_title = this.$t("user_create");
            }
        },
        user(val) {

            console.log(val)

            if (val && val.roles != null || val.roles != undefined) {
                this.userData.id = val.id
                this.userData.roles = val.roles.map(item => item.id)
                this.userData.name = val.name
                this.userData.email = val.email
                this.userData.password = null

                const schedules = val.schedules.map(item => {
                    return {
                        ...item,
                        active: true,
                        breaks: item.breaks ? item.breaks : []
                    }
                })

                this.days = this.days.map(item => {
                    const schedule = schedules.find(s => s.day_of_week === item.value.day_of_week)
                    if (schedule) {
                        item.active = true
                        item.start_time = schedule.start_time
                        item.end_time = schedule.end_time
                        item.value.breaks = schedule.breaks ? schedule.breaks : []
                    }
                    return item
                })
            }
        }
    },
    setup(props, { emit }) {
        
        const { t } = useI18nUtils();

        const loading = ref(false)
        const days = ref([
            { text: t('days.abbreviature_monday'), value: { active: false, day: t('days.monday'), day_of_week: 1, start_time: '', end_time: '', breaks: [] } },
            { text: t('days.abbreviature_tuesday'), value: { active: false, day: t('days.tuesday'), day_of_week: 2, start_time: '', end_time: '', breaks: [] } },
            { text: t('days.abbreviature_Wednesday'), value: { active: false, day: t('days.Wednesday'), day_of_week: 3, start_time: '', end_time: '', breaks: [] } },
            { text: t('days.abbreviature_thursday'), value: { active: false, day: t('days.thursday'), day_of_week: 4, start_time: '', end_time: '', breaks: [] } },
            { text: t('days.abbreviature_friday'), value: { active: false, day: t('days.friday'), day_of_week: 5, start_time: '', end_time: '', breaks: [] } },
            { text: t('days.abbreviature_saturday'), value: { active: false, day: t('days.saturday'), day_of_week: 6, start_time: '', end_time: '', breaks: [] } },
            { text: t('days.abbreviature_sunday'), value: { active: false, day: t('days.sunday'), day_of_week: 0, start_time: '', end_time: '', breaks: [] } },
        ])
        const blankUserData = {
            id: null,
            name: null,
            email: null,
            password: null,
            roles: [],
            schedules: [],
        };

        const userData = ref(JSON.parse(JSON.stringify(blankUserData)));
        const resetuserData = () => {
            userData.value = JSON.parse(JSON.stringify(blankUserData));
        };

        const onSubmit = async () => {

            userData.value.schedules = days.value.filter(item => item.active).map(item => ({
                day_of_week: item.value.day_of_week,
                day: item.value.day,
                start_time: item.start_time,
                end_time: item.end_time,
                breaks: item.value.breaks != null || item.value.breaks != undefined ? item.value.breaks.map(b => ({
                    start_time: b.start_time,
                    end_time: b.end_time,
                })) : []
            }))

            try {
                loading.value = true                
                const { data } = props.isEdit ? await UserResource.update(userData.value.id, userData.value) : await UserResource.store(userData.value);
                console.log(data)
                loading.value = false
                if (data.success) {
                    helper.success(data.message)                    
                    emit("get-users");
                    emit("update:is-add-new-user-sidebar-active", false);
                } else {
                    helper.danger(data.message)
                }
            } catch (e) {
                loading.value = false
                helper.handleResponseErrors(e)
            }
        }

       
        const { refFormObserver, getValidationState, resetForm } = formValidation(resetuserData);

        return {
            loading,
            days,
            userData,
            onSubmit,

            refFormObserver,
            getValidationState,
            resetForm,
        };
    },
};
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";

#add-new-user-sidebar {
    .vs__dropdown-menu {
        max-height: 200px !important;
    }
}
</style>