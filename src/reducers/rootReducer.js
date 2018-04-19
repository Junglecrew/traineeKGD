import { combineReducers } from 'redux'

import content from './content/reducer'
import location from './location/reducer'
import filter from './filter/reducer'
import favourite from './favourite/reducer'

export default combineReducers({
	content,
	location,
	filter,
	favourite,
})
