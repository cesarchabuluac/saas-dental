import axios from "axios";

export default class Transfers {

    index(query) {
        return axios.get("/api/inventories/transfers", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/transfers`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/transfers/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/transfers/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/transfers/${id}`);
    }
}