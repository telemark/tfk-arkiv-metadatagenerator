'use strict'

function getUnregisteredContacts (contact) {
  return {
    UnregisteredContactParameter: [{
      Address: contact.address,
      ContactCompanyName: contact.name,
      ContactName: contact.name,
      IsUnofficial: false,
      ReferenceNumber: contact.enterpriseNumber,
      Role: contact.role || 'Mottaker',
      ZipCode: contact.zipCode,
      ZipPlace: contact.zipPlace
    }]
  }
}

module.exports = (options) => {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
  }
  if (!options.unofficialTitle) {
    throw new Error('Missing required input: options.unofficialTitle')
  }
  if (!options.accessCode) {
    throw new Error('Missing required input: options.accessCode')
  }
  if (!options.file) {
    throw new Error('Missing required input: options.file')
  }
  if (!options.file.title) {
    throw new Error('Missing required input: options.file.title')
  }
  if (!options.file.data) {
    throw new Error('Missing required input: options.file.data')
  }
  if (!options.caseNumber) {
    throw new Error('Missing required input: options.caseNumber')
  }
  if (!options.category) {
    throw new Error('Missing required input: options.category')
  }
  if (!options.contacts && !options.unregisteredContacts) {
    throw new Error('Missing required input: options.contacts or options.unregisteredContacts')
  }

  let meta = {
    clientService: 'DocumentService',
    clientMethod: 'CreateDocument',
    args: {
      parameter: {
        AccessCode: options.accessCode || 'J', // Codetable: Accesscode
        AccessGroup: options.accessGroup || 'Alle', // Codetable: Tilgangsgruppe navn
        Category: options.category, // Codetable: Document category
        Contacts: [
          {
            DocumentContactParameter: options.contacts
          }
        ],
        DocumentDate: options.documentCreated || undefined,
        Files: [
          {
            CreateFileParameter: {
              Base64Data: options.file.data, // Must be base64 encoded
              Category: options.file.category || '1', // Codetable: File category
              Format: options.file.format || 'pdf', // Codetable: File format
              Status: options.file.status || 'F', // Codetable: FileStatus
              Title: options.file.title,
              VersionFormat: options.file.versionFormat || 'A' // Codetable: File status
            }
          }
        ],
        Paragraph: options.paragraph || undefined, // Codetable: Paragraph
        ResponsibleEnterpriseRecno: options.responsibleEnterpriseRecno || undefined, // Recnr ansvarlig virksomhet
        ResponsibleEnterpriseNumber: options.responsibleEnterpriseNumber || undefined,
        ResponsiblePersonRecno: options.responsiblePersonRecno || undefined,
        Status: options.status || 'J', // Codetable: Document status
        Title: options.title,
        UnofficialTitle: options.unofficialTitle,
        UnregisteredContacts: options.unregisteredContacts ? getUnregisteredContacts(options.unregisteredContacts) : undefined,
        Archive: 'Saksdokument', // Codetable: Document archive
        CaseNumber: options.caseNumber,
        SendersReference: options.sendersReference || undefined
      }
    }
  }
  if (options.responsibleEnterpriseNumber) {
    delete meta.args.parameter.ResponsibleEnterpriseRecno
    meta.args.parameter.ResponsibleEnterpriseNumber = options.responsibleEnterpriseNumber
  } else {
    delete meta.args.parameter.ResponsibleEnterpriseNumber
  }
  return meta
}
