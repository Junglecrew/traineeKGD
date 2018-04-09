import React, { Component } from 'react'
import CardHeader from 'components/CardHeader'
import PlacesList from 'components/PlacesList'

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <CardHeader/>
        <PlacesList />
      </div>
    )
  }
}
