const OpenCC = require('opencc')
const path = require('path')

const Enum = require('../utils/enum')

const DEFAULT_DICT = Enum.DEFAULT_DICT

const conveterFactory = (dict = DEFAULT_DICT) => {
  const dictWithExtname = path.extname(dict) === ''
    ? `${dict}.json`
    : dict

  const converter = new OpenCC(dictWithExtname)

  return converter
}

module.exports = conveterFactory
