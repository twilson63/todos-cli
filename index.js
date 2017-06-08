#!/usr/bin/env node

const [execPath, jsPath, cmd, ...rest] = process.argv

// commands
const help = require('./cmds/help')
const ls = require('./cmds/ls')
const add = require('./cmds/add')
const rm = require('./cmds/rm')
const check = require('./cmds/check')

// print result
console.log(handle(cmd))

function handle(cmd) {
  switch (cmd) {
    case 'check':
      return check(rest)
    case 'rm':
      return rm(rest)
    case 'add':
      return add(rest)
    case 'ls':
      return ls()
    case 'help':
      return help()
    default:
      return help()
  }
}
