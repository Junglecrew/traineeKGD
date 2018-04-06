import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeScreen from 'components/HomeScreen'
import PointScreen from 'components/PointScreen'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/point/:index" component={PointScreen} />
    </Switch>
  </Router>
)
