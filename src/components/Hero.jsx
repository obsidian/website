import React from 'react'
import { object, node } from 'prop-types'
import injectSheet from 'react-jss'

const styles = theme => ({
  hero: {
    color: theme.primary,
    fontSize: '3em',
    minHeight: 320,
    backgroundColor: theme.greyBg,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
})

const Header = ({ classes, children }) =>
  <div
    className={classes.hero}
  >
    {children}
  </div>

Header.propTypes = {
  classes: object,
  children: node
}

export default injectSheet(styles)(Header)
