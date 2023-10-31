import { FormEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export type AuthenticationFormData = {
  email: string
  password: string
}

export interface SigninFormProps {
  handleSubmit(event:FormEvent<HTMLFormElement>):void
  register: UseFormRegister<AuthenticationFormData>
}