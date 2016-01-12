'use strict'

var tap = require('tap')
var generator = require('../lib/get-case-title')
var testOptions = {
  Title: 'Sakstittel'
}
var metaData = generator(testOptions)

tap.equal(metaData.parameter.Title, testOptions.Title, 'Title is correct')

tap.throws(
  function () {
    var options = false
    generator(options)
  },
  {message: 'Missing required input: options'},
  'requires an options object'
)

tap.throws(
  function () {
    var options = {
      Title: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.Title'},
  'requires options.Title to be supplied'
)
