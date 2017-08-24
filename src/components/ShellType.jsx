import React from 'react'
import { object, string, arrayOf } from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
  shell: {
    color: 'white',
    backgroundColor: '#021021',
    padding: 18,
    fontSize: 18,
    borderRadius: 6,
    marginTop: 18,
    marginBottom: 18,
    textAlign: 'center'
  }
}

@injectSheet(styles)
export default class ShellType extends React.Component {
  static propTypes = {
    classes: object,
    className: string,
    lines: arrayOf(string).isRequired
  }

  state = {
    currentLineIndex: 0,
    currentLine: ''
  }

  get nextChar () {
    const { currentLine, currentLineIndex } = this.state
    return this.props.lines[currentLineIndex][currentLine.length]
  }

  typeChar = () => {
    clearTimeout(typeTimeout)
    const { currentLine, currentLineIndex } = this.state
    const nextIndex = currentLineIndex + 1
    const nextLine = this.props.lines[nextIndex]
    this.nextChar
      ? this.setState({ currentLine: currentLine + this.nextChar })
      : this.setState({ currentLine: '', currentLineIndex: nextLine ? nextIndex : 0 })
  }

  componentDidMount () {
    setTimeout(this.typeChar, 1000)
  }

  componentWillUnmount () {
    clearTimeout(typeTimeout)
  }

  componentDidUpdate () {
    typeTimeout = setTimeout(this.typeChar, this.nextChar ? Math.random() * 200 : 2000)
  }

  render () {
    const { classes, className } = this.props
    return (
      <div className={classNames(classes.shell, className)}>
        $ {this.state.currentLine}
      </div>
    )
  }
}
