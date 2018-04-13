import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { addAddressToStore } from 'reducers/content/actions'
import { getContent, getPointsAddresses, getFilteredCategory } from 'reducers/content/selectors'
import PointHeader from 'components/common/PointHeader'
import Rating from 'components/Rating'
import Map from 'components/common/Map'
import './PointScreen.css'

class PointScreen extends Component {
	constructor(props) {
		super(props)

		this.state = {
			PointAddress: '',
		}
	}
	static propTypes = {
		match: propTypes.object.isRequired,
		pointsAddresses: propTypes.array,
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
		const { latitude, longitude, id } = this.state.Point
		const key = 'AIzaSyBDyVqO6VkGcs1bqPgrZdY_Qvuaui7XmMo'
		const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`
		fetch(api)
			.then(response => {
				if (response.status === 200) {
					return response.json()
				} else {
					throw new Error(`Ответ сервера ${response.status}`)
				}
			})
			// .then(data => {
			// 	this.setState({ PointAddress: data.results[0].formatted_address })
			// })
			.then(data => this.props.addAddressToStore([{ id: id, PointAddress: data.results[0].formatted_address }]))

		console.log(this.props.pointsAddresses)
	}

	getBody() {
		const { category_id, photos, rate, name, description, description_2, cost_text, phone } = this.state.Point
		const { PointAddress } = this.state
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
		const { pointsAddresses } = this.props
		if (pointsAddresses.length === 0) {
			return <div>Загрузка адреса</div>
		} else {
			return <div>{pointsAddresses[0].PointAddress}</div>
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

export default connect(mapStateToProps, { addAddressToStore })(PointScreen)
