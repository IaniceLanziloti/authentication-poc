import { http } from  'msw'

import singInMockAPI from '../../pages/signin/signin-form/mocks/signin-mock-api'

export const handlers = [
  http.post('/signin', (res, ctx) => {
    return res(ctx.status(200), ctx.json(singInMockAPI))
  })
]
