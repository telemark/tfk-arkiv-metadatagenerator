'use strict'

var tap = require('tap')
var generator = require('../lib/skoleskyss-add-document')
var testOptions = {
  Title: 'Dokumenttittel',
  ResponsiblePersonRecno: '213419',
  ResponsibleEnterpriseRecno: '213419',
  PersonNumber: '111',
  FilesTitle: 'Tmp.pdf'
}
var metaData = generator(testOptions)

tap.equal(metaData.data.parameter.Title, testOptions.Title, 'Title is correct')

tap.throws(
  function () {
    var options = false
    generator(options)
  },
  {message: 'Missing required input: options'},
  'requires an options object'
)

tap.throws(
  function () {
    var options = {
      Title: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.Title'},
  'requires options.Title to be supplied'
)

tap.throws(
  function () {
    var options = {
      Title: 'Dokumenttittel',
      ResponsiblePersonRecno: false,
      ResponsibleEnterpriseRecno: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.ResponsiblePersonRecno or ResponsibleEnterpriseRecno'},
  'requires options.ResponsiblePersonRecno or options.ResponsibleEnterpriseRecno to be supplied'
)

tap.throws(
  function () {
    var options = {
      Title: 'Dokumenttittel',
      ResponsiblePersonRecno: '213419',
      ResponsibleEnterpriseRecno: '',
      PersonNumber: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.PersonNumber'},
  'requires options.PersonNumber to be supplied'
)

tap.throws(
  function () {
    var options = {
      Title: 'Dokumenttittel',
      ResponsiblePersonRecno: '213419',
      ResponsibleEnterpriseRecno: '',
      PersonNumber: '111',
      FilesTitle: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.FilesTitle'},
  'requires options.FilesTitle to be supplied'
)
