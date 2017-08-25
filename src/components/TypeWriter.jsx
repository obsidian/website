import React from 'react'
import { string, arrayOf, bool } from 'prop-types'

export default class TypeWriter extends React.Component {
  static propTypes = {
    cursor: bool,
    prefix: string,
    lines: arrayOf(string).isRequired
  }

  state = {
    currentLine: '',
    currentLineIndex: 0,
    blink: false
  }

  get nextChar () {
    const { currentLine, currentLineIndex } = this.state
    return this.props.lines[currentLineIndex][currentLine.length]
  }

  get cursor () {
    if (!this.props.cursor) return null
    const { blink } = this.state
    return <span style={{ visibility: blink ? 'hidden' : 'visible' }}>│</span>
  }

  typeChar = () => {
    clearTimeout(this.typeTimeout)
    const nextTimeout = this.nextChar ? Math.random() * 200 : 2000
    this.typeTimeout = setTimeout(() => {
      const { currentLine, currentLineIndex } = this.state
      const nextIndex = currentLineIndex + 1
      const nextLine = this.props.lines[nextIndex]
      const newState = this.nextChar
        ? { currentLine: currentLine + this.nextChar }
        : { currentLine: '', currentLineIndex: nextLine ? nextIndex : 0 }
      this.setState(newState, this.typeChar)
    }, nextTimeout)
  }

  blink = () => {
    this.setState({ blink: !this.state.blink })
  }

  componentDidMount () {
    this.blinkInterval = setInterval(this.blink, 700)
    this.typeTimeout = setTimeout(this.typeChar, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.blinkInterval)
    clearTimeout(this.typeTimeout)
  }

  render () {
    return <span>{this.props.prefix} {this.state.currentLine}{this.cursor}</span>
  }
}
