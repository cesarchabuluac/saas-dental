/* eslint-disable class-methods-use-this */
import axios from "axios";

export default class Appointments {

    /**
     * Function to get all budgets without pagination
     */
    index(query) {
        return axios.get('/api/v2/appointments', { params: query })
    }

    available (query) {
        return axios.get("/api/v2/appointments/available", { params: query });
    }
}