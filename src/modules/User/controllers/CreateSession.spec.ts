import { badRequest, serverError, create } from '@/shared'

import { CreateSession } from './index'

import { IHttpResponse, TValidators } from '@/@types/protocols'
import { TGenerateToken, TSearchUserByMail, TValidPassowrd } from '../@types/services'

const data = {
  mail: 'a@a.com',
  password: 'dwadaw'
}

type IMakeSut = (functions?: any) => {
  sut: CreateSession
  validateData: TValidators
  serviceGenerateToken: TGenerateToken
  serviceSearchUserByMail: TSearchUserByMail
  serviceValidPassword: TValidPassowrd
}

const makeSut: IMakeSut = (functions = {}) => {
  const validateData: any = () => undefined
  const serviceGenerateToken: any = () => 'token'
  const serviceSearchUserByMail: any = () => ({
    user: {
      mail: data.mail,
      name: 'Teste teste'
    },
    getPassword: () => data.password
  })
  const serviceValidPassword: any = () => true

  const params = {
    validateData,
    serviceGenerateToken,
    serviceSearchUserByMail,
    serviceValidPassword,
    ...functions
  }

  const sut = new CreateSession(params)

  return {
    sut,
    validateData,
    serviceGenerateToken,
    serviceSearchUserByMail,
    serviceValidPassword
  }
}

const requestMockMount = (): any => ({ body: data })

const responseMockMount = (): any => ({ adaptiveResponse: (value: IHttpResponse) => value })

describe('CreateSession Controller', () => {
  test('Should call Validation with incorrect value', async () => {
    const error = 'error message'

    const validateData: any = () => error

    const { sut } = makeSut({ validateData })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest(error))
  })

  test('Should call Search user with incorrect value', async () => {
    const error = 'Mail or password incorrect!'

    const serviceSearchUserByMail: any = () => null

    const { sut } = makeSut({ serviceSearchUserByMail })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest(error))
  })

  test('Should call Valid password with incorrect value', async () => {
    const error = 'Mail or password incorrect!'

    const serviceValidPassword: any = () => false

    const { sut } = makeSut({ serviceValidPassword })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest(error))
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

    expect(response).toMatchObject(create({
      mail: 'a@a.com',
      name: 'Teste teste',
      token: 'token'
    }))
  })
})
