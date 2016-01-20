'use strict'

var tap = require('tap')
var generator = require('../lib/louie-add-case')
var testOptions = {
  Title: 'Skoleskyss',
  Status: 'B',
  PersonNumber: '26018645146',
  SchoolName: 'Skogmo videregående skole'
}
var metaData = generator(testOptions)

tap.equal(metaData.data.parameter.Title, testOptions.Title, 'Title is correct')

tap.equal(metaData.data.parameter.Status, testOptions.Status, 'Status is correct')

tap.equal(metaData.data.parameter.ArchiveCodes[1].ArchiveCode, testOptions.PersonNumber, 'PersonNumber is correct')

tap.ok(metaData.data.parameter.AccessGroup, 'SchoolName is correct')

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

tap.throws(
  function () {
    var options = {
      Title: 'Skoleskyss',
      Status: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.Status'},
  'requires options.Status to be supplied'
)

tap.throws(
  function () {
    var options = {
      Title: 'Skoleskyss',
      Status: 'B',
      PersonNumber: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.PersonNumber'},
  'requires options.PersonNumber to be supplied'
)

tap.throws(
  function () {
    var options = {
      Title: 'Skoleskyss',
      Status: 'B',
      PersonNumber: '26018645146',
      SchoolName: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.SchoolName'},
  'requires options.SchoolName to be supplied'
)

