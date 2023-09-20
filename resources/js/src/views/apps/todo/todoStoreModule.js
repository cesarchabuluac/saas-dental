import TaskProvider from '@/providers/Tasks'
const TaskResource = new TaskProvider()

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchTasks(ctx, payload) {
			return TaskResource.getTaskList(payload)
		},
		addTask(ctx, taskData) {
			return TaskResource.store(taskData)
		},
		updateTask(ctx, task) {
			return TaskResource.update(task.id, task)
		},
		removeTask(ctx, { id }) {
			return TaskResource.deleteTask(id)
		},
	},
}
