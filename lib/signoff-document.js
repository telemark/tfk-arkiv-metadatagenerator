'use strict'

module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.documentNumber) {
    throw new Error('Missing required input: options.documentNumber')
  }
  if (!options.responseCode) {
    throw new Error('Missing required input: options.responseCode')
  }

  const meta = {
    clientService: 'ContactService',
    clientMethod: 'GetPrivatePersons',
    args: {
      parameter: {
        Document: options.documentNumber, // Required: The document number of the document to update
        NoteTitle: options.noteTitle || undefined,
        Note: options.note || undefined,
        ResponseCode: options.responseCode // Required: The response code. This must be a  value from the code table "Respons code”. E.g. ResponseCode = “TLF”
      }
    }
  }

  return meta
}
