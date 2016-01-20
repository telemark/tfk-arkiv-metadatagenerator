'use strict'

var isFile = require('file-exists')

function getMetadata (options) {
  var generatorModule
  var generator

  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.generator) {
    throw new Error('Missing required input: options.generator')
  }

  generatorModule = __dirname + '/lib/' + options.generator

  if (!isFile(generatorModule + '.js')) {
    throw new Error('supplied generator does not exist')
  }

  generator = require(generatorModule)

  return generator(options)
}

module.exports = getMetadata
