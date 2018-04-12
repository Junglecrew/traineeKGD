import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Points from 'constants/points.js'
import Categories from 'constants/categories.js'
import './PlacesList.css'
import Point from 'components/Point'
import Filter from '/components/Filter'
import { contentThunk } from 'reducers/content/actions'
import { getContent } from 'reducers/content/selectors'


class PlacesList extends Component {
		state = {
			showFilter: false
		}

	componentDidMount() {
		const { contentThunk } = this.props
		contentThunk()
		window.addEventListener('scroll', this.getFilterWindow)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.getFilterWindow)
	}

	getFilterWindow() {
		const pointsBlock = document.getElementsByClassName('places-list')[0]
		const filterBar = document.getElementsByClassName('filter-bar')[0]
		const trigger = pointsBlock.getBoundingClientRect().top
			if ( trigger < 0) {
				filterBar.style.display="block"
			} else {
				filterBar.style.display="none"
			}
	}
	
	// getFilterScreen() {
	// 	const { categories } = this.props
	// 	categories.map(category => 
	// 	<li className="category"></li>
	// }

	getPointsList() {
		const { pointsList } = this.props
		if ( pointsList != null ) {
			const data = pointsList.map(item => 
				<div className="places-list__item" key={item.id}>
					<Point data={item}/>
				</div>
			)
		return data
		} 
	}

	render() {
		const { showFilter } = this.state
		return (
			<Fragment>
			<div className="filter-bar">
				<div className="filter-bar__content">
					<div className="filter-bar__logo"></div>
					<div>Фильтровать места</div>
				</div>
			</div>	
			<div>{ showFilter && <Filter/>}</div>
			<div className="places-list">
				{this.getPointsList()}
			</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		pointsList: getContent(state).points,
		categories: getContent(state).categories
	}
}

export default connect(mapStateToProps, { contentThunk })(PlacesList);
