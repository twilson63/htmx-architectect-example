// learn more about HTTP functions here: https://arc.codes/primitives/http 
let arc = require('@architect/functions')
let template = require('@architect/shared/template')
let assets = require('@architect/shared/assets')
let config = require('@architect/shared/config')
let dal = require('@architect/shared/dal')

exports.handler = async function http(req) {
  const list = await dal(config).list('supersonic')
  const assetPrices = await assets(list)

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: template('index', { title: 'SuperSonic', tailwind: arc.static('/tailwind.css'), prices: assetPrices })
  }
}