import * as types from './types'
import { isFavourite } from './selectors'

export const addPointToFavourite = payload => ({
	type: types.FAVOURITE_ADD,
	payload,
})

export const removePointFromFavourite = payload => ({
	type: types.FAVOURITE_REMOVE,
	payload,
})

export const toggleFavouritesShow = () => ({
	type: types.FAVOURITE_TOGGLE_SHOW,
})

export const handleClickFavourites = id => (dispatch, getState) => {
	const state = getState()
	isFavourite(state, id) ? dispatch(removePointFromFavourite(id)) : dispatch(addPointToFavourite(id))
}

export const handleToggleFavouritesShow = () => (dispatch, getState) => {
	dispatch(toggleFavouritesShow())
}
