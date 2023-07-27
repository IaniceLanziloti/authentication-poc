import { model } from "mongoose";
import { userTokenSchema } from "./user-token.schema.js";

export const UserToken = model('UserToken', userTokenSchema)