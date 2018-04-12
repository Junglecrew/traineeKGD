import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Categories from 'constants/categories.js'
import Points from 'constants/points.js'
import PointHeader from 'components/common/PointHeader'
import Rating from 'components/Rating'
import Map from 'components/common/Map';
import './PointScreen.css'

export default class PointScreen extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Point: {},
			PointAddress: '',
		}
	}
	static propTypes = {
		match: PropTypes.object.isRequired,
	}

	componentWillMount() {
		const FilteredPoints = Points.filter(point => point.id === +this.props.match.params.index)
		return this.setState({ Point: FilteredPoints[0] })
	}

	componentDidMount() {
		const {latitude, longitude} = this.state.Point
		const { PointAddress } = this.state.PointAddress
		const key = 'AIzaSyBDyVqO6VkGcs1bqPgrZdY_Qvuaui7XmMo'
		const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`
		fetch(api)
			.then(response => {
				if (response.status == '200') {
					return response.json()
				} else {
					throw new Error('Тут напишем позже текст ошибки')
				}
			})
			.then(data => this.setState({ PointAddress: data.results[0].formatted_address }))
	}

	getBody() {
		const { category_id, photos, rate, name, description, description_2, cost_text, phone } = this.state.Point
		const { PointAddress } = this.state
		console.log(category_id)
		console.log(photos)
		return (
			<div className="container">
				<div className="point-photo">
					<Link to='/'><div className="back-button"></div></Link></div>
					<img className="point-photo__content" src={photos[0]} alt="Изображение точки" />
				
				<div className="main-content">
					<div className="main-content__wrapper">
						<div className="top-info">
							<div>
								<PointHeader id={category_id} />
							</div>
							<Rating rate={rate} />
						</div>
						<h3 className="point-title">{name}</h3>
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
							<span className="point-location__text">{PointAddress}</span>
						</div>
						<div id="map">
							<Map point={this.state.Point} />
						</div>
					</div>
				</div>
			</div>
		)
	}

	render() {
		return <div>{this.getBody()}</div>
	}
}
