import React from 'react'
import { object } from 'prop-types'
import injectSheet from 'react-jss'
import Hero from '../components/Hero'
import Content from '../components/Content'
import ShellWindow from '../components/ShellWindow'
import TypeWriter from '../components/TypeWriter'
import Button from '../components/Button'
import Flexbox from '../components/Flexbox'

const styles = theme => ({
  shell: {
    marginTop: 36,
    marginLeft: '15%',
    marginRight: '15%'
  },
  subHeading: {
    fontSize: '0.5em'
  },
  downloadButton: {
    fontSize: '1.6em',
    width: 400
  },
  downloadButtonContainer: {
    padding: 36
  }
})

const HomePage = ({ classes }) =>
  <div>
    <Hero className={classes.hero}>
      <div>Fast, Elegant, Easy</div>
      <div className={classes.subHeading}>a web framework for the crystal language</div>
      <ShellWindow className={classes.shell} height={120}>
        <TypeWriter cursor sloppiness={5} prefix='$' strings={[
          'obs new my-app',
          'obs generate scaffold user email:string password_digest:string',
          'obs generate model post title:string body:text',
          'obs generate controller posts',
          'obs migrate',
          'obs server',
          'obs console'
        ]} />
      </ShellWindow>
    </Hero>
    <Content>
      <Flexbox flexDirection='row' justifyContent='center' className={classes.downloadButtonContainer}>
        <Button className={classes.downloadButton}>Download & Install Obsidian</Button>
      </Flexbox>
    </Content>
  </div>

HomePage.propTypes = {
  classes: object
}

export default injectSheet(styles)(HomePage)
