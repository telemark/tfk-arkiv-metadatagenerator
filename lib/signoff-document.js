'use strict'

module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.documentNumber) {
    throw new Error('Missing required input: options.documentNumber')
  }

  const meta = {
    clientService: 'DocumentService',
    clientMethod: 'SignOffDocument',
    args: {
      parameter: {
        Document: options.documentNumber, // Required: The document number of the document to update
        NoteTitle: options.noteTitle || undefined,
        Note: options.note || undefined,
        ResponseCode: options.responseCode || 'TO' // Required: The response code. This must be a  value from the code table "Respons code”. E.g. ResponseCode = “TLF”
      }
    }
  }

  return meta
}
