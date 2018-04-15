import React, { Component } from 'react'
import CardHeader from 'components/CardHeader'
import PlacesList from 'components/PlacesList'
import './HomeScreen.css'

export default class HomeScreen extends Component {
	render() {
		return (
			<div className="wrapper">
				<CardHeader />
				<PlacesList />
			</div>
		)
	}
}
