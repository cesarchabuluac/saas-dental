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

            <!-- BODY -->
            <validation-observer #default="{ handleSubmit }" ref="refFormObserver">
                <!-- Form -->
                <b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
                    <!-- Full Name -->
                    <validation-provider #default="validationContext" :name="$t('user_name')" rules="required">
                        <b-form-group :label="$t('user_name')" label-for="full-name">
                            <b-form-input id="full-name" v-model="userData.name" autofocus :state="getValidationState(validationContext)"
                                trim :placeholder="$t('user_name_placeholder')"/>
                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>

                    <!-- Email -->
                    <validation-provider #default="validationContext" :name="$t('user_email')" rules="required|email">
                        <b-form-group :label="$t('user_email')" label-for="email">
                            <b-form-input id="email" v-model="userData.email" :state="getValidationState(validationContext)" 
                                trim :placeholder="$t('user_email_placeholder')"/>
                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>

                    <!-- User Role -->
                    <validation-provider #default="validationContext" :name="$t('user_role_id')" rules="required">
                        <b-form-group :label="$t('user_role_id')" label-for="user-role" :state="getValidationState(validationContext)">
                            <v-select v-model="userData.role" :options="roleOptions"
                                :reduce="(val) => val.value"
                                :clearable="false"
                                :searchable="false"
                                input-id="user-role"
                                :placeholder="$t('user_role_id_placeholder')"
                            />
                            <b-form-invalid-feedback :state="getValidationState(validationContext)">
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>

                    <!-- Password -->
                    <validation-provider
                        #default="{ errors }"
                        :name="$t('user_password')"
                        rules="required|min:6"
                    >
                        <b-form-input
                            v-model="userData.password"
                            type="password"
                            :state="errors.length > 0 ? false : null"
                            :placeholder="
                                $t('user_password_placeholder')
                            "
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>

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
        </template>
    </b-sidebar>
</template>

<script>
import {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { ref } from "@vue/composition-api";
import { required, alphaNum, email, password } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import store from "@/store";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

//Providers
import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
    components: {
        BSidebar,
        BForm,
        BFormGroup,
        BFormInput,
        BFormInvalidFeedback,
        BButton,
        vSelect,

        // Form Validation
        ValidationProvider,
        ValidationObserver,
        ToastificationContent,
    },
    directives: {
        Ripple,
    },
    model: {
        prop: "isAddNewUserSidebarActive",
        event: "update:is-add-new-user-sidebar-active",
    },
    props: {
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
            modal_title: this.$t("user_create"),
        };
    },
    setup(props, { emit }) {
        const loading = ref(false)
        const blankUserData = {
            name: null,
            email: null,
            role: null,
            password: null,
        };

        const userData = ref(JSON.parse(JSON.stringify(blankUserData)));
        const resetuserData = () => {
            userData.value = JSON.parse(JSON.stringify(blankUserData));
        };

        const onSubmit = async () => {
            try {
                loading.value = true
                const { data } = await UserResource.store({...userData.value,});
                loading.value = false
                console.log(data)
                if (data.success) {
                    emit("show-message", data);
                    emit("get-users");
                    emit("update:is-add-new-user-sidebar-active", false);
                } else {
					emit("show-message", data);
                }
            } catch (e) {
                loading.value = false
                console.log(e)
				let _data = {}
               
                if (e.response.status === 422) {
					let errors = Object.values(e.response.data.errors)
      				errors = errors.flat()
					_data = {
						success: false,
						message: errors[0]
					}
                } else {
                    _data = {
						success: false,
						message: e.message
					}
                }
				 emit("show-message", _data);
            }
        };

        const { refFormObserver, getValidationState, resetForm } = formValidation(resetuserData);

        return {
            loading,
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