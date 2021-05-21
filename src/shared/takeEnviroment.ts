import configEnv from '@/config/env'

configEnv()

export const takeEnviroment = (enviroment: string) => process.env[enviroment] ?? ''
