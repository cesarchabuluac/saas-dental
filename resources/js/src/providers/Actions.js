import axios from "axios";

export default class Actions {

    /**
     * Function to get all actions without pagination
     */
    index(query) {
        return axios.get("/api/actions", { params: query });
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
     save(formdata) {
        return axios.post(`/api/actions`, formdata);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/actions/${id}`, formdata);
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
    getActionDetail(id) {
        return axios.get(`/api/actions/${id}`);
    }

    /**
     * Funtion to delete actions
     * @param {Array} users
     * @return AxiosPromise
     */
    deleteAction(id) {
        return axios.delete(`/api/actions/${id}`);
    }

    

    /**
     * [getAll description]
     *
     * @return  {[type]}  [return description]
     */
    getAll() {
        return axios.get("/api/actions/all");
    }

    /**
     * [getByGroupId description]
     * @param {*} group_id
     * @returns
     */
    getAllByGroupId(group_id) {
        return axios.get(`/api/actions/${group_id}/group`);
    }
}
