const { store, render } = require('../lib')
const { map, propEq } = require('ramda')

module.exports = function (id) {
  store.set(
    map(
      todo => propEq('id', parseInt(id, 10), todo) ?
        toggleComplete(todo) : todo,
      store.get()
    )
  )
  return render(store.get())
}

function toggleComplete (todo) {
  todo.completed = !todo.completed
  return todo
}
