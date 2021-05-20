import * as dynamoose from 'dynamoose'
import { v4 as uuidV4 } from 'uuid'

import BaseModel from './BaseModel'

const UserSchema = new dynamoose.Schema({
  id: { type: String, hashKey: true, default: uuidV4 },
  name: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true }
}, { timestamps: true })

const User = dynamoose.model('User', UserSchema)

class UserModel extends BaseModel {
  async show (key: string) {
    const user = await this.model.get(key)

    delete user.password

    return user
  }

  async create (data: any) {
    const user = await this.model.create(data)

    delete user.password

    return user
  }

  async findByMail (mail: string) {
    const query = await this.model.scan('mail').eq(mail).exec()
    const users = query.toJSON()

    if (!users.length) return null

    const { password, ...user } = users[0]

    return { user, getPassword: () => password }
  }
}

export default new UserModel(User)
