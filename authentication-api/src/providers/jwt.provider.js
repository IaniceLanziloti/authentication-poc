import { UserToken } from "../repositories/users-tokens/index.js"
import jwt from "jsonwebtoken"

export class JwtPovider {
  async generate(user) {
    try {
      const payload = {
        _id: user._id,
        roles: user.roles
      }
      const now = Math.floor(Date.now() / 1000);
      const expiresIn = now + 60 * 60 * 24 * 1 
      const refreshTokenExpireIn = now + 60 * 60 * 24 * 30

      const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_PRIVATE_KEY,
        {expiresIn: '1d'}
      )

      const refreshToken = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_PRIVATE_KEY,
        { expiresIn: "30d"}
      )

      const alreadyExistsToken = await UserToken.findOne({ userId: user._id })
      if (alreadyExistsToken)  {
        await UserToken.deleteOne({ _id: alreadyExistsToken._id })
      }

      const userToken = new UserToken({
        userId: user._id,
        token: accessToken,
        refreshToken
      })

      await userToken.save()

      return { accessToken, expiresIn,  refreshToken, refreshTokenExpireIn }
    } catch(err) {
      console.error(err)
      throw new Error("Cannot generate a new token")
    }
  }

  async verifyRefreshToken(refreshToken) {
    const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY

    const user = await UserToken.findOne({ refreshToken })

    if (!user) {
      throw new Error("Invalid refresh token")
    }

    const tokenDetails = jwt.verify(refreshToken, privateKey, { complete: true })
    return tokenDetails
  }
}