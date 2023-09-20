import axios from "axios";

export default class Impersonates {

    impersonate (token) {
        return axios.get(`/generate/${token}/`)
    }
}