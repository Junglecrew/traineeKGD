import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import propTypes from 'prop-types'
import Point from 'components/HomeScreen/PlacesList/Point'
import Filter from 'components/HomeScreen/PlacesList/Filter'
import Preloader from 'components/common/Preloader'
import './PlacesList.css'
import circleLogo from '/assets/img/icCircle@3x.png'

class PlacesList extends Component {
	static propTypes = {
		pointsList: propTypes.array,
		filteredCategory: propTypes.number,
		showFilter: propTypes.bool,
		contentThunk: propTypes.func.isRequired,
		getUserPosition: propTypes.func,
		toggleFilterWindow: propTypes.func,
	}

	componentDidMount() {
		const { contentThunk, getUserPosition } = this.props
		contentThunk()
		getUserPosition()
		window.addEventListener('scroll', this.getFilterBar)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.getFilterBar)
	}

	getFilterBar() {
		const pointsBlock = document.getElementsByClassName('places-list')[0]
		const filterBar = document.getElementsByClassName('filter-bar')[0]
		if (pointsBlock) {
			var trigger = pointsBlock.getBoundingClientRect().top
		}
		if (trigger < 200) {
			filterBar.style.top = '0'
		} else {
			filterBar.style.top = '-70px'
		}
	}

	getPointsList() {
		const { pointsList, filteredCategory } = this.props
		const filteredPoints = pointsList.filter(item => item.category_id.includes(filteredCategory))
		const context = filteredCategory === null ? pointsList : filteredPoints
		const data = context.map(item => (
			<div className="places-list__item" key={item.id}>
				<Point data={item} />
			</div>
		))
		return data
	}

	render() {
		const { pointsList, showFilter, toggleFilterWindow } = this.props
		return (
			<Fragment>
				<div className="filter-bar">
					<div className="filter-bar__content">
						<div className="filter-bar__logo" />
						<div onClick={() => toggleFilterWindow()}>Фильтровать места</div>
					</div>
				</div>
				<div>
					<ReactCSSTransitionGroup
						transitionName="filter-window"
						transitionEnterTimeout={400}
						transitionLeaveTimeout={400}
					>
						{showFilter && <Filter />}
					</ReactCSSTransitionGroup>
				</div>

				{pointsList !== undefined ? (
					<div className="places-list">
						<div className="red-logo">
							<img src={circleLogo} alt="Лого" />
						</div>
						{this.getPointsList()}
					</div>
				) : (
					<Preloader />
				)}
			</Fragment>
		)
	}
}

export default PlacesList
