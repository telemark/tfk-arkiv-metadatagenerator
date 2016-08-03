'use strict'

function generateMetadataDocument (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
  }
  if (!options.offTitle) {
    throw new Error('Missing required input: options.title')
  }

  if (!options.personalIdNumber) {
    throw new Error('Missing required input: options.personalIdNumber')
  }
  if (!options.file) {
    throw new Error('Missing required input: options.file')
  }
  if (!options.fileTitle) {
    throw new Error('Missing required input: options.fileTitle')
  }
  if (!options.caseNumber) {
    throw new Error('Missing required input: options.caseNumber')
  }
  if (!options.contacts) {
    throw new Error('Missing required input: options.contacts')
  }
  if (!options.category) {
    throw new Error('Missing required input: options.category')
  }
  if (!options.role) {
    throw new Error('Missing required input: options.category')
  }

  var meta = {
    'clientService': 'DocumentService',
    'clientMethod': 'CreateDocument',
    'args': {
      'parameter': {
        'AccessCode': '13', // Codetable: Accesscode
        'AccessGroup': 'Skoleskyss', // Codetable: Tilgangsgruppe navn
        'Category': options.category, // Codetable: Document category
        'Contacts': [
          {
            'DocumentContactParameter': {
              'ReferenceNumber': options.personalIdNumber,
              'Role': options.role
            }
          }
        ],
        'Files': [
          {
            'CreateFileParameter': {
              'Base64Data': options.file, // Must be base64 encoded
              'Category': '1', // Codetable: File category
              'Format': 'pdf', // Codetable: File format
              'Status': 'F', // Codetable: FileStatus
              'Title': options.fileTitle,
              'VersionFormat': 'A' // Codetable: File status
            }
          }
        ],
        'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
        'ResponsibleEnterpriseRecno': '213419', // Recnr ansvarlig virksomhet
        'ResponsiblePersonRecno': '214853',
        'Status': 'J', // Codetable: Document status
        'Title': options.offTitle,
        'UnofficialTitle': options.title,
        'Archive': 'Saksdokument', // Codetable: Document archive
        'CaseNumber': options.caseNumber,
        'SendersReference': ''
      }
    }
  }
  return meta
}

module.exports = generateMetadataDocument
