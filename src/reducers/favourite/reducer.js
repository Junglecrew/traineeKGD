import * as types from './types'

const initialState = {
	favourites: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FAVOURITE_ADD:
			return {
				...state,
				favourites: [...state.favourites, action.payload],
			}
		case types.FAVOURITE_REMOVE:
			return {
				...state,
				favourites: state.favourites.filter(item => action.payload !== item),
			}
		default:
			return state
	}
}
