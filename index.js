#!/usr/bin/env node

const [execPath, jsPath, cmd, ...rest] = process.argv

// commands
const help = require('./help')
const ls = require('./ls')
const add = require('./add')
const rm = require('./rm')
const check = require('./check')

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
