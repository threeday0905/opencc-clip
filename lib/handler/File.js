const fs = require('fs')
const path = require('path')
const promisify = require('../utils/promisify')

class FileHandler {
  constructor({ inputTarget, outputTarget, forceOverwrite, dictionary }) {
    this.forceOverwrite = forceOverwrite
    this.inputTarget = inputTarget
    this.outputTarget = outputTarget || this.getDefaultOutputTarget(inputTarget, forceOverwrite)
    this.dictionary = dictionary
  }
  input() {
    const filePath = path.resolve(process.cwd(), this.inputTarget)
    return promisify(fs.readFile.bind(fs, filePath)).then(buffer => buffer.toString())
  }
  getDefaultOutputTarget(inputTarget, forceOverwrite) {
    if (forceOverwrite) {
      return inputTarget
    }

    const extname = path.extname(inputTarget)
    const basename = inputTarget.substr(0, inputTarget.length - extname.length)

    // "/foo/bar.txt" => "/foo/bar_open.txt"
    return `${basename}_opencc${extname}`
  }
  output(text) {
    const filePath = path.resolve(process.cwd(), this.outputTarget)

    return promisify(fs.writeFile.bind(fs, filePath, text))
  }
  getSuccessMsg() {
    if (this.forceOverwrite) {
      return `file overwritten: ${this.outputTarget}, with dict: ${this.dictionary}`
    }
    return `file generated: ${this.outputTarget}, with dict: ${this.dictionary}`
  }
}

module.exports = FileHandler
