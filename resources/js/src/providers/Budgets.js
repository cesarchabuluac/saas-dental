import axios from 'axios'

export default class Budgets {
  	/**
	 * Function to update a branch
	 * @param {Object} formdata
	 * @return AxiosPromise
	 */
	save(formdata) {
		return axios.post('/api/budgets', formdata)
	}

  	/**
	 * Function to update a branch
	 * @param {Object} formdata
	 * @return AxiosPromise
	 */
	update(id, formdata) {
		return axios.put(`/api/budgets/${id}`, formdata)
	}

	approve(id) {
		return axios.put(`/api/budgets/${id}/approve`)
	}

	sendEmail(id, formData) {
		return axios.post(`/api/budgets/${id}/send`, formData)
	}

  	/**
	 * Function to get information by budget
	 * @param {Number} id
	 * @return AxiosPromise
	 */
	getBudgetDetail(id) {
		return axios.get(`/api/budgets/${id}`)
	}

  	/**
	 * Funtion to delete actions
	 * @param {Array} users
	 * @return AxiosPromise
	 */
	deleteBudget(id) {
		return axios.delete(`/api/budgets/${id}`)
	}

  	/**
	 * Function to get all budgets without pagination
	 */
	getList(query) {
		return axios.get('/api/budgets', { params: query })
	}

	donwloadPDF(id, query) {
		return axios.post('/api/budgets/pdf', { id }, { responseType: 'arraybuffer' }, { params: query })
	}
}
