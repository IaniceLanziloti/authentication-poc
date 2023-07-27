import { Route, Routes } from "react-router-dom";
import { SigninPage, SignupPage } from "../../pages";


export function AppRoutes() {
  return (
    <Routes>
      <Route path ="*" element={<SigninPage/>}/>
      <Route path ="/signup" element={<SignupPage/>}/>
    </Routes>
  )
}