import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { addAddressToStore, getAddressGoogle, contentThunk } from 'reducers/content/actions'
import { getContent, getPointsAddresses } from 'reducers/content/selectors'
import PointHeader from 'components/common/PointHeader'
import Rating from 'components/PointScreen/Rating'
import Map from 'components/common/Map'
import GalleryModal from 'components/PointScreen/GalleryModal'
import './PointScreen.css'

class PointScreen extends Component {
	static propTypes = {
		match: propTypes.object.isRequired,
		pointsAddresses: propTypes.object,
		getAddressGoogle: propTypes.func.isRequired,
		contentThunk: propTypes.func,
		pointsList: propTypes.array,
	}

	state = {
		showGallery: false,
	}

	componentWillMount() {
		const { pointsList } = this.props
		const Point = pointsList.filter(point => point.id === +this.props.match.params.index)
		return this.setState({ Point: Point[0] })
	}

	componentDidMount() {
		this.props.contentThunk()
		const { getAddressGoogle } = this.props
		const { latitude, longitude, id } = this.state.Point
		getAddressGoogle(latitude, longitude, id)
	}

	toggleGalleryOpen = () => {
		this.setState({ showGallery: !this.state.showGallery })
	}

	getBody() {
		const { category_id, photos, rate, name, description, description_2, cost_text, phone } = this.state.Point
		return (
			<div className="container">
				<div
					className="point-photo"
					style={{ backgroundImage: `url(${photos[0]})`, height: `300px`, backgroundSize: 'cover' }}
					onClick={this.toggleGalleryOpen}
				>
					<Link to="/">
						<div className="back-button" />
					</Link>
				</div>
				{/* <img className="point-photo__content" src={photos[0]} alt="Изображение точки" /> */}

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
							<a href={`tel:${phone}`} className="point-phone__number">
								{phone}
							</a>
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
		if (pointsAddresses === null || !pointsAddresses[id]) {
			return <div>Получение адреса...</div>
		} else {
			return pointsAddresses[id].PointAddress
		}
	}

	render() {
		const { photos } = this.state.Point
		return (
			<div>
				<div key={this.state.Point.id}>{this.getBody()}</div>
				<ReactCSSTransitionGroup
					transitionName="gallery-modal"
					transitionEnterTimeout={200}
					transitionLeaveTimeout={300}
				>
					{this.state.showGallery && <GalleryModal photos={photos} onClose={this.toggleGalleryOpen} />}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		pointsList: getContent(state).points,
		pointsAddresses: getPointsAddresses(state),
	}
}

export default connect(mapStateToProps, { addAddressToStore, getAddressGoogle, contentThunk })(PointScreen)
