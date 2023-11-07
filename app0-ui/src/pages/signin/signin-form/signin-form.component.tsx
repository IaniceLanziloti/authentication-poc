import { SubmitHandler, useForm } from "react-hook-form";
import { SigninFormTemplate } from "./signin-form.template";
import { AuthenticationFormData } from "./signin-form.types";
import { useSignIn } from "react-auth-kit";
import { useCallback } from "react";

import { api } from '../../../libs/api';

export function SigninFormComponent() {
  const {
    register,
    handleSubmit,
  } = useForm<AuthenticationFormData>()

  const signIn = useSignIn()

  const onSubmit: SubmitHandler<AuthenticationFormData> = useCallback(async (data) => {
    // await new Promise(resolve => setTimeout(resolve,2000))

    const response = await api.post('/signin', data)
    const logged = signIn({
      token: response.data.accessToken,
      expiresIn:response.data.expiresIn,
      tokenType: "Bearer",
      authState: response.data.userData
      // refreshToken: response.data.refreshToken, 
      // refreshTokenExpireIn: response.data.refreshTokenExpireIn
    })

    if (logged) {
      window.location.assign('http://app1.authentication-poc.com.br/');
    }

  },[ signIn ])

  return (
    <SigninFormTemplate handleSubmit={handleSubmit(onSubmit)} register={register} />
  )
}