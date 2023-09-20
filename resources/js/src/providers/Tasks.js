import axios from "axios";

export default class Tasks {
    /**
     * Function to store a task
     * @param {Object} formdata
     * @return AxiosPromise
     */
    store(formdata) {
        return axios.post(`/api/todos`, formdata);
    }

    /**
     * Function to update a task
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/todos/${id}`, formdata);
    }

    /**
     * Function to get information by task
     * @param {Number} id
     * @return AxiosPromise
     */
    getTaskDetail(id) {
        return axios.get(`/api/todos/${id}`);
    }

    /**
     * Funtion to delete task
     * @param {Array} users
     * @return AxiosPromise
     */
    deleteTask(id) {
        return axios.delete(`/api/todos/${id}`);
    }

    /**
     * Function to get all task without pagination
     */
    getTaskList(query) {
        return axios.get("/api/todos", { params: query });
    }
}
