import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { getByText, render } from "@testing-library/react";

import { SignupFormComponent } from "./signup-form.component";
import userEvent from "@testing-library/user-event";
import { api } from "../../../libs/api";

describe('Signup form component', () => {
  beforeAll(() => {
    vi.clearAllMocks()
  })


  // it('should be able to render the signup form component', () => {
  //   const { getByTestId } = render(<SignupFormComponent/>)
  //   expect(getByTestId('signup-form-template')).toBeInTheDocument()
  // })

  it('should be able to signup', async () => {
    const mockApi = vi.spyOn(api,'post').mockResolvedValueOnce({ data:{} })
    const mockNavigate = vi.hoisted(() => {
      return vi.fn()
    })

    vi.mock('react-router-dom', async () =>{
      const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
      return {
        ...mod,
        useNavigate: vi.fn().mockImplementationOnce(()=> mockNavigate )
      }
    })

    const { getByTestId, getByPlaceholderText, getByText } = render(<SignupFormComponent/>)

    expect(getByTestId('signup-form-template')).toBeInTheDocument()

    const nameInput = getByPlaceholderText(/name/i)
    await userEvent.type(nameInput, 'John Doe')

    const emailInput = getByPlaceholderText(/email/i)
    await userEvent.type(emailInput,'johndoe@test.com')

    const passwordInput = getByPlaceholderText(/password/i)
    await userEvent.type(passwordInput,'123456')

    const registerButton = getByText(/Register/i)

    await userEvent.click(registerButton)

    expect(mockApi).toHaveBeenCalledOnce()
    expect(mockNavigate).toHaveBeenCalledOnce()
    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })
})