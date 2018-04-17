import React, { Component } from 'react'
import './card-header.css'
import scan from '/assets/img/icScanCode@3x.png'

class CardHeader extends Component {
	componentDidMount() {
		const rotate = event => {
			rotateTrigger.classList.contains('rotated')
				? rotateTrigger.classList.remove('rotated')
				: rotateTrigger.classList.add('rotated')
		}

		var rotateTrigger = document.querySelector('.flip-wrapper')
		rotateTrigger.addEventListener('click', rotate)
	}

	render() {
		return (
			<div className="flip">
				<div className="flip-wrapper">
					<div className="flip-wrapper__face" />
					<div className="flip-wrapper__back">
						<div>156 156 184 127 </div>
						<img src={scan} alt="Штрих код" />
					</div>
				</div>
			</div>
		)
	}
}

export default CardHeader
