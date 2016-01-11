'use strict'

function getMetadata (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }
  var generator = require('./lib/' + options.generator )
  var meta = generator(options)

  return callback(null, meta)
}

module.exports = getMetadata
