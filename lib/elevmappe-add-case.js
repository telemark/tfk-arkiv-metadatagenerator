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
        'AccessGroup': options.accessGroup || 'VTFK Robot', // Tilgangsgruppe navn
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
                'ArchiveCode': 'B31', // Codetable: Noark classification code
                'ArchiveType': 'FAGKLASSE PRINSIPP', // Codetable: Noark classification
                'Sort': '2'
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
        'Paragraph': options.paragraph || 'Offl. § 13 jf. fvl. § 13 (1) nr. 1', // Codetable: Paragraph
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
