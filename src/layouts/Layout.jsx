import React from 'react'
import { node } from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Theme from '../styles/Theme'

const Layout = ({ children }) =>
  <Theme>
    <div>
      <Helmet
        title='Obsidian.cr - A Fully Featured MVC Framework for Crystal'
      />
      <Header />
      <content>
        {children}
      </content>
    </div>
  </Theme>

Layout.propTypes = {
  children: node
}

export default Layout
