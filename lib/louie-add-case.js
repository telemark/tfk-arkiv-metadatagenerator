'use strict'

var getSchoolStudentAccessGroup = require('./sharedFunctions/school-student-access-group')

function generateMetadataLouie (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.status) {
    throw new Error('Missing required input: options.status')
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

  var schoolStudentAccessGroup = getSchoolStudentAccessGroup(options)
  var meta = {
    'clientService': 'CaseService',
    'clientMethod': 'CreateCase',
    'args': {
      'parameter': {
        'Title': 'Elevmappe',
        'UnofficialTitle': options.title,
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
        'Contacts': [
          {
            'ReferenceNumber': options.schoolOrgNumber,
            'Role': 'Avsender' // Codetable: Contact - Case Role
          },
          {
            'ReferenceNumber': options.personalIdNumber,
            'Role': 'Mottaker'
          }
        ],
        'ResponsiblePersonRecno: '200333',
        'ResponsibleEnterpriseNumber': options.schoolOrgNumber // Orgnr ansvarlig virksomhet
      }
    }
  }
  return meta
}

module.exports = generateMetadataLouie
