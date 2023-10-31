import { FormEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { AuthenticationFormData } from "./signin-form/signin-form.types";

export interface SigninTemplateProps {
  handleSubmit(event:FormEvent<HTMLFormElement>):void
  register: UseFormRegister<AuthenticationFormData>
}