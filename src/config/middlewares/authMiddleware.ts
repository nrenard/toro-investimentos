import { Response, Request, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { notAuthorized } from '@/shared'

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.adaptiveResponse(notAuthorized())
  }

  const [bearer, token] = authorization.split(' ')

  if (bearer !== 'Bearer' || !token) {
    return res.adaptiveResponse(notAuthorized())
  }

  try {
    const { id }: any = await jwt.verify(token, process.env.APP_SECRET ?? '')

    req.userId = id

    return next()
  } catch (err) {
    return res.adaptiveResponse(notAuthorized())
  }
}
