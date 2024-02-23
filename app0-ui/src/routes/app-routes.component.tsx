import { Route, Routes } from "react-router-dom";
import { SigninPageComponent, SignupPageComponent } from "../pages";


export function AppRoutes() {
  return (
    <Routes>
      <Route path ="*" element={<SigninPageComponent/>}/>
      <Route path ="/signup" element={<SignupPageComponent/>}/>
    </Routes>
  )
}