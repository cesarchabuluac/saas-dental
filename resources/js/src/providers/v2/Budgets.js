import axios from 'axios'

export default class Budgets {

	/**
	 * Function to get all budgets without pagination
	 */
	index(query) {
		return axios.get('/api/v2/budgets', { params: query })
	}

}
