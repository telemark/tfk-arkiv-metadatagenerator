'use strict'

function generateMetadataContactPerson (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.Enterprise) {
    throw new Error('Missing required input: options.Enterprise')
  }
  if (!options.FirstName) {
    throw new Error('Missing required input: options.FirstName')
  }
  if (!options.MiddleName) {
    throw new Error('Missing required input: options.MiddleName')
  }
  if (!options.LastName) {
    throw new Error('Missing required input: options.LastName')
  }
  if (!options.ExternalId) {
    throw new Error('Missing required input: options.PersonalIdNumber')
  }
  if (!options.Email) {
    throw new Error('Missing required input: options.Email')
  }
  if (!options.StreetAddress) {
    throw new Error('Missing required input: options.StreetAddress')
  }
  if (!options.ZipCode) {
    throw new Error('Missing required input: options.ZipCode')
  }
  if (!options.ZipPlace) {
    throw new Error('Missing required input: options.ZipPlace')
  }
  if (!options.Area) {
    throw new Error('Missing required input: options.Area')
  }

  var meta = {
    'parameter': {
      'Enterprise': options.Enterprise,
      'FirstName': options.FirstName,
      'MiddleName': options.MiddleName,
      'LastName': options.LastName,
      'ExternalId': options.ExternalId,
      'Email': options.Email,
      'PrivateAddress': [
        {
          Country: 'NOR',
          StreetAddress: options.StreetAddress,
          ZipCode: options.ZipCode,
          ZipPlace: options.ZipPlace,
          Area: options.Area
        }
      ]
    }
  }
  return meta
}

module.exports = generateMetadataContactPerson
