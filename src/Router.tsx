import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ActionTest from './components/pages/ActionTest'
import Test from './components/pages/Test'

export const Path = {
  action_test: '/action_test',
  test: '/test',
}

export class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={Path.action_test} component={ActionTest} />
            <Route exact path={Path.test} component={Test} />
            <Redirect to={Path.action_test} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
