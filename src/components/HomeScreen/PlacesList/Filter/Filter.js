import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getContent, getFilteredCategory } from 'reducers/content/selectors'
import { setFilteredCategory, clearFilter } from 'reducers/content/actions'
import './Filter.css'

class Filter extends Component {
	static propTypes = {
		categories: propTypes.array.isRequired,
		toggleFilterWindow: propTypes.func.isRequired,
		filteredCategory: propTypes.number,
		setFilteredCategory: propTypes.func.isRequired,
		clearFilter: propTypes.func.isRequired,
	}

	handleFilterChange(args, element) {
		const { toggleFilterWindow } = this.props
		let elems = document.getElementsByClassName('category-item')
		Array.from(elems).map(element => element.classList.remove('active'))
		if (this.props.filteredCategory === args) {
			this.props.clearFilter()
			element.classList.remove('active')
			setTimeout(toggleFilterWindow, 500)
		} else {
			element.classList.add('active')
			this.props.setFilteredCategory(args)
			setTimeout(toggleFilterWindow, 500)
		}
	}

	render() {
		const { categories, filteredCategory, toggleFilterWindow } = this.props
		return (
			<div className="filter-screen">
				<div className="filter-screen__header">
					<div className="close-btn" onClick={toggleFilterWindow} />
					<div>Фильтровать места</div>
				</div>
				<div className="category-list">
					{categories.map(item => {
						if (item.id === filteredCategory) {
							return (
								<div
									key={item.id}
									className="category-item active"
									onClick={e => this.handleFilterChange(item.id, e.currentTarget)}
								>
									<div className="category-item__icon">
										<img src={item.icon} alt={item.name} />
									</div>
									<div> {item.name}</div>
								</div>
							)
						} else {
							return (
								<div
									key={item.id}
									className="category-item"
									onClick={e => this.handleFilterChange(item.id, e.currentTarget)}
								>
									<div className="category-item__icon">
										<img src={item.icon} alt={item.name} />
									</div>
									<div> {item.name}</div>
								</div>
							)
						}
					})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		categories: getContent(state).categories,
		filteredCategory: getFilteredCategory(state),
	}
}
export default connect(mapStateToProps, { setFilteredCategory, clearFilter })(Filter)
