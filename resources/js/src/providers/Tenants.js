import axios from "axios";

const BASE_PTH = window.location.origin

export default class Tenants {

    /**
     * Function to get tenants
     * @return AxiosPromise
     */
    index(query) {
        return axios.get("/api/tenants", { params: query });
    }

    show(id) {
        return axios.get(`/api/tenants/${id}`);
    }

    store (payload) {
        return axios.post(`/api/tenants`, payload)
    }

    update (id, payload) {
        return axios.put(`/api/tenants/${id}`, payload)
    }

    destroy (id) {
        return axios.delete(`/api/tenants/${id}`)
    }

    me() {
        return axios.get(`/api/tenant/me`);
    }

    banned(tenant) {
        return axios.post(`/api/tenants/${tenant}/ban`)
    }

    impersonate(tenant) {
        return axios.get(`/api/impersonate/${tenant}`)
    }

    billingHistories () {
        return axios.get(`/api/billing/history`)
    }
}
