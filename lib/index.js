const promisify = require('./utils/promisify')

const handlerFactory = require('./handler/factory')
const conveterFactory = require('./converter/factory')

// ------------------------------------------------------ //

function progress(inputHandler, outputHandler, converter) {
  inputHandler.input()
    .then(
      text => promisify(converter.convert.bind(converter, text))
    )
    .then(
      text => outputHandler.output(text)
    )
    .then(
      () => console.info(outputHandler.getSuccessMsg())
    )
    .catch(
      err => {
        console.error(err.message)
      }
    )
}

function main({ input, output, force = false }, dict) {
  debugger
  const inputHandler = handlerFactory(input, { input, output, force, dict })
  const outputHandler = handlerFactory(output, { input, output, force, dict })
  const converter = conveterFactory(dict)

  return progress(inputHandler, outputHandler, converter)
}

module.exports = main
