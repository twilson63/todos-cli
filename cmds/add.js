const { reduce } = require('ramda')
const { store } = require('../lib')
const ls = require('./ls')

module.exports = function (text) {
  const todos = store.get()
  // eslint-disable-next-line
  store.set(
    append(
      createTodo(text, todos.length),
      store.get()
    )
  )
  return ls()
}

function append (value, list) {
  return [...list, value]
}

function join (sep, list) {
  return reduce(function (acc, value) {
    return `${acc}${sep}${value}`
  }, '', list)
}

function createTodo (text, id) {
  return {
    text: join(' ', text),
    completed: false,
    id: id + 1
  }
}
