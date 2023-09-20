import { ref, watch, onMounted } from '@vue/composition-api'
// import store from '@/store'
import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default function useTaskHandler(props, emit) {
  // ------------------------------------------------
  // taskLocal
  // ------------------------------------------------
  const taskLocal = ref(JSON.parse(JSON.stringify(props.task.value)))
  const resetTaskLocal = () => {
    taskLocal.value = JSON.parse(JSON.stringify(props.task.value))
  }

  // ------------------------------------------------
  // guestOptions
  // ------------------------------------------------

  const assigneeOptions = ref([]);

  onMounted(async () => {
    const { data } = await UserResource.getList({ except: true });
    assigneeOptions.value = data.data
  });

  watch(props.task, () => {
    resetTaskLocal()
  })

  // ------------------------------------------------
  // isEventHandlerSidebarActive
  // * Clear form if sidebar is closed
  // ! We can hide it using @hidden event
  // ------------------------------------------------
  // watch(props.isEventHandlerSidebarActive, val => {
  //   // ? Don't reset event till transition is finished
  //   if (!val) {
  //     setTimeout(() => {
  //       clearForm.value()
  //     }, 350)
  //   }
  // })

  const onSubmit = () => {
    const taskData = JSON.parse(JSON.stringify(taskLocal))

    // * If event has id => Edit Event
    // Emit event for add/update event
    if (props.task.value.id) emit('update-task', taskData.value)
    else emit('add-task', taskData.value)

    // Close sidebar
    // emit('update:is-task-handler-sidebar-active', false)
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveAvatarVariant = tags => {
    if (tags.includes('high')) return 'primary'
    if (tags.includes('medium')) return 'warning'
    if (tags.includes('low')) return 'success'
    if (tags.includes('update')) return 'danger'
    if (tags.includes('team')) return 'info'
    return 'primary'
  }

  const tagOptions = [
    { label: 'Equipo', value: 'team' },
    { label: 'Baja', value: 'low' },
    { label: 'Media', value: 'medium' },
    { label: 'Alta', value: 'high' },
    { label: 'Actualizar', value: 'update' },
  ]

  return {
    taskLocal,
    resetTaskLocal,

    // UI
    assigneeOptions,
    resolveAvatarVariant,
    tagOptions,
    onSubmit,
  }
}
