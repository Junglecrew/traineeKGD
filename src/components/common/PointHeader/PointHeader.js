import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './PointHeader.css'
import Categories from 'constants/categories.js'

class PointHeader extends Component {
	static propTypes = {
		// category: PropTypes.array.isRequired,
		// discount: PropTypes.string
		id: PropTypes.array.isRequired,
}

	getCategoryList() {
		const { id } = this.props
		const FilteredCategories = []
		 id.map(id => {
			const category = Object.entries(Categories).filter((item, index) => index + 1 === id)
			FilteredCategories.push(category)
		 })
		 
		 const categoryList = FilteredCategories.map(item => (
			<div className="point-header" key={item[0][1].id}>
				<div className="category point-header__category">
					<img className="category__category-image" src={item[0][1].icon} alt={item[0][1].name}/>
					<div className="category__place-title">{item[0][1].name}</div>
				</div>
			</div>
			)
		)
		return categoryList
		// const {category, discount} = this.props
		// const categoryList = category.map(item => item[0]).map(item => (
		// 	<div className="point-header">
		// 		<div className="category point-header__category">
		// 			<img className="category__category-image" src={item[1].icon} alt={item[1].name}/>
		// 			<div className="category__place-title">{item[1].name}</div>
		// 		</div>
		// 	</div>
		// ))
		// return categoryList
	}


	getBody() {
		const {category, discount} = this.props
		return <Fragment>{this.getCategoryList()}</Fragment>
	}

	render() {
		return (
			<Fragment>
				{this.getBody()}
			</Fragment>
		);
	}
}

export default PointHeader;
