import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Index from '../pages/Index'
import BadgeNew from '../pages/BadgeNew'
import BadgeDetails from '../pages/BadgeDetails'
import BadgeEdit from '../pages/BadgeEdit'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:badgeId" component={BadgeDetails} />
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App