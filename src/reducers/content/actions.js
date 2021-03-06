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
