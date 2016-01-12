'use strict'

var tap = require('tap')
var generator = require('../lib/get-private-persons-name')
var testOptions = {
  Name: 'Hermod'
}
var metaData = generator(testOptions)

tap.equal(metaData.data.parameter.Name, testOptions.Name, 'Name is correct')

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
      Name: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.Name or options.PersonalIdNumber'},
  'requires options.Name or options.PersonalIdNumber to be supplied'
)
