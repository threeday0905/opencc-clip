const ncp = require('copy-paste')
const promisify = require('../utils/promisify')

class ClipHandler {
  constructor({ dictionary }) {
    this.dictionary = dictionary
  }
  input() {
    return promisify(ncp.paste)
  }
  output(text) {
    return promisify(ncp.copy.bind(ncp, text))
  }
  getSuccessMsg() {
    return `result has been copied to clipboard, with dictionary: ${this.dictionary}`
  }
}

module.exports = ClipHandler
