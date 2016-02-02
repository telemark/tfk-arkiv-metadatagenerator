'use strict'

function generateMetadataSkoleskyssDocument (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
  }
  if (!options.responsiblePersonRecno && !options.responsibleEnterpriseRecno) {
    throw new Error('Missing required input: options.responsiblePersonRecno or responsibleEnterpriseRecno')
  }
  if (!options.personNumber) {
    throw new Error('Missing required input: options.personNumber')
  }
  if (!options.filesTitle) {
    throw new Error('Missing required input: options.filesTitle')
  }

  var meta = {
    'clientService': 'DocumentService',
    'clientMethod': 'CreateDocument',
    'data': {
      'parameter': {
        'Title': options.title,
        'Archive': '2', // Codetable: Document archive
        'Status': '6', // Codetable: Document status
        'Category': '110', // Codetable: Document category
        'ResponsiblePersonRecno': options.responsiblePersonRecno, // Recnr ansvarlig person
        'ResponsibleEnterpriseRecno': options.responsibleEnterpriseRecno, // Recnr ansvarlig virksomhet
        'Contacts': [
          {
            'ReferenceNumber': options.personNumber, // Personnummer
            'Role': options.contactsRole // Mottaker
          }
        ],
        'SendersReference': '',
        'AccessCode': '13', // Codetable: Accesscode
        'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
        'AccessGroup': 'Skoleskyss', // Codetable: Tilgangsgruppe navn
        'Files': [
          {
            'Title': options.filesTitle,
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
