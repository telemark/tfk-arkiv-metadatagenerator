'use strict'

function generateMetadataPrivatePersonName (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.name && !options.personalIdNumber) {
    throw new Error('Missing required input: options.name or options.personalIdNumber')
  }

  var meta = {
    'clientService': 'ContactService',
    'clientMethod': 'GetPrivatePersons',
    'data': {
      'parameter': {
        Name: options.name,
        PersonalIdNumber: options.personalIdNumber
        //    'Recno': ''
      }
    }
  }

  return meta
}

module.exports = generateMetadataPrivatePersonName
