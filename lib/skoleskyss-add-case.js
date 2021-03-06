'use strict'

var config = require('../config')

function generateMetadataSkoleskyss (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.fullName) {
    throw new Error('Missing required input: options.fullName')
  }
  if (!options.personalIdNumber) {
    throw new Error('Missing required input: options.personalIdNumber')
  }
  if (!options.caseTitle) {
    throw new Error('Missing required input: options.caseTitle')
  }

  var meta = {
    clientService: 'CaseService',
    clientMethod: 'CreateCase',
    args: {
      parameter: {
        AccessCode: '13', // Codetable: Accesscode
        AccessGroup: 'Skoleskyss', // Tilgangsgruppe navn
        ArchiveCodes: [
          {
            ClassCodeParameter: [
              {
                ArchiveCode: 'N06', // Codetable: Noark classification code
                ArchiveType: 'FAGKLASSE PRINSIPP', // Codetable: Noark classification
                Sort: '1'
              },
              {
                ArchiveCode: options.personalIdNumber,
                ArchiveType: 'Fnr', // Codetable: Noark classification
                IsManualText: true,
                Sort: '2'
              },
              {
                ArchiveCode: '---',
                ArchiveType: 'FELLESKODE PRINSIPP',
                Sort: '3'
              },
              {
                ArchiveCode: options.personalIdNumber,
                ArchiveType: 'Emneorientert arkivnøkkel',
                IsManualText: true,
                Sort: '4'
              }
            ]
          }
        ],
        Contacts: [
          {
            CaseContactParameter: {
              ReferenceNumber: options.personalIdNumber,
              Role: '9' // Codetable: Contact - Case Role
            }
          }
        ],
        Paragraph: 'Offl. § 13 jf. fvl. § 13 (1) nr. 1', // Codetable: Paragraph
        ResponsibleEnterpriseRecno: config.skoleskyss.main_responsibleEnterpriseRecno, // Recnr ansvarlig virksomhet
        ResponsiblePersonRecno: config.skoleskyss.main_responsiblePersonRecno,
        Status: 'B',
        SubArchive: 'Skoleskyss', // Codetable: Noark subarchive
        Title: options.caseTitle,
        UnofficialTitle: options.caseTitle
      }
    }
  }
  return meta
}

module.exports = generateMetadataSkoleskyss
