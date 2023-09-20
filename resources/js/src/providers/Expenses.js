import axios from "axios";

export default class Expenses {
    getList(query) {
        return axios.get("/api/expenses", { params: query });
    }

     /**
     * Function to update|store a expense
     * @param {Object} formdata
     * @return AxiosPromise
     */
    save(formData) {
        return axios.post("/api/expenses", formData);
    }

    update(id, payload) {
        return axios.put(`/api/expenses/${id}`, payload);
    }
    
    delete(id) {
        return axios.delete(`/api/expenses/${id}`);
    }
}
