const exec = require('./lib/exec')
const s3 = require('./lib/s3')
const twitter = require('./lib/twitter')

exec(async () => {
  const me = await twitter.get('users/show', { user_id: process.env.TWITTER_USER_ID })
  const data = {
    account: JSON.stringify(me),
    timestamp: Date.now(),
  }
  await s3.create(data)
})
