import { Request, Response } from 'express'

import { IController, TValidators } from '@/@types/protocols'
import { TSearchUserByMail, TGenerateToken, TValidPassowrd } from '../@types/services'

import { create, serverError, badRequest } from '@/shared'

interface IBody {
  mail: string
  password: string
}

interface IResquest extends Request {
  body: IBody
}

class CreateSession implements IController {
  private readonly validateData: TValidators
  private readonly serviceSearchUserByMail: TSearchUserByMail
  private readonly serviceGenerateToken: TGenerateToken
  private readonly serviceValidPassword: TValidPassowrd

  constructor ({ serviceSearchUserByMail, serviceGenerateToken, serviceValidPassword, validateData }) {
    this.serviceSearchUserByMail = serviceSearchUserByMail
    this.serviceGenerateToken = serviceGenerateToken
    this.serviceValidPassword = serviceValidPassword
    this.validateData = validateData
  }

  public handle = async (req: IResquest, res: Response): Promise<Response> => {
    const genericMessage = 'Mail or password incorrect!'

    try {
      const { body } = req

      const error = this.validateData(body)
      if (error) return res.adaptiveResponse(badRequest(error))

      const data = await this.serviceSearchUserByMail(body.mail)
      if (!data) return res.adaptiveResponse(badRequest(genericMessage))

      const { getPassword, user } = data

      const isValidPassword = await this.serviceValidPassword(body.password, getPassword())
      if (!isValidPassword) return res.adaptiveResponse(badRequest(genericMessage))

      const token = await this.serviceGenerateToken(user.id)

      user.token = token

      return res.adaptiveResponse(create(user))
    } catch (err) {
      console.error(err)
      return res.adaptiveResponse(serverError())
    }
  }
}

export default CreateSession
