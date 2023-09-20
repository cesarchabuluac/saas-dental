import axios from "axios";

export default class Purchases {

    index(query) {
        return axios.get("/api/inventories/purchases", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/purchases`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/purchases/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/purchases/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/purchases/${id}`);
    }

    markedAsReceived(id) {
        return axios.post(`/api/inventories/purchases/${id}/marked`);
    }
}