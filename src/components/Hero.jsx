import React from 'react'
import { object, node, string } from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Content from './Content'

const styles = theme => ({
  hero: {
    color: theme.primary,
    fontSize: '3em',
    minHeight: 320,
    backgroundColor: theme.colors.greyish,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
})

const Hero = ({ classes, children, className }) =>
  <div className={classNames(classes.hero, className)}>
    <Content>
      {children}
    </Content>
  </div>

Hero.propTypes = {
  classes: object,
  children: node,
  className: string
}

export default injectSheet(styles)(Hero)
