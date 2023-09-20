import axios from "axios";

export default class SubCategories {

    index(query) {
        return axios.get("/api/inventories/subcategories", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/subcategories`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/subcategories/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/subcategories/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/subcategories/${id}`);
    }
}