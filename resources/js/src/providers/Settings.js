/* eslint-disable class-methods-use-this */
import axios from "axios";

export default class Settings {
    /**
     * Function to get system settings
     * @return AxiosPromise
     */
    index() {
        return axios.get("/api/settings");
    }

    general (query) {
        return axios.get("/api/settings/general", { params: query });
    }

    update(formdata) {
        return axios.post('/api/settings', formdata);
    }
}
