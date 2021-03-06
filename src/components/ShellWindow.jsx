import React from 'react'
import { object, string, node, oneOfType, number } from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  title: {
    backgroundImage: 'linear-gradient(#e8e8e8, #bcbbbc)',
    height: 16,
    fontSize: 14,
    color: 'black',
    textShadow: '1px 1px white',
    textAlign: 'center',
    padding: 5,
    boxShadow: 'inset rgba(255, 255, 255, 0.7) 0px 1px 1px'
  },
  window: {
    position: 'relative',
    fontSize: 16,
    borderRadius: 6,
    overflow: 'hidden',
    border: '0px solid',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 50px',
    backgroundColor: '#021021'
  },
  content: {
    position: 'absolute',
    top: 26,
    bottom: 0,
    left: 0,
    right: 0,
    fontFamily: 'monospace',
    padding: 18,
    color: 'white',
    textAlign: 'left'
  }
}

const ShellWindow = ({ classes, className, title, children, height, width }) => (
  <div className={className}>
    <div className={classes.window} style={{ height, width }}>
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  </div>
)

ShellWindow.propTypes = {
  title: string,
  classes: object,
  className: string,
  height: oneOfType([number, string]),
  width: oneOfType([number, string]),
  children: node
}

ShellWindow.defaultProps = {
  title: 'shell'
}

export default injectSheet(styles)(ShellWindow)
