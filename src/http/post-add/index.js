// learn more about HTTP functions here: https://arc.codes/primitives/http
let template = require('@architect/shared/template')
let assets = require('@architect/shared/assets')
const qs = require('querystring')
const toData = body => [body]
  .map(v => Buffer.from(v, 'base64').toString())
  .map(s => qs.parse(s))
[0]

exports.handler = async function http(req) {
  const asset = toData(req.body).asset
  const prices = await assets(['BTC', 'ETH', 'BAT', asset])
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: template('prices', { prices })
  }
}