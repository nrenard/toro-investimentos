
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

const documentation = {
  openapi: '3.0.0',
  info: {
    title: 'Teste Prático Back End',
    description: 'Essa api foi devenvolida como teste prático para a empresa Toro.',
    version: '1.0.0',
    contact: {
      name: 'Nicolas Renard',
      email: 'nicolasrenard1999@gmail.com',
      url: 'https://www.linkedin.com/in/nicolasrenard1999/'
    }
  },
  tags: []
  // paths,
  // schemas,
  // components
}

export default (app: Express): void => {
  app.use('/docs', serve, setup(documentation))
}
