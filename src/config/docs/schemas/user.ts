export const user = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    mail: { type: 'string' },
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
    token: { type: 'string' }
  },

  required: ['name', 'mail']
}
