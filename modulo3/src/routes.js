const express = require('express')
const routes = express.Router()
const validate = require('express-validation')
const validators = require('./app/validators')
const controllers = require('./app/controllers')
const authMiddleware = require('./app/middlewares/auth')

routes.post(
  '/users',
  validate(validators.User),
  controllers.UserController.store
)
routes.post(
  '/sessions',
  validate(validators.Session),
  controllers.SessionController.store
)

routes.use(authMiddleware)

/**
 * ADS
 */

routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', validate(validators.Ad), controllers.AdController.store)
routes.put('/ads/:id', validate(validators.Ad), controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)
/**
 * Purchases
 */
routes.post(
  '/purchase',
  validate(validators.Purchase),
  controllers.PurchaseController.store
)

module.exports = routes
