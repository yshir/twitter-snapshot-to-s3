module.exports = (millisec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, millisec)
  })
}
