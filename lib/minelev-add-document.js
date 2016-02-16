'use strict'

var getSchoolStudentAccessGroup = require('./sharedFunctions/school-student-access-group')

function generateMetadataDocument (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
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

  var schoolGroup = getSchoolStudentAccessGroup(options)
  var meta = {
    'clientService': 'DocumentService',
    'clientMethod': 'CreateDocument',
    'args': {
      'parameter': {
        'AccessCode': '13', // Codetable: Accesscode
        'AccessGroup': schoolGroup, // Codetable: Tilgangsgruppe navn
        'Category': '111', // Codetable: Document category
        'Contacts': [
          {
            'DocumentContactParameter': [
              {
                'Role': 'Sender',
                'ReferenceNumber': options.schoolOrgNumber
              },
              {
                'ExternalId': options.personalIdNumber, // Personnummer / orgnr
                'Role': 'Recipient' // 5: Avsender 6: Mottaker Codetable: Activity - Contact Role
              }
            ]
          }
        ],
        'Files': [
          {
            'CreateFileParameter': {
              'Base64Data': options.file, // Must be base64 encoded
              'Category': '1', // Codetable: File category
              'Format': 'PDF', // Codetable: File format
              'Title': options.fileTitle,
              'VersionFormat': 'A' // Codetable: File status
            }
          }
        ],
        'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
        'ResponsibleEnterpriseNumber': options.schoolOrgNumber, // Recnr ansvarlig virksomhet
        'Status': '6', // Codetable: Document status
        'Title': 'Varsel',
        'UnofficialTitle': options.title,
        'Archive': '2', // Codetable: Document archive
        'CaseNumber': options.caseNumber,
        'SendersReference': ''
      }
    }
  }
  return meta
}

module.exports = generateMetadataDocument
