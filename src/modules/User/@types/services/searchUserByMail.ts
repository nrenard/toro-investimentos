import { IUser } from './createUsers'

export interface IUserWithPassword {
  user: IUser
  getPassword: () => string
}

export type TSearchUserByMail = (mail: string) => Promise<IUserWithPassword | null>
