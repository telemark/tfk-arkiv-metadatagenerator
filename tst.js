'use strict'

var getMetadata = require('./index')
var options = {
  generator: 'skoleskyss-add-case',
  title: 'Skoleskyss',
  status: 'B',
  personNumber: '26018645146'
}

console.log(getMetadata(options))
