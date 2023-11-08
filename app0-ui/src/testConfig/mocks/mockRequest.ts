import { http } from 'msw'
import { server } from './server'

class MockRequest {
  mockrequest(method: string, endpoint: string, status: number, response: any) {
    server.use(
      http[method.toLowerCase()](
        endpoint, (res, ctx) => {
          return res(
            ctx.status(status),
            ctx.json(response)
          )
        }
      )
    )
  }
}

const mockRequest = new MockRequest()

export default mockRequest
