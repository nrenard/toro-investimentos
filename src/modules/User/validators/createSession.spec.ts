import { createSessionValidate } from './index'

describe('createSessionValidate Validator', () => {
  const data = {
    mail: 'a@a.com',
    password: 'password'
  }

  test('Should call Validation with correct value', async () => {
    const error = createSessionValidate(data)
    expect(error).toBeUndefined()
  })

  test('Should call Validation with incorrect mail', async () => {
    const error = createSessionValidate({ ...data, mail: 'testemailincorrect' })
    expect(error).toBe('"mail" must be a valid email')
  })

  test('Should call Validation with not mail', async () => {
    const error = createSessionValidate({ ...data, mail: undefined })
    expect(error).toBe('"mail" is required')
  })

  test('Should call Validation with not password', async () => {
    const error = createSessionValidate({ ...data, password: undefined })
    expect(error).toBe('"password" is required')
  })
})
