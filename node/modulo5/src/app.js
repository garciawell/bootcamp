const express = require('express')

class AppController {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
  }
<<<<<<< HEAD

  route () {
    this.express.use(require('./routes'))
=======
  routes () {
    this.express.use('./routes')
>>>>>>> 824fd6a17eb710efd4a49387de96aba30079a55a
  }
}

module.exports = new AppController().express
