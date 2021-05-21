import { configEnv } from '@/config'
import generaToken from './generaToken'

configEnv()

describe('generaToken Service', () => {
  test('Should call generate token', async (done) => {
    const data = await generaToken('id')

    expect(data.length).toBe(141)

    done()
  })
})
