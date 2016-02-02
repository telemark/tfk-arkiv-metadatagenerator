'use strict'

var tap = require('tap')
var generator = require('../lib/skoleskyss-add-case')
var testOptions = require('./data/skoleskyss-add-case-opts.json')
var metaData = generator(testOptions)

tap.equal(metaData.data.parameter.Title, testOptions.title, 'title is correct')

tap.equal(metaData.data.parameter.Status, testOptions.status, 'status is correct')

tap.equal(metaData.data.parameter.ArchiveCodes[1].ArchiveCode, testOptions.personNumber, 'personNumber is correct')

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
    var options = JSON.parse(JSON.stringify(testOptions))
    options.title = false
    generator(options)
  },
  {message: 'Missing required input: options.title'},
  'requires options.title to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.status = false
    generator(options)
  },
  {message: 'Missing required input: options.status'},
  'requires options.status to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.personNumber = false
    generator(options)
  },
  {message: 'Missing required input: options.personNumber'},
  'requires options.personNumber to be supplied'
)
