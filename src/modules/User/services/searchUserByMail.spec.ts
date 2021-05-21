import searchUserByMailFactory from './searchUserByMail'

const dataUser = {
  name: 'Teste TEste',
  mail: 'a@a.com',
  password: 'pass'
}

const ModelMock: any = {
  findByMail: () => dataUser
}

describe('searchUserByMail Service', () => {
  const searchUserByMail = searchUserByMailFactory({ User: ModelMock })

  test('Should call find by mail', async (done) => {
    const data = await searchUserByMail('a@a.com')

    expect(data).toStrictEqual(dataUser)

    done()
  })
})
