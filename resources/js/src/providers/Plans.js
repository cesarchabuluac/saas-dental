/* eslint-disable class-methods-use-this */
import axios from "axios";

export default class Plans {   

    index(query) {
        return axios.get(`/api/plans`, { params: query});
    }   

    store(payload) {
        return axios.post(`/api/plans`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    show (id) {
        return axios.get(`/api/plans/${id}`)
    }

    update (id, payload) {
        return axios.post(`/api/plans/update/${id}`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    destroy(id) {
        return axios.delete(`/api/plans/${id}`)
    }
}
