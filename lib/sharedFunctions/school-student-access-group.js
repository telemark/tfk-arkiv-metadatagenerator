'use strict'

function getSchoolStudentAccessGroup (options) {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.schoolName) {
    throw new Error('Missing required input: options.schoolName')
  }

  var schoolMap = {
    'Rjukan videregående skole': 'Elev-Rjukan',
    'Telemark tekniske fagskole': '',
    'Bø vidaregåande skule': 'Elev-Bø',
    'Kragerø videregående skole': 'Elev-Kragerø',
    'Notodden videregående skole': 'Elev-Notodden',
    'Porsgrunn videregående skole': 'Elev-Porsgrunn',
    'Skien videregående skole': 'Elev-Skien',
    'Brekkeby videregående skole': 'Elev-Skien',
    'Vest-Telemark vgs. avd. Dalen': 'Elev-Vest-Telemark',
    'Vest-Telemark vidaregåande skule': 'Elev-Vest-Telemark',
    'Nome vgs. avd. Lunde': 'Elev-Nome',
    'Nome videregående skole': 'Elev-Nome',
    'Hjalmar Johansen vgs': 'Elev-Hjalmar Johansen',
    'Hjalmar Johansen videregående skole': 'Elev-Hjalmar Johansen',
    'Bamble vgs. avd. Grasmyr': 'Elev-Bamble',
    'Bamble videregående skole': 'Elev-Bamble',
    'Skogmo videregående skole': 'Elev-Skogmo',
    'Bamble vgs. avd. Croftholmen': 'Elev-Bamble',
    'Nome vgs. avd. Søve': 'Elev-Nome'
  }

  if (!schoolMap[options.schoolName]) {
    throw new Error('Could not find: options.schoolName in map')
  }
  return schoolMap[options.schoolName]
}

module.exports = getSchoolStudentAccessGroup
