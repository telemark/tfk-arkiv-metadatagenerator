'use strict'

var getSchoolStudentAccessGroup = require('./sharedFunctions/school-student-access-group')
var getContacts = require('./sharedFunctions/get-contacts')

function generateMetadataDocument (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
  }
  if (!options.offTitle) {
    throw new Error('Missing required input: options.offTitle')
  }
  if (!options.personalIdNumber) {
    throw new Error('Missing required input: options.personalIdNumber')
  }
  if (!options.schoolName) {
    throw new Error('Missing required input: options.schoolName')
  }
  if (!options.schoolOrgNumber) {
    throw new Error('Missing required input: options.schoolOrgNumber')
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

  var schoolGroup = getSchoolStudentAccessGroup(options)
  var contacts = getContacts(options.contacts, options.schoolOrgNumber)

  var meta = {
    'clientService': 'DocumentService',
    'clientMethod': 'CreateDocument',
    'args': {
      'parameter': {
        'AccessCode': '13', // Codetable: Accesscode
        'AccessGroup': schoolGroup, // Codetable: Tilgangsgruppe navn
        'Category': 'Dokument ut', // Codetable: Document category
        'Contacts': [
          {
            'DocumentContactParameter': contacts
          }
        ],
        'Files': [
          {
            'CreateFileParameter': {
              'Base64Data': options.file, // Must be base64 encoded
              'Category': '1', // Codetable: File category
              'Format': 'PDF', // Codetable: File format
              'Status': 'F', // Codetable: FileStatus
              'Title': options.fileTitle,
              'VersionFormat': 'A' // Codetable: File status
            }
          }
        ],
        'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
        'ResponsibleEnterpriseNumber': options.schoolOrgNumber, // Recnr ansvarlig virksomhet
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
