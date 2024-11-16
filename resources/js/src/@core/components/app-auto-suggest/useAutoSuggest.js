import { ref, watch } from '@vue/composition-api'
import PatientProvider from '@/providers/Patients'
const PatientResource = new PatientProvider()

export default function useAutoSuggest(props) {
	const filteredData = ref({})

	/**
	 * Filter group against provided query
	 * Grp Structure:
	 * {
	 *    key: 'title',
	 *    data: [
	 *      title: 'Admin', img: 'someImage.png',
	 *      title: 'Template', img: 'otherImage.png',
	 *    ]
	 * }
	 * @param {Object} grp Group object to perform filter on
	 * @param {String} query Query string to filter
	 */
	const filterGrp = async (grp, query) => {
		if (query == '' || query == null && query.length < 3) {
			return false
		}

		const q = {
			search: query,
			sortBy: 'name',
			sortDesc: 'asc',
			perPage: 10,
		}
		
		const { data } = await PatientResource.nextAppointment(q)
		console.log('data', data)

		return data.data.data

	}

	const searchQuery = ref('')
	const resetsearchQuery = () => {
		searchQuery.value = ''
	}

	const handleSearchQueryUpdate = val => {
		if (val === '') {
			filteredData.value = {}
		} else {
			const queriedData = {}
			const dataGrps = Object.keys(props.data)

			dataGrps.forEach((grp, i) => {
				queriedData[dataGrps[i]] = filterGrp(props.data[grp], val)
			})

			filteredData.value = queriedData
		}
	}

	watch(searchQuery, val => handleSearchQueryUpdate(val))

	return {
		searchQuery,
		resetsearchQuery,
		filteredData,
	}
}
