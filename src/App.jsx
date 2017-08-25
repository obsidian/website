import React from 'react'
import { Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
  </Layout>
)
