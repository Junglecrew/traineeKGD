import { connect } from 'react-redux'
import PointScreen from './PointScreen'

import { contentThunk } from 'reducers/content/actions'
import { addAddressToStore, getAddressGoogle } from 'reducers/location/actions'
import { getContentPoints } from 'reducers/content/selectors'
import { getPointsAddresses } from 'reducers/location/selectors'

const mapStateToProps = state => {
	return {
		pointsList: getContentPoints(state),
		pointsAddresses: getPointsAddresses(state),
	}
}

export default connect(mapStateToProps, { addAddressToStore, getAddressGoogle, contentThunk })(PointScreen)
