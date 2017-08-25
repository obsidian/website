require('babel-register')
const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const server = require('./src/server.jsx')
const webpackConfig = require('./webpack.config')

const app = express()

app.use('/assets', webpackMiddleware(webpack(webpackConfig)))

app.use(server)

app.listen(process.env.PORT || 9000)
