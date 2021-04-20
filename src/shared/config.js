const fetch = require('node-fetch')
const jwt = require('jsonwebtoken')
const cs = new URL(process.env.HYPER)

const url = id => `https://${cs.host}/data${cs.pathname}/${id}`
const token = () =>
  jwt.sign({ sub: cs.username }, cs.password)


module.exports = ({
  fetch,
  url,
  token
})