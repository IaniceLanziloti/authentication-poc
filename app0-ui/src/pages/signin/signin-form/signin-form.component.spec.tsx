import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AuthProvider } from "react-auth-kit";

import { api } from "../../../libs/api";
import { SigninFormComponent } from "./signin-form.component";


describe("Signin Form component", () => {
  beforeEach(()=>{
    vi.clearAllMocks()
  })

  it("should be able to render a signin form template", async () => {
    const { getByTestId, getByText, getByRole, getByPlaceholderText } = render(
      <AuthProvider 
        authType= {"cookie"}
        authName= {'_auth'}
        cookieDomain={'http://localhost/'}
        cookieSecure={ false }
      >
        <SigninFormComponent />
      </AuthProvider>
    )

    expect(getByTestId('form-actions-wrapper')).toBeInTheDocument()

    const emailInput =  getByPlaceholderText(/email/i)
    expect(emailInput).toBeInTheDocument()
    
    const emailPassword = getByPlaceholderText(/password/i)
    expect(emailPassword).toBeInTheDocument()

    const signinButton = getByText('Sign-in')
    expect(signinButton).toBeInTheDocument()

    const signupButton = getByRole('link',{name:'Don\'t have an account?'})
    expect(signupButton).toBeInTheDocument()
    expect(signupButton).toHaveAttribute('href','/signup')

    const recoveryPasswordButton = getByRole('link',{name:'Forgot your password?'})

    expect(recoveryPasswordButton).toBeInTheDocument()
    expect(recoveryPasswordButton).toHaveAttribute('href','#')
  })

  it("should be able to signin", async () => {
    const accessToken = 'asdasajkasaklksdas.asdkaslkdas.askda'
    const expiresIn = 123123123
    const userData = {
      name:'John Doe',
      email:'johndoe@example.com',
    }

    const mockApi = vi.spyOn(api,'post').mockResolvedValueOnce({
      data:{
        accessToken,
        expiresIn,
        userData
      }
    })

    const mockSignin = vi.hoisted(() => {
      return vi.fn()
    })

    vi.mock('react-auth-kit',async () => {
      const mod = await vi.importActual<typeof import('react-auth-kit')>('react-auth-kit')

      return{
        ...mod,
        useSignIn: vi.fn().mockImplementation(() => mockSignin)
      }
    })

    const { getByTestId, getByText, getByPlaceholderText } = render(
      <AuthProvider 
        authType= {"cookie"}
        authName= {'_auth'}
        cookieDomain={'http://localhost/'}
        cookieSecure={ false }
      >
        <SigninFormComponent />
      </AuthProvider>
    )

    expect(getByTestId('form-actions-wrapper')).toBeInTheDocument()

    const emailInput =  getByPlaceholderText(/email/i)
    await userEvent.type(emailInput,'johndoe@example.com')

    const emailPassword = getByPlaceholderText(/password/i)
    await userEvent.type(emailPassword,'123456')
    
    await waitFor(() => {
      expect(emailInput).toHaveValue('johndoe@example.com')
      expect(emailPassword).toHaveValue('123456')
    },{ timeout: 250 })

    const signinButton = getByText('Sign-in')
    await userEvent.click(signinButton)

    expect(mockApi).toHaveBeenCalledOnce()
    expect(mockApi).toHaveBeenCalledWith('/signin',{
      email: 'johndoe@example.com',
      password: '123456'
    })

    expect(mockSignin).toHaveBeenCalledOnce()
    expect(mockSignin).toHaveBeenCalledWith({
      token: accessToken,
      expiresIn,
      tokenType: "Bearer",
      authState: userData
    })
  })
  
})