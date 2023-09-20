import axios from "axios";

export default class Laboratories {

    /**
     * Function to get all laboratory without pagination
     */
     getList(query) {
        return axios.get("/api/laboratories", { params: query });
    }

    /**
     * Function to save a laboratory
     * @param {Object} formdata
     * @return AxiosPromise
     */
     save(formdata) {
        return axios.post(`/api/laboratories`, formdata);
    }

    /**
     * Function to get information by laboratory
     * @param {Number} id
     * @return AxiosPromise
     */
     getLaboratoryDetail(id) {
        return axios.get(`/api/laboratories/${id}`);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
     update(id, formdata) {
        return axios.put(`/api/laboratories/${id}`, formdata);
    }

    /**
     * Funtion to delete laboratory
     * @param {Array} users
     * @return AxiosPromise
     */
     deleteLaboratory(id) {
        return axios.delete(`/api/laboratories/${id}`);
    }

    /**
     * Function to get all laboratories without pagination
     */
     getAll() {
        return axios.get("/api/laboratories/all");
    }
}
