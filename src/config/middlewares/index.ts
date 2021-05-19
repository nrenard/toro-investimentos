import { Express, json } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import cors from './cors'
import helperReponse from './helperReponse'

export default (app: Express): void => {
  app.use(json())
  app.use(cors)
  app.use(helmet())
  app.use(morgan('common'))
  app.use(helperReponse)
}
