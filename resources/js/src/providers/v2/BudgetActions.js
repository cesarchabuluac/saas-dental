import axios from 'axios'

export default class BudgetActions {
  	
	/**
	 * Function to get all actions without pagination
	 * @param {Object} formdata
	 * @return AxiosPromise
	 */
	index(query) {
		return axios.get('/api/v2/budget-actions', { params: query })
	}
}
