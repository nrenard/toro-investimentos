import { compareHash } from '@/shared'

import { TValidPassowrd } from '../@types/services'

const validPassword: TValidPassowrd = async (hash: string, password: string) => await compareHash(hash, password)

export default validPassword
