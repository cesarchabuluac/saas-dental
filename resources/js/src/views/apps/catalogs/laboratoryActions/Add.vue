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
                       <!-- Field: name -->
                       <b-col cols="12" md="4">
                           <b-form-group :label="$t('laboratory_actions.name')" :description="$t('laboratory_actions.name_help')" label-for="name">
                               <b-form-input id="name" v-model="action.name" :placeholder="$t('laboratory_actions.name_placeholder')"/>
                           </b-form-group>
                       </b-col>

                       <!-- Cost -->
                       <b-col cols="12" md="4">
                           <b-form-group :label="$t('laboratory_actions.cost')" :description="$t('laboratory_actions.cost_help')" label-for="cost">
                               <b-form-input id="cost" v-model="action.cost" :placeholder="$t('laboratory_actions.cost_placeholder')" type="number"/>
                           </b-form-group>
                       </b-col>
                   </b-row>

                   <!-- Action Buttons -->
                   <b-button v-if="canAccess('laboratory_actions.store')" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="store">
                       {{ $t("save") }}
                   </b-button>
                   <b-button variant="outline-secondary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="$router.push({name: 'laboratory-actions',})">
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
   BSpinner,
   BOverlay,
} from "bootstrap-vue";
import _ from "lodash";
import Ripple from "vue-ripple-directive";
import router from "@/router";

// Providers
import LaboratoryActionProvider from "@/providers/LaboratoryActions";
const LaboratoryActionResource = new LaboratoryActionProvider();

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
       BTab,
       BTabs,
       BAlert,
       BLink,
       BInputGroup,
       BInputGroupAppend,
       BFormTextarea,
       BSpinner,
       BOverlay,
   },
   data() {
       return {
           action: {},
           loading: false,
       };
   },
   methods: {
       async store() {
           try {
               this.loading = true
               const { data } = await LaboratoryActionResource.save(this.action);
               this.loading = false
               if (data.success) {
                   this.success(data.message, "", "CheckIcon");
                   router.push({ name: "laboratory-actions" });
               } else {
                   this.danger(data.message, "Error", "AlertCircleIcon");
               }
           } catch (e) {
               this.loading = false
               this.handleResponseErrors(e);
           }
       },
   },
};
</script>

<style lang="scss"></style>
