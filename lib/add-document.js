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
  if (!options.category) {
    throw new Error('Missing required input: options.category')
  }
  if (!options.role) {
    throw new Error('Missing required input: options.role')
  }

  var meta = {
    clientService: 'DocumentService',
    clientMethod: 'CreateDocument',
    args: {
      parameter: {
        AccessCode: options.accessCode || 'J', // Codetable: Accesscode
        AccessGroup: options.accessGroup || 'Alle', // Codetable: Tilgangsgruppe navn
        Category: options.category, // Codetable: Document category
        Contacts: [
          {
            DocumentContactParameter: {
              ReferenceNumber: options.personalIdNumber,
              Role: options.role
            }
          }
        ],
        Files: [
          {
            CreateFileParameter: {
              Base64Data: options.data, // Must be base64 encoded
              Category: '1', // Codetable: File category
              Format: 'pdf', // Codetable: File format
              Status: 'F', // Codetable: FileStatus
              Title: options.fileName,
              VersionFormat: 'A' // Codetable: File status
            }
          }
        ],
        Paragraph: options.Paragraph || '', // Codetable: Paragraph
        ResponsibleEnterpriseRecno: options.responsibleEnterpriseRecno || '', // Recnr ansvarlig virksomhet
        ResponsiblePersonRecno: options.responsiblePersonRecno || '',
        Status: options.status || 'J', // Codetable: Document status
        Title: options.offTitle,
        UnofficialTitle: options.title,
        Archive: 'Saksdokument', // Codetable: Document archive
        CaseNumber: options.caseNumber,
        SendersReference: options.sendersReference || ''
      }
    }
  }
  return meta
}

module.exports = generateMetadataDocument
