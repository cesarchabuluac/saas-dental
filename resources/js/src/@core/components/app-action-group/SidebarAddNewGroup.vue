<template>
    <b-sidebar id="sidebar-add-new-group" ref="sidebar-add-new-group" sidebar-class="sidebar-lg" bg-variant="white"
        shadow backdrop no-header right>
        <template #default="{ hide }">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                <h5 class="mb-0">{{ $t("action_groups.title") }}</h5>
                <feather-icon :disabled="laoding" class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide"/>
            </div>

            <!-- Body -->
            <b-form class="p-2">
                <!-- Patient Name -->
                <b-form-group :label="$t('action_groups.name')" label-for="patient-name">
                    <b-form-input v-model="data.group_name" trim :placeholder="$t('action_groups.name_placeholder')"/>
                </b-form-group>               

                <!-- Form Actions -->
                <div class="d-flex mt-2">
                    <b-button v-if="data" :disabled="loading" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mr-2" 
                    @click="saveInfo">
                        {{ $t("save") }}
                    </b-button>
                    <b-button :disabled="loading" v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" @click="hide">
                        {{ $t("cancel") }}
                    </b-button>
                </div>
            </b-form>
        </template>
    </b-sidebar>
</template>

<script>
import {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BButton,
} from "bootstrap-vue";
import { ref, computed, watch } from "@vue/composition-api";
import Ripple from "vue-ripple-directive";
import store from "@/store";
export default {
    components: {
        BSidebar,
        BForm,
        BFormGroup,
        BFormInput,
        BFormTextarea,
        BButton,
    },
    directives: {
        Ripple,
    },
	props:['data', 'active', 'loading'],
    setup(props, context) {   

        const saveInfo = () => {           
            context.emit('store')
        }

        return {
            saveInfo,
        };
    },
	watch: {
        active(value) {
            this.$refs['sidebar-add-new-group'].hide()
        },
        loading(value) {
            console.log(value)
        }
    },
};
</script>

