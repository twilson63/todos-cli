const { store, render } = require('../lib')

module.exports = function () {
  const todos = store.get()
  return render(todos)
}
