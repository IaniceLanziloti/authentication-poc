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
    const mockApi = vi.spyOn(api,'post').mockResolvedValueOnce({
      data:{
        accessToken:'asdasajkasaklksdas.asdkaslkdas.askda',
        expiresIn:123123123
      }
    })

    const mockSignin = vi.hoisted(()=>{
      return vi.fn().mockImplementation(() => vi.fn())
    })

    vi.mock('react-auth-kit',async () =>{
      const mod = await vi.importActual<typeof import('react-auth-kit')>('react-auth-kit')

      return{
        ...mod,
        useSignIn: mockSignin
      }
    })

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

    const emailInput =  getByRole('textbox')
    const emailPassword = getByPlaceholderText(/password/i)
    const signinButton = getByTestId('primary-button')

    await userEvent.type(emailInput,'mzgroup@mzgroup.com')
    await userEvent.type(emailPassword,'123456')
    
    await waitFor(()=>{
      expect(emailInput).toHaveValue('mzgroup@mzgroup.com')
      expect(emailPassword).toHaveValue('123456')
    },{ timeout:250 })

    await userEvent.click(signinButton)

    expect(mockApi).toHaveBeenCalledOnce()
    expect(mockApi).toHaveBeenCalledWith('/signin',{
      email: 'mzgroup@mzgroup.com',
      password: '123456'
    })

    expect(mockSignin).toHaveBeenCalledOnce()

    expect(getByTestId('form-actions-wrapper')).toBeInTheDocument()
    expect(getByText('Sign-in')).toBeInTheDocument()

    const signupButton = getByRole('link',{name:'Don\'t have an account?'})
    expect(signupButton).toBeInTheDocument()
    expect(signupButton).toHaveAttribute('href','/signup')

    const recoveryPasswordButton = getByRole('link',{name:'Forgot your password?'})

    expect(recoveryPasswordButton).toBeInTheDocument()
    expect(recoveryPasswordButton).toHaveAttribute('href','#')
  })
})