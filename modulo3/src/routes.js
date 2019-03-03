const express = require('express')
const routes = express.Router()
const validate = require('express-validation')
const validators = require('./app/validators')
const controllers = require('./app/controllers')
const authMiddleware = require('./app/middlewares/auth')
const handle = require('express-async-handler')

routes.post(
  '/users',
  validate(validators.User),
  handle(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddleware)

/**
 * ADS
 */

routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handle(controllers.AdController.update)
)
routes.delete('/ads/:id', handle(controllers.AdController.destroy))
/**
 * Purchases
 */
routes.post(
  '/purchase',
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
)

routes.put('/purchases/:id', handle(controllers.ApproveController.update))
routes.get('/purchases', handle(controllers.PurchaseController.index))

module.exports = routes
