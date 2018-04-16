import React, { Component } from 'react'
import './Preloader.css'

class Preloader extends Component {
	render() {
		return (
			<div className="backdrop">
				<div className="loader">
					<div className="dot" />
					<div className="dot" />
					<div className="dot" />
					<div className="dot" />
					<div className="dot" />
				</div>
			</div>
		)
	}
}

export default Preloader
