import * as types from './types'

const initialState = {
	pointsAddresses: {},
	currentUserPosition: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.LOCATION_ADD:
			return {
				...state,
				pointsAddresses: {
					...state.pointsAddresses,
					[action.payload[0].id]: {
						PointAddress: action.payload[0].PointAddress,
					},
				},
			}
		case types.POSITIONING_START:
			return {
				...state,
				error: null,
				currentUserPosition: null,
			}
		case types.POSITIONING_SUCCESS:
			return {
				...state,
				currentUserPosition: action.payload,
			}

		default:
			return state
	}
}
