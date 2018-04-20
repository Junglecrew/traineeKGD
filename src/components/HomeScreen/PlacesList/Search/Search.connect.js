import { connect } from 'react-redux'
import Search from './Search'

import { toggleSearchInput, handleSearch, clearSearchForm } from 'reducers/search/actions'
import { inputVisible } from 'reducers/search/selectors'

const mapStateToProps = state => {
	return {
		inputVisible: inputVisible(state),
	}
}

export default connect(mapStateToProps, { toggleSearchInput, handleSearch, clearSearchForm })(Search)
