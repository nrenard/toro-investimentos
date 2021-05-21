import { User } from '@/models'

import getUserFactory from './getUser'
import searchUserByMailFactory from './searchUserByMail'
import createUserFactory from './createUser'

export { default as validPassword } from './validPassword'
export { default as generaToken } from './generaToken'

export const getUser = getUserFactory({ User })
export const searchUserByMail = searchUserByMailFactory({ User })
export const createUser = createUserFactory({ User })
