const { store } = require('../lib')
const { map, propEq } = require('ramda')
const ls = require('./ls')

module.exports = function (id) {
  store.set(
    map(
      todo => propEq('id', parseInt(id, 10), todo) ?
        toggleComplete(todo) : todo,
      store.get()
    )
  )
  return ls()
}

function toggleComplete (todo) {
  todo.completed = !todo.completed
  return todo
}
