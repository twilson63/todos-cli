const { store } = require('../lib')
const { map, curry } = require('ramda')
const ls = require('./ls')

const propEq = curry(function (prop, value, object) {
  return object[prop] === value
})

module.exports = function (id) {
  // eslint-disable-next-line
  store.set(
    map(
      ifElse(propEq('id', parseInt(id, 10)), toggleComplete, identity),
      store.get()
    )
  )
  return ls()
}

function ifElse (cond, success, reject) {
  return function (todo) {
    if (cond(todo)) {
      return success(todo)
    } else {
      return reject(todo)
    }
  }
}

function identity (x) {
  return x
}

function toggleComplete (todo) {
  return {...todo, completed: !todo.completed}
}
