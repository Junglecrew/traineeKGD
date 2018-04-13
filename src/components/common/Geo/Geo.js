import React, { Component } from 'react'
import locationLogo from '/assets/svgs/icLocation.svg'
import './Geo.css'

class Geo extends Component {
	// static propTypes = {
	// 	latitude: PropTypes.number,
	// 	longitude: PropTypes.number,
	// }
	render() {
		return (
			<div className="geo">
				<img className="geo__logo" src={locationLogo} alt="Лого локации" />
				{/* 600м заглушка */}
				<div className="geo__range">600 м</div>
			</div>
		)
	}
}

export default Geo
