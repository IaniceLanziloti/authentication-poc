import { Schema } from 'mongoose'

export const userTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, 
    required: true
  },
  token: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 24 * 60 * 60 
  }
})