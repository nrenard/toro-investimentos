import { generateHash } from '@/shared'

import { IUserModel } from '@/@types/models'

import { IUserData, TCreateUser } from '../@types/services'

interface IUserFactory {
  User: IUserModel
}

const createUserFactory = ({ User }: IUserFactory) => {
  const createUser: TCreateUser = async (data: IUserData) => {
    const password = await generateHash(data.password)

    const user = await User.create({ ...data, password })

    return user
  }

  return createUser
}

export default createUserFactory
