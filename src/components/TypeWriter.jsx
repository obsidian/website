import React from 'react'
import { string, arrayOf, bool, number } from 'prop-types'

export default class TypeWriter extends React.Component {
  static propTypes = {
    sloppiness: number.isRequired,
    cursor: bool,
    prefix: string,
    strings: arrayOf(string).isRequired
  }

  static defaultProps = {
    sloppiness: 0
  }

  state = {
    currentLine: '',
    currentLineIndex: 0,
    blink: false
  }

  get nextTypedChar () {
    const { sloppiness } = this.props
    return (Math.random() * 100) < sloppiness ? this.randomChar : this.nextChar
  }

  get nextChar () {
    const { currentLine } = this.state
    return this.completeCurrentLine[currentLine.length]
  }

  get completeCurrentLine () {
    const { strings } = this.props
    const { currentLineIndex } = this.state
    return strings[currentLineIndex]
  }

  get cursor () {
    if (!this.props.cursor) return null
    const { blink } = this.state
    return <span style={{ visibility: blink ? 'visible' : 'hidden' }}>│</span>
  }

  get randomChar () {
    const { currentLine } = this.state
    let sliceFrom = currentLine.length - 5
    if (sliceFrom < 0) sliceFrom = 0
    const sliceTo = this.completeCurrentLine.length + 5
    const possible = this.completeCurrentLine.slice(sliceFrom, sliceTo)
    return possible.charAt(Math.floor(Math.random() * possible.length))
  }

  get nextIndex () {
    return this.state.currentLineIndex + 1
  }

  get nextLine () {
    return this.props.strings[this.nextIndex]
  }

  typeChar = () => {
    clearTimeout(this.typeTimeout)
    let nextTimeout = this.nextChar ? Math.random() * 200 : 2000
    this.typeTimeout = setTimeout(() => {
      const { currentLine } = this.state
      const nextChar = this.nextTypedChar
      let newState
      if (currentLine && this.nextChar === nextChar && this.completeCurrentLine.indexOf(currentLine) !== 0) {
        newState = { currentLine: currentLine.slice(0, -1) }
      } else if (this.nextChar) {
        if (this.nextChar !== nextChar) nextTimeout = nextTimeout * 2
        newState = { currentLine: currentLine + nextChar }
      } else {
        newState = { currentLine: '', currentLineIndex: this.nextLine ? this.nextIndex : 0 }
      }
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
    return <span>
      {this.props.prefix}&nbsp;
      {this.state.currentLine}
      <noscript>{this.completeCurrentLine}</noscript>
      {this.cursor}
    </span>
  }
}
