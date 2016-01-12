'use strict'

function generateMetadataSkoleskyss (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.title) {
    throw new Error('Missing required input: options.title')
  }

  var meta = {
    'title': options.title
  }

  return meta
}

module.exports = generateMetadataSkoleskyss
