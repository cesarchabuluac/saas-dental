import axios from "axios";

export default class Faqs {

    index(query) {
        return axios.get(`/api/faqs`, { params: query })
    }

    store(formData) {
        return axios.post(`/api/faqs`, formData)
    }

    update(id, formData) {
        return axios.put(`/api/faqs/${id}`, formData)
    }

    destroy(id) {
        return axios.delete(`/api/faqs/${id}`)
    }

}