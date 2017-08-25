import { number, string, object } from 'prop-types'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import React from 'react'

const styles = theme => ({
  errorContainer: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '5%'
  },
  errorMessage: {
    fontSize: '3em',
    color: theme.primary
  },
  backLink: {
    textTransform: 'uppercase',
    color: theme.secondary
  }
})

const ErrorPage = ({ staticContext, status, message, classes }) => {
  if (staticContext) staticContext.statusCode = status
  return (
    <div className={classes.errorContainer}>
      <div>
        <div className={classes.errorMessage}>
          <h1>{status}</h1>
          <p>{message}</p>
        </div>
        <Link className={classes.backLink} to='/'>◀&nbsp;&nbsp;back to homepage</Link>
      </div>
    </div>
  )
}

ErrorPage.defaultProps = {
  status: 500
}

ErrorPage.propTypes = {
  staticContext: object,
  classes: object,
  status: number,
  message: string
}

export default injectSheet(styles)(ErrorPage)
