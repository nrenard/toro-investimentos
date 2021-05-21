import getUserFactory from './getUser'

const dataUser = {
  name: 'Teste TEste',
  mail: 'a@a.com',
  password: 'pass'
}

const ModelMock: any = {
  show: () => dataUser
}

describe('getUser Service', () => {
  const getUser = getUserFactory({ User: ModelMock })

  test('Should call get user', async (done) => {
    const data = await getUser('id')

    expect(data).toStrictEqual(dataUser)

    done()
  })
})
