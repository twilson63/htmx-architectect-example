// learn more about HTTP functions here: https://arc.codes/primitives/http
let arc = require('@architect/functions')
let template = require('@architect/shared/template')

exports.handler = async function http(req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: template('index', { tailwind: arc.static('/tailwind.css') })
  }
}