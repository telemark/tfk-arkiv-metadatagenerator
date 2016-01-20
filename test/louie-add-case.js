'use strict'

var tap = require('tap')
var generator = require('../lib/louie-add-case')
var testOptions = require('./data/louie-add-case-opts.json')

var metaData = generator(testOptions)

tap.equal(metaData.data.parameter.Status, testOptions.status, 'status is correct')

tap.equal(metaData.data.parameter.ArchiveCodes[1].ArchiveCode, testOptions.personalIdNumber, 'personalIdNumber is correct')

tap.equal(metaData.data.parameter.Contacts[2].ReferenceNumber, testOptions.guardianIdNumber, 'guardianIdNumber is correct')

tap.ok(metaData.data.parameter.AccessGroup, 'schoolName is correct')

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
    options.fullName = false
    generator(options)
  },
  {message: 'Missing required input: options.fullName'},
  'requires options.fullName to be supplied'
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
    options.personalIdNumber = false
    generator(options)
  },
  {message: 'Missing required input: options.personalIdNumber'},
  'requires options.personalIdNumber to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.schoolName = false
    generator(options)
  },
  {message: 'Missing required input: options.schoolName'},
  'requires options.schoolName to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.guardianIdNumber = false
    generator(options)
  },
  {message: 'Missing required input: options.guardianIdNumber'},
  'requires options.guardianIdNumber to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.schoolOrgNumber = false
    generator(options)
  },
  {message: 'Missing required input: options.schoolOrgNumber'},
  'requires options.schoolOrgNumber to be supplied'
)
tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.warningType = false
    generator(options)
  },
  {message: 'Missing required input: options.warningType'},
  'requires options.warningType to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.year = false
    generator(options)
  },
  {message: 'Missing required input: options.year'},
  'requires options.year to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.classCode = false
    generator(options)
  },
  {message: 'Missing required input: options.classCode'},
  'requires options.classCode to be supplied'
)
