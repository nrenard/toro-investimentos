import { User } from '@/models'

import { TSearchUserByMail } from '../@types/services'

const searchUserByMail: TSearchUserByMail = async (mail: string) => await User.findByMail(mail)

export default searchUserByMail
