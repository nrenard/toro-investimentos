/* eslint-disable import/first */
if (process.env.NODE_ENV === 'prod') require('module-alias/register')

import server from './server'

const PORT = process.env.PORT ?? 3333

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
