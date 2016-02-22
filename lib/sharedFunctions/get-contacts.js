'use strict'

function getContacts(contacts, sender) {
  var contactList = [
    {
      'ReferenceNumber': sender,
      'Role': 'Sender'
    }
  ]
  contacts.forEach(function (contact) {
    var contact = {
      'ReferenceNumber': contact.personalIdNumber,
      'Role': 'Recipient'
    }
    contactList.push(contact)
  })
  return contactList
}

module.exports = getContacts
