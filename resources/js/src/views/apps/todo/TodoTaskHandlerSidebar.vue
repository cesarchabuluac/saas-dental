<template>
  <div>
    <b-sidebar
      id="sidebar-task-handler"
      sidebar-class="sidebar-lg"
      :visible="isTaskHandlerSidebarActive"
      bg-variant="white"
      shadow
      backdrop
      no-header
      right
      @change="(val) => $emit('update:is-task-handler-sidebar-active', val)"
      @hidden="clearForm"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <b-button v-if="taskLocal.id" size="sm" :variant="taskLocal.is_completed ? 'outline-success' : 'outline-secondary'"
            @click="taskLocal.is_completed = !taskLocal.is_completed">
            {{ taskLocal.is_completed ? $t('todos.todo_completed') : $t('todos.todo_mark_complete') }}
          </b-button>
          <h5 v-else class="mb-0">
            {{$t('todos.todo_add')}}
          </h5>
          <div>
            <feather-icon
              v-show="taskLocal.id"
              icon="TrashIcon"
              class="cursor-pointer"
              @click="$emit('remove-task'); hide();"
            />
            <feather-icon
              class="ml-1 cursor-pointer"
              icon="StarIcon"
              size="16"
              :class="{ 'text-warning': taskLocal.is_important }"
              @click="taskLocal.is_important = !taskLocal.is_important"
            />
            <feather-icon
              class="ml-1 cursor-pointer"
              icon="XIcon"
              size="16"
              @click="hide"
            />
          </div>
        </div>

        <!-- Body -->
        <validation-observer #default="{ handleSubmit }" ref="refFormObserver">

          <!-- Form -->
          <b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">

            <!-- Title -->
            <validation-provider #default="validationContext" :name="$t('todos.todo_title')" rules="required">
              <b-form-group :label="$t('todos.todo_title')" label-for="task-title">
                <b-form-input id="task-title" v-model="taskLocal.title" autofocus :state="getValidationState(validationContext)"trim
                  :placeholder="$t('todos.todo_title_placeholder')"/>
                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- Assignee -->
            <b-form-group :label="$t('todos.todo_assgined_to')" label-for="assignee">
              <v-select 
                v-model="taskLocal.user_id" 
                :options="assigneeOptions"
                :reduce="option => option.id"
                label="name" class="assignee-selector" input-id="assignee"
			          :placeholder="$t('todos.todo_assgined_to_placeholder')"
                :clearable="false">
              </v-select>
            </b-form-group>

            <!-- due Date -->
            <validation-provider #default="validationContext" :name="$t('todos.todo_due_date')" rules="required">
              <b-form-group :label="$t('todos.todo_due_date')" label-for="due-date">
                <flat-pickr v-model="taskLocal.due_date" class="form-control" placeholder="DD-MM-YYYY"/>
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!--Tag -->
            <b-form-group label="Prioridad" label-for="tag">
              <v-select
                v-model="taskLocal.tags"
                :options="tagOptions"
                :reduce="option => option.value"
                input-id="tags"
                :clearable="false"
                :searchable="false"
				        :placeholder="$t('todos.todo_tags_placeholder')"/>
            </b-form-group>

            <!-- Description -->
            <b-form-group :label="$t('todos.todo_description')" label-for="task-description">
              <quill-editor id="quil-content" v-model="taskLocal.description" :options="editorOption" class="border-bottom-0"/>
              <div id="quill-toolbar" class="d-flex justify-content-end border-top-0">
                <!-- Add a bold button -->
                <button class="ql-bold" />
                <button class="ql-italic" />
                <button class="ql-underline" />
                <button class="ql-align" />
                <!-- <button class="ql-link" /> -->
              </div>
            </b-form-group>

            <!-- Form Actions -->
            <div class="d-flex mt-2">
              <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mr-2" type="submit">
                {{ taskLocal.id ? $t('update') : $t('add') }}
              </b-button>
              <b-button @click="hide" v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="reset" variant="outline-secondary">
                {{$t('cancel')}}
              </b-button>
            </div>
          </b-form>
        </validation-observer>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import store from "@/store"
import { BSidebar, BForm, BFormGroup, BFormInput, BAvatar, BButton, BFormInvalidFeedback } from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import { Spanish } from "flatpickr/dist/l10n/es.js";
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import { required, email, url } from '@validations'
// import { avatarText } from '@core/utils/filter'
import formValidation from '@core/comp-functions/forms/form-validation'
import { toRefs } from '@vue/composition-api'
import { quillEditor } from 'vue-quill-editor'
import useTaskHandler from './useTaskHandler'

export default {
  components: {
    // BSV
    BButton,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BAvatar,
    BFormInvalidFeedback,

    // 3rd party packages
    vSelect,
    flatPickr,
    quillEditor,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isTaskHandlerSidebarActive',
    event: 'update:is-task-handler-sidebar-active',
  },
  props: {
    isTaskHandlerSidebarActive: {
      type: Boolean,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
    clearTaskData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      required,
      email,
      url,
    }
  },
  created() {
    if (store.state.auth.setting['language'] === "es") {
      flatpickr.localize(Spanish);
      localize(process.env.MIX_FALLBACK_LOCALE);
    }  
  },
  setup(props, { emit }) {
    const {
      taskLocal,
      resetTaskLocal,

      // UI
      assigneeOptions,
      onSubmit,
      tagOptions,
      resolveAvatarVariant,
    } = useTaskHandler(toRefs(props), emit)

    const { refFormObserver, getValidationState, resetForm, clearForm } = formValidation(
      resetTaskLocal,
      props.clearTaskData,
    )

    const editorOption = {
      modules: {
        toolbar: '#quill-toolbar',
      },
      placeholder: 'Escribe una descripción',
    }

    return {
      // Add New
      taskLocal,
      onSubmit,
      assigneeOptions,
      tagOptions,

      // Form Validation
      resetForm,
      clearForm,
      refFormObserver,
      getValidationState,

      // UI
      editorOption,
      resolveAvatarVariant,

      // Filter/Formatter
      // avatarText,
    }
  },
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/libs/vue-select.scss';
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
@import '~@resources/scss/vue/libs/quill.scss';
</style>

<style lang="scss" scoped>
@import '~@resources/scss/base/bootstrap-extended/include';

.assignee-selector {
  ::v-deep .vs__dropdown-toggle {
    padding-left: 0;
  }
}

#quil-content ::v-deep {
  > .ql-container {
    border-bottom: 0;
  }

  + #quill-toolbar {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}
</style>
