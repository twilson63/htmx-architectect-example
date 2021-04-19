const eta = require('eta')
const fs = require('fs')

eta.configure({
  views: __dirname
})

const views = {
  index: fs.readFileSync(__dirname + '/index.html', 'utf-8'),
  prices: fs.readFileSync(__dirname + '/prices.html', 'utf-8')
}

eta.templates.define('prices', eta.compile(views.prices))

module.exports = (view, data) => {
  return eta.render(views[view], data)
}