<template>
	<li class="nav-item nav-search">

		<!-- Icon -->
		<a href="javascript:void(0)" class="nav-link nav-link-search" @click="showSearchBar = true">
			<feather-icon icon="SearchIcon" size="21" />
		</a>

		<!-- Input -->
		<div class="search-input" :class="{ 'open': showSearchBar }">
			<div class="search-input-icon">
				<feather-icon icon="SearchIcon" />
			</div>
			<b-form-input v-if="showSearchBar" v-model="searchQuery" :placeholder="$t('appointments.input_next_search')"
				autofocus autocomplete="off" @keyup.up="increaseIndex(false)" @keyup.down="increaseIndex"
				@keyup.esc="showSearchBar = false; resetsearchQuery()" @keyup.enter="suggestionSelected"
				@blur.stop="showSearchBar = false; resetsearchQuery()" />
			<div class="search-input-close" @click="showSearchBar = false; resetsearchQuery()">
				<feather-icon icon="XIcon" />
			</div>

			<!-- Suggestions List -->
			<vue-perfect-scrollbar :settings="perfectScrollbarSettings"
				class="search-list search-list-main scroll-area overflow-hidden" :class="{ 'show': searchQuery }" tagname="ul">

				<li>
					<!-- Group Header -->
					<p class="suggestion-group-title">
						<span>{{ $t('appointments.modal_next_title') }}</span>
					</p>
				</li>
				<li>
					<ul>
						<li>
							<b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
								<ul>
									<li v-for="(item, index) in nextAppointments" :key="index" class="suggestions-groups-list">
										<ul>
											<li class="suggestion-group-suggestion cursor-pointer">
												<p><strong>{{ $t('appointments.appointment') }} {{ item.custom_date_diff_humans }}</strong>
												<small class="text-muted text-capitalize">{{ dateTimeFormat(item.date) }}</small></p>

												<div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
												<p>
													{{ item.full_name }}<br>
													<small class="text-secondary"><feather-icon icon="TerminalIcon" size="16" />{{ item.document_type }}: {{ item.rut }}</small><br>
													<small class="text-secondary"><feather-icon icon="MailIcon" size="16" /> {{ item.email }}</small><br>
													<small class="text-secondary"><feather-icon icon="PhoneIcon" size="16" /> {{ item.phone }}</small><br>
													<small>
														{{ $t('appointments.state') }}:
														<b-badge :variant="`${resolveStateAppointmentColor(item.state)}`">{{ resolveStateAppointment(item.state) }}</b-badge>
													</small>
												</p>
											</div>
											<small>{{ $t('appointments.table_observations') }}: {{ item.intern_observation }}</small>
											<b-media class="mt-1">
												<template #aside>
													<b-avatar size="24" :src="null" :text="avatarText(item.name)" />
												</template>
												<small>{{ $t('appointments.doctor_will_assist_you').replace(':doctor', item.name) }}</small>
											</b-media>
											</li>
										</ul>
									</li>
								</ul>
							</b-overlay>
						</li>
					</ul>
				</li>
				<li v-if="!nextAppointments.length && searchQuery" class="suggestion-group-suggestion no-results">
					<p>{{ $t('no_results_found') }}</p>
				</li>
			</vue-perfect-scrollbar>
		</div>
	</li>
</template>

<script>
import _ from 'lodash'
import {
	BFormInput, BLink, BImg, BAvatar,
	BButton, BFormGroup, BFormCheckboxGroup, BFormCheckbox, BCol, BRow,
	BInputGroup, BInputGroupPrepend, BDropdown, BDropdownItem,
	BOverlay, BSpinner, BModal, VBModal, BCard, BMedia, BBadge,
} from 'bootstrap-vue'
import { ref, watch } from '@vue/composition-api'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import useAutoSuggest from '@core/components/app-auto-suggest/useAutoSuggest'
import { title } from '@core/utils/filter'
import router from '@/router'
import store from '@/store'
import searchAndBookmarkData from '../search-and-bookmark-data'

import PatientProvider from '@/providers/Patients'
const PatientResource = new PatientProvider()

