import { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSignIn } from 'react-auth-kit';

import { api } from '../../libs/api';

import { SigninPageTemplate } from "./signin.template";
import { AuthenticationFormData } from './signin-form/signin-form.types';


export function SigninPage() {
  const {
    register,
    handleSubmit,
  } = useForm<AuthenticationFormData>()

  const signIn = useSignIn()

  const onSubmit: SubmitHandler<AuthenticationFormData> = useCallback(async (data) => {

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


  return <SigninPageTemplate handleSubmit={handleSubmit(onSubmit)} register={ register }/>
}