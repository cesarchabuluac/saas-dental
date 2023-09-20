import axios from "axios";

export default class Suppliers {

    index(query) {
        return axios.get("/api/inventories/suppliers", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/suppliers`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/suppliers/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/suppliers/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/suppliers/${id}`);
    }
}