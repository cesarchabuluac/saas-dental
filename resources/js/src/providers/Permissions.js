import axios from "axios";

export default class Permissions {
    
    index (query) {
        return axios.get("/api/permissions", { params: query });
    }

    // getRoles () {
    //     return axios.get("/setting/roles");
    // }

    checkPermissions(formData) {
        return axios.post("/api/permissions", formData);
    }

    // userPermissions () {
    //     return axios.get(`/permissions`);
    // }

    // allPermissions() {
    //     return axios.get(`/settings/permissions/all`)
    // }
}