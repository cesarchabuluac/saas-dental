<template>
  <!-- Need to add height inherit because Vue 2 don't support multiple root ele -->
  <div >
    <div
      class="body-content-overlay"
      :class="{'show': mqShallShowLeftSidebar}"
      @click="mqShallShowLeftSidebar = false"
    />
    <div class="todo-app-list">

      <!-- App Searchbar Header -->
      <div class="app-fixed-search d-flex align-items-center">

        <!-- Toggler -->
        <div class="sidebar-toggle d-block d-lg-none ml-1">
          <feather-icon
            icon="MenuIcon"
            size="21"
            class="cursor-pointer"
            @click="mqShallShowLeftSidebar = true"
          />
        </div>

        <!-- Searchbar -->
        <div class="d-flex align-content-center justify-content-between w-100">
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon
                icon="SearchIcon"
                class="text-muted"
              />
            </b-input-group-prepend>
            <b-form-input
              :value="searchQuery"
              :placeholder="$t('todos.todo_search')"
              @input="updateRouteQuery"
            />
          </b-input-group>
        </div>
      </div>

      <!-- Todo List -->
      <vue-perfect-scrollbar
        :settings="perfectScrollbarSettings"
        class="todo-task-list-wrapper list-group scroll-area"
      >
        <draggable v-model="tasks" handle=".draggable-task-handle" tag="ul" class="todo-task-list media-list">
          <li v-for="task in tasks" :key="task.id" class="todo-item" :class="{ 'completed': task.is_completed }" @click="handleTaskClick(task)">
            <feather-icon icon="MoreVerticalIcon" class="draggable-task-handle d-inline"/>
            <div class="todo-title-wrapper">
              <div class="todo-title-area">
                <div class="title-wrapper">
                  <b-form-checkbox :checked="task.is_completed ? true : false" @click.native.stop @change="updateTaskIsCompleted(task)"/>
                  <span class="todo-title">{{ task.title }} <br> 
				  		      <small>{{$t('todos.todo_assgined_to')}}: {{task.user.name}}</small>
					        </span>
                </div>
              </div>
              <div class="todo-item-action">
                <div class="badge-wrapper mr-1">
                  <b-badge pill :variant="`light-${resolveTagVariant(task.tags)}`" class="text-capitalize">
                    {{$t(`todos.todo_tags_${task.tags}`)}}
                  </b-badge>
                </div>
                <small class="text-nowrap text-muted mr-1">{{ formatDate(task.due_date) }}</small>
                <b-avatar v-if="task.user" size="32"
                  :src="task.user.has_media ? task.user.media[0].thumb : null"
                  :variant="`light-${resolveAvatarVariant(task.tags)}`"
                  :text="avatarText(task.user.name)"
				          :title="task.user.name"
                />
                <b-avatar v-else size="32" variant="light-secondary">
                  <feather-icon icon="UserIcon" size="16"/>
                </b-avatar>
              </div>
            </div>

          </li>
        </draggable>
        <div class="no-results" :class="{'show': !tasks.length}">
          <h5>{{$t('no_data_found')}}</h5>
        </div>
      </vue-perfect-scrollbar>
    </div>

    <!-- Task Handler -->
    <todo-task-handler-sidebar
      v-model="isTaskHandlerSidebarActive"
      :task="task"
      :clear-task-data="clearTaskData"
      @remove-task="removeTask"
      @add-task="addTask"
      @update-task="updateTask"
    />

    <!-- Sidebar -->
    <portal to="content-renderer-sidebar-left">
      <todo-left-sidebar
        :task-tags="taskTags"
        :is-task-handler-sidebar-active.sync="isTaskHandlerSidebarActive"
        :class="{'show': mqShallShowLeftSidebar}"
        @close-left-sidebar="mqShallShowLeftSidebar = false"
      />
    </portal>
  </div>
</template>

