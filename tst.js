'use strict'

var getMetadata = require('./index')
var options = {
  generator: 'skoleskyss-add-case',
  Title: 'Skoleskyss',
  Status: 'B'
}

console.log(getMetadata(options))
