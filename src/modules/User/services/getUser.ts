import { IUserModel } from '@/@types/models'

import { TGetUser } from '../@types/services'

interface IUserFactory {
  User: IUserModel
}

const getUserFactory = ({ User }: IUserFactory) => {
  const getUser: TGetUser = (id: string) => User.show(id)
  return getUser
}

export default getUserFactory
