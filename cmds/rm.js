const { store, render } = require('../lib')
const { reject, propEq, not } = require('ramda')

module.exports = function (id) {
  store.set(
    reject(
      propEq('id', parseInt(id, 10)),
      store.get()
    )
  )
  return render(store.get())
}
