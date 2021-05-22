import { Router } from 'express'

import { createUser, searchUserByMail, generaToken, validPassword, getUser } from './services'
import { CreateSession, CreateUser, GetUser } from './controllers'
import { createUserValidate, createSessionValidate } from './validators'

import authMiddleware from '@/config/middlewares/authMiddleware'

const routes = Router()

const prefix = 'users'

const createUserController = new CreateUser({
  serviceCreateUser: createUser,
  serviceSearchUserByMail: searchUserByMail,
  serviceGenerateToken: generaToken,
  validateData: createUserValidate
})
routes.post(`/${prefix}`, createUserController.handle)

const getUserController = new GetUser({ serviceGetUser: getUser })
routes.get(`/${prefix}/detail`, authMiddleware, getUserController.handle)

const createSessionController = new CreateSession({
  serviceSearchUserByMail: searchUserByMail,
  serviceGenerateToken: generaToken,
  serviceValidPassword: validPassword,
  validateData: createSessionValidate
})
routes.post('/session', createSessionController.handle)

export default routes
