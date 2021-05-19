import config from './jest.config'

config.testMatch = ['**/*.test.ts']
config.preset = "@shelf/jest-dynamodb"

export default config