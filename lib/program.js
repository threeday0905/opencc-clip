const pkg = require('../package.json')
const program = require('commander')

const Enum = require('../lib/utils/enum')

const CLIPBOARD = Enum.CLIPBOARD

// ------------------------------------------------------ //

program
  .version(pkg.version)
  .option('-i --input <input_target>',
    `Input target, <fileName> or ${CLIPBOARD} (default)`, CLIPBOARD)
  .option('-o --output <output_target>',
    `Output target, <fileName> or ${CLIPBOARD} (default)`, CLIPBOARD)

module.exports = program
