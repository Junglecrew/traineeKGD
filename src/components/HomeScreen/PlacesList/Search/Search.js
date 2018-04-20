import React, { Component, Fragment } from 'react'
import search from 'assets/img/search.png'
import propTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Search.css'

class Search extends Component {
	static propTypes = {
		toggleSearchInput: propTypes.func.isRequired,
		inputVisible: propTypes.bool.isRequired,
		handleSearch: propTypes.func.isRequired,
		clearSearchForm: propTypes.func.isRequired,
	}

	render() {
		const { toggleSearchInput, inputVisible, handleSearch, clearSearchForm } = this.props
		return (
			<Fragment>
				<ReactCSSTransitionGroup transitionName="searchicon" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
					{!inputVisible && (
						<img className="top-bar__search-img" src={search} alt="Поиск" onClick={() => toggleSearchInput()} />
					)}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="searchinput" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
					{inputVisible && (
						<div>
							<div className="cancel-search" onClick={() => clearSearchForm()}>
								Отмена
							</div>
							<input className="search-input" onChange={e => handleSearch(e.target.value)} />
						</div>
					)}
				</ReactCSSTransitionGroup>
			</Fragment>
		)
	}
}

export default Search
