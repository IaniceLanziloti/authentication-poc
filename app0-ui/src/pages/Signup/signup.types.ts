import { FormEvent } from "react"
import { UseFormRegister } from "react-hook-form"

export type SignupFormData = {
  name: string
  email: string
  password: string
}

export type SignupTemplateProps = {
  handleSubmit(event: FormEvent<HTMLFormElement>):void,
  register: UseFormRegister<SignupFormData>,
}