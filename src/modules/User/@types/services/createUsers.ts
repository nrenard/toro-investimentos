export interface IUserData {
  name: string
  mail: string
  password: string
}

export interface IUser extends Omit<IUserData, 'password'> {
  id: string
  token?: string
}

export type TCreateUser = (data: IUserData) => Promise<IUser>
