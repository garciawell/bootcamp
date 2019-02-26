const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserControlleer = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', UserControlleer.create)
routes.post('/signup', upload.single('avatar'), UserControlleer.store)

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  return res.render('dashboard')
})

module.exports = routes
