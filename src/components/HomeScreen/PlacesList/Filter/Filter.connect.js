import { connect } from 'react-redux'
import Filter from './Filter'

import { getContentCategories, getFilteredPoints } from 'reducers/content/selectors'
import { getFilteredCategory } from 'reducers/filter/selectors'
import { handleFilterChange, toggleFilterWindow } from 'reducers/filter/actions'
import { handleToggleFavouritesShow } from 'reducers/favourite/actions'
import { showFilter } from 'reducers/filter/selectors'

const mapStateToProps = state => {
	return {
		categories: getContentCategories(state),
		filteredCategory: getFilteredCategory(state),
		showFilter: showFilter(state),
		filteredPoints: getFilteredPoints(state),
	}
}

export default connect(mapStateToProps, {
	handleFilterChange,
	toggleFilterWindow,
	handleToggleFavouritesShow,
})(Filter)
