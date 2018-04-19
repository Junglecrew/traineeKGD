import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Filter.css'

class Filter extends Component {
	static propTypes = {
		categories: propTypes.array.isRequired,
		toggleFilterWindow: propTypes.func.isRequired,
		filteredCategory: propTypes.number,
		setFilteredCategory: propTypes.func.isRequired,
		clearFilter: propTypes.func.isRequired,
	}

	handleFilterChange = id => {
		const { setFilteredCategory, toggleFilterWindow } = this.props
		setFilteredCategory(id)
		toggleFilterWindow()
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
						return (
							<div
								key={item.id}
								className={`category-item ${filteredCategory === item.id ? 'active' : ''} `}
								onClick={() => this.handleFilterChange(item.id)}
							>
								<div className="category-item__icon">
									<img src={item.icon} alt={item.name} />
								</div>
								<div> {item.name}</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Filter
