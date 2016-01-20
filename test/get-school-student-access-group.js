'use strict'

var tap = require('tap')
var generator = require('../lib/sharedFunctions/school-student-access-group')
var testOptions = {
  SchoolName: 'Skogmo videregående skole',
  result: 'Elev-Skogmo'
}
var metaData = generator(testOptions)

tap.equal(metaData, testOptions.result, 'SchoolName is correct')

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
      SchoolName: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.SchoolName'},
  'requires options.SchoolName to be supplied'
)
