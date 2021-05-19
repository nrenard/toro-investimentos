import { User } from '@/models'

import { generateHash } from '@/shared'

import { IUserData, TCreateUser } from '../@types/services'

const createUser: TCreateUser = async (data: IUserData) => {
  const password = await generateHash(data.password)

  const user = await User.create({ ...data, password })

  return user
}

export default createUser
