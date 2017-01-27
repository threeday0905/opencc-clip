const ClipHandler = require('./Clip')
const FileHandler = require('./File')

const Enum = require('../utils/enum')

const CLIPBOARD = Enum.CLIPBOARD

function factory(mode = CLIPBOARD, { input, output, force, dict }) {
  const config = {
    inputTarget: input,
    outputTarget: output,
    forceOverwrite: force,
    dictionary: dict
  }

  const handler = mode === CLIPBOARD
    ? new ClipHandler(config)
    : new FileHandler(config)

  return handler
}

module.exports = factory
