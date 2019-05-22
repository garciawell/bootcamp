const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')
const factory = require('../factories')
const nodemailer = require('nodemailer')

jest.mock('nodemailer')

const transport = {
  sendMail: jest.fn()
}

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate()
  })

  beforeAll(() => {
    nodemailer.createTransport.mockReturnValue(transport)
  })
  it('should be able to authenticate with valid credentials', async () => {
    const user = await factory.create('User', {
      password: '123123'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123'
      })

    expect(response.status).toBe(200)
  })

  it('Should not be able to authenticate with invalid credentaials', async () => {
    const user = await factory.create('User', {
      password: '123123'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456'
      })

    expect(response.status).toBe(401)
  })

  it('should return jwt token when authenticated', async () => {
    const user = await factory.create('User', {
      password: '123123'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123'
      })

    expect(response.body).toHaveProperty('token')
  })

  it('should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User')

    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer ${user.generateToken()}`)

    expect(response.status).toBe(200)
  })

  it('should not be able to access private routes when not authenticated', async () => {
    const response = await request(app).get('/dashboard')

    expect(response.status).toBe(401)
  })

  it('should be able to valid token', async () => {
    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer 121123123`)

    expect(response.status).toBe(401)
  })

  it('should received email notication when authenticated', async () => {
    const user = await factory.create('User', {
      password: '123123'
    })

    await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123'
      })

    await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer ${user.generateToken()}`)

    expect(transport.sendMail).toHaveBeenCalledTimes(1)
    expect(transport.sendMail.mock.calls[0][0].to).toBe(
      `${user.name} <${user.email}>`
    )
  })
})
