'use strict'

function generateMetadataSkoleskyss (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.Title) {
    throw new Error('Missing required input: options.Title')
  }
  if (!options.Status) {
    throw new Error('Missing required input: options.Status')
  }
  var meta = {
    'Title': options.Title,
    'UnofficialTitle': 'Uoffisiell sakstittel',
    'Status': options.Status, // Under behandling
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
        'ArchiveCode': '14059733381',
        'IsManualText': 'False'
      }
    ],
    'Keywords': 'Skoleskyss',
    'Contacts': [
      {
        'ReferenceNumber': '14059733381',
        'Role': '9' // Codetable: Contact - Case Role
      }
    ],
    'ResponsiblePersonIdNumber': '',
    'ResponsibleEnterpriseRecno': '213419' // Recnr ansvarlig virksomhet
  }

  return meta
}

module.exports = generateMetadataSkoleskyss