<script>
import store from '@/store'
import {
  ref, watch, computed, onUnmounted,
} from '@vue/composition-api'
import {
  BFormInput, BInputGroup, BInputGroupPrepend, BDropdown, BDropdownItem,
  BFormCheckbox, BBadge, BAvatar,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import draggable from 'vuedraggable'
// import { formatDate } from '@core/utils/filter'
import { useRouter } from '@core/utils/utils'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import TodoLeftSidebar from './TodoLeftSidebar.vue'
import todoStoreModule from './todoStoreModule'
import TodoTaskHandlerSidebar from './TodoTaskHandlerSidebar.vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BDropdown,
    BDropdownItem,
    BFormCheckbox,
    BBadge,
    BAvatar,
    draggable,
    VuePerfectScrollbar,

    // App SFC
    TodoLeftSidebar,
    TodoTaskHandlerSidebar,
	ToastificationContent,
  },
  setup() {

	// Use toast
    const toast = useToast();

    const TODO_APP_STORE_MODULE_NAME = 'app-todo'

    // Register module
    if (!store.hasModule(TODO_APP_STORE_MODULE_NAME)) store.registerModule(TODO_APP_STORE_MODULE_NAME, todoStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(TODO_APP_STORE_MODULE_NAME)) store.unregisterModule(TODO_APP_STORE_MODULE_NAME)
    })

    const { route, router } = useRouter()
    const routeSortBy = computed(() => route.value.query.sort)
    const routeQuery = computed(() => route.value.query.q)
    const routeParams = computed(() => route.value.params)
    watch(routeParams, () => {
      fetchTasks()
    })

    const tasks = ref([])

    const sortOptions = [
      'latest',
      'title-asc',
      'title-desc',
      'assignee',
      'due-date',
    ]
    const sortBy = ref(routeSortBy.value)
    watch(routeSortBy, val => {
      if (sortOptions.includes(val)) sortBy.value = val
      else sortBy.value = val
    })
    const resetSortAndNavigate = () => {
      const currentRouteQuery = JSON.parse(JSON.stringify(route.value.query))

      delete currentRouteQuery.sort

      router.replace({ name: route.name, query: currentRouteQuery }).catch(() => {})
    }

    const blankTask = {
      id: null,
      title: '',
      due_date: new Date(),
      description: '',
      user_id: null,
      tags: [],
      is_completed: false,
      is_deleted: false,
      is_important: false,
    }
    const task = ref(JSON.parse(JSON.stringify(blankTask)))
    const clearTaskData = () => {
      task.value = JSON.parse(JSON.stringify(blankTask))
    }

    const addTask = async (val) => {
		try {
			const { data, status } = await store.dispatch(`app-todo/addTask`, val)
			if (data.success) {
				toast({
					component: ToastificationContent,
					props: {
						title: data.message,
						icon: "CheckIcon",
						variant: "success",
					},
				});
				isTaskHandlerSidebarActive.value = false
				await fetchTasks()
			} else {
				toast({
					component: ToastificationContent,
					props: {
						title: data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			}
		} catch (e) {
			if (e.response.status === 401) {
				toast({
					component: ToastificationContent,
					props: {
						title: e.response.data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			} else if (e.response.status === 500) {
				toast({
					component: ToastificationContent,
					props: {
						title: e.response.data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			} else {
				toast({
					component: ToastificationContent,
					props: {
						title: e.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			}
		}
    }
    const removeTask = async () => {
		try {
			const { data } = await store.dispatch('app-todo/removeTask', { id: task.value.id })
			if (data.success) {
				toast({
					component: ToastificationContent,
					props: {
						title: data.message,
						icon: "CheckIcon",
						variant: "success",
					},
				});
				isTaskHandlerSidebarActive.value = false
				await fetchTasks()
			} else {
				toast({
					component: ToastificationContent,
					props: {
						title: data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			}
		} catch (e) {
			if (e.response.status === 401) {
				toast({
					component: ToastificationContent,
					props: {
						title: e.response.data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			} else if (e.response.status === 500) {
				toast({
					component: ToastificationContent,
					props: {
						title: e.response.data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			} else {
				toast({
					component: ToastificationContent,
					props: {
						title: e.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			}
		}
    }
    const updateTask = async (taskData) => {
		try {
			const { data } = await store.dispatch('app-todo/updateTask', taskData)
			if (data.success) {
				toast({
					component: ToastificationContent,
					props: {
						title: data.message,
						icon: "CheckIcon",
						variant: "success",
					},
				});
				isTaskHandlerSidebarActive.value = false
				await fetchTasks()
			} else {
				toast({
					component: ToastificationContent,
					props: {
						title: data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			}
		} catch (e) {
			if (e.response.status === 401) {
				toast({
					component: ToastificationContent,
					props: {
						title: e.response.data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			} else if (e.response.status === 500) {
				toast({
					component: ToastificationContent,
					props: {
						title: e.response.data.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			} else {
				toast({
					component: ToastificationContent,
					props: {
						title: e.message,
						icon: "AlertCircleIcon",
						variant: "danger",
					},
				});
			}
		}
    }

    const perfectScrollbarSettings = {
      maxScrollbarLength: 150,
    }

    const isTaskHandlerSidebarActive = ref(false)

    const taskTags = [
      { title: 'Equipo', color: 'primary', route: { name: 'apps-todo-tag', params: { tag: 'team' } } },
      { title: 'Baja', color: 'success', route: { name: 'apps-todo-tag', params: { tag: 'low' } } },
      { title: 'Medio', color: 'warning', route: { name: 'apps-todo-tag', params: { tag: 'medium' } } },
      { title: 'Alta', color: 'danger', route: { name: 'apps-todo-tag', params: { tag: 'high' } } },
      { title: 'Actualizar', color: 'info', route: { name: 'apps-todo-tag', params: { tag: 'update' } } },
    ]

    const resolveTagVariant = tag => {
      if (tag === 'team') return 'primary'
      if (tag === 'low') return 'success'
      if (tag === 'medium') return 'warning'
      if (tag === 'high') return 'danger'
      if (tag === 'update') return 'info'
      return 'primary'
    }

    const resolveAvatarVariant = tags => {
      if (tags.includes('high')) return 'primary'
      if (tags.includes('medium')) return 'warning'
      if (tags.includes('low')) return 'success'
      if (tags.includes('update')) return 'danger'
      if (tags.includes('team')) return 'info'
      return 'primary'
    }

    // Search Query
    const searchQuery = ref(routeQuery.value)
    watch(routeQuery, val => {
      searchQuery.value = val
    })

	watch([searchQuery, sortBy], () => fetchTasks())
    
	const updateRouteQuery = val => {
      const currentRouteQuery = JSON.parse(JSON.stringify(route.value.query))

      if (val) currentRouteQuery.q = val
      else delete currentRouteQuery.q

      router.replace({ name: route.name, query: currentRouteQuery })
    }

    const fetchTasks = async () => {
      const { data } = await store.dispatch(`app-todo/fetchTasks`, {
        q: searchQuery.value,
        filter: router.currentRoute.params.filter,
        tag: router.currentRoute.params.tag,
        sortBy: sortBy.value,
      })
      tasks.value = data
    }

    fetchTasks()

    const handleTaskClick = taskData => {
      taskData.assignee = taskData.user
      task.value = taskData	
      isTaskHandlerSidebarActive.value = true
    }

    // Single Task isCompleted update
    const updateTaskIsCompleted = taskData => {
      
      taskData.is_completed = !taskData.is_completed
      updateTask(taskData)
    }

    const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()

    return {
      task,
      tasks,
      removeTask,
      addTask,
      updateTask,
      clearTaskData,
      taskTags,
      searchQuery,
      fetchTasks,
      perfectScrollbarSettings,
      updateRouteQuery,
      resetSortAndNavigate,

      // UI
      resolveTagVariant,
      resolveAvatarVariant,
      isTaskHandlerSidebarActive,

      // Click Handler
      handleTaskClick,

      // Filters
      // formatDate,
      // avatarText,

      // Single Task isCompleted update
      updateTaskIsCompleted,

      // Left Sidebar Responsive
      mqShallShowLeftSidebar,
    }
  },
}
</script>

<style lang="scss" scoped>
.draggable-task-handle {
position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    visibility: hidden;
    cursor: move;

    .todo-task-list .todo-item:hover & {
      visibility: visible;
    }
}
</style>

<style lang="scss">
@import "~@resources/scss/base/pages/app-todo.scss";
</style>
