const { store } = require('../lib')
const { reject, propEq } = require('ramda')
const ls = require('./ls')

module.exports = function (id) {
  // eslint-disable-next-line
  store.set(
    reject(
      propEq('id', parseInt(id, 10)),
      store.get()
    )
  )
  return ls()
}
