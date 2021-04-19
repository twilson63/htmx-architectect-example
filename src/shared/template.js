const eta = require('eta')
const fs = require('fs')

eta.configure({
  views: __dirname
})

const views = {
  index: fs.readFileSync(__dirname + '/index.html', 'utf-8')
}

module.exports = (view, data) => {
  return eta.render(views[view], data)
}