'use strict'

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
        'AccessCode': '13', // Codetable: Accesscode
        'AccessGroup': 'RIM-elever', // Tilgangsgruppe navn
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
                'ArchiveCode': '---',
                'ArchiveType': 'FELLESKODE PRINSIPP',
                'Sort': '3'
              }
            ]
          }
        ],
        'Contacts': [
          {
            'CaseContactParameter': {
              'ReferenceNumber': options.personalIdNumber,
              'Role': '9' // Codetable: Contact - Case Role
            }
          }
        ],
        'Paragraph': 'Offl §13 jfr Fvl §13', // Codetable: Paragraph
        'ResponsibleEnterpriseRecno': '506', // Recnr ansvarlig virksomhet
        'ResponsiblePersonRecno': '200333',
        'Status': 'B', // Under behandling
        'SubArchive': '200002', // Codetable: Noark subarchive
        'Title': 'Elevmappe',
        'UnofficialTitle': 'Elevmappe - ' + options.fullName
      }
    }
  }
  return meta
}

module.exports = generateMetadataElevmappe