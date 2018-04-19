import React, { Component } from 'react'
import propTypes from 'prop-types'
import locationLogo from '/assets/svgs/icLocation.svg'

import './Geo.css'

class Geo extends Component {
	static propTypes = {
		latitude: propTypes.number,
		longitude: propTypes.number,
		userLocation: propTypes.object,
	}

	calculateDistance = (lat1, lon1, lat2, lon2) => {
		const radlat1 = Math.PI * lat1 / 180
		const radlat2 = Math.PI * lat2 / 180
		const theta = lon1 - lon2
		const radtheta = Math.PI * theta / 180
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
		dist = Math.acos(dist)
		dist = dist * 180 / Math.PI
		dist = (dist * 60 * 1.1515 * 1.609344).toFixed(1)
		dist = dist > 1 ? <div>{dist} км</div> : <div>{dist * 1000} м</div>
		return dist
	}

	getDistance() {
		const { userLocation, latitude, longitude } = this.props
		const range = <div>{this.calculateDistance(userLocation.lat, userLocation.lng, latitude, longitude)}</div>
		return range
	}

	render() {
		const { userLocation } = this.props
		return userLocation !== null ? (
			<div className="geo">
				<img className="geo__logo" src={locationLogo} alt="Лого локации" />
				<div className="geo__range">{this.getDistance()}</div>
			</div>
		) : (
			<div />
		)
	}
}

export default Geo
