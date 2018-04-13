import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { addAddressToStore, getAddressGoogle } from 'reducers/content/actions'
import { getContent, getPointsAddresses } from 'reducers/content/selectors'
import PointHeader from 'components/common/PointHeader'
import Rating from 'components/Rating'
import Map from 'components/common/Map'
import './PointScreen.css'

class PointScreen extends Component {
	static propTypes = {
		match: propTypes.object.isRequired,
		pointsAddresses: propTypes.array,
		getAddressGoogle: propTypes.func.isRequired,
		pointsList: propTypes.array,
	}

	componentWillMount() {
		const { pointsList, pointsAddresses } = this.props
		const Point = pointsList.filter(point => point.id === +this.props.match.params.index)
		console.log(Point)
		console.log(pointsAddresses)
		const { id } = Point[0]
		pointsAddresses.filter(item => item.id === id)
		console.log(pointsAddresses)
		return this.setState({ Point: Point[0] })
	}

	componentDidMount() {
		const { getAddressGoogle } = this.props
		const { latitude, longitude, id } = this.state.Point
		getAddressGoogle(latitude, longitude, id)
	}

	getBody() {
		const { category_id, photos, rate, name, description, description_2, cost_text, phone } = this.state.Point
		const { pointsAddresses } = this.props
		console.log(pointsAddresses)
		return (
			<div className="container">
				<div className="point-photo">
					<Link to="/">
						<div className="back-button" />
					</Link>
				</div>
				<img className="point-photo__content" src={photos[0]} alt="Изображение точки" />

				<div className="main-content">
					<div className="main-content__wrapper">
						<div className="top-info">
							<div>
								<PointHeader id={category_id} />
							</div>
							<Rating rate={rate} />
						</div>
						<div className="point-title">{name}</div>
						<div className="point-description">{description}</div>
						<div className="point-schedule">
							<span>Режим работы: </span>
							{description_2}
						</div>
						<div className="point-prices">
							<span>Стомость посещения: </span>
							{cost_text}
						</div>
						<div className="point-phone">
							<span className="point-phone__number">{phone}</span>
						</div>
						<div className="point-location">
							<span className="point-location__text">{this.getAddress()}</span>
						</div>
						<div id="map">
							<Map point={this.state.Point} />
						</div>
					</div>
				</div>
			</div>
		)
	}

	getAddress() {
		const { id } = this.state.Point
		const { pointsAddresses } = this.props
		const pointDetails = pointsAddresses.find(item => item.id === id)
		if (pointDetails === undefined) {
			return <div>Загрузка адреса...</div>
		} else {
			return <div>{pointDetails.PointAddress}</div>
		}
	}
	// getAddress() {
	// 	const { id } = this.state.Point
	// 	const { pointsAddresses } = this.props
	// 	pointsAddresses.filter(item => item.id === id)
	// 	console.log(pointsAddresses)
	// 	return pointsAddresses[0].PointAddress
	// }

	render() {
		return <div>{this.getBody()}</div>
	}
}

const mapStateToProps = state => {
	return {
		pointsList: getContent(state).points,
		pointsAddresses: getPointsAddresses(state),
	}
}

export default connect(mapStateToProps, { addAddressToStore, getAddressGoogle })(PointScreen)
