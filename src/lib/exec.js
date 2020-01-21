module.exports = async func => {
  try {
    console.log('run')
    require('dotenv').config()
    await func()
    console.log('all done')
  } catch (err) {
    console.error('======= ERROR =======')
    console.error(err)
  }
}
