'use strict'

var getMetadata = require('./index')
var options = {
  generator: 'skoleskyss-add-case',
  Title: 'Skoleskyss',
  Status: 'B',
  PersonNumber: '26018645146'
}

console.log(getMetadata(options))
