import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Filter.css'

class Filter extends Component {
	static propTypes = {
		categories: propTypes.array.isRequired,
		filteredCategory: propTypes.number,
		handleFilterChange: propTypes.func,
		toggleFilterWindow: propTypes.func,
	}

	render() {
		const { categories, filteredCategory, toggleFilterWindow, handleFilterChange } = this.props
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
								onClick={() => handleFilterChange(item.id)}
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
