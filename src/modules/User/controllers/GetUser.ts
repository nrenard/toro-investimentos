import { Request, Response } from 'express'

import { IController } from '@/@types/protocols'
import { TGetUser } from '../@types/services'

import { badRequest, ok, serverError } from '@/shared'

class GetUser implements IController {
  private readonly serviceGetUser: TGetUser

  constructor ({ serviceGetUser }) {
    this.serviceGetUser = serviceGetUser
  }

  public handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await this.serviceGetUser(req.userId)

      if (!user) return res.adaptiveResponse(badRequest('User does not exists!'))

      return res.adaptiveResponse(ok(user))
    } catch (err) {
      console.error(err)
      return res.adaptiveResponse(serverError())
    }
  }
}

export default GetUser
