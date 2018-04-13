import * as types from './types'

const initialState = {
	isFetching: false,
	error: null,
	payload: [],
	lastUpdate: null,
	filteredCategory: [],
	pointsAddresses: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.CONTENT_START:
			return {
				...state,
				isFetching: true,
				error: null,
				filteredCategory: [],
			}
		case types.CONTENT_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				payload: action.payload,
				lastUpdate: action.lastUpdate,
				pointsAddresses: [],
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
				filteredCategory: [],
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
