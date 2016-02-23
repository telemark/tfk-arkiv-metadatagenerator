'use strict'

function getContacts (contacts, sender) {
  var contactList = [
    {
      'ReferenceNumber': sender,
      'Role': 'Avsender'
    }
  ]
  contacts.forEach(function (contact) {
    var altContact = {
      'ReferenceNumber': contact.personalIdNumber,
      'Role': 'Mottaker'
    }
    contactList.push(altContact)
  })
  return contactList
}

module.exports = getContacts
