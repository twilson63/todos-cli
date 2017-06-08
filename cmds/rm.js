const { store } = require('../lib')
const { reject, propEq, not } = require('ramda')
const ls = require('./ls')

module.exports = function (id) {
  store.set(
    reject(
      propEq('id', parseInt(id, 10)),
      store.get()
    )
  )
  return ls()
}
