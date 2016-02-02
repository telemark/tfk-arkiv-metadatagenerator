'use strict'

function generateMetadataCaseTitle (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
  }

  var meta = {
    'clientService': 'ContactService',
    'clientMethod': 'GetCases',
    'data': {
      'parameter': {
        'Title': options.title
      }
    }
  }

  return meta
}

module.exports = generateMetadataCaseTitle
