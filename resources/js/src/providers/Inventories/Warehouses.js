import axios from "axios";

export default class Warehouses {

    index(query) {
        return axios.get("/api/inventories/warehouses", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/warehouses`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/warehouses/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/warehouses/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/warehouses/${id}`);
    }
}