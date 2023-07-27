import { useAuthUser, useSignOut  } from "react-auth-kit";
import { HeaderTemplate } from "./header.template";
import { UserObject } from "./header.types";

export function Header() {
  const auth = useAuthUser()
  const user = auth()
  const signOut = useSignOut()

  const handleLogout = () => {
    signOut()
    window.location.assign("http://accounts.authentication-poc.com.br/login")
  }

  return <HeaderTemplate user={user as UserObject} handleLogout={handleLogout}/>
}