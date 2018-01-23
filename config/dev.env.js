'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTP_ENDPOINT: '"http://ec2-35-167-99-178.us-west-2.compute.amazonaws.com:5000/api"',
  WS_ENDPOINT: '"http://ec2-35-167-99-178.us-west-2.compute.amazonaws.com:5000/socket"'
})