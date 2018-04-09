import React, { Component } from 'react'
import Points from 'constants/points.js'
import Categories from 'constants/categories.js'
import './PlacesList.css'
import Point from 'components/Point'

class PlacesList extends Component {
	constructor(props) {
    super(props);

		this.state = {
			points: Points,
			categories: Categories
		};
	}

	// componentDidMount() {
	// 	this.getPointsList()
	// }

	// getCategory() {
	// 	const {points, categories} = this.state
	// 	const CategoriesList = points.map(category => 
	// 		category.category_id
	// 		)
	// }

	getPointsList() {
		const {points, categories} = this.state
		// this.getCategory()
		const data = points.map(item => 
			<div className="places-list__item" key={item.id}>
				<Point data={item}/>
			</div>
		)
		return data
	}

		// const PointElements = points.map(point => {
		// 	const ActualCategory = []
		// 	point.category_id.map(id => {
		// 		const ListCategories = Object.entries(Categories).filter((item,index) => (index + 1) == id )
		// 			ActualCategory.push(ListCategories)
		// 		return ActualCategory
		// 	})
		// 	return {
		// 		point, 
		// 		ActualCategory
		// 	}
		// })



	render() {
		return (
			<div className="places-list">
				{this.getPointsList()}
			</div>
		);
	}
}

export default PlacesList;
