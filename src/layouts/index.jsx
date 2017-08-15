import React from 'react'
import { func } from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Theme from '../styles/Theme'

import './index.css'

const Layout = ({ children }) =>
  <Theme>
    <div>
      <Helmet
        title='Obsidian.cr - A Fully Featured MVC Framework for Crystal'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header />
      <content>
        {children()}
      </content>
    </div>
  </Theme>

Layout.propTypes = {
  children: func
}

export default Layout
