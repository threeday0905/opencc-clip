const OpenCC = require('opencc')
const path = require('path')

const conveterFactory = (dict = 's2t') => {
  const dictWithExtname = path.extname(dict) === ''
    ? `${dict}.json`
    : dict

  const converter = new OpenCC(dictWithExtname)

  return converter
}

module.exports = conveterFactory
