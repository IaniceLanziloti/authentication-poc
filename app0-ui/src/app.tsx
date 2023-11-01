
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from 'react-auth-kit'

import './index.css'
import { AppRoutes } from "./components/routes";


function App() {
  const getHostData = (host:string) => {
    const [subdomain, ...rest] = host.split('.')
    const domain = rest.join('.')
    return { subdomain, domain }
  }

  const { domain } = getHostData(window.location.host)

  return (
    <AuthProvider 
      authType= {"cookie"}
      authName= {'_auth'}
      cookieDomain={domain || 'http://localhost/'}
      cookieSecure={window.location.protocol === "https:"}
    >
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
