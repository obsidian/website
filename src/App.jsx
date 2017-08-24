import React from 'react'
import { Route } from 'react-router-dom'
import Layout from './layouts/index'
import Home from './pages/index'

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
  </Layout>
)
