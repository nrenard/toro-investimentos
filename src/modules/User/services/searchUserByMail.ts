import { IUserModel } from '@/@types/models'

import { TSearchUserByMail } from '../@types/services'

interface IUserFactory {
  User: IUserModel
}

const searchUserByMailFactory = ({ User }: IUserFactory) => {
  const searchUserByMail: TSearchUserByMail = async (mail: string) => await User.findByMail(mail)
  return searchUserByMail
}

export default searchUserByMailFactory
