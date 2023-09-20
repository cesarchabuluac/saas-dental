import axios from "axios";

export default class Notifications {
    fetch () {
        return axios.get(`/api/notifications`)
    }

    update (id, payload) {
        return axios.put(`/api/notifications/${id}`, payload)
    }
}
