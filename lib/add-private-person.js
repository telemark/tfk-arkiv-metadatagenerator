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
  if (!options.area) {
    throw new Error('Missing required input: options.area')
  }

  var meta = {
    clientService: 'ContactService',
    clientMethod: 'SynchronizePrivatePerson',
    args: {
      parameter: {
        Email: options.email || '',
        FirstName: options.firstName,
        LastName: options.lastName,
        MiddleName: options.middleName || '',
        PersonalIdNumber: options.personalIdNumber,
        MobilePhone: options.phone || '',
        PhoneNumber: options.phone || '',
        PrivateAddress: [
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

module.exports = generateMetadataPrivatePerson
