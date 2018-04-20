import * as types from './types'

const initialState = {
	inputVisible: false,
	searchValue: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SEARCH_INPUT_SHOW:
			return {
				...state,
				inputVisible: !state.inputVisible,
			}
		case types.SEARCH:
			return {
				...state,
				searchValue: action.payload,
			}
		case types.SEARCH_CLEAR:
			return {
				...state,
				searchValue: '',
			}

		default:
			return state
	}
}
