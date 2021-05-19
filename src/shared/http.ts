
import { IHttpResponse } from '@/@types/protocols'

export const badRequest = (error: string): IHttpResponse => ({
  statusCode: 400,
  body: { error }
})

export const serverError = (): IHttpResponse => ({
  statusCode: 500,
  body: { error: 'Erro interno.' }
})

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data
})

export const create = (data: any): IHttpResponse => ({
  statusCode: 201,
  body: data
})
