const Users = require('../lib/users')
const users = new Users()

async function initialize() {
  await users.initialize()
}
initialize()