import { connect } from 'react-redux'
import Favourite from './Favourite'

import { handleClickFavourites } from 'reducers/favourite/actions'
import { getFavouriteList } from 'reducers/favourite/selectors'

const mapStateToProps = state => {
	return {
		getFavouriteList: getFavouriteList(state),
	}
}

export default connect(mapStateToProps, { handleClickFavourites })(Favourite)
