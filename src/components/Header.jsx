import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import Logo from './Logo.svg'
import classNames from 'classnames'

const styles = theme => ({
  header: {
    backgroundColor: theme.headerColor,
    color: theme.headerText
  },
  logoLink: {
    display: 'inline-block',
    flexGrow: '1'
  },
  inner: {
    margin: '0 auto',
    maxWidth: 960,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  menu: {
    display: 'inline-block',
    padding: 0,
    listStyle: 'none'
  },
  menuItem: {
    display: 'inline-block',
    margin: 10
  },
  menuLink: {
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'none',
    ':link': { color: 'white' },
    ':active': { color: 'white' },
    ':visited': { color: 'white' }
  }
})

const Header = ({ classes }) =>
  <header className={classNames(classes.header)}>
    <div className={classes.inner}>
      <Link className={classes.logoLink} to='/'>
        <Logo />
      </Link>
      <ul className={classes.menu}>
        <li className={classes.menuItem}><Link className={classes.menuLink} to='/blob'>Blog</Link></li>
        <li className={classes.menuItem}><Link className={classes.menuLink} to='/guides'>Guides</Link></li>
        <li className={classes.menuItem}><Link className={classes.menuLink} to='/api'>API</Link></li>
        <li className={classes.menuItem}><a className={classes.menuLink} href='https://github.com/obsidian/obsidian'>Github</a></li>
      </ul>
    </div>
  </header>

Header.propTypes = {
  classes: object
}

export default injectSheet(styles)(Header)
