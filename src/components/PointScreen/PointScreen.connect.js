import { connect } from 'react-redux'
import PointScreen from './PointScreen'

import { contentThunk } from 'reducers/content/actions'
import { addAddressToStore, getAddressGoogle } from 'reducers/location/actions'
import { getContent } from 'reducers/content/selectors'
import { getPointsAddresses } from 'reducers/location/selectors'

const mapStateToProps = state => {
	return {
		pointsList: getContent(state).points,
		pointsAddresses: getPointsAddresses(state),
	}
}

export default connect(mapStateToProps, { addAddressToStore, getAddressGoogle, contentThunk })(PointScreen)