import * as dynamoose from 'dynamoose'

const { NODE_ENV } = process.env

export default (): void => {
  if (NODE_ENV !== 'prod') dynamoose.aws.ddb.local()
}
