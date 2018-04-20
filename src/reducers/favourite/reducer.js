import * as types from './types'

const initialState = {
	favourites: [],
	showFavourite: false,
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
		case types.FAVOURITE_TOGGLE_SHOW:
			return {
				...state,
				showFavourite: !state.showFavourite,
			}
		default:
			return state
	}
}
