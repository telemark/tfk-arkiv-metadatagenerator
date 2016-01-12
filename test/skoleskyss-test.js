'use strict'

var tap = require('tap')
var generator = require('../lib/skoleskyss')
var testOptions = {
  title: 'Skoleskyss'
}
var metaData = generator(testOptions)

tap.equal(metaData.title, testOptions.title, 'title is correct')

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
      title: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.title'},
  'requires options.title to be supplied'
)

