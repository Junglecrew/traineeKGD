import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import propTypes from 'prop-types'
import Point from 'components/HomeScreen/PlacesList/Point'
import Filter from 'components/HomeScreen/PlacesList/Filter'
import Preloader from 'components/common/Preloader'
import Search from 'components/HomeScreen/PlacesList/Search'
import './PlacesList.css'
import circleLogo from '/assets/img/icCircle@3x.png'
import sad from '/assets/img/sad.png'

class PlacesList extends Component {
	static propTypes = {
		pointsList: propTypes.array,
		filteredCategory: propTypes.number,
		showFilter: propTypes.bool,
		contentThunk: propTypes.func.isRequired,
		getUserPosition: propTypes.func,
		toggleFilterWindow: propTypes.func,
		searchValue: propTypes.string,
		clearSearchForm: propTypes.func,
		filteredPoints: propTypes.array,
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
		const filterBar = document.getElementsByClassName('top-bar')[0]
		if (pointsBlock) {
			var trigger = pointsBlock.getBoundingClientRect().top
		}
		if (trigger < 200) {
			filterBar.style.top = '0'
		} else {
			filterBar.style.top = '-140px'
		}
	}

	getPointsList() {
		const { pointsList, filteredCategory, searchValue, filteredPoints } = this.props
		const context = (filteredCategory === null ? pointsList : filteredPoints).filter(
			item =>
				item.name.toLowerCase().search(searchValue) !== -1 || item.description.toLowerCase().search(searchValue) !== -1,
		)
		const data =
			context.length === 0 ? (
				<div className="empty-page">
					<div>К сожалению, по Вашему запросу ничего не найдено</div>
					<img className="empty-page__icon" src={sad} alt="Ничего не найдено" />
				</div>
			) : (
				context.map(item => (
					<div className="places-list__item" key={item.id}>
						<Point data={item} />
					</div>
				))
			)
		return data
	}

	render() {
		const { pointsList, showFilter, toggleFilterWindow, clearSearchForm, searchValue } = this.props
		return (
			<Fragment>
				<div className="top-bar">
					<div className="top-bar__content">
						<div className="top-bar__logo" />
						<div onClick={() => toggleFilterWindow()}>Фильтровать места</div>
					</div>
					<div className="top-bar__search">
						<Search />
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
					<div>
						<div className="places-list">
							<div className="red-logo">
								<img src={circleLogo} alt="Лого" />
							</div>
							{this.getPointsList()}
						</div>
						{searchValue && (
							<div className="clear" onClick={() => clearSearchForm()}>
								Очистить поиск
							</div>
						)}
					</div>
				) : (
					<Preloader />
				)}
			</Fragment>
		)
	}
}

export default PlacesList
