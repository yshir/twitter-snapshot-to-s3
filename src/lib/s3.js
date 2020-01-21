const AWS = require('aws-sdk')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Tokyo')

require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

exports.create = async data => {
  const ts = Date.now()

  const { err } = await s3.putObject({
    ACL: 'private',
    Body: JSON.stringify(data),
    Bucket: process.env.AWS_BUCKET,
    Key: `snapshots/${moment(ts).format('YYYYMMDD')}__${ts}`,
    ContentType: 'application/json',
  }).promise()

  if (err) {
    throw err
  }
}
