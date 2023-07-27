import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";


export function AppRoutes() {
  const authenticated = useIsAuthenticated()
  const isauthenticated = authenticated()
  
  
  if (!isauthenticated) {
    window.location.assign("http://accounts.authentication-poc.com.br")
  }

  return (
    <Routes>
        <Route path="/" element={
          <RequireAuth loginPath={"/login"}>
            <HomePage/>
          </RequireAuth>
        }/>
    </Routes>
  )
}