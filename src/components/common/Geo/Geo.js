import React, { Component } from 'react'
import propTypes from 'prop-types'
import locationLogo from '/assets/svgs/icLocation.svg'

import './Geo.css'

class Geo extends Component {
	static propTypes = {
		latitude: propTypes.number,
		longitude: propTypes.number,
	}

	state = {
		lat: 43,
		lng: 41,
	}

	componentDidMount() {
		// this.getDistance()
	}

	// getDistance() {
	// 	/*global google*/
	// 	fetch(
	// 		'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAWKQQMdmtODUcxdIs0b_ASQEuOLRtFa5U&libraries=geometry',
	// 		{
	// 			method: 'post',
	// 		},
	// 	)
	// 		.then(response => response.json())
	// 		.then(data => this.setState({ lat: data.location.lat, lng: data.location.lng }))
	// }

	// navigator.geolocation.getCurrentPosition(
	// 	pos => {
	// 		/*global google*/
	// 		const latitude = pos.coords.latitude
	// 		const longitude = pos.coords.longitude
	// 		const location = new google.maps.LatLng(latitude, longitude)
	// 		const pointLocation = new google.maps.LatLng(this.props.latitude, this.props.longitude)
	// 		const distance = google.maps.geometry.spherical.computeDistanceBetween(location, pointLocation)
	// 		console.log(distance)
	// 		document.querySelector('.geo__range').innerHTML = distance
	// 	},
	// 	err => {
	// 		console.warn(`ERROR(${err.code}): ${err.message}`)
	// 	},
	// 	{
	// 		enableHighAccuracy: true,
	// 		timeout: 5000,
	// 		maximumAge: 0,
	// 	},
	// )

	render() {
		return (
			<div className="geo">
				<img className="geo__logo" src={locationLogo} alt="Лого локации" />
				{/* 600м заглушка */}
				<div className="geo__range">{this.state.lat}</div>
			</div>
		)
	}
}

export default Geo
