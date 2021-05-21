import { IBaseModel } from '@/@types/protocols'

class BaseModel implements IBaseModel {
  readonly model: any

  constructor (Model: any) {
    this.model = Model
  }

  show (key: string) {
    return this.model.get(key).toJSON()
  }

  create (data: any) {
    return this.model.create(data)
  }

  delete (key: string) {
    return this.model.delete(key)
  }

  update (key: string, data: any) {
    return this.model.update(key, data)
  }
}

export default BaseModel
