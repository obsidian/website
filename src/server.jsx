import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { JssProvider, SheetsRegistry } from 'react-jss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import App from './App'

const cleaner = postcss([ autoprefixer({ add: false, browsers: [] }) ])
const prefixer = postcss([ autoprefixer ])

const style = `
  @import url('https://rsms.me/interface/interface.css');

  a:link {
    text-decoration: none
  }

  html {
    font-family: Interface, sans-serif;
    font-size: 14px
  }

  body {
    margin: 0;
  }
`

module.exports = (req, res) => {
  const context = { here: true }
  if (context.url) {
    res.writeHead(301, { Location: context.url })
    res.end()
    return
  }
  const sheets = new SheetsRegistry()

  const app = ReactDOMServer.renderToString(
    <JssProvider registry={sheets}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </JssProvider>
  )

  cleaner.process(sheets.toString()).then(
    ({ css }) => prefixer.process(css)
  ).then(
    ({ css }) => '<!DOCTYPE html>\n' + ReactDOMServer.renderToStaticMarkup(
      <html>
        <head>
          <title>Obsidian.cr - A Fully Featured MVC Framework for Crystal</title>
          <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
          <script src='/assets/index.js' defer />
          <style dangerouslySetInnerHTML={{ __html: style }} />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css' />
          <style type='text/css' id='server-side-styles' dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{ __html: app }} />
        </body>
      </html>
    )
  ).then(html => res.status(context.statusCode || 200).end(html)).catch(console.error)
  console.log(context)
}
