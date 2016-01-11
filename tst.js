'use strict'

var getMetadata = require('./index')
var options = {
  generator: 'skoleskyss'
}

getMetadata(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
