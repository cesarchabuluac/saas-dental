/* eslint-disable class-methods-use-this */
import axios from "axios";

export default class Users {   

    /**
    * Function to get all users without pagination
    */
    index(query) {
        return axios.get("/api/users", { params: query });
    }

    /**
     * Function to permissions
     * @return Promise
     */
     permissions() {
        return axios.get("api/permissions");
    }

    /**
     * Function to create new user
     * @param {Object} formdata
     * @return AxiosPromise
     */
    store(formdata) {
        return axios.post("/api/users", formdata);
    }


    /**
     * Function to update a user
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.put(`/api/users/${id}`, formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });
    }

    /**
     * Function to get information by user
     * @param {Number} id
     * @return AxiosPromise
     */
    getUserDetail(id, query) {
        return axios.get(`/api/users/${id}`, { params: query});
    }

    /**
     * Funtion to delete multi users
     * @param {Array} users
     * @return AxiosPromise
     */
    destroy(id) {
        return axios.delete(`/api/users/${id}`);
    }

    /**
     * Function to get all users without pagination
     */
    getList(query) {
        return axios.get("/api/users", { params: query });
    }

    /**
     * Function to active an user
     * @param {Object} formdata
     * @return AxiosPromise
     */
    activeUser(contactId, userId, formdata) {
        return axios.post(
            `${process.env.API_URL}/contacts/${contactId}/user/${userId}`,
            formdata
        );
    }

    /**
     * Function to request password change
     * @return Promise
     */
    passwordChange(formdata) {
        return axios.put("api/change-password", formdata);
    }

    getUserByCriteria(criteria) {
        return axios.get("/api/users/criteria", { params: {criteria} });
    }
}
