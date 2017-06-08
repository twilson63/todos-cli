const { store, render } = require('../lib')
const { append, join, compose } = require('ramda')

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
