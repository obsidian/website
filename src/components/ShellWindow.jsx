import React from 'react'
import { object, string, node } from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  title: {
    backgroundImage: 'linear-gradient(top, #e8e8e8, #bcbbbc)',
    height: 16,
    fontSize: 14,
    color: 'black',
    textShadow: '1px 1px white',
    textAlign: 'center',
    padding: 5,
    boxShadow: 'inset rgba(255, 255, 255, 0.7) 0px 1px 1px'
  },
  window: {
    fontSize: 16,
    borderRadius: 6,
    overflow: 'hidden',
    border: '0px solid',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 50px'
  },
  content: {
    fontFamily: 'monospace',
    padding: 18,
    color: 'white',
    backgroundColor: '#021021',
    textAlign: 'left'
  }
}

const ShellWindow = ({ classes, className, title, children }) => (
  <div className={className}>
    <div className={classes.window}>
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
  children: node
}

ShellWindow.defaultProps = {
  title: 'shell'
}

export default injectSheet(styles)(ShellWindow)
