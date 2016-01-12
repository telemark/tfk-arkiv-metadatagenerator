'use strict'

var tap = require('tap')
var generator = require('../lib/add-contact-person')
var testOptions = {
  Enterprise: '985994196',
  FirstName: 'Jonas',
  MiddleName: 'Huseby',
  LastName: 'Enge',
  ExternalId: '26018645146',
  Email: 'jonas.enge@gmail.com',
  StreetAddress: 'Grenlandsgata 35b',
  ZipCode: '3912',
  ZipPlace: 'Porsgrunn',
  Area: 'Telemark'
}
var metaData = generator(testOptions)

tap.equal(metaData.parameter.Enterprise, testOptions.Enterprise, 'Enterprise is correct')

tap.equal(metaData.parameter.FirstName, testOptions.FirstName, 'FirstName is correct')

tap.equal(metaData.parameter.MiddleName, testOptions.MiddleName, 'MiddleName is correct')

tap.equal(metaData.parameter.LastName, testOptions.LastName, 'LastName is correct')

tap.equal(metaData.parameter.ExternalId, testOptions.ExternalId, 'ExternalId is correct')

tap.equal(metaData.parameter.Email, testOptions.Email, 'Email is correct')

tap.equal(metaData.parameter.PrivateAddress[0].StreetAddress, testOptions.StreetAddress, 'StreetAddress is correct')

tap.equal(metaData.parameter.PrivateAddress[0].ZipCode, testOptions.ZipCode, 'ZipCode is correct')

tap.equal(metaData.parameter.PrivateAddress[0].ZipPlace, testOptions.ZipPlace, 'ZipPlace is correct')

tap.equal(metaData.parameter.PrivateAddress[0].Area, testOptions.Area, 'Area is correct')

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
      Enterprise: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.Enterprise'},
  'requires options.Enterprise to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.FirstName'},
  'requires options.FirstName to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: 'Jonas',
      MiddleName: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.MiddleName'},
  'requires options.MiddleName to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: 'Jonas',
      MiddleName: 'Huseby',
      LastName: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.LastName'},
  'requires options.LastName to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: 'Jonas',
      MiddleName: 'Huseby',
      LastName: 'Enge',
      ExternalId: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.ExternalId'},
  'requires options.ExternalId to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: 'Jonas',
      MiddleName: 'Huseby',
      LastName: 'Enge',
      ExternalId: '26018645146',
      Email: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.Email'},
  'requires options.Email to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: 'Jonas',
      MiddleName: 'Huseby',
      LastName: 'Enge',
      ExternalId: '26018645146',
      Email: 'jonas.enge@gmail.com',
      StreetAddress: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.StreetAddress'},
  'requires options.StreetAddress to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: 'Jonas',
      MiddleName: 'Huseby',
      LastName: 'Enge',
      ExternalId: '26018645146',
      Email: 'jonas.enge@gmail.com',
      StreetAddress: 'Grenlandsgata 35b',
      ZipCode: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.ZipCode'},
  'requires options.ZipCode to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: 'Jonas',
      MiddleName: 'Huseby',
      LastName: 'Enge',
      ExternalId: '26018645146',
      Email: 'jonas.enge@gmail.com',
      StreetAddress: 'Grenlandsgata 35b',
      ZipCode: '3912',
      ZipPlace: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.ZipPlace'},
  'requires options.ZipPlace to be supplied'
)

tap.throws(
  function () {
    var options = {
      Enterprise: '985994196',
      FirstName: 'Jonas',
      MiddleName: 'Huseby',
      LastName: 'Enge',
      ExternalId: '26018645146',
      Email: 'jonas.enge@gmail.com',
      StreetAddress: 'Grenlandsgata 35b',
      ZipCode: '3912',
      ZipPlace: 'Porsgrunn',
      Area: false
    }
    generator(options)
  },
  {message: 'Missing required input: options.Area'},
  'requires options.Area to be supplied'
)
