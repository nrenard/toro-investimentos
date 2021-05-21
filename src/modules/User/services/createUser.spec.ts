import createUserFactory from './createUser'

const ModelMock: any = {
  create: (data) => (data)
}

describe('createUser Service', () => {
  const createUser = createUserFactory({ User: ModelMock })

  test('Should call create user', async (done) => {
    const dataUser = {
      name: 'Teste TEste',
      mail: 'a@a.com',
      password: 'pass'
    }

    const data = await createUser(dataUser)

    expect(data).toStrictEqual(data)

    done()
  })
})
