import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserLocation } from 'reducers/content/selectors'
import locationLogo from '/assets/svgs/icLocation.svg'

import './Geo.css'

class Geo extends Component {
	static propTypes = {
		latitude: propTypes.number,
		longitude: propTypes.number,
		userLocation: propTypes.object,
	}

	state = {
		Distance: null,
	}

	componentDidMount() {
		const { userLocation, latitude, longitude } = this.props
		// const pointLocation = new google.maps.LatLng(this.props.latitude, this.props.longitude)
		// const userLoc = new google.maps.LatLng(userLocation)
		const calculateDistance = (lat1, lon1, lat2, lon2) => {
			const radlat1 = Math.PI * lat1 / 180
			const radlat2 = Math.PI * lat2 / 180
			const theta = lon1 - lon2
			const radtheta = Math.PI * theta / 180
			let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
			dist = Math.acos(dist)
			dist = dist * 180 / Math.PI
			dist = (dist * 60 * 1.1515 * 1.609344).toFixed(1)
			return dist
		}
		this.setState({
			Distance: calculateDistance(userLocation.lat, userLocation.lng, latitude, longitude),
		})

		// navigator.geolocation.getCurrentPosition(
		// 	pos => {
		// 		/*global google*/
		// 		this.setState({ Pointlat: pos.coords.latitude, Pointlng: pos.coords.longitude })
		// 		const location = new google.maps.LatLng(this.state.Pointlat, this.state.Pointlng)
		// 		const pointLocation = new google.maps.LatLng(this.props.latitude, this.props.longitude)
		// 		this.setState({
		// 			Distance: google.maps.geometry.spherical.computeDistanceBetween(location, pointLocation).toFixed() / 1000,
		// 		})
		// 	},
		// 	err => {
		// 		console.warn(`ERROR(${err.code}): ${err.message}`)
		// 	},
		// 	{
		// 		enableHighAccuracy: true,
		// 		timeout: 50000,
		// 		maximumAge: 0,
		// 	},
		// )
	}

	getDistance() {
		const { Distance } = this.state
		const range =
			Distance === isNaN ? (
				<div>Вычисление координат...</div>
			) : Distance < 1 ? (
				<div>{Distance * 1000} м</div>
			) : (
				<div>{Distance} км</div>
			)
		return range
	}

	render() {
		return (
			<div className="geo">
				<img className="geo__logo" src={locationLogo} alt="Лого локации" />
				{/* 600м заглушка */}
				<div className="geo__range">{this.getDistance()}</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		userLocation: getUserLocation(state),
	}
}

export default connect(mapStateToProps)(Geo)
