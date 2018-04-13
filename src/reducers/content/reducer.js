import * as types from './types'

const initialState = {
	isFetching: false,
	error: null,
	payload: [],
	lastUpdate: null,
	filteredCategory: null,
	pointsAddresses: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.CONTENT_START:
			return {
				...state,
				isFetching: true,
				error: null,
				filteredCategory: null,
			}
		case types.CONTENT_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				payload: action.payload,
				lastUpdate: action.lastUpdate,
			}
		case types.CONTENT_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.payload,
				payload: [],
				lastUpdate: null,
			}
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
		case types.ADD_POINT_ADDRESS:
			return {
				...state,
				pointsAddresses: action.payload,
			}
		default:
			return state
	}
}
