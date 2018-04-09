import React, { Component, Fragment } from 'react'
import PointHeader from 'components/common/PointHeader'
import PointContent from 'components/PointContent'
import PropTypes from 'prop-types'
import './Point.css'

class Point extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,

};

	getBody() {
		const {data} = this.props
		console.log(data)
		const point = 
		<div className="point">
			<div className="point__main-content">
				<PointHeader 
					// category={data.ActualCategory}
					id = {data.category_id} 
				/>
				<PointContent 
					content = {data}
				/>
				
				<hr/>
			</div>
			
			<div className="point__discount">-{data.discount_max}%</div>
		</div>
		return point
	}

	render() {
		return this.getBody()
	}
}

export default Point;
