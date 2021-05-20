import { Request, Response } from 'express'

import { IController } from '@/@types/protocols'
import { TGetUser } from '../@types/services'

import { ok, serverError } from '@/shared'

class GetUser implements IController {
  private readonly serviceGetUser: TGetUser

  constructor ({ serviceGetUser }) {
    this.serviceGetUser = serviceGetUser
  }

  public handle = async (req: Request, res: Response): Promise<Response> => {
    console.log('req.userId: ', req.userId)
    try {
      const user = await this.serviceGetUser(req.userId)
      return res.adaptiveResponse(ok(user))
    } catch (err) {
      console.error(err)
      return res.adaptiveResponse(serverError())
    }
  }
}

export default GetUser
