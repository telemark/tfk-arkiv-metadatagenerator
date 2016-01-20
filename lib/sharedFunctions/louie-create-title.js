'use strict'

function createTitle (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.warningType) {
    throw new Error('Missing required input: options.warningType')
  }
  if (!options.fullName) {
    throw new Error('Missing required input: options.firstName')
  }
  if (!options.classCode) {
    throw new Error('Missing required input: options.classCode')
  }
  if (!options.schoolName) {
    throw new Error('Missing required input: options.schoolName')
  }
  if (!options.year) {
    throw new Error('Missing required input: options.year')
  }

  var space = ' - '
  var title = 'Varsel' +
    space +
    options.warningType +
    space +
    options.fullName +
    space +
    options.classCode +
    space +
    options.schoolName +
    space +
    options.year

  return title
}

module.exports = createTitle
