const store = require('./store')
const { append, join, compose } = require('ramda')
const render = require('./render')

module.exports = function (text) {
  const todos = store.get()
  store.set(
    append(
      createTodo(text, todos.length),
      store.get()
    )
  )
  return render(store.get())
}

function createTodo(text, id) {
  return {
    text: join(' ', text),
    completed: false,
    id: id + 1,
  }
}
