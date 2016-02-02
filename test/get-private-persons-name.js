'use strict'

var tap = require('tap')
var generator = require('../lib/get-private-persons-name')
var testOptions = {
  name: 'Hermod'
}
var metaData = generator(testOptions)

tap.equal(metaData.data.parameter.Name, testOptions.name, 'name is correct')

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
      name: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.name or options.personalIdNumber'},
  'requires options.name or options.personalIdNumber to be supplied'
)
