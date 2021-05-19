import { IHttpResponse } from '@/@types/protocols'

export default (_, res, next) => {
  res.adaptiveResponse = ({ body, statusCode }: IHttpResponse) => res.status(statusCode).json(body)
  next()
}
