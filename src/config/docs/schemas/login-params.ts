export const loginParamsSchema = {
  type: 'object',
  properties: {
    mail: { type: 'string' },
    password: { type: 'string' }
  },
  required: ['mail', 'password']
}
