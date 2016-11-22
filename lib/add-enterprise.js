'use strict'

function generateMetadataEnterprise (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.name) {
    throw new Error('Missing required input: options.name')
  }
  if (!options.enterpriseNumber) {
    throw new Error('Missing required input: options.enterpriseNumber')
  }

  var meta = {
    'clientService': 'ContactService',
    'clientMethod': 'SynchronizeEnterprise',
    'args': {
      'parameter': {
        'Email': options.email || '',
        'EnterpriseNumber': options.enterpriseNumber,
        'MobilePhone': options.phone || '',
        'Name': options.name,
        'PhoneNumber': options.phone || '',
        'PostAddress': [
          {
            Area: options.area,
            Country: 'NOR',
            StreetAddress: options.streetAddress || '',
            ZipCode: options.zipCode || '',
            ZipPlace: options.zipPlace || ''
          }
        ]
      }
    }
  }
  return meta
}

module.exports = generateMetadataEnterprise
