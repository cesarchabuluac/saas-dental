import axios from "axios";

export default class Payments {

    getList (query) {
        return axios.get("/api/payments", { params: query });
    }

    dashboard(query) {
        return axios.get("/api/payments/dashboard", { params: query});
    }

    store(formData) {
        return axios.post('/api/payments', formData);
    }

    storeCollection (formData) {
        return axios.post('/api/payments/collection', formData);
    }

    storePartial (formData) {
        return axios.post('/api/payments/partial', formData);
    }

    detail (id) {
        return axios.get(`/api/payments/${id}/preview`);
    }

    deletePayment(id, comments) {
        return axios.delete(`/api/payments/${id}`, { params: comments});
    }

    send(formData) {
        return axios.post(`/api/payments/send/`, formData);
    }

    donwloadPDF(id, query) {
		return axios.post('/api/payments/pdf', { id }, { responseType: 'arraybuffer' }, { params: query })
	}
}
