export const doesAddressExist = (state, id) => (state.location.pointsAddresses[id] ? true : null)
export const getPointsAddresses = state => state.location.pointsAddresses
export const getUserLocation = state => state.location.currentUserPosition
