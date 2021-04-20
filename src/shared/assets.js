const fetch = require('node-fetch')

const url = symbols => `https://rest.coinapi.io/v1/assets?filter_asset_id=${symbols.join(';')}`
console.log(process.env.KEY)
module.exports = assets => fetch(url(assets), {
  headers: {
    'X-CoinAPI-key': process.env.KEY
  }
}).then(r => r.json())
  //.then(v => (console.log(v), v))
  .then(results => results.map(
    a => ({ symbol: a.asset_id, value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(a.price_usd) })
  ))
