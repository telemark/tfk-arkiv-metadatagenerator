'use strict'

var tap = require('tap')
var getMetadata = require('../index')

tap.throws(
  function () {
    var options = false
    getMetadata(options)
  },
  {message: 'Missing required input: options'},
  'requires an options object'
)

tap.throws(
  function () {
    var options = {
      generator: false
    }
    getMetadata(options)
  },
  {message: 'Missing required input: options.generator'},
  'requires options.generator to be supplied'
)

tap.throws(
  function () {
    var options = {
      generator: 'pysjepreik'
    }
    getMetadata(options)
  },
  {message: 'supplied generator does not exist'},
  'requires generator exist'
)
