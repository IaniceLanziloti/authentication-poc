import { faker } from "@faker-js/faker"

class UserMock {
  name: string
  email: string

  constructor() {
    this.name = faker.person.firstName()
    this.email = faker.internet.email()
  }
}

const userMock = new UserMock()

export default userMock