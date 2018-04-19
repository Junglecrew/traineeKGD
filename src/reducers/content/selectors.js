export const getIsFetching = state => state.content.isFetching
export const getError = state => state.content.error
export const getContent = state => state.content.payload
export const getLastUpdate = state => state.content.lastUpdate

export const getIsNeedUpdate = state =>
	getLastUpdate(state) === null ||
	getContent(state) === null ||
	getError(state) !== null ||
	Number(new Date()) - getLastUpdate(state) > 1000 * 60 * 60 * 24
