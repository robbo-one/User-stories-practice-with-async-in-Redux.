const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const catFactsRouter = require('./catsFacts')
const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/reddit', redditRoutes)

server.use('/api/v1/catsFacts', catFactsRouter)

module.exports = server
