import { createUserValidate } from './index'

describe('createUserValidate Validator', () => {
  const data = {
    mail: 'a@a.com',
    name: 'Teste Name',
    password: 'password'
  }

  test('Should call Validation with correct value', async () => {
    const error = createUserValidate(data)
    expect(error).toBeUndefined()
  })

  test('Should call Validation with incorrect mail', async () => {
    const error = createUserValidate({ ...data, mail: 'testemailincorrect' })
    expect(error).toBe('"mail" must be a valid email')
  })

  test('Should call Validation with not mail', async () => {
    const error = createUserValidate({ ...data, mail: undefined })
    expect(error).toBe('"mail" is required')
  })

  test('Should call Validation with not name', async () => {
    const error = createUserValidate({ ...data, name: undefined })
    expect(error).toBe('"name" is required')
  })

  test('Should call Validation with incorrect minimun size password', async () => {
    const error = createUserValidate({ ...data, password: '1222' })
    expect(error).toBe('"password" length must be at least 6 characters long')
  })

  test('Should call Validation with incorrect maximun size password', async () => {
    const error = createUserValidate({ ...data, password: '31dawdwadawdawdawdwadawdadwadaw' })
    expect(error).toBe('"password" length must be less than or equal to 20 characters long')
  })

  test('Should call Validation with not password', async () => {
    const error = createUserValidate({ ...data, password: undefined })
    expect(error).toBe('"password" is required')
  })
})
