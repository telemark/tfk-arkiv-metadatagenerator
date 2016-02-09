'use strict'

function generateMetadataCaseTitle (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
  }
  if (!options.id) {
    throw new Error('Missing required input: options.id')
  }

  var meta = {
    'clientService': 'CaseService',
    'clientMethod': 'GetCases',
    'args': {
      'parameter': {
        'Title': options.title,
        'ContactReferenceNumber': options.id
      }
    }
  }
  return meta
}

module.exports = generateMetadataCaseTitle
