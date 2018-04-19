import React, { Component } from 'react'
import propTypes from 'prop-types'

class Favourite extends Component {
	static propTypes = {
		id: propTypes.number.isRequired,
		handleClickFavourites: propTypes.func.isRequired,
	}

	render() {
		const { handleClickFavourites, id } = this.props
		return (
			<div>
				<button onClick={() => handleClickFavourites(id)}>ИЗБРАННОЕ</button>
			</div>
		)
	}
}

export default Favourite
