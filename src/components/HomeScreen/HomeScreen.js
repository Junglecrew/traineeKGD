import React, { Component } from 'react'
import CardHeader from 'components/HomeScreen/CardHeader'
import PlacesList from 'components/HomeScreen/PlacesList'
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
