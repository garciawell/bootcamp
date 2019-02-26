const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserControlleer = require('./app/controllers/UserController')

routes.get('/signup', UserControlleer.create)
routes.post('/signup', upload.single('avatar'), UserControlleer.store)

module.exports = routes
