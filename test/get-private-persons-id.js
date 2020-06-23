'use strict'

var tap = require('tap')
var generator = require('../lib/get-private-persons-id')
var testOptions = {
  personalIdNumber: '111111111'
}
var metaData = generator(testOptions)

tap.equal(metaData.args.parameter.PersonalIdNumber, testOptions.personalIdNumber, 'personalIdNumber is correct')

tap.throws(
  function () {
    var options = false
    generator(options)
  },
  { message: 'Missing required input: options' },
  'requires an options object'
)

tap.throws(
  function () {
    var options = {
      personalIdNumber: false
    }
    generator(options)
  },
  { message: 'Missing required input: options.personalIdNumber' },
  'requires options.personalIdNumber to be supplied'
)
