import axios from "axios";

export default class Upload {

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
     save(formdata) {
        return axios.post(`/api/uploads/store`, formdata);
    }


    /**
     * Funtion to delete branchs
     * @param {Array} users
     * @return AxiosPromise
     */
    deleteMedia(formData) {
        return axios.post(`/api/uploads/clear`, formData);
    }

}
