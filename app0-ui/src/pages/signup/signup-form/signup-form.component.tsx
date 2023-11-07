import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { SignupFormTemplate } from "./signup-form.template";
import { SignupFormData } from "./signup-form.types";

import { api } from "../../../libs/api";


export function SignupFormComponent() {
  const {
    register,
    handleSubmit,
  } = useForm<SignupFormData>()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignupFormData> = useCallback( async (data) => {
    await api.post('/signup', data)
    navigate('/login')
  },[ navigate ])

  return (
    <SignupFormTemplate handleSubmit={handleSubmit(onSubmit)} register={register}/>
  )
}