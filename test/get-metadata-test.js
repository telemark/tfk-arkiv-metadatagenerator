'use strict'

var tap = require('tap')
var getMetadata = require('../index')
var testOptions = {
  generator: 'skoleskyss-add-case',
  Title: 'Skoleskyss',
  Status: 'B',
  PersonNumber: '26018645146'
}
var metaData = getMetadata(testOptions)

tap.equal(testOptions.Title, metaData.parameter.Title, 'Title is correct')

tap.equal(testOptions.Status, metaData.parameter.Status, 'Status is correct')

tap.equal(testOptions.PersonNumber, metaData.parameter.ArchiveCodes[1].ArchiveCode, 'PersonNumber is correct')

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
