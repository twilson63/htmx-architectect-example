const { append, equals, lensProp, over, prop, reject } = require('ramda')

const toJSON = r => r.json()
const subtract = symbol => over(lensProp('list'), reject(equals('symbol')))
const inject = symbol => over(lensProp('list'), append(symbol))

// get list
const list = ({ get }) => (id) => get(id)
  .then(toJSON)
  .then(prop('list'))

// add to the list
const add = ({ get, update }) => (id, symbol) =>
  get(id)
    .then(toJSON)
    .then(inject(symbol))
    .then(update(id))
    .then(toJSON)

// remove from the list
const remove = ({ get, update }) => (id, symbol) =>
  get(id)
    .then(toJSON)
    .then(subtract(symbol))
    .then(update(id))
    .then(toJSON)

// data access layer
module.exports = ({ fetch, url, token }) => {
  const get = id =>
    fetch(url(id), { headers: { Authorization: `Bearer ${token()}` } })

  const update = id => newDoc => fetch(url(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`
    },
    body: JSON.stringify(newDoc)
  })

  return ({
    list: list({ get }),
    add: add({ get, update }),
    remove: remove({ get, update })
  })
}