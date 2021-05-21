import { badRequest, serverError, create } from '@/shared'

import { CreateUser } from './index'

import { IHttpResponse, TValidators } from '@/@types/protocols'
import { TCreateUser, TGenerateToken, TSearchUserByMail } from '../@types/services'

const data = {
  id: 'id',
  name: 'Teste Teste',
  mail: 'a@a.com',
  password: 'password'
}

type IMakeSut = (functions?: any) => {
  sut: CreateUser
  validateData: TValidators
  serviceGenerateToken: TGenerateToken
  serviceSearchUserByMail: TSearchUserByMail
  serviceCreateUser: TCreateUser
}

const makeSut: IMakeSut = (functions = {}) => {
  const validateData: any = () => undefined
  const serviceGenerateToken: any = () => 'token'
  const serviceSearchUserByMail: any = () => null
  const serviceCreateUser: any = () => (data)

  const params = {
    validateData,
    serviceGenerateToken,
    serviceSearchUserByMail,
    serviceCreateUser,
    ...functions
  }

  const sut = new CreateUser(params)

  return {
    sut,
    validateData,
    serviceGenerateToken,
    serviceSearchUserByMail,
    serviceCreateUser
  }
}

const requestMockMount = (): any => ({ body: data })

const responseMockMount = (): any => ({ adaptiveResponse: (value: IHttpResponse) => value })

describe('CreateUser Controller', () => {
  test('Should call Validation with incorrect value', async () => {
    const error = 'error message'

    const validateData: any = () => error

    const { sut } = makeSut({ validateData })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest(error))
  })

  test('Should call Search user with incorrect value', async () => {
    const error = 'User already exists!'

    const serviceSearchUserByMail: any = () => ({
      user: {
        mail: data.mail,
        name: 'Teste teste'
      },
      getPassword: () => data.password
    })

    const { sut } = makeSut({ serviceSearchUserByMail })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest(error))
  })

  test('Should call Create user with error', async () => {
    const serviceCreateUser: any = () => {
      throw new Error('Error')
    }

    const { sut } = makeSut({ serviceCreateUser })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(serverError())
  })

  test('Should call Generate token with error', async () => {
    const serviceGenerateToken: any = () => {
      throw new Error('Error')
    }

    const { sut } = makeSut({ serviceGenerateToken })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(serverError())
  })

  test('Should call with success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(create({ ...data, token: 'token' }))
  })
})
