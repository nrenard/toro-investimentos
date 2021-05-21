import { takeEnviroment } from '@/shared'
import jwt from 'jsonwebtoken'

import { TGenerateToken } from '../@types/services'

const generaToken: TGenerateToken = async (id: string) => jwt.sign({ id }, takeEnviroment('APP_SECRET'), {
  expiresIn: 86400
})

export default generaToken
