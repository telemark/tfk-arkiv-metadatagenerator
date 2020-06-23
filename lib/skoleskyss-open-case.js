'use strict'

function generateMetadataSkoleskyss (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.caseNumber) {
    throw new Error('Missing required input: options.caseNumber')
  }

  var meta = {
    clientService: 'CaseService',
    clientMethod: 'UpdateCase',
    args: {
      parameter: {
        Status: 'B',
        CaseNumber: options.caseNumber
      }
    }
  }
  return meta
}

module.exports = generateMetadataSkoleskyss
