import * as types from './types'

const initialState = {
	filteredCategory: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FILTER_CATEGORY:
			return {
				...state,
				filteredCategory: action.payload,
			}
		case types.CLEAR_FILTER:
			return {
				...state,
				filteredCategory: null,
			}
		default:
			return state
	}
}