export default {
	components: {
		BFormInput,
		BLink,
		BImg,
		BAvatar,
		BButton, 
		BFormGroup, 
		BFormCheckboxGroup, 
		BFormCheckbox, 
		BCol, 
		BRow,
		BInputGroup, 
		BInputGroupPrepend, 
		BDropdown, 
		BDropdownItem,
		BOverlay, 
		BSpinner, 
		BModal, 
		VBModal, 
		BCard, 
		BMedia, 
		BBadge,

		VuePerfectScrollbar,
	},
	methods: {

	},
	setup() {
		const showSearchBar = ref(false)
		let timeout = null
		const loading = ref(false)
		const perfectScrollbarSettings = {
			maxScrollbarLength: 60,
		}
		const searchPatient = ref('')
		const nextAppointments = ref([])

		const searchNextAppointment = async () => {
			nextAppointments.value = []
			if (searchQuery.value == '' || searchQuery.value == null && searchQuery.value.length < 3) {
				return false
			}
			loading.value = true
			const query = {
				search: searchQuery.value,
				sortBy: 'name',
				sortDesc: 'asc',
				perPage: 10,
			}

			nextAppointments.value = []
			const { data } = await PatientResource.nextAppointment(query)
			loading.value = false
			if (data.success) {
				nextAppointments.value = data.data
			}
		}

		// Aplicar debounce a la función searchNextAppointment
		const debouncedSearchNextAppointment = _.debounce(searchNextAppointment, 300) // 500ms de espera

		
		const suggestionSelected = (grpName, suggestion) => {

			  // If parameter is not provided => Use current selected
			  if (!suggestion) {
			    // If currentSelected value is -1 => No value/item is selected (Prevent Errors)
			    /* eslint-disable no-use-before-define, no-param-reassign */
			    if (currentSelected.value !== -1) {
			      /* eslint-disable no-use-before-define, no-param-reassign */
			      const [grpIndex, itemIndex] = currentSelected.value.split('.')
			      grpName = Object.keys(filteredData.value)[grpIndex]
			      suggestion = filteredData.value[grpName][itemIndex]
			      /* eslint-enable */
			    }
			  }
			  if (grpName === 'pages') router.push(suggestion.route).catch(() => { })
			  // eslint-disable-next-line no-use-before-define
			  resetsearchQuery()
			  showSearchBar.value = false
		}

		const {
			searchQuery,
			resetsearchQuery,
			filteredData,
		} = useAutoSuggest({ data: [], searchLimit: 4 })

		watch(searchPatient, async (val) => {
			debouncedSearchNextAppointment()  // Llamamos a la versión con debounce
		})

		watch(searchQuery, async (val) => {
			store.commit('app/TOGGLE_OVERLAY', Boolean(val))
			debouncedSearchNextAppointment()  // Llamamos a la versión con debounce
		})
	
		const currentSelected = ref(-1)
		watch(filteredData, val => {
			if (!Object.values(val).some(obj => obj.length)) {
			  currentSelected.value = -1
			} else {
			  // Auto Select first item if it's not item-404
			  let grpIndex = null

			  // eslint-disable-next-line no-restricted-syntax
			  for (const [index, grpSuggestions] of Object.values(val).entries()) {
			    if (grpSuggestions.length) {
			      grpIndex = index
			      break
			    }
			  }

			  if (grpIndex !== null) currentSelected.value = `${grpIndex}.0`
			}
		})

		const increaseIndex = (val = true) => {

			/* eslint-disable no-lonely-if, no-plusplus */

			  // If there's no matching items
			  if (!Object.values(filteredData.value).some(grpItems => grpItems.length)) return

			  const [grpIndex, itemIndex] = currentSelected.value.split('.')

			  const grpArr = Object.entries(filteredData.value)
			  const activeGrpTotalItems = grpArr[grpIndex][1].length

			  if (val) {
			    // If active item is not of last item in grp
			    if (activeGrpTotalItems - 1 > itemIndex) {
			      currentSelected.value = `${grpIndex}.${Number(itemIndex) + 1}`

			      // If active item grp is not last in grp list
			    } else if (grpIndex < grpArr.length - 1) {
			      for (let i = Number(grpIndex) + 1; i < grpArr.length; i++) {
			        // If navigating group have items => Then move in that group
			        if (grpArr[i][1].length > 0) {
			          currentSelected.value = `${Number(i)}.0`
			          break
			        }
			      }
			    }
			  } else {
			    // If active item is not of first item in grp
			    if (Number(itemIndex)) {
			      currentSelected.value = `${grpIndex}.${Number(itemIndex) - 1}`

			      // If active item grp  is not first in grp list
			    } else if (Number(grpIndex)) {
			      for (let i = Number(grpIndex) - 1; i >= 0; i--) {
			        // If navigating group have items => Then move in that group
			        if (grpArr[i][1].length > 0) {
			          currentSelected.value = `${i}.${grpArr[i][1].length - 1}`
			          break
			        }
			      }
			    }
			  }
			/* eslint-enable no-lonely-if, no-plusplus */
		}

		return {
			loading,
			showSearchBar,
			perfectScrollbarSettings,
			searchAndBookmarkData,
			title,
			suggestionSelected,
			currentSelected,
			increaseIndex,

			// AutoSuggest
			nextAppointments,
			searchPatient,
			searchQuery,
			resetsearchQuery,
			filteredData,
		}
	},
}
</script>

<style lang="scss" scoped>
@import '~@resources/scss/base/bootstrap-extended/include';
@import '~@resources/scss/base/components/variables-dark';

ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

p {
	margin: 0;
}

/* .app-auto-suggest {
  position: relative;
}

.auto-suggest-suggestions-list {
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  border-radius: 6px;
  position: absolute;
  top: calc(100% + 1rem);
  background-color: white;
  width: 100%;
} */

.suggestion-group-title {
	font-weight: 500;
	padding: .75rem 1rem .25rem;
}

.suggestion-group-suggestion {
	padding: .75rem 1rem
}

.suggestion-current-selected {
	background-color: $body-bg;

	.dark-layout & {
		background-color: $theme-dark-body-bg;
	}
}
</style>
