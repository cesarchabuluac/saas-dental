import axios from "axios";

export default class DashBoards {

    index(query) {
        return axios.get("/api/dashboards/this_month", { params: query });
    }

    professionals (query) {
        return axios.get("/api/dashboards/professionals", { params: query });
    }

    revenueReport() {
        return axios.get("/api/dashboards/revenueReport", { params: query });
    }

}
