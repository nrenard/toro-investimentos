import { Request, Response } from 'express'

import { IController, TValidators } from '@/@types/protocols'
import { TCreateUser, IUserData, TSearchUserByMail, TGenerateToken } from '../@types/services'

import { create, serverError, badRequest } from '@/shared'

interface IResquest extends Request {
  body: IUserData
}

class CreateUser implements IController {
  private readonly validateData: TValidators
  private readonly serviceCreateUser: TCreateUser
  private readonly serviceSearchUserByMail: TSearchUserByMail
  private readonly serviceGenerateToken: TGenerateToken

  constructor ({ serviceCreateUser, serviceSearchUserByMail, serviceGenerateToken, validateData }) {
    this.serviceCreateUser = serviceCreateUser
    this.serviceSearchUserByMail = serviceSearchUserByMail
    this.serviceGenerateToken = serviceGenerateToken
    this.validateData = validateData
  }

  public handle = async (req: IResquest, res: Response): Promise<Response> => {
    try {
      const { body } = req

      const error = this.validateData(body)
      if (error) return res.adaptiveResponse(badRequest(error))

      const exist = await this.serviceSearchUserByMail(body.mail)
      if (exist) return res.adaptiveResponse(badRequest('User already exists!'))

      const user = await this.serviceCreateUser(body)

      const token = await this.serviceGenerateToken(user.id)

      user.token = token

      return res.adaptiveResponse(create(user))
    } catch (err) {
      console.error(err)
      return res.adaptiveResponse(serverError())
    }
  }
}

export default CreateUser
