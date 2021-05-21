
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

import schemas from './schemas'
import paths from './paths'
import * as components from './components'

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
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      sheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT'
    }
  },
  tags: ['Sessão'],
  paths,
  schemas,
  components
}

export default (app: Express): void => {
  app.use('/docs', serve, setup(documentation))
}
