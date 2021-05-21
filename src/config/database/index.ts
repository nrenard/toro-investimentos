import { takeEnviroment } from '@/shared'
import * as dynamoose from 'dynamoose'

export default (): void => {
  if (takeEnviroment('NODE_ENV') !== 'prod') dynamoose.aws.ddb.local(takeEnviroment('DYNAMO_DB_HOST') || undefined)
}
