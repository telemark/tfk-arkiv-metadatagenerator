'use strict'

var tap = require('tap')
var generator = require('../lib/skoleskyss-add-document')
var testOptions = require('./data/skoleskyss-add-document-opts.json')

var metaData = generator(testOptions)

tap.equal(metaData.data.parameter.Title, testOptions.title, 'title is correct')

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
    options.responsiblePersonRecno = false
    options.responsibleEnterpriseRecno = false
    generator(options)
  },
  {message: 'Missing required input: options.responsiblePersonRecno or responsibleEnterpriseRecno'},
  'requires options.responsiblePersonRecno or options.responsibleEnterpriseRecno to be supplied'
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

tap.throws(
  function () {
    var options = JSON.parse(JSON.stringify(testOptions))
    options.filesTitle = false
    generator(options)
  },
  {message: 'Missing required input: options.filesTitle'},
  'requires options.filesTitle to be supplied'
)
