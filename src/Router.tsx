import React from 'react'
import { Route, Switch } from 'react-router'
import ActionTest from './components/pages/ActionTest'
import Test from './components/pages/Test'
import Login from './components/pages/Login'
import Home from './components/pages/Home'

export const Path = {
  action_test: '/action_test',
  test: '/test',
  login: '/login',
  home: '/',
}

const Router = () => {
  return (
    <Switch>
      <Route exact path={Path.action_test} component={ActionTest}></Route>
      <Route exact path={Path.test} component={Test}></Route>
      <Route exact path={Path.login} component={Login}></Route>
      <Route exact path={Path.home} component={Home}></Route>
    </Switch>
  )
}

export default Router
