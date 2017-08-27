import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import Logo from './Logo.svg'

const styles = theme => ({
  header: {
    ...theme.dark.container
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
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 0,
    listStyle: 'none',
    textTransform: 'uppercase'
  },
  menuItem: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
  },
  menuLink: {
    ...theme.dark.link,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
  }
})

const Header = ({ classes }) =>
  <header className={classes.header}>
    <div className={classes.inner}>
      <Link className={classes.logoLink} to='/'>
        <Logo />
      </Link>
      <ul className={classes.menu}>
        <li className={classes.menuItem}><Link className={classes.menuLink} to='/overview'>Overview</Link></li>
        <li className={classes.menuItem}><Link className={classes.menuLink} to='/install'>Install</Link></li>
        <li className={classes.menuItem}><Link className={classes.menuLink} to='/guides'>Guides</Link></li>
        <li className={classes.menuItem}><Link className={classes.menuLink} to='/docs'>Docs</Link></li>
        <li className={classes.menuItem}><a className={classes.menuLink} target='_blank' href='https://github.com/obsidian/obsidian'>Github</a></li>
        <li className={classes.menuItem}><a className={classes.menuLink} target='_blank' href='https://gitter.im/obsidian'><img src='//badges.gitter.im/owner/repo.svg' alt='chat on gitter' /></a></li>
      </ul>
    </div>
  </header>

Header.propTypes = {
  classes: object
}

export default injectSheet(styles)(Header)
