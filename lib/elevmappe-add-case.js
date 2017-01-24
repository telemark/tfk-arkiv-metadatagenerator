'use strict'

var config = require('../config')

function generateMetadataElevmappe (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.fullName) {
    throw new Error('Missing required input: options.fullName')
  }
  if (!options.personalIdNumber) {
    throw new Error('Missing required input: options.personalIdNumber')
  }

  var meta = {
    'clientService': 'CaseService',
    'clientMethod': 'CreateCase',
    'args': {
      'parameter': {
        'AccessCode': options.accessCode || '13', // Codetable: Accesscode
        'AccessGroup': options.accessGroup || 'RIM-elever', // Tilgangsgruppe navn
        'ArchiveCodes': [
          {
            'ClassCodeParameter': [
              {
                'ArchiveCode': options.personalIdNumber,
                'ArchiveType': 'Fnr', // Codetable: Noark classification
                'IsManualText': true,
                'Sort': '1'
              },
              {
                'ArchiveCode': 'A56', // Codetable: Noark classification code
                'ArchiveType': 'FAGKODE PRINSIPP', // Codetable: Noark classification
                'Sort': '2'
              },
              {
                'ArchiveCode': '201757',
                'ArchiveType': 'FELLESKODE PRINSIPP',
                'Sort': '3'
              },
              {
                'ArchiveCode': options.personalIdNumber,
                'ArchiveType': 'Emneorientert arkivnøkkel',
                'IsManualText': true,
                'Sort': '4'
              }
            ]
          }
        ],
        'Contacts': [
          {
            'CaseContactParameter': {
              'ReferenceNumber': options.personalIdNumber,
              'Role': options.caseRole || 'Sakspart' // Codetable: Contact - Case Role
            }
          }
        ],
        'Paragraph': options.paragraph || 'Offl §13 jfr Fvl §13.1', // Codetable: Paragraph
        'ResponsibleEnterpriseRecno': options.responsibleEnterpriseRecno || config.minelev.main_responsibleEnterpriseRecno, // Recnr ansvarlig virksomhet
        'ResponsiblePersonRecno': options.responsiblePersonRecno || config.minelev.main_responsiblePersonRecno,
        'Status': options.status || 'B', // Under behandling
        'SubArchive': options.subArchive || 'Elev', // Codetable: Noark subarchive
        'Title': options.title || 'Elevmappe',
        'UnofficialTitle': 'Elevmappe - ' + options.fullName
      }
    }
  }
  return meta
}

module.exports = generateMetadataElevmappe
