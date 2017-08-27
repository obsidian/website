import React from 'react'
import { object, number, node, string, oneOf, oneOfType, arrayOf } from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import omit from 'lodash/omit'

const cssNumberOrString = oneOfType([string, number])
const cssArrayNumberOrString = oneOfType([string, number, arrayOf(arrayOf([string, number]))])
const flexCSSPropTypes = {
  alignContent: oneOf([ 'center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch' ]),
  alignItems: oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  display: oneOf(['flex', 'inline-flex']),
  flex: cssArrayNumberOrString,
  flexBasis: cssNumberOrString,
  flexDirection: oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: cssNumberOrString,
  flexShrink: cssNumberOrString,
  flexWrap: oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  height: oneOfType([string, number]),
  justifyContent: oneOf([ 'center', 'flex-end', 'flex-start', 'space-around', 'space-between' ]),
  margin: cssArrayNumberOrString,
  marginBottom: cssNumberOrString,
  marginLeft: cssNumberOrString,
  marginRight: cssNumberOrString,
  marginTop: cssNumberOrString,
  maxHeight: cssNumberOrString,
  maxWidth: cssNumberOrString,
  minHeight: cssNumberOrString,
  minWidth: cssNumberOrString,
  order: number,
  padding: cssArrayNumberOrString,
  paddingBottom: cssNumberOrString,
  paddingLeft: cssNumberOrString,
  paddingRight: cssNumberOrString,
  paddingTop: cssNumberOrString,
  width: cssNumberOrString
}

const styles = { flexbox: Object.keys(flexCSSPropTypes).reduce((memo, prop) => { memo[prop] = props => props[prop]; return memo }, {}) }
const Flexbox = ({ element, classes, children, className, sheet, ...props }) => React.createElement(
  element,
  { className: classNames(classes.flexbox, className), ...omit(props, Object.keys(flexCSSPropTypes)) },
  children
)

Flexbox.propTypes = {
  ...flexCSSPropTypes,
  element: oneOf(['article', 'aside', 'div', 'figure', 'footer', 'header', 'main', 'nav', 'section']),
  children: node,
  className: string,
  classes: object,
  style: object
}

Flexbox.defaultProps = {
  display: 'flex',
  element: 'div'
}

export default injectSheet(styles)(Flexbox)
