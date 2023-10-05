import axios from "axios";

export default class ExpenseCategories {

    index(query) {
        return axios.get("/api/expenses_categories", { params: query });
    }

    /**
    * Function to update|store a expense
    * @param {Object} formdata
    * @return AxiosPromise
    */
    store(formData) {
        return axios.post("/api/expenses_categories", formData);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/expenses_categories/${id}`, formdata);
    }

    destroy(id) {
        return axios.delete(`/api/expenses_categories/${id}`);
    }
}
