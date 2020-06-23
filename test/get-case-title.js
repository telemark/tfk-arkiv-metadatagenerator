'use strict'

var tap = require('tap')
var generator = require('../lib/get-case-title')
var testOptions = {
  title: 'Sakstittel',
  id: '29118645146'
}
var metaData = generator(testOptions)

tap.equal(metaData.args.parameter.Title, testOptions.title, 'Title is correct')

tap.equal(metaData.args.parameter.ContactReferenceNumber, testOptions.id, 'id is correct')

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
      id: 'something',
      title: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.title'},
  'requires options.title to be supplied'
)

tap.throws(
  function () {
    var options = {
      title: 'something',
      id: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.id'},
  'requires options.id to be supplied'
)
