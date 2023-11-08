import { faker } from '@faker-js/faker'

import userMock from './user-mock'

class SingInMockAPI {
  token: string
  expiresIn: string
  tokenType: string
  authState: {
    name: string
    email: string
  }

  constructor() {
    this.token = faker.string.hexadecimal({ length: 35 }),
    this.expiresIn = faker.string.hexadecimal({ length: 35 }),
    this.tokenType = "Bearer",
    this.authState = userMock
  }
}

const singInMockAPI = new SingInMockAPI()

export default singInMockAPI