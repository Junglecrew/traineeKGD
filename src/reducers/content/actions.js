import * as types from './types'
import { API_URL, API_VERSION, API_TOKEN } from 'config'
import { getIsNeedUpdate } from './selectors'
// import configureStore from 'store/configureStore'

// const { store } = configureStore()

export const contentStart = () => ({
	type: types.CONTENT_START,
})

export const contentSuccess = payload => ({
	type: types.CONTENT_SUCCESS,
	payload,
	lastUpdate: Number(new Date()),
})

export const contentError = payload => ({
	type: types.CONTENT_ERROR,
	payload,
})

export const setFilteredCategory = payload => ({
	type: types.FILTER_CATEGORY,
	payload,
})

export const clearFilter = () => ({
	type: types.CLEAR_FILTER,
})

export const addAddressToStore = payload => ({
	type: types.ADD_POINT_ADDRESS,
	payload,
})

export const contentThunk = () => (dispatch, getState) => {
	if (getIsNeedUpdate(getState())) {
		console.log('Получение данных с сервера(истечение времени)')
		dispatch(contentStart())
		fetch(`${API_URL}/${API_VERSION}/content`, {
			headers: {
				Authorization: `Token ${API_TOKEN}`,
			},
		})
			.then(response => response.json())
			.then(content => dispatch(contentSuccess(content)))
			.catch(error => dispatch(contentError(error)))
	}
}

export const getAddressGoogle = (latitude, longitude, id) => (dispatch, getState) => {
	console.log('getting address from GOOGLE API DECODER')
	const key = 'AIzaSyBDyVqO6VkGcs1bqPgrZdY_Qvuaui7XmMo'
	const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`
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
