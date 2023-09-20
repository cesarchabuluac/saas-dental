import axios from "axios";

export default class Auth {
    
    /**
     * Function to login
     * @return Promise
     */
    login(formdata) {
        return axios.post("api/auth/login", formdata);
    }

    /**
     * Function to logout
     * @return Promise
     */
    logout(formdata) {
        return axios.post("/api/auth/logout");
    }

    /**
     * Function to get current user
     * @return AxiosPromise
     */
    currentUser() {
        return axios.get("api/current-user");
    }

    /**
     * Function to get current user permissions
     * @return AxiosPromise
     */
     currentUserPermissions() {
        return axios.get("api/user-permissions");
    }

    register (payload) {
        return axios.post(`api/auth/register`, payload);
    }

    tenantRegister (payload) {
        return axios.post(`api/tenants/register`, payload)
    }

    getUserAuth() {
        return axios.get("/api/profile");
    }
}
