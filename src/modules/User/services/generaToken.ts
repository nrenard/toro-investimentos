import jwt from 'jsonwebtoken'

import { TGenerateToken } from '../@types/services'

const generaToken: TGenerateToken = async (id: string) => jwt.sign({ id }, process.env.APP_SECRET ?? '', {
  expiresIn: 86400
})

export default generaToken
