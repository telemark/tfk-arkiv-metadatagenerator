'use strict'

var getSchoolStudentAccessGroup = require('./sharedFunctions/school-student-access-group')

function generateMetadataLouie (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.Title) {
    throw new Error('Missing required input: options.Title')
  }
  if (!options.Status) {
    throw new Error('Missing required input: options.Status')
  }
  if (!options.PersonNumber) {
    throw new Error('Missing required input: options.PersonNumber')
  }
  if (!options.SchoolName) {
    throw new Error('Missing required input: options.SchoolName')
  }

  var schoolStudentAccessGroup = getSchoolStudentAccessGroup(options)
  var meta = {
    'clientService': 'CaseService',
    'clientMethod': 'CreateCase',
    'data': {
      'parameter': {
        'Title': options.Title,
        'UnofficialTitle': 'Uoffisiell sakstittel',
        'Status': options.Status, // Under behandling
        'SubArchive': '200052', // Codetable: Noark subarchive
        'AccessCode': '13', // Codetable: Accesscode
        'AccessGroup': schoolStudentAccessGroup, // Tilgangsgruppe navn
        'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
        'ArchiveCodes': [
          {
            'Sort': '1',
            'ArchiveType': 'FAGKODE PRINSIPP', // Codetable: Noark classification
            'ArchiveCode': 'N06' // Codetable: Noark classification code
          },
          {
            'Sort': '2',
            'ArchiveType': 'Fnr', // Codetable: Noark classification
            'ArchiveCode': options.PersonNumber,
            'IsManualText': 'False'
          }
        ],
        'Keywords': 'Varsel',
        'Contacts': [
          {
            'ReferenceNumber': options.PersonNumber,
            'Role': '9' // Codetable: Contact - Case Role
          }
        ],
        'ResponsiblePersonIdNumber': '',
        'ResponsibleEnterpriseRecno': '213419' // Recnr ansvarlig virksomhet
      }
    }
  }

  return meta
}

module.exports = generateMetadataLouie
