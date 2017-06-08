const { map, compose, join, filter, propEq, reduce, add } = require('ramda')

const list = compose(
  join('\n'),
  map(li)
)
const remaining = compose(
  reduce(add(1), 0),
  filter(propEq('completed', false))
)

module.exports = function (todos) {
  return `
Todos
------------------------
${list(todos)}
------------------------
${remaining(todos)} remaining
`
}

function li (todo) {
  return `[${todo.completed ? 'X' : ' ' }] - ${todo.id} ${todo.text}`
}
