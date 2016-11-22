'use strict'

function generateMetadataCaseNumber (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.caseNumber) {
    throw new Error('Missing required input: options.caseNumber')
  }

  var meta = {
    'clientService': 'CaseService',
    'clientMethod': 'GetCases',
    'args': {
      'parameter': {
        'CaseNumber': options.caseNumber
      }
    }
  }
  return meta
}

module.exports = generateMetadataCaseNumber

