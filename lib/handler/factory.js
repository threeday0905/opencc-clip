const ClipHandler = require('./Clip')
const FileHandler = require('./File')

const Enum = require('../utils/enum')

const CLIPBOARD = Enum.CLIPBOARD
const DEFAULT_DICT = Enum.DEFAULT_DICT

function factory(mode = CLIPBOARD, { input, output, force, dict } = {}) {
  const config = {
    inputTarget: input || CLIPBOARD,
    outputTarget: output || CLIPBOARD,
    forceOverwrite: force || false,
    dictionary: DEFAULT_DICT
  }

  const handler = mode === CLIPBOARD
    ? new ClipHandler(config)
    : new FileHandler(config)

  return handler
}

module.exports = factory
