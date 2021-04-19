// learn more about HTTP functions here: https://arc.codes/primitives/http 
let arc = require('@architect/functions')
let template = require('@architect/shared/template')
let assets = require('@architect/shared/assets')

exports.handler = async function http(req) {
  const assetPrices = await assets(['BTC', 'ETH', 'BAT'])
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: template('index', { title: 'SuperSonic', tailwind: arc.static('/tailwind.css'), prices: assetPrices })
  }
}