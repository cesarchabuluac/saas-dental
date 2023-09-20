import axios from "axios";

export default class Subscriptions {

    setupIntent() {
        return axios.get(`/api/subscriptions/setup-intent`);
    }

    getPaymentPethods() {
        return axios.get(`/api/subscriptions/payment-methods`)
    }

    postPaymentPethods(payload) {
        return axios.post(`/api/subscriptions/payment-methods`, payload)
    }

    removePaymentMethods(payload) {
        return axios.delete(`/api/subscriptions/payment-methods/`, payload)
    }

    currentSubscriptions () {
        return axios.get(`/api/subscriptions`);
    }

    postSubscriptions (payload) {
        return axios.post(`/api/subscriptions`, payload);
    }

    cancelSubscription(payload) {
        return axios.post(`/api/subscriptions/cancel`, payload);
    }

    resumeSubscription(payload) {
        return axios.post(`/api/subscriptions/resume`, payload);
    }

    getSubscriptionInvoices () {
        return axios.get(`/api/subscriptions/invoices`)    
    }

    downloadInvoice (payload) {
        return axios.post(`/api/subscriptions/invoices`, payload)    
    }
}
