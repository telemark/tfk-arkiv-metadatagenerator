'use strict'

var env = process.env.ARCHIVE_ENV || 'test'

var settings = {
  test: {
    minelev: {
      main_responsibleEnterpriseRecno: '506',
      main_responsiblePersonRecno: '200333'
    }
  },
  prod: {
    minelev: {
      main_responsibleEnterpriseRecno: '506',
      main_responsiblePersonRecno: '200333'
    }
  }
}

var config = settings[env]

module.exports = config