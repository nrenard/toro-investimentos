import { Router } from 'express'

import { createUser, searchUserByMail, generaToken, validPassword } from './services'
import { CreateSession, CreateUser } from './controllers'
import { createUserValidate, createSessionValidate } from './validators'

const routes = Router()

const prefix = 'users'

const createUserController = new CreateUser({
  serviceCreateUser: createUser,
  serviceSearchUserByMail: searchUserByMail,
  serviceGenerateToken: generaToken,
  validateData: createUserValidate
})
routes.post(`/${prefix}`, createUserController.handle)

const createSessionController = new CreateSession({
  serviceSearchUserByMail: searchUserByMail,
  serviceGenerateToken: generaToken,
  serviceValidPassword: validPassword,
  validateData: createSessionValidate
})
routes.post('/session', createSessionController.handle)

export default routes
