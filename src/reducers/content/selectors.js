import { createSelector } from 'reselect'
import { getFilteredCategory } from 'reducers/filter/selectors'

export const getIsFetching = state => state.content.isFetching
export const getError = state => state.content.error
export const getContentPoints = state => state.content.payload.points
export const getContentCategories = state => state.content.payload.categories
export const getLastUpdate = state => state.content.lastUpdate

export const getIsNeedUpdate = state =>
	getLastUpdate(state) === null ||
	getContentPoints(state) === null ||
	getError(state) !== null ||
	Number(new Date()) - getLastUpdate(state) > 1000 * 60 * 60 * 24

export const getFilteredPoints = createSelector(getContentPoints, getFilteredCategory, (points, filteredCategories) => {
	if (!points) return null
	return points.filter(item => item.category_id.includes(filteredCategories))
})
