import axios from "axios";

export default class Categories {

    index(query) {
        return axios.get("/api/inventories/categories", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/categories`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/categories/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/categories/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/categories/${id}`);
    }
}