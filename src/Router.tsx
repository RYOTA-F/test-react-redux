import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Test from './components/pages/Test'
import Test2 from './components/pages/Test2'

export const Path = {
  test: '/test',
  test2: '/test2',
}

export class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={Path.test} component={Test} />
            <Route exact path={Path.test2} component={Test2} />
            <Redirect to={Path.test} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
