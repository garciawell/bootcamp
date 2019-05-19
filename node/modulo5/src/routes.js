const routes = require('express').Router()

const { User } = require('./app/models')

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Wellington',
    email: 'Wellington@gmail.com',
    password_hash: '12313123'
  })

  return res.json({ user })
})

module.exports = routes
