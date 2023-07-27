import { useForm, SubmitHandler } from 'react-hook-form'

import { SignupPageTemplate } from "./signup.template";
import { SignupFormData } from './signup.types';
import { api } from '../../libs/api';
import { useNavigate } from 'react-router-dom';


export function SignupPage() {
  const {
    register,
    handleSubmit,
  } = useForm<SignupFormData>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    await api.post('/signup', data)
    navigate('/login')
  }

  return <SignupPageTemplate handleSubmit={handleSubmit(onSubmit)} register={register}/>
}