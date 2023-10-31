import { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import { api } from '../../libs/api';

import { SignupPageTemplate } from "./signup.template";
import { SignupFormData } from './signup-form/signup-form.types';



export function SignupPage() {
  const {
    register,
    handleSubmit,
  } = useForm<SignupFormData>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignupFormData> = useCallback( async (data) => {
    await api.post('/signup', data)
    navigate('/login')
  },[ navigate ])

  return <SignupPageTemplate handleSubmit={handleSubmit(onSubmit)} register={register}/>
}