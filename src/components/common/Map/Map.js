import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import propTypes from 'prop-types'
import locationLogo from '/assets/svgs/icLocation.svg'

const Marker = () => (
	<div
		style={{
			position: 'relative',
			color: 'white',
			height: 24,
			width: 23,
			top: -24,
			right: -5,
			background: `url(${locationLogo})`,
		}}
	/>
)

class Map extends Component {
	static defaultProps = {
		zoom: 16,
	}

	static propTypes = {
		point: propTypes.object.isRequired,
		zoom: propTypes.number,
	}

	createMapOptions = maps => {
		return {
			panControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			draggable: false,
			zoomControl: false,
			fullscreenControl: true,
		}
	}

	render() {
		const center = { lat: this.props.point.latitude, lng: this.props.point.longitude }
		const key = 'AIzaSyCC16ZdepSH2Jzu2yxG9_fFf_HjNBJPwaw'
		return (
			<div style={{ height: '300px', width: '110%', margin: '0 -15px' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: key }}
					defaultCenter={center}
					defaultZoom={this.props.zoom}
					options={this.createMapOptions}
				>
					<Marker lat={this.props.point.latitude} lng={this.props.point.longitude} />
				</GoogleMapReact>
			</div>
		)
	}
}

export default Map
