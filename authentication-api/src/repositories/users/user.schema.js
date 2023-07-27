import { Schema } from 'mongoose'

export const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    enum: ['user', 'admin'],
    default: ['user']
  }
})

