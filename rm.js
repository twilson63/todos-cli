const store = require('./store')
const { reject, propEq, not } = require('ramda')
const render = require('./render')

module.exports = function (id) {
  store.set(
    reject(
      propEq('id', parseInt(id, 10)),
      store.get()
    )
  )
  return render(store.get())
}
