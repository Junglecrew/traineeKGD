export const getIsFetching = state => state.content.isFetching
export const getError = state => state.content.error
export const getContent = state => state.content.payload
export const getFilteredCategory = state => state.content.filteredCategory
export const getPointsAddresses = state => state.content.pointsAddresses
export const getLastUpdate = state => state.content.lastUpdate
export const doesAddressExist = (state, id) => (state.content.pointsAddresses[id] ? true : null)

export const getIsNeedUpdate = state =>
	getLastUpdate(state) === null ||
	getContent(state) === null ||
	getError(state) !== null ||
	Number(new Date()) - getLastUpdate(state) > 1000 * 60
