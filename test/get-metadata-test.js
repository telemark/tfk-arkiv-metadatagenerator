'use strict'

var tap = require('tap')
var getMetadata = require('../index')
var testOptions = {
  generator: 'skoleskyss',
  title: 'Skoleskyss'
}
var metaData = getMetadata(testOptions)

tap.equal(testOptions.title, metaData.title, 'title is correct')

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
