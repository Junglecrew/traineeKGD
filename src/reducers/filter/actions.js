import * as types from './types'
import { getFilteredCategory } from './selectors'

export const filterShow = () => ({
	type: types.FILTER_WINDOW_SHOW,
})

export const setFilteredCategory = payload => ({
	type: types.FILTER_CATEGORY,
	payload,
})

export const changeFilter = payload => ({
	type: types.CHANGE_FILTER,
	payload,
})

export const clearFilter = () => ({
	type: types.CLEAR_FILTER,
})

export const handleFilterChange = id => (dispatch, getState) => {
	const state = getState()
	id === getFilteredCategory(state, id)
		? dispatch(clearFilter())
		: getFilteredCategory(state, id) ? dispatch(changeFilter(id)) : dispatch(setFilteredCategory(id))
	dispatch(filterShow())
	document.body.style.position = 'static'
}

export const toggleFilterWindow = () => (dispatch, getState) => {
	if (document.body.style.position === 'fixed') {
		document.body.style.position = 'static'
	} else {
		document.body.style.position = 'fixed'
	}
	dispatch(filterShow())
}
