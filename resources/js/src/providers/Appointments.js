/* eslint-disable class-methods-use-this */
import axios from "axios";

export default class appointments {
    getList(query) {
        return axios.get("/api/appointments", { params: query });
    }

    /**
     * Function to get all appointments without pagination
     */
    getEvents(query) {
        return axios.get("/api/appointments/events", { params: query });
    }

    /**
     * Function to store a appointment
     * @param {Object} formdata
     * @return AxiosPromise
     */
    save(formdata) {
        return axios.post(`/api/appointments`, formdata);
    }

    update(id, formdata) {
        return axios.put(`/api/appointments/${id}`, formdata);
    }

    destroy(id) {
        return axios.delete(`/api/appointments/${id}`);
    }

    send(id, formData) {
        return axios.post(`/api/appointments/${id}/send`, formData);
    }

    getByMonthly (){
        return axios.get("/api/appointments/monthly");
    }

    available (query) {
        return axios.get("/api/appointments/available", { params: query });
    }

    show (id) {
        return axios.get(`/api/appointments/${id}`);
    }

    printMe () {
        return axios.get(`/api/appointments/print`)
    }

    reports (query) {
        if (query.isDownload) {
            return axios.get(`/api/appointments/report`, { responseType: "blob", params: query   })
        }
        return axios.get(`/api/appointments/report`, { params: query })
    }

    changeStatus(id, payload) {
        return axios.put(`/api/appointments/${id}/status`, payload)
    }
}
