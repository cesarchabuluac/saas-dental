import axios from "axios";

export default class Patients {

    /**
   * Function to get all patients without pagination
   */
    index(query) {
        return axios.get("/api/patients", { params: query });
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    save(formdata) {
        return axios.post(`/api/patients`, formdata);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/patients/${id}`, formdata);
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
    getPatientDetail(id, query) {
        return axios.get(`/api/patients/${id}`, { params: query });
    }

    show(id, query) {
        if (query.isPdf || query.isPrint) {
            return axios.get(`/api/patients/${id}`, { params: query, responseType: "arraybuffer" });
        }
        return axios.get(`/api/patients/${id}`, { params: query });
    }

    /**
     * Funtion to delete patients
     * @param {Array} users
     * @return AxiosPromise
     */
    deletePatient(id) {
        return axios.delete(`/api/patients/${id}`);
    }

    /**
     * Function to get all patients without pagination
     */
    getList(query) {
        return axios.get("/api/patients", { params: query });
    }

    find(id) {
        return axios.get(`/api/patients/${id}`);
    }

    filterList() {
        return axios.get("/api/patients/filter");
    }

    /**
     * [search description]
     *
     * @param   {[type]}  q  [q description]
     *
     * @return  {[type]}     [return description]
     */
    search(q) {
        return axios.get("/api/patients/search", { params: { q: q } });
    }

    nextAppointment(query) {
        return axios.get("/api/patients/next-appointment", { params: query });
    }
}
