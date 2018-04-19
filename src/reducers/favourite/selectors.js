export const isFavourite = (state, id) => (state.favourite.favourites[id] ? true : null)
export const getFavouriteList = state => state.favourite.favourites
