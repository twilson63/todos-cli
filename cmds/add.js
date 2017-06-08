const { append, join, compose } = require('ramda')
const { store } = require('../lib')
const ls = require('./ls')

module.exports = function (text) {
  const todos = store.get()
  store.set(
    append(
      createTodo(text, todos.length),
      store.get()
    )
  )
  return ls()
}

function createTodo(text, id) {
  return {
    text: join(' ', text),
    completed: false,
    id: id + 1,
  }
}
