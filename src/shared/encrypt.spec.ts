import { generateHash, compareHash } from './index'

describe('encrypt Shareds', () => {
  const password = 'teste'

  test('Should call generateHash', async (done) => {
    const result = await generateHash(password)

    expect(result.length).toBe(60)

    done()
  })

  test('Should call compareHash', async (done) => {
    const hash = '$2a$10$eCmJcuox5QV.QbVOvEvdz.nYY5us7XwMf8k5uWxHZTSEGlb0aJOi2'
    const result = await compareHash(password, hash)

    expect(result).toBeTruthy()

    done()
  })
})
