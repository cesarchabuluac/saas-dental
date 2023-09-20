import axios from "axios";

export default class Tariffs {

    /**
     * Function to get all tariff without pagination
     */
     getList(query) {
        return axios.get("/api/tariffs", { params: query });
    }

    /**
     * Function to save a tariff
     * @param {Object} formdata
     * @return AxiosPromise
     */
     save(formdata) {
        return axios.post(`/api/tariffs`, formdata);
    }

    /**
     * Function to get information by tariff
     * @param {Number} id
     * @return AxiosPromise
     */
     getTariffDetail(id) {
        return axios.get(`/api/tariffs/${id}`);
    }

    /**
     * Function to update a tariff
     * @param {Object} formdata
     * @return AxiosPromise
     */
     update(id, formdata) {
        return axios.put(`/api/tariffs/${id}`, formdata);
    }

    /**
     * Funtion to delete tariff
     * @param {Array} tarrifs
     * @return AxiosPromise
     */
     deleteTariff(id) {
        return axios.delete(`/api/tariffs/${id}`);
    }

}
