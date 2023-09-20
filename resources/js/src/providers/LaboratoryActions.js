import axios from "axios";

export default class LaboratoryActions {
    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    save(formdata) {
        return axios.post(`/api/laboratory-actions`, formdata);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/laboratory-actions/${id}`, formdata);
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
    getLaboratoryActionDetail(id) {
        return axios.get(`/api/laboratory-actions/${id}`);
    }

    /**
     * Funtion to delete laboratory-actions
     * @param {Array} users
     * @return AxiosPromise
     */
    deleteLaboratoryAction(id) {
        return axios.delete(`/api/laboratory-actions/${id}`);
    }

    /**
     * Function to get all laboratory-actions without pagination
     */
    getList(query) {
        return axios.get("/api/laboratory-actions", { params: query });
    }

    /**
     * [getAll description]
     *
     * @return  {[type]}  [return description]
     */
    getAll() {
        return axios.get("/api/laboratory-actions/all");
    }
}
