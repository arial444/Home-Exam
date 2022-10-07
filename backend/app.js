const APP_ENV = process.env.NODE_ENV || 'development'
const runMode = process.env.RUN_MODE || 'app'
global.APP_ENV = APP_ENV
const config = require('./config/config').get(APP_ENV)
global.config = config
require('events').EventEmitter.defaultMaxListeners = 5

require('dotenv').config({ path: `./.env.${APP_ENV}` })
const Koa = require('koa')
const koaCors = require('@koa/cors')
const app = new Koa()

const users = require('./repository/users')

const model = require('./models')
const Users = require('./repository/users')
const { Query } = require('mongoose')
const user = new users()
model.init()

if (runMode === 'app') {
  const router = require('./routes/routes')
  const body = require('koa-body')

  app.use(
    body({
      json: { limit: '50mb', extended: true },
      includeUnparsed: true,
      urlencoded: { limit: '50mb', extended: true },
      formLimit: '50mb',
      multipart: true,
      formidable: {
        uploadDir: './tmp',
        keepExtensions: true
      }
    })
  )

  app.use(
    koaCors({
      methods: 'POST, GET, PUT, DELETE, OPTIONS',
      allowMethods: 'Origin, X-Requested-With, Content-Type, Accept',
      credentials: true
    })
  )

  router.post('/api/getAllUsers', async (ctx) => {
    ctx.response.body = await user.find({});
  })

  router.post('/api/getUserById', async (ctx) => {
    ctx.response.body = await user.findOne({"_id": ctx.request.body['_id']});
  })

  router.post('/api/updateUser', (ctx) => {
    user.updateOne({"_id": ctx.request.body['_id']}, {
      "email": ctx.request.body['email'],
      "role": ctx.request.body['role'],
      "salary": ctx.request.body['salary'],
      "manager": ctx.request.body['manager'],
     })
  })

  router.post('/api/createUser', (ctx) => {
    user.create({
      "firstName": ctx.request.body['firstName'],
      "lastName": ctx.request.body['lastName'], 
      "dateStarted": ctx.request.body['dateStarted']
    })
  })

  router.post('/api/deleteUser', (ctx) => {
    user.deleteOne({"_id": ctx.request.body['_id']})
  })

  router.post('/api/getManagerAndEmployees', async (ctx) => {
    ctx.response.body = await user.find({"role" : { "$in": ["Manager", "Worker"] }});
  })

  app.use(router.routes())
}

const port = config.ports[runMode]

log.info(`started in ${APP_ENV} env, listening to port ${port}`)
app.listen(port)
