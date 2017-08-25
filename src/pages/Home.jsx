import React from 'react'
import { object } from 'prop-types'
import injectSheet from 'react-jss'
import Hero from '../components/Hero'
import ShellWindow from '../components/ShellWindow'
import TypeWriter from '../components/TypeWriter'

const styles = theme => ({
  shell: {
    marginTop: 36,
    marginLeft: '15%',
    marginRight: '15%',
    order: 0
  }
})

const IndexPage = ({ classes }) =>
  <div>
    <Hero>
      <div className={classes.heroText}>A Fully Featured Crystal-lang MVC Framework</div>
      <ShellWindow className={classes.shell}>
        <TypeWriter cursor prefix='$' lines={[
          'obs new my-app',
          'obs scaffold user first_name:string last_name:string email:string',
          'obs migrate',
          'obs server',
          'obs console'
        ]} />
      </ShellWindow>
    </Hero>
  </div>

IndexPage.propTypes = {
  classes: object
}

export default injectSheet(styles)(IndexPage)