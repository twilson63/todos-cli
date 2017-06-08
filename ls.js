const store = require('./store')
const render = require('./render')

module.exports = function () {
  const todos = store.get()
  return render(todos)
}
