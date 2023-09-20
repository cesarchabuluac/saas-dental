import axios from "axios";

export default class Anamnesis {
    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    save(formdata) {
        return axios.post(`/api/anamnesis`, formdata);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/anamnesis/${id}`, formdata);
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
    getAnamnesiDetail(id) {
        return axios.get(`/api/anamnesis/${id}`);
    }

    /**
     * Funtion to delete anamnesis
     * @param {Array} users
     * @return AxiosPromise
     */
    deleteAnamnesi(id) {
        return axios.delete(`/api/anamnesis/${id}`);
    }

    /**
     * Function to get all anamnesis without pagination
     */
    getList(query) {
        return axios.get("/api/anamnesis", { params: query });
    }
}
