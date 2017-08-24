require('babel-register')
const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const Server = require('./src/Server.jsx')
const webpackConfig = require('./webpack.config')

const app = express()

app.use('/assets', webpackMiddleware(webpack(webpackConfig)))

app.use((req, res) => {
  const context = {}
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.end(Server({ context, req }))
  }
})

app.listen(process.env.PORT || 9000)
