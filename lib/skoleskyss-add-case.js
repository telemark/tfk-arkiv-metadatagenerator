'use strict'

function generateMetadataSkoleskyss (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
  }
  if (!options.status) {
    throw new Error('Missing required input: options.status')
  }
  if (!options.personNumber) {
    throw new Error('Missing required input: options.personNumber')
  }

  var meta = {
    'clientService': 'CaseService',
    'clientMethod': 'CreateCase',
    'data': {
      'parameter': {
        'Title': options.title,
        'UnofficialTitle': 'Uoffisiell sakstittel',
        'Status': options.status, // Under behandling
        'SubArchive': '200052', // Codetable: Noark subarchive
        'AccessCode': '13', // Codetable: Accesscode
        'AccessGroup': 'Gruppenavn', // Tilgangsgruppe navn
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
            'ArchiveCode': options.personNumber,
            'IsManualText': 'False'
          }
        ],
        'Keywords': 'Skoleskyss',
        'Contacts': [
          {
            'ReferenceNumber': options.personNumber,
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

module.exports = generateMetadataSkoleskyss
