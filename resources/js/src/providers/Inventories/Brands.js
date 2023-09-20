import axios from "axios";

export default class Brands {

    index(query) {
        return axios.get("/api/inventories/brands", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/brands`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/brands/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/brands/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/brands/${id}`);
    }
}