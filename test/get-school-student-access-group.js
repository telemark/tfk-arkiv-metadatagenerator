'use strict'

var tap = require('tap')
var generator = require('../lib/sharedFunctions/school-student-access-group')
var testOptions = {
  schoolName: 'Skogmo videregående skole',
  result: 'Elev-Skogmo'
}
var metaData = generator(testOptions)

tap.equal(metaData, testOptions.result, 'schoolName is correct')

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
      schoolName: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.schoolName'},
  'requires options.schoolName to be supplied'
)
