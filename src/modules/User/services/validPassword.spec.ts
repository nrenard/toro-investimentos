import validPassword from './validPassword'

describe('validPassword Service', () => {
  test('Should call valid password', async (done) => {
    const hash = '$2a$10$eCmJcuox5QV.QbVOvEvdz.nYY5us7XwMf8k5uWxHZTSEGlb0aJOi2'
    const password = 'teste'

    const data = await validPassword(password, hash)

    expect(data).toBeTruthy()

    done()
  })
})
