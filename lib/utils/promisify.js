function promisify(fn) {
  return new Promise((resolve, reject) => {
    fn((err, result) => {
      if (err) {
        return reject(err)
      }
      return resolve(result)
    })
  })
}

module.exports = promisify
