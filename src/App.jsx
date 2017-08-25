import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'

export default () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route render={props => <ErrorPage status={404} message='Not Found' {...props} />} />
    </Switch>
  </Layout>
)
