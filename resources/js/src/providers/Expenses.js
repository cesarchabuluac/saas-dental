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
        return axios.post("/api/expenses", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.post(`/api/expenses/${id}`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    delete(id) {
        return axios.delete(`/api/expenses/${id}`);
    }

    listCategories() {
        return axios.get("/api/expenses/categories-all", { params: { all: true } });
    }
}
