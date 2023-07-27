import bcrypt from 'bcrypt'

import { User } from "../repositories/users/index.js";
import { JwtPovider } from '../providers/index.js';
import { UserToken } from '../repositories/users-tokens/user-token.model.js';

export class AuthenticationController {
  static async signup(request, response) {
    const { name, email, password, roles } = request.body

    const alreadyExistsUser = await User.findOne({ email })
    if (alreadyExistsUser) {
      return response.status(400).json({
        message: 'User already exists '
      })
    }

    const salt = await bcrypt.genSalt(+process.env.SALT)
    const hashPassword = await bcrypt.hash(password, salt)

    await new User({
      name,
      email,
      password: hashPassword,
      roles
    }).save()

    return response.status(201).json({message: "Your account has been created successfully"})
  }

  static async signin(request, response) {
    try {
      const { email, password } = request.body
      
      const user = await User.findOne({ email })
      if (!user ) {
        return response.status(401).json({ message: "Invalid email or password"})
      }
      
      const validPassword = await bcrypt.compare(password, user.password)
      if (!validPassword) {
        return response.status(401).json({ message: "Invalid email or password"})
      }
      
      const jwtProvider = new JwtPovider()
      
      const token = await jwtProvider.generate(user)
      const userData = {...user.toObject()}
      delete userData.password
      return response.status(200).json({...token, userData})
    } catch(err) {
      console.error(err)
      return response.status(500).json({ message: "Internal Server Error"})
    }
  }

  static async refreshToken(request, response) {
    try {
      const { refreshToken: currentRefreshToken } = request.body
      const jwtProvider = new JwtPovider()
      const currentTokenData = await jwtProvider.verifyRefreshToken(currentRefreshToken)
      const user = await User.findOne({ _id: currentTokenData.payload._id })

      const { accessToken, refreshToken } = await jwtProvider.generate(user)

      return response.status(200).json({
        accessToken,
        refreshToken
      })
    } catch(err) {
      console.error(err)
      return response.status(500).json({ message: "Internal Server Error"})
    }
  }

  static async logout(request, response) {
    try {
      const token = request.headers.authorization.split(' ')[1]
      await UserToken.deleteOne({ token })
      return response.status(204).send()
    } catch(err) {
      console.error(err)
      return response.status(500).json({ message: "Internal Server Error"})
    }
  }
}