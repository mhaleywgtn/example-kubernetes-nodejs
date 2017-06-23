'use strict'

const express = require('express')

const app = express()
const port = process.env.PORT || 3001

const server = app.listen(port, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server is listenin on ${port} port`)
})

process.on('SIGTERM', () => {
  server.close((err) => {
    console.error(err)
    process.exit(1)
  })

  process.exit(0)
})