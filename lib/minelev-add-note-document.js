'use strict'

var config = require('../config')

var getSchoolStudentAccessGroup = require('./sharedFunctions/school-student-access-group')
// var getContacts = require('./sharedFunctions/get-contacts')

function generateMetadataNoteDocument (options) {
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
        'Category': 'Internt notat / e-post MED oppfølging (N)', // Codetable: Document category
        'Contacts': [
          {
            'DocumentContactParameter': [
              {
                'Role': 'Avsender',
                'ReferenceNumber': options.schoolOrgNumber
              },
              {
                'ReferenceNumber': options.schoolOrgNumber, // Personnummer / orgnr
                'Role': 'Mottaker' // 5: Avsender 6: Mottaker Codetable: Activity - Contact Role
              }
            ]
          }
        ],
        'Files': [
          {
            'CreateFileParameter': {
              'Base64Data': options.file, // Must be base64 encoded
              'Category': 'Brev', // Codetable: File category
              'Format': 'PDF', // Codetable: File format
              'Title': options.fileTitle,
              'VersionFormat': 'A' // Codetable: File status
            }
          }
        ],
        'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
        'ResponsibleEnterpriseNumber': options.schoolOrgNumber, // Recnr ansvarlig virksomhet
        'ResponsiblePersonRecno': config.minelev.main_responsiblePersonRecno,
        'Status': 'J', // Codetable: Document status
        'Title': 'Varsel må distribueres',
        'UnofficialTitle': options.title,
        'Archive': 'Saksdokument', // Codetable: Document archive
        'CaseNumber': options.caseNumber,
        'SendersReference': ''
      }
    }
  }
  return meta
}

module.exports = generateMetadataNoteDocument
