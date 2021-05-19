import { badRequest, ok, serverError } from './index'

describe('http Shareds', () => {
  test('Should call badRequest', () => {
    const response = badRequest('teste')
    expect(response).toMatchObject({
      body: {
        error: 'teste'
      },
      statusCode: 400
    })
  })

  test('Should call serverError', () => {
    const response = serverError()
    expect(response).toMatchObject({
      body: {
        error: 'Erro interno.'
      },
      statusCode: 500
    })
  })

  test('Should call ok', () => {
    const response = ok('teste')
    expect(response).toMatchObject({
      body: 'teste',
      statusCode: 200
    })
  })
})
