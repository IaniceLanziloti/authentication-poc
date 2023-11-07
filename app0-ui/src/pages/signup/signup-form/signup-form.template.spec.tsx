import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SignupFormTemplate } from "./signup-form.template";

describe('Signup form template', () => {
  it('should be able to render the signup form template', () => {
    const handleSubmit = vi.fn()
    const register = vi.fn()

    const { getByTestId, getByText, getByPlaceholderText} = render(
      <SignupFormTemplate handleSubmit={handleSubmit} register={register}/>
    )

    expect(getByTestId('signup-form-template')).toBeInTheDocument()
    expect(getByPlaceholderText('name')).toBeInTheDocument()
    expect(getByPlaceholderText('email')).toBeInTheDocument()
    expect(getByPlaceholderText('password')).toBeInTheDocument()
    expect(getByText('Register', { selector:'button' } )).toBeInTheDocument()
    expect(getByText('Already have an account?')).toBeInTheDocument()
    expect(getByText('Already have an account?')).toHaveAttribute('href','/login')
  })
})