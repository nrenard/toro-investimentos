import Joi from 'joi'

const schema = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().required()
})

export default (data: any) => schema.validate(data, { abortEarly: false }).error?.message
