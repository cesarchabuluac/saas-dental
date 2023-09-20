import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import router from '@/router'

export default {
    namespaced: true,
    state: {
        units: [],
        brands: [],
        categories: [],
        subcategories: [],
        warehouses: [],
        medicines: [],
    },
    getters: {
        getUnits: state => state.units,
        getBrands: state => state.brands,
        getCategories: state => state.categories,
        getSubcategories: state => state.subcategories,
        getWarehouses: state => state.warehouses,
        getMedicines: state => state.medicines,
    },
    mutations: {
        SET_UNITS(state, units) {
            state.units = units
        },
        SET_BRANDS(state, brands) {
            state.brands = brands
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        SET_SUBCATEGORIES(state, subcategories) {
            state.subcategories = subcategories
        },
        SET_WAREHOUSES(state, warehouses) {
            state.warehouses = warehouses
        },
    },
    actions: {
        ADD_UNIT(state, newUnit) {
            state.units.push(newUnit)
        },
        ADD_CATEGORY(state, category) {
            state.categories.push(category)
        },
        ADD_SUBCATEGORY(state, newSubCategory) {
            state.subcategories.push(newSubCategory)
        },
        ADD_WAREHOUSE(state, newWarehouse) {
            state.warehouses.push(newWarehouse)
        },
    },
}
