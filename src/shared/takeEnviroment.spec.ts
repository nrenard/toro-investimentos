import { takeEnviroment } from './index'

describe('takeEnviroment Shareds', () => {
  test('Should call takeEnviroment with undefined', () => {
    const response = takeEnviroment('undefined')
    expect(response).toBeFalsy()
  })

  test('Should call takeEnviroment with APP_SECRET', () => {
    const response = takeEnviroment('APP_SECRET')
    expect(response).toBe('toro')
  })
})
