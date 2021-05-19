import { Response, Request, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [bearer, token] = authorization.split(' ')

  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Token malformated' })
  }

  try {
    const { id }: any = await jwt.verify(token, process.env.APP_SECRET ?? '')

    req.userId = id

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token not authorizated' })
  }
}
