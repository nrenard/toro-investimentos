import { badRequest, serverError, ok } from '@/shared'

import { GetUser } from './index'

import { IHttpResponse } from '@/@types/protocols'
import { TGetUser } from '../@types/services'

type IMakeSut = (functions?: any) => {
  sut: GetUser
  serviceGetUser: TGetUser
}

const data = {
  id: 'id',
  name: 'Teste Teste',
  mail: 'a@a.com'
}

const makeSut: IMakeSut = (functions = {}) => {
  const serviceGetUser: any = () => (data)

  const params = {
    serviceGetUser,
    ...functions
  }

  const sut = new GetUser(params)

  return {
    sut,
    serviceGetUser
  }
}

const requestMockMount = (): any => ({ userId: '' })

const responseMockMount = (): any => ({ adaptiveResponse: (value: IHttpResponse) => value })

describe('GetUser Controller', () => {
  test('Should call Get user with error in token', async () => {
    const serviceGetUser: any = () => null

    const { sut } = makeSut({ serviceGetUser })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest('User does not exists!'))
  })

  test('Should call Get user with error', async () => {
    const serviceGetUser: any = () => {
      throw new Error('Error')
    }

    const { sut } = makeSut({ serviceGetUser })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(serverError())
  })

  test('Should call with success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(ok(data))
  })
})
