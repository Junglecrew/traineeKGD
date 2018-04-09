import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Rating.css'
import star from '/assets/svgs/ic_star.svg'
import emptyStar from '/assets/svgs/ic_star_border.svg'

export default class Rating extends Component {
	static propTypes = {
		rate: PropTypes.string,
	}

	getRate() {
		const { rate } = this.props
		var stars = []
		for (var i = 1; i < +rate + 1; ++i) {
			stars.push(i)
		}
		return stars.map((item, index) => (
			<span key={index}>
				<img src={star} />
			</span>
		))
	}

	getEmptyStars() {
		const maxRate = 5
		const { rate } = this.props
		var emptyStars = []
		var rateDiff = maxRate - +rate
		for (var i = 0; i < rateDiff; i++) {
			emptyStars.push(i)
		}
		return emptyStars.map((item, index) => (
			<span key={index}>
				<img src={emptyStar} alt="пустая звезда"/>
			</span>
		))
	}

	render() {
		return (
			<div className="rating">
				{this.getRate()}
				{this.getEmptyStars()}
			</div>
		)
	}
}
