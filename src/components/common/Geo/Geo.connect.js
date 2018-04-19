import { connect } from 'react-redux'
import Geo from './Geo'

import { getUserLocation } from 'reducers/location/selectors'
import { getUserPosition } from 'reducers/location/actions'

const mapStateToProps = state => {
	return {
		userLocation: getUserLocation(state),
	}
}

export default connect(mapStateToProps, { getUserPosition })(Geo)
