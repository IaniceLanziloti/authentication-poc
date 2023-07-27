import { AuthenticationController } from "../controllers/index.js"

export class AuthenticationRouter {
  static register(server) {
    server.post('/signup', AuthenticationController.signup)
    server.post('/signin', AuthenticationController.signin)
    server.post('/logout', AuthenticationController.logout)
    server.post('/refresh-token', AuthenticationController.refreshToken)
  }
}