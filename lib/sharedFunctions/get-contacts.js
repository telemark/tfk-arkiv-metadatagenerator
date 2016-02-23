'use strict'

function getContacts(contacts, sender) {
  var contactList = [
    {
      'ReferenceNumber': sender,
      'Role': 'Avsender'
    }
  ]
  contacts.forEach(function (contact) {
    var contact = {
      'ReferenceNumber': contact.personalIdNumber,
      'Role': 'Mottaker'
    }
    contactList.push(contact)
  })
  return contactList
}

module.exports = getContacts
