import { config } from 'dotenv'

export default () => {
  config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
  })
}
