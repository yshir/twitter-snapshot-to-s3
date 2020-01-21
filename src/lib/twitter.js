const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

exports.get = (path, params = {}) => {
  return new Promise((resolve, reject) => {
    client.get(path, params, (error, data, res) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}
