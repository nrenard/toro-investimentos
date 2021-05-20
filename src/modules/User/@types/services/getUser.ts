import { IUser } from './createUsers'

export type TGetUser = (id: string) => Promise<IUser | null>
