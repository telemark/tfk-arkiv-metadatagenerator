'use strict'

var tap = require('tap')
var getMetadata = require('../index')

tap.test('requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  getMetadata(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
