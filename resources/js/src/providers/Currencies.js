import axios from "axios";

export default class Currencies {

    index(query) {
        return axios.get(`/api/currencies`, { params: query })
    }
}