import * as types from './types'

export const setFilteredCategory = payload => ({
	type: types.FILTER_CATEGORY,
	payload,
})

export const clearFilter = () => ({
	type: types.CLEAR_FILTER,
})