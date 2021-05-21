import { badRequest, ok, create, serverError, notAuthorized } from './index'

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

  test('Should call create', () => {
    const response = create('teste')
    expect(response).toMatchObject({
      body: 'teste',
      statusCode: 201
    })
  })

  test('Should call notAuthorized', () => {
    const response = notAuthorized()
    expect(response).toMatchObject({
      body: { error: 'Not authorized.' },
      statusCode: 401
    })
  })
})
