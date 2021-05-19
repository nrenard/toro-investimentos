import express from 'express'

import { setupMiddlewares, setupDocs, setupDatabases, configEnv } from '@/config'

import setupModules from './modules'

configEnv()

const app = express()

setupMiddlewares(app)
setupModules(app)
setupDocs(app)
setupDatabases()

export default app
