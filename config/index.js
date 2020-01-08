'use strict'

var env = process.env.ARCHIVE_ENV || 'test'

var settings = {
  test: {
    minelev: {
      main_responsibleEnterpriseRecno: '506',
      main_responsiblePersonRecno: '200326'
    },
    skoleskyss: {
      main_responsibleEnterpriseRecno: '213419',
      main_responsiblePersonRecno: '214853'
    }
  },
  prod: {
    minelev: {
      main_responsibleEnterpriseRecno: '506',
      main_responsiblePersonRecno: '200326'
    },
    skoleskyss: {
      main_responsibleEnterpriseRecno: '213419',
      main_responsiblePersonRecno: '214853'
    }
  }
}

var config = settings[env]

module.exports = config
