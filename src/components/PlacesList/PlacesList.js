import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import './PlacesList.css'
import Point from 'components/Point'
import Filter from 'components/Filter'
import Preloader from 'components/common/Preloader'
import { contentThunk } from 'reducers/content/actions'
import { getContent, getFilteredCategory, getIsFetching } from 'reducers/content/selectors'

class PlacesList extends Component {
	state = {
		showFilter: false,
	}

	static propTypes = {
		pointsList: propTypes.array,
		filteredCategory: propTypes.number,
		contentThunk: propTypes.func.isRequired,
	}

	componentDidMount() {
		const { contentThunk, pointsList } = this.props
		contentThunk()
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

		if (filteredCategory === null) {
			const data = pointsList.map(item => (
				<div className="places-list__item" key={item.id}>
					<Point data={item} />
				</div>
			))
			return data
		} else {
			const data = filteredPoints.map(item => (
				<div className="places-list__item" key={item.id}>
					<Point data={item} />
				</div>
			))
			return data
		}
	}

	toggleFilterWindow = () => {
		if (document.body.style.position === 'fixed') {
			document.body.style.position = 'static'
		} else {
			document.body.style.position = 'fixed'
		}
		const { showFilter } = this.state
		this.setState({ showFilter: !showFilter })
	}

	render() {
		const { showFilter } = this.state
		const { pointsList } = this.props
		return (
			<Fragment>
				<div className="filter-bar">
					<div className="filter-bar__content">
						<div className="filter-bar__logo" />
						<div onClick={this.toggleFilterWindow}>Фильтровать места</div>
					</div>
				</div>
				<div>
					{showFilter && <Filter showFilter={this.state.showFilter} toggleFilterWindow={this.toggleFilterWindow} />}
				</div>

				{pointsList !== undefined ? <div className="places-list">{this.getPointsList()}</div> : <Preloader />}
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		pointsList: getContent(state).points,
		filteredCategory: getFilteredCategory(state),
		ifFetching: getIsFetching(state),
	}
}

export default connect(mapStateToProps, { contentThunk })(PlacesList)
