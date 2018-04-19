import { connect } from 'react-redux'
import PlacesList from './PlacesList'

import { contentThunk } from 'reducers/content/actions'
import { getUserPosition } from 'reducers/location/actions'
import { getContent, getIsFetching } from 'reducers/content/selectors'
import { getFilteredCategory } from 'reducers/filter/selectors'

const mapStateToProps = state => {
	return {
		pointsList: getContent(state).points,
		filteredCategory: getFilteredCategory(state),
		ifFetching: getIsFetching(state),
	}
}

export default connect(mapStateToProps, { contentThunk, getUserPosition })(PlacesList)
