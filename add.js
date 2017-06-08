const store = require('./store')
const { append, join, compose } = require('ramda')
const render = require('./render')

module.exports = function (text) {
  const todos = store.get()
  store.set(
    append({
      text: join(' ', text),
      id: todos.length + 1,
      completed: false
    }, store.get() || [])
  )
  return render(store.get())
}
