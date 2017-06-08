const store = require('./store')
const { map, propEq, set, lensProp } = require('ramda')
const render = require('./render')

module.exports = function (id) {
  store.set(
    map(
      todo => propEq('id', parseInt(id, 10), todo) ? set(lensProp('completed'), !todo.completed, todo) : todo, 
      store.get()
    )
  )
  return render(store.get())
}
