
import { Express } from 'express'

import User from './User'

export default (app: Express): void => {
  app.use(User)
}
