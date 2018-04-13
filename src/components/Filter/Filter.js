import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getContent, getFilteredCategory } from 'reducers/content/selectors'
import { setFilteredCategory, clearFilter } from 'reducers/content/actions'
import './Filter.css'

class Filter extends Component {
	static propTypes = {
		categories: propTypes.array.isRequired,
		getFilterWindow: propTypes.func.isRequired,
		filteredCategory: propTypes.number,
		setFilteredCategory: propTypes.func.isRequired,
		clearFilter: propTypes.func.isRequired,
	}

	handleFilterChange(args, element) {
		let elems = document.getElementsByClassName('category-item')
		Array.from(elems).map(element => element.classList.remove('active'))
		if (this.props.filteredCategory === args) {
			this.props.clearFilter()
			element.classList.remove('active')
		} else {
			element.classList.add('active')
			this.props.setFilteredCategory(args)
		}
	}

	render() {
		const { categories, filteredCategory } = this.props
		return (
			<div className="filter-screen">
				<div className="filter-screen__header">
					<div className="close-btn" onClick={this.props.getFilterWindow}>
						X
					</div>
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
