'use strict'

const agent = {
  id: 1,
  uuid: 'yyy-yyy-yyy',
  username: 'deverse',
  hostname: 'test-host',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const agents = [
  agent,
  extend(agent, { id:2 , uuid: 'yyy-yyy-yyw', connected: false, username: 'deverse'}),
  extend(agent, { id:3, uuid: 'yyy-yyy-yyxz', username: 'tester'})
]

function extend(obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: agent,
  all: agents,
  connected: agents.filter(agent => agent.connected),
  findByUuid: uuid => agents.filter(agent => agent.uuid === uuid).shift(),
  findById: id => agents.filter(agent => agent.id === id).shift(),
}