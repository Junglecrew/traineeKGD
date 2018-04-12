import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getContent, getFilteredCategory } from 'reducers/content/selectors'
import { setFilteredCategory, clearFilter } from 'reducers/content/actions'
import './Filter.css'

class Filter extends Component {
	static propTypes = {
		categories: propTypes.array.isRequired,
		getFilterBar: propTypes.func.isRequired,
		filteredCategory: propTypes.array.isRequired,
	}

	handleFilterChange = (e) => {
		console.log(e.target.checked)
		if (e.target.ischecked == true) {
			this.props.clearFilter()
		} else {
			this.props.setFilteredCategory([+e.target.value])
		}

		console.log(this.props.filteredCategory)

		// if (e.target.checked === 'false') {
		// 	console.log('меняем на тру')
		// 	e.target.checked = 'true'
		// } else {
		// 	console.log('меняем на фалс')
		// 	e.target.checked = 'false'
		// }

	}

	render() {
		const { categories } = this.props	
		return (
			<div className="filter-screen">
				<div className="filter-screen__header">
					<div className="close-btn" onClick={this.props.getFilterBar}>X</div>
					<div>Фильтровать места</div>
				</div>
				<div className="category-list">
					<form>
					{categories.map(item => (
							<label className="category-list__item" key={item.id}>
								<input
									onChange={this.handleFilterChange}
									type="radio"
									value={item.id}
									name="категории"
									checked={this.props.filteredCategory[0] === item.id}
								/>{' '}
								{item.name}
							</label>


						// <div className="category-item">
						// 	<div className="category-item__icon">
						// 		<img src={item.icon} alt={item.name} />
						// 	</div>
						// 	<div> {item.name}</div>
						// </div>
					))}
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		categories: getContent(state).categories,
		filteredCategory: getFilteredCategory(state).filteredCategory,
	}
}
export default connect(mapStateToProps, { setFilteredCategory, clearFilter })(Filter)
