import axios from "axios";

export default class Roles {
    
	getList (query) {
		return axios.get("/api/role", { params: query });
	}

	getRol(id) {
		return axios.get(`/api/role/${id}`);
	}

	store (payload) {
		return axios.post(`/api/role`, payload)
	}
}
