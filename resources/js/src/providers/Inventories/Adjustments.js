import axios from "axios";

export default class Adjustments {

    index(query) {
        return axios.get("/api/inventories/adjustments", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/adjustments`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/adjustments/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/adjustments/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/adjustments/${id}`);
    }
}