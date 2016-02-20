'use strict'

function generateMetadataPrivatePerson (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.firstName) {
    throw new Error('Missing required input: options.firstName')
  }
  if (!options.lastName) {
    throw new Error('Missing required input: options.lastName')
  }
  if (!options.personalIdNumber) {
    throw new Error('Missing required input: options.personalIdNumber')
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
    'clientMethod': 'SynchronizePrivatePerson',
    'args': {
      'parameter': {
        'FirstName': options.firstName,
        'MiddleName': options.middleName || false,
        'LastName': options.lastName,
        'PersonalIdNumber': options.personalIdNumber,
        'Email': options.email || false,
        'PhoneNumber': options.phone || false,
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

module.exports = generateMetadataPrivatePerson
