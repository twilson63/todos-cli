const store = require('./store')
const { map, propEq } = require('ramda')
const render = require('./render')

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
