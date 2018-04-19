import { connect } from 'react-redux'
import Filter from './Filter'

import { getContent } from 'reducers/content/selectors'
import { getFilteredCategory } from 'reducers/filter/selectors'
import { setFilteredCategory, clearFilter } from 'reducers/filter/actions'

const mapStateToProps = state => {
	return {
		categories: getContent(state).categories,
		filteredCategory: getFilteredCategory(state),
	}
}

export default connect(mapStateToProps, { setFilteredCategory, clearFilter })(Filter)
