import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

import { SigninFormTemplate } from "./signin-form.template";

describe("Signin Form template", () => {
  it("should be able to render a signin form template", () => {
    async function handleSubmit () {
      return
    }

    function register(params:any):any {
      return
    }

    const { getByTestId, getByText, getByRole } = render(
      <SigninFormTemplate
        handleSubmit={handleSubmit}
        register={register}
      />
    )

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