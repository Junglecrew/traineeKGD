import React, { Component } from 'react'
import PointHeader from 'components/common/PointHeader'
import PointContent from 'components/HomeScreen/PlacesList/Point/PointContent'
import PropTypes from 'prop-types'
import './Point.css'

class Point extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
	}

	getBody() {
		const { data } = this.props
		const point = (
			<div className="point">
				<div className="point__main-content">
					<PointHeader id={data.category_id} />
					<PointContent content={data} />
					<hr />
				</div>
				{data.discount_max > 0 ? <div className="point__discount">-{data.discount_max}%</div> : <div />}
			</div>
		)
		return point
	}

	render() {
		return this.getBody()
	}
}

export default Point
