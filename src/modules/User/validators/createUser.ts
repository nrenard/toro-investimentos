import Joi from 'joi'

const schema = Joi.object({
  name: Joi.string().required(),
  mail: Joi.string().email().required(),
  password: Joi.string().min(6).max(20).required()
})

export default (data: any) => schema.validate(data, { abortEarly: false }).error?.message
