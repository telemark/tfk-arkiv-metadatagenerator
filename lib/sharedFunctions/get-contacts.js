'use strict'

function getContacts(contacts, sender) {
  var contactList = [
    {
      'Role': 'Sender',
      'ReferenceNumber': sender
    }
  ]
  contacts.forEach(function (contact) {
    var contact = {
      'ExternalId': contact.personalIdNumber,
      'Role': 'Recipient'
    }
    contactList.push(contact)
  })
  return contactList
}

module.exports = getContacts
