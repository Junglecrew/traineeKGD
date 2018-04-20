import { createSelector } from 'reselect'
import { getFilteredCategory } from 'reducers/filter/selectors'
import { getUserLocation } from 'reducers/location/selectors'

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

export const getPointsSortedByRange = createSelector(getContentPoints, getUserLocation, (points, coords) => {
	if (!points) return points
	if (!coords) return points

	const calculateDistance = (lat1, lon1, lat2, lon2) => {
		const radlat1 = Math.PI * lat1 / 180
		const radlat2 = Math.PI * lat2 / 180
		const theta = lon1 - lon2
		const radtheta = Math.PI * theta / 180
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
		dist = Math.acos(dist)
		dist = dist * 180 / Math.PI
		dist = (dist * 60 * 1.1515 * 1.609344).toFixed(1)
		return dist
	}

	return points.sort(
		(a, b) =>
			calculateDistance(coords.lat, coords.lng, a.latitude, a.longitude) -
			calculateDistance(coords.lat, coords.lng, b.latitude, b.longitude),
	)
})

export const getFilteredPoints = createSelector(
	getPointsSortedByRange,
	getFilteredCategory,
	(points, filteredCategories) => {
		if (!points) return null
		console.log(points.filter(item => item.category_id.includes(filteredCategories)))
		return points.filter(item => item.category_id.includes(filteredCategories))
	},
)
