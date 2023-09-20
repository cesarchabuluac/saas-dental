import axios from "axios";

export default class Medicines {

    index(query) {
        return axios.get("/api/inventories/medicines", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/medicines`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/medicines/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/medicines/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/medicines/${id}`);
    }
}