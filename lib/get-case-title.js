'use strict'

function generateMetadataCaseTitle (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.Title) {
    throw new Error('Missing required input: options.Title')
  }

  var meta = {
    'parameter': {
      'Title': options.Title
    }
  }

  return meta
}

module.exports = generateMetadataCaseTitle
