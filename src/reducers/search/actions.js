import * as types from './types'

export const searchInputShow = () => ({
	type: types.SEARCH_INPUT_SHOW,
})

export const searchData = payload => ({
	type: types.SEARCH,
	payload,
})

export const searchClear = () => ({
	type: types.SEARCH_CLEAR,
})

export const toggleSearchInput = () => (dispatch, getState) => {
	dispatch(searchInputShow())
}

export const handleSearch = payload => (dispatch, getState) => {
	payload.length >= 3 ? dispatch(searchData(payload)) : dispatch(searchClear())
}

export const clearSearchForm = payload => (dispatch, getState) => {
	dispatch(searchInputShow())
	dispatch(searchClear())
}
