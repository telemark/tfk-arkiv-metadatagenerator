'use strict'

function generateMetadataPrivatePersonName (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.Name && !options.PersonalIdNumber) {
    throw new Error('Missing required input: options.Name or options.PersonalIdNumber')
  }

  var meta = {
    'clientService': 'ContactService',
    'clientMethod': 'GetPrivatePersons',
    'data': {
      'parameter': {
        Name: options.Name,
        PersonalIdNumber: options.PersonalIdNumber
        //    'Recno': ''
      }
    }
  }

  return meta
}

module.exports = generateMetadataPrivatePersonName
