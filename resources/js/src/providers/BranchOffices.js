import axios from "axios";

export default class BranchOffices {

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    store(formdata) {
        return axios.post(`/api/branch-offices`, formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    update(id, formdata) {
        return axios.post(`/api/branch-offices/${id}`, formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
    getBranchDetail(id) {
        return axios.get(`/api/branch-offices/${id}`);
    }

    /**
     * Funtion to delete branchs-offices
     * @param {Array} users
     * @return AxiosPromise
     */
    deleteBranch(id) {
        return axios.delete(`/api/branch-offices/${id}`);
    }

    /**
     * Function to get all branchs-offices without pagination
     */
    getList(query) {
        return axios.get("/api/branch-offices", { params: query });
    }

    getAll() {
        return axios.get(`/api/branch-offices/all`);
    }

}
