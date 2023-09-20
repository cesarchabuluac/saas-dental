import axios from "axios";

export default class MedicalHistories {
    /**
     * Function to create a medical histories
     * @param {Object} formdata
     * @return AxiosPromise
     */
    save(formdata) {
        return axios.post(`/api/medical-histories`, formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });
    }

    /**
     * Function to update a medical histories
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/medical-histories/${id}`, formdata);
    }

    /**
     * Function to get detail
     * @param {Number} id
     * @return AxiosPromise
     */
    getDetail(id) {
        return axios.get(`/api/medical-histories/${id}`);
    }

    /**
     * Funtion to delete medical histories
     * @param {Array} users
     * @return AxiosPromise
     */
    destroy(id) {
        return axios.delete(`/api/medical-histories/${id}`);
    }

    /**
     * Function to get all medical histories without pagination
     */
    getList(query) {
        return axios.get("/api/medical-histories", { params: query });
    }
}
