require('dotenv').config()

module.exports = async func => {
  try {
    console.log('run')
    await func()
    console.log('all done')
  } catch (err) {
    console.error('======= ERROR =======')
    console.error(err)
  }
}
