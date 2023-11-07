import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AuthProvider } from "react-auth-kit";
import { SigninPage } from "./signin.component";

describe('Signin page component', () => {
  it('should be able to render a Signin page component', () => {
    const { getByTestId } = render(
      <AuthProvider
        authType={'cookie'}
        authName={'_auth'}
        cookieDomain={'http://localhost/'}
        cookieSecure={ false }
      >
        <SigninPage/>
      </AuthProvider>
    )

    expect(getByTestId('signin-page-container')).toBeInTheDocument()
  })
})