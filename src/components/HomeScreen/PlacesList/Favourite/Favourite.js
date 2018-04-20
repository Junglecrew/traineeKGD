import React, { Component } from 'react'
import propTypes from 'prop-types'
import './favourite.css'

class Favourite extends Component {
	static propTypes = {
		id: propTypes.number.isRequired,
		handleClickFavourites: propTypes.func.isRequired,
		getFavouriteList: propTypes.array,
	}

	render() {
		const { handleClickFavourites, id, getFavouriteList } = this.props

		return (
			<button className="btn-favourite" onClick={() => handleClickFavourites(id)}>
				{getFavouriteList.includes(id) ? <div>удалить из избранного</div> : <div>добавить в избранное</div>}
			</button>
		)
	}
}

export default Favourite
