'use strict'

function generateMetadataContactPerson (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.enterprise) {
    throw new Error('Missing required input: options.enterprise')
  }
  if (!options.firstName) {
    throw new Error('Missing required input: options.firstName')
  }
  if (!options.lastName) {
    throw new Error('Missing required input: options.lastName')
  }
  if (!options.externalId) {
    throw new Error('Missing required input: options.externalId')
  }
  if (!options.email) {
    throw new Error('Missing required input: options.email')
  }
  if (!options.streetAddress) {
    throw new Error('Missing required input: options.streetAddress')
  }
  if (!options.zipCode) {
    throw new Error('Missing required input: options.zipCode')
  }
  if (!options.zipPlace) {
    throw new Error('Missing required input: options.zipPlace')
  }
  if (!options.area) {
    throw new Error('Missing required input: options.area')
  }

  var meta = {
    'clientService': 'ContactService',
    'clientMethod': 'SynchronizeContactPerson',
    'data': {
      'parameter': {
        'Enterprise': options.enterprise,
        'FirstName': options.firstName,
        'MiddleName': options.middleName,
        'LastName': options.lastName,
        'ExternalId': options.externalId,
        'Email': options.email,
        'PrivateAddress': [
          {
            Country: 'NOR',
            StreetAddress: options.streetAddress,
            ZipCode: options.zipCode,
            ZipPlace: options.zipPlace,
            Area: options.area
          }
        ]
      }
    }
  }
  return meta
}

module.exports = generateMetadataContactPerson
