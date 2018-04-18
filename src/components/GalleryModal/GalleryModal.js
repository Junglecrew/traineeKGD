import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import './GalleryModal.css'
import Slider from 'react-slick'
import closeBtn from '/assets/img/icClose/Close-32.png'

class GalleryModal extends Component {
	static propTypes = {
		photos: propTypes.array,
		onClose: propTypes.func,
	}

	componentWillMount() {
		this.root = document.createElement('div')
		document.body.appendChild(this.root)
	}
	componentWillUnmount() {
		document.body.removeChild(this.root)
	}

	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: false,
		}
		const { photos } = this.props
		const data = photos.map(photo => (
			<div key={photos[0]}>
				<img className="gallery_image" src={photo} alt="Фотография места" />
			</div>
		))
		return ReactDOM.createPortal(
			<div className="gallery-modal">
				<div>
					<div onClick={this.props.onClose}>
						<img src={closeBtn} alt="Закрыть" />
					</div>
					<Slider {...settings}>{data}</Slider>
				</div>
			</div>,
			this.root,
		)
	}
}

export default GalleryModal
