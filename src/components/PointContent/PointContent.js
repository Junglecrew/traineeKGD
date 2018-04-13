import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './PointContent.css'
import Geo from '/components/common/Geo'

class PointContent extends Component {
	static propTypes = {
		content: PropTypes.object.isRequired,
	}

	getShortDescr() {
		const { content } = this.props
		const shortDescr = <p>{content.description.substring(0, 53)}...</p>
		return shortDescr
	}

	getTitle() {
		const { content } = this.props
		const title = <h3>{content.name}</h3>
		return title
	}

	render() {
		const { content } = this.props
		return (
			<div className="point-short">
				<div className="point-short__content">
					<Link to={`/point/${content.id}`} className="point__link">
						{this.getTitle()}
					</Link>
					{this.getShortDescr()}
					<Geo latitude={content.latitude} longitude={content.longitude} />
				</div>
			</div>
		)
	}
}

export default PointContent
