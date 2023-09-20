import axios from "axios";

export default class Budgets {

    /**
     * Function to get all work orders without pagination
    */
    getList(query) {
        return axios.get("/api/work-orders", { params: query });
    }

    find(id) {
        return axios.get(`/api/work-orders/${id}`);
    }


    /**
     * Function to update a work order
     * @param {Object} formdata
     * @return AxiosPromise
     */
    save(formdata) {
        return axios.post("/api/work-orders", formdata);
    }

    update(id, formdata) {
        return axios.put(`/api/work-orders/${id}`, formdata);
    }

    destroy(id) {
        return axios.delete(`/api/work-orders/${id}`);
    }

    donwloadPDF(id) {
        return axios.post(`/api/work-orders/pdf`, { id: id }, { responseType: "arraybuffer" });
    }
}
