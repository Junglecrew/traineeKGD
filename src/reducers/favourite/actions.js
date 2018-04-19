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

export const handleClickFavourites = id => (dispatch, getState) => {
	const state = getState()
	isFavourite(state, id) ? dispatch(removePointFromFavourite(id)) : dispatch(addPointToFavourite(id))
	// isFavourite(state, id) ? console.log("удаляем") : console.log("добавляем")
}
