import axios from "axios";

export default class Checks {
    getList(query) {
        return axios.get("/api/checks", { params: query });
    }

    store(formData) {
        return axios.post("/api/checks", formData);
    }
}
