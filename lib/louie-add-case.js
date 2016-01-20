'use strict'

var getSchoolStudentAccessGroup = require('./sharedFunctions/school-student-access-group')
var createTitle = require('./sharedFunctions/louie-create-title')

function generateMetadataLouie (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.status) {
    throw new Error('Missing required input: options.status')
  }
  if (!options.personalIdNumber) {
    throw new Error('Missing required input: options.personalIdNumber')
  }
  if (!options.guardianIdNumber) {
    throw new Error('Missing required input: options.guardianIdNumber')
  }
  if (!options.schoolName) {
    throw new Error('Missing required input: options.schoolName')
  }
  if (!options.schoolOrgNumber) {
    throw new Error('Missing required input: options.schoolOrgNumber')
  }
  if (!options.fullName) {
    throw new Error('Missing required input: options.fullName')
  }
  if (!options.warningType) {
    throw new Error('Missing required input: options.warningType')
  }
  if (!options.classCode) {
    throw new Error('Missing required input: options.classCode')
  }
  if (!options.year) {
    throw new Error('Missing required input: options.year')
  }

  var schoolStudentAccessGroup = getSchoolStudentAccessGroup(options)
  var unofficialTitle = createTitle(options)
  var meta = {
    'clientService': 'CaseService',
    'clientMethod': 'CreateCase',
    'data': {
      'parameter': {
        'Title': 'Varsel',
        'UnofficialTitle': unofficialTitle,
        'Status': options.status, // Under behandling
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
            'ArchiveCode': options.personalIdNumber,
            'IsManualText': 'False'
          }
        ],
        'Keywords': 'Varsel',
        'Contacts': [
          {
            'ReferenceNumber': options.schoolOrgNumber,
            'Role': 'Avsender' // Codetable: Contact - Case Role
          },
          {
            'ReferenceNumber': options.personalIdNumber,
            'Role': 'Mottaker'
          },
          {
            'ReferenceNumber': options.guardianIdNumber,
            'Role': 'Mottaker'
          }
        ],
        'ResponsiblePersonIdNumber': '',
        'ResponsibleEnterpriseNumber': options.schoolOrgNumber // Orgnr ansvarlig virksomhet
      }
    }
  }

  return meta
}

module.exports = generateMetadataLouie
