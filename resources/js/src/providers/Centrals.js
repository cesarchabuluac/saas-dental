import axios from "axios";

const BASE_PATH = window.location.origin
export default class Centrals {
    index(summaryType) {
        return axios.get(`/api/dashboard-summary/${summaryType}`)
    }

    topPlans() {
        return axios.get(`/api/dashboard/top-plans`)
    }

    topClients() {
        return axios.get(`/api/dashboard/top-clients`)
    }
}