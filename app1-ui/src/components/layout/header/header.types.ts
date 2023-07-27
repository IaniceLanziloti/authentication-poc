import { AuthStateUserObject } from "react-auth-kit/dist/types"

export type UserObject = AuthStateUserObject & {
  name: string
}

export type HeaderTemplateProps = {
  handleLogout():void
  user: UserObject
}