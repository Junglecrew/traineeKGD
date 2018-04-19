import { connect } from 'react-redux'
import Filter from './Filter'

import { getContent } from 'reducers/content/selectors'
import { getFilteredCategory } from 'reducers/filter/selectors'
import { handleFilterChange, toggleFilterWindow } from 'reducers/filter/actions'
import { showFilter } from 'reducers/filter/selectors'

const mapStateToProps = state => {
	return {
		categories: getContent(state).categories,
		filteredCategory: getFilteredCategory(state),
		showFilter: showFilter(state),
	}
}

export default connect(mapStateToProps, { handleFilterChange, toggleFilterWindow })(Filter)
