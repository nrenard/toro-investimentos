import { IBaseModel } from '../protocols'

export interface IUserModel extends IBaseModel {
  findByMail: (mail: string) => Promise<any>
}
