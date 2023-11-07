import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {SigninPageTemplate} from './signin.template'
import { AuthProvider } from "react-auth-kit";

describe('Signin page template', () => {
  it('should be able to render a signin page template', () => {
    const { getByTestId } = render(
      <AuthProvider
        authType={'cookie'}
        authName={'_auth'}
        cookieDomain={'http://localhost/'}
        cookieSecure={ false }
      >
        <SigninPageTemplate/>
      </AuthProvider>
    )

    expect(getByTestId('signin-page-container')).toBeInTheDocument()
    expect(getByTestId('signin-form-template')).toBeInTheDocument()
  })
})