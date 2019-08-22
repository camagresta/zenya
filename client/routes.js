import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {UserHome, Navbar, Footer, Shop} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div className="page">
        <Navbar />
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route exact path="/" component={UserHome} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
