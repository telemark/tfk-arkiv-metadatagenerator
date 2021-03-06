'use strict'

function generateMetadataPrivatePersonId (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.personalIdNumber) {
    throw new Error('Missing required input: options.personalIdNumber')
  }

  var meta = {
    clientService: 'ContactService',
    clientMethod: 'GetPrivatePersons',
    args: {
      parameter: {
        PersonalIdNumber: options.personalIdNumber
      }
    }
  }

  return meta
}

module.exports = generateMetadataPrivatePersonId
