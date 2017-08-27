import React from 'react'
import { object, node, string } from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = theme => ({
  content: {
    ...theme.content,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

const Hero = ({ classes, children, className }) =>
  <div className={classNames(classes.content, className)}>
    {children}
  </div>

Hero.propTypes = {
  classes: object,
  children: node,
  className: string
}

export default injectSheet(styles)(Hero)
