import axios from "axios";

export default class Units {

    index(query) {
        return axios.get("/api/inventories/units", { params: query });
    }
        
    store(payload) {
        return axios.post(`/api/inventories/units`, payload);
    }

    destroy(id) {
        return axios.delete(`/api/inventories/units/${id}`);
    }

    update(id, payload) {
        return axios.put(`/api/inventories/units/${id}`, payload);
    }

    show(id) {
        return axios.get(`/api/inventories/units/${id}`);
    }
}