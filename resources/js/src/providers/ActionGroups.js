import axios from "axios";

export default class ActionGroups {

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    save(formdata) {
        return axios.post(`/api/action-groups`, formdata);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/action-groups/${id}`, formdata);
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
    getActionGroupDetail(id) {
        return axios.get(`/api/action-groups/${id}`);
    }

    /**
     * Funtion to delete action groups
     * @param {Array} users
     * @return AxiosPromise
     */
    deleteActionGroup(id) {
        return axios.delete(`/api/action-groups/${id}`);
    }

    /**
     * Function to get all action groups without pagination
     */
    getList(query) {
        return axios.get("/api/action-groups", { params: query });
    }

    /**
     * Function to get all action groups without pagination
     */
     getAll() {
        return axios.get("/api/action-groups/all");
    }
}
