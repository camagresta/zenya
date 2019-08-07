import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {UserHome, Navbar} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route exact path="/" component={UserHome} />
        </Switch>
      </div>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
