import { User } from '@/models'

import { TGetUser } from '../@types/services'

const getUser: TGetUser = async (id: string) => await User.show(id)

export default getUser
