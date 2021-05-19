import 'express'

import { IHelperReponse } from './protocols'

declare module 'express' {
  export interface Response {
    adaptiveResponse: IHelperReponse
  }

  export interface Request {
    userId: any
  }
}
