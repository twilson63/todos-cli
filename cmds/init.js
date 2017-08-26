const fs = require('fs')
module.exports = function() {
  if (!fs.existsSync('./todos.json')) {
    fs.writeFileSync('todos.json', '[]')
  }
  return 'todos.json initialized'
}
