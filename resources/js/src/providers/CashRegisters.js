import axios from "axios";

export default class CashRegisters {


    getList (query) {
        return axios.get('/api/cash-registers', { params: query });
    }

    generate(query) {
        return axios.get('/api/cash-registers/generate', { params: query });
    }

    store (payload) {
        return axios.post('/api/cash-registers', payload);
    }

    getDetail(id) {
        return axios.get(`/api/cash-registers/${id}`);
    }

    download (id) {
        return axios.get(`/api/cash-registers/export/${id}`, { responseType: "arraybuffer", });
    }

    downloadPreview (query) {
        return axios.get('/api/cash-registers/generate', { responseType: "arraybuffer", params: query });
    }
}
