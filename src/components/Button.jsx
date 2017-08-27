// import _ from 'lodash';
// import deepMerge from 'deepmerge';
// import Radium from 'radium';
import React from 'react'
import { node, object, string } from 'prop-types'
import injectSheet from 'react-jss'
import color from 'color'
import classNames from 'classnames'

const styles = theme => ({
  button: {
    background: color(theme.colors.primary).lighten(1.2).rgb().string(),
    color: 'white',
    border: [[0, 'solid', theme.colors.primary]],
    borderRadius: 9,
    padding: 12,
    boxShadow: [[0, 3, 0, theme.colors.primary]],
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      border: [[0, 'solid', theme.colors.primary]],
      transform: 'translateY(2px)',
      boxShadow: [[0, 1, 1, theme.colors.primary]]
    },
    '&:active': {
      transform: 'translateY(3px)',
      boxShadow: 'none',
      borderTop: 1,
      borderStyle: 'solid',
      borderColor: color(theme.colors.primary).darken(0.2).rgb().string()
    }
  }
})

const Button = ({ children, classes, className }) => (
  <button className={classNames(classes.button, className)}>
    {children}
  </button>
)

Button.propTypes = {
  children: node,
  classes: object,
  className: string
}

export default injectSheet(styles)(Button)
