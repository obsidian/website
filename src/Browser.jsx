import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const removeStaticStyles = () => {
  const styles = document.getElementById('server-side-styles')
  styles.parentNode.removeChild(styles)
}

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('app'),
  removeStaticStyles
)
