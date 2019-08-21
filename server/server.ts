import * as http from 'http'
import Api from './api/api'
const mongoose = require('mongoose')

const config = require('./config/env/config')()
const server = http.createServer(Api)

server.listen(config.serverPort)
server.on('listening', () => {
  const authData = {
    user: 'carenet',
    pass: 'carenet@mongo',
    useNewUrlParser: true,
    useCreateIndex: true,
  }

  mongoose
    .connect('mongodb://mongodb:27017/carenet', authData)
    .then(() => {
      console.log('successfully connected to the database')
    })
    .catch((err: any) => {
      console.log('error connecting to the database', err)
    })
  console.log(`Server is listening on ${config.serverPort}`)
})
server.on('error', (error: NodeJS.ErrnoException) => {
  console.error(`Ocorreu um erro: ${error}`)
})
