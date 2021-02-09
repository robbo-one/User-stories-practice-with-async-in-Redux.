const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const pokeRoutes = require('./pokemon')
const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/reddit', redditRoutes)
server.use('/api/v1/pokeapi', pokeRoutes)

module.exports = server
