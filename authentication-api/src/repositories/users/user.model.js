import { model } from 'mongoose'
import { userSchema } from './user.schema.js'

export const User = model("User", userSchema)