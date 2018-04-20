export const isFavourite = (state, id) => (state.favourite.favourites.includes(id) ? true : null)
export const getFavouriteList = state => state.favourite.favourites
export const showFavouriteList = state => state.favourite.showFavourite
