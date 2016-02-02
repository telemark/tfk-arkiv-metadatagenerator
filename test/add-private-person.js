'use strict'

var tap = require('tap')
var generator = require('../lib/add-private-person')
var testOptions = require('./data/add-private-person-opts.json')
var metaData = generator(testOptions)

tap.equal(metaData.data.parameter.FirstName, testOptions.firstName, 'firstName is correct')

tap.equal(metaData.data.parameter.LastName, testOptions.lastName, 'lastName is correct')

tap.equal(metaData.data.parameter.PersonalIdNumber, testOptions.personalIdNumber, 'personalIdNumber is correct')

tap.equal(metaData.data.parameter.Email, testOptions.email, 'email is correct')

tap.equal(metaData.data.parameter.PrivateAddress[0].StreetAddress, testOptions.streetAddress, 'streetAddress is correct')

tap.equal(metaData.data.parameter.PrivateAddress[0].ZipCode, testOptions.zipCode, 'zipCode is correct')

tap.equal(metaData.data.parameter.PrivateAddress[0].ZipPlace, testOptions.zipPlace, 'zipPlace is correct')

tap.equal(metaData.data.parameter.PrivateAddress[0].Area, testOptions.area, 'area is correct')

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
    options.firstName = false
    generator(options)
  },
  {message: 'Missing required input: options.firstName'},
  'requires options.firstName to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.lastName = false
    generator(options)
  },
  {message: 'Missing required input: options.lastName'},
  'requires options.lastName to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.personalIdNumber = false
    generator(options)
  },
  {message: 'Missing required input: options.personalIdNumber'},
  'requires options.externalId to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.email = false
    generator(options)
  },
  {message: 'Missing required input: options.email'},
  'requires options.email to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.streetAddress = false
    generator(options)
  },
  {message: 'Missing required input: options.streetAddress'},
  'requires options.streetAddress to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.zipCode = false
    generator(options)
  },
  {message: 'Missing required input: options.zipCode'},
  'requires options.zipCode to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.zipPlace = false
    generator(options)
  },
  {message: 'Missing required input: options.zipPlace'},
  'requires options.zipPlace to be supplied'
)

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.area = false
    generator(options)
  },
  {message: 'Missing required input: options.area'},
  'requires options.area to be supplied'
)
