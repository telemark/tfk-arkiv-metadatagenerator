'use strict'

function generateMetadataSkoleskyssDocument (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.Title) {
    throw new Error('Missing required input: options.Title')
  }
  if (!options.ResponsiblePersonRecno) {
    throw new Error('Missing required input: options.ResponsiblePersonRecno')
  }
  if (!options.ResponsibleEnterpriseRecno) {
    throw new Error('Missing required input: options.ResponsibleEnterpriseRecno')
  }
  if (!options.PersonNumber) {
    throw new Error('Missing required input: options.PersonNumber')
  }
  if (!options.FilesTitle) {
    throw new Error('Missing required input: options.FilesTitle')
  }

  var meta = {
    'clientService': 'DocumentService',
    'clientMethod': 'CreateDocument',
    'data': {
      'parameter': {
        'Title': options.Title,
        'Archive': '2', // Codetable: Document archive
        'Status': '6', // Codetable: Document status
        'Category': '110', // Codetable: Document category
        'ResponsiblePersonRecno': options.ResponsiblePersonRecno, // Recnr ansvarlig person
        'ResponsibleEnterpriseRecno': options.ResponsibleEnterpriseRecno, // Recnr ansvarlig virksomhet
        'Contacts': [
          {
            'ReferenceNumber': options.PersonNumber, // Personnummer
            'Role': options.ContactsRole // Mottaker
          }
        ],
        'SendersReference': '',
        'AccessCode': '13', // Codetable: Accesscode
        'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
        'AccessGroup': 'Skoleskyss', // Codetable: Tilgangsgruppe navn
        'Files': [
          {
            'Title': options.FilesTitle,
            'Format': 'PDF', // Codetable: File format
            'Base64Data': 'base64data', // Must be base64 encoded
            'VersionFormat': 'A', // Codetable: File status
            'Category': '1' // Codetable: File category
          }
        ]
      }
    }
  }

  return meta
}

module.exports = generateMetadataSkoleskyssDocument
