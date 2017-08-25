import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

const style = `
  @import url('https://rsms.me/interface/interface.css');

  html {
    font-family: Interface, sans-serif;
  }

  body {
    margin: 0;
  }
`

module.exports = ({ req, context }) => {
  const __html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  return '<!DOCTYPE html>\n' + ReactDOMServer.renderToStaticMarkup(
    <html>
      <head>
        <title>Obsidian.cr - A Fully Featured MVC Framework for Crystal</title>
        <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
        <script src='/assets/index.js' defer />
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{ __html }} />
      </body>
    </html>
  )
}
