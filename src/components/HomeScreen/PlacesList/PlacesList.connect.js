import { connect } from 'react-redux'
import PlacesList from './PlacesList'

import { contentThunk } from 'reducers/content/actions'
import { getUserPosition } from 'reducers/location/actions'
import { toggleFilterWindow } from 'reducers/filter/actions'
import { clearSearchForm, searchClear } from 'reducers/search/actions'

import { getIsFetching, getFilteredPoints, getPointsSortedByRange } from 'reducers/content/selectors'
import { getFilteredCategory, showFilter } from 'reducers/filter/selectors'
import { searchValue } from 'reducers/search/selectors'

const mapStateToProps = state => {
	return {
		filteredCategory: getFilteredCategory(state),
		ifFetching: getIsFetching(state),
		showFilter: showFilter(state),
		searchValue: searchValue(state),
		pointsList: getPointsSortedByRange(state),
		filteredPoints: getFilteredPoints(state),
	}
}

export default connect(mapStateToProps, {
	contentThunk,
	getUserPosition,
	toggleFilterWindow,
	clearSearchForm,
	searchClear,
})(PlacesList)
