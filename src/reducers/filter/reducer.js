import * as types from './types'

const initialState = {
	filteredCategory: null,
	showFilter: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FILTER_CATEGORY:
			return {
				...state,
				filteredCategory: action.payload,
			}
		case types.FILTER_WINDOW_SHOW:
			return {
				...state,
				showFilter: !state.showFilter,
			}
		case types.CLEAR_FILTER:
			return {
				...state,
				filteredCategory: null,
			}
		case types.CHANGE_FILTER:
			return {
				...state,
				filteredCategory: action.payload,
			}
		default:
			return state
	}
}
