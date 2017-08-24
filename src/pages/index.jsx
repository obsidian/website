import React from 'react'
import { object } from 'prop-types'
import injectSheet from 'react-jss'
import Hero from '../components/Hero'
import ShellType from '../components/ShellType'

const styles = {
  shell: {
    marginTop: 36,
    order: 0
  }
}

const IndexPage = ({ classes }) =>
  <div>
    <Hero>
      <div className={classes.heroText}>A Fully Featured MVC Framework for Crystal</div>
      <ShellType className={classes.shell} lines={[
        'obs new my-app',
        'obs scaffold user first_name:string last_name:string email:string',
        'obs migrate',
        'obs server',
        'obs console'
      ]} />
    </Hero>
  </div>

IndexPage.propTypes = {
  classes: object
}

export default injectSheet(styles)(IndexPage)
