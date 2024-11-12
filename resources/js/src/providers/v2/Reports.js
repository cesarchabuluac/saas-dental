/* eslint-disable class-methods-use-this */
import axios from "axios";

export default class Reports {

    /**
     *  Function to get all medicines with stock
     */
    getMedicinesWithStock(query) {
        return axios.get('/api/v2/reports/medicines-with-stock', { params: query })
    }

}