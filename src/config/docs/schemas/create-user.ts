export const createUserParamsSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    mail: { type: 'string' },
    password: { type: 'string' }
  },
  required: ['name', 'mail', 'password']
}
