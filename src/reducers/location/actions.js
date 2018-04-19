import * as types from './types'
import { doesAddressExist } from './selectors'

export const addAddressToStore = payload => ({
	type: types.ADD_POINT_ADDRESS,
	payload,
})

export const positioningStart = () => ({
	type: types.POSITIONING_START,
})

export const positioningSuccess = payload => ({
	type: types.POSITIONING_SUCCESS,
	payload,
})

export const getAddressGoogle = (latitude, longitude, id) => (dispatch, getState) => {
	const state = getState()
	if (doesAddressExist(state, id)) return
	const key = 'AIzaSyBDyVqO6VkGcs1bqPgrZdY_Qvuaui7XmMo'
	const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`
	console.log('Получение адреса')
	fetch(api)
		.then(response => {
			if (response.status === 200) {
				return response.json()
			} else {
				throw new Error(`Ответ сервера ${response.status}`)
			}
		})
		.then(data => dispatch(addAddressToStore([{ id: id, PointAddress: data.results[0].formatted_address }])))
}

export const getUserPosition = () => (dispatch, getState) => {
	dispatch(positioningStart())
	navigator.geolocation.getCurrentPosition(
		pos => {
			const Pointlat = pos.coords.latitude
			const Pointlng = pos.coords.longitude
			dispatch(positioningSuccess({ lat: Pointlat, lng: Pointlng }))
		},
		err => {
			console.warn(`ERROR(${err.code}): ${err.message}`)
		},
		{
			enableHighAccuracy: true,
			timeout: 50000,
			maximumAge: 0,
		},
	)
}